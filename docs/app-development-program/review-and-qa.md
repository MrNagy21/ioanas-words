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
3. Research current external facts when the decision depends on language usage, child development guidance, speech-language practice, safety, licensing, framework behavior, deployment behavior, or any standard that may have changed.
4. Ask the human for critical decisions instead of silently choosing a direction.
5. Write a feature spec or implementation plan.
6. Identify schema changes before content changes.
7. Define validation and acceptance criteria.
8. Only then implement.

## Research And Critical Decisions

Agents should use internet or source research when a decision depends on current, specialized, or externally governed information. Record important sources in the relevant feature doc or status file when they influence the outcome.

Examples that require research before a production decision:

- Romanian spelling, diacritics, child vocabulary familiarity, or regional usage uncertainty;
- speech-language or logopedie target prioritization;
- child safety, age appropriateness, sensitive imagery, or clinical-claim boundaries;
- asset licensing, public-domain status, model/image usage rights, or attribution requirements;
- current framework, deployment, browser, or accessibility behavior;
- privacy, auth, billing, or data-storage implications.

Ask the human for critical decisions before implementation when the tradeoff changes product scope, public behavior, content standards, or risk. This includes accepting borderline production vocabulary, using placeholders in child-facing production content, changing production schema shape, adding clinical or therapeutic claims, changing licensing assumptions, introducing a database/auth/billing path, or making safety-sensitive content decisions.

## Content Review Workflow

For content expansion:

1. Generate candidate words.
2. Normalize spelling and diacritics.
3. Deduplicate against all existing approved words.
4. Confirm canonical starting-letter placement.
5. Score for child familiarity, concreteness, imageability, and safety.
6. Check value for starts-with and contains coverage.
7. Check value for speech targets using `speech-therapy-content-guidance.md`.
8. Record target sound position, syllable complexity, consonant clusters, and contrast value.
9. Create image briefs.
10. Produce reviewed images.
11. Run content validation.
12. Human-review samples before publishing broad batches.

Do not turn worksheet examples from logopedie sources into production content automatically. A word can be clinically useful in a therapist worksheet and still be rejected for Word Wheel if it is abstract, visually unclear, frightening, shaming, too old for ages 4 to 6, or not culturally strong.

Romanian Content Expansion has completed its pilot coverage audit and candidate worksheet. Forward work should be treated as production preparation, not exploratory pilot work. Once a Romanian word or image is implemented in production manifests or public assets, it must be production-ready: canonical, deduplicated, validated, child-safe, imageable, reviewed, and suitable for the child-facing app. Do not add placeholder-only production words unless a later production plan explicitly accepts that tradeoff and documents how the app will avoid showing unfinished content.

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

## Speech-Target QA

For Romanian expansion work, verify:

- priority targets are based on `romanian-content-program.md` and `speech-therapy-content-guidance.md`;
- high-value targets are reviewed by initial, medial, final, cluster, and repeated positions where quality allows;
- candidate worksheets distinguish alphabet-letter coverage from speech-target coverage;
- syllable count and consonant clusters are marked before production words are approved;
- contrast pairs are used only when both words are child-friendly and imageable;
- clinical claims are not added to child-facing UI or docs without a separate safety and clinical-review spec.

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
