import assert from "node:assert/strict";
import {
  emptyPracticeState,
  decodePracticeState,
  saveProfile,
  saveGoal,
  removeProfile,
  validatePracticeState,
  AVATAR_WORD_IDS,
} from "@/practice/model";
import {
  applyPracticeBackup,
  createPracticeBackup,
  parsePracticeBackup,
} from "@/storage/practice-backup";
import { parseWheelSetupStoreForMigration } from "@/game/wheel-setup-storage";
import {
  beginPracticeSession,
  claimSession,
  showPracticeWord,
  commitPendingTurn,
  endPracticeSession,
} from "@/practice/sessions";
import { getApprovedWords, getEnabledLetters } from "@/content/loaders";
import {
  addPronunciationObservation,
  addProgressCelebration,
} from "@/practice/observations";
import {
  encryptPracticeBackup,
  decryptPracticeBackup,
} from "@/storage/encrypted-backup";
import {
  attributePracticeGoals,
  validateSoundMapping,
  type SoundMapping,
} from "@/content/sound-mapping";
import mappingJson from "../../content/ro/sound-mapping.json";
import { nextParticipationMilestone } from "@/practice/rewards";

const state = emptyPracticeState();
saveProfile(state, { nickname: "  Alex   01 ", avatar: AVATAR_WORD_IDS[0] });
saveProfile(state, { nickname: "Mara", avatar: AVATAR_WORD_IDS[1] });
const [alex, mara] = state.profiles;
assert.equal(alex.nickname, "Alex 01");
saveGoal(state, alex.id, "ș", "frequent");
saveGoal(state, alex.id, "Ș", "standard");
assert.equal(alex.goals.length, 1);
assert.equal(alex.goals[0].pace, "standard");
assert.equal(mara.goals.length, 0);
validatePracticeState(state);
assert.throws(() =>
  saveProfile(state, { nickname: " ", avatar: AVATAR_WORD_IDS[0] }),
);
assert.throws(() =>
  saveProfile(state, {
    id: "missing",
    nickname: "A",
    avatar: AVATAR_WORD_IDS[0],
  }),
);
assert.throws(() => validatePracticeState({ ...state, schemaVersion: 999 }));
assert.throws(() =>
  validatePracticeState({ ...state, profiles: [alex, alex] }),
);
assert.throws(() => parseWheelSetupStoreForMigration({ schemaVersion: 99 }));
assert.throws(() =>
  parseWheelSetupStoreForMigration({
    schemaVersion: 2,
    activeConfigsByTargetKey: {},
    savedSetups: [{}],
  }),
);

const before = structuredClone(state);
const backup = parsePracticeBackup(
  JSON.stringify(createPracticeBackup(state, alex.id)),
);
assert.equal(backup.data.profiles.length, 1);
assert.equal(JSON.stringify(backup).includes("Mara"), false);
saveGoal(state, mara.id, "R", "standard");
applyPracticeBackup(state, backup);
applyPracticeBackup(state, backup);
assert.equal(state.profiles.length, 2);
assert.equal(state.profiles.find((p) => p.id === mara.id)?.goals.length, 1);
assert.throws(() =>
  parsePracticeBackup(JSON.stringify({ ...backup, data: before })),
);
assert.throws(() => parsePracticeBackup('{"format":'));
removeProfile(state, alex.id);
assert.equal(state.profiles.length, 1);
assert.equal(state.profiles[0].id, mara.id);
const all = createPracticeBackup(before);
applyPracticeBackup(state, all);
assert.deepEqual(state.profiles, before.profiles);
console.log(
  "Practice domain checks passed: identity isolation, validation, goals, deletion, and both backup scopes.",
);

const target = getEnabledLetters("ro").find((t) => t.id === "s")!;
const words = getApprovedWords("ro")
  .filter((w) => w.word.startsWith("s"))
  .slice(0, 2);
