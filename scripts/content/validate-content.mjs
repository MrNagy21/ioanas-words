import { existsSync } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  IMAGE_STATUS_VALUES,
  LOCAL_IMAGE_HEIGHT_PX,
  LOCAL_IMAGE_EXTENSION_VALUES,
  LOCAL_IMAGE_MAX_BYTES,
  LOCAL_IMAGE_WARN_BYTES,
  LOCAL_IMAGE_WIDTH_PX,
  PART_OF_SPEECH_VALUES,
  WORD_AGE_BAND_VALUES,
  WORD_CATEGORY_VALUES,
  WORD_DIFFICULTY_VALUES,
  WORD_SOURCE_VALUES,
  WORD_STATUS_VALUES,
} from "../../src/content/rules.mjs";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const contentRoot = path.join(repoRoot, "content");
const publicRoot = path.join(repoRoot, "public");

const supportedLocales = new Set(["ro"]);
const partOfSpeechValues = new Set(PART_OF_SPEECH_VALUES);
const difficultyValues = new Set(WORD_DIFFICULTY_VALUES);
const ageBandValues = new Set(WORD_AGE_BAND_VALUES);
const categoryValues = new Set(WORD_CATEGORY_VALUES);
const imageStatusValues = new Set(IMAGE_STATUS_VALUES);
const localImageExtensionValues = new Set(LOCAL_IMAGE_EXTENSION_VALUES);
const wordStatusValues = new Set(WORD_STATUS_VALUES);
const sourceValues = new Set(WORD_SOURCE_VALUES);

const errors = [];
const warnings = [];

const letterManifestKeys = new Set(["locale", "letters"]);
const practiceTargetManifestKeys = new Set(["locale", "targets"]);
const letterKeys = new Set([
  "id",
  "label",
  "enabled",
  "wordFile",
  "sortOrder",
]);
const practiceTargetKeys = new Set([
  "id",
  "label",
  "locale",
  "kind",
  "routeSegment",
  "sortOrder",
  "enabled",
]);
const wordManifestKeys = new Set(["locale", "letter", "words"]);
const wordKeys = new Set([
  "id",
  "word",
  "display",
  "normalized",
  "partOfSpeech",
  "difficulty",
  "ageBand",
  "category",
  "image",
  "imageStatus",
  "alt",
  "source",
  "license",
  "status",
]);

const approvedPlaceholderImagePaths = new Set([
  "/images/ro/placeholders/generic-word-placeholder.webp",
]);
const allowedDuplicateNormalizedWords = {
  ro: new Map([["rama", new Set(["ramă", "râmă"])]]),
};

function addError(filePath, message) {
  errors.push(`${path.relative(repoRoot, filePath)}: ${message}`);
}

function addWarning(filePath, message) {
  warnings.push(`${path.relative(repoRoot, filePath)}: ${message}`);
}

async function readJson(filePath) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    addError(filePath, `could not parse JSON (${detail})`);
    return null;
  }
}

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function requireString(record, key, filePath, context) {
  if (typeof record[key] !== "string" || record[key].trim() === "") {
    addError(filePath, `${context}.${key} must be a non-empty string`);
    return null;
  }

  if (record[key] !== record[key].trim()) {
    addError(
      filePath,
      `${context}.${key} must not have leading or trailing whitespace`,
    );
  }

  return record[key];
}

function requireBoolean(record, key, filePath, context) {
  if (typeof record[key] !== "boolean") {
    addError(filePath, `${context}.${key} must be a boolean`);
    return null;
  }

  return record[key];
}

function requireInteger(record, key, filePath, context) {
  if (!Number.isInteger(record[key])) {
    addError(filePath, `${context}.${key} must be an integer`);
    return null;
  }

  return record[key];
}

function requireArray(record, key, filePath, context) {
  if (!Array.isArray(record[key])) {
    addError(filePath, `${context}.${key} must be an array`);
    return null;
  }

  return record[key];
}

