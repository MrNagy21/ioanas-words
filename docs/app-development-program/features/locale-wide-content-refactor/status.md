# Locale-Wide Content Refactor Status

Last updated: 2026-05-16

## Current Phase

Phase: Complete

Overall status: Locale-Wide Content Refactor is implementation-complete and final acceptance is documented. The app now has a stable static-first locale-wide content API for letters, word manifests, approved words, derived starts-with, contains-only, mixed pools, and image readiness counts. Exact Romanian matching is centralized around lowercased `word` and `display`, not folded `normalized`. `/admin/words` uses the shared helper path, `/ro/play/<letter>` remains starts-with-only, and no gameplay mode UI, content expansion, database, auth, upload, CSV, billing, accounts, admin editing, or AI pronunciation work was added.

## Completed

- Created the feature folder with `spec.md`, `plan.md`, and this feature-specific `status.md`.
- Confirmed the feature follows Admin Words Inventory in the app development program roadmap.
- Confirmed static JSON files remain the source of truth under `content/<locale>/`.
- Confirmed each word remains canonical in its starting-letter file.
- Confirmed derived starts-with, contains-only, and mixed pools must preserve exact Romanian diacritic matching.
- Confirmed existing child-facing gameplay remains starts-with only until the later gameplay inclusion selector feature.
- Confirmed the existing Admin Words Inventory coverage helper work is the starting point for the refactor.
- Completed Batch 1: Helper Audit And API Contract.
- Added `ContentTarget` and `DerivedWordPools` types.
- Added `src/content/matching.ts` as the shared exact matching path for derived pools and future gameplay filtering.
- Added `getWordManifest(locale, letterId)` for single static word-manifest lookup.
- Added target-based helpers: `getWordsStartingWithTarget(locale, target)`, `getWordsContainingOnlyTarget(locale, target)`, `getMixedWordsForTarget(locale, target)`, and `getDerivedWordPoolsForTarget(locale, target)`.
- Kept existing letter-based helper names as compatibility wrappers: `getStartsWithWordsForLetter`, `getContainsOnlyWordsForLetter`, and `getMixedWordsForLetter`.
- Updated `getLetterCoverageSummary` to accept either a `ContentLetter` or raw target string while preserving the summary shape used by `/admin/words`.
- Updated `src/game/word-selection.ts` to use the shared exact matcher rather than folded `normalized` matching.
- Passed the current locale from `WheelGame` into `getPlayableWords`.
- Completed Batch 2: Locale Manifest Registry Hardening.
- Routed `getWordManifest`, `getWordsForLetter`, `getAllWords`, `getApprovedWords`, `getApprovedWordsForLetter`, `getLetterContent`, and derived-pool defaults through `getWordManifests(locale)`.
- Ensured `getWordManifests(locale)` returns imported manifests in `letters.json` `sortOrder`, with extra imported manifests after known letters as validation-visible outliers.
- Added `getLettersMissingWordManifests(locale)` so enabled letters without imported manifests are discoverable.
- Preserved missing-manifest runtime behavior as empty word lists: `getWordManifest` returns `null`, `getWordsForLetter` returns `[]`, and `getLetterContent` returns the selected letter with empty `words` and `approvedWords` when the letter exists.
- Kept `validate:content` as the production guard for enabled letters whose declared `wordFile` is missing from disk.
- Cloned returned word-manifest objects and `words` arrays so callers cannot mutate canonical static imports.
- Completed Batch 3: Exact Matching And Derived Pool Helpers.
- Exported `getExactWordMatchValues(locale, word)` from the shared matcher.
- Kept `wordStartsWithTarget` and `wordContainsTarget` based on exact lowercased `word` and `display`, not folded `normalized`.
- Made starts-with, contains-only, mixed, and derived-pool helpers duplicate-safe by stable word ID.
- Preserved deterministic mixed-pool ordering as starts-with words followed by contains-only words.
- Added `src/content/matching.check.ts` with runnable checks for `s` versus `ș`, `t` versus `ț`, `a` versus `ă` versus `â`, `i` versus `î`, contains-only exclusion of starts-with words, mixed-pool deduplication, and derived-pool image count consistency.
- Completed Batch 4: Coverage And Image Readiness Consolidation.
- Added `DerivedWordPoolImageCounts` and exposed derived-pool readiness counts through `DerivedWordPools.imageCounts`.
- Routed `getLetterCoverageSummary` image readiness fields through `getDerivedWordPoolsForTarget`.
- Preserved existing `startsWithImageCounts`, `containsOnlyImageCounts`, and `mixedImageCounts` compatibility fields on `LetterCoverageSummary`.
- Updated `/admin/words` to read starts-with ready and placeholder counts from `summary.imageCounts.startsWith`.
- Kept ready thumbnails tied to each canonical `ContentWord.image` path.
- Completed Batch 5: Gameplay Compatibility Pass.
- Added `src/game/gameplay-compatibility.check.ts` to assert every enabled Romanian play route keeps the default approved starts-with gameplay pool.
- Confirmed enabled Romanian play static params remain `a`, `c`, `m`, and `p`.
- Confirmed the play route still loads `getLetterContent(locale, letter)` and does not pass a locale-wide mixed or contains-only pool into the child-facing wheel.
- Confirmed `WheelGame` still omits a gameplay inclusion selector and relies on the default `starts-with` mode.
- Confirmed remove, reset, and result modal behavior was not changed.
- Completed Batch 6: Documentation And Final Acceptance.
- Checked the feature spec acceptance criteria and documented the remaining verification gaps.
- Updated global `docs/status.md` with feature completion notes and the next recommended feature.
- Marked Batch 6 complete in this feature plan.
- Confirmed no app-development-program roadmap or architecture documents needed changes because feature order and architecture did not change.

