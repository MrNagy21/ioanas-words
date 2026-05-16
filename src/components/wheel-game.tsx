"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { LetterContent, ContentWord } from "@/content/types";
import { getPlayableWords } from "@/game/word-selection";
import type { SupportedLocale } from "@/i18n/locales";

type WheelGameProps = Readonly<{
  locale: SupportedLocale;
  content: LetterContent;
}>;

type WheelSegment = Readonly<{
  word: ContentWord;
  path: string;
  color: string;
  centerAngle: number;
  imageSlot: Point;
  labelSlot: Point;
}>;

type Point = Readonly<{
  x: number;
  y: number;
}>;

const WHEEL_CENTER = 160;
const WHEEL_RADIUS = 152;
const IMAGE_SLOT_RADIUS = 116;
const LABEL_SLOT_RADIUS = 82;
const SPIN_MIN_DURATION_MS = 5600;
const SPIN_DURATION_VARIANCE_MS = 2200;
const SPIN_EASING = "cubic-bezier(0.08, 0.82, 0.17, 1)";
const REDUCED_MOTION_SPIN_MS = 120;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SVG_NUMBER_PRECISION = 4;

const segmentColors = [
  "#ffd166",
  "#5dd4c4",
  "#ff8d7b",
  "#8ca6ff",
  "#b5e48c",
  "#f7a8c4",
  "#9de2ff",
  "#f8c471",
  "#b7b8ff",
  "#82d6a3",
] as const;

