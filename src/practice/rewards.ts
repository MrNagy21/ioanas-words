import type {
  ChildProfile,
  LocalPracticeState,
  PracticeGoal,
  PracticeTurn,
} from "@/practice/model";

export function nextParticipationMilestone(
  total: number,
  pace: PracticeGoal["pace"] = "frequent",
) {
  const early = pace === "frequent" ? [1, 3, 5, 10] : [1, 5, 10, 20];
  return (
    early.find((n) => n > total) ??
    (Math.floor(total / (pace === "frequent" ? 10 : 20)) + 1) *
      (pace === "frequent" ? 10 : 20)
  );
}
export function previousParticipationMilestone(
  total: number,
  pace: PracticeGoal["pace"] = "frequent",
) {
  const early = pace === "frequent" ? [0, 1, 3, 5, 10] : [0, 1, 5, 10, 20];
  const step = pace === "frequent" ? 10 : 20;
  return total < step
    ? early.filter((n) => n <= total).at(-1)!
    : Math.floor(total / step) * step;
}

export function turnCountsForGoal(turn: PracticeTurn, goalId: string) {
  return (
    turn.practiceGoalId === goalId ||
    turn.goals.some((g) => g.goalId === goalId && g.matched === true)
  );
}

export function goalParticipationCount(
  state: LocalPracticeState,
  childId: string,
  goalId: string,
) {
  return state.turns.filter(
    (t) => t.childId === childId && turnCountsForGoal(t, goalId),
  ).length;
}

export function goalProgress(
  state: LocalPracticeState,
  childId: string,
  goal: PracticeGoal,
) {
  const current = goalParticipationCount(state, childId, goal.id);
  const prefix = `goal:v1:${childId}:${goal.id}:`;
  const previous = state.awards.reduce((highest, award) => {
    if (award.childId !== childId || !award.id.startsWith(prefix))
      return highest;
    const milestone = Number(award.id.slice(prefix.length));
    return Number.isSafeInteger(milestone) && milestone <= current
      ? Math.max(highest, milestone)
      : highest;
  }, 0);
  return {
    current,
    previous,
    next: goal.nextMedalAt ?? nextParticipationMilestone(current, goal.pace),
  };
}

export function participationProgress(
  state: LocalPracticeState,
  child: ChildProfile,
) {
  const current = state.turns.filter((t) => t.childId === child.id).length;
  return {
    current,
    ...(child.participationReward ?? {
      next: nextParticipationMilestone(current),
      previous: previousParticipationMilestone(current),
    }),
  };
}

export function awardCompletedParticipation(
  state: LocalPracticeState,
  childId: string,
  turnId: string,
  now: string,
) {
  const turns = state.turns.filter((t) => t.childId === childId);
  const total = turns.length;
  const child = state.profiles.find((p) => p.id === childId)!;
  child.participationReward ??= {
    next: nextParticipationMilestone(total - 1),
    previous: previousParticipationMilestone(total - 1),
  };
  const threshold = child.participationReward.next;
  if (total >= threshold) {
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
  if (total >= threshold)
    child.participationReward = {
      previous: threshold,
      next: nextParticipationMilestone(total),
    };
  const turn = turns.find((t) => t.id === turnId);
  for (const goal of child.goals) {
    if (!turn || !turnCountsForGoal(turn, goal.id)) continue;
    const count = goalParticipationCount(state, childId, goal.id);
    goal.nextMedalAt ??= nextParticipationMilestone(count - 1, goal.pace);
    if (count >= goal.nextMedalAt) {
      const at = goal.nextMedalAt;
      const id = `goal:v1:${childId}:${goal.id}:${at}`;
      if (!state.awards.some((a) => a.id === id))
        state.awards.push({
          id,
          childId,
          title:
            at === 1
              ? `Primul cuvânt exersat pentru ${goal.label}`
              : `${at} cuvinte exersate pentru ${goal.label}`,
          earnedAt: now,
          source: "participation",
          presented: false,
        });
      goal.pace = "frequent";
      goal.nextMedalAt = nextParticipationMilestone(count);
    }
  }
}
