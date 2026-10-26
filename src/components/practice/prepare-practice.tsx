"use client";

import Image from "next/image";
import { Brand } from "@/components/brand";
import { BackButton } from "./back-button";
import { useMemo, useState } from "react";
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
            <div className="brand-task-title">
              <Brand compact />
              <h1>Roată pentru {child.nickname}</h1>
            </div>
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
          <div className="brand-task-title">
            <Brand compact />
            <h1>Roată pentru {child.nickname}</h1>
          </div>
          <BackButton onClick={onCancel}>Înapoi la profil</BackButton>
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
  onChangeWheel,
  onCancel,
}: {
  child: ChildProfile;
  prepared: PreparedPractice;
  busy: boolean;
  error: string | null;
  onStart: () => void;
  onChangeWheel: () => void;
  onCancel: () => void;
}) {
  return (
    <main className="practice-shell">
      <div className="practice-preview practice-frame">
        <header className="practice-header">
          <Brand compact />
          <BackButton onClick={onCancel}>Înapoi la profil</BackButton>
        </header>
        <h1>Roata lui {child.nickname} e gata</h1>
        <p>
          {prepared.words.length} cuvinte pe roata {prepared.target.label}. Fără
          grabă. După fiecare cuvânt, alegeți dacă rămâne pe roată.
        </p>
        <section className="practice-preview-goals">
          <h2>Exersăm {prepared.target.label}</h2>
          <p>
            La pornire, adăugăm {prepared.target.label} la sunetele urmărite
            pentru {child.nickname}. Fiecare cuvânt închis umple bara spre
            următoarea medalie pentru această țintă.
          </p>
          <p>
            Dacă același cuvânt apare din nou, contează din nou. Medaliile
            răsplătesc participarea.
          </p>
          <details className="practice-count-help">
            <summary>Despre sunete și poziții</summary>
            <p>
              Numărăm practica la roata {prepared.target.label}. Prezența
              sunetelor în fiecare cuvânt și pozițiile lor se numără separat,
              după verificarea listei.
            </p>
          </details>
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
            {busy ? "Se pregătește..." : "Începe exersarea"}
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
