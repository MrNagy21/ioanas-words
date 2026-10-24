"use client";

import Image from "next/image";
import { useState } from "react";
import { Medal } from "@/components/practice/medal";
import {
  addProgressCelebration,
  addPronunciationObservation,
  PRONUNCIATION_LABELS,
} from "@/practice/observations";
import type { ChildProfile, LocalPracticeState } from "@/practice/model";

export function PracticeProgress({
  state,
  child,
  busy,
  onSave,
  onCelebrateNow,
}: {
  state: LocalPracticeState;
  child: ChildProfile;
  busy: boolean;
  onSave: (
    command: (draft: LocalPracticeState) => void,
    message: string,
  ) => Promise<boolean>;
  onCelebrateNow: () => void;
}) {
  const [tab, setTab] = useState("activity");
  const [historyLimit, setHistoryLimit] = useState(100);
  const [goalId, setGoalId] = useState(child.goals[0]?.id ?? "");
  const [rating, setRating] = useState<number | null>(null);
  const [correctsId, setCorrectsId] = useState<string | undefined>();
  const turns = state.turns.filter((t) => t.childId === child.id);
  const sessions = state.sessions.filter((s) => s.childId === child.id);
  const historyWords = new Map(
    sessions.flatMap((session) =>
      session.words.map((word) => [word.id, word] as const),
    ),
  );
  const observations = state.observations.filter((o) => o.childId === child.id);
  const awards = state.awards.filter((a) => a.childId === child.id);
  const selectedGoalId =
    goalId && child.goals.some((g) => g.id === goalId)
      ? goalId
      : (child.goals[0]?.id ?? "");
  return (
    <section className="practice-progress" aria-label="Activitate și progres">
      <div className="practice-progress-nav" aria-label="Secțiuni progres">
        {[
          ["activity", "Activitate"],
          ["pronunciation", "Pronunție"],
          ["awards", "Medalii"],
        ].map(([id, label]) => (
          <button
            type="button"
            key={id}
            aria-pressed={tab === id}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === "activity" ? (
        <>
          <h3>Ce am exersat împreună</h3>
          <dl className="practice-activity-summary">
            <div>
              <dt>Cuvinte exersate</dt>
              <dd>{turns.length}</dd>
            </div>
            <div>
              <dt>Cuvinte diferite</dt>
              <dd>{new Set(turns.map((t) => t.wordId)).size}</dd>
            </div>
            <div>
              <dt>Exersări începute</dt>
              <dd>{sessions.length}</dd>
            </div>
          </dl>
          <details className="practice-count-help">
            <summary>Cum se numără cuvintele?</summary>
            <p>
              Fiecare cuvânt închis contează, chiar dacă apare din nou. Numărăm
              exersarea, nu pronunțiile corecte. Un cuvânt rămas deschis la
              întrerupere este adăugat o singură dată la revenire.
            </p>
          </details>
          {turns.length ? (
            <ol className="practice-history">
              {[...turns]
                .reverse()
                .slice(0, historyLimit)
                .map((t) => (
                  <li key={t.id}>
                    {historyWords.get(t.wordId)?.image && (
                      <Image
                        src={historyWords.get(t.wordId)!.image}
                        alt=""
                        width={48}
                        height={48}
                        unoptimized
                      />
                    )}
                    <div>
                      <strong>{t.display}</strong>
                      <time dateTime={t.closedAt}>
                        {formatDate(t.closedAt)}
                      </time>
                      {t.reason === "recovery" && (
                        <small>Adăugat la revenirea în joc</small>
                      )}
                    </div>
                  </li>
                ))}
            </ol>
          ) : (
            <div className="practice-history-empty">
              <Medal size={56} />
              <div>
                <h4>Prima roată vă așteaptă</h4>
                <p>
                  Pregătiți câteva cuvinte și jucați-vă împreună. După primul
                  cuvânt exersat apare și prima medalie.
                </p>
              </div>
            </div>
          )}
          {turns.length > historyLimit && (
            <button
              className="secondary-button"
              type="button"
              onClick={() => setHistoryLimit((limit) => limit + 100)}
            >
              Mai multe cuvinte
            </button>
          )}
          {sessions.length > 0 && (
            <details className="practice-session-history">
              <summary>Exersări începute · {sessions.length}</summary>
              <ul>
                {[...sessions].reverse().map((s) => (
                  <li key={s.id}>
                    <strong>{s.title}</strong>
                    <time dateTime={s.createdAt}>
                      {formatDate(s.createdAt)}
                    </time>
                    <span>
                      {s.endedAt ? "Încheiată" : "Poate fi reluată"} ·{" "}
                      {turns.filter((t) => t.sessionId === s.id).length} cuvinte
                      înregistrate
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          )}
          <h3>Exersarea pe sunete</h3>
          {child.goals.length ? (
            <ul className="practice-goal-stats">
              {child.goals.map((g) => {
                const reviewed = turns.flatMap((t) =>
                  t.goals.filter(
                    (a) => a.goalId === g.id && a.matched === true,
                  ),
                );
                const unknown = turns.filter((t) =>
                  t.goals.some((a) => a.goalId === g.id && a.matched === null),
                ).length;
                return (
                  <li key={g.id}>
                    <strong>{g.label}</strong>
                    <span>
                      {reviewed.length === 0 && unknown > 0
                        ? "Numărarea pe sunet așteaptă verificarea cuvintelor."
                        : reviewed.length === 1
                          ? "1 cuvânt exersat cu acest sunet"
                          : `${reviewed.length} cuvinte exersate cu acest sunet`}
                      {unknown > 0 && reviewed.length > 0
                        ? ` · ${unknown} ${unknown === 1 ? "cuvânt așteaptă" : "cuvinte așteaptă"} verificarea sunetului`
                        : ""}
                    </span>
                    {reviewed.length > 0 && (
                      <small>
                        Început:{" "}
                        {
                          reviewed.filter((a) =>
                            a.positions.includes("initial"),
                          ).length
                        }{" "}
                        · Mijloc:{" "}
                        {
                          reviewed.filter((a) => a.positions.includes("medial"))
                            .length
                        }{" "}
                        · Final:{" "}
                        {
                          reviewed.filter((a) => a.positions.includes("final"))
                            .length
                        }{" "}
                        · Poziție necunoscută:{" "}
                        {reviewed.filter((a) => !a.positions.length).length}.
                        Pozițiile se pot suprapune.
                      </small>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>
              Alegeți sunetele pe care vreți să le exersați din „Sunete de
              exersat”.
            </p>
          )}
        </>
      ) : tab === "pronunciation" ? (
        <>
          <h3>Cum a mers pronunția?</h3>
          <p>
            Alegeți sunetul și notați cum l-a pronunțat copilul de această dată.
            Observația nu schimbă medaliile sau ritmul recompenselor.
          </p>
          {child.goals.length ? (
            <form
              className="practice-observation-form"
              onSubmit={async (event) => {
                event.preventDefault();
                if (
                  rating !== null &&
                  (await onSave(
                    (draft) =>
                      addPronunciationObservation(
                        draft,
                        child.id,
                        selectedGoalId,
                        rating,
                        correctsId,
                      ),
                    "Observație salvată.",
                  ))
                ) {
                  setRating(null);
                  setCorrectsId(undefined);
                }
              }}
            >
              <label>
                Sunetul observat
                <select
                  value={selectedGoalId}
                  onChange={(e) => {
                    setGoalId(e.target.value);
                    setRating(null);
                    setCorrectsId(undefined);
                  }}
                >
                  {child.goals.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.label}
                      {!g.active ? " · arhivată" : ""}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="pronunciation-rating">
                Cum apreciați pronunția acestui sunet?
              </label>
              <input
                id="pronunciation-rating"
                type="range"
                min="0"
                max="5"
                step="1"
                value={rating ?? 0}
                onChange={(e) => setRating(Number(e.target.value))}
                aria-valuetext={
                  rating === null
                    ? "Neevaluat"
                    : `${rating} din 5: ${PRONUNCIATION_LABELS[rating]}`
                }
              />
              <output htmlFor="pronunciation-rating">
                {rating === null
                  ? "Încă neevaluat. Alegeți o treaptă care descrie ce ați observat."
                  : `${rating} din 5 · ${PRONUNCIATION_LABELS[rating]}`}
              </output>
              <div className="practice-rating-choices">
                {PRONUNCIATION_LABELS.map((label, index) => (
                  <button
                    type="button"
                    key={label}
                    aria-pressed={rating === index}
                    onClick={() => setRating(index)}
                  >
                    {index} · {label}
                  </button>
                ))}
              </div>
              <button
                className="secondary-button"
                disabled={busy || rating === null}
                type="submit"
              >
                {correctsId ? "Salvează corectarea" : "Salvează observația"}
              </button>
            </form>
          ) : (
            <p>
              Adăugați mai întâi un sunet din „Sunete de exersat”. Apoi puteți
              nota cum merge pronunția.
            </p>
          )}
          {observations.length > 0 && (
            <>
              <h3>Observațiile de până acum</h3>
              <ul className="practice-observation-history">
                {[...observations].reverse().map((o) => (
                  <li key={o.id}>
                    <strong>
                      {child.goals.find((g) => g.id === o.goalId)?.label} ·{" "}
                      {o.rating} din 5
                    </strong>
                    <span>{PRONUNCIATION_LABELS[o.rating]}</span>
                    <time dateTime={o.createdAt}>
                      {formatDate(o.createdAt)}
                    </time>
                    {o.correctsId && (
                      <small>Corectare a unei observații anterioare</small>
                    )}
                    <button
                      className="quiet-button"
                      type="button"
                      onClick={() => {
                        setGoalId(o.goalId);
                        setRating(o.rating);
                        setCorrectsId(o.id);
                      }}
                    >
                      Corectează observația
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
          {child.goals.length > 0 && (
            <div className="practice-adult-celebration">
              <h3>Un pas înainte merită sărbătorit</h3>
              <p>
                Ați observat un progres la sunetul ales? Oferiți o medalie
                specială, acum sau la următoarea exersare. Medalia se adaugă
                doar când o alegeți aici.
              </p>
              <div className="practice-form-actions">
                <button
                  className="secondary-button"
                  disabled={busy}
                  type="button"
                  onClick={async () => {
                    if (
                      await onSave(
                        (draft) =>
                          addProgressCelebration(
                            draft,
                            child.id,
                            selectedGoalId,
                          ),
                        "Medalie de progres salvată.",
                      )
                    )
                      onCelebrateNow();
                  }}
                >
                  Sărbătorește acum
                </button>
                <button
                  className="secondary-button"
                  disabled={busy}
                  type="button"
                  onClick={() => {
                    void onSave(
                      (draft) =>
                        addProgressCelebration(draft, child.id, selectedGoalId),
                      "Medalia va apărea la următoarea exersare a acestui copil.",
                    );
                  }}
                >
                  La următoarea exersare
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <h3>Colecția lui {child.nickname}</h3>
          {awards.length ? (
            <ul className="practice-collection">
              {awards.map((a) => (
                <li key={a.id}>
                  <Medal variant={a.variant} progress={a.source === "adult"} />
                  <div>
                    <strong>{a.title}</strong>
                    <span>
                      {a.source === "adult"
                        ? "Progres observat de adult"
                        : "Participare"}
                    </span>
                    <time dateTime={a.earnedAt}>{formatDate(a.earnedAt)}</time>
                    {!a.presented && (
                      <small>De arătat la următoarea exersare</small>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              Colecția începe cu primul cuvânt exersat. Fiecare medalie
              câștigată va rămâne aici.
            </p>
          )}
        </>
      )}
    </section>
  );
}
function formatDate(date: string) {
  return new Intl.DateTimeFormat("ro-RO", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(date));
}
