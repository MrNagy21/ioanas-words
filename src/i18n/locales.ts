export const DEFAULT_LOCALE = "ro";

export const SUPPORTED_LOCALES = [DEFAULT_LOCALE] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const ROMANIAN_PLACEHOLDER_LETTERS = [
  { id: "a", label: "A" },
  { id: "ă", label: "Ă" },
  { id: "â", label: "Â" },
  { id: "b", label: "B" },
  { id: "c", label: "C" },
  { id: "d", label: "D" },
  { id: "e", label: "E" },
  { id: "f", label: "F" },
  { id: "g", label: "G" },
  { id: "h", label: "H" },
  { id: "i", label: "I" },
  { id: "î", label: "Î" },
  { id: "j", label: "J" },
  { id: "k", label: "K" },
  { id: "l", label: "L" },
  { id: "m", label: "M" },
  { id: "n", label: "N" },
  { id: "o", label: "O" },
  { id: "p", label: "P" },
  { id: "q", label: "Q" },
  { id: "r", label: "R" },
  { id: "s", label: "S" },
  { id: "ș", label: "Ș" },
  { id: "t", label: "T" },
  { id: "ț", label: "Ț" },
  { id: "u", label: "U" },
  { id: "v", label: "V" },
  { id: "w", label: "W" },
  { id: "x", label: "X" },
  { id: "y", label: "Y" },
  { id: "z", label: "Z" },
] as const;

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}
