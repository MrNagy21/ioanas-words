let audio: AudioContext | undefined;
export function unlockCelebrationSound() {
  try {
    audio ??= new AudioContext();
    void audio.resume().catch(() => {});
  } catch {
    /* Sound is optional. */
  }
}
export function playCelebrationSound() {
  if (!audio || audio.state !== "running") return;
  const start = audio.currentTime;
  [523.25, 659.25, 783.99].forEach((frequency, index) => {
    const oscillator = audio!.createOscillator();
    const gain = audio!.createGain();
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0, start + index * 0.09);
    gain.gain.linearRampToValueAtTime(0.045, start + index * 0.09 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, start + index * 0.09 + 0.23);
    oscillator.connect(gain);
    gain.connect(audio!.destination);
    oscillator.start(start + index * 0.09);
    oscillator.stop(start + index * 0.09 + 0.25);
    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
    };
  });
}