function validateKnownKeys(record, allowedKeys, filePath, context) {
  const unknownKeys = Object.keys(record).filter((key) => !allowedKeys.has(key));

  if (unknownKeys.length > 0) {
    addError(
      filePath,
      `${context} contains unsupported field(s): ${unknownKeys.join(", ")}`,
    );
  }
}

function foldRomanian(value) {
  return value
    .toLocaleLowerCase("ro")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ș/g, "s")
    .replace(/ț/g, "t")
    .replace(/ă/g, "a")
    .replace(/[âî]/g, "i");
}

function isAllowedDuplicateNormalizedWord(
  locale,
  normalized,
  firstWord,
  secondWord,
) {
  const allowedWords = allowedDuplicateNormalizedWords[locale]?.get(normalized);

  if (!allowedWords) {
    return false;
  }

  return [firstWord, secondWord].every((word) =>
    allowedWords.has(word.toLocaleLowerCase("ro")),
  );
}

function getWordIdBucketToken(locale, letterId) {
  if (locale === "ro") {
    const romanianAsciiBucketTokens = {
      î: "i-circ",
      ș: "sh",
      ț: "tz",
    };

    return romanianAsciiBucketTokens[letterId] ?? letterId;
  }

  return letterId;
}

function hasRomanianLetterStart(value, letterId) {
  return value.toLocaleLowerCase("ro").startsWith(letterId);
}

function readUint24LE(buffer, offset) {
  return (
    buffer[offset] | (buffer[offset + 1] << 8) | (buffer[offset + 2] << 16)
  );
}

function readWebpDimensions(buffer) {
  if (
    buffer.length < 12 ||
    buffer.toString("ascii", 0, 4) !== "RIFF" ||
    buffer.toString("ascii", 8, 12) !== "WEBP"
  ) {
    throw new Error("file is not a RIFF WebP image");
  }

  let offset = 12;

  while (offset + 8 <= buffer.length) {
    const chunkType = buffer.toString("ascii", offset, offset + 4);
    const chunkSize = buffer.readUInt32LE(offset + 4);
    const chunkDataOffset = offset + 8;

    if (chunkDataOffset + chunkSize > buffer.length) {
      throw new Error(`WebP ${chunkType} chunk is truncated`);
    }

    if (chunkType === "VP8X") {
      if (chunkSize < 10) {
        throw new Error("WebP VP8X chunk is too small");
      }

      return {
        width: readUint24LE(buffer, chunkDataOffset + 4) + 1,
        height: readUint24LE(buffer, chunkDataOffset + 7) + 1,
      };
    }

    if (chunkType === "VP8L") {
      if (chunkSize < 5 || buffer[chunkDataOffset] !== 0x2f) {
        throw new Error("WebP VP8L chunk has an invalid lossless header");
      }

      const b1 = buffer[chunkDataOffset + 1];
      const b2 = buffer[chunkDataOffset + 2];
      const b3 = buffer[chunkDataOffset + 3];
      const b4 = buffer[chunkDataOffset + 4];

      return {
        width: 1 + (((b2 & 0x3f) << 8) | b1),
        height: 1 + (((b4 & 0x0f) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6)),
      };
    }

    if (chunkType === "VP8 ") {
      if (
        chunkSize < 10 ||
        buffer[chunkDataOffset + 3] !== 0x9d ||
        buffer[chunkDataOffset + 4] !== 0x01 ||
        buffer[chunkDataOffset + 5] !== 0x2a
      ) {
        throw new Error("WebP VP8 chunk has an invalid lossy header");
      }

      return {
        width: buffer.readUInt16LE(chunkDataOffset + 6) & 0x3fff,
        height: buffer.readUInt16LE(chunkDataOffset + 8) & 0x3fff,
      };
    }

    offset = chunkDataOffset + chunkSize + (chunkSize % 2);
  }

  throw new Error("could not find a WebP image data chunk");
}

