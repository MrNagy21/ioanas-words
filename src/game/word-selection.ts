import type { ContentLetter, ContentWord } from "@/content/types";
import { wordContainsTarget, wordStartsWithTarget } from "@/content/matching";
import type { SupportedLocale } from "@/i18n/locales";

export const WORD_INCLUSION_MODES = [
  "starts-with",
  "starts-with-or-contains",
  "contains-only",
] as const;

export type WordInclusionMode = (typeof WORD_INCLUSION_MODES)[number];

export const DEFAULT_WORD_INCLUSION_MODE: WordInclusionMode = "starts-with";
export const MAX_WHEEL_WORD_COUNT = 16;
export const DEFAULT_WHEEL_WORD_COUNT = 10;

export type WheelEmptyStateKind = "no-content" | "all-removed";

export function getPlayableWords({
  letter,
  locale = "ro",
  mode = DEFAULT_WORD_INCLUSION_MODE,
  removedWordIds,
  words,
}: Readonly<{
  letter: ContentLetter;
  locale?: SupportedLocale;
  mode?: WordInclusionMode;
  removedWordIds: readonly string[];
  words: readonly ContentWord[];
}>): ContentWord[] {
  return words.filter(
    (word) =>
      word.status === "approved" &&
      isWordEligibleForMode(word, letter, mode, locale) &&
      !removedWordIds.includes(word.id),
  );
}

export function isWordEligibleForMode(
  word: ContentWord,
  letter: ContentLetter,
  mode: WordInclusionMode,
  locale: SupportedLocale = "ro",
) {
  const startsWithLetter = wordStartsWithTarget(locale, word, letter);
  const containsLetterInside =
    !startsWithLetter && wordContainsTarget(locale, word, letter);

  if (mode === "starts-with") {
    return startsWithLetter;
  }

  if (mode === "contains-only") {
    return containsLetterInside;
  }

  return startsWithLetter || containsLetterInside;
}

export function getBoundedWheelWordCount(
  requestedWordCount: number,
  availableWordCount: number,
) {
  if (availableWordCount <= 0) {
    return 0;
  }

  return Math.min(
    Math.max(1, Math.floor(requestedWordCount)),
    availableWordCount,
    MAX_WHEEL_WORD_COUNT,
  );
}

export function getRandomWheelWords({
  currentWordIds = [],
  targetWordCount,
  words,
}: Readonly<{
  currentWordIds?: readonly string[];
  targetWordCount: number;
  words: readonly ContentWord[];
}>): ContentWord[] {
  const boundedWordCount = getBoundedWheelWordCount(
    targetWordCount,
    words.length,
  );

  if (boundedWordCount === 0) {
    return [];
  }

  const wordsById = new Map(words.map((word) => [word.id, word]));
  const preservedWords = currentWordIds
    .flatMap((wordId) => {
      const word = wordsById.get(wordId);

      return word ? [word] : [];
    })
    .slice(0, boundedWordCount);
  const preservedWordIds = new Set(preservedWords.map((word) => word.id));
  const candidateWords = shuffleWords(
    words.filter((word) => !preservedWordIds.has(word.id)),
  );
  const replacementSlots = boundedWordCount - preservedWords.length;

  return [
    ...preservedWords,
    ...candidateWords.slice(0, replacementSlots),
  ];
}

export function getOffWheelWords({
  visibleWordIds,
  words,
}: Readonly<{
  visibleWordIds: readonly string[];
  words: readonly ContentWord[];
}>): ContentWord[] {
  const visibleWordIdSet = new Set(visibleWordIds);

  return words.filter((word) => !visibleWordIdSet.has(word.id));
}

export function getRandomWord(words: readonly ContentWord[]) {
  if (words.length === 0) {
    return null;
  }

  return words[Math.floor(Math.random() * words.length)];
}

export function getWheelEmptyStateKind({
  availableWordCount,
  visibleWordCount,
}: Readonly<{
  availableWordCount: number;
  visibleWordCount: number;
}>): WheelEmptyStateKind | null {
  if (visibleWordCount > 0) {
    return null;
  }

  return availableWordCount > 0 ? "all-removed" : "no-content";
}

function shuffleWords(words: readonly ContentWord[]) {
  const shuffledWords = [...words];

  for (let index = shuffledWords.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const word = shuffledWords[index];

    shuffledWords[index] = shuffledWords[swapIndex];
    shuffledWords[swapIndex] = word;
  }

  return shuffledWords;
}
