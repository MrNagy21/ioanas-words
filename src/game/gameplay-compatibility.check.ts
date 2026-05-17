import assert from "node:assert/strict";
import {
  getDerivedWordPoolsForTarget,
  getEnabledLetters,
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
  WORD_INCLUSION_MODES,
  type WordInclusionMode,
} from "@/game/word-selection";
import type { ContentWord } from "@/content/types";

const enabledRomanianLetters = getEnabledLetters("ro");

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
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "ș",
    "t",
    "ț",
    "u",
    "v",
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

for (const letter of enabledRomanianLetters) {
  const wordPools = getDerivedWordPoolsForTarget("ro", letter);

  const startsWithWordIds = wordPools.startsWithWords.map((word) => word.id);
  const defaultPlayableWordIds = getPlayableWords({
    letter,
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

function getPlayableWordIds(
  letter: (typeof enabledRomanianLetters)[number],
  mode: WordInclusionMode,
  words: Parameters<typeof getPlayableWords>[0]["words"],
  removedWordIds: readonly string[],
) {
  return getPlayableWords({
    letter,
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
