import lettersRoJson from "../../content/ro/letters.json";
import wordsAJson from "../../content/ro/words-a.json";
import wordsCJson from "../../content/ro/words-c.json";
import wordsMJson from "../../content/ro/words-m.json";
import wordsPJson from "../../content/ro/words-p.json";
import type { SupportedLocale } from "@/i18n/locales";
import type {
  ContentLetter,
  ContentWord,
  LetterContent,
  LetterManifest,
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
