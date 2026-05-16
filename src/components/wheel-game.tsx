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
import type { GameplayContent, ContentWord } from "@/content/types";
import {
  DEFAULT_WORD_INCLUSION_MODE,
  DEFAULT_WHEEL_WORD_COUNT,
  getBoundedWheelWordCount,
  getOffWheelWords,
  getPlayableWords,
  getRandomWheelWords,
  getRandomWord,
  getWheelEmptyStateKind,
  MAX_WHEEL_WORD_COUNT,
} from "@/game/word-selection";
import type {
  WheelEmptyStateKind,
  WordInclusionMode,
} from "@/game/word-selection";
import type { SupportedLocale } from "@/i18n/locales";

type WheelGameProps = Readonly<{
  locale: SupportedLocale;
  content: GameplayContent;
}>;

type WheelSegment = Readonly<{
  word: ContentWord;
  path: string;
  color: string;
  centerAngle: number;
  imageSlot: Point;
  imageClipRadius: number;
  imageSize: number;
  imageSlotCircleRadius: number;
  initialFontSize: number;
  labelFontSize: number;
  labelSlot: Point;
  labelStrokeWidth: number;
}>;

type Point = Readonly<{
  x: number;
  y: number;
}>;

const WHEEL_CENTER = 160;
const WHEEL_RADIUS = 152;
const SPIN_MIN_DURATION_MS = 5600;
const SPIN_DURATION_VARIANCE_MS = 2200;
const SPIN_EASING = "cubic-bezier(0.08, 0.82, 0.17, 1)";
const REDUCED_MOTION_SPIN_MS = 120;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SVG_NUMBER_PRECISION = 4;
const EMPTY_REMOVED_WORD_IDS: readonly string[] = [];