export function WheelGame({ content, locale }: WheelGameProps) {
  const [removedWordIds, setRemovedWordIds] = useState<readonly string[]>([]);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDurationMs, setSpinDurationMs] = useState(SPIN_MIN_DURATION_MS);
  const [selectedWord, setSelectedWord] = useState<ContentWord | null>(null);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const spinTimer = useRef<number | null>(null);
  const wheelButtonRef = useRef<HTMLButtonElement | null>(null);

  const words = useMemo(
    () =>
      getPlayableWords({
        letter: content.letter,
        removedWordIds,
        words: content.words,
      }),
    [content.letter, content.words, removedWordIds],
  );
  const segments = useMemo(() => buildSegments(words), [words]);
  const hasWords = words.length > 0;
  const removedWordCount = removedWordIds.length;

  useEffect(() => {
    return () => {
      if (spinTimer.current !== null) {
        window.clearTimeout(spinTimer.current);
      }
    };
  }, []);

  function spinWheel() {
    if (!hasWords || isSpinning) {
      return;
    }

    if (spinTimer.current !== null) {
      window.clearTimeout(spinTimer.current);
    }

    const nextIndex = Math.floor(Math.random() * words.length);
    const segmentAngle = 360 / words.length;
    const selectedCenter = nextIndex * segmentAngle + segmentAngle / 2;
    const targetRotation = normalizeDegrees(360 - selectedCenter);
    const currentRotation = normalizeDegrees(rotation);
    const travelToTarget = normalizeDegrees(targetRotation - currentRotation);
    const fullTurns = prefersReducedMotion
      ? 0
      : 6 + Math.floor(Math.random() * 3);
    const nextRotation = rotation + travelToTarget + fullTurns * 360;
    const nextDuration = prefersReducedMotion
      ? REDUCED_MOTION_SPIN_MS
      : SPIN_MIN_DURATION_MS +
        Math.floor(Math.random() * SPIN_DURATION_VARIANCE_MS);

    setSelectedWord(null);
    setIsResultOpen(false);
    setIsSpinning(true);
    setSpinDurationMs(nextDuration);
    setRotation(nextRotation);

    spinTimer.current = window.setTimeout(() => {
      setSelectedWord(words[nextIndex]);
      setIsResultOpen(true);
      setIsSpinning(false);
      spinTimer.current = null;
    }, nextDuration);
  }

  function closeResult() {
    setIsResultOpen(false);
  }

  function removeSelectedWord() {
    if (!selectedWord) {
      return;
    }

    setRemovedWordIds((currentIds) =>
      currentIds.includes(selectedWord.id)
        ? currentIds
        : [...currentIds, selectedWord.id],
    );
    setSelectedWord(null);
    setIsResultOpen(false);
  }

  function resetCurrentLetter() {
    setRemovedWordIds([]);
    setSelectedWord(null);
    setIsResultOpen(false);
  }

  return (
    <section className="app-stage game-stage" aria-labelledby="game-title">
      <div className="game-topline">
        <Link className="quiet-link" href={`/${locale}`}>
          Schimbă litera
        </Link>
        <div className="selected-letter" aria-label="Litera aleasă">
          {content.letter.label}
        </div>
      </div>

      <div className="game-board">
        {hasWords ? (
          <div className="wheel-wrap">
            <div className="wheel-pointer" aria-hidden="true" />
            <button
              aria-label={
                isSpinning
                  ? "Roata se învârte"
                  : `Învârte roata pentru litera ${content.letter.label}`
              }
              className="wheel-button"
              disabled={!hasWords || isSpinning}
              onClick={spinWheel}
              ref={wheelButtonRef}
              type="button"
            >
              <span className="wheel-frame">
                <svg
                  aria-hidden="true"
                  className="word-wheel"
                  viewBox="0 0 320 320"
                >
                  <g
                    className="word-wheel__surface"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transitionDuration: isSpinning
                        ? `${spinDurationMs}ms`
                        : "0ms",
                      transitionTimingFunction: SPIN_EASING,
                    }}
                  >
                    {segments.map((segment) => (
                      <g className="word-wheel__segment" key={segment.word.id}>
                        <path d={segment.path} fill={segment.color} />
                      </g>
                    ))}
                    {segments.map((segment) => (
                      <g
                        className="word-wheel__image-layer"
                        key={segment.word.id}
                      >
                        <g
                          className="word-wheel__upright"
                          style={{
                            transform: getUprightTransform(
                              segment.imageSlot,
                              rotation,
                            ),
                            transitionDuration: isSpinning
                              ? `${spinDurationMs}ms`
                              : "0ms",
                            transitionTimingFunction: SPIN_EASING,
                          }}
                        >
                          <circle
                            className="word-wheel__image-slot"
                            cx="0"
                            cy="0"
                            r="25"
                          />
                          {hasReadyImage(segment.word) ? (
                            <>
                              <clipPath id={getImageClipId(segment.word)}>
                                <circle cx="0" cy="0" r="21" />
                              </clipPath>
                              <image
                                className="word-wheel__image"
                                clipPath={`url(#${getImageClipId(segment.word)})`}
                                height="42"
                                href={segment.word.image}
                                preserveAspectRatio="xMidYMid meet"
                                width="42"
                                x="-21"
                                y="-21"
                              />
                            </>
                          ) : (
                            <text
                              className="word-wheel__image-initial"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              x="0"
                              y="1"
                            >
                              {getWordInitial(segment.word)}
                            </text>
                          )}
                        </g>
                      </g>
                    ))}
                  </g>
                  <circle
                    className="word-wheel__hub"
                    cx="160"
                    cy="160"
                    r="43"
                  />
                  <text
                    className="word-wheel__hub-label"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    x="160"
                    y="162"
                  >
                    {content.letter.label}
                  </text>
                  <g
                    className="word-wheel__surface word-wheel__label-surface"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transitionDuration: isSpinning
                        ? `${spinDurationMs}ms`
                        : "0ms",
                      transitionTimingFunction: SPIN_EASING,
                    }}
                  >
                    {segments.map((segment) => (
                      <g
                        className="word-wheel__upright"
                        key={`label-${segment.word.id}`}
                        style={{
                          transform: getUprightTransform(
                            segment.labelSlot,
                            rotation,
                          ),
                          transitionDuration: isSpinning
                            ? `${spinDurationMs}ms`
                            : "0ms",
                          transitionTimingFunction: SPIN_EASING,
                        }}
                      >
                        <text
                          className="word-wheel__label"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          x="0"
                          y="0"
                        >
                          {segment.word.display}
                        </text>
                      </g>
                    ))}
                  </g>
                </svg>
              </span>
            </button>
          </div>
        ) : (
          <EmptyWheelState
            hasRemovedWords={removedWordCount > 0}
            locale={locale}
            onReset={resetCurrentLetter}
          />
        )}

        <div className="game-panel">
          <p className="stage-label">Litera {content.letter.label}</p>
          <h2 id="game-title">
            {hasWords ? "Învârte roata" : "Roata este goală"}
          </h2>
          <div className="spin-result" aria-live="polite">
            {selectedWord ? (
              <>
                <span className="spin-result__label">
                  {isResultOpen ? "A ieșit" : "Ultimul cuvânt"}
                </span>
                <strong>{selectedWord.display}</strong>
              </>
            ) : (
              <span>
                {isSpinning
                  ? "Roata se învârte..."
                  : "Apasă roata ca să alegem un cuvânt."}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="game-actions" aria-label="Comenzi joc">
        <button
          className="secondary-button"
          disabled={removedWordCount === 0 || isSpinning}
          onClick={resetCurrentLetter}
          type="button"
        >
          Resetează
        </button>
        <button
          className="spin-button"
          disabled={!hasWords || isSpinning}
          onClick={spinWheel}
          type="button"
        >
          {isSpinning ? "Se învârte" : "Învârte"}
        </button>
      </div>

      {selectedWord && isResultOpen ? (
        <ResultModal
          locale={locale}
          onClose={closeResult}
          onReturnFocus={() => wheelButtonRef.current?.focus()}
          onRemove={removeSelectedWord}
          word={selectedWord}
        />
      ) : null}
    </section>
  );
}

