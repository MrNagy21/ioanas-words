"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { attributePracticeGoals } from "@/content/sound-mapping";
import { WheelSetupScreen } from "@/components/wheel-setup-screen";
import {
  buildPracticeContent,
  preparePracticeWords,
} from "@/practice/preparation";
import type { ChildProfile } from "@/practice/model";
import type { ContentWord, GameplayTarget } from "@/content/types";
import type { WheelSetupConfig } from "@/game/wheel-setup-storage";

export type PreparedPractice = {
  childId: string;
  target: GameplayTarget;
  config: WheelSetupConfig;
  words: ContentWord[];
};

export function PreparePractice({
  child,
  targets,
  words,
  onCancel,
  onPrepared,
  initialPrepared,
}: {
  child: ChildProfile;
  targets: GameplayTarget[];
  words: ContentWord[];
  onCancel: () => void;
  onPrepared: (prepared: PreparedPractice) => void;
  initialPrepared?: PreparedPractice;
}) {
  const [target, setTarget] = useState<GameplayTarget | null>(
    initialPrepared?.target ?? null,
  );
  const content = useMemo(
    () => (target ? buildPracticeContent(target, words) : null),
    [target, words],
  );
  if (content && target)
    return (
      <main className="app-shell">
        <div className="app-frame">
          <header className="app-header">
            <h1>Roată pentru {child.nickname}</h1>
            <button
              className="quiet-button"
              type="button"
              onClick={() => setTarget(null)}
            >
              Schimbă alegerea
            </button>
          </header>
          <WheelSetupScreen
            content={content}
            locale="ro"
            initialConfig={
              initialPrepared?.target.id === target.id
                ? initialPrepared.config
                : undefined
            }
            onPrepare={(config) =>
              onPrepared({
                childId: child.id,
                target,
                config,
                words: preparePracticeWords(content, config),
              })
            }
          />
        </div>
      </main>
    );
  return (
    <main className="practice-shell">
      <div className="practice-frame">
        <header className="practice-header">
          <h1>Roată pentru {child.nickname}</h1>
          <button className="secondary-button" onClick={onCancel} type="button">
            Înapoi la profil
          </button>
        </header>
        <div className="practice-intro">
          <h2>Ce exersăm astăzi?</h2>
          <p>
            Alegeți o literă sau un grup de litere. La pasul următor alegeți
            cuvintele și mărimea roții.
          </p>
        </div>
        <div className="practice-target-picker">
          {targets.map((t) => (
            <button
              className="letter-tile"
              type="button"
              key={t.id}
              onClick={() => setTarget(t)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export function PracticePreview({
  child,
  prepared,
  busy,
  error,
  onStart,
  onEditGoals,
  onChangeWheel,
  onCancel,
}: {
  child: ChildProfile;
  prepared: PreparedPractice;
  busy: boolean;
  error: string | null;
  onStart: () => void;
  onEditGoals: () => void;
  onChangeWheel: () => void;
  onCancel: () => void;
}) {
  const goals = child.goals.filter((g) => g.active);
  const coverage = goals.map((goal) => {
    const attributions = prepared.words.map(
      (word) => attributePracticeGoals(word.id, [goal])[0],
    );
    return {
      ...goal,
      matched: attributions.filter((a) => a.matched === true).length,
      unknown: attributions.filter((a) => a.matched === null).length,
    };
  });
  const hasMatches = coverage.some((goal) => goal.matched > 0);
  return (
    <main className="practice-shell">
      <div className="practice-preview practice-frame">
        <button type="button" className="quiet-button" onClick={onCancel}>
          Înapoi la profil
        </button>
        <h1>Roata lui {child.nickname} e gata</h1>
        <p>
          {prepared.words.length} cuvinte pe roata {prepared.target.label}. Fără
          grabă. După fiecare cuvânt, alegeți dacă rămâne pe roată.
        </p>
        <section className="practice-preview-goals">
          <h2>Ce păstrăm în istoric</h2>
          <p>
            Când închideți imaginea unui cuvânt, îl adăugăm în istoricul lui{" "}
            {child.nickname}. Dacă apare din nou, se numără din nou.
          </p>
          {goals.length ? (
            <>
              <ul>
                {coverage.map((goal) => (
                  <li key={goal.id}>
                    <strong>{goal.label}</strong>
                    {" · "}
                    {goal.matched > 0
                      ? `${goal.matched} cuvinte verificate cu acest sunet.`
                      : goal.unknown === 0
                        ? "Niciun cuvânt cu acest sunet pe roată."
                        : "Verificarea sunetului este în așteptare."}
                    {goal.unknown > 0 &&
                      goal.matched > 0 &&
                      ` Încă ${goal.unknown} cuvinte așteaptă verificarea.`}
                  </li>
                ))}
              </ul>
              <p>
                {hasMatches
                  ? "Un cuvânt poate conta pentru mai multe sunete alese, dacă prezența lor a fost verificată."
                  : "Pentru această roată numărăm deocamdată cuvintele exersate, fără totaluri pe sunete. Puteți începe așa sau schimba alegerea."}
              </p>
            </>
          ) : (
            <p>
              Nu ați ales încă sunete de exersat. Puteți începe așa sau le
              puteți adăuga acum.
            </p>
          )}
          <button
            type="button"
            className="secondary-button"
            onClick={onEditGoals}
          >
            {goals.length ? "Editează sunetele" : "Alege sunetele"}
          </button>
        </section>
        <h2>Cuvintele din această roată</h2>
        <ul className="practice-word-preview">
          {prepared.words.map((w) => (
            <li key={w.id}>
              <Image src={w.image} alt="" width={48} height={48} unoptimized />
              <span>{w.display}</span>
            </li>
          ))}
        </ul>
        {error && (
          <p className="practice-alert" role="alert">
            {error}
          </p>
        )}
        <div className="practice-form-actions">
          <button
            className="spin-button"
            disabled={busy || !prepared.words.length}
            type="button"
            onClick={onStart}
          >
            {busy
              ? "Se pregătește..."
              : hasMatches
                ? "Începe exersarea"
                : "Începe exersarea generală"}
          </button>
          <button
            className="secondary-button"
            type="button"
            disabled={busy}
            onClick={onChangeWheel}
          >
            Modifică roata
          </button>
        </div>
      </div>
    </main>
  );
}