const config = {
  mode: "starts-with",
  excludedTargetKeys: [],
  wheelWordCount: 2,
  wordSelectionMode: "all",
  selectedWordIds: [],
} as const;
beginPracticeSession(
  state,
  alex.id,
  target,
  words,
  config,
  "Test",
  "session-test",
);
claimSession(state, "session-test", "tab-1");
showPracticeWord(state, "session-test", "tab-1", words[0].id, "turn-1");
assert.equal(state.turns.length, 0, "Appearance alone must not count");
assert.equal(
  state.sessions[0].pending?.goals[0].matched,
  null,
  "Unreviewed remains unknown",
);
assert.throws(() => endPracticeSession(state, "session-test", "tab-1"));
commitPendingTurn(state, "session-test", "tab-1", "keep", "turn-1");
commitPendingTurn(state, "session-test", "tab-1", "remove", "turn-1");
assert.equal(state.turns.length, 1);
assert.equal(
  state.sessions[0].remainingWordIds.length,
  2,
  "Duplicate close must not remove a kept word",
);
assert.equal(state.awards.length, 1);
showPracticeWord(state, "session-test", "tab-1", words[0].id, "turn-2");
claimSession(state, "session-test", "tab-2");
claimSession(state, "session-test", "tab-2");
assert.equal(state.turns.length, 2, "Recovery counts only once");
assert.equal(state.turns[1].reason, "recovery");
assert.equal(new Set(state.turns.map((t) => t.wordId)).size, 1);
assert.throws(() =>
  showPracticeWord(state, "session-test", "tab-1", words[1].id, "stale-turn"),
);
showPracticeWord(state, "session-test", "tab-2", words[0].id, "turn-3");
commitPendingTurn(state, "session-test", "tab-2", "remove", "turn-3");
showPracticeWord(state, "session-test", "tab-2", words[1].id, "turn-4");
commitPendingTurn(state, "session-test", "tab-2", "remove", "turn-4");
assert.ok(state.sessions[0].endedAt);
assert.equal(state.turns.length, 4, "Clearing the wheel adds no bonus count");
validatePracticeState(state);
const withSession = createPracticeBackup(state, alex.id);
assert.equal(withSession.data.turns.length, 4);
applyPracticeBackup(state, withSession);
applyPracticeBackup(state, withSession);
assert.equal(state.turns.length, 4);
assert.equal(state.profiles.find((p) => p.id === mara.id)?.nickname, "Mara");
console.log(
  "Session checks passed: count-on-close, duplicate actions, recovery, repeated words, owner checks and empty-wheel ending.",
);

const child = state.profiles.find((p) => p.id === alex.id)!;
const goal = child.goals[0];
const awardCount = state.awards.length;
addPronunciationObservation(state, child.id, goal.id, 5);
addPronunciationObservation(
  state,
  child.id,
  goal.id,
  1,
  state.observations[0].id,
);
assert.equal(state.observations.length, 2);
assert.equal(
  state.awards.length,
  awardCount,
  "Ratings never create or remove medals",
);
addProgressCelebration(state, child.id, goal.id);
assert.equal(state.awards.length, awardCount + 1);
assert.equal(state.awards.at(-1)?.source, "adult");
assert.equal(nextParticipationMilestone(40), 60);
assert.equal(nextParticipationMilestone(100), 120);
assert.equal(nextParticipationMilestone(40, "frequent"), 50);

beginPracticeSession(
  state,
  child.id,
  target,
  words,
  config,
  "Reward test",
  "reward-session",
);
claimSession(state, "reward-session", "tab-rewards");
for (let index = 1; index <= 10; index++) {
  showPracticeWord(
    state,
    "reward-session",
    "tab-rewards",
    words[0].id,
    `reward-turn-${index}`,
  );
  // Synthetic reviewed attribution exercises reward rules without approving production content.
  state.sessions.find((s) => s.id === "reward-session")!.pending!.goals = [
    {
      goalId: goal.id,
      label: goal.label,
      matched: true,
      positions: ["medial"],
      mappingVersion: "TEST-ONLY",
    },
  ];
  commitPendingTurn(
    state,
    "reward-session",
    "tab-rewards",
    "keep",
    `reward-turn-${index}`,
  );
  if (index === 2) {
    saveGoal(state, child.id, goal.label, "frequent");
    assert.equal(
      goal.nextMedalAt,
      5,
      "Faster pace preserves the promised next medal",
    );
  }
  if (index === 6) {
    saveGoal(state, child.id, goal.label, "standard");
    assert.equal(
      goal.nextMedalAt,
      10,
      "Slower pace cannot push the promised medal away",
    );
  }
}
assert.equal(goal.nextMedalAt, 20);
assert.ok(
  state.awards.some((a) => a.id === `goal:v1:${child.id}:${goal.id}:10`),
);
validatePracticeState(state);
validateSoundMapping(
  mappingJson as SoundMapping,
  new Set(getApprovedWords("ro").map((w) => w.id)),
);
const fixtureMapping: SoundMapping = {
  schemaVersion: 1,
  mappingVersion: "TEST-ONLY",
  targets: [
    { id: "test-s", label: "S", reviewed: true },
    { id: "test-r", label: "R", reviewed: true },
  ],
  words: {
    "test-word": {
      reviewedTargetIds: ["test-s", "test-r"],
      matches: [
        { targetId: "test-s", positions: ["initial", "final"] },
        { targetId: "test-r", positions: ["medial"] },
      ],
      reviewer: "synthetic test fixture",
    },
  },
};
validateSoundMapping(fixtureMapping, new Set(["test-word"]));
const attributed = attributePracticeGoals(
  "test-word",
  [
    { id: "s", label: "S", active: true, pace: "standard" },
    { id: "r", label: "R", active: true, pace: "standard" },
  ],
  fixtureMapping,
);
assert.equal(attributed.length, 2);
assert.ok(attributed.every((g) => g.matched));
assert.equal(
  attributePracticeGoals("unknown", child.goals, fixtureMapping)[0].matched,
  null,
);
assert.throws(() =>
  validateSoundMapping(
    {
      ...fixtureMapping,
      words: { "bad-id": fixtureMapping.words["test-word"] },
    },
    new Set(["test-word"]),
  ),
);