function ResultModal({
  locale,
  onClose,
  onReturnFocus,
  onRemove,
  word,
}: Readonly<{
  locale: SupportedLocale;
  onClose: () => void;
  onReturnFocus: () => void;
  onRemove: () => void;
  word: ContentWord;
}>) {
  const modalRef = useRef<HTMLElement | null>(null);
  const primaryActionRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement;

    primaryActionRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      if (previouslyFocusedElement instanceof HTMLElement) {
        previouslyFocusedElement.focus();
      } else {
        onReturnFocus();
      }
    };
  }, [onClose, onReturnFocus]);

  function trapFocus(event: ReactKeyboardEvent<HTMLElement>) {
    if (event.key !== "Tab" || !modalRef.current) {
      return;
    }

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (focusableElements.length === 0) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <div className="result-backdrop" role="presentation">
      <section
        aria-labelledby="result-title"
        aria-modal="true"
        className="result-modal"
        onKeyDown={trapFocus}
        ref={modalRef}
        role="dialog"
      >
        <div className="result-image-slot">
          {hasReadyImage(word) ? (
            <Image
              alt={word.alt}
              height={256}
              src={word.image}
              unoptimized
              width={256}
            />
          ) : (
            <span aria-label={word.alt}>{getWordInitial(word)}</span>
          )}
        </div>
        <p className="stage-label">Cuvântul ales</p>
        <h2 id="result-title">{word.display}</h2>
        <div className="result-modal__actions" aria-label="Comenzi rezultat">
          <button
            className="spin-button"
            onClick={onClose}
            ref={primaryActionRef}
            type="button"
          >
            Păstrează
          </button>
          <button className="secondary-button" onClick={onRemove} type="button">
            Scoate
          </button>
          <Link className="secondary-button" href={`/${locale}`}>
            Altă literă
          </Link>
        </div>
      </section>
    </div>
  );
}

function EmptyWheelState({
  hasRemovedWords,
  locale,
  onReset,
}: Readonly<{
  hasRemovedWords: boolean;
  locale: SupportedLocale;
  onReset: () => void;
}>) {
  return (
    <div className="empty-wheel-state">
      <p>
        {hasRemovedWords
          ? "Ai scos toate cuvintele pentru această literă."
          : "Nu sunt cuvinte pregătite pentru această literă."}
      </p>
      <button
        className="spin-button"
        disabled={!hasRemovedWords}
        onClick={onReset}
        type="button"
      >
        Resetează litera
      </button>
      <Link className="secondary-button" href={`/${locale}`}>
        Alege altă literă
      </Link>
    </div>
  );
}

function hasReadyImage(word: ContentWord) {
  return word.imageStatus === "ready";
}

function getImageClipId(word: ContentWord) {
  return `word-image-${word.id}`;
}

function buildSegments(words: readonly ContentWord[]): WheelSegment[] {
  if (words.length === 0) {
    return [];
  }

  const segmentAngle = 360 / words.length;

  return words.map((word, index) => {
    const startAngle = index * segmentAngle;
    const endAngle = startAngle + segmentAngle;
    const centerAngle = startAngle + segmentAngle / 2;

    return {
      word,
      path: describeSegment(
        WHEEL_CENTER,
        WHEEL_CENTER,
        WHEEL_RADIUS,
        startAngle,
        endAngle,
      ),
      color: segmentColors[index % segmentColors.length],
      centerAngle,
      imageSlot: polarToCartesian(
        WHEEL_CENTER,
        WHEEL_CENTER,
        IMAGE_SLOT_RADIUS,
        centerAngle,
      ),
      labelSlot: polarToCartesian(
        WHEEL_CENTER,
        WHEEL_CENTER,
        LABEL_SLOT_RADIUS,
        centerAngle,
      ),
    };
  });
}

function describeSegment(
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) {
  if (endAngle - startAngle >= 360) {
    const top = polarToCartesian(centerX, centerY, radius, 0);
    const bottom = polarToCartesian(centerX, centerY, radius, 180);

    return [
      `M ${formatSvgNumber(top.x)} ${formatSvgNumber(top.y)}`,
      `A ${radius} ${radius} 0 1 1 ${formatSvgNumber(bottom.x)} ${formatSvgNumber(bottom.y)}`,
      `A ${radius} ${radius} 0 1 1 ${formatSvgNumber(top.x)} ${formatSvgNumber(top.y)}`,
      "Z",
    ].join(" ");
  }

  const start = polarToCartesian(centerX, centerY, radius, startAngle);
  const end = polarToCartesian(centerX, centerY, radius, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    `M ${centerX} ${centerY}`,
    `L ${formatSvgNumber(start.x)} ${formatSvgNumber(start.y)}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${formatSvgNumber(end.x)} ${formatSvgNumber(end.y)}`,
    "Z",
  ].join(" ");
}

function getUprightTransform(point: Point, rotation: number) {
  return `translate(${formatSvgNumber(point.x)}px, ${formatSvgNumber(point.y)}px) rotate(${formatSvgNumber(-rotation)}deg)`;
}

function formatSvgNumber(value: number) {
  const rounded = Number(value.toFixed(SVG_NUMBER_PRECISION));

  return Object.is(rounded, -0) ? "0" : String(rounded);
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
): Point {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function normalizeDegrees(degrees: number) {
  return ((degrees % 360) + 360) % 360;
}

function getWordInitial(word: ContentWord) {
  return word.display.slice(0, 1).toLocaleUpperCase("ro-RO");
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);

  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    mediaQuery.removeEventListener("change", onStoreChange);
  };
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}
