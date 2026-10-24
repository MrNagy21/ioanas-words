import mappingJson from "../../content/ro/sound-mapping.json";
import type { GoalAttribution, PracticeGoal } from "@/practice/model";

export type SoundMapping = {
  schemaVersion: 1;
  mappingVersion: string;
  targets: { id: string; label: string; reviewed: boolean }[];
  words: Record<
    string,
    {
      reviewedTargetIds: string[];
      matches: {
        targetId: string;
        positions: ("initial" | "medial" | "final")[];
      }[];
      reviewer: string;
    }
  >;
};

export function validateSoundMapping(
  mapping: SoundMapping,
  wordIds: Set<string>,
) {
  if (
    mapping.schemaVersion !== 1 ||
    !mapping.mappingVersion ||
    !Array.isArray(mapping.targets) ||
    !mapping.words ||
    typeof mapping.words !== "object"
  )
    throw new Error("Invalid sound mapping envelope.");
  const targets = new Set(mapping.targets.map((t) => t.id));
  if (
    targets.size !== mapping.targets.length ||
    new Set(mapping.targets.map((t) => t.label)).size !==
      mapping.targets.length ||
    mapping.targets.some(
      (t) => !t.id || !t.label || typeof t.reviewed !== "boolean",
    )
  )
    throw new Error("Invalid sound targets.");
  for (const [id, row] of Object.entries(mapping.words)) {
    if (
      !wordIds.has(id) ||
      !row.reviewer ||
      !Array.isArray(row.reviewedTargetIds) ||
      !Array.isArray(row.matches) ||
      new Set(row.reviewedTargetIds).size !== row.reviewedTargetIds.length ||
      row.reviewedTargetIds.some(
        (t) =>
          !mapping.targets.some((target) => target.id === t && target.reviewed),
      )
    )
      throw new Error(`Invalid reviewed coverage: ${id}`);
    if (
      new Set(row.matches.map((m) => m.targetId)).size !== row.matches.length ||
      row.matches.some(
        (m) =>
          !row.reviewedTargetIds.includes(m.targetId) ||
          !Array.isArray(m.positions) ||
          new Set(m.positions).size !== m.positions.length ||
          m.positions.some((p) => !["initial", "medial", "final"].includes(p)),
      )
    )
      throw new Error(`Invalid sound matches: ${id}`);
  }
}

export function attributePracticeGoals(
  wordId: string,
  goals: PracticeGoal[],
  mapping: SoundMapping = mappingJson as SoundMapping,
): GoalAttribution[] {
  return goals
    .filter((g) => g.active)
    .map((goal) => {
      const target = mapping.targets.find(
        (t) => t.reviewed && t.label === goal.label,
      );
      const row = mapping.words[wordId];
      const reviewed = target && row?.reviewedTargetIds.includes(target.id);
      const match = reviewed
        ? row.matches.find((m) => m.targetId === target.id)
        : undefined;
      return {
        goalId: goal.id,
        label: goal.label,
        matched: reviewed ? !!match : null,
        positions: match?.positions ?? [],
        mappingVersion: mapping.mappingVersion,
      };
    });
}
