import {
  applyPracticeBackup,
  createPracticeBackup,
  type PracticeBackup,
} from "@/storage/practice-backup";
import {
  initializePracticeStoreWithConfigurationLockHeld,
  mutatePracticeState,
} from "@/storage/practice-store";
import { acquireConfigurationLock } from "@/storage/session-lock";

export async function snapshotPracticeBackup(childId?: string) {
  const controller = new AbortController();
  const lock = await acquireConfigurationLock(controller.signal);
  try {
    return createPracticeBackup(
      await initializePracticeStoreWithConfigurationLockHeld(),
      childId,
    );
  } finally {
    lock.release();
    controller.abort();
  }
}

export async function restorePracticeBackup(
  backup: PracticeBackup,
  expectedRevision: number,
) {
  const controller = new AbortController();
  const lock = await acquireConfigurationLock(controller.signal);
  try {
    const restored = await mutatePracticeState(
      (state) => applyPracticeBackup(state, backup),
      expectedRevision,
    );
    // Canonical data is committed atomically above. This recoverable mirror keeps
    // the existing synchronous setup wizard compatible with restored libraries.
    try {
      return {
        state: await initializePracticeStoreWithConfigurationLockHeld(),
        warning: null,
      };
    } catch {
      return {
        state: restored,
        warning:
          "Datele sunt restaurate. Roțile salvate așteaptă actualizarea memoriei browserului. Eliberați spațiu și reîncărcați înainte de a edita roțile.",
      };
    }
  } finally {
    lock.release();
    controller.abort();
  }
}
