import assert from "node:assert/strict";
import {
  playCelebrationSound,
  playSpinSound,
  playWordSound,
  stopGameSounds,
  unlockGameSound,
} from "./game-sound";

let now = 0;
let nextTimer = 0;
const timers = new Map<
  number,
  { at: number; callback: () => void; interval?: number }
>();
function setTimer(callback: () => void, delay: number, interval?: number) {
  const timer = ++nextTimer;
  timers.set(timer, { at: now + delay, callback, interval });
  return timer;
}
function advance(milliseconds: number) {
  const end = now + milliseconds;
  for (;;) {
    const next = [...timers.entries()]
      .filter(([, timer]) => timer.at <= end)
      .sort((left, right) => left[1].at - right[1].at)[0];
    if (!next) break;
    const [id, timer] = next;
    now = timer.at;
    if (timer.interval) timer.at += timer.interval;
    else timers.delete(id);
    timer.callback();
  }
  now = end;
}
async function settle() {
  for (let turn = 0; turn < 4; turn++) await Promise.resolve();
}

class Parameter {
  values: number[] = [];
  setValueAtTime(value: number) {
    this.values.push(value);
  }
  linearRampToValueAtTime(value: number) {
    this.values.push(value);
  }
  exponentialRampToValueAtTime(value: number) {
    this.values.push(value);
  }
}
class Gain {
  gain = new Parameter();
  disconnected = false;
  connect() {}
  disconnect() {
    this.disconnected = true;
  }
}
class Oscillator {
  frequency = new Parameter();
  type = "sine";
  onended: (() => void) | null = null;
  disconnected = false;
  cancelled = false;
  startAt: number | undefined;
  timer: number | undefined;
  throwOnStop = false;
  constructor(private context: Context) {}
  connect() {}
  disconnect() {
    this.disconnected = true;
  }
  start(at: number) {
    assert.equal(this.context.state, "running");
    this.startAt = at;
  }
  stop(at?: number) {
    if (this.timer) timers.delete(this.timer);
    if (at === undefined) this.cancelled = true;
    if (this.throwOnStop) throw new Error("Cannot stop source");
    if (at !== undefined)
      this.timer = setTimer(
        () => {
          if (
            this.context.state === "running" &&
            !this.context.frozen &&
            this.context.emitEnded
          )
            this.onended?.();
        },
        Math.max(0, (at - this.context.currentTime) * 1000),
      );
  }
}

type ResumeMode = "immediate" | "delayed" | "reject" | "throw" | "hang";
let resumeMode: ResumeMode = "immediate";
const contexts: Context[] = [];
class Context {
  state = "suspended";
  onstatechange: (() => void) | null = null;
  oscillators: Oscillator[] = [];
  gains: Gain[] = [];
  destination = {};
  frozen = false;
  emitEnded = true;
  runningAt = 0;
  resumeCalls = 0;
  failGain = false;
  completeResume: (() => void) | undefined;
  rejectResume: (() => void) | undefined;
  constructor() {
    contexts.push(this);
  }
  get currentTime() {
    return this.state === "running" && !this.frozen
      ? (now - this.runningAt) / 1000
      : 0;
  }
  setState(state: string) {
    this.state = state;
    this.onstatechange?.();
  }
  resume() {
    this.resumeCalls++;
    if (resumeMode === "throw") throw new Error("Resume failed");
    if (resumeMode === "reject") return Promise.reject(new Error("Blocked"));
    return new Promise<void>((resolve, reject) => {
      this.completeResume = () => {
        this.runningAt = now;
        this.setState("running");
        resolve();
      };
      this.rejectResume = () => reject(new Error("Late failure"));
      if (resumeMode === "immediate") this.completeResume();
    });
  }
  close() {
    this.setState("closed");
    return Promise.resolve();
  }
  createOscillator() {
    const oscillator = new Oscillator(this);
    this.oscillators.push(oscillator);
    return oscillator;
  }
  createGain() {
    if (this.failGain) throw new Error("Gain creation failed");
    const gain = new Gain();
    this.gains.push(gain);
    return gain;
  }
}

const session = { type: "auto" };
const page = Object.assign(new EventTarget(), { hidden: false });
const browser = Object.assign(new EventTarget(), {
  AudioContext: Context as typeof Context | undefined,
  webkitAudioContext: Context as typeof Context | undefined,
  setTimeout: (callback: () => void, delay: number) =>
    setTimer(callback, delay),
  clearTimeout: (id: number) => timers.delete(id),
  setInterval: (callback: () => void, delay: number) =>
    setTimer(callback, delay, delay),
  clearInterval: (id: number) => timers.delete(id),
});
Object.defineProperties(globalThis, {
  window: { value: browser, configurable: true },
  document: { value: page, configurable: true },
  navigator: { value: { audioSession: session }, configurable: true },
  performance: { value: { now: () => now }, configurable: true },
});
function reset(mode: ResumeMode = "immediate") {
  stopGameSounds();
  assert.equal(timers.size, 0, "All audio timers are released");
  contexts.length = 0;
  resumeMode = mode;
  page.hidden = false;
  browser.AudioContext = Context;
  browser.webkitAudioContext = Context;
}
function current() {
  return contexts.at(-1)!;
}
function assertReleased(context: Context) {
  assert.ok(context.oscillators.every((node) => node.disconnected));
  assert.ok(context.gains.every((node) => node.disconnected));
}