function validateLetterManifest(locale, manifest, filePath) {
  if (!isRecord(manifest)) {
    addError(filePath, "letter manifest must be an object");
    return [];
  }

  validateKnownKeys(manifest, letterManifestKeys, filePath, "manifest");

  const manifestLocale = requireString(
    manifest,
    "locale",
    filePath,
    "manifest",
  );
  if (manifestLocale && manifestLocale !== locale) {
    addError(filePath, `manifest.locale must be "${locale}"`);
  }

  if (manifestLocale && !supportedLocales.has(manifestLocale)) {
    addError(filePath, `unsupported locale "${manifestLocale}"`);
  }

  const letters = requireArray(manifest, "letters", filePath, "manifest") ?? [];
  const seenLetterIds = new Set();
  const seenSortOrders = new Set();
  const validLetters = [];

  for (const [index, letter] of letters.entries()) {
    const context = `letters[${index}]`;

    if (!isRecord(letter)) {
      addError(filePath, `${context} must be an object`);
      continue;
    }

    validateKnownKeys(letter, letterKeys, filePath, context);

    const id = requireString(letter, "id", filePath, context);
    const label = requireString(letter, "label", filePath, context);
    const enabled = requireBoolean(letter, "enabled", filePath, context);
    const wordFile = requireString(letter, "wordFile", filePath, context);
    const sortOrder = requireInteger(letter, "sortOrder", filePath, context);

    if (!id || !label || !wordFile || enabled === null || sortOrder === null) {
      continue;
    }

    if (!/^[a-zăâîșț]$/u.test(id)) {
      addError(filePath, `${context}.id must be one lowercase Romanian letter`);
    }

    if (label !== id.toLocaleUpperCase("ro")) {
      addError(
        filePath,
        `${context}.label must be the uppercase form of "${id}"`,
      );
    }

    if (wordFile !== `words-${id}.json`) {
      addError(filePath, `${context}.wordFile must be "words-${id}.json"`);
    }

    if (sortOrder < 1) {
      addError(filePath, `${context}.sortOrder must be positive`);
    }

    if (seenLetterIds.has(id)) {
      addError(filePath, `${context}.id duplicates letter "${id}"`);
    }
    seenLetterIds.add(id);

    if (seenSortOrders.has(sortOrder)) {
      addError(
        filePath,
        `${context}.sortOrder duplicates sort order ${sortOrder}`,
      );
    }
    seenSortOrders.add(sortOrder);

    validLetters.push({ id, label, enabled, wordFile, sortOrder });
  }

  return validLetters;
}

