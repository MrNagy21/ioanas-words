# Locale-Wide Content Refactor Implementation Plan

This plan is split into small batches. After each implementation batch, perform the review checkpoint and update this feature `status.md`. Update global `docs/status.md` when the feature starts, completes, or materially changes the next task.

## Batch 0: Spec Package

Status: Complete when `spec.md`, `plan.md`, and `status.md` exist and have been reviewed.

Tasks:

- Create the feature spec package.
- Confirm the refactor preserves static JSON content files.
- Confirm the refactor preserves canonical starting-letter word storage.
- Confirm exact Romanian diacritic matching is required for derived pools.
- Confirm gameplay behavior does not change in this feature.
- Record decisions and open questions in `status.md`.

Review checkpoint:

- The spec can be implemented without the original conversation.
- The plan has clear migration batches and QA expectations.
- Non-goals are explicit enough to prevent accidental gameplay, admin editing, auth, database, or content expansion work.

Suggested verification:

```txt
Review markdown for consistency and readable handoff quality.
No build required for spec-only work.
```

## Batch 1: Helper Audit And API Contract

Status: Complete

Tasks:

- Audit the current Admin Words Inventory helper work in `src/content/loaders.ts` and `src/content/types.ts`.
- Identify which existing helpers are stable and which need renaming, parameter changes, or compatibility wrappers.
- Define the locale-wide API surface for letters, word manifests, approved words, derived pools, and image readiness counts.
- Decide whether derived-pool helpers accept a `ContentLetter`, a raw target string, or both.
- Preserve existing route behavior while introducing the stable API.

Review checkpoint:

- The desired content API is visible in code through exported functions and types.
- Existing consumers still compile or have clear compatibility wrappers.
- The code has one matching path for starts-with, contains-only, and mixed pools.

Suggested verification:

```txt
pnpm run lint
```

If `pnpm` is unavailable:

```txt
pnpm run lint
./node_modules/.bin/tsc --noEmit
```

## Batch 2: Locale Manifest Registry Hardening

Status: Complete

Tasks:

- Harden the static locale manifest registry so `getWordManifests(locale)` is the single source for imported word files.
- Add or document behavior for enabled letters whose word manifest is not imported yet.
- Ensure manifest ordering follows `letters.json` sort order.
- Ensure all returned manifest and word arrays are safe for callers to consume without mutating canonical imports.
- Keep static imports; do not introduce a database or remote fetch.

Review checkpoint:

- Server/app code can request all letters and all imported word manifests for Romanian.
- Missing-manifest behavior is intentional and documented in feature status.
- Existing `/ro` and `/ro/play/<letter>` route behavior remains unchanged.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
```

## Batch 3: Exact Matching And Derived Pool Helpers

Status: Complete

Tasks:

- Centralize exact target matching for Romanian derived pools.
- Ensure matching uses exact lowercased `word` and `display`, not folded `normalized`.
- Provide starts-with, contains-only, and mixed helpers over the approved locale pool.
- Ensure mixed pools do not duplicate a word that qualifies through multiple exact values.
- Align or clearly separate `src/game/word-selection.ts` from the content-level exact matching helpers so future gameplay does not drift.
- Add small helper-level checks or fixtures for Romanian diacritic-sensitive targets where practical.

Review checkpoint:

- `s` and `ș`, `t` and `ț`, `a`, `ă`, and `â`, plus `i` and `î` stay distinct.
- Contains-only excludes starts-with words.
- Mixed equals starts-with plus contains-only without duplicate word records.
- Existing gameplay remains starts-with only.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
```

If type-level verification is useful:

```txt
./node_modules/.bin/tsc --noEmit
```

## Batch 4: Coverage And Image Readiness Consolidation

Status: Complete

Tasks:

- Consolidate image readiness counting around the stable locale-wide API.
- Ensure locale-wide, starts-with, contains-only, mixed, and per-letter summaries use the same count helper.
- Update `/admin/words` to consume the stable API if names or shapes changed.
- Preserve the public read-only behavior and current dashboard content.
- Keep ready thumbnails tied to canonical word image paths.

Review checkpoint:

- `/admin/words` counts still match helper output.
- Ready and placeholder image counts are available for any derived pool.
- The page remains public, read-only, and unlinked from child-facing navigation.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/admin/words
```

## Batch 5: Gameplay Compatibility Pass

Status: Complete

Tasks:

- Confirm `/ro/play/<letter>` still receives the same starts-with approved words it had before the refactor.
- Avoid exposing the future inclusion selector.
- Avoid changing remove/reset/modal behavior.
- Keep `generateStaticParams` behavior stable for enabled Romanian letters.
- Document any compatibility wrappers that should be removed by the later gameplay inclusion selector feature.

Review checkpoint:

- Child-facing gameplay behavior is unchanged.
- No mode UI appears.
- The future selector has a clear content API to consume later.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

Browser, only if the user-running dev server is already reachable:

```txt
http://localhost:3000/ro
http://localhost:3000/ro/play/a
```

If `http://localhost:3000` is not reachable, ask the user to start the dev server on port `3000`. Do not start another port.

## Batch 6: Documentation And Final Acceptance

Status: Complete

Tasks:

- Update this feature `status.md` with final decisions, exceptions, and verification results.
- Update global `docs/status.md` with completion notes and the next recommended feature.
- Update app-development-program docs only if the feature order or architecture changed.
- Prepare the ready-to-copy prompt for the next feature package or implementation batch.

Review checkpoint:

- Acceptance criteria in `spec.md` are checked off or exceptions are documented.
- Verification gaps are explicit.
- The next feature can start from the documented loader API without re-deriving decisions.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

## Exit Criteria

- Locale-wide content helpers expose letters, word manifests, approved words, derived pools, and image readiness counts.
- Exact Romanian diacritic matching is centralized and documented.
- Admin coverage uses the same helper path intended for later gameplay modes.
- Existing child-facing gameplay remains unchanged.
- Static JSON content and canonical word storage are preserved.
- No database, auth, admin editing, uploads, CSV, billing, accounts, content expansion, or AI pronunciation work is introduced.
