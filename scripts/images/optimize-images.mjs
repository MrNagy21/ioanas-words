import { existsSync } from "node:fs";
import { mkdir, readdir, readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  LOCAL_IMAGE_HEIGHT_PX,
  LOCAL_IMAGE_WIDTH_PX,
} from "../../src/content/rules.mjs";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const contentRoot = path.join(repoRoot, "content");
const defaultSourceRoot = path.join(repoRoot, "assets", "image-sources");
const publicRoot = path.join(repoRoot, "public");
const sourceImageExtensions = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
]);

function parseArgs(argv) {
  const options = {
    dryRun: false,
    locale: null,
    sourceRoot: defaultSourceRoot,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--") {
      continue;
    }

    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }

    if (arg === "--locale") {
      options.locale = argv[index + 1] ?? null;
      index += 1;
      continue;
    }

    if (arg === "--source") {
      options.sourceRoot = path.resolve(repoRoot, argv[index + 1] ?? "");
      index += 1;
      continue;
    }

    throw new Error(`Unknown option "${arg}"`);
  }

  return options;
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function collectSourceImages(root) {
  if (!existsSync(root)) {
    return [];
  }

  const found = [];

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await walk(entryPath);
        continue;
      }

      if (!entry.isFile()) {
        continue;
      }

      const extension = path.extname(entry.name).toLocaleLowerCase("en");
      if (sourceImageExtensions.has(extension)) {
        found.push(entryPath);
      }
    }
  }

  await walk(root);
  return found.sort();
}

async function loadContentIndex(localeFilter) {
  const localeEntries = await readdir(contentRoot, { withFileTypes: true });
  const locales = localeEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((locale) => !localeFilter || locale === localeFilter)
    .sort();
  const index = new Map();

  for (const locale of locales) {
    const letterManifest = await readJson(
      path.join(contentRoot, locale, "letters.json"),
    );

    for (const letter of letterManifest.letters) {
      const wordManifest = await readJson(
        path.join(contentRoot, locale, letter.wordFile),
      );

      for (const word of wordManifest.words) {
        const key = `${locale}/${letter.id}/${word.id}`;
        index.set(key, {
          locale,
          letter: letter.id,
          wordId: word.id,
          display: word.display,
          outputPath: path.join(
            publicRoot,
            "images",
            locale,
            letter.id,
            `${word.id}.webp`,
          ),
        });
      }
    }
  }

  return index;
}

async function loadSharp() {
  try {
    return (await import("sharp")).default;
  } catch {
    const nextPackagePath = path.join(
      repoRoot,
      "node_modules",
      "next",
      "package.json",
    );

    if (!existsSync(nextPackagePath)) {
      throw new Error(
        "Could not import sharp. Run pnpm install before optimizing images.",
      );
    }

    const requireFromNext = createRequire(nextPackagePath);
    return requireFromNext("sharp");
  }
}

function getSourceKey(sourceRoot, sourcePath) {
  const relativePath = path.relative(sourceRoot, sourcePath);
  const parts = relativePath.split(path.sep);

  if (parts.length !== 3) {
    return null;
  }

  const [locale, letter, filename] = parts;
  return `${locale}/${letter}/${path.basename(filename, path.extname(filename))}`;
}

async function optimizeImage(sharp, sourcePath, outputPath) {
  await mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(sourcePath)
    .resize(LOCAL_IMAGE_WIDTH_PX, LOCAL_IMAGE_HEIGHT_PX, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: "nearest",
    })
    .webp({
      lossless: true,
      quality: 100,
      effort: 6,
    })
    .toFile(outputPath);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const sourceImages = await collectSourceImages(options.sourceRoot);

  if (sourceImages.length === 0) {
    console.log(
      `No source images found under ${path.relative(repoRoot, options.sourceRoot)}.`,
    );
    console.log(
      "Stage reviewed source images as assets/image-sources/<locale>/<letter>/<word-id>.(png|jpg|jpeg|webp|avif).",
    );
    return;
  }

  const contentIndex = await loadContentIndex(options.locale);
  const jobs = [];
  const errors = [];

  for (const sourcePath of sourceImages) {
    const key = getSourceKey(options.sourceRoot, sourcePath);
    const word = key ? contentIndex.get(key) : null;

    if (!key || !word) {
      errors.push(
        `${path.relative(repoRoot, sourcePath)} does not match a known content word path`,
      );
      continue;
    }

    jobs.push({ sourcePath, word });
  }

  if (errors.length > 0) {
    console.error(`Image optimization failed with ${errors.length} error(s):`);
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  if (options.dryRun) {
    for (const job of jobs) {
      console.log(
        `Would optimize ${path.relative(repoRoot, job.sourcePath)} -> ${path.relative(repoRoot, job.word.outputPath)}`,
      );
    }
    console.log(`Dry run complete for ${jobs.length} image(s).`);
    return;
  }

  const sharp = await loadSharp();

  for (const job of jobs) {
    await optimizeImage(sharp, job.sourcePath, job.word.outputPath);
    console.log(
      `Optimized ${path.relative(repoRoot, job.sourcePath)} -> ${path.relative(repoRoot, job.word.outputPath)}`,
    );
  }

  console.log(`Optimized ${jobs.length} image(s).`);
}

await main().catch((error) => {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(detail);

  if (error instanceof Error && error.stack) {
    console.error(error.stack);
  }

  process.exitCode = 1;
});
