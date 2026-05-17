# Romanian Content Expansion Specification

## Feature

Name: Romanian Content Expansion

Route or module:

- `content/ro/letters.json`
- `content/ro/words-<letter>.json`
- `public/images/ro/<letter>/<word-id>.webp`
- `src/content/loaders.ts`
- `src/content/matching.ts`
- `src/content/types.ts`
- `scripts/content/validate-content.mjs`
- `scripts/images/optimize-images.mjs`
- `/admin/words`

Program source:

- `docs/app-development-program/roadmap.md`
- `docs/app-development-program/content-architecture.md`
- `docs/app-development-program/romanian-content-program.md`
- `docs/app-development-program/speech-therapy-content-guidance.md`
- `docs/app-development-program/review-and-qa.md`
- `docs/app-development-program/features/admin-words-inventory/`
- `docs/app-development-program/features/locale-wide-content-refactor/`
- `docs/app-development-program/features/gameplay-inclusion-mode-selector/`

## Problem

The Romanian pilot now has a working inventory surface, locale-wide helper architecture, child-facing inclusion modes, a coverage audit, and a candidate worksheet. The next content step is production preparation: expand beyond the starter `A`, `C`, `M`, and `P` packs without duplicating words, padding weak letters with obscure vocabulary, or breaking the exact Romanian matching behavior used by gameplay.

Future Romanian expansion work should not be treated as disposable pilot work. Once a word or image enters production manifests or public assets, it must be production-ready: reviewed, canonical, deduplicated, validated, child-safe, imageable, and suitable for the child-facing app.

Expansion must be driven by coverage gaps visible in `/admin/words`, by the locale-wide helper outputs, and by the speech-therapy target model in `docs/app-development-program/speech-therapy-content-guidance.md`. New words must stay canonical in their true starting-letter files while still improving derived contains-only and mixed pools for other targets.

Letter coverage alone is not enough for a strong logopedie app. The expansion workflow must also track target sounds, sound position inside the word, syllable complexity, consonant clusters, and contrast value before broad content is approved.

## Goals

- Define a repeatable Romanian content expansion workflow.
- Use `/admin/words` as the human review surface for starts-with counts, contains-only counts, mixed counts, and image readiness.
- Use locale-wide helpers as the source of coverage gaps instead of manually counting duplicated lists.
- Generate candidate words by priority tier, then filter through human review before touching production manifests.
- Store every approved word once in its canonical starting-letter file.
- Preserve exact Romanian diacritics and canonical starting-letter validation.
- Check contains-pool impact before approving words.
- Check therapy-target impact before approving words.
- Track target sound position: initial, medial, final, cluster, or repeated.
- Track syllable count, syllable complexity, and likely contrast targets in review artifacts.
- Require image briefs before image production.
- Keep gameplay static-first, anonymous, database-free, and backed by static JSON plus local or future CDN image assets.
- Keep the first implementation batch documentation-first and audit-focused.

## Non-Goals

- No actual content expansion in the spec-package batch.
- No broad placeholder-only pack.
- No admin editing.
- No authentication.
- No database.
- No upload flow.
- No CSV import/export workflow.
- No billing.
- No accounts.
- No AI pronunciation.
- No medical diagnosis or treatment claims.
- No child-facing link to `/admin/words`.
- No duplicated contains-word manifests.
- No new dev server port.

## Current Code Context

The completed Admin Words Inventory provides:

- a public read-only `/admin/words` route;
- per-letter starts-with and contains coverage;
- image readiness visibility;
- links from admin to play routes;
- no write or edit controls.

The completed Locale-Wide Content Refactor provides helpers for:

- all letters for a locale;
- all approved words for a locale;
- words starting with a selected target;
- words containing a selected target elsewhere;
- mixed pools;
- image readiness counts;
- exact Romanian matching.

The completed Gameplay Inclusion Mode Selector depends on:

- `starts-with`;
- `contains-only`;
- `starts-with-or-contains`;
- canonical image paths reused across every mode;
- a maximum visible wheel size of 16 words.

Current content constraints:

- canonical word files live at `content/ro/words-<letter>.json`;
- each production word has one stable ID;
- canonical images live at `/images/ro/<letter>/<word-id>.webp`;
- ready images must be optimized `256 x 256 px` WebP files under the hard size maximum;
- validation already checks canonical placement, duplicate IDs, image paths, statuses, and production image readiness.