## In Progress

- No implementation is currently in progress.

## Decisions

- This feature is a content-loading architecture refactor, not a gameplay feature.
- Static JSON files under `content/<locale>/` remain the content source of truth.
- Canonical word storage remains unchanged: each word lives once in its starting-letter file.
- Derived contains-only and mixed pools are views over the approved locale catalog, not separate manifests.
- Exact Romanian target matching uses lowercased `word` and `display`, not the folded `normalized` field.
- The current `normalized` field remains useful for validation and ID consistency, but not for diacritic-sensitive derived-pool matching.
- Image readiness counts are available for full-locale and derived-pool views.
- `/admin/words` remains public, read-only, and unlinked from the child-facing app.
- `/ro/play/<letter>` keeps starts-with-only visible gameplay behavior for this feature.
- A generated locale index remains deferred until static imports become awkward during later content expansion.
- The stable derived-pool API accepts both raw target strings and `ContentLetter` objects.
- Existing letter-based Admin Inventory helper names remain available as wrappers during the migration.
- Mixed pools preserve deterministic `startsWith + containsOnly` ordering at the loader level; shuffling or sampling remains future gameplay responsibility.
- Runtime missing-manifest behavior is intentionally tolerant with `null` or empty word arrays, while `validate:content` remains the production guard.
- Returned manifest objects and word arrays are defensive copies of static JSON imports; word record objects remain canonical typed records.
- `getLetterContent(locale, letterId)` remains the starts-with-only play-route compatibility wrapper until the gameplay inclusion selector passes locale-wide pools intentionally.
- The `WordInclusionMode` constants and default-mode filtering in `src/game/word-selection.ts` remain future-ready but hidden from the child-facing UI.
- The later gameplay inclusion selector feature should remove or narrow play-route reliance on `getLetterContent` and pass the selected target plus the needed locale-wide approved pool into gameplay filtering.

## Deferred Questions

- Whether disabled letters should be included in locale-wide coverage helpers by default is deferred. This is not blocking because current enabled Romanian routes and admin coverage use the existing enabled-letter flow.

## Exceptions

- The default shell `PATH` still does not include `pnpm`. Batch 6 used `/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm` for the requested `pnpm` commands.
- `pnpm run validate:content` passes but reports existing warning-threshold image sizes above `12 KB` for five ready `M` and `P` images. They remain below the `20 KB` hard maximum.
- `pnpm run build` is blocked in the current Codex desktop environment by the local Next SWC macOS code-signing issue before app compilation. The required fallback `./node_modules/.bin/tsc --noEmit --incremental false` passed.
- Browser verification for `/ro`, `/ro/play/a`, and `/admin/words` was not run because `http://localhost:3000` is not reachable and the user owns the dev server on port `3000`.

## Acceptance Status

