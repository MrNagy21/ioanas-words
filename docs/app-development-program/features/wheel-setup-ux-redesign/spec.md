# Wheel Setup UX Redesign Specification

## Purpose

Redesign the parent/supervisor setup journey for a selected Romanian letter or practice target.

The setup flow has outgrown the current centered modal. It now needs to support exact word selection, word-count control, inclusion modes, saved named configurations, loading, deleting, resetting to all words, and starting the wheel with or without saving. This is a meaningful setup workflow, not a small play-screen setting.

The redesigned experience should make setup feel deliberate, clear, and fast for an adult while keeping the child-facing play screen focused on the wheel.

## Background

The current implementation opens `Setează roata` as a modal over `/ro/play/<target>`. That modal contains:

- inclusion mode;
- wheel word count;
- a button to open exact word selection;
- optional saved-configuration access;
- reset;
- save configuration;
- start wheel.

The word picker, save-name input, and saved-configuration list open as nested setup sub-dialogs. This worked as an incremental improvement, but review found that the hierarchy is now weak:

- important setup choices have equal visual weight;
- the word picker is hidden behind a generic button even though word picking is central;
- saved configurations are treated as a secondary pop-up rather than a first-class entry point;
- desktop/tablet space is underused;
- mobile already behaves like a full-screen flow, so the modal frame adds little value;
- the play screen behind the modal creates visual noise without helping setup.

This feature supersedes the older “focused setup modal/sheet” direction for wheel setup. The setup flow is now considered multi-step enough to deserve a dedicated setup screen.

## Goals

- Replace the initial setup modal with a dedicated setup route or full-screen setup state.
- Make saved configurations first-class when they exist for the current target.
- Allow starting the wheel without saving.
- Allow saving the current setup with a name.
- Allow loading and deleting saved configurations.
- Allow resetting custom word selection back to all eligible words.
- Make exact word picking significantly clearer and denser on desktop and tablet.
- Keep mobile setup full-screen, focused, and thumb-friendly.
- Preserve static-first v1 behavior with no database, no accounts, and no server persistence.
- Preserve versioned local anonymous setup storage for v1.
- Keep the storage/entity shape compatible with future account-backed saved configurations.
- Keep the play screen simple: wheel, concise status, spin, reset, setup entry point, result modal.

## Non-Goals

- No content expansion.
- No new Romanian words.
- No image production.
- No database.
- No authentication.
- No billing.
- No cross-device sync.
- No server-backed configuration storage in v1.
- No admin editing.
- No child progress tracking.
- No AI pronunciation features.
- No clinical or speech-therapy claims.
- No change to canonical static JSON content ownership.

## Users

Primary setup user:

- parent;
- teacher;
- therapist;
- adult supervisor.

Secondary user:

- child watching or helping choose words.

The setup UI can be denser and more operational than the wheel play screen, but it must remain calm, readable, and touch-friendly.

## Routes

Preferred route:

```txt
/<locale>/setup/<target>
```

Examples:

```txt
/ro/setup/a
/ro/setup/ghe
```

Acceptable alternative if implementation fits App Router structure better:

```txt
/<locale>/play/<target>/setup
```

The chosen route must be static-compatible and use the same target validation as play routes. Invalid locale or target should return `notFound()`.

The play route remains:

```txt
/<locale>/play/<target>
```

The setup route starts the wheel by navigating to the play route with the selected setup applied through local setup storage or equivalent client state.

## Entry Flow

### From Letter Selection

When a user clicks a letter or practice target on `/ro`, route to setup, not directly to play.

If the current target has saved configurations:

1. Show a configuration chooser first.
2. Let the user start from a saved setup.
3. Let the user edit a saved setup before starting.
4. Let the user start with the default all-words setup.
5. Let the user create a new setup.

If the current target has no saved configurations:

1. Open the setup editor directly.
2. Default to the appropriate all-words starts-with setup.
3. Allow starting without saving.
4. Allow saving before starting.

### From Play Screen

The play screen keeps a compact `Setează` action.

Clicking `Setează` routes to the setup screen for the current target. The current active setup should be loaded into the editor.

