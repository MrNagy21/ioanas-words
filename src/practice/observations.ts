import { newLocalId, type LocalPracticeState } from "@/practice/model";

export const PRONUNCIATION_LABELS = [
  "Nu reușește încă",
  "Foarte dificil",
  "Dificil",
  "Parțial corect",
  "Aproape corect",
  "Corect în situația observată",
];

export function addPronunciationObservation(
  state: LocalPracticeState,
  childId: string,
  goalId: string,
  rating: number,
  correctsId?: string,
) {
  const child = state.profiles.find((p) => p.id === childId);
  if (
    !child?.goals.some((g) => g.id === goalId) ||
    !Number.isInteger(rating) ||
    rating < 0 ||
    rating > 5
  )
    throw new Error("Alegeți ținta și o apreciere între 0 și 5.");
  if (
    correctsId &&
    !state.observations.some(
      (o) =>
        o.id === correctsId && o.childId === childId && o.goalId === goalId,
    )
  )
    throw new Error("Observația de corectat nu mai există.");
  state.observations.push({
    id: newLocalId(),
    childId,
    goalId,
    rating,
    scaleVersion: "ro-adult-1",
    createdAt: new Date().toISOString(),
    ...(correctsId ? { correctsId } : {}),
  });
}

export function addProgressCelebration(
  state: LocalPracticeState,
  childId: string,
  goalId: string,
) {
  const goal = state.profiles
    .find((p) => p.id === childId)
    ?.goals.find((g) => g.id === goalId);
  if (!goal) throw new Error("Ținta nu mai există.");
  state.awards.push({
    id: newLocalId(),
    childId,
    title: `Un pas înainte cu ${goal.label}`,
    earnedAt: new Date().toISOString(),
    source: "adult",
    presented: false,
  });
}
