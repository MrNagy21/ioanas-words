import { launchQABrowser } from "./browser-runtime.mjs";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const output = await mkdtemp(path.join(tmpdir(), "word-wheel-resilience-"));
const findings = [];
let browser;
async function check(condition, message) {
  if (!condition) findings.push(message);
}
async function reflow(page, label) {
  for (const fontSize of ["100%", "150%", "200%"]) {
    await page.evaluate((size) => {
      document.documentElement.style.fontSize = size;
    }, fontSize);
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: width === 320 ? 568 : 900 });
      const overflowing = await page
        .locator(".practice-shell")
        .evaluate((el) => el.scrollWidth > el.clientWidth);
      const clippedControls = await page
        .locator(".practice-progress-nav button")
        .evaluateAll((elements) =>
          elements.some((el) => el.scrollWidth > el.clientWidth + 1),
        );
      await check(
        !clippedControls,
        `${label}: clipped tab text at ${width}px / ${fontSize} text`,
      );
      await check(
        !overflowing,
        `${label}: horizontal overflow at ${width}px / ${fontSize} text`,
      );
    }
  }
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "100%";
  });
  await page.setViewportSize({ width: 390, height: 844 });
}
async function failWrites(page) {
  await page.evaluate(() => {
    window.qaOriginalPut = IDBObjectStore.prototype.put;
    IDBObjectStore.prototype.put = function () {
      throw new DOMException("QA quota failure", "QuotaExceededError");
    };
  });
}
async function recoverWrites(page) {
  await page.evaluate(() => {
    IDBObjectStore.prototype.put = window.qaOriginalPut;
  });
}
try {
  execFileSync("bun", [
    "build",
    "scripts/qa/practice-store.fixture.ts",
    "--target=browser",
    "--outfile",
    path.join(output, "fixture.js"),
  ]);
  browser = await launchQABrowser();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("http://localhost:3000/ro/about?show=1");
  await reflow(page, "Introduction");
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
  await page.evaluate(async () => {
    const api = window.practiceQA;
    await api.mutatePracticeState((state) => {
      api.saveProfile(state, {
        nickname: "Alex · test",
        avatar: api.AVATAR_WORD_IDS[0],
      });
      api.saveGoal(state, state.profiles.at(-1).id, "S", "standard");
      state.preferences.onboardingCompleted = true;
    });
  });
  await page.getByRole("button", { name: /Alex · test/ }).tap();
  await reflow(page, "Child activity");
  await page
    .locator(".task-row")
    .filter({ has: page.getByText("Pronunție", { exact: true }) })
    .tap();
  await reflow(page, "Pronunciation");
  await page
    .getByRole("button", { name: "Înapoi la profil", exact: true })
    .tap();
  await page
    .locator(".task-row")
    .filter({ has: page.getByText("Setările profilului", { exact: true }) })
    .tap();
  await page
    .locator(".task-row")
    .filter({ has: page.getByText("Copie de siguranță", { exact: true }) })
    .tap();
  await reflow(page, "Backups");
  await page
    .getByRole("button", { name: "Înapoi la profil", exact: true })
    .tap();
  await page
    .getByRole("button", { name: "Înapoi la profil", exact: true })
    .tap();
  await page
    .getByRole("button", { name: "Pregătește o roată", exact: true })
    .tap();
  await page.getByRole("button", { name: "S", exact: true }).tap();
  await page.getByRole("button", { name: "4 Final", exact: true }).tap();
  await page.getByRole("button", { name: "Pornește roata", exact: true }).tap();
  await reflow(page, "Prepared wheel");
  await page
    .getByRole("button", { name: "Începe exersarea", exact: true })
    .tap();
  await page.getByRole("button", { name: "Învârte", exact: true }).tap();
  const result = page.getByRole("dialog");
  await result.waitFor();
  await page
    .getByRole("button", { name: "Păstrează", exact: true })
    .waitFor({ state: "visible" });
  await check(
    await page
      .getByRole("button", { name: "Păstrează", exact: true })
      .evaluate((el) => document.activeElement === el),
    "Result primary action receives keyboard focus after saving",
  );
  await failWrites(page);
  await page.getByRole("button", { name: "Păstrează", exact: true }).tap();
  await result.getByRole("alert").waitFor();
  await check(
    !(await result.getByRole("alert").innerText()).includes("QA quota failure"),
    "Quota error must have actionable Romanian copy",
  );
  const beforeRetry = await page.evaluate(async () => {
    const s = await window.practiceQA.readPracticeState();
    return {
      turns: s.turns.length,
      pending: s.sessions.filter((s) => s.pending).length,
    };
  });
  assert.deepEqual(beforeRetry, { turns: 0, pending: 1 });
  await recoverWrites(page);
  await page.getByRole("button", { name: "Păstrează", exact: true }).tap();
  await page.getByRole("heading", { name: /^Bravo,/ }).waitFor();
  await reflow(page, "Medal celebration");
  await page.getByRole("button", { name: "Soare", exact: true }).tap();
  assert.equal(
    await page
      .getByRole("button", { name: "Soare", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  await check(
    (await page.locator("canvas").count()) === 0,
    "Reduced-motion reward does not run confetti",
  );
  await page.getByRole("button", { name: /^Păstrează.*medali/ }).tap();
  await page
    .getByRole("button", { name: "Încheie exersarea", exact: true })
    .tap();
  const end = page.locator(".practice-end-dialog");
  await check(
    (await end.getAttribute("aria-labelledby")) === "practice-end-title",
    "End dialog needs an accessible name",
  );
  await failWrites(page);
  await page.getByRole("button", { name: "Da, încheiem", exact: true }).tap();
  await page.locator(".practice-result-error").waitFor();
  await check(
    (await end.getByRole("alert").count()) > 0,
    "End write failure must be inside the active modal",
  );
  await recoverWrites(page);
  await page.getByRole("button", { name: "Continuăm", exact: true }).tap();
  await page.getByRole("button", { name: "Învârte", exact: true }).waitFor();
  await check(
    (await page
      .locator(".practice-result-error[role=alert]:visible")
      .count()) === 0,
    "Cancelling failed End clears its modal error",
  );
  await page
    .getByRole("button", { name: "Încheie exersarea", exact: true })
    .tap();
  await page.getByRole("button", { name: "Da, încheiem", exact: true }).tap();
  await page.getByRole("heading", { name: /Exersare încheiată/ }).waitFor();
  const afterRetry = await page.evaluate(async () => {
    const s = await window.practiceQA.readPracticeState();
    return {
      turns: s.turns.length,
      awards: s.awards.length,
      ended: !!s.sessions[0].endedAt,
    };
  });
  assert.deepEqual(afterRetry, { turns: 1, awards: 2, ended: true });
  assert.deepEqual(errors, []);
  for (const unavailable of ["indexedDB", "locks", "both-storage"]) {
    const blocked = await browser.newContext({
      viewport: { width: 390, height: 844 },
      hasTouch: true,
      isMobile: true,
      reducedMotion: "reduce",
    });
    await blocked.addInitScript((mode) => {
      window.qaOriginalGet = Storage.prototype.getItem;
      window.qaOriginalLibrary = JSON.stringify({
        schemaVersion: 2,
        savedSetups: [],
        activeConfigsByTargetKey: {
          "ro:letter:s": {
            mode: "starts-with",
            wheelWordCount: 1,
            excludedTargetKeys: [],
            wordSelectionMode: "all",
            selectedWordIds: [],
          },
        },
      });
      localStorage.setItem("word-wheel.setup.v1", window.qaOriginalLibrary);
      window.qaStorageWrites = 0;
      const setItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function (key, value) {
        if (key.startsWith("word-wheel")) window.qaStorageWrites += 1;
        return setItem.call(this, key, value);
      };
      if (mode !== "locks")
        Object.defineProperty(globalThis, "indexedDB", { value: undefined });
      if (mode === "locks")
        Object.defineProperty(navigator, "locks", { value: undefined });
      if (mode === "both-storage")
        Storage.prototype.getItem = function () {
          throw new DOMException("QA storage blocked", "SecurityError");
        };
    }, unavailable);
    const anonymous = await blocked.newPage();
    if (unavailable === "indexedDB") {
      await anonymous.goto("http://localhost:3000/ro/practice");
      await anonymous.locator(".practice-alert").waitFor();
      await anonymous
        .getByRole("link", { name: "Continuă fără profil", exact: true })
        .tap();
      await anonymous
        .getByRole("link", { name: "Litera S", exact: true })
        .tap();
    } else {
      await anonymous.goto("http://localhost:3000/ro/setup/s");
    }
    await anonymous.locator('section[role="alert"]').waitFor();
    const fallback = anonymous.getByRole("button", {
      name: "Joacă fără salvare",
      exact: true,
    });
    await fallback.tap();
    await anonymous
      .getByRole("button", { name: "Învârte", exact: true })
      .waitFor();
    assert.ok(
      (await anonymous.locator(".word-wheel__label").count()) > 1,
      "Temporary wheel ignores the saved one-word configuration",
    );
    await anonymous.getByRole("button", { name: "Învârte", exact: true }).tap();
    await anonymous.getByRole("dialog").waitFor();
    await anonymous
      .getByRole("button", { name: "Păstrează", exact: true })
      .tap();
    assert.equal(
      await anonymous.evaluate(() => window.qaStorageWrites),
      0,
      `Anonymous ${unavailable} fallback does not write stored configurations`,
    );
    assert.equal(
      await anonymous.evaluate(
        () =>
          window.qaOriginalGet.call(localStorage, "word-wheel.setup.v1") ===
          window.qaOriginalLibrary,
      ),
      true,
      "Stored configuration is preserved byte for byte",
    );
    await blocked.close();
  }
  console.log(JSON.stringify({ findings }, null, 2));
  assert.deepEqual(findings, []);
  console.log(
    "Practice resilience checks passed: text resizing, synthesized touch, keyboard focus, quota rollback/retry, named End dialog and anonymous storage fallback.",
  );
} finally {
  await browser?.close();
  await rm(output, { recursive: true, force: true });
}
