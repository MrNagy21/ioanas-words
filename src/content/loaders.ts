import lettersRoJson from "../../content/ro/letters.json";
import wordsAJson from "../../content/ro/words-a.json";
import wordsBJson from "../../content/ro/words-b.json";
import wordsCJson from "../../content/ro/words-c.json";
import wordsDJson from "../../content/ro/words-d.json";
import wordsFJson from "../../content/ro/words-f.json";
import wordsGJson from "../../content/ro/words-g.json";
import wordsJJson from "../../content/ro/words-j.json";
import wordsMJson from "../../content/ro/words-m.json";
import wordsPJson from "../../content/ro/words-p.json";
import wordsRJson from "../../content/ro/words-r.json";
import wordsSJson from "../../content/ro/words-s.json";
import wordsShJson from "../../content/ro/words-ș.json";
import wordsTzJson from "../../content/ro/words-ț.json";
import wordsUJson from "../../content/ro/words-u.json";
import wordsZJson from "../../content/ro/words-z.json";
import type { SupportedLocale } from "@/i18n/locales";
import type {
  ContentLetter,
  ContentTarget,
  ContentWord,
  DerivedWordPoolImageCounts,
  DerivedWordPools,
  ImageReadinessCounts,
  LetterContent,
  LetterCoverageSummary,
  LetterManifest,
  LocaleCoverageSummary,
  WordManifest,
} from "@/content/types";
import {
  getContentTargetValue,
  LOCALE_LOWERCASE_TAGS,
  wordContainsTarget,
  wordStartsWithTarget,
} from "@/content/matching";

export {
  getExactWordMatchValues,
  wordContainsTarget,
  wordStartsWithTarget,
} from "@/content/matching";

const letterManifests = {
  ro: lettersRoJson as LetterManifest,
} satisfies Record<SupportedLocale, LetterManifest>;

const wordManifestRegistry: Record<
  SupportedLocale,
  Partial<Record<string, WordManifest>>
> = {
  ro: {
    a: wordsAJson as WordManifest,
    b: wordsBJson as WordManifest,
    c: wordsCJson as WordManifest,
    d: wordsDJson as WordManifest,
    f: wordsFJson as WordManifest,
    g: wordsGJson as WordManifest,
    j: wordsJJson as WordManifest,
    m: wordsMJson as WordManifest,
    p: wordsPJson as WordManifest,
    r: wordsRJson as WordManifest,
    s: wordsSJson as WordManifest,
    ș: wordsShJson as WordManifest,
    ț: wordsTzJson as WordManifest,
    u: wordsUJson as WordManifest,
    z: wordsZJson as WordManifest,
  },
};

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
  return getWordManifest(locale, letterId)?.words ?? [];
}

export function getWordManifest(
  locale: SupportedLocale,
  letterId: string,
): WordManifest | null {
  const targetLetterId = getContentTargetValue(locale, letterId);

  return (
    getWordManifests(locale).find(
      (manifest) => manifest.letter === targetLetterId,
    ) ?? null
  );
}

export function getWordManifests(locale: SupportedLocale): WordManifest[] {
  const manifestsByLetter = wordManifestRegistry[locale];
  const letters = getLetters(locale);
  const letterIds = new Set(letters.map((letter) => letter.id));
  const manifestsInLetterOrder = letters.flatMap((letter) => {
    const manifest = manifestsByLetter[letter.id];

    return manifest ? [cloneWordManifest(manifest)] : [];
  });
  const extraImportedManifests = Object.entries(manifestsByLetter)
    .filter(([letterId]) => !letterIds.has(letterId))
    .sort(([firstLetter], [secondLetter]) =>
      firstLetter.localeCompare(secondLetter, LOCALE_LOWERCASE_TAGS[locale]),
    )
    .flatMap(([, manifest]) => (manifest ? [cloneWordManifest(manifest)] : []));

  return [...manifestsInLetterOrder, ...extraImportedManifests];
}

export function getAllWords(locale: SupportedLocale): ContentWord[] {
  return getWordManifests(locale).flatMap((manifest) => manifest.words);
}

export function getApprovedWords(locale: SupportedLocale): ContentWord[] {
  return getAllWords(locale).filter((word) => word.status === "approved");
}

export function getLettersMissingWordManifests(
  locale: SupportedLocale,
): ContentLetter[] {
  const importedManifestLetters = new Set(
    getWordManifests(locale).map((manifest) => manifest.letter),
  );

  return getEnabledLetters(locale).filter(
    (letter) => !importedManifestLetters.has(letter.id),
  );
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
  return getWordsStartingWithTarget(locale, letter, words);
}