function validatePracticeTargetManifest(locale, manifest, filePath, letters) {
  if (!isRecord(manifest)) {
    addError(filePath, "practice target manifest must be an object");
    return [];
  }

  validateKnownKeys(
    manifest,
    practiceTargetManifestKeys,
    filePath,
    "manifest",
  );

  const manifestLocale = requireString(
    manifest,
    "locale",
    filePath,
    "manifest",
  );
  if (manifestLocale && manifestLocale !== locale) {
    addError(filePath, `manifest.locale must be "${locale}"`);
  }

  const targets =
    requireArray(manifest, "targets", filePath, "manifest") ?? [];
  const letterIds = new Set(letters.map((letter) => letter.id));
  const seenTargetIds = new Set();
  const seenRouteSegments = new Set();
  const seenSortOrders = new Set();
  const validTargets = [];

  for (const [index, target] of targets.entries()) {
    const context = `targets[${index}]`;

    if (!isRecord(target)) {
      addError(filePath, `${context} must be an object`);
      continue;
    }

    validateKnownKeys(target, practiceTargetKeys, filePath, context);

    const id = requireString(target, "id", filePath, context);
    const label = requireString(target, "label", filePath, context);
    const targetLocale = requireString(target, "locale", filePath, context);
    const kind = requireString(target, "kind", filePath, context);
    const routeSegment = requireString(
      target,
      "routeSegment",
      filePath,
      context,
    );
    const sortOrder = requireInteger(target, "sortOrder", filePath, context);
    const enabled = requireBoolean(target, "enabled", filePath, context);

    if (
      !id ||
      !label ||
      !targetLocale ||
      !kind ||
      !routeSegment ||
      sortOrder === null ||
      enabled === null
    ) {
      continue;
    }

    if (!/^[a-z]+$/.test(id)) {
      addError(filePath, `${context}.id must be a lowercase ASCII sequence`);
    }

    if (label !== id.toLocaleUpperCase("ro")) {
      addError(
        filePath,
        `${context}.label must be the uppercase form of "${id}"`,
      );
    }

    if (targetLocale !== locale) {
      addError(filePath, `${context}.locale must be "${locale}"`);
    }

    if (kind !== "sequence") {
      addError(filePath, `${context}.kind must be "sequence"`);
    }

    if (routeSegment !== id) {
      addError(filePath, `${context}.routeSegment must match ${context}.id`);
    }

    if (letterIds.has(id)) {
      addError(
        filePath,
        `${context}.id must not duplicate a Romanian alphabet letter bucket`,
      );
    }

    if (sortOrder < 1) {
      addError(filePath, `${context}.sortOrder must be positive`);
    }

    if (seenTargetIds.has(id)) {
      addError(filePath, `${context}.id duplicates target "${id}"`);
    }
    seenTargetIds.add(id);

    if (seenRouteSegments.has(routeSegment)) {
      addError(
        filePath,
        `${context}.routeSegment duplicates route "${routeSegment}"`,
      );
    }
    seenRouteSegments.add(routeSegment);

    if (seenSortOrders.has(sortOrder)) {
      addError(
        filePath,
        `${context}.sortOrder duplicates sort order ${sortOrder}`,
      );
    }
    seenSortOrders.add(sortOrder);

    validTargets.push({
      id,
      label,
      locale: targetLocale,
      kind,
      routeSegment,
      sortOrder,
      enabled,
    });
  }

  return validTargets;
}

function validateWordShape(word, filePath, context) {
  if (!isRecord(word)) {
    addError(filePath, `${context} must be an object`);
    return null;
  }

  validateKnownKeys(word, wordKeys, filePath, context);

  const id = requireString(word, "id", filePath, context);
  const wordText = requireString(word, "word", filePath, context);
  const display = requireString(word, "display", filePath, context);
  const normalized = requireString(word, "normalized", filePath, context);
  const partOfSpeech = requireString(word, "partOfSpeech", filePath, context);
  const difficulty = requireInteger(word, "difficulty", filePath, context);
  const ageBand = requireString(word, "ageBand", filePath, context);
  const category = requireString(word, "category", filePath, context);
  const image = requireString(word, "image", filePath, context);
  const imageStatus = requireString(word, "imageStatus", filePath, context);
  const alt = requireString(word, "alt", filePath, context);
  const source = requireArray(word, "source", filePath, context);
  const license = requireString(word, "license", filePath, context);
  const status = requireString(word, "status", filePath, context);

  if (
    !id ||
    !wordText ||
    !display ||
    !normalized ||
    !partOfSpeech ||
    difficulty === null ||
    !ageBand ||
    !category ||
    !image ||
    !imageStatus ||
    !alt ||
    !source ||
    !license ||
    !status
  ) {
    return null;
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
    addError(filePath, `${context}.id must be a lowercase ASCII slug`);
  }

  if (display !== wordText) {
    addWarning(filePath, `${context}.display differs from ${context}.word`);
  }

  if (foldRomanian(wordText) !== normalized) {
    addError(
      filePath,
      `${context}.normalized must match the Romanian-folded word "${foldRomanian(wordText)}"`,
    );
  }

  if (!partOfSpeechValues.has(partOfSpeech)) {
    addError(
      filePath,
      `${context}.partOfSpeech has unsupported value "${partOfSpeech}"`,
    );
  }

  if (!difficultyValues.has(difficulty)) {
    addError(filePath, `${context}.difficulty must be 1, 2, or 3`);
  }

  if (!ageBandValues.has(ageBand)) {
    addError(filePath, `${context}.ageBand must be "4-6"`);
  }

  if (!categoryValues.has(category)) {
    addError(
      filePath,
      `${context}.category has unsupported value "${category}"`,
    );
  }

  if (!imageStatusValues.has(imageStatus)) {
    addError(
      filePath,
      `${context}.imageStatus has unsupported value "${imageStatus}"`,
    );
  }

  if (!wordStatusValues.has(status)) {
    addError(filePath, `${context}.status has unsupported value "${status}"`);
  }

  if (
    !source.every((value) => typeof value === "string" && value.trim() !== "")
  ) {
    addError(filePath, `${context}.source must contain non-empty strings`);
  }

  const unsupportedSources = source.filter((value) => !sourceValues.has(value));
  if (unsupportedSources.length > 0) {
    addWarning(
      filePath,
      `${context}.source contains unrecognized values: ${unsupportedSources.join(", ")}`,
    );
  }

  return {
    id,
    word: wordText,
    display,
    normalized,
    partOfSpeech,
    difficulty,
    ageBand,
    category,
    image,
    imageStatus,
    alt,
    source,
    license,
    status,
  };
}