const protectedBackup = createPracticeBackup(state, child.id);
const password = "synthetic-test-password-123";
const encrypted = await encryptPracticeBackup(protectedBackup, password);
assert.equal(encrypted.includes(child.nickname), false);
assert.notEqual(
  encrypted,
  await encryptPracticeBackup(protectedBackup, password),
);
assert.deepEqual(
  await decryptPracticeBackup(encrypted, password),
  protectedBackup,
);
await assert.rejects(() => decryptPracticeBackup(encrypted, "wrong-password"));
const damaged = JSON.parse(encrypted);
damaged.data = (damaged.data[0] === "A" ? "B" : "A") + damaged.data.slice(1);
await assert.rejects(() =>
  decryptPracticeBackup(JSON.stringify(damaged), password),
);
console.log(
  "Observation/reward/encryption checks passed: rating corrections, explicit celebrations, bounded medal gaps, pace changes, sound-review boundaries, encrypted round-trip and wrong-password/tamper rejection.",
);

// Authenticated backup data must be canonical, not merely normalizable.
const libraryState = emptyPracticeState();
const libraryConfig = {
  mode: "starts-with",
  excludedTargetKeys: [],
  wheelWordCount: 8,
  wordSelectionMode: "all",
  selectedWordIds: [],
} as const;
libraryState.configurations = [
  {
    id: "canonical-setup",
    targetKey: "ro:letter:s",
    name: "Test library",
    config: libraryConfig,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
libraryState.activeConfigurations["ro:letter:s"] = libraryConfig;
validatePracticeState(libraryState);
for (const field of ["excludedTargetKeys", "selectedWordIds"] as const) {
  for (const bad of [{ invalid: true }, ["ro:letter:x", "ro:letter:x"], [12]]) {
    for (const location of ["saved", "active"]) {
      const invalid = structuredClone(libraryState);
      const config =
        location === "saved"
          ? invalid.configurations[0].config
          : invalid.activeConfigurations["ro:letter:s"];
      Object.assign(config, { [field]: bad });
      const malformed = {
        ...createPracticeBackup(libraryState),
        data: invalid,
      };
      assert.throws(() => validatePracticeState(invalid));
      assert.throws(() => parsePracticeBackup(JSON.stringify(malformed)));
      await assert.rejects(
        encryptPracticeBackup(malformed, "test-password-only"),
      );
      const destination = structuredClone(libraryState);
      assert.throws(() => applyPracticeBackup(destination, malformed));
      assert.deepEqual(
        destination,
        libraryState,
        "Malformed restore changes nothing",
      );
    }
  }
}
const legacyLibrary = structuredClone(libraryState) as unknown as Record<
  string,
  unknown
>;
legacyLibrary.schemaVersion = 2;
delete (
  legacyLibrary.configurations as { config: Record<string, unknown> }[]
)[0].config.excludedTargetKeys;
assert.deepEqual(
  decodePracticeState(legacyLibrary).configurations[0].config
    .excludedTargetKeys,
  [],
  "Legacy normalization stays explicit",
);
console.log(
  "Canonical configuration checks passed: malformed backup fields rejected before encryption/restore; legacy migration remains explicit.",
);

const longNamedLibrary = structuredClone(libraryState);
longNamedLibrary.configurations[0] = {
  ...longNamedLibrary.configurations[0],
  name: "A".repeat(300),
};
validatePracticeState(longNamedLibrary);
assert.equal(
  parsePracticeBackup(JSON.stringify(createPracticeBackup(longNamedLibrary)))
    .data.configurations[0].name.length,
  300,
  "Existing long configuration names remain valid",
);