After applying setup, return to `/ro/play/<target>`.

## Information Architecture

The setup flow has two primary modes:

1. Configuration chooser
2. Setup editor

The configuration chooser appears only when useful, primarily when saved configurations exist. The setup editor is the main creation/editing surface.

Use small confirmation dialogs only for destructive actions such as deleting a saved configuration or discarding unsaved changes when needed. Avoid stacking general-purpose pop-ups over pop-ups.

## Configuration Chooser

Show this screen when saved configurations exist for the selected target.

Required elements:

- target label, for example `Litera A` or `Sunetul GHE`;
- list/grid of saved configurations;
- default option for all eligible words;
- action to create a new configuration;
- action to choose another letter or target;
- primary action to start the selected setup;
- secondary action to edit the selected setup;
- delete action for saved configurations.

Saved configuration cards/rows should show:

- configuration name;
- inclusion mode label;
- wheel word count;
- selected-word status:
  - `toate cuvintele`;
  - or `12 alese`;
- updated date if it fits without clutter.

The default all-words option should behave like a real selectable item, not like a hidden reset.

Suggested Romanian labels:

- `Configurații salvate`
- `Toate cuvintele`
- `Configurație nouă`
- `Editează`
- `Pornește roata`
- `Șterge`

## Setup Editor

The setup editor edits a draft configuration. Draft changes should not mutate the active wheel until the user explicitly starts or applies the setup.

Required editor sections:

1. Target summary
2. Inclusion mode
3. Wheel word count
4. Word source and exact selection
5. Configuration actions

### Target Summary

Show:

- target kind and label;
- total eligible words for the active mode;
- current selection count;
- wheel count.

Avoid long instructional text. Use compact status and clear labels.

### Inclusion Mode

Use a segmented control or equivalent radio-card group.

Modes:

- `starts-with`
- `contains-only`
- `starts-with-or-contains`

Suggested Romanian labels:

- `Încep cu`
- `Conțin`
- `Amestecat`

Each option should show a count for the current target.

The default remains `starts-with`.

### Wheel Word Count

Keep the concept explicit: this is the number of words shown on the wheel, not the number of words saved in the configuration.

Use a stepper or compact numeric control:

- decrement;
- current count;
- increment;
- max count.

Rules:

- Count cannot be below `1` when words are available.
- Count cannot exceed the current maximum wheel cap.
- Count cannot exceed the available selected pool unless the existing gameplay rule intentionally allows showing fewer than requested.
- If the selected custom list is smaller than the requested count, the wheel shows the selected list and the UI must say that clearly.

### Word Source

Make word source explicit.

Options:

- `Toate cuvintele`
- `Aleg cuvintele`

`Toate cuvintele` is selected by default.

Selecting any exact words switches the source to custom. Clearing the custom selection returns to all words.

When custom selection is active, show:

- selected count;
- a compact selected-word summary;
- `Resetează la toate cuvintele`.

Do not rely only on implicit behavior.

## Exact Word Picker

The exact word picker is a major part of this feature and should receive enough space.

### Desktop And Tablet

Use a persistent panel or large editor section rather than a small modal.

Recommended layout:

- search field at top;
- selected count visible near search;
- dense list/grid of selectable word rows or compact cards;
- thumbnail;
- word display;
- selected checkmark/checkbox;
- optional category/status only if it does not clutter the picker;
- selected-word tray or summary panel.

Prefer two columns when width allows. Use one column on narrower tablet layouts.

Actions:

- select all filtered words;
- clear selection;
- reset to all words;
- done/apply if the picker is a drill-in surface.

### Mobile

Use a full-screen drill-in picker, not a small nested modal.

Required mobile behavior:

- sticky top bar with target and close/back;
- sticky search field;
- scrollable word list;
- large tap targets;
- selected count visible while scrolling;
- sticky bottom action such as `Gata`;
- clear/reset action reachable without hunting.

Do not make the user manage a long checkbox list inside a small floating dialog.

### Search

Search filters by Romanian display text. Use locale-aware lowercasing.

