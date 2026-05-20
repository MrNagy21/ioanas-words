import type {
  ContentPracticeTarget,
  ContentWord,
  GameplayContent,
  GameplayTarget,
} from "@/content/types";
import {
  filterWordsByExcludedTargetKeys,
  getExclusionTargetsForKeys,
} from "@/content/exclusions";
import { getLetterRouteSegment } from "@/content/matching";
import type { SupportedLocale } from "@/i18n/locales";
import {
  DEFAULT_WHEEL_WORD_COUNT,
  DEFAULT_WORD_INCLUSION_MODE,
  getBoundedWheelWordCount,
  getPlayableWords,
  type WordInclusionMode,
} from "@/game/word-selection";
import type {
  WheelSetupConfig,
  WheelWordSelectionMode,
} from "@/game/wheel-setup-storage";

export const EMPTY_REMOVED_WORD_IDS: readonly string[] = [];

export const wheelSetupModeOptions = [
  {
    mode: "starts-with",
    label: "La început",
    helperLabel: "începe cu",
    statusLabel: "La începutul cuvântului",
    shortStatusLabel: "Început",
  },
  {
    mode: "contains-only",
    label: "În interior",
    helperLabel: "nu la început",
    statusLabel: "În interior, nu la început",
    shortStatusLabel: "Interior",
  },
  {
    mode: "starts-with-or-contains",
    label: "Amestec",
    helperLabel: "început + interior",
    statusLabel: "La început + în interior",
    shortStatusLabel: "Mixt",
  },
] as const satisfies readonly {
  helperLabel: string;
  mode: WordInclusionMode;
  label: string;
  shortStatusLabel: string;
  statusLabel: string;
}[];

export function isPracticeTarget(
  target: GameplayTarget,
): target is ContentPracticeTarget {
  return "kind" in target && target.kind === "sequence";
}

export function getDefaultSetupMode(target: GameplayTarget): WordInclusionMode {
  return isPracticeTarget(target)
    ? "starts-with-or-contains"
    : DEFAULT_WORD_INCLUSION_MODE;
}

export function getTargetKindLabel(target: GameplayTarget) {
  return isPracticeTarget(target) ? "Sunetul" : "Litera";
}

export function getTargetRouteSegment(
  locale: SupportedLocale,
  target: GameplayTarget,
) {
  return isPracticeTarget(target)
    ? target.routeSegment
    : getLetterRouteSegment(locale, target.id);
}

export function getTargetStorageKey(
  locale: SupportedLocale,
  target: GameplayTarget,
) {
  const targetKind = isPracticeTarget(target) ? "sequence" : "letter";

  return `${locale}:${targetKind}:${target.id}`;
}

export function getModePool(
  content: GameplayContent,
  mode: WordInclusionMode,
) {
  if (mode === "contains-only") {
    return content.wordPools.containsOnlyWords;
  }

  if (mode === "starts-with-or-contains") {
    return content.wordPools.mixedWords;
  }

  return content.wordPools.startsWithWords;
}

export function getModeWords({
  content,
  excludedTargetKeys = [],
  locale,
  mode,
  removedWordIds = EMPTY_REMOVED_WORD_IDS,
}: Readonly<{
  content: GameplayContent;
  excludedTargetKeys?: readonly string[];
  locale: SupportedLocale;
  mode: WordInclusionMode;
  removedWordIds?: readonly string[];
}>) {
  const playableWords = getPlayableWords({
    target: content.target,
    locale,
    mode,
    removedWordIds,
    words: getModePool(content, mode),
  });

  return filterWordsByExcludedTargetKeys({
    excludedTargetKeys,
    locale,
    words: playableWords,
  });
}

export function getModeWordCounts({
  content,
  excludedTargetKeys = [],
  locale,
}: Readonly<{
  content: GameplayContent;
  excludedTargetKeys?: readonly string[];
  locale: SupportedLocale;
}>) {
  return Object.fromEntries(
    wheelSetupModeOptions.map((option) => [
      option.mode,
      getModeWords({
        content,
        excludedTargetKeys,
        locale,
        mode: option.mode,
      }).length,
    ]),
  ) as Record<WordInclusionMode, number>;
}

export function getSelectedWords(
  words: readonly ContentWord[],
  selectedWordIds: readonly string[],
) {
  const selectedWordIdSet = new Set(selectedWordIds);

  return words.filter((word) => selectedWordIdSet.has(word.id));
}

export function getValidWordIdsForMode({
  content,
  excludedTargetKeys = [],
  locale,
  mode,
  removedWordIds = EMPTY_REMOVED_WORD_IDS,
  wordIds,
}: Readonly<{
  content: GameplayContent;
  excludedTargetKeys?: readonly string[];
  locale: SupportedLocale;
  mode: WordInclusionMode;
  removedWordIds?: readonly string[];
  wordIds: readonly string[];
}>) {
  const playableWordIds = new Set(
    getModeWords({
      content,
      excludedTargetKeys,
      locale,
      mode,
      removedWordIds,
    }).map((word) => word.id),
  );

  return [...new Set(wordIds)].filter((wordId) => playableWordIds.has(wordId));
}

