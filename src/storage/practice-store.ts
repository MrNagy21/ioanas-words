import { acquireConfigurationLock } from "@/storage/session-lock";
import {
  emptyPracticeState,
  decodePracticeState,
  validatePracticeState,
  type LocalPracticeState,
} from "@/practice/model";
import {
  parseWheelSetupStoreForMigration,
  WHEEL_SETUP_STORAGE_KEY,
} from "@/game/wheel-setup-storage";

export const PRACTICE_DATABASE = "word-wheel.practice";
const STORE = "documents";
const KEY = "practice";
const CHANGE_EVENT = "word-wheel:practice-change";

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!globalThis.indexedDB)
      return reject(
        new Error(
          "Salvarea locală nu este disponibilă. Puteți folosi jocul fără profil.",
        ),
      );
    const request = indexedDB.open(PRACTICE_DATABASE, 1);
    let blocked = false;
    request.onupgradeneeded = () => {
      request.result.createObjectStore(STORE);
    };
    request.onblocked = () => {
      blocked = true;
      reject(
        new Error("Închideți celelalte file Word Wheel și încercați din nou."),
      );
    };
    request.onerror = () =>
      reject(
        new Error(
          "Nu putem deschide datele locale. Încercați din nou sau folosiți jocul fără profil.",
        ),
      );
    request.onsuccess = () => {
      const database = request.result;
      if (blocked) {
        database.close();
        return;
      }
      database.onversionchange = () => database.close();
      resolve(database);
    };
  });
}

export async function readPracticeState(): Promise<LocalPracticeState> {
  const database = await openDatabase();
  try {
    return await new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE, "readonly");
      const request = transaction.objectStore(STORE).get(KEY);
      let state: LocalPracticeState;
      request.onsuccess = () => {
        try {
          state = decodePracticeState(request.result ?? emptyPracticeState());
        } catch (error) {
          reject(error);
        }
      };
      transaction.oncomplete = () => resolve(state);
      transaction.onabort = () =>
        reject(
          transaction.error ?? new Error("Citirea datelor a fost întreruptă."),
        );
      transaction.onerror = () => reject(transaction.error);
    });
  } finally {
    database.close();
  }
}

export async function mutatePracticeState(
  command: (state: LocalPracticeState) => void,
  expectedRevision?: number,
): Promise<LocalPracticeState> {
  const database = await openDatabase();
  let result: LocalPracticeState;
  try {
    result = await new Promise((resolve, reject) => {
      const transaction = database.transaction(STORE, "readwrite");
      const store = transaction.objectStore(STORE);
      const request = store.get(KEY);
      let state: LocalPracticeState;
      let commandError: unknown;
      request.onsuccess = () => {
        try {
          state = decodePracticeState(request.result ?? emptyPracticeState());
          if (
            expectedRevision !== undefined &&
            state.revision !== expectedRevision
          )
            throw new Error(
              "Datele s-au schimbat într-o altă filă. Reîncărcați înainte de a salva.",
            );
          const returned = command(state) as unknown;
          if (
            returned &&
            typeof (returned as { then?: unknown }).then === "function"
          )
            throw new Error("Comanda de salvare trebuie să fie sincronă.");
          state.revision += 1;
          validatePracticeState(state);
          store.put(state, KEY);
        } catch (error) {
          commandError = error;
          transaction.abort();
        }
      };
      transaction.oncomplete = () => resolve(state);
      transaction.onabort = () =>
        reject(
          commandError instanceof DOMException &&
            commandError.name === "QuotaExceededError"
            ? new Error(
                "Nu mai este suficient spațiu pentru salvare. Datele de până acum sunt păstrate. Eliberați spațiu și încercați din nou.",
              )
            : (commandError ??
                new Error(
                  "Salvarea nu a reușit. Datele anterioare au fost păstrate. Eliberați spațiu și încercați din nou.",
                )),
        );
      transaction.onerror = () => {
        /* onabort reports a recoverable saving error. */
      };
    });
  } finally {
    database.close();
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
  if (typeof BroadcastChannel !== "undefined") {
    const channel = new BroadcastChannel(CHANGE_EVENT);
    channel.postMessage(result.revision);
    channel.close();
  }
  return result;
}

export async function initializePracticeStore() {
  const controller = new AbortController();
  const lock = await acquireConfigurationLock(controller.signal);
  try {
    return await initializePracticeStoreWithConfigurationLockHeld();
  } finally {
    lock.release();
    controller.abort();
  }
}

// Only configuration-lock owners may reconcile the synchronous compatibility
// mirror. Read fresh state after acquisition, including after a queued restore.
export async function initializePracticeStoreWithConfigurationLockHeld() {
  const state = await readPracticeState();
  if (state.legacyFingerprint === "pending-config-mirror") {
    const mirror = JSON.stringify({
      schemaVersion: 2,
      savedSetups: state.configurations,
      activeConfigsByTargetKey: state.activeConfigurations,
    });
    window.localStorage.setItem(WHEEL_SETUP_STORAGE_KEY, mirror);
    return mutatePracticeState((current) => {
      if (current.legacyFingerprint === "pending-config-mirror")
        current.legacyFingerprint = mirror;
    }, state.revision);
  }
  const raw = window.localStorage.getItem(WHEEL_SETUP_STORAGE_KEY);
  if (state.legacyFingerprint === (raw ?? "empty")) return state;
  const legacy = raw ? parseWheelSetupStoreForMigration(JSON.parse(raw)) : null;
  return mutatePracticeState((current) => {
    if (current.legacyFingerprint === "pending-config-mirror")
      throw new Error("Restaurarea roților este în curs. Reîncărcați datele.");
    current.configurations = legacy?.savedSetups ?? [];
    current.activeConfigurations = legacy?.activeConfigsByTargetKey ?? {};
    current.legacyFingerprint = raw ?? "empty";
  }, state.revision);
}

export function subscribePracticeChanges(listener: () => void) {
  const channel =
    typeof BroadcastChannel !== "undefined"
      ? new BroadcastChannel(CHANGE_EVENT)
      : null;
  if (channel) channel.onmessage = listener;
  window.addEventListener(CHANGE_EVENT, listener);
  window.addEventListener("focus", listener);
  window.addEventListener("storage", listener);
  return () => {
    channel?.close();
    window.removeEventListener(CHANGE_EVENT, listener);
    window.removeEventListener("focus", listener);
    window.removeEventListener("storage", listener);
  };
}