If the filtered list is empty, show a compact empty state with clear search/reset action.

If `select all` operates on filtered words only, the label must make that clear. Prefer:

- `Alege rezultatele`
- `Alege toate afișate`

Avoid ambiguous `Toate` in the picker because the setup flow already has a top-level `Toate cuvintele` source.

## Save, Load, Delete, And Reset

### Save

Saving is optional.

The user may:

- start the wheel without saving;
- save the draft with a name;
- save and start.

Save-name input can be a small focused dialog or inline panel because it is a narrow task.

Saved configuration includes:

- target key;
- name;
- inclusion mode;
- wheel word count;
- word selection mode;
- selected word IDs if custom;
- created timestamp;
- updated timestamp;
- schema version.

### Load

Loading a saved configuration into the editor should update the draft only. It should not start the wheel until the user confirms.

From the chooser, selecting a saved setup can enable a direct `Pornește roata` action.

### Delete

Deleting a saved configuration must ask for confirmation.

Delete affects local setup storage only. It must not affect canonical content manifests or images.

### Reset

There are two reset concepts and the UI should distinguish them:

- `Resetează la toate cuvintele`: clears custom selected words and returns word source to all eligible words.
- `Resetează roata`: clears removed words during play for the current target.

Avoid using a single bare `Resetează` label in setup when it is ambiguous.

## Responsive Layout

### Desktop

Use a setup workspace inside the app frame.

Recommended desktop layout:

- left column: saved/default/new setup chooser;
- main column: setup editor;
- right column: live summary and selected-word preview;
- sticky action area aligned with editor or right panel.

The desktop UI should use available horizontal space. Avoid a narrow centered 480px modal for the main setup workflow.

### Tablet

Use a two-column layout when width allows:

- top/left: saved/default setup choices;
- main/right: editor and word selection.

On narrower tablet portrait layouts, collapse toward the mobile full-screen flow but keep spacing and controls larger than phone.

### Mobile

Use a full-screen setup flow.

Recommended mobile order:

1. Target header
2. Current/saved setup choice if relevant
3. Inclusion mode
4. Wheel word count
5. Word source
6. Word picker entry or selected-word summary
7. Save/start actions

Use a sticky bottom primary action:

- `Pornește roata`

Secondary actions can be in a compact toolbar or overflow if space is tight, but destructive actions must remain explicit and confirmed.

## Play Screen After Redesign

The play screen should remain wheel-first.

Keep:

- wheel;
- concise target/mode/count status;
- spin action;
- reset current play removals;
- setup entry point;
- result modal.

Do not show the full setup editor on the play screen.

Do not restore a large word preview list on the play screen.

## Storage

Continue using local anonymous storage for v1 setup data.

Current storage key:

```txt
word-wheel.setup.v1
```

The existing entity direction is acceptable:

- `WheelSetupConfig`
- `SavedWheelSetup`

The implementation may bump the schema version if the saved setup shape changes.

Local saved configurations are convenience state only:

- they may be cleared by the browser;
- they may be edited by users through developer tools;
- they must contain no sensitive data;
- they must not be treated as canonical content.

If saved configuration data becomes larger or needs cross-device sync later, move to a future database-backed account model or IndexedDB-backed local model under a separate spec.

## Accessibility Requirements

- Use real links for route navigation.
- Use real buttons for actions.
- Segmented mode choices must expose selected state programmatically.
- Exact word choices must be keyboard reachable and screen-reader understandable.
- Focus order must follow the visual workflow.
- Mobile drill-in picker must return focus to the triggering control when closed.
- Delete confirmation must identify the saved configuration by name.
- Avoid nested modal traps for the main workflow.
- If any modal remains, follow the WAI-ARIA modal dialog pattern: labelled dialog, trapped focus, Escape handling, and focus return.

## Visual Requirements

The setup screen is a practical control surface, not a landing page.

Use:

- compact hierarchy;
- clear grouping;
- restrained color;
- consistent button hierarchy;
- dense but readable word lists;
- thumbnails where they help recognition;
- chips or compact summaries for selected words;
- stable dimensions for controls and word rows.

