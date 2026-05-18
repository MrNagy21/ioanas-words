# Admin Words Inventory Specification

## Purpose

Build a public, read-only content inventory at:

```txt
/admin/words
```

The page helps the product owner, content reviewer, and future implementation agents understand exactly what Romanian word content exists, which images are ready, and how the future starts-with and contains-letter pools will behave before those pools are exposed in child-facing gameplay.

This is an internal operational screen, not a child-facing app screen.

## Background

The current pilot has a static Romanian content pack with four enabled starting-letter buckets:

- `A`
- `C`
- `M`
- `P`

Each bucket has 10 approved words and ready local WebP images. The current gameplay route loads only the selected starting-letter file. Future gameplay needs three inclusion modes:

- words starting with the selected letter;
- words containing the selected letter elsewhere;
- a mixed pool of both.

Before implementing the child-facing mode selector or expanding the Romanian pack, the team needs a content inventory that makes coverage visible and reviewable.

## Goals

- Add a public read-only `/admin/words` route.
- Show Romanian content from the same static JSON manifests used by gameplay.
- Show starts-with and contains-only coverage per enabled letter.
- Show canonical word metadata and image readiness.
- Show ready image thumbnails using canonical image paths.
- Identify placeholder or missing image readiness states.
- Link from each letter section to the existing play route.
- Keep this feature static-first and deployable on Vercel without credentials.
- Create reusable content coverage helpers that later support the gameplay mode selector.

## Non-Goals

- No authentication.
- No protected routes.
- No database.
- No content editing.
- No upload flow.
- No image generation.
- No CSV import/export in the first version.
- No gameplay mode selector in this feature.
- No large content expansion in this feature.
- No new child-facing navigation link to `/admin/words`.

## Users

Primary users:

- product owner reviewing content coverage;
- developer or agent preparing the next feature spec;
- content reviewer checking words and images;
- future therapist/educator reviewer.

The screen can use denser operational UI than the child-facing game, but it should still be clear and mobile-tolerant.

## Route And Navigation

Route:

```txt
app/admin/words/page.tsx
```

The route should be public and directly accessible by URL. It should not be linked from the child-facing letter selection screen unless a later product decision requests that.

Optional internal links from the page:

- `/ro`
- `/ro/play/<letter>`

## Data Sources

Use existing static content:

- `content/ro/letters.json`
- `content/ro/words-*.json`
- image metadata in each word record

Do not create a separate database or remote API.

## Required Content Helpers

Add or extend server-side content helpers so this route does not duplicate business logic in the page component.

The exact function names may vary, but the implementation should support:

- get all enabled letters for a locale;
- get all word manifests for a locale;
- get all approved words for a locale;
- derive starts-with words for a letter;
- derive contains-only words for a letter;
- derive mixed count for a letter;
- compute image readiness counts;
- compute per-letter coverage summary.

These helpers should be useful later for the gameplay inclusion selector.

## Canonical Word Rule

Each word remains stored once in its canonical starting-letter file.

Examples:

- `mașină` belongs in `words-m.json`.
- `pește` belongs in `words-p.json`.
- `ușă` belongs in `words-u.json`.

If any of those words later appear in a `Ș` contains pool, they must reuse the canonical word record and canonical image path. The inventory must reflect that relationship rather than duplicating records.

## Matching Rules

For this first version, derive letter pools from the existing word records without adding duplicate content.

Definitions:

- `startsWith`: approved words whose exact lowercased `word` or `display` starts with the selected letter target.
- `containsOnly`: approved words whose exact lowercased `word` or `display` includes the selected letter target but does not start with it.
- `mixed`: `startsWith + containsOnly`.

Important: Romanian diacritics remain distinct. `s` and `ș`, `t` and `ț`, `a`, `ă`, and `â`, `i` and `î` must not be silently collapsed in this feature.

Known limitation: the current `normalized` field folds Romanian diacritics for validation, so it is not sufficient for exact `s` versus `ș` or `t` versus `ț` matching. Use `word` or `display` for exact target matching and document the implementation decision in the feature status file.

## Page Structure

The page should include:

1. Header
   - title: `Admin Words`
   - subtitle or compact note that this is a read-only content inventory
   - locale label, initially Romanian only

2. Summary section
   - enabled letter count
   - total approved words
   - ready image count
   - placeholder image count
   - total starts-with assignments
   - total contains-only assignments

3. Letter coverage table or grouped sections
   - letter label
   - starts-with count
   - contains-only count
   - mixed total
   - ready image count among starts-with words
   - placeholder image count among starts-with words
   - priority tier if available from a static map or local helper
   - link to play route

4. Per-letter detail
   - starts-with words
   - contains-only words
   - each word shown with thumbnail/status, display text, ID, category, difficulty, and image status

The first implementation can render all sections on one page. Filtering and tabs can come later if the page becomes too long.

## Visual Requirements

This is an operational dashboard, not a marketing page.

Use:

- compact tables or grouped lists;
- small image thumbnails;
- status badges;
- clear counts;
- restrained colors;
- responsive layout that works on desktop and can still be read on mobile.

Avoid:

- oversized hero sections;
- decorative illustration;
- cards inside cards;
- child-game styling that obscures dense information.

## Accessibility Requirements

- Page must have a single clear `h1`.
- Tables or grouped lists must have accessible labels/headings.
- Images must use existing word alt text.
- Status badges must include readable text, not color alone.
- Links and controls must be keyboard accessible.
- If thumbnails are decorative next to visible word labels, avoid noisy duplicate announcements.

## Empty States

The page must handle:

- a letter with no starts-with words;
- a letter with no contains-only words;
- a word using a placeholder image;
- future enabled letters whose word file exists but has no approved words.

Use concise operational text, for example:

- `No starts-with words`
- `No contains-only words`
- `Placeholder image`

## Validation And QA

Run:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

If `pnpm` is unavailable, fix the Node/Corepack or nvm shell setup before treating verification as complete. Production build should still be checked in the normal project or Vercel environment when local SWC loading allows it.

Browser verification should be done against the user-running dev server on:

```txt
http://localhost:3000/admin/words
```

If the server is not reachable on port `3000`, ask the user to start it.

## Acceptance Criteria

- `/admin/words` renders as a public read-only page.
- The page uses existing static Romanian content.
- Every enabled Romanian letter appears in the coverage view.
- Starts-with counts match approved canonical words for each letter.
- Contains-only counts are derived from the full approved Romanian word catalog.
- Mixed totals equal starts-with plus contains-only counts.
- Ready image thumbnails render from canonical image paths.
- Placeholder image states are visible.
- Each word appears with ID, display text, category, difficulty, and image status.
- Each letter has a link to its existing play route.
- No content mutation is possible from the page.
- No database, auth, or network dependency is introduced.
- Reusable content coverage helpers are available for later gameplay inclusion mode work.

## Open Questions

- Should exact diacritic matching use `display`, `word`, or both?
- Should the first version include disabled letters, or only enabled letters?
- Should priority tier be hardcoded in code for now, or omitted until more letters exist?
- Should contains-only details include words whose canonical starting letter is not currently enabled?

Initial recommendation:

- use exact lowercased `word` and fall back to `display` only if needed for diacritic-sensitive matching;
- show enabled letters only in v1;
- omit or keep a small static priority label only if simple;
- include only words that exist in currently imported manifests until the locale-wide loader supports all Romanian files.