export function getAvailableWordCountForMode({
  content,
  excludedTargetKeys = [],
  locale,
  mode,
  removedWordIds = EMPTY_REMOVED_WORD_IDS,
  selectedWordIds,
  wordSelectionMode,
}: Readonly<{
  content: GameplayContent;
  excludedTargetKeys?: readonly string[];
  locale: SupportedLocale;
  mode: WordInclusionMode;
  removedWordIds?: readonly string[];
  selectedWordIds: readonly string[];
  wordSelectionMode: WheelWordSelectionMode;
}>) {
  const playableWords = getModeWords({
    content,
    excludedTargetKeys,
    locale,
    mode,
    removedWordIds,
  });

  return wordSelectionMode === "custom"
    ? getSelectedWords(playableWords, selectedWordIds).length
    : playableWords.length;
}

export type WheelSetupEmptyStateKind = "no-mode-words" | "all-excluded";

export function getWheelSetupEmptyStateKind({
  baseWordCount,
  excludedTargetKeys,
  filteredWordCount,
}: Readonly<{
  baseWordCount: number;
  excludedTargetKeys: readonly string[];
  filteredWordCount: number;
}>): WheelSetupEmptyStateKind | null {
  if (filteredWordCount > 0) {
    return null;
  }

  if (baseWordCount > 0 && excludedTargetKeys.length > 0) {
    return "all-excluded";
  }

  return "no-mode-words";
}

export function createDefaultWheelSetupConfig({
  content,
  locale,
}: Readonly<{
  content: GameplayContent;
  locale: SupportedLocale;
}>): WheelSetupConfig {
  const mode = getDefaultSetupMode(content.target);
  const availableWordCount = getAvailableWordCountForMode({
    content,
    locale,
    mode,
    selectedWordIds: [],
    wordSelectionMode: "all",
  });

  return {
    mode,
    excludedTargetKeys: [],
    wheelWordCount:
      getBoundedWheelWordCount(DEFAULT_WHEEL_WORD_COUNT, availableWordCount) ||
      DEFAULT_WHEEL_WORD_COUNT,
    wordSelectionMode: "all",
    selectedWordIds: [],
  };
}

export function resolveWheelSetupConfig({
  config,
  content,
  locale,
  removedWordIds = EMPTY_REMOVED_WORD_IDS,
}: Readonly<{
  config: WheelSetupConfig;
  content: GameplayContent;
  locale: SupportedLocale;
  removedWordIds?: readonly string[];
}>): WheelSetupConfig {
  const excludedTargetKeys = getExclusionTargetsForKeys(
    locale,
    config.excludedTargetKeys,
  ).map((target) => target.key);
  const selectedWordIds = getValidWordIdsForMode({
    content,
    excludedTargetKeys,
    locale,
    mode: config.mode,
    removedWordIds,
    wordIds: config.selectedWordIds,
  });
  const wordSelectionMode =
    config.wordSelectionMode === "custom" && selectedWordIds.length > 0
      ? "custom"
      : "all";
  const availableWordCount = getAvailableWordCountForMode({
    content,
    excludedTargetKeys,
    locale,
    mode: config.mode,
    removedWordIds,
    selectedWordIds,
    wordSelectionMode,
  });
  const wheelWordCount =
    getBoundedWheelWordCount(config.wheelWordCount, availableWordCount) ||
    DEFAULT_WHEEL_WORD_COUNT;

  return {
    mode: config.mode,
    excludedTargetKeys,
    wheelWordCount,
    wordSelectionMode,
    selectedWordIds: wordSelectionMode === "custom" ? selectedWordIds : [],
  };
}

export function getModeOption(mode: WordInclusionMode) {
  return (
    wheelSetupModeOptions.find((option) => option.mode === mode) ??
    wheelSetupModeOptions[0]
  );
}

export function getWordCountLabel(count: number) {
  return count === 1 ? "cuvânt" : "cuvinte";
}

export function getSelectedWordStatusLabel(count: number) {
  return count === 1 ? "ales" : "alese";
}

export function getExcludedTargetsSummary({
  excludedTargetKeys,
  locale,
}: Readonly<{
  excludedTargetKeys: readonly string[];
  locale: SupportedLocale;
}>) {
  const labels = getExclusionTargetsForKeys(locale, excludedTargetKeys).map(
    (target) => target.label,
  );

  return labels.length > 0 ? `Fără ${labels.join(", ")}` : null;
}
