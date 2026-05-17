# Admin Words Inventory Status

Last updated: 2026-05-17

## Current Phase

Phase: Batch 4 complete

Overall status: The feature package has been created under `docs/app-development-program/features/admin-words-inventory/`. Batch 1 added reusable content coverage helpers for Romanian static manifests. Batch 2 added the public read-only `/admin/words` summary route with Romanian locale counts and per-enabled-letter coverage rows. Batch 3 extended `/admin/words` with starts-with and contains-only word detail lists, canonical ready-image thumbnails, placeholder image states, and compact responsive metadata rows. Batch 4 polished spacing and list readability, tightened accessible labels/headings, clarified thumbnail and placeholder image announcements, and recorded final acceptance notes. A follow-up admin words update now opens a read-only details pop-up when a word row is clicked, showing a larger image and all canonical word fields. The feature is implementation-complete; browser verification is still pending a user-running dev server on port `3000`.

## Completed

- Created the feature folder.
- Drafted `spec.md`.
- Drafted batch plan in `plan.md`.
- Created this feature-specific `status.md`.
- Confirmed intended route: `/admin/words`.
- Confirmed first implementation should be public, read-only, static-first, and database-free.
- Confirmed this feature should come before the locale-wide gameplay mode selector and broad Romanian content expansion.
- Started and completed Batch 1: Content Coverage Helpers.
- Added reusable coverage summary types for image readiness, per-letter coverage, and locale-wide coverage.
- Added loader helpers to gather imported Romanian word manifests and approved words across the locale.
- Added exact starts-with, contains-only, and mixed word helpers.
- Added image readiness counting for ready and placeholder image states.
- Added per-letter and locale-wide coverage summary helpers for the future admin page.
- Kept existing gameplay word selection behavior unchanged.
- Started Batch 2: Public Route And Summary View.
- Added `app/admin/words/page.tsx` as a public read-only route.
- Rendered the Admin Words header with a compact read-only inventory note and Romanian locale label.
- Rendered summary counts from `getLocaleCoverageSummary("ro")`:
  - enabled letter count;
  - total approved words;
  - ready image count;
  - placeholder image count;
  - total starts-with assignments;
  - total contains-only assignments.
- Rendered one compact coverage table row per enabled Romanian letter with:
  - letter label;
  - starts-with count;
  - contains-only count;
  - mixed count;
  - ready image count among starts-with words;
  - placeholder image count among starts-with words;
  - link to `/ro/play/<letter>`.
- Added restrained responsive admin dashboard styles in `app/globals.css`.
- Kept the page independent from child-facing navigation.
- Completed Batch 2: Public Route And Summary View.
- Started Batch 3: Word Detail Lists And Image States.
- Added per-enabled-letter detail sections to `/admin/words`.
- Added starts-with word detail lists from the existing coverage helper output.
- Added contains-only word detail lists from the existing coverage helper output.
- Rendered ready image thumbnails with each word's canonical `image` path.
- Rendered clear placeholder thumbnail and badge states for future placeholder records.
- Showed each word's display text, stable ID, category, difficulty, and image status.
- Kept contains-only records tied to the canonical word object, ID, and image metadata rather than duplicating records.
- Added concise empty states for missing starts-with or contains-only pools.
- Added responsive compact list styling for desktop and mobile widths.
- Completed Batch 3: Word Detail Lists And Image States.
- Started and completed Batch 4: Polish, Accessibility, And Documentation.
- Tightened `/admin/words` dashboard spacing so summary, coverage, and detail sections have clearer vertical rhythm.
- Improved coverage table readability with stronger row spacing, line height, and alternating row background.
- Improved word detail list readability with clearer pool headers, row separation, and responsive metadata spacing.
- Verified the page keeps one visible `h1` and uses labelled `h2`, `h3`, and `h4` sections for summary, coverage, letter pools, and word lists.
- Added accessible labels to repeated `Open wheel` links so keyboard and assistive technology users can distinguish the destination letter.
- Marked the decorative letter badge inside each detail heading as hidden from assistive technology to avoid duplicate heading announcements.
- Added accessible labels to detail-list count badges and word-record lists.
- Clarified ready thumbnail alt text as image thumbnails while preserving each word record's existing alt text.
- Clarified placeholder thumbnail labels as placeholder image states tied to the word display and existing alt text.
- Kept `/admin/words` public, read-only, static-first, and independent from child-facing navigation.
- Added a client-side `WordDetailList` component for the existing read-only word rows.
- Made each word row clickable with dialog semantics.
- Added a word details pop-up with a larger ready image or placeholder image state.
- The pop-up shows all current canonical word fields: ID, word, display, normalized form, part of speech, difficulty, age band, category, image path, image status, alt text, source, license, and status.
- Added Escape close, backdrop close, close-button focus, focus return, and focus trapping for the details pop-up.
- Kept the feature public, read-only, static-first, and free of auth, uploads, edits, database writes, and child-facing navigation changes.