- Static JSON files remain the source of truth: complete.
- Each word remains stored once in its canonical starting-letter file: complete.
- Server/app code can request all letters for a locale: complete.
- Server/app code can request all word manifests for a locale: complete.
- Server/app code can request all approved words for a locale: complete.
- Server/app code can request starts-with pools for a target: complete.
- Server/app code can request contains-only pools for a target: complete.
- Server/app code can request mixed pools for a target: complete.
- Server/app code can request image readiness counts for a locale and for derived pools: complete.
- Exact Romanian diacritic matching is preserved for derived pools: complete.
- Admin coverage and future gameplay pool helpers share the same matching logic: complete.
- Existing child-facing gameplay remains starts-with only: complete.
- `/admin/words` remains public, read-only, and unlinked from the child-facing app: complete.
- No database, auth, upload, CSV, billing, accounts, content expansion, or AI pronunciation feature was introduced: complete.
- Existing content validation still passes: complete, with documented image-size warnings below the hard maximum.
- Browser verification: blocked until the user starts the dev server on port `3000`.
- Local production build verification: blocked by the local SWC code-signing issue; TypeScript fallback passed.

## Verification

Batch 6 helper checks:

```txt
bun src/content/matching.check.ts
bun src/game/gameplay-compatibility.check.ts
```

Results:

- Both passed.

Batch 6 requested commands:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

Results:

- `pnpm run validate:content` passed using `/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm`, with existing image-size warnings above the `12 KB` warning threshold for some ready `M` and `P` images. All remain below the hard maximum.
- `pnpm run lint` passed using `/Users/darius/.nvm/versions/node/v24.15.0/bin/pnpm`.
- `pnpm run build` failed before app compilation because the installed Next SWC native binary failed macOS code-signature validation in the Codex desktop environment.

Batch 6 fallback/type verification:

```txt
./node_modules/.bin/tsc --noEmit --incremental false
```

Result:

- Passed.

Batch 6 browser reachability checks:

```txt
curl -I --max-time 3 http://localhost:3000/ro
curl -I --max-time 3 http://localhost:3000/ro/play/a
curl -I --max-time 3 http://localhost:3000/admin/words
```

Result:

- All failed to connect; no dev server was listening on port `3000`.

## Next Recommended Feature

Create the next feature package:

```txt
docs/app-development-program/features/gameplay-inclusion-mode-selector/
```

This feature should expose the child-facing selector for starts-with, contains-only, and mixed word pools, using the locale-wide helper API completed here. It must keep the default mode as starts-with and must not add content expansion, database, auth, admin editing, upload, CSV, billing, accounts, or AI pronunciation.

## Ready-To-Copy Prompt

```txt
You are working in /Users/darius/mrNagySSC/ioana/word-wheel.

Before editing docs or code, read:
1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/plan.md
5. docs/status.md
6. docs/app-development-program/README.md
7. docs/app-development-program/roadmap.md
8. docs/app-development-program/content-architecture.md
9. docs/app-development-program/word-inclusion-modes.md
10. docs/app-development-program/review-and-qa.md
11. docs/app-development-program/features/locale-wide-content-refactor/spec.md
12. docs/app-development-program/features/locale-wide-content-refactor/status.md

Task:
Start the next feature package: Gameplay Inclusion Mode Selector.

Scope:
- Create docs/app-development-program/features/gameplay-inclusion-mode-selector/spec.md.
- Create docs/app-development-program/features/gameplay-inclusion-mode-selector/plan.md.
- Create docs/app-development-program/features/gameplay-inclusion-mode-selector/status.md.
- Base the spec on the completed locale-wide content API from src/content/loaders.ts and exact matching from src/content/matching.ts.
- Define child-facing mode behavior for starts-with, contains-only, and mixed pools.
- Keep starts-with as the default mode.
- Define how remove/reset/modal behavior should work across all modes.
- Define acceptance criteria and QA for /ro, /ro/play/a, and any affected admin coverage.
- Update docs/status.md when the feature package is created.

Non-goals:
- Do not add content expansion.
- Do not add admin editing, auth, database, upload, CSV, billing, accounts, or AI pronunciation.
- Do not link /admin/words from the child-facing app.
- Do not start a dev server on another port.

QA:
- For spec-only work, review markdown consistency and handoff quality.
- If code is changed, run pnpm run validate:content, pnpm run lint, and pnpm run build if available.
- If pnpm/build is blocked by the local SWC code-signing issue, document it and run ./node_modules/.bin/tsc --noEmit --incremental false.
- Browser verification is only needed if http://localhost:3000 is already running; otherwise ask the user to start the dev server on port 3000.
```
