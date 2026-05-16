# Public Admin Words Inventory

This feature should be the next detailed spec.

Detailed feature package:

```txt
docs/app-development-program/features/admin-words-inventory/
```

## Purpose

Create a public read-only route, preferably:

```txt
/admin/words
```

The route is called admin because it is an internal content-review surface, even if it is public for now.

## User

Primary users:

- product owner;
- content reviewer;
- developer/agent expanding the pack;
- future therapist or educator reviewer.

This is not a child-facing screen.

## Core Questions It Should Answer

- Which Romanian letters exist in the manifest?
- How many approved words start with each letter?
- How many approved words contain each letter elsewhere?
- Which words have ready images?
- Which words still use placeholders?
- Which letters are underfilled?
- Which speech-priority targets need more examples?
- Are there duplicate or suspicious words?

## Minimum UI

The first version can be plain but readable.

Recommended sections:

- locale selector or locale heading;
- summary cards for total letters, total approved words, ready images, placeholders;
- table grouped by letter;
- detail rows showing starts-with words and contains-elsewhere words;
- image thumbnails;
- image status badges;
- word status badges;
- links to play the selected letter.

Avoid a marketing page. This is an operational dashboard.

## Suggested Columns

Per letter:

- letter label;
- starts count;
- contains-only count;
- mixed total;
- ready image count;
- placeholder image count;
- priority tier;
- notes.

Per word:

- image thumbnail;
- display;
- canonical ID;
- canonical starting letter;
- normalized form;
- category;
- difficulty;
- image status;
- status.

## Derived Pools

For each target letter:

- `startsWith`: approved words whose normalized form starts with the target.
- `containsOnly`: approved words whose normalized form includes the target but does not start with it.
- `mixed`: `startsWith + containsOnly`.

For diacritics, preserve exact Romanian buckets. `s` and `ș` are not the same target unless a future product decision creates an explicit simplified mode.

## Route And Rendering

Prefer a server-rendered static route using existing JSON imports.

The page can be generated at build time. It should not require a database or API calls.

## Acceptance Criteria

- `/admin/words` renders without auth.
- It shows Romanian content from the same source files as gameplay.
- It lists starts-with and contains-only counts for every enabled letter.
- It shows ready image thumbnails where available.
- It clearly identifies placeholder images.
- It links to the child-facing play route for each enabled letter.
- It does not mutate content.
- It does not introduce accounts, database, or admin editing.

## Later Extensions

- filter by image status;
- filter by priority tier;
- show future practice targets;
- export CSV or JSON review report;
- protect route after auth exists;
- add editing only after a separate admin-content-review spec.
