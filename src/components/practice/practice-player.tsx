"use client";

import { useEffect, useRef, useState } from "react";
import { WheelGame } from "@/components/wheel-game";
import { MedalCelebration } from "@/components/practice/medal-celebration";
import { playCelebrationSound } from "@/components/practice/celebration-sound";
import { celebrateWheelCompletion } from "@/components/wheel-completion-celebration";
import {
  claimSession,
  commitPendingTurn,
  endPracticeSession,
  sessionWords,
  showPracticeWord,
} from "@/practice/sessions";
import {
  newLocalId,
  type LocalPracticeState,
  type PracticeAward,
} from "@/practice/model";
import { buildPracticeContent } from "@/practice/preparation";
import {
  mutatePracticeState,
  readPracticeState,
  subscribePracticeChanges,
} from "@/storage/practice-store";
import { acquireSessionLock } from "@/storage/session-lock";
import {
  nextParticipationMilestone,
  previousParticipationMilestone,
} from "@/practice/rewards";
import type { ContentWord } from "@/content/types";

export function PracticePlayer({
  sessionId,
  initialState,
  onExit,
}: {
  sessionId: string;
  initialState: LocalPracticeState;
  onExit: () => void;
}) {
  const [state, setState] = useState(initialState);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ending, setEnding] = useState(false);
  const [endError, setEndError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const lock = useRef<{ ownerId: string; release: () => void } | null>(null);
  const pending = useRef<{ word: ContentWord; turnId: string } | null>(null);
  const endDialog = useRef<HTMLDialogElement>(null);
  const session = state.sessions.find((s) => s.id === sessionId);
  const child = state.profiles.find((p) => p.id === session?.childId);

  useEffect(() => {
    let live = true;
    const controller = new AbortController();
    let release: (() => void) | undefined;
    acquireSessionLock(sessionId, controller.signal)
      .then(async (acquired) => {
        release = acquired.release;
        if (!live) {
          release();
          return;
        }
        lock.current = acquired;
        const current = await mutatePracticeState((draft) =>
          claimSession(draft, sessionId, acquired.ownerId),
        );
        if (live) {
          setState(current);
          setReady(true);
        }
      })
      .catch((reason) => {
        release?.();
        if (live)
          setError(
            reason instanceof Error
              ? reason.message
              : "Exersarea nu poate fi deschisă.",
          );
      });
    return () => {
      live = false;
      controller.abort();
      release?.();
      lock.current = null;
    };
  }, [sessionId]);
  useEffect(
    () =>
      subscribePracticeChanges(() => {
        void readPracticeState()
          .then((current) =>
            setState((previous) =>
              current.revision >= previous.revision ? current : previous,
            ),
          )
          .catch((reason) =>
            setError(
              reason instanceof Error
                ? reason.message
                : "Nu putem citi datele locale.",
            ),
          );
      }),
    [],
  );

  useEffect(() => {
    if (ending) endDialog.current?.showModal();
    else endDialog.current?.close();
  }, [ending]);

  if (!session || !child)
    return (
      <main className="practice-shell">
        <p role="alert">Profilul sau exersarea nu mai există.</p>
        <button className="secondary-button" onClick={onExit}>
          Înapoi la profiluri
        </button>
      </main>
    );
  const availableAwards = state.awards.filter(
    (a) => a.childId === child.id && !a.presented,
  );

  async function shown(word: ContentWord) {
    if (!lock.current) throw new Error("Exersarea nu este pregătită.");
    if (!pending.current) pending.current = { word, turnId: newLocalId() };
    const turnId = pending.current.turnId;
    const next = await mutatePracticeState((draft) =>
      showPracticeWord(
        draft,
        sessionId,
        lock.current!.ownerId,
        word.id,
        turnId,
      ),
    );
    setState(next);
  }
  async function close(reason: "keep" | "remove") {
    if (!pending.current || !lock.current)
      throw new Error("Cuvântul nu poate fi salvat încă. Încercați din nou.");
    await shown(pending.current.word);
    const turnId = pending.current.turnId;
    const next = await mutatePracticeState((draft) =>
      commitPendingTurn(
        draft,
        sessionId,
        lock.current!.ownerId,
        reason,
        turnId,
      ),
    );
    pending.current = null;
    setState(next);
  }
  async function finish() {
    if (!lock.current || busy) return;
    setBusy(true);
    setEndError(null);
    try {
      setState(
        await mutatePracticeState((draft) =>
          endPracticeSession(draft, sessionId, lock.current!.ownerId),
        ),
      );
      setEnding(false);
    } catch (reason) {
      setEndError(
        reason instanceof Error ? reason.message : "Nu putem încheia acum.",
      );
    } finally {
      setBusy(false);
    }
  }
  async function dismissAwards(variant: "star" | "flower" | "sun") {
    if (busy) return;
    setBusy(true);
    try {
      const ids = new Set(availableAwards.map((a) => a.id));
      const next = await mutatePracticeState((draft) => {
        for (const a of draft.awards)
          if (a.childId === child!.id && ids.has(a.id)) {
            a.presented = true;
            a.variant = variant;
          }
      });
      setState(next);
    } catch (reason) {
      setError(
        reason instanceof Error ? reason.message : "Nu putem salva acum.",
      );
    } finally {
      setBusy(false);
    }
  }

  if (!ready)
    return (
      <main className="practice-shell">
        <p role={error ? "alert" : "status"}>
          {error ?? "Deschidem exersarea salvată..."}
        </p>
        <button type="button" className="secondary-button" onClick={onExit}>
          Înapoi la profil
        </button>
      </main>
    );
  if (availableAwards.length && !session.pending)
    return (
      <ParticipationCelebration
        awards={availableAwards}
        childName={child.nickname}
        sound={state.preferences.sound}
        busy={busy}
        error={error}
        onContinue={(variant) => {
          void dismissAwards(variant);
        }}
      />
    );
  if (session.endedAt) {
    const turns = state.turns.filter((t) => t.sessionId === session.id);
    return (
      <main className="practice-shell">
        <div className="practice-preview practice-frame">
          <h1>Exersare încheiată, {child.nickname}!</h1>
          <p>
            {turns.length} cuvinte exersate ·{" "}
            {new Set(turns.map((t) => t.wordId)).size} cuvinte diferite.
          </p>
          <p>
            Participarea este salvată pe acest dispozitiv. Vă puteți opri
            oricând, fără să pierdeți recompensele.
          </p>
          <button className="spin-button" type="button" onClick={onExit}>
            Înapoi la profil
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="app-shell">
      <div className="app-frame">
        <header className="app-header">
          <h1>Roata cuvintelor</h1>
        </header>
        {error && !ending && (
          <p role="alert" className="practice-result-error">
            {error}
          </p>
        )}
        <WheelGame
          content={buildPracticeContent(session.target, session.words)}
          locale="ro"
          practice={{
            words: sessionWords(session),
            childLabel: child.nickname,
            progress: {
              current: state.turns.filter((t) => t.childId === child.id).length,
              next: nextParticipationMilestone(
                state.turns.filter((t) => t.childId === child.id).length,
              ),
              previous: previousParticipationMilestone(
                state.turns.filter((t) => t.childId === child.id).length,
              ),
            },
            onShown: shown,
            onClose: close,
            onEnd: () => {
              setEndError(null);
              setEnding(true);
            },
            onExit,
          }}
        />
        <dialog
          className="practice-end-dialog"
          aria-labelledby="practice-end-title"
          aria-describedby="practice-end-description"
          ref={endDialog}
          onCancel={() => setEnding(false)}
          onClose={() => setEnding(false)}
        >
          <h2 id="practice-end-title">Încheiem exersarea?</h2>
          <p id="practice-end-description">
            Cuvintele exersate și recompensele lui {child.nickname} rămân
            salvate.
          </p>
          {(endError || error) && (
            <p className="practice-result-error" role="alert">
              {endError || error} Exersarea este încă deschisă. Puteți reîncerca
              sau continua jocul.
            </p>
          )}
          <div className="practice-form-actions">
            <button
              className="spin-button"
              type="button"
              disabled={busy}
              onClick={() => {
                void finish();
              }}
            >
              Da, încheiem
            </button>
            <button
              className="secondary-button"
              type="button"
              disabled={busy}
              onClick={() => setEnding(false)}
            >
              Continuăm
            </button>
          </div>
        </dialog>
      </div>
    </main>
  );
}

export function ParticipationCelebration({
  awards,
  childName,
  busy,
  error,
  onContinue,
  sound = false,
}: {
  awards: PracticeAward[];
  childName: string;
  busy: boolean;
  error: string | null;
  onContinue: (variant: "star" | "flower" | "sun") => void;
  sound?: boolean;
}) {
  const progress = awards.some((award) => award.source === "adult");
  const [variant, setVariant] = useState<"star" | "flower" | "sun">(
    progress ? "sun" : "star",
  );
  useEffect(() => {
    if (sound) playCelebrationSound();
    return celebrateWheelCompletion();
  }, [sound]);
  return (
    <MedalCelebration
      heading={`Bravo, ${childName}!`}
      awards={awards}
      message={
        progress
          ? "Sărbătorim un pas înainte! Ai primit o medalie pentru reușita ta."
          : awards.length === 1
            ? "Ai câștigat o medalie pentru exersare!"
            : "Ai câștigat medalii noi pentru exersare!"
      }
      variant={variant}
      progress={progress}
      onVariantChange={setVariant}
      onContinue={() => onContinue(variant)}
      continueLabel={
        awards.length === 1 ? "Păstrează medalia" : "Păstrează medaliile"
      }
      busy={busy}
      error={error}
    />
  );
}
