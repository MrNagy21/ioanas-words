"use client";

import { useEffect, useRef, useState } from "react";
import { BackButton } from "./back-button";
import {
  pushPracticeLocation,
  returnToPracticeLocation,
  isProfileLocation,
} from "./navigation";
import {
  addProgressCelebration,
  addPronunciationObservation,
  PRONUNCIATION_LABELS,
} from "@/practice/observations";
import type { ChildProfile, LocalPracticeState } from "@/practice/model";
import { TaskRow, type SavePractice } from "./profile-panel";

type View = {
  page: "choose" | "rate" | "history" | "celebrate";
  goalId?: string;
  correctsId?: string;
  rating: number | null;
};
export function PronunciationPanel({
  state,
  child,
  initialGoalId,
  busy,
  onSave,
  onCelebrateNow,
  onAddSound,
  onNavigate,
}: {
  state: LocalPracticeState;
  child: ChildProfile;
  initialGoalId?: string;
  busy: boolean;
  onSave: SavePractice;
  onCelebrateNow: () => void;
  onAddSound: () => void;
  onNavigate: () => void;
}) {
  const [view, setView] = useState<View>({
    page: initialGoalId ? "rate" : "choose",
    goalId: initialGoalId,
    rating: null,
  });
  const [historyLimit, setHistoryLimit] = useState(20);
  const [savedMessage, setSavedMessage] = useState("");
  const focusRef = useRef<HTMLDivElement>(null);
  const observations = state.observations.filter((o) => o.childId === child.id);
  const goal = child.goals.find((g) => g.id === view.goalId);
  function navigate(next: View) {
    onNavigate();
    const current = window.history.state;
    pushPracticeLocation({
      wordWheelProfile: { ...current?.wordWheelProfile, pronunciation: next },
    });
    setView(next);
    setSavedMessage("");
  }
  useEffect(() => {
    const pop = () => {
      const saved = window.history.state?.wordWheelProfile;
      if (saved?.childId === child.id && saved.screen === "pronunciation") {
        setView(
          saved.pronunciation ?? {
            page: initialGoalId ? "rate" : "choose",
            goalId: initialGoalId,
            rating: null,
          },
        );
      }
    };
    window.addEventListener("popstate", pop);
    return () => window.removeEventListener("popstate", pop);
  }, [child.id, initialGoalId]);
  useEffect(() => {
    document.querySelector<HTMLElement>(".practice-shell")?.scrollTo(0, 0);
    focusRef.current
      ?.querySelector<HTMLElement>("h1")
      ?.focus({ preventScroll: true });
  }, [view.page, view.goalId, view.correctsId]);
  return (
    <div
      className="pronunciation-panel"
      data-step={view.page}
      ref={focusRef}
      tabIndex={-1}
    >
      {savedMessage && (
        <p className="task-success" role="status">
          {savedMessage}
        </p>
      )}
      {view.page !== "choose" && (
        <BackButton
          className="task-local-back"
          onClick={() => {
            const page = view.correctsId ? "history" : "choose";
            onNavigate();
            returnToPracticeLocation(
              (entry) =>
                isProfileLocation(entry, child.id, "pronunciation") &&
                (entry.wordWheelProfile?.pronunciation?.page ?? "choose") ===
                  page,
              {
                wordWheelProfile: {
                  childId: child.id,
                  screen: "pronunciation",
                  pronunciation: { page, rating: null },
                },
              },
            );
          }}
        >
          {view.correctsId ? "Istoricul observațiilor" : "Toate sunetele"}
        </BackButton>
      )}
      <header className="task-heading">
        <h1 tabIndex={-1}>
          {view.page === "rate"
            ? view.correctsId
              ? "Corectează observația"
              : `Cum a mers sunetul ${goal?.label ?? "ales"}?`
            : view.page === "history"
              ? "Istoricul observațiilor"
              : view.page === "celebrate"
                ? "Sărbătorește un progres"
                : "Pronunție"}
        </h1>
        <p>{child.nickname}</p>
      </header>
      {view.page === "choose" && (
        <>
          <p className="task-intro">
            Alegeți un sunet și notați cum l-a pronunțat copilul astăzi.
          </p>
          <div className="task-menu">
            {child.goals.map((g) => {
              const last = observations.filter((o) => o.goalId === g.id).at(-1);
              return (
                <TaskRow
                  key={g.id}
                  title={g.label}
                  leading={g.label}
                  description={`${last ? `${PRONUNCIATION_LABELS[last.rating]} · ${formatDate(last.createdAt)}` : "Neevaluat · Adăugați prima observație"}${!g.active ? " · Arhivat" : ""}`}
                  onClick={() =>
                    navigate({ page: "rate", goalId: g.id, rating: null })
                  }
                />
              );
            })}
          </div>
          {!child.goals.length && (
            <>
              <p className="task-empty">
                Adăugați un sunet pentru prima observație. El se adaugă și
                automat când începeți o roată.
              </p>
              <button
                type="button"
                className="secondary-button"
                onClick={onAddSound}
              >
                Adaugă un sunet
              </button>
            </>
          )}
          <nav className="task-menu task-secondary-menu">
            <TaskRow
              title="Istoricul observațiilor"
              description={`${observations.length} ${observations.length === 1 ? "observație salvată" : "observații salvate"}`}
              onClick={() => navigate({ page: "history", rating: null })}
            />
            {child.goals.length > 0 && (
              <TaskRow
                title="Sărbătorește un progres"
                description="Oferiți o medalie pentru un pas înainte observat de dumneavoastră"
                onClick={() => navigate({ page: "celebrate", rating: null })}
              />
            )}
          </nav>
        </>
      )}
      {view.page === "rate" && goal && (
        <form
          className="pronunciation-rating-form"
          onSubmit={async (e) => {
            e.preventDefault();
            if (view.rating === null) return;
            if (
              await onSave(
                (d) =>
                  addPronunciationObservation(
                    d,
                    child.id,
                    goal.id,
                    view.rating!,
                    view.correctsId,
                  ),
                "Observație salvată.",
              )
            ) {
              navigate({ page: "choose", rating: null });
              setSavedMessage(
                `Observația pentru ${goal.label} a fost salvată.`,
              );
            }
          }}
        >
          <p className="task-intro">
            Alegeți ce ați observat. Această apreciere nu schimbă medaliile.
          </p>
          <fieldset className="pronunciation-scale">
            <legend className="sr-only">
              Cum apreciați pronunția sunetului {goal.label}?
            </legend>
            {PRONUNCIATION_LABELS.map((label, rating) => (
              <label key={label} data-selected={view.rating === rating}>
                <input
                  type="radio"
                  name="pronunciation-rating"
                  value={rating}
                  checked={view.rating === rating}
                  disabled={busy}
                  onChange={() => setView((v) => ({ ...v, rating }))}
                />
                <span className="pronunciation-level" aria-hidden="true">
                  {rating}
                </span>
                <span>{label}</span>
              </label>
            ))}
          </fieldset>
          <div className="task-actions">
            <button
              className="spin-button"
              type="submit"
              disabled={busy || view.rating === null}
            >
              {busy
                ? "Se salvează…"
                : view.correctsId
                  ? "Salvează corectarea"
                  : "Salvează observația"}
            </button>
          </div>
        </form>
      )}
      {view.page === "rate" && !goal && (
        <p>Sunetul nu mai este în profil. Reveniți la toate sunetele.</p>
      )}
      {view.page === "history" && (
        <>
          {!observations.length && (
            <p>Prima observație va apărea aici, cu data și sunetul ales.</p>
          )}
          <ul className="practice-observation-history">
            {[...observations]
              .reverse()
              .slice(0, historyLimit)
              .map((o) => (
                <li key={o.id}>
                  <strong>
                    {child.goals.find((g) => g.id === o.goalId)?.label} ·{" "}
                    {PRONUNCIATION_LABELS[o.rating]}
                  </strong>
                  <time dateTime={o.createdAt}>{formatDate(o.createdAt)}</time>
                  {o.correctsId && (
                    <small>Corectare a unei observații anterioare</small>
                  )}
                  <button
                    className="quiet-button"
                    type="button"
                    onClick={() =>
                      navigate({
                        page: "rate",
                        goalId: o.goalId,
                        rating: o.rating,
                        correctsId: o.id,
                      })
                    }
                  >
                    Corectează observația
                  </button>
                </li>
              ))}
          </ul>
          {observations.length > historyLimit && (
            <button
              className="secondary-button"
              type="button"
              onClick={() => setHistoryLimit((n) => n + 20)}
            >
              Mai multe observații
            </button>
          )}
        </>
      )}
      {view.page === "celebrate" && (
        <>
          <p className="task-intro">
            Alegeți sunetul la care ați observat un progres. Medalia se adaugă
            doar când o oferiți aici.
          </p>
          <fieldset className="celebration-sounds">
            <legend>Sunetul sărbătorit</legend>
            <div className="sound-picker-grid">
              {child.goals.map((g) => (
                <label key={g.id} data-selected={view.goalId === g.id}>
                  <input
                    type="radio"
                    name="celebration-goal"
                    checked={view.goalId === g.id}
                    onChange={() => setView((v) => ({ ...v, goalId: g.id }))}
                  />
                  <span>{g.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="task-form-actions">
            <button
              className="spin-button"
              disabled={busy || !goal}
              type="button"
              onClick={async () => {
                if (
                  goal &&
                  (await onSave(
                    (d) => addProgressCelebration(d, child.id, goal.id),
                    "Medalie de progres salvată.",
                  ))
                )
                  onCelebrateNow();
              }}
            >
              Sărbătorește acum
            </button>
            <button
              className="secondary-button"
              disabled={busy || !goal}
              type="button"
              onClick={async () => {
                if (
                  goal &&
                  (await onSave(
                    (d) => addProgressCelebration(d, child.id, goal.id),
                    "Medalia va apărea la următoarea exersare a acestui copil.",
                  ))
                ) {
                  navigate({ page: "choose", rating: null });
                  setSavedMessage(
                    "Medalia îl va aștepta la următoarea exersare.",
                  );
                }
              }}
            >
              La următoarea exersare
            </button>
          </div>
        </>
      )}
    </div>
  );
}
function formatDate(date: string) {
  return new Intl.DateTimeFormat("ro-RO", { dateStyle: "short" }).format(
    new Date(date),
  );
}
