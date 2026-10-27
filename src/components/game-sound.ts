/** Short synthesized effects. One context is unlocked by an explicit user gesture. */
let audio: AudioContext | undefined;
const active = new Set<() => void>();
let listening = false;

export function stopGameSounds() {
  for (const cancel of [...active]) cancel();
}

export function unlockGameSound() {
  try {
    if (!audio || audio.state === "closed") audio = new AudioContext();
    if (!listening) {
      listening = true;
      window.addEventListener("pagehide", () => {
        stopGameSounds();
        const previous = audio;
        audio = undefined;
        if (previous && previous.state !== "closed")
          void previous.close().catch(() => {});
      });
    }
    void audio.resume().catch(() => stopGameSounds());
  } catch {
    // A missing API or autoplay restriction must never block the game.
  }
}

type Note = { at: number; frequency: number; duration: number; tick?: boolean };
function play(notes: Note[]) {
  if (!audio || audio.state === "closed" || document.hidden) return () => {};
  const context = audio;
  const nodes: { oscillator: OscillatorNode; envelope: GainNode }[] = [];
  let cancelled = false;
  const cancel = () => {
    if (cancelled) return;
    cancelled = true;
    active.delete(cancel);
    for (const { oscillator, envelope } of nodes) {
      oscillator.stop();
      oscillator.disconnect();
      envelope.disconnect();
    }
  };
  active.add(cancel);
  try {
    const origin = context.currentTime;
    let remaining = notes.length;
    for (const note of notes) {
      const oscillator = context.createOscillator();
      const envelope = context.createGain();
      const at = origin + note.at;
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(note.frequency, at);
      if (note.tick)
        oscillator.frequency.exponentialRampToValueAtTime(400, at + 0.03);
      envelope.gain.setValueAtTime(0, at);
      envelope.gain.linearRampToValueAtTime(
        note.tick ? 0.07 : 0.06,
        at + 0.003,
      );
      envelope.gain.exponentialRampToValueAtTime(0.0001, at + note.duration);
      oscillator.connect(envelope);
      envelope.connect(context.destination);
      oscillator.start(at);
      oscillator.stop(at + note.duration + 0.005);
      nodes.push({ oscillator, envelope });
      oscillator.onended = () => {
        oscillator.disconnect();
        envelope.disconnect();
        if (--remaining === 0) active.delete(cancel);
      };
    }
  } catch {
    cancel();
  }
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
