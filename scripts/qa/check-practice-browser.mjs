import { launchQABrowser, captureEvidence } from "./browser-runtime.mjs";
import { assertActionPainted } from "./assert-action-paint.mjs";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const output = await mkdtemp(path.join(tmpdir(), "word-wheel-practice-"));
function taskRow(page, title) {
  return page
    .locator(".task-row")
    .filter({ has: page.getByText(title, { exact: true }) });
}
async function backToProfile(page) {
  await page
    .getByRole("button", { name: "Înapoi la profil", exact: true })
    .click();
}
async function openSoundSettings(page) {
  await taskRow(page, "Sunete urmărite").click();
}
async function openBackups(page) {
  await taskRow(page, "Setările profilului").click();
  await taskRow(page, "Copie de siguranță").click();
}
async function addSound(page, label) {
  await page
    .getByRole("button", { name: "Adaugă un sunet", exact: true })
    .click();
  await page.getByRole("radio", { name: label, exact: true }).check();
  await page
    .getByRole("button", { name: `Adaugă ${label}`, exact: true })
    .click();
}
let browser;
try {
  execFileSync("bun", [
    "build",
    "scripts/qa/practice-store.fixture.ts",
    "--target=browser",
    "--outfile",
    path.join(output, "fixture.js"),
  ]);
  browser = await launchQABrowser();
  const context = await browser.newContext({ reducedMotion: "no-preference" });
  const unexpectedRequests = [];
  context.on("request", (request) => {
    const url = new URL(request.url());
    if (
      ["http:", "https:"].includes(url.protocol) &&
      (url.origin !== "http://localhost:3000" ||
        !["GET", "HEAD"].includes(request.method()))
    )
      unexpectedRequests.push(
        `${request.method()} ${url.origin}${url.pathname}`,
      );
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("http://localhost:3000/ro/practice");
  await page
    .getByRole("button", { name: "Merg la profiluri", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Adaugă un copil", exact: true })
    .waitFor();
  await page.addScriptTag({
    content: await readFile(path.join(output, "fixture.js"), "utf8"),
  });
  const result = await page.evaluate(async () => {
    const api = window.practiceQA;
    const state = await api.readPracticeState();
    const write = await api.mutatePracticeState(
      (s) =>
        api.saveProfile(s, {
          nickname: "Alex QA",
          avatar: api.AVATAR_WORD_IDS[0],
        }),
      state.revision,
    );
    const before = JSON.stringify(await api.readPracticeState());
    const originalPut = IDBObjectStore.prototype.put;
    let quotaRejected = false;
    try {
      IDBObjectStore.prototype.put = function () {
        throw new DOMException("Simulated quota failure", "QuotaExceededError");
      };
      try {
        await api.mutatePracticeState((s) => {
          s.profiles = [];
        });
      } catch {
        quotaRejected = true;
      }
    } finally {
      IDBObjectStore.prototype.put = originalPut;
    }
    if (JSON.stringify(await api.readPracticeState()) !== before)
      throw Error("Quota failure lost data");
    let rolledBack = false;
    try {
      await api.mutatePracticeState((s) => {
        s.profiles = [];
        throw Error("rollback");
      });
    } catch {
      rolledBack = JSON.stringify(await api.readPracticeState()) === before;
    }
    let staleRejected = false;
    try {
      await api.mutatePracticeState(
        (s) =>
          api.saveProfile(s, {
            nickname: "Stale",
            avatar: api.AVATAR_WORD_IDS[1],
          }),
        state.revision,
      );
    } catch {
      staleRejected = true;
    }
    const commands = await Promise.allSettled([
      api.mutatePracticeState((s) =>
        api.saveProfile(s, {
          nickname: "Mara QA",
          avatar: api.AVATAR_WORD_IDS[1],
        }),
      ),
      api.mutatePracticeState((s) =>
        api.saveProfile(s, {
          nickname: "Ion QA",
          avatar: api.AVATAR_WORD_IDS[2],
        }),
      ),
    ]);
    return {
      rolledBack,
      quotaRejected,
      staleRejected,
      revision: write.revision,
      commands: commands.map((c) => c.status),
      names: (await api.readPracticeState()).profiles.map((p) => p.nickname),
    };
  });
  assert.equal(result.rolledBack, true);
  assert.equal(result.quotaRejected, true);
  assert.equal(result.staleRejected, true);
  assert.deepEqual(result.commands, ["fulfilled", "fulfilled"]);
  assert.deepEqual(result.names.sort(), ["Alex QA", "Ion QA", "Mara QA"]);
  // A deliberate cold navigation should not cancel the old page's prefetches.
  // WebKit reports those cancellations as page errors during document replacement.
  await page.waitForLoadState("networkidle", { timeout: 10000 });
  await page.reload();
  await page.setViewportSize({ width: 390, height: 844 });
  await page
    .getByRole("button", { name: "Adaugă un copil", exact: true })
    .click();
  const longNickname = "Ana Maria · un profil cu nume lung de test".slice(
    0,
    40,
  );
  await page.getByLabel("Numele din joc", { exact: true }).fill(longNickname);
  await page.locator(".practice-avatar-picker input").nth(2).check();
  await page
    .getByRole("button", { name: "Salvează profilul", exact: true })
    .click();
  await page
    .getByRole("heading", { name: longNickname, exact: true })
    .waitFor();
  await taskRow(page, "Setările profilului").click();
  await taskRow(page, "Nume și personaj").click();
  const editedNickname = `${longNickname.slice(0, 30)} · editat`;
  await page.getByLabel("Numele din joc", { exact: true }).fill(editedNickname);
  await page.locator(".practice-avatar-picker input").nth(1).check();
  await page
    .getByRole("button", { name: "Salvează profilul", exact: true })
    .click();
  await page
    .getByRole("heading", { name: "Setările profilului", exact: true })
    .waitFor();
  await page.setViewportSize({ width: 320, height: 568 });
  assert.equal(
    await page
      .locator(".practice-shell")
      .evaluate((el) => el.scrollWidth > el.clientWidth),
    false,
    "Long child names fit a small phone",
  );
  await page
    .getByRole("button", { name: "Șterge profilul", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Da, șterge profilul", exact: true })
    .click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.getByRole("button", { name: /Alex QA/ }).click();
  await openSoundSettings(page);
  await addSound(page, "Ș");
  await taskRow(page, "Ș").click();
  assert.equal(await page.getByLabel("Ritmul recompenselor").count(), 0);
  await page
    .getByRole("button", { name: "Arhivează sunetul", exact: true })
    .click();
  await taskRow(page, "Ș").click();
  await page
    .getByRole("button", { name: "Reactivează sunetul", exact: true })
    .click();
  await backToProfile(page);
  await page.getByRole("button", { name: "Toți copiii", exact: true }).click();
  await page.getByRole("button", { name: /Mara QA/ }).click();
  await openSoundSettings(page);
  await page
    .getByText("Adăugați un sunet pentru a nota pronunția", { exact: false })
    .waitFor();
  for (const [width, height] of [
    [390, 844],
    [320, 568],
    [844, 390],
    [768, 1024],
    [1024, 768],
    [1440, 900],
  ]) {
    await page.setViewportSize({ width, height });
    assert.equal(
      await page
        .locator(".practice-shell")
        .evaluate((el) => el.scrollWidth > el.clientWidth),
      false,
      `No horizontal overflow ${width}×${height}`,
    );
  }
  await backToProfile(page);
  await taskRow(page, "Setările profilului").click();
  await page
    .getByRole("button", { name: "Șterge profilul", exact: true })
    .click();
  await page.getByRole("button", { name: "Anulează", exact: true }).click();
  await page
    .getByRole("heading", { name: "Setările profilului", exact: true })
    .waitFor();
  await page
    .getByRole("button", { name: "Șterge profilul", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Da, șterge profilul", exact: true })
    .click();
  await page
    .getByRole("button", { name: /Mara QA/ })
    .waitFor({ state: "hidden" });
  await page.getByRole("button", { name: /Alex QA/ }).waitFor();
  assert.equal(await page.getByRole("button", { name: /Mara QA/ }).count(), 0);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: /Alex QA/ }).click();
  const prepareButton = page.getByRole("button", {
    name: "Pregătește o roată",
    exact: true,
  });
  const prepareBounds = await prepareButton.boundingBox();
  assert.ok(
    prepareBounds &&
      prepareBounds.y >= 0 &&
      prepareBounds.y + prepareBounds.height <= 844,
    "Mobile primary action is visible without scrolling",
  );
  assert.equal(
    await page.locator(".practice-profiles").isVisible(),
    false,
    "Mobile child detail hides the profile list",
  );
  await page.getByRole("button", { name: "Toți copiii", exact: true }).click();
  await page.getByRole("button", { name: /Alex QA/ }).click();
  await prepareButton.click();
  await page.getByRole("button", { name: "S", exact: true }).click();
  await page.getByRole("button", { name: "4 Final", exact: true }).click();
  await page
    .getByText("Salvează roata pentru altă dată", { exact: true })
    .click();
  await page
    .getByLabel("Nume configurație", { exact: true })
    .fill("Partajată QA");
  await page
    .getByRole("button", { name: "Salvează ca nouă", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Pornește roata", exact: true })
    .click();
  const prepared = await page
    .locator(".practice-word-preview li")
    .allTextContents();
  await page
    .getByRole("button", { name: "Înapoi la profil", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Revino la roata pregătită", exact: true })
    .click();
  assert.deepEqual(
    await page.locator(".practice-word-preview li").allTextContents(),
    prepared,
    "Returning to the profile preserves the actual prepared wheel",
  );
  await page
    .getByRole("button", { name: "Începe exersarea", exact: true })
    .click();
  await page.getByRole("button", { name: "Învârte", exact: true }).waitFor();
  const initialLabels = await page
    .locator(".word-wheel__label")
    .allTextContents();
  for (const [width, height] of [
    [390, 844],
    [320, 568],
    [844, 390],
    [568, 320],
    [1440, 900],
  ]) {
    await page.setViewportSize({ width, height });
    const rects = await page
      .locator(".wheel-wrap,.game-panel,.game-actions,.tracked-progress")
      .evaluateAll((elements) =>
        elements.map((el) => {
          const r = el.getBoundingClientRect();
          return { x: r.x, y: r.y, right: r.right, bottom: r.bottom };
        }),
      );
    assert.ok(
      rects.every(
        (r) => r.x >= 0 && r.y >= 0 && r.right <= width && r.bottom <= height,
      ),
      `Tracked game fits ${width}×${height}`,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  assert.deepEqual(initialLabels, prepared);
  await page.addScriptTag({
    content: await readFile(path.join(output, "fixture.js"), "utf8"),
  });
  const counts = () =>
    page.evaluate(async () => {
      const s = await window.practiceQA.readPracticeState();
      return {
        turns: s.turns.length,
        awards: s.awards.length,
        pending: s.sessions.filter((s) => s.pending).length,
      };
    });
  const other = await context.newPage();
  await other.goto("http://localhost:3000/ro/practice");
  await other.getByRole("button", { name: /Alex QA/ }).click();
  await other
    .getByRole("button", { name: "Reia exersarea", exact: true })
    .click();
  await other
    .getByText("Exersarea este deja deschisă", { exact: false })
    .waitFor();
  await other.close();
  await page.getByRole("button", { name: "Învârte", exact: true }).click();
  await page.getByRole("dialog").waitFor();
  await page
    .getByRole("button", { name: "Păstrează", exact: true })
    .waitFor({ state: "visible" });
  await page.waitForFunction(async () =>
    (await window.practiceQA.readPracticeState()).sessions.some(
      (s) => s.pending,
    ),
  );
  assert.deepEqual(await counts(), { turns: 0, awards: 0, pending: 1 });
  await page.getByRole("button", { name: "Păstrează", exact: true }).click();
  await page
    .getByRole("heading", { name: "Bravo, Alex QA!", exact: true })
    .waitFor();
  await page.getByRole("button", { name: "Floare", exact: true }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Floare", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.setViewportSize({ width: 390, height: 844 });
  assert.ok(
    await page.locator("canvas").count(),
    "Animated reward test has live confetti",
  );
  const animatedScreenshot = await captureEvidence(
    page,
    "mobile-medal-during-celebration",
  );
  await assertActionPainted(
    page,
    ".practice-medal-save",
    "Medal save during confetti after resize",
    animatedScreenshot,
  );
  for (const [width, height] of [
    [320, 568],
    [390, 844],
    [568, 320],
    [844, 390],
    [1440, 900],
  ]) {
    await page.setViewportSize({ width, height });
    const controls = await page
      .locator(".practice-celebration button")
      .evaluateAll((buttons) =>
        buttons.map((button) => {
          const r = button.getBoundingClientRect();
          return {
            x: r.x,
            y: r.y,
            right: r.right,
            bottom: r.bottom,
            height: r.height,
          };
        }),
      );
    assert.ok(
      controls.every(
        (r) =>
          r.x >= 0 &&
          r.y >= 0 &&
          r.right <= width &&
          r.bottom <= height &&
          r.height >= 48,
      ),
      `Medal choices/save fit ${width}×${height}`,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  // Exercise resizing while confetti is active, then inspect the static result.
  await page.waitForFunction(
    () => document.querySelectorAll("canvas").length === 0,
    null,
    { timeout: 10000 },
  );
  const medalScreenshot = await captureEvidence(page, "mobile-first-medal");
  await assertActionPainted(
    page,
    ".practice-medal-save",
    "Medal save after desktop-to-phone resize",
    medalScreenshot,
  );
  for (const [width, height, name] of [
    [1440, 900, "desktop-medal"],
    [568, 320, "landscape-medal"],
  ]) {
    await page.setViewportSize({ width, height });
    const screenshot = await captureEvidence(page, name);
    await assertActionPainted(page, ".practice-medal-save", name, screenshot);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  assert.deepEqual(await counts(), { turns: 1, awards: 2, pending: 0 });
  await page.getByRole("button", { name: /^Păstrează.*medali/ }).click();
  await page.getByRole("button", { name: "Învârte", exact: true }).waitFor();
  assert.equal(
    await page.evaluate(
      async () =>
        (await window.practiceQA.readPracticeState()).awards[0].variant,
    ),
    "flower",
  );
  assert.deepEqual(
    await page.locator(".word-wheel__label").allTextContents(),
    initialLabels,
  );
  await page.getByRole("button", { name: "Învârte", exact: true }).click();
  await page.getByRole("dialog").waitFor();
  await page.waitForFunction(async () =>
    (await window.practiceQA.readPracticeState()).sessions.some(
      (s) => s.pending,
    ),
  );
  await page.reload();
  // Reload now preserves the selected child's workspace.
  await page.getByRole("heading", { name: "Alex QA", exact: true }).waitFor();
  await page
    .getByRole("button", { name: "Reia exersarea", exact: true })
    .click();
  await page.getByRole("button", { name: "Învârte", exact: true }).waitFor();
  await page.addScriptTag({
    content: await readFile(path.join(output, "fixture.js"), "utf8"),
  });
  assert.deepEqual(await counts(), { turns: 2, awards: 2, pending: 0 });
  assert.deepEqual(
    await page.locator(".word-wheel__label").allTextContents(),
    initialLabels,
  );
  await page
    .getByRole("button", { name: "Încheie exersarea", exact: true })
    .click();
  await page.getByRole("button", { name: "Continuăm", exact: true }).click();
  await page.getByRole("button", { name: "Învârte", exact: true }).waitFor();
  await page
    .getByRole("button", { name: "Încheie exersarea", exact: true })
    .click();
  await page.getByRole("button", { name: "Da, încheiem", exact: true }).click();
  await page.getByRole("heading", { name: /Exersare încheiată/ }).waitFor();
  assert.deepEqual(await counts(), { turns: 2, awards: 2, pending: 0 });
  await page
    .getByRole("button", { name: "Înapoi la profil", exact: true })
    .click();
  await page.setViewportSize({ width: 390, height: 844 });
  await taskRow(page, "Pronunție").click();
  await taskRow(page, "S").click();
  await page
    .getByRole("radio", { name: "Aproape corect", exact: true })
    .check();
  await page
    .getByRole("button", { name: "Salvează observația", exact: true })
    .click();
  await page.waitForFunction(
    async () =>
      (await window.practiceQA.readPracticeState()).observations.length === 1,
  );
  await taskRow(page, "S").click();
  await page
    .getByRole("radio", { name: "Foarte dificil", exact: true })
    .check();
  await page
    .getByRole("button", { name: "Salvează observația", exact: true })
    .click();
  await page.waitForFunction(
    async () =>
      (await window.practiceQA.readPracticeState()).observations.length === 2,
  );
  assert.equal(
    (await counts()).awards,
    2,
    "A lower rating cannot remove or create an award",
  );
  await taskRow(page, "Sărbătorește un progres").click();
  await page.getByRole("radio", { name: "S", exact: true }).check();
  await page
    .getByRole("button", { name: "La următoarea exersare", exact: true })
    .click();
  await page.waitForFunction(
    async () =>
      (await window.practiceQA.readPracticeState()).awards.length === 3,
  );
  await backToProfile(page);
  await openBackups(page);
  await page
    .getByLabel("Ce include copia", { exact: true })
    .selectOption({ label: "Doar Alex QA" });
  await page
    .getByLabel("Parola copiei", { exact: true })
    .fill("synthetic-test-password-123");
  await page
    .getByLabel("Repetă parola", { exact: true })
    .fill("synthetic-test-password-123");
  const downloadEvent = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "Descarcă copia protejată", exact: true })
    .click();
  const download = await downloadEvent;
  const file = path.join(output, "child.wwbackup");
  await download.saveAs(file);
  assert.equal((await readFile(file, "utf8")).includes("Alex QA"), false);
  const original = await page.evaluate(
    async () => await window.practiceQA.readPracticeState(),
  );
  assert.equal(
    original.configurations.length,
    1,
    "Legacy library is synchronized before export",
  );
  await page
    .getByRole("button", { name: "Setările profilului", exact: true })
    .click();
  await backToProfile(page);
  await openSoundSettings(page);
  await addSound(page, "R");
  await backToProfile(page);
  await openBackups(page);
  await page
    .getByLabel("Fișier de siguranță (.wwbackup)", { exact: true })
    .setInputFiles(file);
  await page
    .getByLabel("Parola fișierului", { exact: true })
    .fill("wrong-password");
  await page
    .getByRole("button", { name: "Verifică fișierul", exact: true })
    .click();
  await page.getByText("Parola nu este corectă", { exact: false }).waitFor();
  assert.equal(
    await page.evaluate(
      async () =>
        (await window.practiceQA.readPracticeState()).profiles.find(
          (p) => p.nickname === "Alex QA",
        ).goals.length,
    ),
    3,
  );
  await page
    .getByLabel("Parola fișierului", { exact: true })
    .fill("synthetic-test-password-123");
  await page
    .getByRole("button", { name: "Verifică fișierul", exact: true })
    .click();
  await page
    .getByRole("heading", {
      name: "Ce veți recupera",
      exact: true,
    })
    .waitFor();
  await page
    .getByRole("heading", { name: "Ce veți recupera", exact: true })
    .evaluate((heading) => heading.scrollIntoView({ block: "start" }));
  await captureEvidence(page, "mobile-restore-preview");
  await page
    .getByLabel("Am înțeles ce date se înlocuiesc.", { exact: false })
    .check();
  await page
    .getByRole("button", {
      name: "Restaurează copia",
      exact: true,
    })
    .click();
  await page.getByText("Copia a fost restaurată.", { exact: false }).waitFor();
  const restored = await page.evaluate(
    async () => await window.practiceQA.readPracticeState(),
  );
  assert.equal(
    restored.profiles.find((p) => p.nickname === "Alex QA").goals.length,
    2,
  );
  assert.deepEqual(
    restored.profiles.find((p) => p.nickname === "Ion QA"),
    original.profiles.find((p) => p.nickname === "Ion QA"),
  );
  assert.deepEqual(restored.configurations, original.configurations);
  assert.equal(restored.turns.length, 2);
  assert.equal(restored.observations.length, 2);
  assert.equal(restored.awards.length, 3);
  await taskRow(page, "Date și setări").click();
  await page
    .getByLabel("Ce include copia", { exact: true })
    .selectOption("all");
  await page
    .getByLabel("Parola copiei", { exact: true })
    .fill("synthetic-test-password-123");
  await page
    .getByLabel("Repetă parola", { exact: true })
    .fill("synthetic-test-password-123");
  const allDownloadEvent = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "Descarcă copia protejată", exact: true })
    .click();
  const allFile = path.join(output, "all.wwbackup");
  await (await allDownloadEvent).saveAs(allFile);
  await page.evaluate(async () => {
    await window.practiceQA.mutatePracticeState((s) =>
      window.practiceQA.saveProfile(s, {
        nickname: "Temporary QA",
        avatar: window.practiceQA.AVATAR_WORD_IDS[0],
      }),
    );
  });
  await page
    .getByLabel("Fișier de siguranță (.wwbackup)", { exact: true })
    .setInputFiles(allFile);
  await page
    .getByLabel("Parola fișierului", { exact: true })
    .fill("synthetic-test-password-123");
  await page
    .getByRole("button", { name: "Verifică fișierul", exact: true })
    .click();
  await page
    .getByRole("heading", {
      name: "Ce veți recupera",
      exact: true,
    })
    .waitFor();
  await page
    .getByLabel("Am înțeles ce date se înlocuiesc.", { exact: false })
    .check();
  await page
    .getByRole("button", {
      name: "Restaurează copia",
      exact: true,
    })
    .click();
  await page
    .getByRole("button", { name: /Temporary QA/ })
    .waitFor({ state: "hidden" });
  const allRestored = await page.evaluate(async () => ({
    state: await window.practiceQA.readPracticeState(),
    legacy: JSON.parse(localStorage.getItem("word-wheel.setup.v1")),
  }));
  assert.equal(allRestored.state.profiles.length, 2);
  assert.equal(allRestored.state.turns.length, 2);
  assert.equal(allRestored.legacy.savedSetups.length, 1);
  await page.setViewportSize({ width: 1440, height: 900 });
  const returnToChildren = page.getByRole("button", {
    name: "Toți copiii",
    exact: true,
  });
  if (await returnToChildren.isVisible()) await returnToChildren.click();
  await captureEvidence(page, "desktop-children-menu");
  await page.setViewportSize({ width: 390, height: 844 });
  await captureEvidence(page, "mobile-children-menu");
  await page.getByRole("button", { name: /Alex QA/ }).click();
  await captureEvidence(page, "mobile-child-workspace");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page
    .getByRole("heading", { name: "Alex QA", exact: true })
    .scrollIntoViewIfNeeded();
  await captureEvidence(page, "desktop-child-workspace");
  await page.getByRole("button", { name: "Ajutor", exact: true }).click();
  await page
    .getByRole("heading", {
      name: /O roată mică/,
      exact: true,
    })
    .waitFor();
  await page
    .getByRole("button", { name: "Merg la profiluri", exact: true })
    .click();
  await page.locator(".onboarding-shell").waitFor({ state: "hidden" });
  const toChildren = page.getByRole("button", {
    name: "Toți copiii",
    exact: true,
  });
  if (await toChildren.isVisible()) await toChildren.click();
  await taskRow(page, "Date și setări").click();
  const sound = page.getByLabel("Sunet la sărbătoriri", { exact: true });
  assert.equal(
    await sound.isChecked(),
    false,
    "Celebration sound defaults off",
  );
  // The checkbox reflects committed IndexedDB state, not an optimistic toggle.
  await sound.click();
  await page.waitForFunction(
    async () =>
      (await window.practiceQA.readPracticeState()).preferences.sound === true,
  );
  await page.locator(".practice-sound-setting input:checked").waitFor();
  await sound.click();
  await page.waitForFunction(
    async () =>
      (await window.practiceQA.readPracticeState()).preferences.sound === false,
  );
  await page.locator(".practice-sound-setting input:not(:checked)").waitFor();
  await page.getByRole("button", { name: "Ajutor", exact: true }).click();
  await page
    .getByRole("button", { name: "Merg la profiluri", exact: true })
    .click();
  await page.locator(".onboarding-shell").waitFor({ state: "hidden" });
  // Help returns to the current adult tool; use its parent navigation.
  await page.getByRole("button", { name: "Toți copiii", exact: true }).click();
  const beforeDemo = await page.evaluate(async () =>
    JSON.stringify(await window.practiceQA.readPracticeState()),
  );
  await page.getByRole("link", { name: "Despre Vorbini", exact: true }).click();
  await page.getByRole("link", { name: "Încearcă jocul", exact: true }).click();
  await page.getByRole("button", { name: "Învârte", exact: true }).click();
  await page.getByRole("dialog").waitFor();
  await page.getByRole("button", { name: "Păstrează", exact: true }).click();
  await page
    .getByRole("heading", { name: "Bravo! Prima medalie!", exact: true })
    .waitFor();
  await page
    .getByRole("button", { name: "Continuă demonstrația", exact: true })
    .click();
  await page.getByRole("link", { name: "Ieși din demo", exact: true }).click();
  await page
    .getByRole("link", { name: "Deschide aplicația", exact: true })
    .click();
  await page.getByRole("button", { name: /Alex QA/ }).waitFor();
  await page.addScriptTag({
    content: await readFile(path.join(output, "fixture.js"), "utf8"),
  });
  assert.equal(
    await page.evaluate(async () =>
      JSON.stringify(await window.practiceQA.readPracticeState()),
    ),
    beforeDemo,
    "Demo cannot change saved profiles, counts, rewards or preferences",
  );
  await page.waitForLoadState("networkidle", { timeout: 10000 });
  await page.goto("http://localhost:3000/");
  await page.waitForURL("**/ro/practice");
  await page.getByRole("button", { name: /Alex QA/ }).waitFor();
  await page.waitForLoadState("networkidle", { timeout: 10000 });
  await page.goto("http://localhost:3000/ro/about?show=1");
  await page.getByRole("heading", { name: /Exersăm câte/ }).waitFor();
  for (const [width, height] of [
    [320, 568],
    [390, 844],
    [1440, 900],
  ]) {
    await page.setViewportSize({ width, height });
    assert.equal(
      await page
        .locator(".practice-shell")
        .evaluate((el) => el.scrollWidth > el.clientWidth),
      false,
    );
  }
  const manifestResponse = await context.request.get(
    "http://localhost:3000/manifest.webmanifest",
  );
  assert.equal(manifestResponse.status(), 200);
  const manifest = await manifestResponse.json();
  assert.equal(manifest.start_url, "/ro/practice");
  for (const icon of manifest.icons) {
    assert.equal(
      (
        await context.request.get(
          new URL(icon.src, "http://localhost:3000").href,
        )
      ).status(),
      200,
    );
  }
  await page.waitForLoadState("networkidle", { timeout: 10000 });
  const missing = await page.goto("http://localhost:3000/ro/play/not-a-target");
  assert.equal(missing.status(), 404);
  await page
    .getByRole("heading", { name: "Nu găsim pagina aceasta", exact: true })
    .waitFor();
  for (const [width, height] of [
    [320, 568],
    [568, 320],
    [1440, 900],
  ]) {
    await page.setViewportSize({ width, height });
    assert.equal(
      await page
        .locator(".recovery-shell")
        .evaluate((el) => el.scrollWidth > el.clientWidth),
      false,
    );
    const actions = await page
      .locator(".recovery-actions a")
      .evaluateAll((links) =>
        links.map((link) => ({
          width: link.getBoundingClientRect().width,
          height: link.getBoundingClientRect().height,
        })),
      );
    assert.ok(actions.every((rect) => rect.height >= 52 && rect.width >= 128));
    if (width <= 600) {
      const actionWidth = await page
        .locator(".recovery-actions")
        .evaluate((el) => el.clientWidth);
      assert.ok(
        actions.every((rect) => Math.abs(rect.width - actionWidth) <= 1),
        "Recovery actions fill the phone column",
      );
    }
  }
  await page.setViewportSize({ width: 320, height: 568 });
  await captureEvidence(page, "mobile-recovery");
  await page
    .getByRole("link", { name: "Deschide aplicația", exact: true })
    .click();
  await page.getByRole("button", { name: /Alex QA/ }).waitFor();
  await page.addScriptTag({
    content: await readFile(path.join(output, "fixture.js"), "utf8"),
  });
  assert.equal(
    await page.evaluate(async () =>
      JSON.stringify(await window.practiceQA.readPracticeState()),
    ),
    beforeDemo,
    "Recovery navigation preserves child records, rewards and shared settings",
  );
  const offlineContext = await browser.newContext();
  await offlineContext.setOffline(true);
  const coldPage = await offlineContext.newPage();
  let coldOfflineUnavailable = false;
  try {
    await coldPage.goto("http://localhost:3000/ro/practice", { timeout: 5000 });
  } catch {
    coldOfflineUnavailable = true;
  }
  assert.equal(
    coldOfflineUnavailable,
    true,
    "Pilot is explicitly online-required at cold launch",
  );
  await offlineContext.close();
  assert.deepEqual(errors, []);
  assert.deepEqual(
    unexpectedRequests,
    [],
    "The practice/backup journey uses only local-origin static reads; saved child data has no remote write requests",
  );
  console.log(
    "Practice browser checks passed: transaction/quota rollback, profiles/goals, prepared wheel, five tracked layouts, count-on-close/recovery/ownership, observations, encrypted child/full restore, shared-library preservation, Help, isolated demo, returning-adult navigation, Romanian 404 recovery, manifest assets and explicit cold-offline limit.",
  );
} finally {
  await browser?.close();
  await rm(output, { recursive: true, force: true });
}
