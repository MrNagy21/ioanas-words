# Roadmap

## Active next work: guided practice app

The product interview completed on 2026-10-16 moves the next app work to [Guided Practice App](features/guided-practice-app/spec.md). Follow its [GP0–GP9 plan](features/guided-practice-app/plan.md) and [status](features/guided-practice-app/status.md). Local profiles/goals, durable participation, reward/history/backup and guided entry are implemented. Continue GP9 mapping review, physical devices and therapist pilot. GP8 offline caching is deferred. The new public landing page and adult progress screens are explicit scope additions; hosted storage, accounts, billing, and AI scoring remain excluded.

The content/inventory order below describes the earlier program, much of which is implemented. Retain it as content-architecture history, not the current next-task list. Reviewed goal-to-word/position mappings are part of the new plan; more vocabulary is not an automatic prerequisite.

This roadmap supersedes the older "Future Batch: Expanded Content And Letter Inclusion Modes" ordering in spirit, without deleting the original plan history. The main change is that a public content inventory should come before the large Romanian content expansion.

## Recommended Order

### 1. Public Content Inventory

Build `/admin/words` as a read-only content dashboard.

Detailed feature package:

```txt
docs/app-development-program/features/admin-words-inventory/
```

Purpose:

- show what content exists now;
- expose starts-with and contains coverage per Romanian letter;
- reveal image readiness gaps;
- give humans a practical review surface before adding hundreds of words;
- prepare for future protected admin tools without adding auth now.

This should be implemented before gameplay modes because it gives us a way to verify the derived content pools.

### 2. Locale-Wide Content Refactor

Refactor loaders so server code can ask for:

- all letters for a locale;
- all word manifests for a locale;
- all approved words for a locale;
- words starting with a selected target;
- words containing a selected target elsewhere;
- image readiness counts.

Keep the current static JSON files. Do not add a database.

Detailed feature package:

```txt
docs/app-development-program/features/locale-wide-content-refactor/
```

### 3. Gameplay Inclusion Mode Selector

Add the child-facing selector on the play screen:

- starts with selected letter;
- contains selected letter elsewhere;
- mixed starts-with plus contains.

The current default remains starts-with.

### 4. Romanian Content Expansion

After the inventory and loader refactor, expand the Romanian pack.

Use the inventory to determine which letters need:

- more starting words;
- more containing words;
- more ready images;
- fewer or no additions because quality would become weak.

Use `speech-therapy-content-guidance.md` to decide which additions have real logopedie value. The expansion target matrix should distinguish alphabet coverage from speech-target coverage, including target sound position, syllable complexity, clusters, and contrast value.

### 5. Practice Target Architecture For Letter Groups

Prepare the model for Romanian groups such as:

- `ce`
- `ci`
- `ge`
- `gi`
- `che`
- `chi`
- `ghe`
- `ghi`

These should be modeled as practice targets, not alphabet letters. Enable them in gameplay only when enough child-friendly content exists.

### 6. Larger Image Production

For every newly approved word, produce or assign one canonical image. Reuse that image in every derived contains-letter pool.

Do not create separate images for the same word under different target folders.

### 7. Future Protection And Editing

The `/admin/words` route may remain public during early development. Later, it can be protected and expanded into real admin tooling.

Do not add editing, auth, review queues, or database writes in this program unless a later spec explicitly changes v1 scope.

## Why This Order

Adding the inclusion mode first is technically possible because `src/game/word-selection.ts` already defines the three modes. However, the app currently passes only one starting-letter bucket into each play route, so contains-letter mode would have too little data. The content inventory and loader refactor make the derived pools visible and testable before they become child-facing gameplay.

Adding hundreds of words before the refactor would increase migration and validation risk. Each word should stay canonical in its starting-letter file, and contains-letter pools should be derived or referenced by ID.
