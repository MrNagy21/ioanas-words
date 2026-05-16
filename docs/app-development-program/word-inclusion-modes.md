# Word Inclusion Modes

This document defines the child-facing gameplay mode feature.

## Modes

The app should support three modes:

1. `starts-with`: words that begin with the selected letter.
2. `contains-only`: words that contain the selected letter elsewhere but do not begin with it.
3. `starts-with-or-contains`: both groups shuffled together.

The default remains `starts-with`.

## Suggested Romanian Labels

Use short labels because the play screen is compact.

- `Încep cu`
- `Conțin`
- `Amestecat`

If more clarity is needed:

- `Încep cu litera`
- `Conțin litera`
- `Toate`

The selector should not use long explanatory in-app text.

## Placement

Use a compact segmented control near the wheel or game panel. Do not restore the old full word-preview list as the default play-screen layout.

## Data Flow

The play route should receive enough approved words to compute the selected mode.

Preferred approach:

- server page loads selected letter/target;
- server page loads all approved words for the locale or a generated target pool;
- client game receives `content.letter` and the relevant word pool;
- client mode state filters via `getPlayableWords`.

## Existing Code

`src/game/word-selection.ts` already defines:

- `WORD_INCLUSION_MODES`;
- `WordInclusionMode`;
- `DEFAULT_WORD_INCLUSION_MODE`;
- `getPlayableWords`;
- `isWordEligibleForMode`.

The implementation should reuse and extend this helper rather than creating independent filtering logic inside the component.

## Removed Words State

Removal should be scoped carefully.

Recommended v1 behavior:

- removed word IDs are tracked per current play session;
- switching mode keeps removed word IDs for the current target;
- reset restores all words for the current target and mode pool;
- switching letter resets naturally because the page route changes.

If this feels surprising during review, make reset/switch behavior explicit in the feature spec before implementation.

## Edge Cases

- If contains-only has no words, show an empty state and allow switching mode.
- If mixed mode has a large pool, the wheel may become visually crowded.
- If a pool exceeds the practical segment count, sample a subset for the wheel and expose the rule in the spec.
- If a word contains both `s` and `ș`, it should match each exact target only when the normalized/display text contains that exact character or future matcher says so.

## Accessibility

- Segmented control must be keyboard accessible.
- Selected mode must be programmatically clear.
- Mode changes should update visible counts and `aria-live` text if useful.
- Spin must remain disabled while animation is running.

## Acceptance Criteria

- The play screen defaults to starts-with.
- User can switch among all three modes.
- Wheel words update immediately after mode changes.
- Images continue to render from canonical word image paths.
- Remove/reset behavior works in each mode.
- Empty mode states are clear and recoverable.
- No database or network dependency is introduced.