## Decisions

- The first admin feature is a content inventory, not an editor.
- The page remains public for now.
- The route should not be linked from the child-facing app unless a later product decision requests it.
- Each word remains canonical in its starting-letter file.
- Contains-only pools should be derived from the full approved locale catalog.
- The inventory should introduce reusable coverage helpers for later gameplay inclusion modes.
- Exact Romanian letter matching uses lowercased `word` and `display` values because the current `normalized` field folds diacritics.
- Exact matching deliberately keeps Romanian diacritics distinct: `s` and `ș`, `t` and `ț`, `a`, `ă`, and `â`, plus `i` and `î` are not collapsed.
- The Batch 1 helpers gather all currently imported static manifests for the locale, then compute coverage for enabled letters.
- Batch 2 intentionally renders summary and per-letter coverage counts only. Word detail lists and thumbnails are deferred to Batch 3.
- The admin route uses its own full-height scroll container because the child-game shell globally disables body scrolling.
- Batch 3 renders detail lists directly from `LetterCoverageSummary.startsWithWords` and `LetterCoverageSummary.containsOnlyWords` so exact matching remains centralized in the content helpers.
- Ready thumbnails use the canonical `ContentWord.image` value with the existing word alt text; placeholder thumbnails remain visible using the stable first-letter slot pattern.
- Batch 4 keeps ready thumbnails meaningful to screen readers because image review is part of the inventory task; alt text now prefixes the existing word alt with `Ready image thumbnail`.
- Placeholder thumbnails are announced as placeholder image states, not as ready artwork, and still expose the expected word alt text.
- Repeated `Open wheel` links use `aria-label` values with the Romanian letter label while preserving compact visible link text.
- Word detail pop-ups are client-only UI over server-loaded static content; the canonical content still comes from the existing static JSON manifests.

## Open Questions

- Should disabled letters appear in the first inventory page?
- Should priority tiers appear in the first implementation or wait until more Romanian letters exist?
- Should contains-only details include words from canonical letters that are not enabled yet once more manifests exist?

## Exceptions

- `pnpm` is not available on `PATH` in the current Codex desktop shell, and `corepack`/`npm` are also unavailable there. Exact `pnpm run lint` and `pnpm run build` verification still needs a normal terminal with pnpm installed.
- Local production build is blocked in this Codex shell by the installed Next SWC native binary failing macOS code-signature validation before app compilation.
- Browser verification is pending because no user-running dev server was reachable on port `3000`.

## Acceptance Status

