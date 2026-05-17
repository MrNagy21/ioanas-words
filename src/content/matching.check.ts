import assert from "node:assert/strict";
import {
  getDerivedWordPoolsForTarget,
  getEnabledLetters,
  getLocaleCoverageSummary,
  getWordsContainingOnlyTarget,
  getWordsStartingWithTarget,
  wordContainsTarget,
  wordStartsWithTarget,
} from "@/content/loaders";
import type { ContentWord, ImageReadinessCounts } from "@/content/types";

const fixtures = [
  makeWord("ro-s-sarpe", "șarpe", "șarpe", "sarpe"),
  makeWord("ro-m-masina", "mașină", "mașină", "masina"),
  makeWord("ro-t-tantar", "țânțar", "țânțar", "tantar"),
  makeWord("ro-a-aluna", "alună", "alună", "aluna"),
  makeWord("ro-aa-alba", "ălbină", "ălbină", "albina"),
  makeWord("ro-aa-arc", "ârc", "ârc", "arc"),
  makeWord("ro-i-inima", "inimă", "inimă", "inima"),
  makeWord("ro-ii-inger", "înger", "înger", "inger"),
] as const satisfies readonly ContentWord[];

assert.equal(wordStartsWithTarget("ro", fixtures[0], "s"), false);
assert.equal(wordStartsWithTarget("ro", fixtures[0], "ș"), true);
assert.equal(wordContainsTarget("ro", fixtures[1], "s"), false);
assert.equal(wordContainsTarget("ro", fixtures[1], "ș"), true);
assert.equal(wordStartsWithTarget("ro", fixtures[2], "t"), false);
assert.equal(wordStartsWithTarget("ro", fixtures[2], "ț"), true);
assert.equal(wordStartsWithTarget("ro", fixtures[3], "a"), true);
assert.equal(wordStartsWithTarget("ro", fixtures[3], "ă"), false);
assert.equal(wordStartsWithTarget("ro", fixtures[4], "ă"), true);
assert.equal(wordStartsWithTarget("ro", fixtures[4], "â"), false);
assert.equal(wordStartsWithTarget("ro", fixtures[5], "â"), true);
assert.equal(wordStartsWithTarget("ro", fixtures[6], "i"), true);
assert.equal(wordStartsWithTarget("ro", fixtures[6], "î"), false);
assert.equal(wordStartsWithTarget("ro", fixtures[7], "î"), true);

assert.deepEqual(
  getWordsStartingWithTarget("ro", "ș", fixtures).map((word) => word.id),
  ["ro-s-sarpe"],
);
assert.deepEqual(
  getWordsContainingOnlyTarget("ro", "ș", fixtures).map((word) => word.id),
  ["ro-m-masina"],
);

const pools = getDerivedWordPoolsForTarget("ro", "ș", [
  fixtures[0],
  fixtures[0],
  fixtures[1],
  fixtures[1],
]);

assert.deepEqual(
  pools.mixedWords.map((word) => word.id),
  ["ro-s-sarpe", "ro-m-masina"],
);
assert.deepEqual(pools.imageCounts, {
  startsWith: { total: 1, ready: 0, placeholder: 1 },
  containsOnly: { total: 1, ready: 0, placeholder: 1 },
  mixed: { total: 2, ready: 0, placeholder: 2 },
});

const enabledRomanianLetters = getEnabledLetters("ro");
const coverage = getLocaleCoverageSummary("ro");

assert.equal(coverage.locale, "ro");
assert.deepEqual(
  coverage.letters.map((letter) => letter.id),
  enabledRomanianLetters.map((letter) => letter.id),
);
assert.equal(coverage.totalApprovedWords, coverage.approvedWords.length);
assert.equal(
  coverage.totalStartsWithAssignments,
  coverage.letterSummaries.reduce(
    (total, summary) => total + summary.startsWithCount,
    0,
  ),
);
assert.equal(
  coverage.totalContainsOnlyAssignments,
  coverage.letterSummaries.reduce(
    (total, summary) => total + summary.containsOnlyCount,
    0,
  ),
);
assertImageCounts(coverage.imageCounts, coverage.approvedWords);

for (const summary of coverage.letterSummaries) {
  const derivedPools = getDerivedWordPoolsForTarget("ro", summary.letter);

  assert.deepEqual(
    summary.startsWithWords.map((word) => word.id),
    derivedPools.startsWithWords.map((word) => word.id),
    `Expected coverage starts-with words for ${summary.letter.id} to match derived pools`,
  );
  assert.deepEqual(
    summary.containsOnlyWords.map((word) => word.id),
    derivedPools.containsOnlyWords.map((word) => word.id),
    `Expected coverage contains-only words for ${summary.letter.id} to match derived pools`,
  );
  assert.deepEqual(
    summary.mixedWords.map((word) => word.id),
    derivedPools.mixedWords.map((word) => word.id),
    `Expected coverage mixed words for ${summary.letter.id} to match derived pools`,
  );
  assert.equal(summary.startsWithCount, summary.startsWithWords.length);
  assert.equal(summary.containsOnlyCount, summary.containsOnlyWords.length);
  assert.equal(summary.mixedCount, summary.mixedWords.length);
  assert.deepEqual(summary.imageCounts, derivedPools.imageCounts);
  assert.deepEqual(
    summary.startsWithImageCounts,
    summary.imageCounts.startsWith,
  );
  assert.deepEqual(
    summary.containsOnlyImageCounts,
    summary.imageCounts.containsOnly,
  );
  assert.deepEqual(summary.mixedImageCounts, summary.imageCounts.mixed);
}

function makeWord(
  id: string,
  word: string,
  display: string,
  normalized: string,
): ContentWord {
  return {
    id,
    word,
    display,
    normalized,
    partOfSpeech: "noun",
    difficulty: 1,
    ageBand: "4-6",
    category: "household",
    image: `/images/ro/test/${id}.webp`,
    imageStatus: "placeholder",
    alt: display,
    source: ["manual"],
    license: "app-owned",
    status: "approved",
  };
}

function assertImageCounts(
  counts: ImageReadinessCounts,
  words: readonly ContentWord[],
) {
  assert.equal(counts.total, words.length);
  assert.equal(
    counts.ready,
    words.filter((word) => word.imageStatus === "ready").length,
  );
  assert.equal(
    counts.placeholder,
    words.filter((word) => word.imageStatus === "placeholder").length,
  );
}
