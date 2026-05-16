import lettersRoJson from "../../content/ro/letters.json";
import wordsAJson from "../../content/ro/words-a.json";
import wordsCJson from "../../content/ro/words-c.json";
import wordsMJson from "../../content/ro/words-m.json";
import wordsPJson from "../../content/ro/words-p.json";
import type { SupportedLocale } from "@/i18n/locales";
import type {
  ContentLetter,
  ContentWord,
  ImageReadinessCounts,
  LetterContent,
  LetterCoverageSummary,
  LetterManifest,
  LocaleCoverageSummary,
  WordManifest,
} from "@/content/types";

const letterManifests = {
  ro: lettersRoJson as LetterManifest,
} satisfies Record<SupportedLocale, LetterManifest>;

const wordManifests: Record<SupportedLocale, Record<string, WordManifest>> = {
  ro: {
    a: wordsAJson as WordManifest,
    c: wordsCJson as WordManifest,
    m: wordsMJson as WordManifest,
    p: wordsPJson as WordManifest,
  },
};

const localeLowercaseTags = {
  ro: "ro-RO",
} satisfies Record<SupportedLocale, string>;

export function getLetters(locale: SupportedLocale): ContentLetter[] {
  return [...letterManifests[locale].letters].sort(
    (first, second) => first.sortOrder - second.sortOrder,
  );
}

export function getEnabledLetters(locale: SupportedLocale): ContentLetter[] {
  return getLetters(locale).filter((letter) => letter.enabled);
}

export function getLetter(
  locale: SupportedLocale,
  letterId: string,
): ContentLetter | null {
  return getLetters(locale).find((letter) => letter.id === letterId) ?? null;
}

export function getWordsForLetter(
  locale: SupportedLocale,
  letterId: string,
): ContentWord[] {
  return wordManifests[locale][letterId]?.words ?? [];
}

export function getWordManifests(locale: SupportedLocale): WordManifest[] {
  const manifestsByLetter = wordManifests[locale];
  const letterSortOrders = new Map(
    getLetters(locale).map((letter) => [letter.id, letter.sortOrder]),
  );

  return Object.values(manifestsByLetter).sort((first, second) => {
    const firstSortOrder =
      letterSortOrders.get(first.letter) ?? Number.MAX_SAFE_INTEGER;
    const secondSortOrder =
      letterSortOrders.get(second.letter) ?? Number.MAX_SAFE_INTEGER;

    return (
      firstSortOrder - secondSortOrder ||
      first.letter.localeCompare(second.letter, localeLowercaseTags[locale])
    );
  });
}

export function getAllWords(locale: SupportedLocale): ContentWord[] {
  return getWordManifests(locale).flatMap((manifest) => manifest.words);
}

export function getApprovedWords(locale: SupportedLocale): ContentWord[] {
  return getAllWords(locale).filter((word) => word.status === "approved");
}

export function getApprovedWordsForLetter(
  locale: SupportedLocale,
  letterId: string,
): ContentWord[] {
  return getWordsForLetter(locale, letterId).filter(
    (word) => word.status === "approved",
  );
}

export function getLetterContent(
  locale: SupportedLocale,
  letterId: string,
): LetterContent | null {
  const letter = getLetter(locale, letterId);

  if (!letter) {
    return null;
  }

  const words = getWordsForLetter(locale, letterId);

  return {
    letter,
    words,
    approvedWords: words.filter((word) => word.status === "approved"),
  };
}

export function getStarterContentSummary(locale: SupportedLocale) {
  return getEnabledLetters(locale).map((letter) => ({
    ...letter,
    approvedWordCount: getApprovedWordsForLetter(locale, letter.id).length,
  }));
}

export function getStartsWithWordsForLetter(
  locale: SupportedLocale,
  letter: ContentLetter,
  words: readonly ContentWord[] = getApprovedWords(locale),
): ContentWord[] {
  return words.filter((word) => wordStartsWithExactLetter(locale, word, letter));
}

