# Content Architecture

This document defines the preferred content architecture for the next phase.

## Core Rule

Store each word exactly once, in the file for its canonical starting letter.

Examples:

- `mașină` belongs in `content/ro/words-m.json`.
- `ușă` belongs in `content/ro/words-u.json`.
- `pește` belongs in `content/ro/words-p.json`.

When practicing `Ș`, these words can appear in "contains Ș" mode by scanning the approved Romanian word catalog. They should not be duplicated into `words-ș.json`.

## Why Not Duplicate Contains Words

Duplicating full word objects across files creates avoidable problems:

- duplicate IDs;
- duplicate image paths;
- drift in display text, alt text, status, source, or license;
- harder validation;
- unclear ownership when a word changes;
- unnecessary content review work.

The app should treat "contains target" as a view over the canonical catalog.

## Current State

The current content model has:

- `content/ro/letters.json`;
- one `words-<letter>.json` file per enabled starter letter;
- strict validation that each word starts with its file letter;
- `src/game/word-selection.ts`, which already knows the future inclusion mode names.

The missing foundation is a locale-wide word catalog loader.

## Recommended Loader Shape

Add server-side helpers along these lines:

```ts
getWordManifests(locale)
getAllWords(locale)
getApprovedWords(locale)
getWordsStartingWithTarget(locale, target)
getWordsContainingTarget(locale, target)
getWordsForInclusionMode(locale, target, mode)
getContentCoverage(locale)
```

The exact names may differ, but the capabilities should exist.

## Static Imports Versus Generated Index

For the next step, static imports are acceptable if the number of JSON files remains manageable.

When the Romanian pack grows to many files and route bundles become awkward, add a generated locale-level index, for example:

```txt
content/ro/index.generated.json
```

The generated index can contain word IDs, normalized forms, target coverage, image readiness, and file references. It should be generated from canonical word manifests, not manually edited.

## Optional Manual Overrides

If future therapy or curriculum needs require manual inclusion control, use references by ID rather than duplicated word records.

Example shape:

```json
{
  "locale": "ro",
  "targets": {
    "ș": {
      "containsPreferredWordIds": ["ro-m-masina", "ro-u-usa", "ro-p-peste"],
      "hiddenWordIds": []
    }
  }
}
```

This should be introduced only when derivation is not enough.

## Image Ownership

The canonical word owns the image.

Example:

- `content/ro/words-m.json` contains `ro-m-masina`.
- The image is `/images/ro/m/ro-m-masina.webp`.
- If `mașină` appears in `Ș` contains mode, it still uses `/images/ro/m/ro-m-masina.webp`.

Do not create `/images/ro/ș/ro-m-masina.webp`.

## Validator Implications

Keep the existing rule that each canonical `words-<letter>.json` word starts with that file's letter.

Add validation for:

- every enabled letter has a word file;
- every canonical word has a unique ID;
- every ready image exists once;
- derived contains pools can be computed;
- admin inventory counts match loader results.

If practice targets are added later, validate them separately from alphabet letters.

## Practice Targets

Letters and practice targets are related but not identical.

Alphabet letters:

- `a`, `ă`, `â`, `b`, `c`, etc.

Future Romanian practice targets:

- `ce`
- `ci`
- `ge`
- `gi`
- `che`
- `chi`
- `ghe`
- `ghi`

Practice targets should have:

- stable `id`;
- display `label`;
- target type, such as `letter` or `letter-group`;
- matching strategy;
- enabled flag;
- sort order.

Do not force these into `letters.json` as if they were normal alphabet letters unless a future spec deliberately renames that manifest to a broader target manifest.