## Proposed Architecture

Romanian content expansion should be a content program over the existing static architecture, not a new app subsystem.

Data flow:

1. Run the current coverage helpers and inspect `/admin/words`.
2. Record expansion targets by Romanian letter and priority tier.
3. Generate candidate words in a temporary review document or working list outside production manifests.
4. Human-review candidates for child familiarity, concreteness, safety, spelling, imageability, and coverage value.
5. For each accepted candidate, determine its canonical starting letter from exact Romanian spelling.
6. Store the approved word once in `content/ro/words-<canonical-letter>.json`.
7. Use locale-wide helpers to confirm which starts-with, contains-only, and mixed pools the new word changes.
8. Create an image brief tied to the canonical word ID.
9. Produce, review, optimize, and validate the canonical image.
10. Use `/admin/words` to review final coverage and image readiness.

Canonical starting-letter storage:

- The canonical starting letter is the actual first Romanian character of the approved word.
- `A`, `Ă`, `Â`, `I`, `Î`, `S`, `Ș`, `T`, and `Ț` remain distinct.
- The canonical file, manifest `letter`, word ID prefix, display text, and normalized/display starting letter must agree.
- A word that improves another target's contains-only pool still belongs under its true starting letter.
- Example: `mașină` improves `Ș` contains coverage but belongs in `content/ro/words-m.json`.

Generated contains pools remain derived. Do not create `words-ș-contains.json`, duplicate word records, or extra image copies.

## Candidate Generation

Candidate generation should start from coverage gaps, not from alphabet quotas alone.

Inputs:

- `/admin/words` starts-with and contains counts;
- locale-wide helper output for exact derived pools;
- priority tiers in `docs/app-development-program/romanian-content-program.md`;
- existing approved words and IDs;
- child vocabulary categories from the core spec.

Candidate rules:

- Generate more candidates than needed because review should reject weak words.
- Prefer common, concrete, familiar Romanian words for ages 4 to 6.
- Prefer words that one clear image can represent.
- Prefer words that improve either a weak starts-with bucket, a weak contains-only bucket, or both.
- Prefer words that improve a high-value speech target without becoming obscure or visually ambiguous.
- Balance high-value targets across initial, medial, and final word positions where Romanian child vocabulary allows.
- Mark consonant clusters and repeated target sounds as deliberate complexity, not default beginner material.
- Do not add obscure words to satisfy a count target.
- Do not treat AI-generated candidate lists as approved content.
- Do not change allowed `source` values unless a later batch deliberately extends the schema.

Recommended candidate record shape for review documents:

```txt
candidate word
display spelling with Romanian diacritics
canonical starting letter
category
part of speech
age fit
imageability notes
primary speech target
secondary speech targets
target sound position
syllable count
syllable complexity
consonant clusters present
likely contrast target, if any
starts-with target improved
contains targets improved
review decision
rejection reason, if rejected
therapist-review note
image brief status
```

## Human Review

Every candidate must pass human review before it is added to production JSON.

Review checks:

- common for Romanian children aged 4 to 6;
- concrete and imageable;
- safe and culturally appropriate;
- no brand, copyrighted character, slang, adult, violent, political, financial, legal, or specialized term;
- correct spelling and diacritics;
- correct canonical starting-letter placement;
- no duplicate of an existing approved word by ID, word, or obvious inflection variant;
- useful for starts-with or contains coverage;
- useful for a speech target, warm-up target, or clear vocabulary objective;
- target sound position and complexity are appropriate for the intended use;
- contrast value does not depend on abstract, frightening, shaming, or visually unclear words;
- one clear image can represent it.

Rejected words should stay out of production manifests. If a batch keeps a candidate review document, rejected words should include short rejection reasons so later agents do not re-add them casually.

## Validation Requirements

Content batches must preserve and extend automated validation where needed.

Required validation:

- `content/ro/letters.json` still references every enabled canonical word file.
- Every approved word has a unique stable ID.
- Every approved word is stored in the file for its canonical starting letter.
- Word ID prefixes match locale and canonical starting letter.
- Exact Romanian diacritic handling is preserved.
- Ready images exist at canonical paths.
- Ready images are `256 x 256 px` WebP files under the hard maximum.
- Approved production words have acceptable metadata, status, source, license, alt text, and image status.
- Derived starts-with, contains-only, and mixed pools can be computed for every enabled Romanian target.
- `/admin/words` counts match locale-wide helper results.