Avoid:

- oversized headings in small panels;
- large empty gaps between headings and controls;
- multiple equal-weight primary-looking actions;
- generic badges that look unrelated to their controls;
- stacked cards inside cards;
- one-column desktop layouts that waste most of the screen.

## Research Notes

Research reviewed on 2026-05-19:

- Material Design bottom-sheet guidance treats modal bottom sheets as primarily mobile and recommends considering alternatives on tablet/desktop because bottom sheets can split attention on large screens. Source: https://m1.material.io/components/bottom-sheets.html
- Material Design dialog guidance says dialogs are interruptive, should be used sparingly, and should generally avoid nested dialogs and scrolling content; full-screen dialogs are the exception that can reasonably open pickers. Source: https://m1.material.io/components/dialogs.html
- Apple Human Interface Guidelines recommend avoiding popovers in compact views and using full-screen modal views like sheets for compact layouts; popovers are for wider views and small amounts of related functionality. Source: https://developer.apple.com/design/human-interface-guidelines/popovers
- WAI-ARIA Authoring Practices define modal dialog behavior as trapping focus inside the dialog until it is dismissed, reinforcing the need to avoid complex nested modal workflows. Source: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- Baymard filter UX guidance says mobile filtering should usually use an explicit apply action and visible selected-filter summaries because real-time updates can be disorienting on mobile. Source: https://baymard.com/learn/ecommerce-filter-ui
- web.dev storage guidance says `localStorage` is synchronous, string-only, and limited, while IndexedDB is the general recommendation for larger app data. Small anonymous v1 setup data can remain in versioned local storage. Source: https://web.dev/articles/storage-for-the-web
- web.dev IndexedDB state guidance notes client-side data can be modified or deleted by users, so the app must handle missing or changed local state. Source: https://web.dev/articles/indexeddb-best-practices-app-state
- OWASP browser-storage guidance notes local storage can be viewed and edited in browser developer tools and should not hold sensitive data. Source: https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/11-Client-side_Testing/12-Testing_Browser_Storage

## Implementation Notes

Likely affected files:

- `app/[locale]/page.tsx`
- `app/[locale]/play/[letter]/page.tsx`
- new setup route under `app/[locale]/setup/[letter]/page.tsx` or equivalent
- `src/components/word-wheel-shell.tsx`
- `src/components/wheel-game.tsx`
- new setup components under `src/components/`
- `src/game/wheel-setup-storage.ts`
- `app/globals.css`
- feature docs and status files

Recommended refactor before heavy UI work:

- extract setup-related types and draft helpers out of `src/components/wheel-game.tsx`;
- keep `WheelGame` focused on play behavior;
- create dedicated setup components for chooser, editor, and word picker;
- keep storage operations in `src/game/wheel-setup-storage.ts`;
- keep content and matching logic in existing content/game helper modules.

## Open Questions

- Should selecting a saved configuration from the chooser immediately start the wheel on double click/tap, or require the explicit `Pornește roata` button every time?
- Should editing a saved configuration overwrite that saved item, or default to `Save as` to avoid accidental changes?
- Should the setup route preserve unsaved draft state when the user navigates back to the play screen without starting?
- Should saved configurations support rename in v1, or should rename be deferred until users ask for it?
- Should the default all-words setup be saved as an explicit local active config after first start, or derived every time unless customized?

## Acceptance Criteria

- `/ro` routes letter and practice-target clicks into the setup journey.
- A target with saved configurations shows a chooser before the editor.
- A target with no saved configurations opens the editor directly.
- User can start the wheel without saving.
- User can save a named setup and later load it for the same target.
- User can delete a saved setup after confirmation.
- User can reset custom selection to all eligible words.
- User can choose exact words with search on desktop, tablet, and mobile.
- Desktop layout uses available width and avoids the narrow centered modal for the main workflow.
- Mobile setup is full-screen and does not require nested modal word picking.
- Play screen remains wheel-first and uncluttered.
- Local setup storage remains anonymous, non-sensitive, and versioned.
- Content remains canonical in static JSON; no database or server persistence is introduced.
