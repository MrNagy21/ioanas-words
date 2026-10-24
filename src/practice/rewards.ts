import type { LocalPracticeState, PracticeGoal } from "@/practice/model";

export function nextParticipationMilestone(
  total: number,
  pace: PracticeGoal["pace"] = "standard",
) {
  const early = pace === "frequent" ? [1, 3, 5, 10] : [1, 5, 10, 20];
  return (
    early.find((n) => n > total) ??
    (Math.floor(total / (pace === "frequent" ? 10 : 20)) + 1) *
      (pace === "frequent" ? 10 : 20)
  );
}
export function previousParticipationMilestone(total: number) {
  const next = nextParticipationMilestone(total);
  return next <= 20
    ? [0, 1, 5, 10].filter((n) => n <= total).at(-1)!
    : next - 20;
}

export function awardCompletedParticipation(
  state: LocalPracticeState,
  childId: string,
  turnId: string,
  now: string,
) {
  const turns = state.turns.filter((t) => t.childId === childId);
  const total = turns.length;
  const threshold = nextParticipationMilestone(total - 1);
  if (total === threshold) {
    const id = `participation:v1:${childId}:${threshold}`;
    if (!state.awards.some((a) => a.id === id))
      state.awards.push({
        id,
        childId,
        title:
          threshold === 1
            ? "Primul cuvânt exersat"
            : `${threshold} cuvinte exersate`,
        earnedAt: now,
        source: "participation",
        presented: false,
      });
  }
  const turn = turns.find((t) => t.id === turnId);
  const child = state.profiles.find((p) => p.id === childId)!;
  for (const match of turn?.goals.filter((g) => g.matched === true) ?? []) {
    const goal = child.goals.find((g) => g.id === match.goalId);
    if (!goal) continue;
    const count = turns.filter((t) =>
      t.goals.some((g) => g.goalId === goal.id && g.matched === true),
    ).length;
    goal.nextMedalAt ??= nextParticipationMilestone(count - 1, goal.pace);
    if (count >= goal.nextMedalAt) {
      const at = goal.nextMedalAt;
      const id = `goal:v1:${childId}:${goal.id}:${at}`;
      if (!state.awards.some((a) => a.id === id))
        state.awards.push({
          id,
          childId,
          title: `${at} cuvinte cu ${goal.label}`,
          earnedAt: now,
          source: "participation",
          presented: false,
        });
      goal.nextMedalAt = nextParticipationMilestone(count, goal.pace);
    }
  }
}
