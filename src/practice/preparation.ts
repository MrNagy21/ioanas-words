import type {
  ContentWord,
  GameplayContent,
  GameplayTarget,
} from "@/content/types";
import { wordStartsWithTarget, wordContainsTarget } from "@/content/matching";
import { getModeWords, getSelectedWords } from "@/game/wheel-setup";
import { getRandomWheelWords } from "@/game/word-selection";
import type { WheelSetupConfig } from "@/game/wheel-setup-storage";

export function buildPracticeContent(
  target: GameplayTarget,
  words: ContentWord[],
): GameplayContent {
  const startsWithWords = words.filter((w) =>
    wordStartsWithTarget("ro", w, target),
  );
  const containsOnlyWords = words.filter(
    (w) =>
      !wordStartsWithTarget("ro", w, target) &&
      wordContainsTarget("ro", w, target),
  );
  const mixedWords = [...startsWithWords, ...containsOnlyWords];
  const count = (words: ContentWord[]) => ({
    total: words.length,
    ready: words.filter((w) => w.imageStatus === "ready").length,
    placeholder: words.filter((w) => w.imageStatus !== "ready").length,
  });
  return {
    target,
    wordPools: {
      target: target.id,
      startsWithWords,
      containsOnlyWords,
      mixedWords,
      imageCounts: {
        startsWith: count(startsWithWords),
        containsOnly: count(containsOnlyWords),
        mixed: count(mixedWords),
      },
    },
  };
}

export function preparePracticeWords(
  content: GameplayContent,
  config: WheelSetupConfig,
) {
  const eligible = getModeWords({
    content,
    locale: "ro",
    mode: config.mode,
    excludedTargetKeys: config.excludedTargetKeys,
  });
  const words =
    config.wordSelectionMode === "custom"
      ? getSelectedWords(eligible, config.selectedWordIds)
      : eligible;
  return getRandomWheelWords({ words, targetWordCount: config.wheelWordCount });
}