async function validateImagePath(word, locale, letterId, filePath, context) {
  const isApprovedPlaceholderImagePath = approvedPlaceholderImagePaths.has(
    word.image,
  );

  if (word.imageStatus === "placeholder" && isApprovedPlaceholderImagePath) {
    const imagePath = path.join(publicRoot, word.image.slice(1));
    if (!existsSync(imagePath)) {
      addError(
        filePath,
        `${context}.image uses approved placeholder path but ${path.relative(repoRoot, imagePath)} does not exist`,
      );
      return;
    }

    const imageExtension = path.extname(word.image).slice(1);
    if (!localImageExtensionValues.has(imageExtension)) {
      addError(
        filePath,
        `${context}.image extension "${imageExtension}" is not allowed for the approved placeholder asset`,
      );
    }

    const imageStats = await stat(imagePath);
    if (imageStats.size > LOCAL_IMAGE_MAX_BYTES) {
      addError(
        filePath,
        `${context}.approved placeholder image is ${imageStats.size} bytes, above the ${LOCAL_IMAGE_MAX_BYTES} byte hard maximum`,
      );
    } else if (imageStats.size > LOCAL_IMAGE_WARN_BYTES) {
      addWarning(
        filePath,
        `${context}.approved placeholder image is ${imageStats.size} bytes, above the ${LOCAL_IMAGE_WARN_BYTES} byte warning threshold`,
      );
    }

    try {
      const dimensions = readWebpDimensions(await readFile(imagePath));
      if (
        dimensions.width !== LOCAL_IMAGE_WIDTH_PX ||
        dimensions.height !== LOCAL_IMAGE_HEIGHT_PX
      ) {
        addError(
          filePath,
          `${context}.approved placeholder image must be ${LOCAL_IMAGE_WIDTH_PX} x ${LOCAL_IMAGE_HEIGHT_PX} px, got ${dimensions.width} x ${dimensions.height} px`,
        );
      }
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      addError(
        filePath,
        `${context}.approved placeholder image could not be validated as WebP (${detail})`,
      );
    }

    return;
  }

  const imageExtensions = LOCAL_IMAGE_EXTENSION_VALUES.join("|");
  const imagePattern = new RegExp(
    `^/images/${locale}/${letterId}/${word.id}\\.(${imageExtensions})$`,
  );

  if (!imagePattern.test(word.image)) {
    addError(
      filePath,
      `${context}.image must match /images/${locale}/${letterId}/${word.id}.webp`,
    );
    return;
  }

  const imageExtension = path.extname(word.image).slice(1);
  if (!localImageExtensionValues.has(imageExtension)) {
    addError(
      filePath,
      `${context}.image extension "${imageExtension}" is not allowed for local v1 assets`,
    );
  }

  const imagePath = path.join(publicRoot, word.image.slice(1));
  if (word.imageStatus === "ready" && !existsSync(imagePath)) {
    addError(
      filePath,
      `${context}.imageStatus is "ready" but ${path.relative(repoRoot, imagePath)} does not exist`,
    );
    return;
  }

  if (word.imageStatus === "placeholder" && existsSync(imagePath)) {
    addWarning(
      filePath,
      `${context}.imageStatus is "placeholder" but ${path.relative(repoRoot, imagePath)} exists`,
    );
  }

  if (word.imageStatus !== "ready") {
    return;
  }

  const imageStats = await stat(imagePath);
  if (imageStats.size > LOCAL_IMAGE_MAX_BYTES) {
    addError(
      filePath,
      `${context}.image is ${imageStats.size} bytes, above the ${LOCAL_IMAGE_MAX_BYTES} byte hard maximum`,
    );
  } else if (imageStats.size > LOCAL_IMAGE_WARN_BYTES) {
    addWarning(
      filePath,
      `${context}.image is ${imageStats.size} bytes, above the ${LOCAL_IMAGE_WARN_BYTES} byte warning threshold`,
    );
  }

  try {
    const dimensions = readWebpDimensions(await readFile(imagePath));
    if (
      dimensions.width !== LOCAL_IMAGE_WIDTH_PX ||
      dimensions.height !== LOCAL_IMAGE_HEIGHT_PX
    ) {
      addError(
        filePath,
        `${context}.image must be ${LOCAL_IMAGE_WIDTH_PX} x ${LOCAL_IMAGE_HEIGHT_PX} px, got ${dimensions.width} x ${dimensions.height} px`,
      );
    }
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    addError(
      filePath,
      `${context}.image could not be validated as WebP (${detail})`,
    );
  }
}

