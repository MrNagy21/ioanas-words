import assert from "node:assert/strict";
import { launchQABrowser, captureEvidence } from "./browser-runtime.mjs";

const browser = await launchQABrowser();
try {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
  });
  await context.addInitScript(() => {
    window.gameAudio = [];
    const NativeAudioContext = window.AudioContext;
    window.AudioContext = class extends NativeAudioContext {
      constructor(...args) {
        super(...args);
        const entry = { context: this, nodes: [] };
        window.gameAudio.push(entry);
        const create = this.createOscillator.bind(this);
        this.createOscillator = () => {
          const oscillator = create();
          const node = {
            start: 0,
            frequencies: [],
            ended: false,
            cancelled: false,
          };
          entry.nodes.push(node);
          const frequency = oscillator.frequency.setValueAtTime.bind(
            oscillator.frequency,
          );
          oscillator.frequency.setValueAtTime = (value, at) => {
            node.frequencies.push(value);
            return frequency(value, at);
          };
          const start = oscillator.start.bind(oscillator);
          oscillator.start = (when) => {
            node.start = when;
            start(when);
          };
          const stop = oscillator.stop.bind(oscillator);
          oscillator.stop = (when) => {
            if (!when) node.cancelled = true;
            stop(when);
          };
          oscillator.addEventListener("ended", () => {
            node.ended = true;
          });
          return oscillator;
        };
      }
    };
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const sound = () =>
    page.getByRole("button", { name: /^Sunet (pornit|oprit) · Roată/ });
  const spin = () => page.getByRole("button", { name: "Învârte", exact: true });
  const silence = () =>
    page.waitForFunction(() =>
      window.gameAudio.every((a) =>
        a.nodes.every((n) => n.ended || n.cancelled),
      ),
    );
  const played = (frequency) =>
    page.evaluate(
      (f) =>
        window.gameAudio
          .flatMap((a) => a.nodes)
          .filter((n) => n.frequencies.includes(f)).length,
      frequency,
    );

  await page.goto("http://localhost:3000/ro/play/r");
  await sound().waitFor();
  assert.equal(await sound().getAttribute("aria-pressed"), "false");
  assert.equal(await page.evaluate(() => window.gameAudio.length), 0);
  await sound().click();
  await spin().click();
  await page.waitForFunction(() => window.gameAudio.at(-1)?.nodes.length > 5);
  const timings = await page.evaluate(() =>
    window.gameAudio.at(-1).nodes.map((n) => n.start),
  );
  assert.ok(
    timings.at(-1) - timings.at(-2) > timings[1] - timings[0],
    "Ticks slow down",
  );
  await captureEvidence(page, "game-sound-phone");
  await sound().click();
  await silence();
  await page.getByRole("dialog").waitFor();
  assert.equal(
    await played(880),
    0,
    "Muting mid-spin also mutes the later word reveal",
  );
  await page.reload();
  await sound().waitFor();
  assert.equal(
    await sound().getAttribute("aria-pressed"),
    "false",
    "Mute survives reload",
  );
  await sound().click();
  await page.reload();
  await sound().waitFor();
  assert.equal(
    await sound().getAttribute("aria-pressed"),
    "true",
    "Opt-in survives reload",
  );
  await spin().click();
  await page.getByRole("dialog").waitFor();
  assert.equal(
    await played(880),
    1,
    "One chime accompanies the displayed word",
  );
  await silence();

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.reload();
  await sound().waitFor();
  await captureEvidence(page, "game-sound-desktop");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await spin().click();
  await page.getByRole("dialog").waitFor();
  assert.equal(
    await played(880),
    1,
    "Reduced motion retains the opted-in reveal sound",
  );
  await silence();

  // Demo sound must follow the wheel into the medal and back, without saved data writes.
  await page.goto("http://localhost:3000/ro/demo");
  await sound().waitFor();
  assert.equal(await sound().getAttribute("aria-pressed"), "false");
  const before = await page.evaluate(() => JSON.stringify(localStorage));
  await sound().click();
  await spin().click();
  await page.getByRole("dialog").waitFor();
  await page.getByRole("button", { name: "Păstrează", exact: true }).click();
  await page
    .getByRole("heading", { name: "Bravo! Prima medalie!", exact: true })
    .waitFor();
  assert.equal(await played(523.25), 1, "Confetti/medal sound plays once");
  await silence();
  await captureEvidence(page, "game-sound-medal-desktop");
  await page.setViewportSize({ width: 390, height: 844 });
  await captureEvidence(page, "game-sound-medal-phone");
  await sound().click();
  await page
    .getByRole("button", { name: "Continuă demonstrația", exact: true })
    .click();
  await sound().waitFor();
  assert.equal(
    await sound().getAttribute("aria-pressed"),
    "false",
    "Medal mute is retained on the wheel",
  );
  const countBeforeMuted = await page.evaluate(
    () => window.gameAudio.flatMap((a) => a.nodes).length,
  );
  await spin().click();
  await page.getByRole("dialog").waitFor();
  assert.equal(
    await page.evaluate(() => window.gameAudio.flatMap((a) => a.nodes).length),
    countBeforeMuted,
    "All effects stay muted",
  );
  assert.equal(await page.evaluate(() => JSON.stringify(localStorage)), before);
  await page.reload();
  await sound().waitFor();
  assert.equal(await sound().getAttribute("aria-pressed"), "false");

  // Unavailable audio never blocks the word, its result closure or the medal.
  await page.evaluate(() => {
    window.AudioContext = class {
      constructor() {
        throw new Error("Unavailable");
      }
    };
  });
  await sound().click();
  await spin().click();
  await page.getByRole("dialog").waitFor();
  await page.getByRole("button", { name: "Păstrează", exact: true }).click();
  await page
    .getByRole("heading", { name: "Bravo! Prima medalie!", exact: true })
    .waitFor();
  assert.deepEqual(errors, []);
  console.log(
    "Game sound QA passed: slowing ticks, word chime, confetti chord, shared mute, reload, reduced motion, isolated demo and unsupported audio.",
  );
} finally {
  await browser.close();
}
