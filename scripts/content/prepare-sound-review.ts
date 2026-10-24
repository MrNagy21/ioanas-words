import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { parseArgs } from "node:util";
import mapping from "../../content/ro/sound-mapping.json";
import {
  getApprovedWords,
  getLetters,
  getPracticeTargets,
} from "../../src/content/loaders";
import type { SoundMapping } from "../../src/content/sound-mapping";
import { createReviewPacket } from "./sound-review-packet";

try {
  const { values } = parseArgs({
    args: process.argv
      .slice(2)
      .filter((arg, index) => index !== 0 || arg !== "--"),
    options: { label: { type: "string" }, output: { type: "string" } },
  });
  const labels = [...getLetters("ro"), ...getPracticeTargets("ro")].map(
    (target) => target.label,
  );
  if (!values.label || !labels.includes(values.label) || !values.output)
    throw new Error(
      "Usage: pnpm run prepare:sound-review -- --label S --output /path/to/new-packet-folder",
    );
  const packet = createReviewPacket(
    values.label,
    getApprovedWords("ro"),
    mapping as SoundMapping,
  );
  const output = resolve(values.output);
  const instructions = await readFile(
    new URL(
      "../../docs/app-development-program/features/guided-practice-app/review-packet-instructions.md",
      import.meta.url,
    ),
    "utf8",
  );
  await mkdir(output); // Refuse an existing destination instead of overwriting a review.
  await writeFile(
    resolve(output, "packet.json"),
    JSON.stringify(packet.metadata, null, 2) + "\n",
    { flag: "wx" },
  );
  await writeFile(resolve(output, "words.csv"), packet.csv, { flag: "wx" });
  await writeFile(resolve(output, "README.md"), instructions, { flag: "wx" });
  console.log(
    `Prepared ${packet.metadata.baseline.wordCount} unknown word rows for ${values.label} in ${output}. No sound decisions or production mappings were changed.`,
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