async function validateWordManifest(
  locale,
  letter,
  manifest,
  filePath,
  globalWordIds,
  globalNormalizedWords,
  globalExactWords,
  globalImagePaths,
) {
  if (!isRecord(manifest)) {
    addError(filePath, "word manifest must be an object");
    return;
  }

  validateKnownKeys(manifest, wordManifestKeys, filePath, "manifest");

  const manifestLocale = requireString(
    manifest,
    "locale",
    filePath,
    "manifest",
  );
  const manifestLetter = requireString(
    manifest,
    "letter",
    filePath,
    "manifest",
  );
  const words = requireArray(manifest, "words", filePath, "manifest") ?? [];

  if (manifestLocale && manifestLocale !== locale) {
    addError(filePath, `manifest.locale must be "${locale}"`);
  }

  if (manifestLetter && manifestLetter !== letter.id) {
    addError(filePath, `manifest.letter must be "${letter.id}"`);
  }

  const localIds = new Set();

  for (const [index, rawWord] of words.entries()) {
    const context = `words[${index}]`;
    const word = validateWordShape(rawWord, filePath, context);

    if (!word) {
      continue;
    }

    if (localIds.has(word.id)) {
      addError(filePath, `${context}.id duplicates another word in this file`);
    }
    localIds.add(word.id);

    if (globalWordIds.has(word.id)) {
      addError(filePath, `${context}.id duplicates a word ID in another file`);
    }
    globalWordIds.add(word.id);

    const existingNormalizedWord = globalNormalizedWords.get(word.normalized);
    if (
      existingNormalizedWord &&
      existingNormalizedWord.id !== word.id &&
      !isAllowedDuplicateNormalizedWord(
        locale,
        word.normalized,
        existingNormalizedWord.word,
        word.word,
      )
    ) {
      addError(
        filePath,
        `${context}.normalized duplicates ${existingNormalizedWord.id}`,
      );
    }
    globalNormalizedWords.set(word.normalized, {
      id: word.id,
      word: word.word,
    });

    for (const exactValue of new Set([
      word.word.toLocaleLowerCase("ro"),
      word.display.toLocaleLowerCase("ro"),
    ])) {
      const existingExactWordId = globalExactWords.get(exactValue);
      if (existingExactWordId && existingExactWordId !== word.id) {
        addError(
          filePath,
          `${context}.word/display duplicates ${existingExactWordId}`,
        );
      }
      globalExactWords.set(exactValue, word.id);
    }

    if (
      !approvedPlaceholderImagePaths.has(word.image) &&
      globalImagePaths.has(word.image)
    ) {
      addError(filePath, `${context}.image duplicates another word image path`);
    }
    globalImagePaths.add(word.image);

    const wordIdBucketToken = getWordIdBucketToken(locale, letter.id);
    if (!word.id.startsWith(`${locale}-${wordIdBucketToken}-`)) {
      addError(
        filePath,
        `${context}.id must start with "${locale}-${wordIdBucketToken}-"`,
      );
    }

    if (!hasRomanianLetterStart(word.word, letter.id)) {
      addError(
        filePath,
        `${context}.word must start with the letter bucket "${letter.id}"`,
      );
    }

    if (!hasRomanianLetterStart(word.display, letter.id)) {
      addError(
        filePath,
        `${context}.display must start with the letter bucket "${letter.id}"`,
      );
    }

    if (!word.normalized.startsWith(foldRomanian(letter.id))) {
      addError(
        filePath,
        `${context}.normalized must start with the folded letter bucket "${foldRomanian(letter.id)}"`,
      );
    }

    await validateImagePath(word, locale, letter.id, filePath, context);

    if (word.status !== "approved" && word.imageStatus === "ready") {
      addError(
        filePath,
        `${context} cannot be imageStatus "ready" until approved`,
      );
    }

    if (
      word.status === "approved" &&
      word.imageStatus === "ready" &&
      word.license === "not-yet-created"
    ) {
      addError(
        filePath,
        `${context}.license must be production-ready when approved imageStatus is "ready"`,
      );
    }
  }
}

