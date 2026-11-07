type SoundContext = {
  context: AudioContext;
  ready: Promise<boolean>;
  cancelResume?: () => void;
  wasRunning: boolean;
};

let audio: SoundContext | undefined;
const active = new Set<() => void>();
let listening = false;

function setSessionType(type: "playback" | "auto") {
  try {
    const session = (
      navigator as Navigator & { audioSession?: { type: string } }
    ).audioSession;
    if (session && session.type !== type) session.type = type;
  } catch {}
}

export function stopGameSounds() {
  const previous = audio;
  audio = undefined;
  for (const cancel of [...active]) cancel();
  previous?.cancelResume?.();
  if (previous) {
    previous.context.onstatechange = null;
    try {
      if (previous.context.state !== "closed")
        void previous.context.close().catch(() => {});
    } catch {}
  }
  setSessionType("auto");
}

function resumeSound(instance: SoundContext) {
  const { context } = instance;
  if (context.state === "running") {
    instance.wasRunning = true;
    return Promise.resolve(true);
  }
  if (instance.cancelResume) return instance.ready;
  instance.ready = new Promise<boolean>((resolve) => {
    let settled = false;
    const timer = window.setTimeout(() => finish(false), 1000);
    const finish = (ready: boolean) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      instance.cancelResume = undefined;
      instance.wasRunning = ready;
      resolve(ready && audio === instance);
      if (!ready && audio === instance) stopGameSounds();
    };
    instance.cancelResume = () => finish(false);
    try {
      void context.resume().then(
        () => finish(context.state === "running"),
        () => finish(false),
      );
    } catch {
      finish(false);
    }
  });
  return instance.ready;
}

export function unlockGameSound() {
  if (document.hidden) return;
  try {
    if (!listening) {
      listening = true;
      window.addEventListener("pagehide", stopGameSounds);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stopGameSounds();
      });
    }
    if (
      audio &&
      (audio.context.state === "closed" ||
        (audio.wasRunning && audio.context.state !== "running"))
    )
      stopGameSounds();
    setSessionType("playback");
    if (!audio) {
      const AudioContextClass =
        window.AudioContext ??
        (window as Window & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      const context = new AudioContextClass();
      const instance: SoundContext = {
        context,
        ready: Promise.resolve(false),
        wasRunning: context.state === "running",
      };
      audio = instance;
      context.onstatechange = () => {
        if (audio !== instance) return;
        if (context.state === "running") instance.wasRunning = true;
        else if (instance.wasRunning || context.state === "closed")
          stopGameSounds();
      };
    }
    void resumeSound(audio);
  } catch {
    stopGameSounds();
  }
}

type Note = { at: number; frequency: number; duration: number; tick?: boolean };
function play(notes: Note[]) {
  if (!audio || document.hidden) return () => {};
  const instance = audio;
  const { context } = instance;
  const requestedAt = performance.now();
  type SoundNode = { oscillator: OscillatorNode; envelope?: GainNode };
  const nodes = new Set<SoundNode>();
  let monitor: number | undefined;
  let cancelled = false;
  const release = (node: SoundNode) => {
    nodes.delete(node);
    node.oscillator.onended = null;
    try {
      node.oscillator.stop();
    } catch {}
    try {
      node.oscillator.disconnect();
    } catch {}
    try {
      node.envelope?.disconnect();
    } catch {}
  };
  const cancel = () => {
    if (cancelled) return;
    cancelled = true;
    window.clearInterval(monitor);
    active.delete(cancel);
    for (const node of nodes) release(node);
  };
  active.add(cancel);
  const schedule = () => {
    if (cancelled || audio !== instance || document.hidden) {
      cancel();
      return;
    }
    try {
      const elapsed = (performance.now() - requestedAt) / 1000;
      const now = context.currentTime;
      const origin = now - elapsed;
      let endsAt = now;
      for (const note of notes) {
        const end = origin + note.at + note.duration;
        if (end <= now) continue;
        const oscillator = context.createOscillator();
        const node: SoundNode = { oscillator };
        nodes.add(node);
        const envelope = context.createGain();
        node.envelope = envelope;
        const at = Math.max(now, origin + note.at);
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(note.frequency, at);
        if (note.tick)
          oscillator.frequency.exponentialRampToValueAtTime(400, end);
        envelope.gain.setValueAtTime(0, at);
        envelope.gain.linearRampToValueAtTime(
          note.tick ? 0.07 : 0.06,
          at + Math.min(0.003, (end - at) / 2),
        );
        envelope.gain.exponentialRampToValueAtTime(0.0001, end);
        oscillator.connect(envelope);
        envelope.connect(context.destination);
        oscillator.onended = () => {
          release(node);
          if (nodes.size === 0) cancel();
        };
        oscillator.start(at);
        oscillator.stop(end + 0.005);
        endsAt = Math.max(endsAt, end + 0.005);
      }
      if (nodes.size === 0) {
        cancel();
        return;
      }
      let lastTime = context.currentTime;
      let stalled = 0;
      monitor = window.setInterval(() => {
        const now = context.currentTime;
        stalled = now > lastTime ? 0 : stalled + 1;
        lastTime = now;
        if (now > endsAt + 0.1) cancel();
        else if (document.hidden || context.state !== "running" || stalled >= 2)
          if (audio === instance) stopGameSounds();
      }, 250);
    } catch {
      if (audio === instance) stopGameSounds();
      else cancel();
    }
  };
  if (context.state === "running") schedule();
  else
    void resumeSound(instance).then((ready) => (ready ? schedule() : cancel()));
  return cancel;
}

export function playSpinSound(durationMs: number) {
  const notes: Note[] = [];
  for (let elapsed = 0; elapsed + 35 < durationMs; ) {
    notes.push({
      at: elapsed / 1000,
      frequency: 850,
      duration: 0.03,
      tick: true,
    });
    elapsed += 65 + 600 * (elapsed / durationMs) ** 1.4;
  }
  return play(notes);
}

export function playWordSound() {
  return play([
    { at: 0, frequency: 659.25, duration: 0.12 },
    { at: 0.07, frequency: 880, duration: 0.15 },
  ]);
}

export function playCelebrationSound() {
  return play(
    [523.25, 659.25, 783.99].map((frequency, index) => ({
      at: index * 0.09,
      frequency,
      duration: 0.23,
    })),
  );
}