export function getContainsOnlyWordsForLetter(
  locale: SupportedLocale,
  letter: ContentLetter,
  words: readonly ContentWord[] = getApprovedWords(locale),
): ContentWord[] {
  return words.filter(
    (word) =>
      wordContainsExactLetter(locale, word, letter) &&
      !wordStartsWithExactLetter(locale, word, letter),
  );
}

export function getMixedWordsForLetter(
  locale: SupportedLocale,
  letter: ContentLetter,
  words: readonly ContentWord[] = getApprovedWords(locale),
): ContentWord[] {
  const startsWithWords = getStartsWithWordsForLetter(locale, letter, words);
  const containsOnlyWords = getContainsOnlyWordsForLetter(locale, letter, words);

  return [...startsWithWords, ...containsOnlyWords];
}

export function getImageReadinessCounts(
  words: readonly ContentWord[],
): ImageReadinessCounts {
  return words.reduce<ImageReadinessCounts>(
    (counts, word) => ({
      total: counts.total + 1,
      ready: counts.ready + (word.imageStatus === "ready" ? 1 : 0),
      placeholder:
        counts.placeholder + (word.imageStatus === "placeholder" ? 1 : 0),
    }),
    { total: 0, ready: 0, placeholder: 0 },
  );
}

export function getLetterCoverageSummary(
  locale: SupportedLocale,
  letter: ContentLetter,
  words: readonly ContentWord[] = getApprovedWords(locale),
): LetterCoverageSummary {
  const startsWithWords = getStartsWithWordsForLetter(locale, letter, words);
  const containsOnlyWords = getContainsOnlyWordsForLetter(locale, letter, words);
  const mixedWords = [...startsWithWords, ...containsOnlyWords];

  return {
    letter,
    startsWithWords,
    containsOnlyWords,
    mixedWords,
    startsWithCount: startsWithWords.length,
    containsOnlyCount: containsOnlyWords.length,
    mixedCount: mixedWords.length,
    startsWithImageCounts: getImageReadinessCounts(startsWithWords),
    containsOnlyImageCounts: getImageReadinessCounts(containsOnlyWords),
    mixedImageCounts: getImageReadinessCounts(mixedWords),
  };
}

export function getLocaleCoverageSummary(
  locale: SupportedLocale,
): LocaleCoverageSummary {
  const letters = getEnabledLetters(locale);
  const approvedWords = getApprovedWords(locale);
  const letterSummaries = letters.map((letter) =>
    getLetterCoverageSummary(locale, letter, approvedWords),
  );

  return {
    locale,
    letters,
    approvedWords,
    totalApprovedWords: approvedWords.length,
    totalStartsWithAssignments: letterSummaries.reduce(
      (total, summary) => total + summary.startsWithCount,
      0,
    ),
    totalContainsOnlyAssignments: letterSummaries.reduce(
      (total, summary) => total + summary.containsOnlyCount,
      0,
    ),
    imageCounts: getImageReadinessCounts(approvedWords),
    letterSummaries,
  };
}

function wordStartsWithExactLetter(
  locale: SupportedLocale,
  word: ContentWord,
  letter: ContentLetter,
): boolean {
  const target = lowerForLocale(locale, letter.id);

  return getExactMatchValues(locale, word).some((value) =>
    value.startsWith(target),
  );
}

function wordContainsExactLetter(
  locale: SupportedLocale,
  word: ContentWord,
  letter: ContentLetter,
): boolean {
  const target = lowerForLocale(locale, letter.id);

  return getExactMatchValues(locale, word).some((value) =>
    value.includes(target),
  );
}

function getExactMatchValues(
  locale: SupportedLocale,
  word: ContentWord,
): string[] {
  return Array.from(
    new Set(
      [word.word, word.display].map((value) => lowerForLocale(locale, value)),
    ),
  );
}

function lowerForLocale(locale: SupportedLocale, value: string): string {
  return value.toLocaleLowerCase(localeLowercaseTags[locale]);
}
