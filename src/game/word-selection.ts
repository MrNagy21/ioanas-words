import type { ContentLetter, ContentWord } from "@/content/types";

export const WORD_INCLUSION_MODES = [
  "starts-with",
  "starts-with-or-contains",
  "contains-only",
] as const;

export type WordInclusionMode = (typeof WORD_INCLUSION_MODES)[number];

export const DEFAULT_WORD_INCLUSION_MODE: WordInclusionMode = "starts-with";

export function getPlayableWords({
  letter,
  mode = DEFAULT_WORD_INCLUSION_MODE,
  removedWordIds,
  words,
}: Readonly<{
  letter: ContentLetter;
  mode?: WordInclusionMode;
  removedWordIds: readonly string[];
  words: readonly ContentWord[];
}>): ContentWord[] {
  return words.filter(
    (word) =>
      word.status === "approved" &&
      isWordEligibleForMode(word, letter, mode) &&
      !removedWordIds.includes(word.id),
  );
}

export function isWordEligibleForMode(
  word: ContentWord,
  letter: ContentLetter,
  mode: WordInclusionMode,
) {
  const normalizedWord = word.normalized.toLocaleLowerCase("ro-RO");
  const normalizedLetter = letter.id.toLocaleLowerCase("ro-RO");
  const startsWithLetter = normalizedWord.startsWith(normalizedLetter);
  const containsLetterInside =
    !startsWithLetter && normalizedWord.includes(normalizedLetter);

  if (mode === "starts-with") {
    return startsWithLetter;
  }

  if (mode === "contains-only") {
    return containsLetterInside;
  }

  return startsWithLetter || containsLetterInside;
}