If new content shape is required, update types and validation before adding production words.

## Contains-Pool Impact Checks

Every expansion batch should report impact before and after content changes.

For each accepted word, record:

- canonical starts-with bucket;
- exact contains targets it improves;
- whether it helps a priority speech-practice target;
- target sound position: initial, medial, final, cluster, or repeated;
- syllable count and whether the word is simple or complex for ages 4 to 6;
- likely contrast/differentiation value, if any;
- whether it changes a previously empty contains-only pool;
- whether it risks crowding a mixed pool beyond the current 16-word visible wheel cap.

The wheel cap does not block content expansion, because gameplay samples from large pools. It does require review that dense pools still produce sensible random subsets and that replacement remains useful.

## Image Brief Requirements

Every approved new production word needs one canonical image brief before image generation or assignment.

Brief requirements:

- stable word ID;
- display word;
- canonical image path;
- short Romanian alt text;
- category;
- one clear subject or action;
- no text inside image;
- no logos, brands, copyrighted characters, or confusing background;
- child-safe visual framing;
- pixel-art style consistent with the existing Romanian starter images;
- square `256 x 256 px` final target;
- final local WebP path under `/images/ro/<canonical-letter>/<word-id>.webp`.

For words that are hard to illustrate clearly, reject the word or revise the candidate before image production. Do not approve vague image briefs just to keep a word.

## Research And Critical Decisions

Production content decisions should use current internet or source research when the decision depends on Romanian language usage, child vocabulary familiarity, speech-language guidance, child safety, licensing, framework behavior, deployment behavior, or other externally governed facts. Record important sources in the relevant feature status or artifact when they influence the decision.

Ask the human before implementing critical decisions. Critical decisions include borderline production vocabulary, placeholder use in child-facing production content, therapy metadata in production JSON, schema changes that affect future content, clinical-claim boundaries, licensing uncertainty, database/auth/billing architecture, and safety-sensitive content calls.

## QA Gates

Documentation-only batches:

```txt
Review markdown for consistency and readable handoff quality.
git diff --check
```

Candidate-review batches that do not touch production JSON:

```txt
Review markdown for consistency and readable handoff quality.
git diff --check
```

Content or image batches:

```txt
pnpm run validate:content
pnpm run lint
./node_modules/.bin/tsc --noEmit --incremental false
bun src/game/gameplay-compatibility.check.ts
bun src/content/matching.check.ts
git diff --check
```

Use `pnpm run build` in the normal project environment when the local Next SWC code-signature blocker is not present.

Browser verification is required only when a UI change is made and the user-running dev server is already reachable at `http://localhost:3000`. If it is not reachable, ask the user to start the dev server on port `3000`; do not start another port.

## UX

No child-facing UI changes are required for the first content expansion batches.

Do not add visible clinical claims to the child-facing app. Until a later clinical-review spec changes this, Word Wheel should be framed as pronunciation and vocabulary practice, not diagnosis, treatment, or automated therapy.

The review surface is `/admin/words`, which remains:

- public during early development;
- read-only;
- unlinked from the child-facing app;
- backed by static content helpers.

The child-facing gameplay remains `/ro` and `/ro/play/<letter>`. Expanded content should automatically appear through the existing static loaders and mode pools after validation.

## Acceptance Criteria

- This feature package defines the Romanian content expansion workflow without adding content in Batch 0.
- The workflow uses `/admin/words` and locale-wide helpers to identify and verify coverage gaps.
- Candidate generation is separated from production manifest changes.
- Human review rules are explicit.
- Canonical starting-letter storage is explicit.
- Contains-pool impact checks are required.
- Speech-target impact checks are required.
- Candidate worksheets capture sound position, syllable complexity, and contrast value.
- Image brief requirements are defined before image production.
- QA gates distinguish documentation-only, candidate-review, and production content/image batches.
- Non-goals prevent admin editing, auth, database, upload, CSV, billing, accounts, AI pronunciation, and child-facing admin links.

## Rollout Notes

Romanian content expansion should roll out in small, reviewable batches. Prefer one priority tier or a small set of related letters per batch over a large all-alphabet change.

The first implementation batch after this spec should be documentation-first: run or inspect coverage, create a target matrix, and define the first pilot scope. It should not add production words unless that batch updates the plan and explicitly scopes a small pilot before implementation starts.
