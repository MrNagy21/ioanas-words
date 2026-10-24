import {
  parseWheelSetupStoreForMigration,
  type SavedWheelSetup,
  type WheelSetupConfig,
} from "@/game/wheel-setup-storage";
import type { ContentWord, GameplayTarget } from "@/content/types";
import { nextParticipationMilestone } from "@/practice/rewards";

export const AVATAR_WORD_IDS = [
  "ro-p-pisica",
  "ro-c-caine",
  "ro-i-iepure",
  "ro-u-urs",
] as const;
export type PracticeGoal = {
  id: string;
  label: string;
  active: boolean;
  pace: "frequent" | "standard";
  nextMedalAt?: number;
};
export type ChildProfile = {
  id: string;
  nickname: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
  goals: PracticeGoal[];
};
export type LocalPracticeState = {
  schemaVersion: 3;
  revision: number;
  profiles: ChildProfile[];
  configurations: SavedWheelSetup[];
  activeConfigurations: Record<string, WheelSetupConfig>;
  legacyFingerprint: string | null;
  sessions: PracticeSession[];
  turns: PracticeTurn[];
  observations: PronunciationObservation[];
  awards: PracticeAward[];
  preferences: {
    onboardingCompleted: boolean;
    onboardingStep: number;
    sound: boolean;
  };
};

export type GoalAttribution = {
  goalId: string;
  label: string;
  matched: boolean | null;
  positions: ("initial" | "medial" | "final")[];
  mappingVersion: string;
};
export type PracticeSession = {
  id: string;
  childId: string;
  title: string;
  target: GameplayTarget;
  config: WheelSetupConfig;
  words: ContentWord[];
  remainingWordIds: string[];
  createdAt: string;
  endedAt: string | null;
  ownerId: string | null;
  pending: {
    id: string;
    wordId: string;
    shownAt: string;
    goals: GoalAttribution[];
  } | null;
};
export type PracticeTurn = {
  id: string;
  sessionId: string;
  childId: string;
  wordId: string;
  display: string;
  shownAt: string;
  closedAt: string;
  reason: "keep" | "remove" | "recovery";
  goals: GoalAttribution[];
};
export type PronunciationObservation = {
  id: string;
  childId: string;
  goalId: string;
  rating: number;
  createdAt: string;
  scaleVersion: "ro-adult-1";
  correctsId?: string;
};
export type PracticeAward = {
  id: string;
  childId: string;
  title: string;
  earnedAt: string;
  source: "participation" | "adult";
  presented: boolean;
  variant?: "star" | "flower" | "sun";
};

export function emptyPracticeState(): LocalPracticeState {
  return {
    schemaVersion: 3,
    revision: 0,
    profiles: [],
    configurations: [],
    activeConfigurations: {},
    legacyFingerprint: null,
    sessions: [],
    turns: [],
    observations: [],
    awards: [],
    preferences: {
      onboardingCompleted: false,
      onboardingStep: 0,
      sound: false,
    },
  };
}

export function newLocalId() {
  return crypto.randomUUID();
}

export function saveProfile(
  state: LocalPracticeState,
  input: { id?: string; nickname: string; avatar: string },
  now = new Date().toISOString(),
) {
  const nickname = input.nickname.trim().replace(/\s+/g, " ");
  if (!nickname || nickname.length > 40)
    throw new Error("Alegeți un nume scurt, de cel mult 40 de caractere.");
  if (
    !AVATAR_WORD_IDS.includes(input.avatar as (typeof AVATAR_WORD_IDS)[number])
  )
    throw new Error("Alegeți un avatar din listă.");
  const existing = input.id
    ? state.profiles.find((p) => p.id === input.id)
    : null;
  if (input.id && !existing)
    throw new Error("Profilul nu mai există. Reîncărcați lista.");
  if (existing)
    Object.assign(existing, { nickname, avatar: input.avatar, updatedAt: now });
  else
    state.profiles.push({
      id: newLocalId(),
      nickname,
      avatar: input.avatar,
      goals: [],
      createdAt: now,
      updatedAt: now,
    });
  if (!state.preferences.onboardingCompleted)
    state.preferences.onboardingStep = Math.max(
      1,
      state.preferences.onboardingStep,
    );
}

