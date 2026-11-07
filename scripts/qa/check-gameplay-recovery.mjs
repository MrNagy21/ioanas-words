import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { launchQABrowser, captureEvidence } from "./browser-runtime.mjs";

const output = await mkdtemp(path.join(tmpdir(), "vorbini-recovery-"));
const origin = process.env.WORD_WHEEL_BASE_URL || "http://localhost:3000";
const pack = JSON.parse(await readFile("content/ro/words-r.json", "utf8"));
const interior = JSON.parse(await readFile("content/ro/words-m.json", "utf8"));
const letters = JSON.parse(await readFile("content/ro/letters.json", "utf8"));
const target = letters.letters.find((letter) => letter.id === "r");
const button = (page, name) => page.getByRole("button", { name, exact: true });
const errors = [];
let browser;
let fixture;
const inject = (page) => page.addScriptTag({ content: fixture });
const state = (page) =>
  page.evaluate(() => window.practiceQA.readPracticeState());
async function closeContext(context) {
  await Promise.all(
    context.pages().map((page) => page.waitForLoadState("networkidle")),
  );
  await context.close();
}
async function setup({
  sound = false,
  session = true,
  count = 3,
  mode = "starts-with",
} = {}) {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
    hasTouch: true,
  });
  await context.addInitScript(() => {
    window.recoveryAudio = [];
    const Native = window.AudioContext;
    window.AudioContext = class extends Native {
      constructor(...args) {
        super(...args);
        const entry = { context: this, notes: 0 };
        window.recoveryAudio.push(entry);
        const create = this.createOscillator.bind(this);
        this.createOscillator = () => {
          entry.notes++;
          return create();
        };
      }
    };
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(`${origin}/ro/practice`);
  await button(page, "Merg la profiluri").click();
  await button(page, "Adaugă un copil").waitFor();
  await inject(page);
  const words = (mode === "contains-only" ? interior : pack).words
    .filter((word) => word.status === "approved" && word.display.includes("r"))
    .slice(0, count);
  await page.evaluate(
    async (input) => {
      const api = window.practiceQA;
      await api.mutatePracticeState((draft) => {
        api.saveProfile(draft, {
          nickname: "Recovery QA",
          avatar: api.AVATAR_WORD_IDS[0],
        });
        api.saveGoal(draft, draft.profiles[0].id, "R");
        draft.preferences.onboardingCompleted = true;
        draft.preferences.sound = input.sound;
        if (input.session)
          api.beginPracticeSession(
            draft,
            draft.profiles[0].id,
            input.target,
            input.words,
            {
              mode: input.mode,
              excludedTargetKeys: [],
              wheelWordCount: input.words.length,
              wordSelectionMode: "all",
              selectedWordIds: [],
            },
            "Recovery wheel",
          );
      });
    },
    { target, words, sound, session, mode },
  );
  await page.getByRole("button", { name: /Recovery QA/ }).click();
  return { context, page };
}
async function resume(page) {
  await button(page, "Reia exersarea").click();
  await page.locator(".wheel-button").waitFor();
}
async function hide(page, hidden) {
  await page.evaluate((value) => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => value,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  }, hidden);
}
async function pauseOpen(page) {
  await page.evaluate(() => {
    const native = IDBFactory.prototype.open;
    window.recoveryOpen = native;
    let paused = false;
    IDBFactory.prototype.open = function (...args) {
      const request = native.apply(this, args);
      if (!paused) {
        paused = true;
        request.addEventListener(
          "success",
          (event) => {
            event.stopImmediatePropagation();
            window.releaseRecoveryOpen = () =>
              request.onsuccess?.call(request, event);
          },
          { once: true },
        );
      }
      return request;
    };
  });
}
async function releaseOpen(page) {
  await page.evaluate(() => {
    IDBFactory.prototype.open = window.recoveryOpen;
    window.releaseRecoveryOpen();
    delete window.releaseRecoveryOpen;
  });
}
async function assertFocus(page) {
  for (const key of ["Tab", "Shift+Tab", "Tab"]) {
    await page.keyboard.press(key);
    assert.equal(
      await page.evaluate(
        () => !!document.activeElement.closest(".result-modal"),
      ),
      true,
    );
  }
  await page
    .locator(".game-sound-toggle")
    .evaluate((element) => element.focus());
  assert.equal(
    await page.evaluate(
      () => !!document.activeElement.closest(".result-modal"),
    ),
    true,
  );
}

