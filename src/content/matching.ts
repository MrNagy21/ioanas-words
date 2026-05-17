import type { SupportedLocale } from "@/i18n/locales";
import type { ContentTarget, ContentWord } from "@/content/types";

export const LOCALE_LOWERCASE_TAGS = {
  ro: "ro-RO",
} satisfies Record<SupportedLocale, string>;

export function wordStartsWithTarget(
  locale: SupportedLocale,
  word: ContentWord,
  target: ContentTarget,
): boolean {
  const targetValue = getContentTargetValue(locale, target);

  return getExactWordMatchValues(locale, word).some((value) =>
    value.startsWith(targetValue),
  );
}

export function wordContainsTarget(
  locale: SupportedLocale,
  word: ContentWord,
  target: ContentTarget,
): boolean {
  const targetValue = getContentTargetValue(locale, target);

  return getExactWordMatchValues(locale, word).some((value) =>
    value.includes(targetValue),
  );
}

export function getExactWordMatchValues(
  locale: SupportedLocale,
  word: ContentWord,
): string[] {
  return Array.from(
    new Set(
      [word.word, word.display].map((value) => lowerForLocale(locale, value)),
    ),
  );
}

export function getContentTargetValue(
  locale: SupportedLocale,
  target: ContentTarget,
): string {
  return lowerForLocale(locale, typeof target === "string" ? target : target.id);
}

export function getLetterRouteSegment(
  locale: SupportedLocale,
  letterId: string,
): string {
  const targetValue = getContentTargetValue(locale, letterId);

  return getRomanianLetterRouteAliases()[targetValue] ?? targetValue;
}

export function getLetterIdFromRouteSegment(
  locale: SupportedLocale,
  routeSegment: string,
): string {
  const targetValue = getContentTargetValue(locale, safeDecode(routeSegment));
  const romanianLetterRouteAliases = getRomanianLetterRouteAliases();
  const exactLetter = Object.entries(romanianLetterRouteAliases).find(
    ([, alias]) => alias === targetValue,
  )?.[0];

  return exactLetter ?? targetValue;
}

function lowerForLocale(locale: SupportedLocale, value: string): string {
  return value.toLocaleLowerCase(LOCALE_LOWERCASE_TAGS[locale]);
}

function getRomanianLetterRouteAliases(): Record<string, string> {
  return {
    î: "i-circ",
    ș: "sh",
    ț: "tz",
  };
}

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
