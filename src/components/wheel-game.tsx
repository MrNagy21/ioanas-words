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
import type {
  ContentPracticeTarget,
  ContentWord,
  GameplayContent,
  GameplayTarget,
} from "@/content/types";
import {
  DEFAULT_WORD_INCLUSION_MODE,
  DEFAULT_WHEEL_WORD_COUNT,
  getBoundedWheelWordCount,
  getOffWheelWords,
  getPlayableWords,
  getRandomWord,
  reconcileVisibleWheelWordIds,
  getWheelEmptyStateKind,
  MAX_WHEEL_WORD_COUNT,
} from "@/game/word-selection";
import {
  getExcludedTargetsSummary,
  getModeWordCounts as getSetupModeWordCounts,
  getModeWords as getSetupModeWords,
  getTargetRouteSegment,
  resolveWheelSetupConfig as resolveStoredWheelSetupConfig,
} from "@/game/wheel-setup";
import type {
  WheelEmptyStateKind,
  WordInclusionMode,
} from "@/game/word-selection";
import {
  createSavedWheelSetup,
  deleteSavedWheelSetup,
  getActiveWheelSetup,
  getSavedWheelSetupsForTarget,
  saveActiveWheelSetup,
  type SavedWheelSetup,
  type WheelSetupConfig,
  type WheelWordSelectionMode,
} from "@/game/wheel-setup-storage";
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

