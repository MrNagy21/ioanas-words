# Locale-Wide Content Refactor Specification

## Feature

Name: Locale-Wide Content Refactor

Route or module:

- `src/content/loaders.ts`
- `src/content/types.ts`
- `src/game/word-selection.ts`
- existing server routes that load content, especially `app/[locale]/page.tsx`, `app/[locale]/play/[letter]/page.tsx`, and `app/admin/words/page.tsx`

Program source:

- `docs/app-development-program/roadmap.md`
- `docs/app-development-program/content-architecture.md`
- `docs/app-development-program/features/admin-words-inventory/`
- `docs/app-development-program/word-inclusion-modes.md`

## Problem

The current app started as a static-first pilot where gameplay loads one starting-letter bucket at a time. The Admin Words Inventory feature then added reusable coverage helpers so `/admin/words` can compute starts-with, contains-only, mixed, and image readiness counts from the existing Romanian manifests.

The next feature needs to turn that helper work into the stable content loading foundation for the app. Server/app code should be able to ask for a complete locale-wide content catalog, while preserving static JSON files and keeping each word stored once in its canonical starting-letter file.

This refactor must not change child-facing gameplay yet. The later gameplay inclusion selector will decide when and how children can choose starts-with, contains-only, or mixed pools.

## Goals

- Provide a clear locale-wide content API for all supported locales.
- Let server/app code ask for all letters for a locale.
- Let server/app code ask for all word manifests for a locale.
- Let server/app code ask for all approved canonical words for a locale.
- Let server/app code ask for starts-with pools, contains-only pools, and mixed pools for a selected letter or target.
- Let server/app code ask for image readiness counts for any word pool and for the full locale.
- Preserve the existing static JSON content files under `content/<locale>/`.
- Preserve canonical word storage: each word lives once in the file for its starting letter.
- Preserve exact Romanian diacritic matching for derived pools.
- Reuse and harden the coverage helper work introduced by Admin Words Inventory.
- Keep existing gameplay behavior unchanged until the later gameplay inclusion selector feature.
- Keep the implementation static-first, database-free, and deployable on Vercel without credentials.

## Non-Goals

- No gameplay mode UI.
- No changes to the visible child-facing gameplay loop.
- No content expansion.
- No new Romanian words.
- No admin editing.
- No authentication.
- No database.
- No upload flow.
- No CSV import/export.
- No billing or accounts.
- No AI pronunciation.
- No generated locale index unless implementation proves static imports are no longer manageable.
- No child-facing link to `/admin/words`.
- No dev server on another port.

## Current Code Context

Relevant files:

- `src/content/loaders.ts`
- `src/content/types.ts`
- `src/game/word-selection.ts`
- `app/admin/words/page.tsx`
- `app/[locale]/page.tsx`
- `app/[locale]/play/[letter]/page.tsx`
- `content/ro/letters.json`
- `content/ro/words-a.json`
- `content/ro/words-c.json`
- `content/ro/words-m.json`
- `content/ro/words-p.json`
- `scripts/content/validate-content.mjs`

Existing behavior:

- `getLetters`, `getEnabledLetters`, and `getLetterContent` load Romanian static content.
- `getWordManifests`, `getAllWords`, and `getApprovedWords` already gather imported Romanian word manifests.
- Admin Words Inventory added coverage helpers for starts-with, contains-only, mixed, per-letter summaries, locale summaries, and image readiness counts.
- `/admin/words` uses `getLocaleCoverageSummary("ro")`.
- `/ro/play/<letter>` still loads `getLetterContent(locale, letter)`, so the child-facing game receives only the selected starting-letter bucket.
- `src/game/word-selection.ts` has future inclusion mode names, but its current eligibility check uses `normalized`, which folds Romanian diacritics and is not sufficient for exact `s` versus `ș`, `t` versus `ț`, `a` versus `ă` or `â`, and `i` versus `î` matching.

## Proposed Architecture

Create a stable locale-wide content contract in `src/content/loaders.ts` and `src/content/types.ts`.

The exact function names may change during implementation, but the capability set must include:

```ts
getLetters(locale);
getEnabledLetters(locale);
getWordManifest(locale, letterId);
getWordManifests(locale);
getAllWords(locale);
getApprovedWords(locale);
getWordsStartingWithTarget(locale, target);
getWordsContainingOnlyTarget(locale, target);
getMixedWordsForTarget(locale, target);
getImageReadinessCounts(words);
getLetterCoverageSummary(locale, letterOrTarget);
getLocaleCoverageSummary(locale);
```

The implementation may keep the current static import registry while Romanian content remains small:

```ts
const wordManifests = {
  ro: {
    a: wordsAJson,
    c: wordsCJson,
    m: wordsMJson,
    p: wordsPJson,
  },
};
```

If the content pack later grows enough that static imports become awkward, a generated locale index can be introduced in a separate feature. That index must be generated from canonical word manifests, not manually edited.

## Data Flow

1. Static JSON files remain the source of truth.
2. The loader registry imports available locale manifests.
3. Locale-wide helpers build a canonical approved word pool from imported manifests.
4. Derived pools are computed from the approved canonical pool.
5. Admin and later gameplay features consume the same derived pool helpers.
6. Existing child-facing gameplay keeps using starts-with behavior until the gameplay inclusion selector feature explicitly changes it.

## Canonical Word Rule

Each word remains stored once, in the file for its canonical starting letter.

Examples:

