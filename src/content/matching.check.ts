import assert from "node:assert/strict";
import {
  filterWordsByExcludedTargetKeys,
  getExclusionTargets,
  getExclusionTargetsForKeys,
  getSelectableExclusionTargets,
} from "@/content/exclusions";
import {
  getDerivedWordPoolsForTarget,
  getEnabledLetters,
  getEnabledPracticeTargets,
  getLetterIdFromRouteSegment,
  getLetterRouteSegment,
  getLocaleCoverageSummary,
  getPracticeTargetCoverageSummaries,
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
assert.equal(getLetterRouteSegment("ro", "ș"), "sh");
assert.equal(getLetterRouteSegment("ro", "ț"), "tz");
assert.equal(getLetterRouteSegment("ro", "î"), "i-circ");
assert.equal(getLetterRouteSegment("ro", "s"), "s");
assert.equal(getLetterIdFromRouteSegment("ro", "sh"), "ș");
assert.equal(getLetterIdFromRouteSegment("ro", "tz"), "ț");
assert.equal(getLetterIdFromRouteSegment("ro", "i-circ"), "î");
assert.equal(getLetterIdFromRouteSegment("ro", "%C8%99"), "ș");
assert.equal(getLetterIdFromRouteSegment("ro", "s"), "s");

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
const enabledRomanianPracticeTargets = getEnabledPracticeTargets("ro");
const romanianExclusionTargets = getExclusionTargets("ro");
const romanianExclusionLetterKeys = [
  "letter:a",
  "letter:ă",
  "letter:â",
  "letter:b",
  "letter:c",
  "letter:d",
  "letter:e",
  "letter:f",
  "letter:g",
  "letter:h",
  "letter:i",
  "letter:î",
  "letter:j",
  "letter:k",
  "letter:l",
  "letter:m",
  "letter:n",
  "letter:o",
  "letter:p",
  "letter:q",
  "letter:r",
  "letter:s",
  "letter:ș",
  "letter:t",
  "letter:ț",
  "letter:u",
  "letter:v",
  "letter:w",
  "letter:x",
  "letter:y",
  "letter:z",
] as const;
const coverage = getLocaleCoverageSummary("ro");
const practiceCoverage = getPracticeTargetCoverageSummaries("ro");

assert.deepEqual(
  enabledRomanianPracticeTargets.map((target) => target.routeSegment),
  ["ce", "ci", "ge", "gi", "che", "chi", "ghe", "ghi"],
);
assert.deepEqual(
  romanianExclusionTargets.map((target) => target.key),
  [
    ...romanianExclusionLetterKeys,
    ...enabledRomanianPracticeTargets.map((target) => `sequence:${target.id}`),
  ],
);
assert.equal(enabledRomanianLetters.some((letter) => letter.id === "ă"), false);
assert.ok(romanianExclusionTargets.some((target) => target.key === "letter:ă"));
assert.ok(romanianExclusionTargets.some((target) => target.key === "letter:â"));
assert.ok(romanianExclusionTargets.some((target) => target.key === "letter:x"));
assert.ok(romanianExclusionTargets.some((target) => target.key === "letter:q"));
assert.ok(
  romanianExclusionTargets.every(
    (target) => target.kind === "letter" || target.kind === "sequence",
  ),
);
assert.deepEqual(
  getSelectableExclusionTargets({
    activeTarget:
      enabledRomanianLetters.find((letter) => letter.id === "f") ?? null,
    locale: "ro",
  }).map((target) => target.key),
  romanianExclusionTargets
    .map((target) => target.key)
    .filter((key) => key !== "letter:f"),
);
assert.deepEqual(
  getSelectableExclusionTargets({
    activeTarget:
      enabledRomanianPracticeTargets.find((target) => target.id === "ghe") ??
      null,
    locale: "ro",
  }).map((target) => target.key),
  romanianExclusionTargets
    .map((target) => target.key)
    .filter((key) => key !== "sequence:ghe"),
);
assert.deepEqual(
  getExclusionTargetsForKeys("ro", [
    "letter:r",
    "letter:missing",
    "sequence:nope",
    "letter:r",
  ]).map((target) => target.key),
  ["letter:r"],
);

const fStartsWithWithoutR = filterWordsByExcludedTargetKeys({
  excludedTargetKeys: ["letter:r", "letter:missing"],
  locale: "ro",
  words: getDerivedWordPoolsForTarget("ro", "f").startsWithWords,
});

assert.equal(fStartsWithWithoutR.length, 7);
assert.ok(
  fStartsWithWithoutR.every((word) => !wordContainsTarget("ro", word, "r")),
  "Expected F starts-with words excluding R to leave only words without exact r",
);

const exactDiacriticExclusionFixtures = [
  makeWord("ro-test-sac", "sac", "sac", "sac"),
  makeWord("ro-test-sarpe", "șarpe", "șarpe", "sarpe"),
] as const satisfies readonly ContentWord[];

assert.deepEqual(
  filterWordsByExcludedTargetKeys({
    excludedTargetKeys: ["letter:s"],
    locale: "ro",
    words: exactDiacriticExclusionFixtures,
  }).map((word) => word.id),
  ["ro-test-sarpe"],
);

for (const target of enabledRomanianPracticeTargets) {
  const mixedWords = getDerivedWordPoolsForTarget("ro", target).mixedWords;
  const filteredWords = filterWordsByExcludedTargetKeys({
    excludedTargetKeys: [`sequence:${target.id}`],
    locale: "ro",
    words: mixedWords,
  });

  assert.ok(
    mixedWords.length > 0,
    `Expected sequence target ${target.id} to have matching fixture content`,
  );
  assert.equal(
    filteredWords.some((word) => wordContainsTarget("ro", word, target)),
    false,
    `Expected excluding ${target.id} to remove exact sequence matches`,
  );
}

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

assert.deepEqual(
  practiceCoverage.map((summary) => summary.target.id),
  enabledRomanianPracticeTargets.map((target) => target.id),
);

for (const summary of practiceCoverage) {
  const derivedPools = getDerivedWordPoolsForTarget("ro", summary.target);

  assert.deepEqual(
    summary.startsWithWords.map((word) => word.id),
    derivedPools.startsWithWords.map((word) => word.id),
    `Expected practice target starts-with words for ${summary.target.id} to match derived pools`,
  );
  assert.deepEqual(
    summary.containsOnlyWords.map((word) => word.id),
    derivedPools.containsOnlyWords.map((word) => word.id),
    `Expected practice target contains-only words for ${summary.target.id} to match derived pools`,
  );
  assert.deepEqual(
    summary.mixedWords.map((word) => word.id),
    derivedPools.mixedWords.map((word) => word.id),
    `Expected practice target mixed words for ${summary.target.id} to match derived pools`,
  );
  assert.equal(summary.startsWithCount, summary.startsWithWords.length);
  assert.equal(summary.containsOnlyCount, summary.containsOnlyWords.length);
  assert.equal(summary.mixedCount, summary.mixedWords.length);
  assert.deepEqual(summary.imageCounts, derivedPools.imageCounts);
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
