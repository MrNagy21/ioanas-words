import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { parseArgs } from "node:util";
import mapping from "../../content/ro/sound-mapping.json";
import {
  getApprovedWords,
  getLetters,
  getPracticeTargets,
} from "../../src/content/loaders";
import type { SoundMapping } from "../../src/content/sound-mapping";
import { checkReviewPacket } from "./sound-review-packet";

async function boundedRead(file: string, limit: number) {
  if ((await stat(file)).size > limit)
    throw new Error(`Review file exceeds its size limit: ${file}`);
  return readFile(file, "utf8");
}
try {
  const { values } = parseArgs({
    args: process.argv
      .slice(2)
      .filter((arg, index) => index !== 0 || arg !== "--"),
    options: { packet: { type: "string" } },
  });
  if (!values.packet)
    throw new Error(
      "Usage: pnpm run validate:sound-review -- --packet /path/to/packet-folder",
    );
  const root = resolve(values.packet);
  const [metadata, csv] = await Promise.all([
    boundedRead(resolve(root, "packet.json"), 64 * 1024),
    boundedRead(resolve(root, "words.csv"), 5 * 1024 * 1024),
  ]);
  const result = checkReviewPacket(
    JSON.parse(metadata),
    csv,
    getApprovedWords("ro"),
    mapping as SoundMapping,
    [...getLetters("ro"), ...getPracticeTargets("ro")].map(
      (target) => target.label,
    ),
  );
  console.log(JSON.stringify(result, null, 2));
  console.log(
    "Review-file consistency checks passed. Confirm actual human approval before transferring decisions into a new production mapping. This command writes nothing.",
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