export function getContainsOnlyWordsForLetter(
  locale: SupportedLocale,
  letter: ContentLetter,
  words: readonly ContentWord[] = getApprovedWords(locale),
): ContentWord[] {
  return getWordsContainingOnlyTarget(locale, letter, words);
}

export function getMixedWordsForLetter(
  locale: SupportedLocale,
  letter: ContentLetter,
  words: readonly ContentWord[] = getApprovedWords(locale),
): ContentWord[] {
  return getMixedWordsForTarget(locale, letter, words);
}

export function getWordsStartingWithTarget(
  locale: SupportedLocale,
  target: ContentTarget,
  words: readonly ContentWord[] = getApprovedWords(locale),
): ContentWord[] {
  return uniqueWordsById(
    words.filter((word) => wordStartsWithTarget(locale, word, target)),
  );
}

export function getWordsContainingOnlyTarget(
  locale: SupportedLocale,
  target: ContentTarget,
  words: readonly ContentWord[] = getApprovedWords(locale),
): ContentWord[] {
  return uniqueWordsById(
    words.filter(
      (word) =>
        wordContainsTarget(locale, word, target) &&
        !wordStartsWithTarget(locale, word, target),
    ),
  );
}

export function getMixedWordsForTarget(
  locale: SupportedLocale,
  target: ContentTarget,
  words: readonly ContentWord[] = getApprovedWords(locale),
): ContentWord[] {
  const startsWithWords = getWordsStartingWithTarget(locale, target, words);
  const containsOnlyWords = getWordsContainingOnlyTarget(locale, target, words);

  return uniqueWordsById([...startsWithWords, ...containsOnlyWords]);
}

export function getDerivedWordPoolsForTarget(
  locale: SupportedLocale,
  target: ContentTarget,
  words: readonly ContentWord[] = getApprovedWords(locale),
): DerivedWordPools {
  const targetValue = getContentTargetValue(locale, target);
  const startsWithWords = getWordsStartingWithTarget(
    locale,
    targetValue,
    words,
  );
  const containsOnlyWords = getWordsContainingOnlyTarget(
    locale,
    targetValue,
    words,
  );
  const mixedWords = uniqueWordsById([
    ...startsWithWords,
    ...containsOnlyWords,
  ]);

  return {
    target: targetValue,
    startsWithWords,
    containsOnlyWords,
    mixedWords,
    imageCounts: getDerivedWordPoolImageCounts({
      startsWithWords,
      containsOnlyWords,
      mixedWords,
    }),
  };
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
  letter: ContentTarget,
  words: readonly ContentWord[] = getApprovedWords(locale),
): LetterCoverageSummary {
  const resolvedLetter = getTargetLetter(locale, letter);
  const { startsWithWords, containsOnlyWords, mixedWords, imageCounts } =
    getDerivedWordPoolsForTarget(locale, resolvedLetter, words);

  return {
    letter: resolvedLetter,
    startsWithWords,
    containsOnlyWords,
    mixedWords,
    startsWithCount: startsWithWords.length,
    containsOnlyCount: containsOnlyWords.length,
    mixedCount: mixedWords.length,
    imageCounts,
    startsWithImageCounts: imageCounts.startsWith,
    containsOnlyImageCounts: imageCounts.containsOnly,
    mixedImageCounts: imageCounts.mixed,
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

function getTargetLetter(
  locale: SupportedLocale,
  target: ContentTarget,
): ContentLetter {
  if (typeof target !== "string") {
    return target;
  }

  const targetValue = getContentTargetValue(locale, target);
  const letter = getLetter(locale, targetValue);

  if (letter) {
    return letter;
  }

  return {
    id: targetValue,
    label: target,
    enabled: false,
    wordFile: "",
    sortOrder: Number.MAX_SAFE_INTEGER,
  };
}

function cloneWordManifest(manifest: WordManifest): WordManifest {
  return {
    ...manifest,
    words: [...manifest.words],
  };
}

function getDerivedWordPoolImageCounts({
  startsWithWords,
  containsOnlyWords,
  mixedWords,
}: Pick<
  DerivedWordPools,
  "startsWithWords" | "containsOnlyWords" | "mixedWords"
>): DerivedWordPoolImageCounts {
  return {
    startsWith: getImageReadinessCounts(startsWithWords),
    containsOnly: getImageReadinessCounts(containsOnlyWords),
    mixed: getImageReadinessCounts(mixedWords),
  };
}

function uniqueWordsById(words: readonly ContentWord[]): ContentWord[] {
  const seenWordIds = new Set<string>();
  const uniqueWords: ContentWord[] = [];

  for (const word of words) {
    if (seenWordIds.has(word.id)) {
      continue;
    }

    seenWordIds.add(word.id);
    uniqueWords.push(word);
  }

  return uniqueWords;
}
