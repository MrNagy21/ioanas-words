"use client";
import { AppFooter } from "@/components/app-footer";
import Link from "next/link";
import { Brand } from "@/components/brand";
import { useRef, useState } from "react";
import { WheelGame } from "@/components/wheel-game";
import { MedalCelebration } from "@/components/practice/medal-celebration";
import { buildPracticeContent } from "@/practice/preparation";
import type { ContentWord, GameplayTarget } from "@/content/types";
import {
  nextParticipationMilestone,
  previousParticipationMilestone,
} from "@/practice/rewards";

export function PracticeDemo({
  words,
  target,
}: {
  words: ContentWord[];
  target: GameplayTarget;
}) {
  const [sound, setSound] = useState(false);
  const soundControl = { enabled: sound, onChange: setSound };
  const [remaining, setRemaining] = useState(words);
  const [count, setCount] = useState(0);
  const [award, setAward] = useState(false);
  const [finished, setFinished] = useState(false);
  const selected = useRef<ContentWord | null>(null);
  if (award)
    return (
      <MedalCelebration
        soundControl={soundControl}
        heading="Bravo! Prima medalie!"
        awards={[{ id: "demo", title: "Primul cuvânt exersat" }]}
        message="Așa sărbătorim exersarea! Medalia din demo nu se salvează într-un profil."
        onContinue={() => setAward(false)}
        continueLabel="Continuă demonstrația"
      />
    );
  if (finished || !remaining.length)
    return (
      <main className="practice-shell">
        <div className="practice-preview practice-frame">
          <Brand compact />
          <h1>Așa începe exersarea</h1>
          <p>
            În demonstrație ați închis {count} cuvinte. Datele dispar când
            ieșiți.
          </p>
          <div className="practice-form-actions">
            <Link className="spin-button" href="/ro/practice">
              Creează un profil
            </Link>
            <Link className="secondary-button" href="/ro/about?show=1">
              Înapoi la prezentare
            </Link>
          </div>
          <AppFooter />
        </div>
      </main>
    );
  return (
    <main className="app-shell">
      <div className="app-frame">
        <header className="app-header">
          <h1 aria-label="Vorbini · Demonstrație">
            <Brand compact />
          </h1>
          <Link className="quiet-link" href="/ro/about?show=1">
            Ieși din demo
          </Link>
        </header>
        <WheelGame
          soundControl={soundControl}
          temporary
          content={buildPracticeContent(target, words)}
          locale="ro"
          practice={{
            words: remaining,
            childLabel: "Demo · fără salvare",
            progress: {
              current: count,
              next: nextParticipationMilestone(count),
              previous: previousParticipationMilestone(count),
            },
            onShown: async (word) => {
              selected.current = word;
            },
            onClose: async (reason) => {
              if (!selected.current) return;
              const word = selected.current;
              selected.current = null;
              setCount((n) => n + 1);
              if (reason === "remove")
                setRemaining((current) =>
                  current.filter((w) => w.id !== word.id),
                );
              if (count === 0) setAward(true);
            },
            onEnd: () => setFinished(true),
          }}
        />
      </div>
    </main>
  );
}
