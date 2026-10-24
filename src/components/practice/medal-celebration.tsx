"use client";

import { useEffect, useRef } from "react";
import { Medal } from "@/components/practice/medal";

type MedalVariant = "star" | "flower" | "sun";

export function MedalCelebration({
  heading,
  awards,
  message,
  variant = "star",
  progress = false,
  onVariantChange,
  onContinue,
  continueLabel,
  busy = false,
  error,
}: {
  heading: string;
  awards: { id: string; title: string }[];
  message: string;
  variant?: MedalVariant;
  progress?: boolean;
  onVariantChange?: (variant: MedalVariant) => void;
  onContinue: () => void;
  continueLabel: string;
  busy?: boolean;
  error?: string | null;
}) {
  const title = useRef<HTMLHeadingElement>(null);
  useEffect(() => title.current?.focus({ preventScroll: true }), []);

  return (
    <main className="practice-shell practice-celebration-shell">
      <div className="practice-celebration" aria-busy={busy}>
        <div className="practice-celebration-content">
          <div className="practice-celebration-art">
            <Medal variant={variant} size={156} progress={progress} />
            <svg
              className="practice-celebration-sparkles"
              viewBox="0 0 240 210"
              aria-hidden="true"
            >
              <path d="M30 42v16m-8-8h16M205 104v20m-10-10h20M184 24v12m-6-6h12" />
              <circle cx="39" cy="146" r="4" />
              <circle cx="210" cy="58" r="3" />
            </svg>
          </div>
          <h1 ref={title} tabIndex={-1}>
            {heading}
          </h1>
          <ul className="practice-award-list">
            {awards.map((award) => (
              <li key={award.id}>{award.title}</li>
            ))}
          </ul>
          <p className="practice-celebration-message">{message}</p>
        </div>
        <div className="practice-celebration-actions">
          {onVariantChange && (
            <fieldset className="practice-medal-picker" disabled={busy}>
              <legend>Alege desenul medaliei</legend>
              <div className="practice-medal-choices">
                {(
                  [
                    ["star", "Stea"],
                    ["flower", "Floare"],
                    ["sun", "Soare"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    className="practice-medal-choice"
                    aria-pressed={variant === id}
                    key={id}
                    type="button"
                    onClick={() => onVariantChange(id)}
                  >
                    <Medal variant={id} size={32} progress={progress} />
                    <span>{label}</span>
                    <svg
                      className="practice-medal-choice-check"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="m5 10 3 3 7-7" />
                    </svg>
                  </button>
                ))}
              </div>
            </fieldset>
          )}
          {error && (
            <p role="alert" className="practice-result-error">
              {error}
            </p>
          )}
          <button
            type="button"
            className="spin-button practice-medal-save"
            disabled={busy}
            onClick={onContinue}
          >
            {busy ? "Se salvează..." : continueLabel}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
