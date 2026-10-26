"use client";

import Image from "next/image";
import { useState } from "react";
import { Medal } from "@/components/practice/medal";
import type { ChildProfile, LocalPracticeState } from "@/practice/model";

export function PracticeProgress({
  state,
  child,
  view,
}: {
  state: LocalPracticeState;
  child: ChildProfile;
  view: "activity" | "awards";
}) {
  const [historyLimit, setHistoryLimit] = useState(20);
  const [activityView, setActivityView] = useState<
    "words" | "sessions" | "help"
  >("words");
  const turns = state.turns.filter((t) => t.childId === child.id);
  const sessions = state.sessions.filter((s) => s.childId === child.id);
  const historyWords = new Map(
    sessions.flatMap((session) =>
      session.words.map((word) => [word.id, word] as const),
    ),
  );
  const awards = state.awards.filter((a) => a.childId === child.id);
  return (
    <section className="practice-progress" aria-label="Activitate și progres">
      {view === "activity" ? (
        <>
          <div className="task-segments" aria-label="Afișează activitatea">
            <button
              type="button"
              aria-pressed={activityView === "words"}
              onClick={() => setActivityView("words")}
            >
              Cuvinte
            </button>
            <button
              type="button"
              aria-pressed={activityView === "sessions"}
              onClick={() => setActivityView("sessions")}
            >
              Runde
            </button>
            <button
              type="button"
              aria-pressed={activityView === "help"}
              onClick={() => setActivityView("help")}
            >
              Cum numărăm
            </button>
          </div>
          {activityView === "words" && (
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
                      Pregătiți câteva cuvinte și jucați-vă împreună. După
                      primul cuvânt exersat apare și prima medalie.
                    </p>
                  </div>
                </div>
              )}
              {turns.length > historyLimit && (
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => setHistoryLimit((limit) => limit + 20)}
                >
                  Mai multe cuvinte
                </button>
              )}
            </>
          )}
          {activityView === "help" && (
            <>
              <h3>Cum se numără cuvintele?</h3>
              <p>
                Fiecare cuvânt închis contează, inclusiv repetările. Numărăm
                exersarea, nu pronunțiile corecte.
              </p>
              <p>
                Un cuvânt rămas deschis la întrerupere este adăugat o singură
                dată la revenire. Pentru fiecare sunet urmărit, numărăm practica
                la roata lui și potrivirile verificate din alte roți. Același
                cuvânt contează o singură dată pentru un sunet.
              </p>
            </>
          )}
          {activityView === "sessions" && (
            <section className="practice-session-history">
              <h3>Exersări începute · {sessions.length}</h3>
              {!sessions.length && (
                <p>Rundele apar aici când începeți o roată.</p>
              )}
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
            </section>
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
