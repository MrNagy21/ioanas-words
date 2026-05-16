# Locale-Wide Content Refactor Status

Last updated: 2026-05-16

## Current Phase

Phase: Spec package drafted

Overall status: The feature package has been created under `docs/app-development-program/features/locale-wide-content-refactor/`. This is a spec-only step. No content loader refactor has been implemented yet, no gameplay behavior has changed, and no content has been expanded.

## Completed

- Created the feature folder.
- Drafted `spec.md`.
- Drafted batch plan in `plan.md`.
- Created this feature-specific `status.md`.
- Confirmed this feature follows Admin Words Inventory in the app development program roadmap.
- Confirmed the refactor must preserve static JSON files.
- Confirmed each word remains canonical in its starting-letter file.
- Confirmed derived starts-with, contains-only, and mixed pools must preserve exact Romanian diacritic matching.
- Confirmed existing child-facing gameplay remains starts-with only until the later gameplay inclusion selector feature.
- Confirmed the existing Admin Words Inventory coverage helper work is the starting point for the refactor.

## In Progress

- No implementation is currently in progress.

## Decisions

- This feature is a content-loading architecture refactor, not a gameplay feature.
- Static JSON files under `content/<locale>/` remain the content source of truth.
- Canonical word storage remains unchanged: each word lives once in its starting-letter file.
- Derived contains-only and mixed pools are views over the approved locale catalog, not separate manifests.
- Exact Romanian target matching should use lowercased `word` and `display`, not the folded `normalized` field.
- The current `normalized` field remains useful for validation and ID consistency, but not for diacritic-sensitive derived-pool matching.
- Image readiness counts should be available for full-locale and derived-pool views.
- `/admin/words` may be updated internally to use stabilized helper names or shapes, but it must remain public, read-only, and unlinked from the child-facing app.
- `/ro/play/<letter>` must keep the same visible starts-with gameplay behavior in this feature.
- A generated locale index is deferred unless static imports become too awkward during later content expansion.

## Open Questions

- Should the stable derived-pool API accept only raw target strings, only `ContentLetter`, or both?
- Should disabled letters be included in locale-wide coverage helpers by default, or only when a caller explicitly requests all letters?
- Should an enabled letter with a missing imported manifest return an empty word list or fail validation immediately?
- Should mixed pools preserve deterministic `startsWith + containsOnly` ordering at the loader level and leave shuffling to gameplay?
- Should `src/game/word-selection.ts` directly call content matching helpers now, or should that wait until the gameplay inclusion selector feature?

## Exceptions

- None for the spec-only step.

## Acceptance Status

- Spec package exists: complete.
- Implementation batches are defined: complete.
- Static JSON preservation is specified: complete.
- Canonical word storage preservation is specified: complete.
- Exact Romanian diacritic matching is specified: complete.
- Admin Words Inventory helper reuse is specified: complete.
- Gameplay unchanged requirement is specified: complete.
- Implementation acceptance criteria are not started.

## Verification

Spec-only verification:

```txt
Markdown reviewed for consistency with app-development-program docs.
No build required because no code changes were made.
Browser verification not required for spec-only work.
```

Implementation verification remains pending for future batches:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

Browser verification, if code changes are made and the user-running dev server is reachable on port `3000`:

```txt
http://localhost:3000/ro
http://localhost:3000/ro/play/a
http://localhost:3000/admin/words
```