try {
  execFileSync("bun", [
    "build",
    "scripts/qa/practice-store.fixture.ts",
    "--target=browser",
    "--outfile",
    path.join(output, "fixture.js"),
  ]);
  fixture = await readFile(path.join(output, "fixture.js"), "utf8");
  browser = await launchQABrowser();

  {
    const { context, page } = await setup();
    await page.waitForTimeout(100);
    await pauseOpen(page);
    await button(page, "Reia exersarea").click();
    await page.waitForFunction(() => !!window.releaseRecoveryOpen);
    const before = await context.newPage();
    before.on("pageerror", (error) => errors.push(error.message));
    await before.goto(`${origin}/ro`);
    await inject(before);
    const original = await state(before);
    await button(page, "Înapoi la profil").click();
    const leaseName = `word-wheel:session:${original.sessions[0].id}`;
    assert.equal(
      await before.evaluate(
        async (name) =>
          (await navigator.locks.query()).held.some(
            (lock) => lock.name === name,
          ),
        leaseName,
      ),
      true,
      "Abandoning a pending claim retains its lease until settlement",
    );
    await before.waitForLoadState("networkidle");
    await before.goto(`${origin}/ro/practice`);
    await before.getByRole("button", { name: /Recovery QA/ }).click();
    await button(before, "Reia exersarea").click();
    await before.waitForFunction(
      async (name) =>
        (await navigator.locks.query()).pending.some(
          (lock) => lock.name === name,
        ),
      leaseName,
    );
    await releaseOpen(page);
    await button(before, "Învârte").waitFor();
    await inject(before);
    const claimed = await state(before);
    assert.equal(claimed.turns.length, 0);
    assert.equal(claimed.awards.length, 0);
    assert.equal(
      claimed.revision,
      original.revision + 1,
      "The abandoned claim never writes a revision",
    );
    await button(before, "Învârte").click();
    await before.getByRole("dialog").waitFor();
    await before.waitForFunction(
      async () =>
        !!(await window.practiceQA.readPracticeState()).sessions[0].pending,
    );
    const shown = await state(before);
    assert.equal(shown.sessions[0].ownerId, claimed.sessions[0].ownerId);
    assert.equal(shown.turns.length, 0);
    assert.equal(shown.awards.length, 0);
    await button(before, "Păstrează").click();
    await before.getByRole("heading", { name: /Bravo/ }).waitFor();
    assert.equal((await state(before)).turns.length, 1);
    await closeContext(context);
  }
  console.log(
    "Abandoned claims retain ownership protection and never recover another tab's open word.",
  );

  for (const count of [3, 1]) {
    const { context, page } = await setup({ count });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await resume(page);
    await page.locator(".wheel-button").click();
    await hide(page, true);
    await page.waitForTimeout(count === 1 ? 1000 : 8100);
    assert.equal(
      await page.getByRole("dialog").count(),
      0,
      "Hidden spins never present a result",
    );
    const hidden = await state(page);
    assert.equal(hidden.sessions[0].pending, null);
    assert.equal(hidden.turns.length, 0);
    assert.equal(hidden.awards.length, 0);
    await page.waitForLoadState("networkidle");
    await page.reload();
    await resume(page);
    await inject(page);
    assert.equal(
      (await state(page)).turns.length,
      0,
      "Hidden reload earns no recovery credit",
    );
    await closeContext(context);
  }
  {
    const { context, page } = await setup();
    await resume(page);
    await button(page, "Învârte").click();
    await button(page, "Păstrează").waitFor();
    await page.waitForFunction(
      async () =>
        !!(await window.practiceQA.readPracticeState()).sessions[0].pending,
    );
    await hide(page, true);
    await page.waitForLoadState("networkidle");
    await page.reload();
    await button(page, "Reia exersarea").click();
    await page.getByRole("heading", { name: /Bravo/ }).waitFor();
    await inject(page);
    assert.equal(
      (await state(page)).turns.length,
      1,
      "Already-displayed words still recover once",
    );
    await page.waitForLoadState("networkidle");
    await page.reload();
    await button(page, "Reia exersarea").click();
    await page.getByRole("heading", { name: /Bravo/ }).waitFor();
    await inject(page);
    assert.equal(
      (await state(page)).turns.length,
      1,
      "Repeated resumes do not duplicate recovery",
    );
    await closeContext(context);
  }
  console.log(
    "Hidden normal/final spins earn no credit; displayed pending words still recover exactly once.",
  );

  for (const sound of [true, false]) {
    const { context, page } = await setup({ sound, session: false });
    await page.evaluate(() =>
      window.dispatchEvent(
        new PageTransitionEvent("pagehide", { persisted: true }),
      ),
    );
    const countNotes = () =>
      page.evaluate(() =>
        window.recoveryAudio.reduce((total, entry) => total + entry.notes, 0),
      );
    const before = await countNotes();
    await page.waitForTimeout(500);
    assert.equal(
      await countNotes(),
      before,
      "Page restoration does not replay sound",
    );
    const row = (title) =>
      page
        .locator(".task-row")
        .filter({ has: page.getByText(title, { exact: true }) });
    await row("Pronunție").click();
    await row("Sărbătorește un progres").click();
    await page.getByRole("radio", { name: "R", exact: true }).check();
    await button(page, "Sărbătorește acum").click();
    await page.getByRole("heading", { name: /Bravo/ }).waitFor();
    await page.waitForTimeout(500);
    assert.equal(
      await countNotes(),
      before + (sound ? 3 : 0),
      "Adult celebration honors sound after pagehide",
    );
    await closeContext(context);
  }

  {
    const { context, page } = await setup();
    await resume(page);
    await pauseOpen(page);
    await button(page, "Învârte").click();
    await page.getByRole("dialog").waitFor();
    await page.waitForFunction(() => !!window.releaseRecoveryOpen);
    assert.equal(
      await page.getByRole("dialog").getAttribute("aria-busy"),
      "true",
    );
    await assertFocus(page);
    await captureEvidence(page, "busy-result-focus-phone");
    await page.setViewportSize({ width: 1440, height: 900 });
    await captureEvidence(page, "busy-result-focus-desktop");
    await releaseOpen(page);
    await page.waitForFunction(
      () => !document.querySelector(".result-modal .spin-button").disabled,
    );
    await pauseOpen(page);
    await button(page, "Păstrează").click();
    await page.waitForFunction(() => !!window.releaseRecoveryOpen);
    await assertFocus(page);
    await releaseOpen(page);
    await page.getByRole("heading", { name: /Bravo/ }).waitFor();
    assert.equal((await state(page)).turns.length, 1);
    await closeContext(context);
  }
  console.log(
    "Adult sound recovers on click only; pending-result and close writes retain modal keyboard focus.",
  );

  for (const [mode, label] of [
    ["starts-with", "Început"],
    ["contains-only", "Interior"],
    ["starts-with-or-contains", "Mixt"],
  ]) {
    const { context, page } = await setup({ mode });
    await resume(page);
    assert.ok(
      (await page.locator(".mode-status__mobile").innerText()).includes(label),
    );
    await button(page, "Învârte").click();
    await page.getByRole("dialog").waitFor();
    await page.waitForFunction(
      () => !document.querySelector(".result-modal .spin-button").disabled,
    );
    await button(page, "Păstrează").click();
    await page.getByRole("heading", { name: /Bravo/ }).waitFor();
    await page.getByRole("button", { name: /^Păstrează.*medali/ }).click();
    await button(page, "Învârte").waitFor();
    assert.ok(
      (await page.locator(".mode-status__mobile").innerText()).includes(label),
    );
    await page.waitForLoadState("networkidle");
    await page.reload();
    await resume(page);
    assert.ok(
      (await page.locator(".mode-status__mobile").innerText()).includes(label),
    );
    await closeContext(context);
  }
  assert.deepEqual(errors, []);
  console.log(
    "Gameplay recovery regression passed for all five independent-review findings.",
  );
} finally {
  await browser?.close();
  await rm(output, { recursive: true, force: true });
}
