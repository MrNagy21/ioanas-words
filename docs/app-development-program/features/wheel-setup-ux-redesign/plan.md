# Wheel Setup UX Redesign Implementation Plan

Last updated: 2026-05-19

## Scope

Replace the play-screen `Setează roata` modal journey with a dedicated setup route for each Romanian letter or practice target while keeping gameplay static-first, anonymous, database-free, and localStorage-backed.

Chosen route:

```txt
/<locale>/setup/<target>
```

The play route remains:

```txt
/<locale>/play/<target>
```

## Implementation Batches

### Batch 1: Route And Navigation

Status: Complete

- Add `app/[locale]/setup/[letter]/page.tsx` with the same target validation and static params as play routes.
- Route `/ro` letter and practice target tiles to setup instead of play.
- Route play-screen `Setează` entry to setup with a play-origin hint.

### Batch 2: Setup State Extraction

Status: Complete

- Extract reusable setup helpers for target keys, route segments, mode counts, valid selected words, default setup config, and resolved config normalization.
- Keep storage reads/writes in `src/game/wheel-setup-storage.ts`.
- Keep canonical static content untouched.

### Batch 3: Chooser And Editor

Status: Complete

- Show a chooser first when saved target configurations exist.
- Open the editor directly when no saved configurations exist.
- Support all-words default, saved selection, edit, create new, start without saving, and save named configurations.

### Batch 4: Word Picker And Reset

Status: Complete

- Make `Toate cuvintele` versus `Aleg cuvintele` explicit.
- Add searchable exact word picking with dense desktop/tablet layout and full-screen mobile drill-in behavior.
- Add `Resetează la toate cuvintele`, distinct from play-screen `Resetează roata`.

### Batch 5: Delete Confirmation And Verification

Status: Complete

- Confirm before deleting saved local configurations.
- Run content validation, lint, TypeScript, and build where possible.
- Verify `/ro`, `/ro/setup/<target>`, and `/ro/play/<target>` on desktop, tablet, and mobile-sized browser viewports against `http://localhost:3000`.

## Product Decisions For This Implementation

- Starting a saved configuration from the chooser requires the explicit `Pornește roata` button.
- Editing a saved configuration loads it into the draft; saving creates a named local configuration rather than overwriting the old one.
- Unsaved setup drafts are not preserved after leaving the setup route.
- The default all-words setup is saved as the active local config only when the user starts the wheel.