- `/admin/words` renders as a public read-only route in the implementation; local browser rendering still needs confirmation once the user starts the dev server on port `3000`.
- Existing static Romanian content is used through reusable coverage helpers; no database, auth, upload, edit, CSV, or network dependency was added.
- Every enabled Romanian letter from the current manifest is represented in the coverage summary and detail sections.
- Starts-with, contains-only, and mixed counts are derived centrally from approved canonical word records.
- Ready image thumbnails use canonical image paths and expose existing word alt text as thumbnail alt text.
- Placeholder image states remain visible and explicitly labelled.
- Word rows show display text, ID, category, difficulty, and image status.
- Clicking a word row opens a details pop-up with the larger image and all current canonical word metadata fields.
- Each letter section and table row links to the existing `/ro/play/<letter>` route.
- No child-facing link to `/admin/words` was added.

## Verification

Batch 1 verification used the documented fallback because `pnpm` was unavailable in the Codex desktop environment:

```txt
bun run validate:content
bun run lint
```

Results:

- `bun run validate:content` passed for 1 locale.
- Content validation reported existing image-size warnings above the 12 KB warning threshold for some `M` and `P` ready images, but no errors.
- `bun run lint` passed.

Batch 2 verification:

```txt
./node_modules/.bin/eslint .
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/next build
curl -I --max-time 3 http://localhost:3000/admin/words
```

Results:

- `./node_modules/.bin/eslint .` passed.
- `./node_modules/.bin/tsc --noEmit` passed.
- `./node_modules/.bin/next build` failed before compilation because Next could not load the installed `@next/swc-darwin-arm64` native binary due macOS code-signature validation.
- `http://localhost:3000/admin/words` was not reachable because no dev server was listening on port `3000`.

Batch 3 verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit
bun run build
curl -I --max-time 3 http://localhost:3000/admin/words
```

Results:

- `pnpm run validate:content`, `pnpm run lint`, and `pnpm run build` could not start because `pnpm` is not available on `PATH` in this shell.
- `bun run validate:content` passed for 1 locale.
- Content validation still reports the existing image-size warnings above the 12 KB warning threshold for some `M` and `P` ready images, but no errors.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit` passed.
- `bun run build` failed before compilation because Next could not load the installed `@next/swc-darwin-arm64` native binary due macOS code-signature validation.
- `http://localhost:3000/admin/words` was not reachable because no dev server was listening on port `3000`.

Batch 4 verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
bun run validate:content
bun run lint
./node_modules/.bin/tsc --noEmit
bun run build
curl -I --max-time 3 http://localhost:3000/admin/words
```

Results:

- `pnpm run validate:content`, `pnpm run lint`, and `pnpm run build` could not start because `pnpm` is not available on `PATH` in this shell.
- `bun run validate:content` passed for 1 locale.
- Content validation still reports the existing image-size warnings above the 12 KB warning threshold for some `M` and `P` ready images, but no errors.
- `bun run lint` passed.
- `./node_modules/.bin/tsc --noEmit` passed.
- `bun run build` failed before compilation because Next could not load the installed `@next/swc-darwin-arm64` native binary due macOS code-signature validation.
- `http://localhost:3000/admin/words` was not reachable because no dev server was listening on port `3000`.

Word detail pop-up follow-up verification:

```txt
./node_modules/.bin/prettier --check app/admin/words/page.tsx app/admin/words/word-detail-list.tsx app/globals.css docs/status.md docs/app-development-program/features/admin-words-inventory/status.md
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/eslint .
bun run validate:content
./node_modules/.bin/next build
curl -I --max-time 3 http://localhost:3000/admin/words
```

Results:

- Prettier check passed after formatting the touched component and CSS files.
- `./node_modules/.bin/tsc --noEmit` passed.
- `./node_modules/.bin/eslint .` passed.
- `bun run validate:content` passed for 1 locale.
- Content validation still reports the existing image-size warnings above the 12 KB warning threshold for some `M` and `P` ready images, but no errors.
- `./node_modules/.bin/next build` failed before compilation because Next could not load the installed `@next/swc-darwin-arm64` native binary due macOS code-signature validation.
- `http://localhost:3000/admin/words` was not reachable because no dev server was listening on port `3000`.
