import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { launchQABrowser, captureEvidence } from "./browser-runtime.mjs";

const output = await mkdtemp(path.join(tmpdir(), "word-wheel-onboarding-"));
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
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
    hasTouch: true,
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const heading = (name) => page.getByRole("heading", { name });
  const button = (name) => page.getByRole("button", { name, exact: true });
  const inject = () => page.addScriptTag({ content: fixture });
  const fixture = await readFile(path.join(output, "fixture.js"), "utf8");
  const snapshot = () =>
    page.evaluate(async () => window.practiceQA.readPracticeState());
  async function reflow(label) {
    for (const fontSize of ["100%", "200%"]) {
      await page.evaluate((size) => {
        document.documentElement.style.fontSize = size;
      }, fontSize);
      for (const [width, height] of [
        [320, 568],
        [390, 844],
        [568, 320],
        [1440, 900],
      ]) {
        await page.setViewportSize({ width, height });
        assert.equal(
          await page
            .locator(".onboarding-shell")
            .evaluate((el) => el.scrollWidth > el.clientWidth + 1),
          false,
          `${label} fits ${width} / ${fontSize}`,
        );
        const action = page.locator(".onboarding-next");
        await action.scrollIntoViewIfNeeded();
        assert.ok(
          await action.evaluate((el) => {
            const r = el.getBoundingClientRect();
            return (
              r.x >= 0 &&
              r.right <= innerWidth + 1 &&
              r.y >= 0 &&
              r.bottom <= innerHeight + 1 &&
              r.height >= 52
            );
          }),
          `${label}: primary action remains reachable`,
        );
      }
    }
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "100%";
    });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator(".onboarding-shell").evaluate((el) => el.scrollTo(0, 0));
  }
  await page.goto("http://localhost:3000/ro/practice");
  await heading(/O roată mică/).waitFor();
  assert.equal(
    await page
      .getByRole("heading", { name: "Copiii mei", exact: true })
      .count(),
    0,
    "No competing dashboard during onboarding",
  );
  await reflow("Welcome");
  await captureEvidence(page, "onboarding-welcome-mobile");
  await page.setViewportSize({ width: 1440, height: 900 });
  await captureEvidence(page, "onboarding-welcome-desktop");
  await page.setViewportSize({ width: 390, height: 844 });
  await button("Pregătim prima joacă").click();
  await heading("Cu cine ne jucăm?").waitFor();
  await page
    .getByLabel("Cum îi spunem în joc?", { exact: true })
    .fill("Mara QA");
  await page.getByRole("radio", { name: "câine", exact: true }).check();
  await reflow("Profile");
  await captureEvidence(page, "onboarding-profile-mobile");
  await inject();
  await page.evaluate(() => {
    window.qaOriginalPut = IDBObjectStore.prototype.put;
    IDBObjectStore.prototype.put = function () {
      throw new DOMException("QA quota failure", "QuotaExceededError");
    };
  });
  await button("Creează profilul").click();
  await page.locator(".onboarding-error[role=alert]").waitFor();
  assert.equal(
    (await snapshot()).profiles.length,
    0,
    "Failed profile save creates nothing",
  );
  await heading("Cu cine ne jucăm?").waitFor();
  await page.evaluate(() => {
    IDBObjectStore.prototype.put = window.qaOriginalPut;
  });
  await button("Creează profilul").click();
  await heading(/Ce exersăm cu Mara QA/).waitFor();
  assert.equal((await snapshot()).profiles.length, 1);
  await page.reload();
  await heading(/Ce exersăm cu Mara QA/).waitFor();
  await inject();
  assert.equal(
    (await snapshot()).profiles.length,
    1,
    "Reload resumes without recreating the profile",
  );
  await button("Înapoi").click();
  await heading("Cu cine ne jucăm?").waitFor();
  await button("Continuă cu Mara QA").click();
  await heading(/Ce exersăm cu Mara QA/).waitFor();
  await page.goBack();
  await heading("Cu cine ne jucăm?").waitFor();
  await page.goForward();
  await heading(/Ce exersăm cu Mara QA/).waitFor();
  await page.getByRole("radio", { name: "R", exact: true }).check();
  await reflow("Sound choice");
  await captureEvidence(page, "onboarding-sound-mobile");
  await button("Continuă cu R").click();
  await heading("Câteva cuvinte, pentru început.").waitFor();
  await page.locator(".onboarding-words li").first().waitFor();
  await page
    .getByLabel("Roata de început")
    .selectOption({ label: "Cuvinte cu S" });
  await reflow("Picture wheel");
  const preview = await page.locator(".onboarding-words li").allTextContents();
  assert.ok(preview.length > 0 && preview.length <= 8);
  await captureEvidence(page, "onboarding-words-mobile");
  await page.setViewportSize({ width: 1440, height: 900 });
  await captureEvidence(page, "onboarding-words-desktop");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await heading("Câteva cuvinte, pentru început.").waitFor();
  assert.deepEqual(
    await page.locator(".onboarding-words li").allTextContents(),
    preview,
    "Exact pictures survive reload",
  );
  await inject();
  await button("Roata e gata").click();
  await heading("Acum e rândul copilului.").waitFor();
  await reflow("Play handover");
  await captureEvidence(page, "onboarding-ready-mobile");
  let state = await snapshot();
  assert.equal(state.turns.length, 0);
  assert.equal(state.sessions.length, 0);
  assert.equal(state.awards.length, 0);
  await button("Să începem joaca").click();
  await button("Învârte").waitFor();
  assert.deepEqual(
    await page.locator(".word-wheel__label").allTextContents(),
    preview,
    "Real play uses the exact prepared subset",
  );
  state = await snapshot();
  assert.equal(state.preferences.onboardingCompleted, true);
  assert.equal(state.sessions.length, 1);
  assert.equal(state.turns.length, 0);
  assert.equal(state.profiles[0].goals[0].label, "R");
  await button("Învârte").click();
  await page.getByRole("dialog").waitFor();
  await button("Păstrează").click();
  await heading("Bravo, Mara QA!").waitFor();
  await button("Păstrează medalia").click();
  await button("Învârte").waitFor();
  await page.waitForLoadState("networkidle", { timeout: 10000 });
  await page.reload();
  await page.getByRole("button", { name: /Mara QA/ }).click();
  await inject();
  const existingId = (await snapshot()).sessions[0].id;
  await button("Ajutor").click();
  await button("Pregătim prima joacă").click();
  await button("Reluăm roata începută").click();
  await button("Învârte").waitFor();
  assert.equal(
    (await snapshot()).sessions.length,
    1,
    "Help resumes the existing round",
  );
  assert.equal((await snapshot()).sessions[0].id, existingId);
  assert.equal(
    (await snapshot()).turns.length,
    1,
    "Resuming adds no participation",
  );
  await button("Încheie exersarea").click();
  await button("Da, încheiem").click();
  await button("Înapoi la profil").click();
  await heading("Mara QA").waitFor();
  await button("Ajutor").click();
  await heading(/O roată mică/).waitFor();
  const before = await snapshot();
  await button("Merg la profiluri").click();
  await heading("Mara QA").waitFor();
  state = await snapshot();
  for (const key of [
    "profiles",
    "sessions",
    "turns",
    "awards",
    "configurations",
    "observations",
  ])
    assert.deepEqual(state[key], before[key], `Help/skip preserves ${key}`);
  await page.waitForLoadState("networkidle", { timeout: 10000 });
  await page.goto("http://localhost:3000/ro/practice?guide=1");
  await heading(/O roată mică/).waitFor();
  await button("Merg la profiluri").click();
  await page.getByRole("button", { name: /Mara QA/ }).waitFor();
  await inject();
  assert.deepEqual(
    (await snapshot()).turns,
    state.turns,
    "Direct guide entry preserves participation",
  );
  const fresh = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  const second = await fresh.newPage();
  await second.goto("http://localhost:3000/ro/practice");
  await second
    .getByRole("button", { name: "Pregătim prima joacă", exact: true })
    .click();
  await second
    .getByLabel("Cum îi spunem în joc?", { exact: true })
    .fill("A".repeat(40));
  await second
    .getByRole("button", { name: "Creează profilul", exact: true })
    .click();
  await second
    .getByRole("button", { name: "Aleg sunetul mai târziu", exact: true })
    .click();
  await second
    .getByRole("heading", {
      name: "Câteva cuvinte, pentru început.",
      exact: true,
    })
    .waitFor();
  await second.evaluate(() => {
    document.documentElement.style.fontSize = "200%";
  });
  await second.setViewportSize({ width: 320, height: 568 });
  assert.equal(
    await second
      .locator(".onboarding-shell")
      .evaluate((el) => el.scrollWidth > el.clientWidth + 1),
    false,
    "Long nickname fits enlarged phone text",
  );
  await second.evaluate(() => {
    const draft = JSON.parse(
      sessionStorage.getItem("word-wheel.onboarding.v2"),
    );
    draft.step = 4;
    draft.wordIds = ["missing-word"];
    sessionStorage.setItem("word-wheel.onboarding.v2", JSON.stringify(draft));
  });
  await second.reload();
  await second
    .getByRole("heading", {
      name: "Câteva cuvinte, pentru început.",
      exact: true,
    })
    .waitFor();
  await fresh.close();
  assert.deepEqual(errors, []);
  console.log(
    "Onboarding checks passed: focused pages, actual profile/goals/starter wheel, save failure retry, reload deduplication/exact subset, app/browser back, skip/Help preservation, optional goals, enlarged text, first real medal and correct-child play.",
  );
} finally {
  await browser?.close();
  await rm(output, { recursive: true, force: true });
}
