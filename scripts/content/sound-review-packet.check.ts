import assert from "node:assert/strict";
import {
  checkReviewPacket,
  createReviewPacket,
  readReviewCsv,
  writeReviewCsv,
} from "./sound-review-packet";
import type { SoundMapping } from "../../src/content/sound-mapping";

// Synthetic fixture decisions only. No production sound mapping is read or written.
const words = [
  {
    id: "fixture:1",
    word: "fixture one",
    display: 'ț, "quoted"',
    image: "/fixture-one.webp",
  },
  {
    id: "fixture:2",
    word: "fixture two",
    display: "al doilea",
    image: "/fixture-two.webp",
  },
  {
    id: "fixture:3",
    word: "fixture three",
    display: "al treilea",
    image: "/fixture-three.webp",
  },
];
const mapping: SoundMapping = {
  schemaVersion: 1,
  mappingVersion: "fixture-v1",
  targets: [],
  words: {},
};
const original = JSON.stringify(mapping);
const blank = createReviewPacket("S", words, mapping);
const metadata = {
  ...blank.metadata,
  targetId: "fixture:s",
  definition: "Synthetic test definition only.",
  proposedMappingVersion: "fixture-v2",
  reviewer: "Synthetic test reviewer",
  reviewReference: "fixture-only",
  reviewedOn: "2026-10-16",
  approved: true,
};
const rows = readReviewCsv(blank.csv);
assert.equal(rows.length, 4);
assert.equal(rows[1][1], words[0].display);
assert.ok(
  rows
    .slice(1)
    .every(
      (row) =>
        row[3] === "unknown" && row.slice(4, 7).every((flag) => flag === ""),
    ),
);
assert.throws(
  () => checkReviewPacket(blank.metadata, blank.csv, words, mapping, ["S"]),
  /Missing/,
);
assert.throws(
  () => checkReviewPacket(metadata, blank.csv, words, mapping, ["S"]),
  /no reviewed/,
);
rows[1][3] = "present";
rows[1].splice(4, 3, "yes", "yes", "no");
rows[1][8] = 'Synthetic note with a comma, quote " and\nline break.';
rows[2][3] = "absent";
rows[2].splice(4, 3, "no", "no", "no");
const csv = writeReviewCsv(rows);
assert.deepEqual(readReviewCsv("\uFEFF" + csv), rows);
const run = (
  meta: unknown = metadata,
  text = csv,
  catalog = words,
  current = mapping,
) => checkReviewPacket(meta, text, catalog, current, ["S"]);
assert.deepEqual(run(), {
  label: "S",
  targetId: "fixture:s",
  proposedMappingVersion: "fixture-v2",
  present: 1,
  absent: 1,
  unknown: 1,
  positions: { initial: 1, medial: 1, final: 0 },
});
assert.throws(() => run({ ...metadata, approved: false }), /not marked/);
assert.throws(
  () => run({ ...metadata, reviewReference: " " }),
  /Missing review reference/,
);
assert.throws(
  () => run({ ...metadata, definition: "" }),
  /sound\/position definition/,
);
assert.throws(
  () => run({ ...metadata, reviewedOn: "2026-02-30" }),
  /valid YYYY/,
);
assert.throws(
  () => run({ ...metadata, proposedMappingVersion: mapping.mappingVersion }),
  /new mapping version/,
);
assert.throws(
  () =>
    run(
      metadata,
      csv,
      words.map((w, i) => (i === 0 ? { ...w, word: "changed" } : w)),
    ),
  /Stale/,
);
assert.throws(
  () =>
    run(metadata, csv, words, { ...mapping, mappingVersion: "new-baseline" }),
  /Stale/,
);
const conflict: SoundMapping = {
  ...mapping,
  targets: [{ id: "fixture:s", label: "R", reviewed: true }],
};
assert.throws(
  () =>
    run(
      {
        ...metadata,
        baseline: createReviewPacket("S", words, conflict).metadata.baseline,
      },
      csv,
      words,
      conflict,
    ),
  /identity conflicts/,
);
function edited(change: (copy: string[][]) => void) {
  const copy = rows.map((row) => [...row]);
  change(copy);
  return writeReviewCsv(copy);
}
assert.throws(
  () =>
    run(
      metadata,
      edited((r) => {
        r[1][9] = "R";
      }),
    ),
  /target label differs/,
);
assert.throws(
  () =>
    run(
      metadata,
      edited((r) => {
        r[2][0] = r[1][0];
      }),
    ),
  /duplicate/,
);
assert.throws(
  () =>
    run(
      metadata,
      edited((r) => {
        r[1][0] = "unknown-id";
      }),
    ),
  /Unknown/,
);
assert.throws(
  () =>
    run(
      metadata,
      edited((r) => {
        r.pop();
      }),
    ),
  /exactly 3/,
);
assert.throws(
  () =>
    run(
      metadata,
      edited((r) => {
        r[1][1] = "changed spelling";
      }),
    ),
  /Word or image changed/,
);
assert.throws(
  () =>
    run(
      metadata,
      edited((r) => {
        r[3][4] = "yes";
      }),
    ),
  /Unknown word has position/,
);
assert.throws(
  () =>
    run(
      metadata,
      edited((r) => {
        r[2][4] = "yes";
      }),
    ),
  /disagree/,
);
assert.throws(
  () =>
    run(
      metadata,
      edited((r) => {
        r[1].splice(4, 3, "no", "no", "no");
      }),
    ),
  /disagree/,
);
assert.throws(
  () =>
    run(
      metadata,
      edited((r) => {
        r[1][4] = "";
      }),
    ),
  /all three positions/,
);
assert.throws(
  () =>
    run(
      metadata,
      edited((r) => {
        r[1][3] = "looks likely";
      }),
    ),
  /present, absent or unknown/,
);
assert.throws(() => readReviewCsv('"unclosed'), /Unclosed/);
assert.throws(() => readReviewCsv('"closed"garbage'), /quoting/);
assert.equal(JSON.stringify(mapping), original);
console.log(
  "Sound review tools passed: unknown stays unknown, explicit absence/positions, evidence gates, stale catalog/mapping rejection, duplicate/missing IDs, CSV round-trip and no mapping mutation.",
);
