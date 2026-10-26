import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { launchQABrowser, captureEvidence } from "./browser-runtime.mjs";

const output = await mkdtemp(path.join(tmpdir(), "word-wheel-children-"));
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
    reducedMotion: "reduce",
    hasTouch: true,
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const button = (name) =>
    page.getByRole("button", { name, exact: typeof name === "string" });
  const inject = () => page.addScriptTag({ content: fixture });
  const state = () =>
    page.evaluate(() => window.practiceQA.readPracticeState());
  async function capture(name) {
    await page.locator(".practice-shell").evaluate((el) => el.scrollTo(0, 0));
    await page
      .locator(".practice-shell img")
      .evaluateAll((images) =>
        Promise.all(
          images
            .filter((img) => img.getBoundingClientRect().width > 0)
            .map((img) => img.decode()),
        ),
      );
    await captureEvidence(page, name);
  }
  async function prepare() {
    await button("Pregătește o roată").click();
    await button("S").click();
    await button("4 Final").click();
    await button("Pornește roata").click();
    await page
      .getByRole("heading", { name: "Roata lui Alex e gata", exact: true })
      .waitFor();
  }
  await page.goto("http://localhost:3000/ro/practice");
  await button("Merg la profiluri").click();
  await inject();
  await page.evaluate(async () => {
    const api = window.practiceQA;
    await api.mutatePracticeState((s) => {
      api.saveProfile(s, { nickname: "Alex", avatar: api.AVATAR_WORD_IDS[0] });
      api.saveProfile(s, {
        nickname: "Ana Maria · un nume lung pentru profil",
        avatar: api.AVATAR_WORD_IDS[2],
      });
    });
  });
  await button(/Alex/).click();
  await prepare();
  assert.equal(
    (await state()).profiles[0].goals.length,
    0,
    "Setup and preview add no target",
  );
  await capture("target-preview-mobile");
  await page.setViewportSize({ width: 1440, height: 900 });
  await capture("target-preview-desktop");
  await button("Înapoi la profil").click();
  assert.equal(
    (await state()).profiles[0].goals.length,
    0,
    "Abandoning a preview adds nothing",
  );
  await button("Revino la roata pregătită").click();
  await button("Începe exersarea").click();
  await button("Învârte").waitFor();
  let snapshot = await state();
  const goalId = snapshot.profiles[0].goals[0].id;
  assert.equal(snapshot.profiles[0].goals[0].label, "S");
  assert.equal(snapshot.profiles[1].goals.length, 0);
  assert.equal(snapshot.turns.length, 0);
  assert.equal(snapshot.awards.length, 0);
  await button("Învârte").click();
  await page.getByRole("dialog").waitFor();
  await button("Păstrează").click();
  await page
    .getByRole("heading", { name: "Bravo, Alex!", exact: true })
    .waitFor();
  await button(/^Păstrează.*medali/).click();
  await button("Încheie exersarea").click();
  await button("Da, încheiem").click();
  await button("Înapoi la profil").click();
  await page.getByRole("heading", { name: "Alex", exact: true }).waitFor();
  snapshot = await state();
  assert.equal(snapshot.turns.length, 1);
  assert.equal(snapshot.turns[0].practiceGoalId, goalId);
  assert.ok(snapshot.turns[0].goals.every((g) => g.matched === null));
  assert.equal(snapshot.awards.length, 2);
  assert.equal(await page.getByLabel("Ritmul recompenselor").count(), 0);
  await capture("child-profile-desktop");
  await page.setViewportSize({ width: 390, height: 844 });
  await capture("child-profile-mobile");
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
      `No horizontal overflow ${width}/${size}`,
    );
    await button("Pregătește o roată").scrollIntoViewIfNeeded();
    const bounds = await button("Pregătește o roată").evaluate((el) => {
      const r = el.getBoundingClientRect();
      return {
        top: r.top,
        bottom: r.bottom,
        height: r.height,
        viewport: innerHeight,
      };
    });
    assert.ok(
      bounds.top >= -1 &&
        bounds.bottom <= bounds.viewport + 1 &&
        bounds.height >= 51,
      `${width}/${height}/${size}: ${JSON.stringify(bounds)}`,
    );
  }
  await page.evaluate(() => (document.documentElement.style.fontSize = "100%"));
  await page.setViewportSize({ width: 390, height: 844 });
  await button(/^Sunete urmărite/).click();
  await page
    .locator(".task-row")
    .filter({ has: page.getByText("S", { exact: true }) })
    .click();
  await button("Arhivează sunetul").click();
  await page.waitForFunction(
    async () =>
      !(await window.practiceQA.readPracticeState()).profiles[0].goals[0]
        .active,
  );
  await button("Înapoi la profil").click();
  await prepare();
  await button("Începe exersarea").click();
  await button("Învârte").waitFor();
  snapshot = await state();
  assert.equal(snapshot.profiles[0].goals.length, 1);
  assert.equal(snapshot.profiles[0].goals[0].id, goalId);
  assert.equal(snapshot.profiles[0].goals[0].active, true);
  assert.equal(snapshot.turns.length, 1);
  assert.equal(snapshot.awards.length, 2, "Reactivation alone earns nothing");
  await button("Încheie exersarea").click();
  await button("Da, încheiem").click();
  await button("Înapoi la profil").click();
  await button("Toți copiii").click();
  await page.getByRole("heading", { name: "Copii", exact: true }).waitFor();
  await capture("children-menu-mobile");
  await page.setViewportSize({ width: 1440, height: 900 });
  await capture("children-menu-desktop");
  assert.equal(
    await page.locator(".practice-detail").isVisible(),
    false,
    "Desktop list and detail do not compete",
  );
  const alex = button(/Alex/);
  assert.match(await alex.innerText(), /1 cuvânt exersat/);
  assert.match(await alex.innerText(), /2 medalii/);
  assert.match(await alex.innerText(), /Urmărim: S/);
  await button(/Ana Maria/).click();
  await page.setViewportSize({ width: 320, height: 568 });
  assert.equal(
    await page
      .locator(".practice-shell")
      .evaluate((el) => el.scrollWidth > el.clientWidth),
    false,
  );
  assert.equal((await state()).profiles[1].goals.length, 0);
  assert.deepEqual(errors, []);
  await context.close();
  console.log(
    "Child workspace checks passed: focused mobile/desktop navigation, live summaries, no goal on preview/save, target on start, one close/two medals, unknown phonetics, archive/reactivate same history, child isolation, long names, 200% text and short-screen access.",
  );
} finally {
  await browser?.close();
  await rm(output, { recursive: true, force: true });
}
