import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { launchQABrowser, captureEvidence } from "./browser-runtime.mjs";
const output = await mkdtemp(
  path.join(tmpdir(), "word-wheel-profile-settings-"),
);
let browser;
try {
  execFileSync("bun", [
    "build",
    "scripts/qa/practice-store.fixture.ts",
    "--target=browser",
    "--outfile",
    path.join(output, "fixture.js"),
  ]);
  const fixture = await readFile(path.join(output, "fixture.js"), "utf8");
  browser = await launchQABrowser();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const button = (name) =>
    page.getByRole("button", { name, exact: typeof name === "string" });
  const row = (title) =>
    page
      .locator(".task-row")
      .filter({ has: page.getByText(title, { exact: true }) });
  const state = () =>
    page.evaluate(() => window.practiceQA.readPracticeState());
  async function capture(name) {
    await page.locator(".practice-shell").evaluate((el) => el.scrollTo(0, 0));
    await page
      .locator(".practice-shell img")
      .evaluateAll((images) =>
        Promise.all(
          images
            .filter((img) => img.getBoundingClientRect().width)
            .map((img) => img.decode()),
        ),
      );
    await captureEvidence(page, name);
  }
  async function pair(name) {
    await page.setViewportSize({ width: 390, height: 844 });
    await capture(`${name}-mobile`);
    await page.setViewportSize({ width: 1440, height: 900 });
    await capture(`${name}-desktop`);
    await page.setViewportSize({ width: 390, height: 844 });
  }
  async function reflow() {
    for (const [width, height, size] of [
      [320, 568, "100%"],
      [390, 844, "200%"],
      [844, 390, "100%"],
      [1440, 900, "200%"],
    ]) {
      await page.setViewportSize({ width, height });
      await page.evaluate(
        (size) => (document.documentElement.style.fontSize = size),
        size,
      );
      assert.equal(
        await page
          .locator(".practice-shell")
          .evaluate((el) => el.scrollWidth > el.clientWidth),
        false,
        `No overflow at ${width}/${size}`,
      );
      assert.equal(
        await page
          .locator(".sound-picker-grid label")
          .evaluateAll((labels) =>
            labels.some((label) => label.scrollWidth > label.clientWidth + 1),
          ),
        false,
        `Picker labels fit at ${width}/${size}`,
      );
      const action = page.locator(".task-actions button");
      if (await action.count()) {
        await action.scrollIntoViewIfNeeded();
        const bounds = await action.boundingBox();
        assert.ok(
          bounds.height >= 52 &&
            bounds.y >= 0 &&
            bounds.y + bounds.height <= height + 1,
          "Save remains reachable",
        );
      }
    }
    await page.evaluate(
      () => (document.documentElement.style.fontSize = "100%"),
    );
    await page.setViewportSize({ width: 390, height: 844 });
  }
  await page.goto("http://localhost:3000/ro/practice");
  await button("Merg la profiluri").click();
  await page.addScriptTag({ content: fixture });
  await page.evaluate(async () => {
    const a = window.practiceQA;
    await a.mutatePracticeState((s) => {
      a.saveProfile(s, { nickname: "Alex", avatar: a.AVATAR_WORD_IDS[0] });
      a.saveProfile(s, { nickname: "Ana", avatar: a.AVATAR_WORD_IDS[1] });
      a.saveGoal(s, s.profiles[0].id, "R");
    });
  });
  await button(/Alex/).click();
  assert.equal(await page.locator(".profile-panel details").count(), 0);
  await pair("profile-menu");
  await reflow();
  await row("Sunete urmărite").click();
  await button("Adaugă un sunet").click();
  assert.equal(await page.locator(".sound-picker select").count(), 0);
  assert.equal(
    await page
      .getByRole("radio", { name: "R deja urmărit", exact: true })
      .isDisabled(),
    true,
  );
  await button("Grupuri de litere").click();
  await page.getByRole("radio", { name: "CHE", exact: true }).check();
  await button("Adaugă CHE").waitFor();
  await reflow();
  await page.evaluate(() => (document.documentElement.style.fontSize = "200%"));
  await capture("sound-groups-200-mobile");
  await page.evaluate(() => (document.documentElement.style.fontSize = "100%"));
  assert.equal(
    (await state()).profiles[0].goals.length,
    1,
    "Picking alone saves nothing",
  );
  await button("Litere").click();
  await page.getByRole("radio", { name: "S", exact: true }).check();
  await page.getByRole("radio", { name: "S", exact: true }).press("ArrowRight");
  assert.equal(
    await page.getByRole("radio", { name: "Ș", exact: true }).isChecked(),
    true,
  );
  await page.getByRole("radio", { name: "Ș", exact: true }).press("ArrowLeft");
  await pair("sound-picker");
  await reflow();
  await page.evaluate(() => {
    window.qaPut = IDBObjectStore.prototype.put;
    IDBObjectStore.prototype.put = function () {
      throw new DOMException("QA quota", "QuotaExceededError");
    };
  });
  await button("Adaugă S").click();
  await page.locator(".practice-alert").waitFor();
  assert.equal(
    await page.getByRole("radio", { name: "S", exact: true }).isChecked(),
    true,
    "Save failure preserves the selection",
  );
  await page.evaluate(() => {
    IDBObjectStore.prototype.put = window.qaPut;
  });
  await button("Adaugă S").click();
  assert.deepEqual(
    (await state()).profiles[0].goals.map((g) => g.label),
    ["R", "S"],
  );
  await row("S").click();
  await button("Arhivează sunetul").click();
  const id = (await state()).profiles[0].goals[1].id;
  await button("Adaugă un sunet").click();
  await page.getByRole("radio", { name: "S", exact: true }).check();
  await button("Reactivează S").click();
  assert.equal((await state()).profiles[0].goals[1].id, id);
  assert.equal((await state()).profiles[0].goals.length, 2);
  await button("Înapoi la profil").click();
  await row("Pronunție").click();
  await row("R").click();
  assert.equal(await button("Salvează observația").isDisabled(), true);
  assert.equal(await page.getByRole("slider").count(), 0);
  await page
    .getByRole("radio", { name: "Aproape corect", exact: true })
    .check();
  await pair("pronunciation-rating");
  await reflow();
  await button("Salvează observația").click();
  let saved = await state();
  assert.equal(saved.observations.length, 1);
  assert.equal(saved.observations[0].rating, 4);
  assert.equal(saved.awards.length, 0);
  await row("Istoricul observațiilor").click();
  await button("Corectează observația").click();
  await page
    .getByRole("radio", { name: "Nu reușește încă", exact: true })
    .check();
  await button("Salvează corectarea").click();
  saved = await state();
  assert.equal(saved.observations[1].rating, 0);
  assert.equal(saved.observations[1].correctsId, saved.observations[0].id);
  assert.equal(saved.awards.length, 0);
  await row("Sărbătorește un progres").click();
  assert.equal(await button("La următoarea exersare").isDisabled(), true);
  await page.getByRole("radio", { name: "R", exact: true }).check();
  await button("La următoarea exersare").click();
  assert.equal((await state()).awards.length, 1);
  await button("Înapoi la profil").click();
  await row("Setările profilului").click();
  await pair("profile-settings");
  await button("Șterge profilul").click();
  await button("Anulează").click();
  assert.equal((await state()).profiles.length, 2);
  await row("Nume și personaj").click();
  await page
    .getByLabel("Numele din joc", { exact: true })
    .fill("Alex · nume schimbat");
  await button("Salvează profilul").click();
  assert.equal((await state()).profiles[0].nickname, "Alex · nume schimbat");
  await row("Copie de siguranță").click();
  await page
    .getByRole("heading", { name: "Date și copii de siguranță" })
    .waitFor();
  await button("Setările profilului").click();
  await button("Înapoi la profil").click();
  await row("Sunete urmărite").click();
  await page.goBack();
  await page
    .getByRole("heading", { name: "Alex · nume schimbat", exact: true })
    .waitFor();
  await page.goForward();
  await page
    .getByRole("heading", { name: "Sunete urmărite", exact: true })
    .waitFor();
  await button("Înapoi la profil").click();
  await button("Toți copiii").click();
  await button(/Ana/).click();
  await row("Pronunție").click();
  await button("Adaugă un sunet").waitFor();
  assert.equal((await state()).profiles[1].goals.length, 0);
  await button("Înapoi la profil").click();
  await button("Toți copiii").click();
  await button(/Alex · nume schimbat/).click();
  await page
    .getByRole("heading", { name: "Alex · nume schimbat", exact: true })
    .waitFor();
  assert.deepEqual(errors, []);
  await context.close();
  console.log(
    "Profile settings passed: focused navigation, large picker, duplicate prevention, archive/reactivation identity, unrated and zero ratings, corrections, separate medals, profile edit, backup access, Back/Forward, isolation and responsive reflow.",
  );
} finally {
  await browser?.close();
  await rm(output, { recursive: true, force: true });
}
