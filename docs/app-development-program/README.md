# Word Wheel App Development Program

This package captures the agreed development trajectory after the Romanian pilot deployment. It is intended as the first place an agent should read when creating detailed specs for the next implementation batches.

The goal is to move from the current pilot to a scalable Romanian content and gameplay foundation without duplicating word records, breaking the static-first architecture, or adding v1 systems that are explicitly out of scope.

## Reading Order

1. `../agent-brief.md`
2. `../spec.md`
3. `../plan.md`
4. `../status.md`
5. `roadmap.md`
6. `content-architecture.md`
7. `admin-words-inventory.md`
8. `word-inclusion-modes.md`
9. `romanian-content-program.md`
10. `review-and-qa.md`
11. `spec-template.md`

## Feature Spec Packages

Every feature in this program should get its own folder under `docs/app-development-program/features/`.

Each feature folder should include:

- `spec.md`: the complete feature specification and acceptance criteria.
- `plan.md`: implementation batches with a small review checkpoint after each batch.
- `status.md`: living progress tracker for that feature, including decisions, exceptions, blockers, and verification notes.

Current packages:

- `features/admin-words-inventory/`
- `features/locale-wide-content-refactor/`

## Current Strategic Direction

- Keep gameplay static-first, anonymous, and database-free.
- Keep each word stored once in its canonical starting-letter file.
- Derive "contains letter" pools from the full approved locale word catalog.
- Add a public read-only `/admin/words` inventory before broad content expansion.
- Refactor content loading so the app can see a locale-wide approved word pool.
- Add the child-facing gameplay mode selector after the inventory and loader refactor.
- Expand Romanian content after the data model can report starts-with and contains coverage.
- Prepare for Romanian letter groups as practice targets, but do not force the UI before there is enough content.

## Non-Goals For This Program

- No accounts.
- No billing.
- No database-backed gameplay.
- No admin editing workflow.
- No AI pronunciation scoring.
- No user-generated content.
- No server dependency for normal gameplay.

## Naming

This folder is called the "App Development Program" because it is broader than one feature spec. It defines the order, constraints, architecture, research background, and review workflow for several upcoming feature specs.
