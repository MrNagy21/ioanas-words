# Review And QA Workflow

This workflow applies to future specs and implementation batches.

## Before Starting A Batch

Read:

- `AGENTS.md`
- `docs/agent-brief.md`
- `docs/spec.md`
- `docs/plan.md`
- `docs/status.md`
- relevant files in `docs/app-development-program/`

Update `docs/status.md` when a batch starts, completes, or materially changes.

## Spec Creation Workflow

For each feature:

1. Read the relevant program document.
2. Inspect current code paths.
3. Write a feature spec or implementation plan.
4. Identify schema changes before content changes.
5. Define validation and acceptance criteria.
6. Only then implement.

## Content Review Workflow

For content expansion:

1. Generate candidate words.
2. Normalize spelling and diacritics.
3. Deduplicate against all existing approved words.
4. Confirm canonical starting-letter placement.
5. Score for child familiarity, concreteness, imageability, and safety.
6. Check value for starts-with and contains coverage.
7. Create image briefs.
8. Produce reviewed images.
9. Run content validation.
10. Human-review samples before publishing broad batches.

## Code QA Commands

Preferred project commands:

```txt
pnpm run validate:content
pnpm run lint
pnpm run build
```

In the current Codex desktop environment, `pnpm` may not be on `PATH`; `bun run validate:content` and `bun run lint` have worked as substitutes. Production build should still be verified in the normal project/Vercel environment.

## Browser Verification

The user is responsible for running the local dev server on port `3000`.

Agents should verify against:

```txt
http://localhost:3000
```

If port `3000` is not reachable, ask the user to start the server. Do not start a different dev server port.

## Admin Inventory QA

For `/admin/words`, verify:

- the page renders;
- every enabled letter appears;
- starts-with and contains counts match loader helpers;
- ready images render as thumbnails;
- placeholder states are visible;
- play links work;
- no write/edit controls exist.

## Gameplay Mode QA

For mode selector work, verify:

- default mode is starts-with;
- contains-only mode excludes starting words;
- mixed mode includes both;
- exact Romanian diacritics are preserved;
- remove/reset works in every mode;
- empty states are clear;
- wheel remains readable with larger pools;
- modal still shows canonical image and alt text.

## Image QA

For ready images, verify:

- `256 x 256 px`;
- `.webp`;
- below hard maximum byte size;
- no text;
- no logos or brands;
- clear subject;
- consistent style;
- recognizable in both wheel and modal.

## Documentation QA

After any material change:

- update `docs/status.md`;
- update `docs/plan.md` if the batch order changes;
- update this program package if the trajectory changes;
- keep decisions close to the feature they affect.
- include a ready-to-copy prompt for the next implementation batch in the final handoff, or explicitly state that the feature/spec is finalized and note remaining verification or release steps.

## Batch Handoff Prompt

When a batch completes, the final response should include a prompt that the user can paste into a new agent turn for the next batch. The prompt should include:

- working directory;
- required reading list;
- exact next batch name and source plan file;
- implementation scope;
- explicit non-goals;
- required status/documentation updates;
- required QA commands;
- browser verification instructions, including the rule that the user owns the dev server on port `3000`.

If the completed batch is the last batch in a feature spec, replace the next-batch prompt with a short finalization note that says the spec is complete, identifies any deferred work, and lists the remaining production/release checks.