type SetupDialogView = "words" | "save" | "saved" | null;

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
    label: "La început",
    statusLabel: "La începutul cuvântului",
    shortStatusLabel: "Început",
  },
  {
    mode: "contains-only",
    label: "În interior",
    statusLabel: "În interior, nu la început",
    shortStatusLabel: "Interior",
  },
  {
    mode: "starts-with-or-contains",
    label: "Amestec",
    statusLabel: "La început + în interior",
    shortStatusLabel: "Mixt",
  },
] as const satisfies readonly {
  mode: WordInclusionMode;
  label: string;
  shortStatusLabel: string;
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
  const defaultMode = isPracticeTarget(content.target)
    ? "starts-with-or-contains"
    : DEFAULT_WORD_INCLUSION_MODE;
  const targetKindLabel = isPracticeTarget(content.target)
    ? "Sunetul"
    : "Litera";
  const [selectedMode, setSelectedMode] =
    useState<WordInclusionMode>(defaultMode);
  const [targetWordCounts, setTargetWordCounts] = useState<
    Record<WordInclusionMode, number>
  >(() => createDefaultTargetWordCounts());
  const [wordSelectionMode, setWordSelectionMode] =
    useState<WheelWordSelectionMode>("all");
  const [excludedTargetKeys, setExcludedTargetKeys] = useState<
    readonly string[]
  >([]);
  const [selectedWordIds, setSelectedWordIds] = useState<readonly string[]>([]);
  const [visibleWordIdsBySubsetKey, setVisibleWordIdsBySubsetKey] = useState<
    Readonly<Record<string, readonly string[]>>
  >({});
  const [removedWordIds, setRemovedWordIds] = useState<readonly string[]>([]);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDurationMs, setSpinDurationMs] = useState(SPIN_MIN_DURATION_MS);
  const [selectedWord, setSelectedWord] = useState<ContentWord | null>(null);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [draftMode, setDraftMode] = useState<WordInclusionMode>(defaultMode);
  const [draftWordCount, setDraftWordCount] = useState(
    DEFAULT_WHEEL_WORD_COUNT,
  );
  const [draftWordSelectionMode, setDraftWordSelectionMode] =
    useState<WheelWordSelectionMode>("all");
  const [draftSelectedWordIds, setDraftSelectedWordIds] = useState<
    readonly string[]
  >([]);
  const [savedSetups, setSavedSetups] = useState<readonly SavedWheelSetup[]>(
    [],
  );
  const prefersReducedMotion = usePrefersReducedMotion();
  const spinTimer = useRef<number | null>(null);
  const wheelButtonRef = useRef<HTMLButtonElement | null>(null);
  const setupButtonRef = useRef<HTMLButtonElement | null>(null);
  const targetStorageKey = getTargetStorageKey(locale, content.target);
  const setupHref = `/${locale}/setup/${getTargetRouteSegment(
    locale,
    content.target,
  )}?from=play`;

  const modeWordCounts = useMemo(
    () =>
      getSetupModeWordCounts({
        content,
        excludedTargetKeys,
        locale,
      }),
    [content, excludedTargetKeys, locale],
  );
  const selectedModeOption = getModeOption(selectedMode);
  const selectedModeTotalWordCount = modeWordCounts[selectedMode];
  const selectedModeAllWords = useMemo(
    () =>
      getSetupModeWords({
        content,
        excludedTargetKeys,
        locale,
        mode: selectedMode,
        removedWordIds: EMPTY_REMOVED_WORD_IDS,
      }),
    [content, excludedTargetKeys, locale, selectedMode],
  );
  const selectedSetupTotalWordCount =
    wordSelectionMode === "custom"
      ? getSelectedWords(selectedModeAllWords, selectedWordIds).length
      : selectedModeTotalWordCount;
  const targetWordCount = targetWordCounts[selectedMode];
  const setupRequestedWheelWordCount = targetWordCount;
  const activeSetupConfig = useMemo<WheelSetupConfig>(
    () => ({
      mode: selectedMode,
      excludedTargetKeys,
      wheelWordCount: targetWordCount,
      wordSelectionMode,
      selectedWordIds:
        wordSelectionMode === "custom" ? selectedWordIds : [],
    }),
    [
      excludedTargetKeys,
      selectedMode,
      selectedWordIds,
      targetWordCount,
      wordSelectionMode,
    ],
  );
  const matchingSavedSetup = useMemo(
    () =>
      savedSetups.find((setup) =>
        areWheelSetupConfigsEqual(setup.config, activeSetupConfig),
      ) ?? null,
    [activeSetupConfig, savedSetups],
  );
  const activeExclusionSummary = getExcludedTargetsSummary({
    excludedTargetKeys,
    locale,
  });
  const activeSetupSummary = formatActiveSetupSummary([
    matchingSavedSetup ? matchingSavedSetup.name : null,
    activeExclusionSummary,
    wordSelectionMode === "custom"
      ? `${selectedSetupTotalWordCount} ${getSelectedWordStatusLabel(
          selectedSetupTotalWordCount,
        )}`
      : null,
  ]);
  const activeModeWords = useMemo(
    () =>
      getSetupModeWords({
        content,
        excludedTargetKeys,
        locale,
        mode: selectedMode,
        removedWordIds,
      }),
    [content, excludedTargetKeys, locale, removedWordIds, selectedMode],
  );
  const activeWords = useMemo(
    () =>
      wordSelectionMode === "custom"
        ? getSelectedWords(activeModeWords, selectedWordIds)
        : activeModeWords,
    [activeModeWords, selectedWordIds, wordSelectionMode],
  );
  const visibleWheelWordCount = getBoundedWheelWordCount(
    setupRequestedWheelWordCount,
    activeWords.length,
  );
  const subsetKey = getWheelSubsetKey({
    excludedTargetKeys,
    mode: selectedMode,
    selectedWordIds,
    targetWordCount: setupRequestedWheelWordCount,
    wordSelectionMode,
  });
  const fallbackVisibleWordIds = useMemo(
    () => activeWords.slice(0, visibleWheelWordCount).map((word) => word.id),
    [activeWords, visibleWheelWordCount],
  );
  const hasVisibleSubset = Object.prototype.hasOwnProperty.call(
    visibleWordIdsBySubsetKey,
    subsetKey,
  );
  const visibleWordIds = useMemo(
    () =>
      hasVisibleSubset
        ? (visibleWordIdsBySubsetKey[subsetKey] ?? [])
        : fallbackVisibleWordIds,
    [
      fallbackVisibleWordIds,
      hasVisibleSubset,
      subsetKey,
      visibleWordIdsBySubsetKey,
    ],
  );
  const visibleWordsFromIds = useMemo(
    () => getWordsByVisibleIds(activeWords, visibleWordIds),
    [activeWords, visibleWordIds],
  );
  const words = visibleWordsFromIds;
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
    selectedWordIds: draftSelectedWordIds,
    wordSelectionMode: draftWordSelectionMode,
  });
  const draftModeWords = useMemo(
    () =>
      getPlayableWords({
        target: content.target,
        locale,
        mode: draftMode,
        removedWordIds,
        words: getModePool(content, draftMode),
      }),
    [content, draftMode, locale, removedWordIds],
  );
  const boundedDraftWordCount = getBoundedWheelWordCount(
    draftWordCount,
    draftAvailableWordCount,
  );
  const emptyStateKind = getWheelEmptyStateKind({
    availableWordCount: selectedSetupTotalWordCount,
    visibleWordCount: words.length,
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
    const hydrateTimer = window.setTimeout(() => {
      setSavedSetups(getSavedWheelSetupsForTarget(targetStorageKey));

      const activeConfig = getActiveWheelSetup(targetStorageKey);

      if (!activeConfig) {
        return;
      }

      const resolvedConfig = resolveStoredWheelSetupConfig({
        config: activeConfig,
        content,
        locale,
        removedWordIds: EMPTY_REMOVED_WORD_IDS,
      });

      setSelectedMode(resolvedConfig.mode);
      setWordSelectionMode(resolvedConfig.wordSelectionMode);
      setExcludedTargetKeys(resolvedConfig.excludedTargetKeys);
      setSelectedWordIds(resolvedConfig.selectedWordIds);
      setTargetWordCounts((currentCounts) => ({
        ...currentCounts,
        [resolvedConfig.mode]: resolvedConfig.wheelWordCount,
      }));
      setDraftMode(resolvedConfig.mode);
      setDraftWordCount(resolvedConfig.wheelWordCount);
      setDraftWordSelectionMode(resolvedConfig.wordSelectionMode);
      setDraftSelectedWordIds(resolvedConfig.selectedWordIds);
      setRemovedWordIds([]);
      setVisibleWordIdsBySubsetKey({});
      setSelectedWord(null);
      setIsResultOpen(false);
      setIsSetupOpen(false);
    }, 0);

    return () => {
      window.clearTimeout(hydrateTimer);
    };
  }, [content, locale, targetStorageKey]);

  useEffect(() => {
    const randomizeTimer = window.setTimeout(() => {
      setVisibleWordIdsBySubsetKey((currentSubsets) => {
        const hasCurrentSubset = Object.prototype.hasOwnProperty.call(
          currentSubsets,
          subsetKey,
        );
        const currentWordIds = hasCurrentSubset
          ? (currentSubsets[subsetKey] ?? [])
          : null;
        const nextWordIds = reconcileVisibleWheelWordIds({
          activeWords,
          existingWordIds: currentWordIds,
          targetWordCount: visibleWheelWordCount,
        });

        if (
          hasCurrentSubset &&
          currentWordIds !== null &&
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

  function closeSetup() {
    setIsSetupOpen(false);
  }

  function updateDraftMode(nextMode: WordInclusionMode) {
    const nextSelectedWordIds = getValidWordIdsForMode({
      content,
      locale,
      mode: nextMode,
      removedWordIds,
      wordIds: draftSelectedWordIds,
    });
    const nextAvailableWordCount = getAvailableWordCountForMode({
      content,
      locale,
      mode: nextMode,
      removedWordIds,
      selectedWordIds: nextSelectedWordIds,
      wordSelectionMode:
        draftWordSelectionMode === "custom" && nextSelectedWordIds.length > 0
          ? "custom"
          : "all",
    });

    setDraftMode(nextMode);
    setDraftSelectedWordIds(nextSelectedWordIds);
    setDraftWordCount(
      (currentCount) =>
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

  function toggleDraftSelectedWord(wordId: string) {
    setDraftSelectedWordIds((currentIds) =>
      getNextDraftSelectedWordIds(
        currentIds.includes(wordId)
          ? currentIds.filter((currentId) => currentId !== wordId)
          : [...currentIds, wordId],
      ),
    );
  }

  function selectAllDraftWords(wordIds: readonly string[]) {
    setDraftSelectedWordIds(getNextDraftSelectedWordIds(wordIds));
  }

  function clearDraftSelectedWords() {
    setDraftSelectedWordIds([]);
    setDraftWordSelectionMode("all");
  }

  function getNextDraftSelectedWordIds(wordIds: readonly string[]) {
    const nextWordIds = [...new Set(wordIds)];

    setDraftWordSelectionMode(nextWordIds.length > 0 ? "custom" : "all");

    return nextWordIds;
  }

  function applySetup({ resetRemovedWords }: { resetRemovedWords: boolean }) {
    const nextRemovedWordIds = resetRemovedWords ? [] : removedWordIds;
    const nextAvailableWordCount = getAvailableWordCountForMode({
      content,
      locale,
      mode: draftMode,
      removedWordIds: nextRemovedWordIds,
      selectedWordIds: draftSelectedWordIds,
      wordSelectionMode: draftWordSelectionMode,
    });
    const nextWordCount =
      getBoundedWheelWordCount(draftWordCount, nextAvailableWordCount) ||
      DEFAULT_WHEEL_WORD_COUNT;
    const nextSelectedWordIds = getValidWordIdsForMode({
      content,
      locale,
      mode: draftMode,
      removedWordIds: nextRemovedWordIds,
      wordIds: draftSelectedWordIds,
    });
    const nextWordSelectionMode =
      draftWordSelectionMode === "custom" && nextSelectedWordIds.length > 0
        ? "custom"
        : "all";
    const nextConfig: WheelSetupConfig = {
      mode: draftMode,
      excludedTargetKeys: [],
      wheelWordCount: nextWordCount,
      wordSelectionMode: nextWordSelectionMode,
      selectedWordIds:
        nextWordSelectionMode === "custom" ? nextSelectedWordIds : [],
    };

    setSelectedMode(draftMode);
    setWordSelectionMode(nextWordSelectionMode);
    setExcludedTargetKeys([]);
    setSelectedWordIds(nextSelectedWordIds);
    setTargetWordCounts((currentCounts) => ({
      ...currentCounts,
      [draftMode]: nextWordCount,
    }));
    setRemovedWordIds(nextRemovedWordIds);
    setVisibleWordIdsBySubsetKey({});
    setSelectedWord(null);
    setIsSetupOpen(false);
    setIsResultOpen(false);
    saveActiveWheelSetup(targetStorageKey, nextConfig);
  }

  function loadSavedSetup(setup: SavedWheelSetup) {
    const nextSelectedWordIds = getValidWordIdsForMode({
      content,
      locale,
      mode: setup.config.mode,
      removedWordIds,
      wordIds: setup.config.selectedWordIds,
    });

    setDraftMode(setup.config.mode);
    setDraftWordSelectionMode(
      setup.config.wordSelectionMode === "custom" &&
        nextSelectedWordIds.length > 0
        ? "custom"
        : "all",
    );
    setDraftSelectedWordIds(nextSelectedWordIds);
    setDraftWordCount(setup.config.wheelWordCount);
  }

  function saveDraftSetup(name: string) {
    const trimmedName = name.trim();

    if (!trimmedName || draftAvailableWordCount === 0) {
      return;
    }

    const validSelectedWordIds = getValidWordIdsForMode({
      content,
      locale,
      mode: draftMode,
      removedWordIds,
      wordIds: draftSelectedWordIds,
    });
    const configWordSelectionMode =
      draftWordSelectionMode === "custom" && validSelectedWordIds.length > 0
        ? "custom"
        : "all";
    const config: WheelSetupConfig = {
      mode: draftMode,
      excludedTargetKeys: [],
      wheelWordCount: boundedDraftWordCount || DEFAULT_WHEEL_WORD_COUNT,
      wordSelectionMode: configWordSelectionMode,
      selectedWordIds:
        configWordSelectionMode === "custom" ? validSelectedWordIds : [],
    };

    createSavedWheelSetup({
      config,
      name: trimmedName,
      targetKey: targetStorageKey,
    });
    setSavedSetups(getSavedWheelSetupsForTarget(targetStorageKey));
  }

  function deleteDraftSetup(setupId: string) {
    deleteSavedWheelSetup(setupId);
    setSavedSetups(getSavedWheelSetupsForTarget(targetStorageKey));
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
    setVisibleWordIdsBySubsetKey((currentSubsets) => {
      const hasCurrentSubset = Object.prototype.hasOwnProperty.call(
        currentSubsets,
        subsetKey,
      );
      const currentWordIds = hasCurrentSubset
        ? (currentSubsets[subsetKey] ?? [])
        : words.map((word) => word.id);
      const nextWordIds = currentWordIds.filter(
        (wordId) => wordId !== selectedWord.id,
      );

      if (areWordIdListsEqual(currentWordIds, nextWordIds)) {
        return currentSubsets;
      }

      return {
        ...currentSubsets,
        [subsetKey]: nextWordIds,
      };
    });
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
          Schimbă alegerea
        </Link>
        <div className="selected-letter" aria-label="Alegerea curentă">
          {content.target.label}
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
                  : `Învârte roata pentru ${targetKindLabel.toLocaleLowerCase(
                      "ro",
                    )} ${content.target.label}`
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
                    {content.target.label}
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
            onReset={resetCurrentLetter}
            setupHref={setupHref}
          />
        )}

        <div className="game-panel">
          <p className="stage-label">
            {targetKindLabel} {content.target.label}
          </p>
          <h2 id="game-title">
            {hasWords ? "Învârte roata" : "Roata este goală"}
          </h2>
          <p className="mode-status">
            <span className="mode-status__desktop">
              {selectedModeOption.statusLabel} {content.target.label}
            </span>
            <span className="mode-status__mobile">
              {content.target.label} · {selectedModeOption.shortStatusLabel}
            </span>
            <strong>{words.length}</strong>
            <span>
              {getWordCountLabel(words.length)} pe roată
              {activeWords.length !== words.length
                ? ` din ${activeWords.length}`
                : ""}
              {wordSelectionMode === "custom"
                ? ` ${getSelectedWordStatusLabel(activeWords.length)}`
                : selectedModeTotalWordCount !== activeWords.length
                  ? ` disponibile`
                  : ""}
            </span>
          </p>
          {activeSetupSummary ? (
            <p className="active-setup-status">
              <span>Configurație</span>
              <strong>{activeSetupSummary}</strong>
            </p>
          ) : null}
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
        <Link
          className="secondary-button"
          href={isSpinning || isResultOpen ? "#" : setupHref}
          onClick={(event) => {
            if (isSpinning || isResultOpen) {
              event.preventDefault();
            }
          }}
        >
          Setează
        </Link>
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
          draftSelectedWordIds={draftSelectedWordIds}
          draftWordSelectionMode={draftWordSelectionMode}
          hasRemovedWords={removedWordCount > 0}
          modeWordCounts={modeWordCounts}
          onApply={() => applySetup({ resetRemovedWords: false })}
          onClearSelectedWords={clearDraftSelectedWords}
          onClose={closeSetup}
          onDeleteSavedSetup={deleteDraftSetup}
          onDraftModeChange={updateDraftMode}
          onDraftWordCountChange={updateDraftWordCount}
          onLoadSavedSetup={loadSavedSetup}
          onResetAndApply={() => applySetup({ resetRemovedWords: true })}
          onReturnFocus={() =>
            setupButtonRef.current?.focus() ?? wheelButtonRef.current?.focus()
          }
          onSaveSetup={saveDraftSetup}
          onSelectAllWords={selectAllDraftWords}
          onToggleSelectedWord={toggleDraftSelectedWord}
          savedSetups={savedSetups}
          targetKindLabel={targetKindLabel}
          targetLabel={content.target.label}
          words={draftModeWords}
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
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
            Scoate din roată
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
  draftSelectedWordIds,
  draftWordSelectionMode,
  hasRemovedWords,
  modeWordCounts,
  onApply,
  onClearSelectedWords,
  onClose,
  onDeleteSavedSetup,
  onDraftModeChange,
  onDraftWordCountChange,
  onLoadSavedSetup,
  onResetAndApply,
  onReturnFocus,
  onSaveSetup,
  onSelectAllWords,
  onToggleSelectedWord,
  savedSetups,
  targetKindLabel,
  targetLabel,
  words,
}: Readonly<{
  availableWordCount: number;
  boundedWordCount: number;
  draftMode: WordInclusionMode;
  draftSelectedWordIds: readonly string[];
  draftWordSelectionMode: WheelWordSelectionMode;
  hasRemovedWords: boolean;
  modeWordCounts: Record<WordInclusionMode, number>;
  onApply: () => void;
  onClearSelectedWords: () => void;
  onClose: () => void;
  onDeleteSavedSetup: (setupId: string) => void;
  onDraftModeChange: (mode: WordInclusionMode) => void;
  onDraftWordCountChange: (wordCount: number) => void;
  onLoadSavedSetup: (setup: SavedWheelSetup) => void;
  onResetAndApply: () => void;
  onReturnFocus: () => void;
  onSaveSetup: (name: string) => void;
  onSelectAllWords: (wordIds: readonly string[]) => void;
  onToggleSelectedWord: (wordId: string) => void;
  savedSetups: readonly SavedWheelSetup[];
  targetKindLabel: string;
  targetLabel: string;
  words: readonly ContentWord[];
}>) {
  const modalRef = useRef<HTMLElement | null>(null);
  const primaryActionRef = useRef<HTMLButtonElement | null>(null);
  const [activeSetupDialog, setActiveSetupDialog] =
    useState<SetupDialogView>(null);
  const activeModeOption = getModeOption(draftMode);
  const activeModeTotalWordCount = modeWordCounts[draftMode];
  const hasAvailableWords = availableWordCount > 0;
  const maxWheelWordCount = Math.min(availableWordCount, MAX_WHEEL_WORD_COUNT);
  const selectedWordCount = draftSelectedWordIds.length;

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement;

    primaryActionRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        if (activeSetupDialog) {
          setActiveSetupDialog(null);
        } else {
          onClose();
        }
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
  }, [activeSetupDialog, onClose, onReturnFocus]);

  function trapFocus(event: ReactKeyboardEvent<HTMLElement>) {
    if (event.key !== "Tab" || !modalRef.current) {
      return;
    }

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
          <p className="stage-label">
            {targetKindLabel} {targetLabel}
          </p>
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
                aria-label={`${option.statusLabel} ${targetLabel}, ${modeWordCounts[option.mode]} ${getWordCountLabel(modeWordCounts[option.mode])}`}
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
            {activeModeOption.statusLabel} {targetLabel}
          </span>
          <strong>{boundedWordCount}</strong>
          <span>
            {getWordCountLabel(boundedWordCount)} pe roată
            {draftWordSelectionMode === "custom"
              ? boundedWordCount === selectedWordCount
                ? ` ${getSelectedWordStatusLabel(selectedWordCount)}`
                : ` din ${selectedWordCount} alese`
              : activeModeTotalWordCount !== availableWordCount
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
            disabled={
              !hasAvailableWords || boundedWordCount >= maxWheelWordCount
            }
            onClick={() => onDraftWordCountChange(boundedWordCount + 1)}
            type="button"
          >
            +
          </button>
          <span className="wheel-count-control__max">
            max {maxWheelWordCount}
          </span>
        </div>

        <section aria-label="Alege cuvinte" className="setup-choice-card">
          <div className="setup-section-heading">
            <h3>Cuvinte</h3>
            <span>
              {draftWordSelectionMode === "custom"
                ? `${selectedWordCount}/${words.length}`
                : words.length}
            </span>
          </div>

          <button
            className="secondary-button setup-wide-button"
            onClick={() => setActiveSetupDialog("words")}
            type="button"
          >
            Alege cuvinte
          </button>
        </section>

        <div className="setup-modal__actions" aria-label="Comenzi setare">
          <button className="secondary-button" onClick={onClose} type="button">
            Anulează
          </button>
          {savedSetups.length > 0 ? (
            <button
              className="secondary-button"
              onClick={() => setActiveSetupDialog("saved")}
              type="button"
            >
              Salvate
            </button>
          ) : null}
          {hasRemovedWords ? (
            <button
              className="secondary-button"
              onClick={onResetAndApply}
              type="button"
            >
              Resetează
            </button>
          ) : null}
          <button
            className="secondary-button"
            disabled={!hasAvailableWords}
            onClick={() => setActiveSetupDialog("save")}
            type="button"
          >
            Salvează configurația
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

      {activeSetupDialog === "words" ? (
        <WordPickerDialog
          onClearSelectedWords={onClearSelectedWords}
          onClose={() => setActiveSetupDialog(null)}
          onSelectAllWords={onSelectAllWords}
          onToggleSelectedWord={onToggleSelectedWord}
          selectedWordIds={draftSelectedWordIds}
          targetLabel={targetLabel}
          words={words}
        />
      ) : null}

      {activeSetupDialog === "save" ? (
        <SaveSetupDialog
          modeLabel={activeModeOption.label}
          onClose={() => setActiveSetupDialog(null)}
          onSave={(name) => {
            onSaveSetup(name);
            setActiveSetupDialog(null);
          }}
          selectedWordCount={selectedWordCount}
          totalWordCount={words.length}
          wheelWordCount={boundedWordCount}
        />
      ) : null}

      {activeSetupDialog === "saved" ? (
        <SavedSetupsDialog
          onClose={() => setActiveSetupDialog(null)}
          onDeleteSavedSetup={onDeleteSavedSetup}
          onLoadSavedSetup={(setup) => {
            onLoadSavedSetup(setup);
            setActiveSetupDialog(null);
          }}
          savedSetups={savedSetups}
        />
      ) : null}
    </div>
  );
}

function WordPickerDialog({
  onClearSelectedWords,
  onClose,
  onSelectAllWords,
  onToggleSelectedWord,
  selectedWordIds,
  targetLabel,
  words,
}: Readonly<{
  onClearSelectedWords: () => void;
  onClose: () => void;
  onSelectAllWords: (wordIds: readonly string[]) => void;
  onToggleSelectedWord: (wordId: string) => void;
  selectedWordIds: readonly string[];
  targetLabel: string;
  words: readonly ContentWord[];
}>) {
  const dialogRef = useRef<HTMLElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [wordSearch, setWordSearch] = useState("");
  const selectedWordIdSet = useMemo(
    () => new Set(selectedWordIds),
    [selectedWordIds],
  );
  const filteredWords = useMemo(() => {
    const normalizedSearch = wordSearch.trim().toLocaleLowerCase("ro");

    if (!normalizedSearch) {
      return words;
    }

    return words.filter((word) =>
      word.display.toLocaleLowerCase("ro").includes(normalizedSearch),
    );
  }, [wordSearch, words]);
  const filteredWordIds = filteredWords.map((word) => word.id);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
    <div className="setup-subdialog-backdrop" role="presentation">
      <section
        aria-labelledby="word-picker-title"
        aria-modal="true"
        className="setup-subdialog setup-subdialog--words"
        onKeyDown={(event) => trapDialogFocus(event, dialogRef.current)}
        ref={dialogRef}
        role="dialog"
      >
        <div className="setup-modal__header">
          <p className="stage-label">Litera {targetLabel}</p>
          <h2 id="word-picker-title">Alege cuvinte</h2>
        </div>

        <p className="mode-status">
          <span>Cuvinte alese</span>
          <strong>{selectedWordIds.length}</strong>
          <span>din {words.length}</span>
        </p>

        <div className="setup-word-tools">
          <label className="setup-word-search">
            <span>Caută</span>
            <input
              autoComplete="off"
              onChange={(event) => setWordSearch(event.target.value)}
              ref={searchRef}
              type="search"
              value={wordSearch}
            />
          </label>
          <div className="setup-word-tools__actions">
            <button
              className="secondary-button"
              disabled={filteredWordIds.length === 0}
              onClick={() => onSelectAllWords(filteredWordIds)}
              type="button"
            >
              Toate
            </button>
            <button
              className="secondary-button"
              disabled={selectedWordIds.length === 0}
              onClick={onClearSelectedWords}
              type="button"
            >
              Golește
            </button>
          </div>
        </div>

        <div className="setup-word-list" role="group">
          {filteredWords.map((word) => (
            <label className="setup-word-row" key={word.id}>
              <input
                checked={selectedWordIdSet.has(word.id)}
                onChange={() => onToggleSelectedWord(word.id)}
                type="checkbox"
              />
              <span className="setup-word-row__thumb" aria-hidden="true">
                {hasReadyImage(word) ? (
                  <Image
                    alt=""
                    height={40}
                    src={word.image}
                    unoptimized
                    width={40}
                  />
                ) : (
                  getWordInitial(word)
                )}
              </span>
              <span className="setup-word-row__text">{word.display}</span>
            </label>
          ))}
        </div>

        <div className="setup-modal__actions">
          <button className="spin-button" onClick={onClose} type="button">
            Gata
          </button>
        </div>
      </section>
    </div>
  );
}

function SaveSetupDialog({
  modeLabel,
  onClose,
  onSave,
  selectedWordCount,
  totalWordCount,
  wheelWordCount,
}: Readonly<{
  modeLabel: string;
  onClose: () => void;
  onSave: (name: string) => void;
  selectedWordCount: number;
  totalWordCount: number;
  wheelWordCount: number;
}>) {
  const dialogRef = useRef<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [presetName, setPresetName] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function savePreset() {
    if (!presetName.trim()) {
      return;
    }

    onSave(presetName);
    setPresetName("");
  }

  return (
    <div className="setup-subdialog-backdrop" role="presentation">
      <section
        aria-labelledby="save-setup-title"
        aria-modal="true"
        className="setup-subdialog"
        onKeyDown={(event) => trapDialogFocus(event, dialogRef.current)}
        ref={dialogRef}
        role="dialog"
      >
        <div className="setup-modal__header">
          <p className="stage-label">Configurație</p>
          <h2 id="save-setup-title">Salvează configurația</h2>
        </div>

        <p className="mode-status">
          <span>{modeLabel}</span>
          <strong>{wheelWordCount}</strong>
          <span>
            pe roată ·{" "}
            {selectedWordCount > 0
              ? `${selectedWordCount} ${getSelectedWordStatusLabel(selectedWordCount)}`
              : `toate cele ${totalWordCount}`}
          </span>
        </p>

        <label className="setup-word-search">
          <span>Nume</span>
          <input
            autoComplete="off"
            onChange={(event) => setPresetName(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                savePreset();
              }
            }}
            ref={inputRef}
            type="text"
            value={presetName}
          />
        </label>

        <div className="setup-modal__actions">
          <button className="secondary-button" onClick={onClose} type="button">
            Anulează
          </button>
          <button
            className="spin-button"
            disabled={!presetName.trim()}
            onClick={savePreset}
            type="button"
          >
            Salvează configurația
          </button>
        </div>
      </section>
    </div>
  );
}

function SavedSetupsDialog({
  onClose,
  onDeleteSavedSetup,
  onLoadSavedSetup,
  savedSetups,
}: Readonly<{
  onClose: () => void;
  onDeleteSavedSetup: (setupId: string) => void;
  onLoadSavedSetup: (setup: SavedWheelSetup) => void;
  savedSetups: readonly SavedWheelSetup[];
}>) {
  const dialogRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div className="setup-subdialog-backdrop" role="presentation">
      <section
        aria-labelledby="saved-setups-title"
        aria-modal="true"
        className="setup-subdialog"
        onKeyDown={(event) => trapDialogFocus(event, dialogRef.current)}
        ref={dialogRef}
        role="dialog"
      >
        <div className="setup-modal__header">
          <p className="stage-label">Configurații</p>
          <h2 id="saved-setups-title">Salvate</h2>
        </div>

        <div className="setup-presets__list">
          {savedSetups.map((setup) => (
            <div className="setup-preset-row" key={setup.id}>
              <button
                className="setup-preset-row__load"
                onClick={() => onLoadSavedSetup(setup)}
                type="button"
              >
                <strong>{setup.name}</strong>
                <span>
                  {getModeOption(setup.config.mode).label} ·{" "}
                  {setup.config.wheelWordCount} pe roată ·{" "}
                  {setup.config.wordSelectionMode === "custom"
                    ? `${setup.config.selectedWordIds.length} ${getSelectedWordStatusLabel(setup.config.selectedWordIds.length)}`
                    : "toate cuvintele"}
                </span>
              </button>
              <button
                aria-label={`Șterge ${setup.name}`}
                className="setup-preset-row__delete"
                onClick={() => onDeleteSavedSetup(setup.id)}
                type="button"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="setup-modal__actions">
          <button
            className="spin-button"
            onClick={onClose}
            ref={closeRef}
            type="button"
          >
            Gata
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
  onReset,
  setupHref,
}: Readonly<{
  emptyStateKind: WheelEmptyStateKind;
  hasRemovedWords: boolean;
  locale: SupportedLocale;
  onReset: () => void;
  setupHref: string;
}>) {
  return (
    <div className="empty-wheel-state">
      <p>
        {emptyStateKind === "all-removed"
          ? "Ai scos toate cuvintele din acest mod."
          : "Nu sunt cuvinte aici."}
      </p>
      <Link
        className="spin-button"
        href={setupHref}
      >
        Setează roata
      </Link>
      <button
        className="secondary-button"
        disabled={!hasRemovedWords}
        onClick={onReset}
        type="button"
      >
        Resetează roata
      </button>
      <Link className="secondary-button" href={`/${locale}`}>
        Alege altceva
      </Link>
    </div>
  );
}

function hasReadyImage(word: ContentWord) {
  return word.imageStatus === "ready";
}

function trapDialogFocus(
  event: ReactKeyboardEvent<HTMLElement>,
  dialog: HTMLElement | null,
) {
  if (event.key !== "Tab" || !dialog) {
    return;
  }

  const focusableElements = dialog.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
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

function getModeOption(mode: WordInclusionMode) {
  return modeOptions.find((option) => option.mode === mode) ?? modeOptions[0];
}

function isPracticeTarget(
  target: GameplayTarget,
): target is ContentPracticeTarget {
  return "kind" in target && target.kind === "sequence";
}

function getTargetStorageKey(locale: SupportedLocale, target: GameplayTarget) {
  const targetKind = isPracticeTarget(target) ? "sequence" : "letter";

  return `${locale}:${targetKind}:${target.id}`;
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
  selectedWordIds,
  wordSelectionMode,
}: Readonly<{
  content: GameplayContent;
  locale: SupportedLocale;
  mode: WordInclusionMode;
  removedWordIds: readonly string[];
  selectedWordIds: readonly string[];
  wordSelectionMode: WheelWordSelectionMode;
}>) {
  const playableWords = getPlayableWords({
    target: content.target,
    locale,
    mode,
    removedWordIds,
    words: getModePool(content, mode),
  });

  return wordSelectionMode === "custom"
    ? getSelectedWords(playableWords, selectedWordIds).length
    : playableWords.length;
}

function getWordCountLabel(count: number) {
  return count === 1 ? "cuvânt" : "cuvinte";
}

function getSelectedWordStatusLabel(count: number) {
  return count === 1 ? "ales" : "alese";
}

function formatActiveSetupSummary(parts: readonly (string | null)[]) {
  return parts.filter((part): part is string => Boolean(part)).join(" · ");
}

function areWheelSetupConfigsEqual(
  firstConfig: WheelSetupConfig,
  secondConfig: WheelSetupConfig,
) {
  return (
    firstConfig.mode === secondConfig.mode &&
    firstConfig.wheelWordCount === secondConfig.wheelWordCount &&
    firstConfig.wordSelectionMode === secondConfig.wordSelectionMode &&
    areWordIdListsEqual(
      firstConfig.excludedTargetKeys,
      secondConfig.excludedTargetKeys,
    ) &&
    areWordIdListsEqual(
      firstConfig.selectedWordIds,
      secondConfig.selectedWordIds,
    )
  );
}

function createDefaultTargetWordCounts(): Record<WordInclusionMode, number> {
  return {
    "starts-with": DEFAULT_WHEEL_WORD_COUNT,
    "starts-with-or-contains": DEFAULT_WHEEL_WORD_COUNT,
    "contains-only": DEFAULT_WHEEL_WORD_COUNT,
  };
}

function getWheelSubsetKey({
  excludedTargetKeys,
  mode,
  selectedWordIds,
  targetWordCount,
  wordSelectionMode,
}: Readonly<{
  excludedTargetKeys: readonly string[];
  mode: WordInclusionMode;
  selectedWordIds: readonly string[];
  targetWordCount: number;
  wordSelectionMode: WheelWordSelectionMode;
}>) {
  const selectionKey =
    wordSelectionMode === "custom" ? selectedWordIds.join(",") : "all";
  const exclusionKey =
    excludedTargetKeys.length > 0 ? excludedTargetKeys.join(",") : "none";

  return `${mode}:${exclusionKey}:${wordSelectionMode}:${targetWordCount}:${selectionKey}`;
}

function getSelectedWords(
  words: readonly ContentWord[],
  selectedWordIds: readonly string[],
) {
  const selectedWordIdSet = new Set(selectedWordIds);

  return words.filter((word) => selectedWordIdSet.has(word.id));
}

function getValidWordIdsForMode({
  content,
  locale,
  mode,
  removedWordIds,
  wordIds,
}: Readonly<{
  content: GameplayContent;
  locale: SupportedLocale;
  mode: WordInclusionMode;
  removedWordIds: readonly string[];
  wordIds: readonly string[];
}>) {
  const playableWordIds = new Set(
    getPlayableWords({
      target: content.target,
      locale,
      mode,
      removedWordIds,
      words: getModePool(content, mode),
    }).map((word) => word.id),
  );

  return [...new Set(wordIds)].filter((wordId) => playableWordIds.has(wordId));
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
