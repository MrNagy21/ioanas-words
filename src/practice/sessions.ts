import type { ContentWord, GameplayTarget } from "@/content/types";
import { attributePracticeGoals } from "@/content/sound-mapping";
import { awardCompletedParticipation } from "@/practice/rewards";
import type { WheelSetupConfig } from "@/game/wheel-setup-storage";
import {
  newLocalId,
  saveGoal,
  type LocalPracticeState,
  type PracticeSession,
} from "@/practice/model";

export function beginPracticeSession(
  state: LocalPracticeState,
  childId: string,
  target: GameplayTarget,
  words: ContentWord[],
  config: WheelSetupConfig,
  title: string,
  id = newLocalId(),
) {
  if (!state.profiles.some((p) => p.id === childId))
    throw new Error("Profilul nu mai există.");
  if (state.sessions.some((s) => s.childId === childId && !s.endedAt))
    throw new Error(
      "Închideți sau reluați exersarea începută înainte de a crea alta.",
    );
  if (!words.length || words.length > 16)
    throw new Error("Alegeți între 1 și 16 cuvinte.");
  saveGoal(state, childId, target.label);
  const practiceGoalId = state.profiles
    .find((p) => p.id === childId)!
    .goals.find((g) => g.label === target.label)!.id;
  state.sessions.push({
    id,
    childId,
    title,
    practiceGoalId,
    target: structuredClone(target),
    config: structuredClone(config),
    words: structuredClone(words),
    remainingWordIds: words.map((w) => w.id),
    createdAt: new Date().toISOString(),
    endedAt: null,
    ownerId: null,
    pending: null,
  });
  if (!state.preferences.onboardingCompleted)
    state.preferences.onboardingStep = Math.max(
      3,
      state.preferences.onboardingStep,
    );
  return id;
}

function ownedSession(state: LocalPracticeState, id: string, ownerId: string) {
  const session = state.sessions.find((s) => s.id === id);
  if (!session || session.endedAt)
    throw new Error("Exersarea s-a încheiat. Reveniți la profil.");
  if (session.ownerId !== ownerId)
    throw new Error(
      "Exersarea este deschisă în altă filă. Reveniți la profil.",
    );
  return session;
}

export function claimSession(
  state: LocalPracticeState,
  id: string,
  ownerId: string,
) {
  const session = state.sessions.find((s) => s.id === id);
  if (!session || session.endedAt)
    throw new Error("Exersarea nu mai este disponibilă.");
  if (!session.practiceGoalId) {
    // Adopting an old open round does not relabel its already-recorded turns.
    saveGoal(state, session.childId, session.target.label);
    session.practiceGoalId = state.profiles
      .find((p) => p.id === session.childId)!
      .goals.find((g) => g.label === session.target.label)!.id;
  }
  session.ownerId = ownerId;
  if (session.pending) commitPendingTurn(state, id, ownerId, "recovery");
}

export function showPracticeWord(
  state: LocalPracticeState,
  sessionId: string,
  ownerId: string,
  wordId: string,
  turnId: string,
) {
  const session = ownedSession(state, sessionId, ownerId);
  if (session.pending) {
    if (session.pending.id === turnId) return;
    throw new Error("Închideți mai întâi cuvântul afișat.");
  }
  if (!session.remainingWordIds.includes(wordId))
    throw new Error("Cuvântul nu mai este în roată.");
  const profile = state.profiles.find((p) => p.id === session.childId)!;
  session.pending = {
    id: turnId,
    wordId,
    shownAt: new Date().toISOString(),
    goals: attributePracticeGoals(wordId, profile.goals),
    practiceGoalId: session.practiceGoalId,
  };
}

export function commitPendingTurn(
  state: LocalPracticeState,
  sessionId: string,
  ownerId: string,
  reason: "keep" | "remove" | "recovery",
  expectedTurnId?: string,
) {
  const session = state.sessions.find((s) => s.id === sessionId);
  if (!session) throw new Error("Exersarea nu mai există.");
  if (expectedTurnId && state.turns.some((t) => t.id === expectedTurnId))
    return;
  ownedSession(state, sessionId, ownerId);
  const pending = session.pending;
  if (!pending || (expectedTurnId && pending.id !== expectedTurnId)) return;
  const word = session.words.find((w) => w.id === pending.wordId)!;
  const now = new Date().toISOString();
  if (!state.turns.some((t) => t.id === pending.id))
    state.turns.push({
      id: pending.id,
      sessionId,
      childId: session.childId,
      wordId: word.id,
      display: word.display,
      shownAt: pending.shownAt,
      closedAt: now,
      reason,
      goals: structuredClone(pending.goals),
      ...(pending.practiceGoalId
        ? { practiceGoalId: pending.practiceGoalId }
        : {}),
    });
  if (reason === "remove")
    session.remainingWordIds = session.remainingWordIds.filter(
      (id) => id !== word.id,
    );
  session.pending = null;
  if (!session.remainingWordIds.length) session.endedAt = now;
  awardCompletedParticipation(state, session.childId, pending.id, now);
  if (!state.preferences.onboardingCompleted)
    state.preferences.onboardingStep = 4;
}

export function endPracticeSession(
  state: LocalPracticeState,
  id: string,
  ownerId: string,
) {
  const session = ownedSession(state, id, ownerId);
  if (session.pending)
    throw new Error("Închideți cuvântul înainte de a încheia exersarea.");
  session.endedAt = new Date().toISOString();
}

export function sessionWords(session: PracticeSession) {
  return session.remainingWordIds.flatMap(
    (id) => session.words.find((w) => w.id === id) ?? [],
  );
}
