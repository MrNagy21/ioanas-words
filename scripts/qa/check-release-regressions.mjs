import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { launchQABrowser, captureEvidence } from "./browser-runtime.mjs";
const output = await mkdtemp(path.join(tmpdir(), "word-wheel-release-"));
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
  const a = await context.newPage(),
    b = await context.newPage();
  const inject = (page) => page.addScriptTag({ content: fixture });
  const errors = [];
  for (const page of [a, b])
    page.on("pageerror", (e) => errors.push(e.message));
  await Promise.all([
    a.goto("http://localhost:3000/ro"),
    b.goto("http://localhost:3000/ro"),
  ]);
  await Promise.all([inject(a), inject(b)]);
  await a.evaluate(async () => {
    const api = window.practiceQA;
    await api.initializePracticeStore();
    window.releaseLease = await api.acquireConfigurationLock(
      new AbortController().signal,
    );
    await api.mutatePracticeState((state) => {
      const now = new Date().toISOString();
      state.configurations = [
        {
          id: "old-library",
          targetKey: "ro:letter:s",
          name: "Old library",
          createdAt: now,
          updatedAt: now,
          config: {
            mode: "starts-with",
            excludedTargetKeys: [],
            wheelWordCount: 8,
            wordSelectionMode: "all",
            selectedWordIds: [],
          },
        },
      ];
      state.legacyFingerprint = "pending-config-mirror";
    });
  });
  await b.evaluate(() => {
    window.initDone = false;
    window.initResult = window.practiceQA
      .initializePracticeStore()
      .then((s) => {
        window.initDone = true;
        return s;
      });
  });
  await b.waitForFunction(async () =>
    (await navigator.locks.query()).pending.some(
      (lock) => lock.name === "word-wheel:configurations",
    ),
  );
  assert.equal(
    await b.evaluate(() => window.initDone),
    false,
    "Refresh waits for the configuration lock",
  );
  await a.evaluate(async () => {
    await window.practiceQA.mutatePracticeState((state) => {
      state.configurations[0].id = "new-library";
      state.configurations[0].name = "New library";
    });
    window.releaseLease.release();
  });
  const mirrored = await b.evaluate(async () => {
    const s = await window.initResult;
    return {
      ids: s.configurations.map((c) => c.id),
      mirror: JSON.parse(
        localStorage.getItem("word-wheel.setup.v1"),
      ).savedSetups.map((c) => c.id),
    };
  });
  assert.deepEqual(
    mirrored,
    { ids: ["new-library"], mirror: ["new-library"] },
    "Queued refresh mirrors fresh canonical data",
  );
  await context.close();
  const ui = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    reducedMotion: "reduce",
  });
  const page = await ui.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  const button = (name) => page.getByRole("button", { name, exact: true });
  await page.goto("http://localhost:3000/ro/practice");
  await button("Merg la profiluri").click();
  await button("Adaugă un copil").click();
  await page.getByLabel("Numele din joc", { exact: true }).fill("Audit QA");
  await button("Salvează profilul").click();
  await inject(page);
  await button("Editează profilul").click();
  const other = await ui.newPage();
  await other.goto("http://localhost:3000/ro");
  await inject(other);
  const avatar = await other.evaluate(async () => {
    const api = window.practiceQA;
    const avatar = api.AVATAR_WORD_IDS[1];
    await api.mutatePracticeState((state) =>
      api.saveProfile(state, {
        id: state.profiles[0].id,
        nickname: state.profiles[0].nickname,
        avatar,
      }),
    );
    return avatar;
  });
  await page.getByText(/Datele s-au schimbat între timp/).waitFor();
  await page
    .getByLabel("Numele din joc", { exact: true })
    .fill("Draft preserved");
  await button("Salvează profilul").click();
  await page
    .getByRole("alert")
    .filter({ hasText: "Datele s-au schimbat" })
    .waitFor();
  assert.equal(
    await page.getByLabel("Numele din joc", { exact: true }).inputValue(),
    "Draft preserved",
  );
  let saved = await page.evaluate(
    async () => (await window.practiceQA.readPracticeState()).profiles[0],
  );
  assert.equal(saved.nickname, "Audit QA");
  assert.equal(saved.avatar, avatar, "Other tab avatar cannot be overwritten");
  await captureEvidence(page, "release-stale-profile-mobile");
  await button("Anulează").click();
  await button("Editează profilul").click();
  await page
    .getByLabel("Numele din joc", { exact: true })
    .fill("Audit QA revised");
  await button("Salvează profilul").click();
  await page
    .getByRole("heading", { name: "Audit QA revised", exact: true })
    .waitFor();
  await button("Pregătește o roată").click();
  // Pause a real readonly completion after its snapshot was read. Navigate away
  // while setup initialization is still awaiting it, then queue a restoration.
  await page.evaluate(() => {
    const original = IDBDatabase.prototype.transaction;
    const complete = Object.getOwnPropertyDescriptor(
      IDBTransaction.prototype,
      "oncomplete",
    );
    window.qaTransaction = original;
    let armed = true;
    IDBDatabase.prototype.transaction = function (...args) {
      const transaction = original.apply(this, args);
      if (
        armed &&
        args[1] === "readonly" &&
        document.querySelector(".setup-stage")
      ) {
        armed = false;
        Object.defineProperty(transaction, "oncomplete", {
          set(handler) {
            complete.set.call(transaction, function (event) {
              window.qaReadPaused = true;
              window.qaResumeRead = () => handler.call(transaction, event);
            });
          },
        });
      }
      return transaction;
    };
  });
  await button("S").click();
  await page.waitForFunction(() => window.qaReadPaused);
  await button("Schimbă alegerea").click();
  await page
    .getByRole("heading", { name: "Ce exersăm astăzi?", exact: true })
    .waitFor();
  assert.equal(
    await page.evaluate(async () =>
      (await navigator.locks.query()).held.some(
        (lock) => lock.name === "word-wheel:configurations",
      ),
    ),
    true,
    "Navigation retains the lock until initialization settles",
  );
  await other.evaluate(() => {
    window.navigationRestore = (async () => {
      const api = window.practiceQA;
      const lease = await api.acquireConfigurationLock(
        new AbortController().signal,
      );
      try {
        const current = await api.readPracticeState();
        const backup = api.createPracticeBackup(current);
        backup.data.activeConfigurations["ro:letter:s"] = {
          mode: "starts-with",
          excludedTargetKeys: [],
          wheelWordCount: 3,
          wordSelectionMode: "all",
          selectedWordIds: [],
        };
        await api.mutatePracticeState(
          (state) => api.applyPracticeBackup(state, backup),
          current.revision,
        );
        const settled =
          await api.initializePracticeStoreWithConfigurationLockHeld();
        return [
          settled.activeConfigurations["ro:letter:s"].wheelWordCount,
          JSON.parse(localStorage.getItem("word-wheel.setup.v1"))
            .activeConfigsByTargetKey["ro:letter:s"].wheelWordCount,
        ];
      } finally {
        lease.release();
      }
    })();
  });
  await other.waitForFunction(async () =>
    (await navigator.locks.query()).pending.some(
      (lock) => lock.name === "word-wheel:configurations",
    ),
  );
  await page.evaluate(() => {
    IDBDatabase.prototype.transaction = window.qaTransaction;
    window.qaResumeRead();
  });
  assert.deepEqual(
    await other.evaluate(() => window.navigationRestore),
    [3, 3],
    "A later restore wins after abandoned initialization settles",
  );
  await button("S").click();
  await button("4 Final").click();
  await page
    .getByText("Salvează roata pentru altă dată", { exact: true })
    .click();
  await page.getByLabel("Nume configurație", { exact: true }).fill("Retry QA");
  const patchWrites = async (failAt) =>
    page.evaluate((failAt) => {
      window.qaSet = Storage.prototype.setItem;
      let count = 0;
      Storage.prototype.setItem = function (key, value) {
        if (key === "word-wheel.setup.v1" && (!failAt || ++count === failAt))
          throw new DOMException("QA quota", "QuotaExceededError");
        return window.qaSet.call(this, key, value);
      };
    }, failAt);
  const recoverWrites = () =>
    page.evaluate(() => (Storage.prototype.setItem = window.qaSet));
  await patchWrites(0);
  await button("Salvează ca nouă").click();
  await page.locator(".setup-wizard-card__body .setup-write-error").waitFor();
  assert.equal(
    await page.getByLabel("Nume configurație", { exact: true }).inputValue(),
    "Retry QA",
  );
  assert.equal(
    await page.evaluate(
      () =>
        JSON.parse(
          localStorage.getItem("word-wheel.setup.v1") || '{"savedSetups":[]}',
        ).savedSetups.length,
    ),
    0,
  );
  await captureEvidence(page, "release-setup-save-failure-mobile");
  await recoverWrites();
  await button("Salvează ca nouă").click();
  await page.locator(".setup-save-feedback[data-kind=success]").waitFor();
  assert.equal(
    await page.evaluate(
      () =>
        JSON.parse(localStorage.getItem("word-wheel.setup.v1")).savedSetups
          .length,
    ),
    1,
  );
  await patchWrites(0);
  await button("Pornește roata").click();
  await page.locator(".setup-wizard-card__body .setup-write-error").waitFor();
  assert.equal(await page.locator(".practice-word-preview").count(), 0);
  await recoverWrites();
  await button("Pornește roata").click();
  await page.locator(".practice-word-preview").waitFor();
  await button("Modifică roata").click();
  await button("Configurații salvate").click();
  await button("Configurație nouă").click();
  await button("4 Final").click();
  await page
    .getByText("Salvează roata pentru altă dată", { exact: true })
    .click();
  await page
    .getByLabel("Nume configurație", { exact: true })
    .fill("Partial QA");
  await patchWrites(2);
  await button("Salvează și pornește").click();
  await page
    .locator(".setup-wizard-card__body .setup-write-error")
    .filter({ hasText: "Roata a fost salvată" })
    .waitFor();
  assert.equal(
    await page.evaluate(
      () =>
        JSON.parse(
          localStorage.getItem("word-wheel.setup.v1"),
        ).savedSetups.filter((c) => c.name === "Partial QA").length,
    ),
    1,
  );
  await captureEvidence(page, "release-setup-partial-save-mobile");
  await recoverWrites();
  await button("Pornește roata").click();
  await page.locator(".practice-word-preview").waitFor();
  assert.equal(
    await page.evaluate(
      () =>
        JSON.parse(
          localStorage.getItem("word-wheel.setup.v1"),
        ).savedSetups.filter((c) => c.name === "Partial QA").length,
    ),
    1,
    "Retry start never saves a duplicate",
  );
  assert.deepEqual(errors, []);
  console.log(
    "Release regressions passed: configuration-lock/fresh mirror, initialization navigation lifecycle, real two-tab stale profile conflict, save/start quota retries and honest partial save-and-start.",
  );
} finally {
  await browser?.close();
  await rm(output, { recursive: true, force: true });
}