const modeOptions = [
  {
    mode: "starts-with",
    label: "Încep cu",
    statusLabel: "Încep cu litera",
  },
  {
    mode: "contains-only",
    label: "Conțin",
    statusLabel: "Conțin litera",
  },
  {
    mode: "starts-with-or-contains",
    label: "Amestecat",
    statusLabel: "Toate potrivirile",
  },
] as const satisfies readonly {
  mode: WordInclusionMode;
  label: string;
  statusLabel: string;
}[];

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
  const [selectedMode, setSelectedMode] = useState<WordInclusionMode>(
    DEFAULT_WORD_INCLUSION_MODE,
  );
  const [targetWordCounts, setTargetWordCounts] = useState<
    Record<WordInclusionMode, number>
  >(() => createDefaultTargetWordCounts());
  const [visibleWordIdsBySubsetKey, setVisibleWordIdsBySubsetKey] = useState<
    Readonly<Record<string, readonly string[]>>
  >({});
  const [removedWordIds, setRemovedWordIds] = useState<readonly string[]>([]);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDurationMs, setSpinDurationMs] = useState(SPIN_MIN_DURATION_MS);
  const [selectedWord, setSelectedWord] = useState<ContentWord | null>(null);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [isSetupOpen, setIsSetupOpen] = useState(true);
  const [draftMode, setDraftMode] = useState<WordInclusionMode>(
    DEFAULT_WORD_INCLUSION_MODE,
  );
  const [draftWordCount, setDraftWordCount] = useState(
    DEFAULT_WHEEL_WORD_COUNT,
  );
  const prefersReducedMotion = usePrefersReducedMotion();
  const spinTimer = useRef<number | null>(null);
  const wheelButtonRef = useRef<HTMLButtonElement | null>(null);
  const setupButtonRef = useRef<HTMLButtonElement | null>(null);

  const modeWordCounts = useMemo(
    () =>
      Object.fromEntries(
        modeOptions.map((option) => [
          option.mode,
          getPlayableWords({
            letter: content.letter,
            locale,
            mode: option.mode,
            removedWordIds: EMPTY_REMOVED_WORD_IDS,
            words: getModePool(content, option.mode),
          }).length,
        ]),
      ) as Record<WordInclusionMode, number>,
    [content, locale],
  );
  const selectedModeOption = getModeOption(selectedMode);
  const selectedModeTotalWordCount = modeWordCounts[selectedMode];
  const activeWords = useMemo(
    () =>
      getPlayableWords({
        letter: content.letter,
        locale,
        mode: selectedMode,
        removedWordIds,
        words: getModePool(content, selectedMode),
      }),
    [
      content,
      locale,
      removedWordIds,
      selectedMode,
    ],
  );
  const targetWordCount = targetWordCounts[selectedMode];
  const visibleWheelWordCount = getBoundedWheelWordCount(
    targetWordCount,
    activeWords.length,
  );
  const subsetKey = getWheelSubsetKey(selectedMode, visibleWheelWordCount);
  const fallbackVisibleWordIds = useMemo(
    () =>
      activeWords
        .slice(0, visibleWheelWordCount)
        .map((word) => word.id),
    [activeWords, visibleWheelWordCount],
  );
  const visibleWordIds =
    visibleWordIdsBySubsetKey[subsetKey] ?? fallbackVisibleWordIds;
  const visibleWordsFromIds = useMemo(
    () => getWordsByVisibleIds(activeWords, visibleWordIds),
    [activeWords, visibleWordIds],
  );
  const fallbackWords = useMemo(
    () => activeWords.slice(0, visibleWheelWordCount),
    [activeWords, visibleWheelWordCount],
  );
  const words =
    visibleWordsFromIds.length > 0 || activeWords.length === 0
      ? visibleWordsFromIds
      : fallbackWords;
  const replacementWords = useMemo(
    () =>
      getOffWheelWords({
        visibleWordIds: words.map((word) => word.id),
        words: activeWords,
      }),
    [activeWords, words],
  );
  const segments = useMemo(() => buildSegments(words), [words]);
  const hasWords = words.length > 0;
  const removedWordCount = removedWordIds.length;
  const draftAvailableWordCount = getAvailableWordCountForMode({
    content,
    locale,
    mode: draftMode,
    removedWordIds,
  });
  const boundedDraftWordCount = getBoundedWheelWordCount(
    draftWordCount,
    draftAvailableWordCount,
  );
  const emptyStateKind = getWheelEmptyStateKind({
    availableWordCount: selectedModeTotalWordCount,
    visibleWordCount: activeWords.length,
  });
  const isInteractionBlocked = isSpinning || isResultOpen || isSetupOpen;

  useEffect(() => {
    return () => {
      if (spinTimer.current !== null) {
        window.clearTimeout(spinTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    const randomizeTimer = window.setTimeout(() => {
      setVisibleWordIdsBySubsetKey((currentSubsets) => {
        const currentWordIds = currentSubsets[subsetKey];
        const nextWordIds = currentWordIds
          ? getStillAvailableWordIds({
              activeWords,
              currentWordIds,
              visibleWheelWordCount,
            })
          : getRandomWheelWords({
              targetWordCount: visibleWheelWordCount,
              words: activeWords,
            }).map((word) => word.id);

        if (
          currentWordIds &&
          areWordIdListsEqual(currentWordIds, nextWordIds)
        ) {
          return currentSubsets;
        }

        return {
          ...currentSubsets,
          [subsetKey]: nextWordIds,
        };
      });
    }, 0);

    return () => {
      window.clearTimeout(randomizeTimer);
    };
  }, [activeWords, subsetKey, visibleWheelWordCount]);

  function spinWheel() {
    if (!hasWords || isInteractionBlocked) {
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

  function openSetup() {
    if (isSpinning || isResultOpen) {
      return;
    }

    setDraftMode(selectedMode);
    setDraftWordCount(targetWordCounts[selectedMode]);
    setIsSetupOpen(true);
    setSelectedWord(null);
    setIsResultOpen(false);
  }

  function closeSetup() {
    setIsSetupOpen(false);
  }

  function updateDraftMode(nextMode: WordInclusionMode) {
    const nextAvailableWordCount = getAvailableWordCountForMode({
      content,
      locale,
      mode: nextMode,
      removedWordIds,
    });

    setDraftMode(nextMode);
    setDraftWordCount((currentCount) =>
      getBoundedWheelWordCount(currentCount, nextAvailableWordCount) ||
      DEFAULT_WHEEL_WORD_COUNT,
    );
  }

  function updateDraftWordCount(nextWordCount: number) {
    if (draftAvailableWordCount === 0) {
      return;
    }

    setDraftWordCount(
      getBoundedWheelWordCount(nextWordCount, draftAvailableWordCount),
    );
  }

  function applySetup({ resetRemovedWords }: { resetRemovedWords: boolean }) {
    const nextRemovedWordIds = resetRemovedWords ? [] : removedWordIds;
    const nextAvailableWordCount = getAvailableWordCountForMode({
      content,
      locale,
      mode: draftMode,
      removedWordIds: nextRemovedWordIds,
    });
    const nextWordCount =
      getBoundedWheelWordCount(draftWordCount, nextAvailableWordCount) ||
      DEFAULT_WHEEL_WORD_COUNT;

    setSelectedMode(draftMode);
    setTargetWordCounts((currentCounts) => ({
      ...currentCounts,
      [draftMode]: nextWordCount,
    }));
    setRemovedWordIds(nextRemovedWordIds);
    setVisibleWordIdsBySubsetKey({});
    setSelectedWord(null);
    setIsSetupOpen(false);
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

  function replaceSelectedWord() {
    if (!selectedWord) {
      return;
    }

    const replacementWord = getRandomWord(replacementWords);

    if (!replacementWord) {
      return;
    }

    const currentVisibleWordIds = words.map((word) => word.id);

    setVisibleWordIdsBySubsetKey((currentSubsets) => ({
      ...currentSubsets,
      [subsetKey]: currentVisibleWordIds.map((wordId) =>
        wordId === selectedWord.id ? replacementWord.id : wordId,
      ),
    }));
    setSelectedWord(null);
    setIsResultOpen(false);
  }

  function resetCurrentLetter() {
    setRemovedWordIds([]);
    setVisibleWordIdsBySubsetKey({});
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
              disabled={!hasWords || isInteractionBlocked}
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
                            r={segment.imageSlotCircleRadius}
                          />
                          {hasReadyImage(segment.word) ? (
                            <>
                              <clipPath id={getImageClipId(segment.word)}>
                                <circle
                                  cx="0"
                                  cy="0"
                                  r={segment.imageClipRadius}
                                />
                              </clipPath>
                              <image
                                className="word-wheel__image"
                                clipPath={`url(#${getImageClipId(segment.word)})`}
                                height={segment.imageSize}
                                href={segment.word.image}
                                preserveAspectRatio="xMidYMid meet"
                                width={segment.imageSize}
                                x={-segment.imageSize / 2}
                                y={-segment.imageSize / 2}
                              />
                            </>
                          ) : (
                            <text
                              className="word-wheel__image-initial"
                              dominantBaseline="middle"
                              textAnchor="middle"
                              style={{
                                fontSize: `${segment.initialFontSize}px`,
                              }}
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
                          style={{
                            fontSize: `${segment.labelFontSize}px`,
                            strokeWidth: `${segment.labelStrokeWidth}px`,
                          }}
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
            emptyStateKind={emptyStateKind ?? "no-content"}
            hasRemovedWords={removedWordCount > 0}
            locale={locale}
            onOpenSetup={openSetup}
            onReset={resetCurrentLetter}
          />
        )}

        <div className="game-panel">
          <p className="stage-label">Litera {content.letter.label}</p>
          <h2 id="game-title">
            {hasWords ? "Învârte roata" : "Roata este goală"}
          </h2>
          <p className="mode-status">
            <span>
              {selectedModeOption.statusLabel} {content.letter.label}
            </span>
            <strong>{words.length}</strong>
            <span>
              {getWordCountLabel(words.length)} pe roată
              {activeWords.length !== words.length
                ? ` din ${activeWords.length}`
                : ""}
              {selectedModeTotalWordCount !== activeWords.length
                ? ` disponibile`
                : ""}
            </span>
          </p>
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
          disabled={isSpinning || isResultOpen}
          onClick={openSetup}
          ref={setupButtonRef}
          type="button"
        >
          Setează
        </button>
        <button
          className="secondary-button"
          disabled={removedWordCount === 0 || isInteractionBlocked}
          onClick={resetCurrentLetter}
          type="button"
        >
          Resetează
        </button>
        <button
          className="spin-button"
          disabled={!hasWords || isInteractionBlocked}
          onClick={spinWheel}
          type="button"
        >
          {isSpinning ? "Se învârte" : "Învârte"}
        </button>
      </div>

      {selectedWord && isResultOpen ? (
        <ResultModal
          onClose={closeResult}
          onReturnFocus={() => wheelButtonRef.current?.focus()}
          onRemove={removeSelectedWord}
          onReplace={replaceSelectedWord}
          replacementWordCount={replacementWords.length}
          word={selectedWord}
        />
      ) : null}

      {isSetupOpen ? (
        <SetupModal
          availableWordCount={draftAvailableWordCount}
          boundedWordCount={boundedDraftWordCount}
          draftMode={draftMode}
          hasRemovedWords={removedWordCount > 0}
          letterLabel={content.letter.label}
          modeWordCounts={modeWordCounts}
          onApply={() => applySetup({ resetRemovedWords: false })}
          onClose={closeSetup}
          onDraftModeChange={updateDraftMode}
          onDraftWordCountChange={updateDraftWordCount}
          onResetAndApply={() => applySetup({ resetRemovedWords: true })}
          onReturnFocus={() =>
            setupButtonRef.current?.focus() ?? wheelButtonRef.current?.focus()
          }
        />
      ) : null}
    </section>
  );
}

function ResultModal({
  onClose,
  onReturnFocus,
  onRemove,
  onReplace,
  replacementWordCount,
  word,
}: Readonly<{
  onClose: () => void;
  onReturnFocus: () => void;
  onRemove: () => void;
  onReplace: () => void;
  replacementWordCount: number;
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
          {replacementWordCount > 0 ? (
            <button
              aria-label={`Înlocuiește cu un cuvânt aleatoriu. ${replacementWordCount} ${getWordCountLabel(replacementWordCount)} disponibile`}
              className="secondary-button"
              onClick={onReplace}
              type="button"
            >
              Înlocuiește
            </button>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function SetupModal({
  availableWordCount,
  boundedWordCount,
  draftMode,
  hasRemovedWords,
  letterLabel,
  modeWordCounts,
  onApply,
  onClose,
  onDraftModeChange,
  onDraftWordCountChange,
  onResetAndApply,
  onReturnFocus,
}: Readonly<{
  availableWordCount: number;
  boundedWordCount: number;
  draftMode: WordInclusionMode;
  hasRemovedWords: boolean;
  letterLabel: string;
  modeWordCounts: Record<WordInclusionMode, number>;
  onApply: () => void;
  onClose: () => void;
  onDraftModeChange: (mode: WordInclusionMode) => void;
  onDraftWordCountChange: (wordCount: number) => void;
  onResetAndApply: () => void;
  onReturnFocus: () => void;
}>) {
  const modalRef = useRef<HTMLElement | null>(null);
  const primaryActionRef = useRef<HTMLButtonElement | null>(null);
  const activeModeOption = getModeOption(draftMode);
  const activeModeTotalWordCount = modeWordCounts[draftMode];
  const hasAvailableWords = availableWordCount > 0;
  const maxWheelWordCount = Math.min(availableWordCount, MAX_WHEEL_WORD_COUNT);

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
        aria-labelledby="setup-title"
        aria-modal="true"
        className="setup-modal"
        onKeyDown={trapFocus}
        ref={modalRef}
        role="dialog"
      >
        <div className="setup-modal__header">
          <p className="stage-label">Litera {letterLabel}</p>
          <h2 id="setup-title">Setează roata</h2>
        </div>

        <div
          aria-label="Alege modul de cuvinte"
          className="mode-selector"
          role="group"
        >
          {modeOptions.map((option) => {
            const isSelected = option.mode === draftMode;

            return (
              <button
                aria-label={`${option.statusLabel} ${letterLabel}, ${modeWordCounts[option.mode]} ${getWordCountLabel(modeWordCounts[option.mode])}`}
                aria-pressed={isSelected}
                className="mode-selector__button"
                data-active={isSelected ? "true" : undefined}
                key={option.mode}
                onClick={() => onDraftModeChange(option.mode)}
                type="button"
              >
                <span>{option.label}</span>
                <strong>{modeWordCounts[option.mode]}</strong>
              </button>
            );
          })}
        </div>

        <p className="mode-status">
          <span>
            {activeModeOption.statusLabel} {letterLabel}
          </span>
          <strong>{boundedWordCount}</strong>
          <span>
            {getWordCountLabel(boundedWordCount)} pe roată
            {activeModeTotalWordCount !== availableWordCount
              ? ` din ${availableWordCount} disponibile`
              : ""}
          </span>
        </p>

        <div
          aria-label="Alege câte cuvinte apar pe roată"
          className="wheel-count-control"
          role="group"
        >
          <span className="wheel-count-control__label">Cuvinte</span>
          <button
            aria-label="Mai puține cuvinte pe roată"
            disabled={!hasAvailableWords || boundedWordCount <= 1}
            onClick={() => onDraftWordCountChange(boundedWordCount - 1)}
            type="button"
          >
            -
          </button>
          <strong>{boundedWordCount}</strong>
          <button
            aria-label="Mai multe cuvinte pe roată"
            disabled={!hasAvailableWords || boundedWordCount >= maxWheelWordCount}
            onClick={() => onDraftWordCountChange(boundedWordCount + 1)}
            type="button"
          >
            +
          </button>
          <span className="wheel-count-control__max">
            max {maxWheelWordCount}
          </span>
        </div>

        <div className="setup-modal__actions" aria-label="Comenzi setare">
          <button className="secondary-button" onClick={onClose} type="button">
            Anulează
          </button>
          <button
            className="secondary-button"
            disabled={!hasRemovedWords}
            onClick={onResetAndApply}
            type="button"
          >
            Resetează roata
          </button>
          <button
            className="spin-button"
            disabled={!hasAvailableWords}
            onClick={onApply}
            ref={primaryActionRef}
            type="button"
          >
            Pornește roata
          </button>
        </div>
      </section>
    </div>
  );
}

function EmptyWheelState({
  emptyStateKind,
  hasRemovedWords,
  locale,
  onOpenSetup,
  onReset,
}: Readonly<{
  emptyStateKind: WheelEmptyStateKind;
  hasRemovedWords: boolean;
  locale: SupportedLocale;
  onOpenSetup: () => void;
  onReset: () => void;
}>) {
  return (
    <div className="empty-wheel-state">
      <p>
        {emptyStateKind === "all-removed"
          ? "Ai scos toate cuvintele din acest mod."
          : "Nu sunt cuvinte aici."}
      </p>
      <button
        className="spin-button"
        onClick={onOpenSetup}
        type="button"
      >
        Setează roata
      </button>
      <button
        className="secondary-button"
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

function getModeOption(mode: WordInclusionMode) {
  return modeOptions.find((option) => option.mode === mode) ?? modeOptions[0];
}

function getModePool(content: GameplayContent, mode: WordInclusionMode) {
  if (mode === "contains-only") {
    return content.wordPools.containsOnlyWords;
  }

  if (mode === "starts-with-or-contains") {
    return content.wordPools.mixedWords;
  }

  return content.wordPools.startsWithWords;
}

function getAvailableWordCountForMode({
  content,
  locale,
  mode,
  removedWordIds,
}: Readonly<{
  content: GameplayContent;
  locale: SupportedLocale;
  mode: WordInclusionMode;
  removedWordIds: readonly string[];
}>) {
  return getPlayableWords({
    letter: content.letter,
    locale,
    mode,
    removedWordIds,
    words: getModePool(content, mode),
  }).length;
}

function getWordCountLabel(count: number) {
  return count === 1 ? "cuvânt" : "cuvinte";
}

function createDefaultTargetWordCounts(): Record<WordInclusionMode, number> {
  return {
    "starts-with": DEFAULT_WHEEL_WORD_COUNT,
    "starts-with-or-contains": DEFAULT_WHEEL_WORD_COUNT,
    "contains-only": DEFAULT_WHEEL_WORD_COUNT,
  };
}

function getWheelSubsetKey(mode: WordInclusionMode, targetWordCount: number) {
  return `${mode}:${targetWordCount}`;
}

function getWordsByVisibleIds(
  activeWords: readonly ContentWord[],
  visibleWordIds: readonly string[],
) {
  const activeWordsById = new Map(activeWords.map((word) => [word.id, word]));

  return visibleWordIds.flatMap((wordId) => {
    const word = activeWordsById.get(wordId);

    return word ? [word] : [];
  });
}

function areWordIdListsEqual(
  firstWordIds: readonly string[],
  secondWordIds: readonly string[],
) {
  return (
    firstWordIds.length === secondWordIds.length &&
    firstWordIds.every((wordId, index) => wordId === secondWordIds[index])
  );
}

function getStillAvailableWordIds({
  activeWords,
  currentWordIds,
  visibleWheelWordCount,
}: Readonly<{
  activeWords: readonly ContentWord[];
  currentWordIds: readonly string[];
  visibleWheelWordCount: number;
}>) {
  const activeWordIds = new Set(activeWords.map((word) => word.id));

  return currentWordIds
    .filter((wordId) => activeWordIds.has(wordId))
    .slice(0, visibleWheelWordCount);
}

function getImageClipId(word: ContentWord) {
  return `word-image-${word.id}`;
}

function buildSegments(words: readonly ContentWord[]): WheelSegment[] {
  if (words.length === 0) {
    return [];
  }

  const segmentAngle = 360 / words.length;
  const layout = getWheelSegmentLayout(words.length);

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
        layout.imageSlotRadius,
        centerAngle,
      ),
      imageClipRadius: layout.imageClipRadius,
      imageSize: layout.imageSize,
      imageSlotCircleRadius: layout.imageSlotCircleRadius,
      initialFontSize: layout.initialFontSize,
      labelFontSize: layout.labelFontSize,
      labelSlot: polarToCartesian(
        WHEEL_CENTER,
        WHEEL_CENTER,
        layout.labelSlotRadius,
        centerAngle,
      ),
      labelStrokeWidth: layout.labelStrokeWidth,
    };
  });
}

function getWheelSegmentLayout(wordCount: number) {
  if (wordCount >= 13) {
    return {
      imageSlotRadius: 126,
      imageSlotCircleRadius: 20,
      imageClipRadius: 16,
      imageSize: 32,
      initialFontSize: 12,
      labelSlotRadius: 95,
      labelFontSize: 7.2,
      labelStrokeWidth: 3.3,
    };
  }

  if (wordCount >= 11) {
    return {
      imageSlotRadius: 122,
      imageSlotCircleRadius: 22,
      imageClipRadius: 18,
      imageSize: 36,
      initialFontSize: 13,
      labelSlotRadius: 89,
      labelFontSize: 8,
      labelStrokeWidth: 3.7,
    };
  }

  return {
    imageSlotRadius: 116,
    imageSlotCircleRadius: 25,
    imageClipRadius: 21,
    imageSize: 42,
    initialFontSize: 14.7,
    labelSlotRadius: 82,
    labelFontSize: 9,
    labelStrokeWidth: 4.2,
  };
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