export function saveGoal(
  state: LocalPracticeState,
  childId: string,
  label: string,
  pace: PracticeGoal["pace"],
) {
  const profile = state.profiles.find((p) => p.id === childId);
  if (!profile) throw new Error("Profilul nu mai există.");
  const normalized = label.trim().toLocaleUpperCase("ro-RO");
  if (!/^[A-ZĂÂÎȘȚ]{1,3}$/.test(normalized))
    throw new Error("Alegeți o literă sau un grup de sunete.");
  const existing = profile.goals.find((g) => g.label === normalized);
  if (existing) {
    const count = state.turns.filter(
      (t) =>
        t.childId === childId &&
        t.goals.some((g) => g.goalId === existing.id && g.matched === true),
    ).length;
    existing.nextMedalAt ??= nextParticipationMilestone(count, existing.pace);
    existing.active = true;
    existing.pace = pace;
  } else
    profile.goals.push({
      id: newLocalId(),
      label: normalized,
      active: true,
      pace,
    });
  profile.updatedAt = new Date().toISOString();
  if (!state.preferences.onboardingCompleted)
    state.preferences.onboardingStep = Math.max(
      2,
      state.preferences.onboardingStep,
    );
}

function object(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function text(value: unknown, max = 200): value is string {
  return typeof value === "string" && value.length > 0 && value.length <= max;
}
function date(value: unknown) {
  return text(value) && Number.isFinite(Date.parse(value));
}
function uniqueIds(records: { id: string }[]) {
  return new Set(records.map((r) => r.id)).size === records.length;
}
function onlyKeys(value: object, keys: string[]) {
  return Object.keys(value).every((key) => keys.includes(key));
}

function validateCanonicalConfigurationStore(value: {
  savedSetups: unknown[];
  activeConfigsByTargetKey: Record<string, unknown>;
}) {
  const parsed = parseWheelSetupStoreForMigration({
    schemaVersion: 2,
    ...value,
  });
  function sameConfig(raw: unknown, normalized: WheelSetupConfig | undefined) {
    const sameList = (actual: unknown, expected: readonly string[]) =>
      Array.isArray(actual) &&
      actual.length === expected.length &&
      new Set(actual).size === actual.length &&
      actual.every((item) => text(item) && expected.includes(item));
    return (
      !!normalized &&
      object(raw) &&
      onlyKeys(raw, [
        "mode",
        "excludedTargetKeys",
        "wheelWordCount",
        "wordSelectionMode",
        "selectedWordIds",
      ]) &&
      raw.mode === normalized.mode &&
      Number.isSafeInteger(raw.wheelWordCount) &&
      (raw.wheelWordCount as number) >= 1 &&
      raw.wheelWordCount === normalized.wheelWordCount &&
      raw.wordSelectionMode === normalized.wordSelectionMode &&
      sameList(raw.excludedTargetKeys, normalized.excludedTargetKeys) &&
      sameList(raw.selectedWordIds, normalized.selectedWordIds)
    );
  }
  for (const [index, raw] of value.savedSetups.entries()) {
    const normalized = parsed.savedSetups[index];
    if (
      !object(raw) ||
      !normalized ||
      !onlyKeys(raw, [
        "id",
        "targetKey",
        "name",
        "config",
        "createdAt",
        "updatedAt",
      ]) ||
      !text(raw.id) ||
      !text(raw.targetKey) ||
      !text(raw.name, Number.MAX_SAFE_INTEGER) ||
      !date(raw.createdAt) ||
      !date(raw.updatedAt) ||
      !sameConfig(raw.config, normalized.config)
    )
      throw new Error(
        "O roată salvată are un format neacceptat. Datele nu au fost modificate.",
      );
  }
  for (const [key, raw] of Object.entries(value.activeConfigsByTargetKey)) {
    if (!text(key) || !sameConfig(raw, parsed.activeConfigsByTargetKey[key]))
      throw new Error(
        "O roată activă are un format neacceptat. Datele nu au fost modificate.",
      );
  }
}

export function validatePracticeState(
  value: unknown,
): asserts value is LocalPracticeState {
  const fail = () => {
    throw new Error(
      "Datele locale nu au un format acceptat. Nu au fost modificate.",
    );
  };
  if (
    !object(value) ||
    value.schemaVersion !== 3 ||
    !Number.isSafeInteger(value.revision) ||
    (value.revision as number) < 0 ||
    !Array.isArray(value.profiles) ||
    value.profiles.length > 500 ||
    !Array.isArray(value.configurations) ||
    !object(value.activeConfigurations) ||
    !(
      value.legacyFingerprint === null ||
      typeof value.legacyFingerprint === "string"
    )
  )
    return fail();
  if (
    !onlyKeys(value, [
      "schemaVersion",
      "revision",
      "profiles",
      "configurations",
      "activeConfigurations",
      "legacyFingerprint",
      "sessions",
      "turns",
      "observations",
      "awards",
      "preferences",
    ])
  )
    return fail();
  if (
    !object(value.preferences) ||
    !onlyKeys(value.preferences, [
      "onboardingCompleted",
      "onboardingStep",
      "sound",
    ]) ||
    typeof value.preferences.onboardingCompleted !== "boolean" ||
    typeof value.preferences.sound !== "boolean" ||
    !Number.isInteger(value.preferences.onboardingStep) ||
    (value.preferences.onboardingStep as number) < 0 ||
    (value.preferences.onboardingStep as number) > 4
  )
    return fail();
  for (const p of value.profiles) {
    if (
      !object(p) ||
      !text(p.id) ||
      !text(p.nickname, 40) ||
      !AVATAR_WORD_IDS.includes(p.avatar as (typeof AVATAR_WORD_IDS)[number]) ||
      !date(p.createdAt) ||
      !date(p.updatedAt) ||
      !Array.isArray(p.goals) ||
      p.goals.length > 100
    )
      return fail();
    if (
      !onlyKeys(p, [
        "id",
        "nickname",
        "avatar",
        "createdAt",
        "updatedAt",
        "goals",
      ])
    )
      return fail();
    for (const g of p.goals) {
      if (
        !object(g) ||
        !onlyKeys(g, ["id", "label", "active", "pace", "nextMedalAt"]) ||
        (g.nextMedalAt !== undefined &&
          (!Number.isSafeInteger(g.nextMedalAt) ||
            (g.nextMedalAt as number) < 1))
      )
        return fail();
      if (
        !object(g) ||
        !text(g.id) ||
        !text(g.label, 3) ||
        !/^[A-ZĂÂÎȘȚ]{1,3}$/.test(g.label) ||
        typeof g.active !== "boolean" ||
        !["frequent", "standard"].includes(g.pace as string)
      )
        return fail();
    }
    if (
      !uniqueIds(p.goals as PracticeGoal[]) ||
      new Set(p.goals.map((g: PracticeGoal) => g.label)).size !== p.goals.length
    )
      return fail();
  }
  if (!uniqueIds(value.profiles as ChildProfile[])) return fail();
  validateCanonicalConfigurationStore({
    savedSetups: value.configurations,
    activeConfigsByTargetKey: value.activeConfigurations,
  });
  const childIds = new Set((value.profiles as ChildProfile[]).map((p) => p.id));
  for (const key of ["sessions", "turns", "observations", "awards"]) {
    const records = value[key];
    if (
      !Array.isArray(records) ||
      records.length > 100_000 ||
      records.some(
        (r) =>
          !object(r) ||
          !text(r.id) ||
          !text(r.childId) ||
          !childIds.has(r.childId),
      ) ||
      !uniqueIds(records)
    )
      return fail();
  }
  const sessions = value.sessions as PracticeSession[];
  if (
    new Set(sessions.filter((s) => !s.endedAt).map((s) => s.childId)).size !==
    sessions.filter((s) => !s.endedAt).length
  )
    return fail();
  const goalValid = (g: GoalAttribution) =>
    object(g) &&
    text(g.goalId) &&
    text(g.label, 3) &&
    [true, false, null].includes(g.matched) &&
    Array.isArray(g.positions) &&
    g.positions.every((p) => ["initial", "medial", "final"].includes(p)) &&
    text(g.mappingVersion);
  for (const s of sessions) {
    if (
      !onlyKeys(s, [
        "id",
        "childId",
        "title",
        "target",
        "config",
        "words",
        "remainingWordIds",
        "createdAt",
        "endedAt",
        "ownerId",
        "pending",
      ])
    )
      return fail();
    if (
      !text(s.title) ||
      !object(s.target) ||
      !text(s.target.id) ||
      !text(s.target.label) ||
      !object(s.config) ||
      !Array.isArray(s.words) ||
      s.words.length < 1 ||
      s.words.length > 16 ||
      !Array.isArray(s.remainingWordIds) ||
      !date(s.createdAt) ||
      !(s.endedAt === null || date(s.endedAt)) ||
      !(s.ownerId === null || text(s.ownerId))
    )
      return fail();
    for (const w of s.words)
      if (
        !object(w) ||
        !text(w.id) ||
        !text(w.word) ||
        !text(w.display) ||
        !text(w.image) ||
        !w.image.startsWith("/images/ro/") ||
        w.image.includes("..") ||
        !text(w.alt) ||
        w.status !== "approved" ||
        w.imageStatus !== "ready"
      )
        return fail();
    if (
      !uniqueIds(s.words) ||
      new Set(s.remainingWordIds).size !== s.remainingWordIds.length ||
      s.remainingWordIds.some((id) => !s.words.some((w) => w.id === id))
    )
      return fail();
    validateCanonicalConfigurationStore({
      savedSetups: [],
      activeConfigsByTargetKey: { "ro:letter:a": s.config },
    });
    if (
      s.pending !== null &&
      (!object(s.pending) ||
        !text(s.pending.id) ||
        !s.remainingWordIds.includes(s.pending.wordId) ||
        !date(s.pending.shownAt) ||
        !Array.isArray(s.pending.goals) ||
        !s.pending.goals.every(goalValid))
    )
      return fail();
    if (s.endedAt && s.pending) return fail();
  }
  for (const t of value.turns as PracticeTurn[]) {
    const session = sessions.find(
      (s) => s.id === t.sessionId && s.childId === t.childId,
    );
    if (
      !session ||
      !session.words.some((w) => w.id === t.wordId) ||
      !text(t.display) ||
      !date(t.shownAt) ||
      !date(t.closedAt) ||
      !["keep", "remove", "recovery"].includes(t.reason) ||
      !Array.isArray(t.goals) ||
      !t.goals.every(goalValid)
    )
      return fail();
  }
  for (const o of value.observations as PronunciationObservation[])
    if (
      !onlyKeys(o, [
        "id",
        "childId",
        "goalId",
        "rating",
        "createdAt",
        "scaleVersion",
        "correctsId",
      ]) ||
      (o.correctsId !== undefined &&
        !(value.observations as PronunciationObservation[]).some(
          (previous) =>
            previous.id === o.correctsId &&
            previous.id !== o.id &&
            previous.childId === o.childId &&
            previous.goalId === o.goalId,
        )) ||
      !Number.isInteger(o.rating) ||
      o.rating < 0 ||
      o.rating > 5 ||
      o.scaleVersion !== "ro-adult-1" ||
      !date(o.createdAt) ||
      !(value.profiles as ChildProfile[])
        .find((p) => p.id === o.childId)
        ?.goals.some((g) => g.id === o.goalId)
    )
      return fail();
  for (const a of value.awards as PracticeAward[])
    if (
      !onlyKeys(a, [
        "id",
        "childId",
        "title",
        "earnedAt",
        "source",
        "presented",
        "variant",
      ]) ||
      (a.variant !== undefined &&
        !["star", "flower", "sun"].includes(a.variant)) ||
      !text(a.title) ||
      !date(a.earnedAt) ||
      !["participation", "adult"].includes(a.source) ||
      typeof a.presented !== "boolean"
    )
      return fail();
}

export function decodePracticeState(value: unknown): LocalPracticeState {
  if (object(value) && [1, 2].includes(value.schemaVersion as number)) {
    const legacy = parseWheelSetupStoreForMigration({
      schemaVersion: 2,
      savedSetups: value.configurations,
      activeConfigsByTargetKey: value.activeConfigurations,
    });
    value = {
      ...value,
      configurations: legacy.savedSetups,
      activeConfigurations: legacy.activeConfigsByTargetKey,
    };
    if (object(value) && Array.isArray(value.sessions)) {
      value = {
        ...value,
        sessions: value.sessions.map((session: unknown) => {
          if (!object(session)) return session;
          const migrated = parseWheelSetupStoreForMigration({
            schemaVersion: 2,
            savedSetups: [],
            activeConfigsByTargetKey: { "ro:letter:a": session.config },
          });
          return {
            ...session,
            config: migrated.activeConfigsByTargetKey["ro:letter:a"],
          };
        }),
      };
    }
  }
  if (object(value) && value.schemaVersion === 1) {
    value = {
      ...value,
      schemaVersion: 2,
      sessions: [],
      turns: [],
      observations: [],
      awards: [],
    };
  }
  if (object(value) && value.schemaVersion === 2)
    value = {
      ...value,
      schemaVersion: 3,
      preferences: {
        onboardingCompleted: false,
        onboardingStep: 0,
        sound: false,
      },
    };
  validatePracticeState(value);
  return value;
}

export function removeProfile(state: LocalPracticeState, id: string) {
  if (!state.profiles.some((p) => p.id === id))
    throw new Error("Profilul nu mai există.");
  state.profiles = state.profiles.filter((p) => p.id !== id);
  state.sessions = state.sessions.filter((s) => s.childId !== id);
  state.turns = state.turns.filter((t) => t.childId !== id);
  state.observations = state.observations.filter((o) => o.childId !== id);
  state.awards = state.awards.filter((a) => a.childId !== id);
}
