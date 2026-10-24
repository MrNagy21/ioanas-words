import {
  emptyPracticeState,
  decodePracticeState,
  validatePracticeState,
  type LocalPracticeState,
} from "@/practice/model";

export type PracticeBackup = {
  format: "word-wheel";
  version: 1;
  scope: "all" | "child";
  exportedAt: string;
  data: LocalPracticeState;
};
export const MAX_BACKUP_BYTES = 5_000_000;

export function createPracticeBackup(
  state: LocalPracticeState,
  childId?: string,
): PracticeBackup {
  validatePracticeState(state);
  const data = structuredClone(state);
  if (childId) {
    data.profiles = data.profiles.filter((p) => p.id === childId);
    if (data.profiles.length !== 1) throw new Error("Profilul nu mai există.");
    data.configurations = [];
    data.activeConfigurations = {};
    data.legacyFingerprint = "child-import";
    data.preferences = emptyPracticeState().preferences;
    data.sessions = data.sessions.filter((s) => s.childId === childId);
    data.turns = data.turns.filter((t) => t.childId === childId);
    data.observations = data.observations.filter((o) => o.childId === childId);
    data.awards = data.awards.filter((a) => a.childId === childId);
  }
  return {
    format: "word-wheel",
    version: 1,
    scope: childId ? "child" : "all",
    exportedAt: new Date().toISOString(),
    data,
  };
}

export function parsePracticeBackup(raw: string): PracticeBackup {
  if (new TextEncoder().encode(raw).byteLength > MAX_BACKUP_BYTES)
    throw new Error("Fișierul este prea mare.");
  const value = JSON.parse(raw);
  if (
    !value ||
    value.format !== "word-wheel" ||
    value.version !== 1 ||
    !["all", "child"].includes(value.scope) ||
    typeof value.exportedAt !== "string" ||
    !Number.isFinite(Date.parse(value.exportedAt))
  )
    throw new Error("Fișierul nu este o copie Word Wheel acceptată.");
  value.data = decodePracticeState(value.data);
  if (
    value.scope === "child" &&
    (value.data.profiles.length !== 1 ||
      value.data.configurations.length ||
      Object.keys(value.data.activeConfigurations).length)
  )
    throw new Error("Copia unui copil conține date din afara profilului.");
  return value;
}

// Call only inside mutatePracticeState after an adult confirms a validated preview.
export function applyPracticeBackup(
  state: LocalPracticeState,
  backup: PracticeBackup,
  replaceChildId?: string,
) {
  const checked = parsePracticeBackup(JSON.stringify(backup));
  if (checked.scope === "all") {
    const revision = state.revision;
    Object.assign(state, emptyPracticeState(), checked.data, {
      revision,
      legacyFingerprint: "pending-config-mirror",
    });
    for (const session of state.sessions) session.ownerId = null;
    return;
  }
  const child = structuredClone(checked.data.profiles[0]);
  const targetId = replaceChildId ?? child.id;
  if (targetId !== child.id)
    throw new Error(
      "Această copie aparține altui profil. Importați-o ca profil propriu, fără a înlocui alt copil.",
    );
  if (replaceChildId && !state.profiles.some((p) => p.id === replaceChildId))
    throw new Error("Profilul de înlocuit nu mai există.");
  child.id = targetId;
  state.profiles = [...state.profiles.filter((p) => p.id !== targetId), child];
  for (const key of ["sessions", "turns", "observations", "awards"] as const) {
    const existing = state[key].filter((r) => r.childId !== targetId);
    const incoming = checked.data[key];
    if (incoming.some((r) => existing.some((e) => e.id === r.id)))
      throw new Error(
        "Copia conține identificatori folosiți de alt copil. Datele nu au fost modificate.",
      );
    Object.assign(state, {
      [key]: [...existing, ...structuredClone(incoming)],
    });
  }
  for (const session of state.sessions)
    if (session.childId === targetId) session.ownerId = null;
}
