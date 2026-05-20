import {
  getEnabledLetters,
  getEnabledPracticeTargets,
} from "@/content/loaders";
import { getContentTargetValue, wordContainsTarget } from "@/content/matching";
import type { ContentWord, GameplayTarget } from "@/content/types";
import type { SupportedLocale } from "@/i18n/locales";

export type ExclusionTargetKind = "letter" | "sequence";

export type ExclusionTarget = Readonly<{
  key: string;
  kind: ExclusionTargetKind;
  id: string;
  label: string;
}>;

const ROMANIAN_EXCLUSION_LETTERS = [
  "A",
  "Ă",
  "Â",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "Î",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "Ș",
  "T",
  "Ț",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
] as const;

export function getSelectableExclusionTargets({
  activeTarget,
  locale,
}: Readonly<{
  activeTarget?: GameplayTarget | null;
  locale: SupportedLocale;
}>): ExclusionTarget[] {
  const activeTargetKey = activeTarget
    ? getExclusionTargetKey(locale, activeTarget)
    : null;

  return getExclusionTargets(locale).filter(
    (target) => target.key !== activeTargetKey,
  );
}

export function filterWordsByExcludedTargetKeys({
  excludedTargetKeys,
  locale,
  words,
}: Readonly<{
  excludedTargetKeys: readonly string[];
  locale: SupportedLocale;
  words: readonly ContentWord[];
}>): ContentWord[] {
  const excludedTargets = getExclusionTargetsForKeys(
    locale,
    excludedTargetKeys,
  );

  if (excludedTargets.length === 0) {
    return [...words];
  }

  return words.filter(
    (word) =>
      !excludedTargets.some((target) =>
        wordContainsTarget(locale, word, target.id),
      ),
  );
}

export function getExclusionTargetsForKeys(
  locale: SupportedLocale,
  targetKeys: readonly string[],
): ExclusionTarget[] {
  const targetsByKey = new Map(
    getExclusionTargets(locale).map((target) => [target.key, target]),
  );
  const seenKeys = new Set<string>();
  const targets: ExclusionTarget[] = [];

  for (const key of targetKeys) {
    const target = targetsByKey.get(key);

    if (!target || seenKeys.has(target.key)) {
      continue;
    }

    seenKeys.add(target.key);
    targets.push(target);
  }

  return targets;
}

export function getExclusionTargets(
  locale: SupportedLocale,
): ExclusionTarget[] {
  return [
    ...getExclusionLetterTargets(locale),
    ...getEnabledPracticeTargets(locale).map((target) => ({
      key: getExclusionTargetKey(locale, target),
      kind: "sequence" as const,
      id: getContentTargetValue(locale, target),
      label: target.label,
    })),
  ];
}

function getExclusionLetterTargets(locale: SupportedLocale) {
  if (locale === "ro") {
    return ROMANIAN_EXCLUSION_LETTERS.map((label) => ({
      key: `letter:${getContentTargetValue(locale, label)}`,
      kind: "letter" as const,
      id: getContentTargetValue(locale, label),
      label,
    }));
  }

  return getEnabledLetters(locale).map((letter) => ({
    key: getExclusionTargetKey(locale, letter),
    kind: "letter" as const,
    id: getContentTargetValue(locale, letter),
    label: letter.label,
  }));
}

export function getExclusionTargetKey(
  locale: SupportedLocale,
  target: GameplayTarget,
): string {
  return `${getExclusionTargetKind(target)}:${getContentTargetValue(
    locale,
    target,
  )}`;
}

function getExclusionTargetKind(target: GameplayTarget): ExclusionTargetKind {
  return "kind" in target && target.kind === "sequence" ? "sequence" : "letter";
}