- `mașină` belongs in `content/ro/words-m.json`.
- `ușă` belongs in `content/ro/words-u.json`.
- `pește` belongs in `content/ro/words-p.json`.

If those words appear in a future `Ș` contains-only pool, they must reuse the canonical word object and canonical image path. Do not create duplicated records under `words-ș.json`, and do not create duplicate images under `/images/ro/ș/`.

## Matching Rules

Derived pools must use exact lowercased Romanian text, not folded normalized text.

Definitions:

- `startsWith`: approved canonical words whose exact lowercased `word` or `display` starts with the target.
- `containsOnly`: approved canonical words whose exact lowercased `word` or `display` includes the target but does not start with it.
- `mixed`: starts-with words followed by contains-only words, unless a later gameplay feature deliberately shuffles or samples for UI reasons.

Romanian diacritics must stay distinct:

- `a`, `ă`, and `â` are different targets.
- `i` and `î` are different targets.
- `s` and `ș` are different targets.
- `t` and `ț` are different targets.

The current `normalized` field remains useful for validation and ID consistency, but it must not be the source for exact derived-pool matching.

## Image Readiness

Image readiness counts should be available for:

- all approved words in a locale;
- starts-with pool for a target;
- contains-only pool for a target;
- mixed pool for a target;
- per-letter coverage summaries.

Counts should include at least:

- `total`;
- `ready`;
- `placeholder`.

Ready images must continue to use canonical word image paths. Placeholder states remain valid until content/image expansion replaces them.

## UX

This feature has no new child-facing UI.

Expected visible behavior:

- `/ro` remains the letter selection screen.
- `/ro/play/<letter>` remains starts-with gameplay.
- `/admin/words` remains public, read-only, and not linked from the child-facing app.

The implementation may update `/admin/words` internally to consume renamed or hardened helpers, but its visible behavior should remain equivalent unless the implementation plan explicitly calls out a small dashboard consistency improvement.

## Content And Validation

Static content format remains unchanged:

- `content/<locale>/letters.json`;
- `content/<locale>/words-<letter>.json`;
- word records remain canonical in their starting-letter files.

Validation requirements:

- Existing `pnpm run validate:content` behavior must continue to pass.
- Every enabled letter should have an imported word manifest or a deliberately documented empty state.
- Every imported word manifest locale must match the requested locale.
- Every imported word manifest letter must match its registry key and file letter.
- Every approved word ID must be unique across the locale.
- Derived starts-with and contains-only pools must be computable without duplicate word records.
- Exact Romanian diacritic matching must be covered by helper-level checks or clearly reviewable fixtures.
- Admin coverage counts must come from the same helpers intended for later gameplay inclusion modes.

No real content expansion should happen in this feature.

## Migration Strategy

This is a code architecture migration, not a data migration.

Recommended migration sequence:

1. Document current Admin coverage helper behavior and gaps.
2. Stabilize content types and loader return shapes.
3. Centralize exact target matching so Admin and future gameplay cannot drift.
4. Preserve compatibility wrappers where practical so current routes keep working.
5. Update `/admin/words` to use the stable locale-wide API.
6. Leave `/ro/play/<letter>` in starts-with mode with the same playable words as before.
7. Run validation, lint, type/build checks, and targeted browser checks if code changes are made.

## Acceptance Criteria

- Static JSON files remain the source of truth.
- Each word remains stored once in its canonical starting-letter file.
- Server/app code can request all letters for a locale.
- Server/app code can request all word manifests for a locale.
- Server/app code can request all approved words for a locale.
- Server/app code can request starts-with pools for a target.
- Server/app code can request contains-only pools for a target.
- Server/app code can request mixed pools for a target.
- Server/app code can request image readiness counts for a locale and for derived pools.
- Exact Romanian diacritic matching is preserved for derived pools.
- Admin coverage and future gameplay pool helpers share the same matching logic.
- Existing child-facing gameplay remains starts-with only.
- `/admin/words` remains public, read-only, and unlinked from the child-facing app.
- No database, auth, upload, CSV, billing, accounts, content expansion, or AI pronunciation feature is introduced.
- Existing content validation still passes.

## QA Plan

Spec-only work:

```txt
Review markdown for consistency and handoff quality.
No build required unless code changes are made.
```

Implementation work:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

If `pnpm` is unavailable in the Codex desktop shell, fix the Node/Corepack or nvm shell setup before treating verification as complete. For type checking, keep this additional command:

```txt
./node_modules/.bin/tsc --noEmit
```

Browser checks are required only when code is touched and the user-running dev server is reachable on port `3000`.

Check:

- `http://localhost:3000/ro`
- `http://localhost:3000/ro/play/a`
- `http://localhost:3000/admin/words`

Expected browser behavior:

- `/ro` still shows the Romanian letter selection.
- `/ro/play/a` still behaves as starts-with gameplay.
- `/admin/words` still renders read-only coverage data.
- No child-facing link to `/admin/words` appears.

If `http://localhost:3000` is not reachable, ask the user to start the dev server on port `3000`. Do not start another port.

## Rollout Notes

This feature is an internal foundation for the next gameplay inclusion selector. It should ship without changing the child-facing mode options.

The next feature after this refactor should be:

```txt
docs/app-development-program/features/gameplay-inclusion-mode-selector/
```

That later feature can use the locale-wide approved word pool and exact matching helpers to expose starts-with, contains-only, and mixed modes in the play screen.
