import assert from "node:assert/strict";
import {
  getDerivedWordPoolsForTarget,
  getEnabledLetters,
  getEnabledPracticeTargets,
  wordContainsTarget,
  wordStartsWithTarget,
} from "@/content/loaders";
import {
  DEFAULT_WORD_INCLUSION_MODE,
  DEFAULT_WHEEL_WORD_COUNT,
  getBoundedWheelWordCount,
  getOffWheelWords,
  getPlayableWords,
  getRandomWheelWords,
  getWheelEmptyStateKind,
  MAX_WHEEL_WORD_COUNT,
  reconcileVisibleWheelWordIds,
  WORD_INCLUSION_MODES,
  type WordInclusionMode,
} from "@/game/word-selection";
import {
  getAvailableWordCountForMode as getSetupAvailableWordCountForMode,
  getModeWords as getSetupModeWords,
  getValidWordIdsForMode as getSetupValidWordIdsForMode,
  getWheelSetupEmptyStateKind,
  resolveWheelSetupConfig,
} from "@/game/wheel-setup";
import type { ContentWord } from "@/content/types";

const enabledRomanianLetters = getEnabledLetters("ro");
const enabledRomanianPracticeTargets = getEnabledPracticeTargets("ro");

assert.deepEqual(
  enabledRomanianLetters.map((letter) => letter.id),
  [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "î",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "ș",
    "t",
    "ț",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
);
assert.equal(getBoundedWheelWordCount(20, 30), MAX_WHEEL_WORD_COUNT);
assert.equal(getBoundedWheelWordCount(DEFAULT_WHEEL_WORD_COUNT, 7), 7);
assert.equal(getBoundedWheelWordCount(0, 7), 1);
assert.equal(getBoundedWheelWordCount(DEFAULT_WHEEL_WORD_COUNT, 0), 0);
assert.equal(getBoundedWheelWordCount(16, 16), MAX_WHEEL_WORD_COUNT);
assert.equal(getBoundedWheelWordCount(30, 20), MAX_WHEEL_WORD_COUNT);
assert.equal(
  getWheelEmptyStateKind({ availableWordCount: 0, visibleWordCount: 0 }),
  "no-content",
);
assert.equal(
  getWheelEmptyStateKind({ availableWordCount: 5, visibleWordCount: 0 }),
  "all-removed",
);
assert.equal(
  getWheelEmptyStateKind({ availableWordCount: 5, visibleWordCount: 1 }),
  null,
);
assert.deepEqual(
  enabledRomanianPracticeTargets.map((target) => target.id),
  ["ce", "ci", "ge", "gi", "che", "chi", "ghe", "ghi"],
);

const smallPool = makeSyntheticWords(3);
const exactMaxPool = makeSyntheticWords(MAX_WHEEL_WORD_COUNT);
const largePool = makeSyntheticWords(MAX_WHEEL_WORD_COUNT + 4);
const readyAndPlaceholderPool = [
  makeSyntheticWord(1, "ready"),
  makeSyntheticWord(2, "placeholder"),
];

assert.equal(
  getRandomWheelWords({
    targetWordCount: DEFAULT_WHEEL_WORD_COUNT,
    words: smallPool,
  }).length,
  smallPool.length,
  "Expected small pools to show all available words",
);
assert.equal(
  getRandomWheelWords({
    targetWordCount: MAX_WHEEL_WORD_COUNT,
    words: exactMaxPool,
  }).length,
  MAX_WHEEL_WORD_COUNT,
  "Expected exact-size pools to fill the wheel without replacement candidates",
);

const largeVisibleWords = getRandomWheelWords({
  targetWordCount: 30,
  words: largePool,
});
const largeVisibleWordIds = largeVisibleWords.map((word) => word.id);

assert.equal(
  largeVisibleWords.length,
  MAX_WHEEL_WORD_COUNT,
  "Expected large pools to be capped by the documented 16-word maximum",
);
assert.equal(
  largeVisibleWordIds.length,
  new Set(largeVisibleWordIds).size,
  "Expected large random subsets to remain duplicate-free",
);
assert.equal(
  getOffWheelWords({
    visibleWordIds: largeVisibleWordIds,
    words: largePool,
  }).length,
  largePool.length - MAX_WHEEL_WORD_COUNT,
  "Expected larger pools to leave eligible off-wheel replacement candidates",
);
assert.equal(
  getOffWheelWords({
    visibleWordIds: exactMaxPool.map((word) => word.id),
    words: exactMaxPool,
  }).length,
  0,
  "Expected exact-size pools to have no replacement candidates",
);
assert.equal(
  getRandomWheelWords({
    currentWordIds: [largePool[0].id],
    targetWordCount: 3,
    words: largePool.slice(1, 4),
  }).some((word) => word.id === largePool[0].id),
  false,
  "Expected random subsets not to re-add unavailable or removed current words",
);
assert.deepEqual(
  getRandomWheelWords({
    targetWordCount: 2,
    words: readyAndPlaceholderPool,
  })
    .map((word) => word.imageStatus)
    .sort(),
  ["placeholder", "ready"],
  "Expected random subsets to preserve canonical ready and placeholder word records",
);

assertVisibleSubsetCountdown({
  expectedRemainingWordCount: 0,
  label: "synthetic large pool",
  removalCount: 15,
  targetWordCount: 15,
  words: makeSyntheticWords(24),
});

for (const letter of enabledRomanianLetters) {
  const wordPools = getDerivedWordPoolsForTarget("ro", letter);

  const startsWithWordIds = wordPools.startsWithWords.map((word) => word.id);
  const defaultPlayableWordIds = getPlayableWords({
    target: letter,
    locale: "ro",
    mode: DEFAULT_WORD_INCLUSION_MODE,
    removedWordIds: [],
    words: wordPools.startsWithWords,
  }).map((word) => word.id);
  const containsOnlyWordIds = wordPools.containsOnlyWords.map(
    (word) => word.id,
  );
  const mixedWordIds = wordPools.mixedWords.map((word) => word.id);

  assert.deepEqual(
    defaultPlayableWordIds,
    startsWithWordIds,
    `Expected default gameplay for ${letter.id} to remain approved starts-with words`,
  );
  assert.deepEqual(
    getPlayableWordIds(letter, "starts-with", wordPools.startsWithWords, []),
    startsWithWordIds,
    `Expected starts-with mode for ${letter.id} to use only starts-with words`,
  );
  assert.deepEqual(
    getPlayableWordIds(
      letter,
      "contains-only",
      wordPools.containsOnlyWords,
      [],
    ),
    containsOnlyWordIds,
    `Expected contains-only mode for ${letter.id} to use only inside/later matches`,
  );
  assert.deepEqual(
    getPlayableWordIds(
      letter,
      "starts-with-or-contains",
      wordPools.mixedWords,
      [],
    ),
    mixedWordIds,
    `Expected mixed mode for ${letter.id} to use the duplicate-free derived mixed pool`,
  );
  assert.ok(
    wordPools.startsWithWords.every((word) =>
      wordStartsWithTarget("ro", word, letter),
    ),
    `Expected all starts-with words for ${letter.id} to start with the selected target`,
  );
  assert.ok(
    wordPools.containsOnlyWords.every(
      (word) =>
        wordContainsTarget("ro", word, letter) &&
        !wordStartsWithTarget("ro", word, letter),
    ),
    `Expected contains-only words for ${letter.id} to contain but not start with the selected target`,
  );
  assert.equal(
    mixedWordIds.length,
    new Set(mixedWordIds).size,
    `Expected mixed mode pool for ${letter.id} to be duplicate-free`,
  );

  const removableWordIds = Array.from(
    new Set(
      [wordPools.startsWithWords[0]?.id, wordPools.containsOnlyWords[0]?.id]
        .filter((wordId): wordId is string => Boolean(wordId)),
    ),
  );

  for (const removableWordId of removableWordIds) {
    for (const mode of WORD_INCLUSION_MODES) {
      const playableIdsAfterRemoval = getPlayableWordIds(
        letter,
        mode,
        getModePool(wordPools, mode),
        [removableWordId],
      );

      assert.equal(
        playableIdsAfterRemoval.includes(removableWordId),
        false,
        `Expected removing ${removableWordId} to remove it from ${mode} for target ${letter.id}`,
      );
      assert.deepEqual(
        getPlayableWordIds(letter, mode, getModePool(wordPools, mode), []),
        getModePool(wordPools, mode).map((word) => word.id),
        `Expected reset to restore removed words in ${mode} for target ${letter.id}`,
      );
    }
  }

  for (const mode of WORD_INCLUSION_MODES) {
    const modeWords = getModePool(wordPools, mode);
    const visibleWords = getRandomWheelWords({
      targetWordCount: 4,
      words: modeWords,
    });
    const visibleWordIds = visibleWords.map((word) => word.id);
    const offWheelWords = getOffWheelWords({
      visibleWordIds,
      words: modeWords,
    });

    assert.equal(
      visibleWords.length,
      getBoundedWheelWordCount(4, modeWords.length),
      `Expected random wheel subset for ${mode} and target ${letter.id} to respect the requested count`,
    );
    assert.equal(
      visibleWordIds.length,
      new Set(visibleWordIds).size,
      `Expected random wheel subset for ${mode} and target ${letter.id} to be duplicate-free`,
    );
    assert.ok(
      visibleWords.every((word) =>
        modeWords.some((modeWord) => modeWord.id === word.id),
      ),
      `Expected random wheel subset for ${mode} and target ${letter.id} to come from the active mode pool`,
    );
    assert.ok(
      offWheelWords.every((word) => !visibleWordIds.includes(word.id)),
      `Expected replacement candidates for ${mode} and target ${letter.id} to exclude visible wheel words`,
    );

    const preservedWords = getRandomWheelWords({
      currentWordIds: visibleWordIds,
      targetWordCount: visibleWords.length,
      words: modeWords,
    });

    assert.deepEqual(
      preservedWords.map((word) => word.id),
      visibleWordIds,
      `Expected stable current wheel subset for ${mode} and target ${letter.id} when still eligible`,
    );
  }
}

const dLetter =
  enabledRomanianLetters.find((letter) => letter.id === "d") ??
  assert.fail("Expected Romanian letter D to be enabled");
const sLetter =
  enabledRomanianLetters.find((letter) => letter.id === "s") ??
  assert.fail("Expected Romanian letter S to be enabled");
const shLetter =
  enabledRomanianLetters.find((letter) => letter.id === "ș") ??
  assert.fail("Expected Romanian letter Ș to be enabled");
const dWordPools = getDerivedWordPoolsForTarget("ro", dLetter);
const sWordPools = getDerivedWordPoolsForTarget("ro", sLetter);
const shWordPools = getDerivedWordPoolsForTarget("ro", shLetter);
const dStartsWithWords = getModePool(dWordPools, "starts-with");
const sMixedWords = getModePool(sWordPools, "starts-with-or-contains");
const shMixedWords = getModePool(shWordPools, "starts-with-or-contains");

assert.equal(
  dStartsWithWords.length,
  25,
  "Expected D starts-with mode to match the current reset-regression fixture pool",
);
assert.ok(
  sMixedWords.length > 15,
  "Expected S mixed mode to remain a large pool for the reset-regression fixture",
);
assert.ok(
  shMixedWords.length > 15,
  "Expected Ș mixed mode to remain a large pool for the reset-regression fixture",
);
assertVisibleSubsetCountdown({
  expectedRemainingWordCount: 1,
  label: "D starts-with visible subset pool",
  removalCount: 14,
  targetWordCount: 15,
  words: dStartsWithWords,
});
assertVisibleSubsetCountdown({
  expectedRemainingWordCount: 3,
  label: "S mixed large pool",
  removalCount: 12,
  targetWordCount: 15,
  words: sMixedWords,
});
assertVisibleSubsetCountdown({
  expectedRemainingWordCount: 3,
  label: "Ș mixed large pool",
  removalCount: 12,
  targetWordCount: 15,
  words: shMixedWords,
});

const expectedPracticeTargetMixedCounts = {
  ce: 20,
  ci: 21,
  ge: 17,
  gi: 16,
  che: 17,
  chi: 17,
  ghe: 16,
  ghi: 15,
} as const;

for (const target of enabledRomanianPracticeTargets) {
  const wordPools = getDerivedWordPoolsForTarget("ro", target);
  const mixedWordIds = wordPools.mixedWords.map((word) => word.id);

  assert.equal(
    mixedWordIds.length,
    expectedPracticeTargetMixedCounts[
      target.id as keyof typeof expectedPracticeTargetMixedCounts
    ],
    `Expected practice target ${target.id} to match the current mixed pool target`,
  );
  assert.deepEqual(
    getPlayableWords({
      target,
      locale: "ro",
      mode: "starts-with-or-contains",
      removedWordIds: [],
      words: wordPools.mixedWords,
    }).map((word) => word.id),
    mixedWordIds,
    `Expected mixed gameplay for practice target ${target.id} to use its derived pool`,
  );
  assert.ok(
    wordPools.mixedWords.every((word) => wordContainsTarget("ro", word, target)),
    `Expected every mixed word for practice target ${target.id} to contain the sequence`,
  );
  assert.equal(
    mixedWordIds.length,
    new Set(mixedWordIds).size,
    `Expected practice target ${target.id} mixed pool to be duplicate-free`,
  );
}

const fLetter =
  enabledRomanianLetters.find((letter) => letter.id === "f") ??
  assert.fail("Expected Romanian letter F to be enabled");
const fContent = {
  target: fLetter,
  wordPools: getDerivedWordPoolsForTarget("ro", fLetter),
};
const fStartsWithWords = getSetupModeWords({
  content: fContent,
  locale: "ro",
  mode: "starts-with",
});
const fStartsWithWithoutR = getSetupModeWords({
  content: fContent,
  excludedTargetKeys: ["letter:r"],
  locale: "ro",
  mode: "starts-with",
});
const fStartsWithWordWithR =
  fStartsWithWords.find((word) => wordContainsTarget("ro", word, "r")) ??
  assert.fail("Expected at least one F starts-with word containing R");

assert.equal(
  fStartsWithWithoutR.length,
  10,
  "Expected setup mode words to apply exclusions after inclusion mode",
);
assert.ok(
  fStartsWithWithoutR.every((word) => !wordContainsTarget("ro", word, "r")),
  "Expected setup mode words to remove every exact R match",
);
assert.equal(
  getSetupAvailableWordCountForMode({
    content: fContent,
    excludedTargetKeys: ["letter:r"],
    locale: "ro",
    mode: "starts-with",
    selectedWordIds: [],
    wordSelectionMode: "all",
  }),
  10,
  "Expected all-words availability to count the filtered eligible pool",
);
assert.deepEqual(
  getSetupValidWordIdsForMode({
    content: fContent,
    excludedTargetKeys: ["letter:r"],
    locale: "ro",
    mode: "starts-with",
    wordIds: [
      fStartsWithWithoutR[0]?.id ?? assert.fail("Expected filtered F word"),
      fStartsWithWordWithR.id,
    ],
  }),
  [fStartsWithWithoutR[0].id],
  "Expected manual selected word IDs to clamp to the filtered eligible pool",
);

const resolvedFilteredSetup = resolveWheelSetupConfig({
  config: {
    mode: "starts-with",
    excludedTargetKeys: ["letter:r"],
    wheelWordCount: 16,
    wordSelectionMode: "custom",
    selectedWordIds: [fStartsWithWithoutR[0].id, fStartsWithWordWithR.id],
  },
  content: fContent,
  locale: "ro",
});

assert.deepEqual(resolvedFilteredSetup.excludedTargetKeys, ["letter:r"]);
assert.deepEqual(resolvedFilteredSetup.selectedWordIds, [
  fStartsWithWithoutR[0].id,
]);
assert.equal(resolvedFilteredSetup.wordSelectionMode, "custom");
assert.equal(
  resolvedFilteredSetup.wheelWordCount,
  1,
  "Expected wheel count to clamp to the filtered custom selection count",
);

const resolvedInvalidCustomSetup = resolveWheelSetupConfig({
  config: {
    mode: "starts-with",
    excludedTargetKeys: ["letter:r"],
    wheelWordCount: 10,
    wordSelectionMode: "custom",
    selectedWordIds: [fStartsWithWordWithR.id],
  },
  content: fContent,
  locale: "ro",
});

assert.equal(
  resolvedInvalidCustomSetup.wordSelectionMode,
  "all",
  "Expected custom setup to fall back to all words when exclusions invalidate every selected word",
);
assert.deepEqual(resolvedInvalidCustomSetup.selectedWordIds, []);
assert.equal(resolvedInvalidCustomSetup.wheelWordCount, 10);
assert.equal(
  getWheelSetupEmptyStateKind({
    baseWordCount: fStartsWithWords.length,
    excludedTargetKeys: ["letter:r"],
    filteredWordCount: fStartsWithWithoutR.length,
  }),
  null,
);
assert.equal(
  getWheelSetupEmptyStateKind({
    baseWordCount: 0,
    excludedTargetKeys: ["letter:r"],
    filteredWordCount: 0,
  }),
  "no-mode-words",
);
assert.equal(
  getWheelSetupEmptyStateKind({
    baseWordCount: 2,
    excludedTargetKeys: ["letter:r"],
    filteredWordCount: 0,
  }),
  "all-excluded",
);

function getPlayableWordIds(
  letter: (typeof enabledRomanianLetters)[number],
  mode: WordInclusionMode,
  words: Parameters<typeof getPlayableWords>[0]["words"],
  removedWordIds: readonly string[],
) {
  return getPlayableWords({
    target: letter,
    locale: "ro",
    mode,
    removedWordIds,
    words,
  }).map((word) => word.id);
}

function getModePool(
  wordPools: ReturnType<typeof getDerivedWordPoolsForTarget>,
  mode: WordInclusionMode,
) {
  if (mode === "contains-only") {
    return wordPools.containsOnlyWords;
  }

  if (mode === "starts-with-or-contains") {
    return wordPools.mixedWords;
  }

  return wordPools.startsWithWords;
}

function assertVisibleSubsetCountdown({
  expectedRemainingWordCount,
  label,
  removalCount,
  targetWordCount,
  words,
}: Readonly<{
  expectedRemainingWordCount: number;
  label: string;
  removalCount: number;
  targetWordCount: number;
  words: readonly ContentWord[];
}>) {
  let removedWordIds: string[] = [];
  let activeWords = words;
  let visibleWordIds = reconcileVisibleWheelWordIds({
    activeWords,
    existingWordIds: null,
    targetWordCount,
  });
  const initialVisibleWordIds = new Set(visibleWordIds);

  assert.equal(
    visibleWordIds.length,
    getBoundedWheelWordCount(targetWordCount, words.length),
    `Expected ${label} to initialize the requested visible subset`,
  );

  for (let removalIndex = 0; removalIndex < removalCount; removalIndex += 1) {
    const selectedWordId =
      visibleWordIds[0] ??
      assert.fail(`Expected ${label} to have a visible word to remove`);

    removedWordIds = [...removedWordIds, selectedWordId];
    visibleWordIds = visibleWordIds.filter(
      (wordId) => wordId !== selectedWordId,
    );
    activeWords = words.filter((word) => !removedWordIds.includes(word.id));
    visibleWordIds = reconcileVisibleWheelWordIds({
      activeWords,
      existingWordIds: visibleWordIds,
      targetWordCount,
    });

    assert.equal(
      visibleWordIds.length,
      Math.max(
        0,
        getBoundedWheelWordCount(targetWordCount, words.length) -
          removalIndex -
          1,
      ),
      `Expected ${label} removal ${removalIndex + 1} not to refill hidden off-wheel words`,
    );
    assert.ok(
      visibleWordIds.every((wordId) => initialVisibleWordIds.has(wordId)),
      `Expected ${label} to keep the visible subset from refilling with hidden words`,
    );
  }

  assert.equal(
    visibleWordIds.length,
    expectedRemainingWordCount,
    `Expected ${label} to count down to ${expectedRemainingWordCount} visible words`,
  );
}

function makeSyntheticWords(count: number): ContentWord[] {
  return Array.from({ length: count }, (_, index) =>
    makeSyntheticWord(index + 1, "ready"),
  );
}

function makeSyntheticWord(
  index: number,
  imageStatus: ContentWord["imageStatus"],
): ContentWord {
  return {
    id: `ro-test-${index}`,
    word: `test${index}`,
    display: `test${index}`,
    normalized: `test${index}`,
    partOfSpeech: "noun",
    difficulty: 1,
    ageBand: "4-6",
    category: "household",
    image: `/images/ro/test/ro-test-${index}.webp`,
    imageStatus,
    alt: `Imagine test ${index}`,
    source: ["manual"],
    license: "app-owned",
    status: "approved",
  };
}
