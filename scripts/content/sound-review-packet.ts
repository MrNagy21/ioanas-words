import { createHash } from "node:crypto";
import type { ContentWord } from "../../src/content/types";
import type { SoundMapping } from "../../src/content/sound-mapping";

const columns = [
  "word_id",
  "word",
  "image",
  "decision",
  "initial",
  "medial",
  "final",
  "review_reference",
  "notes",
  "target_label",
];
const positions = ["initial", "medial", "final"] as const;
type ReviewWord = Pick<ContentWord, "id" | "word" | "display" | "image">;

export function reviewBaseline(
  words: readonly ReviewWord[],
  mapping: SoundMapping,
) {
  const catalog = [...words]
    .sort((a, b) => a.id.localeCompare(b.id, "en"))
    .map(({ id, word, display, image }) => ({ id, word, display, image }));
  const hash = (value: unknown) =>
    createHash("sha256").update(JSON.stringify(value)).digest("hex");
  return {
    wordCount: catalog.length,
    catalogSha256: hash(catalog),
    mappingVersion: mapping.mappingVersion,
    mappingSha256: hash(mapping),
  };
}

export function writeReviewCsv(rows: string[][]) {
  return (
    rows
      .map((row) =>
        row.map((cell) => `"${cell.replaceAll('"', '""')}"`).join(","),
      )
      .join("\r\n") + "\r\n"
  );
}

export function readReviewCsv(source: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [],
    cell = "";
  let state: "start" | "plain" | "quoted" | "closed" = "start";
  source = source.replace(/^\uFEFF/, "");
  for (let i = 0; i < source.length; i++) {
    const char = source[i];
    if (state === "quoted") {
      if (char === '"') {
        if (source[i + 1] === '"') {
          cell += '"';
          i++;
        } else state = "closed";
      } else cell += char;
      continue;
    }
    if (char === "," || char === "\n" || char === "\r") {
      row.push(cell);
      cell = "";
      state = "start";
      if (char !== ",") {
        rows.push(row);
        row = [];
        if (char === "\r" && source[i + 1] === "\n") i++;
      }
    } else if (char === '"' && state === "start") state = "quoted";
    else {
      if (state === "closed" || char === '"')
        throw new Error("Invalid CSV quoting.");
      cell += char;
      state = "plain";
    }
  }
  if (state === "quoted") throw new Error("Unclosed CSV quote.");
  if (row.length || cell || state !== "start") {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

export function createReviewPacket(
  label: string,
  words: readonly ReviewWord[],
  mapping: SoundMapping,
) {
  return {
    metadata: {
      schemaVersion: 1,
      locale: "ro",
      label,
      targetId: "",
      definition: "",
      proposedMappingVersion: "",
      reviewer: "",
      reviewReference: "",
      reviewedOn: "",
      approved: false,
      baseline: reviewBaseline(words, mapping),
    },
    csv: writeReviewCsv([
      columns,
      ...words.map((word) => [
        word.id,
        word.display,
        word.image,
        "unknown",
        "",
        "",
        "",
        "",
        "",
        label,
      ]),
    ]),
  };
}

function object(value: unknown, name: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new Error(`Invalid ${name}.`);
  return value as Record<string, unknown>;
}
function required(value: unknown, name: string) {
  if (typeof value !== "string" || !value.trim())
    throw new Error(`Missing ${name}.`);
  return value.trim();
}

export function checkReviewPacket(
  metadata: unknown,
  csv: string,
  words: readonly ReviewWord[],
  mapping: SoundMapping,
  labels: readonly string[],
) {
  const packet = object(metadata, "packet metadata");
  if (packet.schemaVersion !== 1 || packet.locale !== "ro")
    throw new Error("Unsupported review packet format.");
  const baseline = object(packet.baseline, "catalog baseline");
  for (const [key, value] of Object.entries(reviewBaseline(words, mapping))) {
    if (baseline[key] !== value)
      throw new Error(
        `Stale review packet (${key}); reconcile against a fresh packet before approval.`,
      );
  }
  const label = required(packet.label, "target label");
  if (!labels.includes(label))
    throw new Error("The target label is not a current selectable goal.");
  const targetId = required(packet.targetId, "reviewer-defined target ID");
  required(packet.definition, "reviewer-defined sound/position definition");
  required(packet.reviewer, "reviewer identity");
  required(packet.reviewReference, "review reference");
  const version = required(
    packet.proposedMappingVersion,
    "new mapping version",
  );
  if (version === mapping.mappingVersion)
    throw new Error("Use a new mapping version.");
  const date = required(packet.reviewedOn, "review date");
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    new Date(date).toISOString().slice(0, 10) !== date
  )
    throw new Error("Use a valid YYYY-MM-DD review date.");
  if (packet.approved !== true)
    throw new Error("The reviewer has not marked this packet approved.");
  if (
    mapping.targets.some(
      (target) =>
        (target.id === targetId && target.label !== label) ||
        (target.label === label && target.id !== targetId),
    )
  )
    throw new Error("Target identity conflicts with the existing mapping.");

  const [header, ...rows] = readReviewCsv(csv);
  if (JSON.stringify(header) !== JSON.stringify(columns))
    throw new Error("CSV columns differ from the review template.");
  if (rows.length !== words.length)
    throw new Error(
      `Expected exactly ${words.length} word rows; omitted words must remain explicit unknown rows.`,
    );
  const catalog = new Map(words.map((word) => [word.id, word]));
  const seen = new Set<string>();
  const summary = {
    label,
    targetId,
    proposedMappingVersion: version,
    present: 0,
    absent: 0,
    unknown: 0,
    positions: { initial: 0, medial: 0, final: 0 },
  };
  for (const values of rows) {
    if (values.length !== columns.length)
      throw new Error("Unexpected CSV column count.");
    const [id, display, image, rawDecision, initial, medial, final] = values;
    if (values[9] !== label)
      throw new Error("CSV target label differs from packet metadata.");
    const word = catalog.get(id);
    if (!word || seen.has(id))
      throw new Error(`Unknown or duplicate word ID: ${id}`);
    seen.add(id);
    if (display !== word.display || image !== word.image)
      throw new Error(`Word or image changed in the review sheet: ${id}`);
    const decision = rawDecision.trim().toLowerCase() || "unknown";
    const flags = [initial, medial, final].map((value) =>
      value.trim().toLowerCase(),
    );
    if (decision === "unknown") {
      if (flags.some(Boolean))
        throw new Error(`Unknown word has position decisions: ${id}`);
      summary.unknown++;
      continue;
    }
    if (decision !== "present" && decision !== "absent")
      throw new Error(`Use present, absent or unknown: ${id}`);
    if (flags.some((flag) => flag !== "yes" && flag !== "no"))
      throw new Error(`Review all three positions with yes/no: ${id}`);
    if ((decision === "present") !== flags.includes("yes"))
      throw new Error(`Presence and positions disagree: ${id}`);
    summary[decision]++;
    positions.forEach((position, index) => {
      if (flags[index] === "yes") summary.positions[position]++;
    });
  }
  if (summary.present + summary.absent === 0)
    throw new Error("There are no reviewed word decisions.");
  return summary;
}