async function validateLocale(locale) {
  const localeDir = path.join(contentRoot, locale);
  const manifestPath = path.join(localeDir, "letters.json");
  const practiceTargetsPath = path.join(localeDir, "practice-targets.json");
  const letterManifest = await readJson(manifestPath);

  if (!letterManifest) {
    return;
  }

  const letters = validateLetterManifest(locale, letterManifest, manifestPath);
  if (existsSync(practiceTargetsPath)) {
    validatePracticeTargetManifest(
      locale,
      await readJson(practiceTargetsPath),
      practiceTargetsPath,
      letters,
    );
  }
  const expectedWordFiles = new Set(letters.map((letter) => letter.wordFile));
  const globalWordIds = new Set();
  const globalNormalizedWords = new Map();
  const globalExactWords = new Map();
  const globalImagePaths = new Set();

  for (const letter of letters) {
    const wordFilePath = path.join(localeDir, letter.wordFile);

    if (!existsSync(wordFilePath)) {
      addError(
        manifestPath,
        `letter "${letter.id}" references missing ${letter.wordFile}`,
      );
      continue;
    }

    await validateWordManifest(
      locale,
      letter,
      await readJson(wordFilePath),
      wordFilePath,
      globalWordIds,
      globalNormalizedWords,
      globalExactWords,
      globalImagePaths,
    );
  }

  const localeEntries = await readdir(localeDir);
  for (const entry of localeEntries) {
    if (/^words-.+\.json$/.test(entry) && !expectedWordFiles.has(entry)) {
      addError(
        path.join(localeDir, entry),
        "word file is not referenced by letters.json",
      );
    }
  }
}

async function main() {
  const localeEntries = await readdir(contentRoot, { withFileTypes: true });
  const locales = localeEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  for (const locale of locales) {
    if (!supportedLocales.has(locale)) {
      addError(
        path.join(contentRoot, locale),
        `unsupported locale directory "${locale}"`,
      );
      continue;
    }

    await validateLocale(locale);
  }

  for (const warning of warnings) {
    console.warn(`Warning: ${warning}`);
  }

  if (errors.length > 0) {
    console.error(`Content validation failed with ${errors.length} error(s):`);
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Content validation passed for ${locales.length} locale(s).`);
}

await main();
