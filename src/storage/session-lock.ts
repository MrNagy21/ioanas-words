// Browser locks end with the document. A short queue allows React's mount replay
// to release its cancelled request; it never takes control from another tab.
export function acquireSessionLock(
  sessionId: string,
  signal: AbortSignal,
): Promise<{ ownerId: string; release: () => void }> {
  return acquireBrowserLock(
    `word-wheel:session:${sessionId}`,
    signal,
    "Exersarea este deja deschisă în altă filă. Închideți-o acolo și încercați din nou.",
  );
}

export function acquireConfigurationLock(signal: AbortSignal) {
  return acquireBrowserLock(
    "word-wheel:configurations",
    signal,
    "Roțile sunt editate în altă filă. Închideți editorul de acolo și încercați din nou.",
  );
}

function acquireBrowserLock(
  name: string,
  signal: AbortSignal,
  unavailable: string,
): Promise<{ ownerId: string; release: () => void }> {
  return new Promise((resolve, reject) => {
    if (!navigator.locks) {
      reject(
        new Error(
          "Acest browser nu permite protejarea exersării între file. Folosiți o versiune recentă sau jocul fără profil.",
        ),
      );
      return;
    }
    const controller = new AbortController();
    const cancel = () => controller.abort();
    signal.addEventListener("abort", cancel, { once: true });
    if (signal.aborted) controller.abort();
    const timer = window.setTimeout(() => controller.abort(), 1000);
    void navigator.locks
      .request(name, { signal: controller.signal }, async () => {
        window.clearTimeout(timer);
        await new Promise<void>((finish) => {
          const release = () => {
            signal.removeEventListener("abort", release);
            finish();
          };
          signal.removeEventListener("abort", cancel);
          signal.addEventListener("abort", release, { once: true });
          if (signal.aborted) {
            release();
            return;
          }
          resolve({ ownerId: crypto.randomUUID(), release });
        });
      })
      .catch(() => reject(new Error(unavailable)))
      .finally(() => {
        window.clearTimeout(timer);
        signal.removeEventListener("abort", cancel);
      });
  });
}