assert.equal(contexts.length, 0);
playWordSound();
assert.equal(contexts.length, 0, "Playback cannot bypass gesture unlock");
unlockGameSound();
await settle();
assert.equal(session.type, "playback", "Game audio requests media playback");
for (let spin = 0; spin < 100; spin++) {
  unlockGameSound();
  playSpinSound(8000);
  advance(8000);
  playWordSound();
  advance(300);
  playCelebrationSound();
  advance(500);
  assertReleased(current());
  assert.equal(timers.size, 0);
}
assert.equal(contexts.length, 1, "Healthy audio is reused across 100 rounds");
assert.ok(current().gains.some((gain) => gain.gain.values.includes(0.07)));
assert.ok(current().gains.some((gain) => gain.gain.values.includes(0.06)));

reset();
unlockGameSound();
await settle();
current().emitEnded = false;
playWordSound();
advance(1000);
assertReleased(current());
assert.equal(current().state, "running");
assert.equal(
  timers.size,
  0,
  "Missing ended events cannot retain sources or timers",
);

reset("delayed");
unlockGameSound();
const delayed = current();
playSpinSound(3000);
unlockGameSound();
assert.equal(delayed.resumeCalls, 1, "Concurrent unlocks share a resume");
assert.equal(
  delayed.oscillators.length,
  0,
  "Wait for resume before scheduling",
);
advance(300);
delayed.completeResume?.();
await settle();
assert.ok(delayed.oscillators.length > 0);
assert.ok(delayed.oscillators.length < 20, "Missed ticks are not replayed");
advance(3000);
assertReleased(delayed);

reset("delayed");
unlockGameSound();
const stale = current();
playWordSound();
advance(400);
stale.completeResume?.();
await settle();
assert.equal(stale.oscillators.length, 0, "Expired chimes are dropped");

reset("delayed");
unlockGameSound();
const cancelled = current();
const cancelPending = playSpinSound(3000);
cancelPending();
cancelled.completeResume?.();
await settle();
assert.equal(cancelled.oscillators.length, 0, "Cancelled resumes stay silent");

for (const state of ["interrupted", "suspended", "closed"]) {
  reset();
  unlockGameSound();
  await settle();
  const interrupted = current();
  playSpinSound(8000);
  interrupted.setState(state);
  assertReleased(interrupted);
  assert.equal(session.type, "auto");
  unlockGameSound();
  await settle();
  playWordSound();
  assert.equal(contexts.length, 2, `${state} recovers without a refresh`);
  assert.equal(current().oscillators.length, 2);
  advance(300);
}

reset();
unlockGameSound();
await settle();
const frozen = current();
frozen.frozen = true;
playSpinSound(8000);
advance(500);
assert.equal(frozen.state, "closed", "Detect a frozen running audio clock");
assertReleased(frozen);
unlockGameSound();
await settle();
playCelebrationSound();
assert.equal(contexts.length, 2);
advance(500);

for (const mode of ["reject", "throw", "hang"] as const) {
  reset(mode);
  unlockGameSound();
  playWordSound();
  advance(1000);
  await settle();
  assert.equal(current().state, "closed", `${mode} releases unusable audio`);
  resumeMode = "immediate";
  unlockGameSound();
  await settle();
  playWordSound();
  assert.equal(current().oscillators.length, 2);
  advance(300);
}

reset("delayed");
unlockGameSound();
const old = current();
playSpinSound(8000);
stopGameSounds();
resumeMode = "immediate";
unlockGameSound();
await settle();
playSpinSound(8000);
old.rejectResume?.();
await settle();
assert.equal(
  current().state,
  "running",
  "A late failure cannot stop new audio",
);
assert.ok(current().oscillators.every((node) => !node.cancelled));
advance(8000);

for (const event of ["visibilitychange", "pagehide"]) {
  reset();
  unlockGameSound();
  await settle();
  playSpinSound(8000);
  const hidden = current();
  if (event === "visibilitychange") {
    page.hidden = true;
    page.dispatchEvent(new Event(event));
    unlockGameSound();
    playWordSound();
    assert.equal(contexts.length, 1, "Hidden pages cannot create audio");
    page.hidden = false;
    page.dispatchEvent(new Event(event));
  } else browser.dispatchEvent(new Event(event));
  assert.equal(hidden.state, "closed");
  assertReleased(hidden);
  assert.equal(timers.size, 0);
  assert.equal(
    contexts.length,
    1,
    "Restoring the page does not replay effects",
  );
  unlockGameSound();
  await settle();
  playWordSound();
  assert.equal(
    contexts.length,
    2,
    "The next gesture recovers after page restore",
  );
  advance(300);
}

reset();
unlockGameSound();
await settle();
current().failGain = true;
playWordSound();
assertReleased(current());
assert.equal(
  current().state,
  "closed",
  "Partial allocation releases the context",
);
unlockGameSound();
await settle();
const cancelThrowing = playCelebrationSound();
current().oscillators[0].throwOnStop = true;
cancelThrowing();
cancelThrowing();
assertReleased(current());
assert.equal(timers.size, 0, "A failing source does not interrupt cleanup");

reset();
browser.AudioContext = undefined;
unlockGameSound();
await settle();
playWordSound();
assert.equal(
  current().oscillators.length,
  2,
  "Support the prefixed context API",
);
advance(300);
reset();
browser.AudioContext = undefined;
browser.webkitAudioContext = undefined;
unlockGameSound();
playWordSound();
assert.equal(contexts.length, 0, "Missing audio does not throw");
assert.equal(session.type, "auto");
reset();
Object.defineProperty(navigator, "audioSession", {
  get() {
    throw new Error("Unsupported audio session");
  },
  configurable: true,
});
unlockGameSound();
await settle();
playWordSound();
advance(300);
assertReleased(current());
reset();
console.log(
  "Game audio lifecycle passed: 100 rounds, deferred/failed resumes, stale effects, interruptions, frozen clocks, background/restore, cleanup and optional APIs.",
);
