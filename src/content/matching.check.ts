import assert from "node:assert/strict";
import {
  getDerivedWordPoolsForTarget,
  getWordsContainingOnlyTarget,
  getWordsStartingWithTarget,
  wordContainsTarget,
  wordStartsWithTarget,
} from "@/content/loaders";
import type { ContentWord } from "@/content/types";

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
