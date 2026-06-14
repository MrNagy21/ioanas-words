# Batch 41 Requested Letter And Sound Expansion Scope

Batch: Romanian Content Expansion Batch 41.

Status: Planned and human-approved for workflow; no production words or images added yet.

Last updated: 2026-06-02.

## Request Summary

The next Romanian content improvement request asks for more production-ready words and matching reviewed pixel-art images for:

- new playable Romanian letters: `Ă`, `Â`, `K`, `Q`, `W`, `X`, and `Y`;
- more words with `CE`, `CI`, `GE`, `GI`, `GHE`, `CHE`, and `CHI`;
- more words that start with `L`, `R`, `S`, `Ș`, `T`, `Ț`, `V`, `B`, `D`, and `J`;
- more words that contain `Ș`, `Ț`, `V`, `B`, `D`, and `J` inside the word.

The request repeated `V + în interior`; treat it as one requested area.

This is a production content expansion, not a placeholder or draft exercise. Do not add child-facing production rows until vocabulary review, image planning, human approval, and image readiness are addressed by the later batches below.

## Current Coverage Snapshot

Current approved Romanian pack before this expansion:

- approved words: `367`;
- ready images: `367`;
- approved placeholders: `0`;
- rejected audit-trail rows: `ghicitoare`, `miez`, and `stinghie`.

Current enabled letters:

```txt
A, B, C, D, E, F, G, H, I, Î, J, L, M, N, O, P, R, S, Ș, T, Ț, U, V, Z
```

Current enabled sequence targets:

```txt
CE, CI, GE, GI, CHE, CHI, GHE, GHI
```

Current requested-target coverage from the canonical approved manifests:

| Target | Starts With | Contains Only | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | 0 | 152 | 152 |
| `Â` | 0 | 11 | 11 |
| `K` | 0 | 0 | 0 |
| `Q` | 0 | 0 | 0 |
| `W` | 0 | 0 | 0 |
| `X` | 0 | 1 | 1 |
| `Y` | 0 | 0 | 0 |
| `CE` | 13 | 3 | 16 |
| `CI` | 9 | 9 | 18 |
| `GE` | 9 | 6 | 15 |
| `GI` | 6 | 9 | 15 |
| `GHE` | 11 | 4 | 15 |
| `CHE` | 2 | 13 | 15 |
| `CHI` | 8 | 7 | 15 |
| `L` | 12 | 75 | 87 |
| `R` | 14 | 136 | 150 |
| `S` | 17 | 28 | 45 |
| `Ș` | 12 | 27 | 39 |
| `T` | 10 | 80 | 90 |
| `Ț` | 5 | 36 | 41 |
| `V` | 9 | 14 | 23 |
| `B` | 22 | 20 | 42 |
| `D` | 9 | 18 | 27 |
| `J` | 5 | 9 | 14 |

## Human Decisions Recorded

The human approved the overall batch structure. The full sequence for this request is:

1. Batch 41: document the scope, current coverage, decisions, and full workflow.
2. Batch 42: create a researched candidate worksheet; do not add production JSON yet.
3. Batch 43: human vocabulary review and production-slice selection.
4. Batch 44: plan the first production slice of about `15` accepted words, including canonical files, IDs, image paths, route impacts, and coverage impact.
5. Batch 45: write image briefs and generate a small contact sheet for the selected slice, then stop for human image review.
6. Batch 46: promote only human-accepted slice words and images into production JSON and public WebP assets, then run validation.
7. Batch 47: run coverage QA for the slice, update docs, and prepare the next ready-to-copy prompt.
8. Repeat Batches 44 through 47 for additional approved slices until the request scope is complete.
9. Final QA batch: validate full content, routes, images, docs, and coverage after the last slice.

The human approved treating `Ă`, `Â`, `K`, `Q`, `W`, `X`, and `Y` as normal playable letters once implemented:

- they should support starts-with words;
- they should support contains-only words;
- they should support mixed mode;
- they should behave like existing letters in setup, play, exclusion filtering, and admin inventory;
- `Ă` and `Â` use the already recorded route and ID conventions: `a-breve` / `ro-a-breve-...` and `a-circ` / `ro-a-circ-...`;
- existing conventions for `Ș`, `Ț`, and `Î` remain unchanged: `sh`, `tz`, and `i-circ`.

The human approved a quality-limited rare-letter policy:

- do not pad rare or borrowed-letter buckets with obscure words;
- first add all genuinely child-friendly, imageable Romanian words that fit the bucket;
- if a bucket remains very small, add up to about `5` additional standard Romanian vocabulary words that are concrete, imageable, safe, and learnable for a child even if not already familiar;
- every such stretch word must be explicitly marked in the worksheet as a learnable vocabulary stretch, not a child-known word;
- do not use proper names, brand names, adult words, highly specialized science/business/legal words, slang, offensive words, or visually confusing abstractions to fill a quota.

The human approved the target quantity policy:

- aim close to `10` good additions per requested area where quality allows;
- allow fewer for weak rare-letter buckets;
- cap broad or high-resource areas at roughly `20` to `25` additions unless a later decision expands scope;
- prefer child-known, common, concrete Romanian vocabulary;
- allow simple actions only when they can be represented by one clear child-safe image;
- avoid duplicate existing words and avoid adding near-synonyms with the same practical meaning just to raise counts.

The human clarified overlapping words:

- overlapping words are allowed and useful;
- do not over-prioritize overlap;
- include a mix of non-overlapping simple words and overlapping words;
- avoid making a practice target harder by filling it mostly with words that contain many other difficult target sounds;
- record overlaps in the worksheet so a human can decide whether the sound load is acceptable.

## Source Check Recorded

Current Romanian alphabet and orthography references confirm that `K`, `Q`, `W`, and `Y` are part of the Romanian alphabet but are rare and mostly occur in borrowings, international terms, and foreign names. This supports the quality-limited policy above.

Sources checked on 2026-06-02:

- dexonline, `1.1. Literele`: https://dexonline.ro/article/1.1._Literele
- DOOM 3 introductory study: https://doom.lingv.ro/studiu_introductiv_complet

Romanian speech/logopedie references should be checked again during Batch 42 candidate generation, not merely assumed from old notes. The agent should prioritize Romanian sources when available and record the sources in the worksheet.

Useful Romanian sources checked or identified for the next worksheet:

- Logorici, `Joc logopedic - Sunetul R`: https://www.logorici.ro/joc-sunetul-r/
- Logorici, `Jocuri interactive pentru corectarea sunetului S`: https://www.logorici.ro/jocuri-interactive-pentru-corectarea-sunetului-s/
- CJRAE Caraș-Severin, `Materiale logopedie`: https://www.cjrae-cs.ro/mat_logopedie.html
- CJRAE Caraș-Severin, `Sunetul S`: https://www.cjrae-cs.ro/assets/documente/mat_logopedie/Sunetul_S.pdf
- CJRAE Caraș-Severin, `Sunetul Ș`: https://cjrae-cs.ro/assets/documente/mat_logopedie/Sunetul_%C8%98.pdf
- CMBRAE, `Mat logopedice pt parinti si copii`: https://www.cmbrae.ro/2017/wp-content/uploads/Mat-logopedice-pt-parinti-si-copii.pdf
- Existing project guidance: `docs/app-development-program/speech-therapy-content-guidance.md`

When generating candidates, the agent should use these references to check target sound positions, differentiation value, and Romanian practice conventions for `R`, `S`, `Ș`, `Ț`, `J`, `L`, `V`, `D`, `T`, `CE/CI`, `GE/GI`, `CHE/CHI`, and `GHE/GHI`.

## Full Batch Details

### Batch 41: Scope And Decisions

Status: complete.

Output:

- this scope document;
- current coverage snapshot;
- recorded human decisions;
- next-agent prompt.

Verification:

```txt
git diff --check
```

### Batch 42: Candidate Worksheet

Status: planned.

Create a new candidate worksheet before any production JSON changes. This batch should recompute current coverage, research Romanian language and logopedie sources, generate candidates, deduplicate against existing approved content, and record acceptance/rejection notes.

Verification:

```txt
git diff --check
```

### Batch 43: Human Vocabulary Review

Status: planned.

Use the Batch 42 worksheet as the source. Ask the human to approve, reject, or revise candidate rows. Critical review points include rare-letter stretch words, borrowed or foreign-looking words, child safety, image ambiguity, duplicate meaning, and overlap load. End this batch with a first approved slice queue of about `15` words and a ready-to-copy prompt for Batch 44.

Verification:

```txt
git diff --check
```

### Batch 44: Production Slice Planning

Status: planned.

For the first human-approved slice, plan canonical implementation without yet generating images or publishing the rows unless the image gate is already ready.

Record for each selected word:

- canonical starting-letter file;
- stable word ID;
- image path;
- route or new-letter impact;
- category, part of speech, difficulty, age band, source, license, and status plan;
- exact starts-with and contains-target impact;
- image brief direction;
- whether any schema, route alias, loader, validation, or compatibility fixture needs to change.

Verification:

```txt
git diff --check
```

### Batch 45: Image Briefs And Contact Sheet

Status: planned.

Write production image briefs for the selected slice, then generate one small unlabeled contact sheet of about `12` to `15` cells. Preserve the approved slice order exactly. Stop for human image review before cropping, optimizing, editing production JSON image fields, or replacing any assets.

This batch must follow `docs/image-pipeline.md`, especially:

- refined, lightly dimensional pixel art;
- full square background or transparency;
- circular-safe composition;
- no text, letters, logos, brands, watermarks, copyrighted characters, clutter, scary content, or confusing extra objects;
- compare against current references such as `cozonac`, `cățel`, `cadă`, `buchet`, `castravete`, `jachetă`, `umbrelă`, `scaun`, and `vacă`.

Verification:

```txt
git diff --check
```

### Batch 46: Production Promotion And Verification

Status: planned.

Promote only human-accepted words and images:

- crop accepted contact-sheet cells in fixed order;
- normalize backgrounds;
- check circular-mask safety;
- post-process through the established refined pixel-art workflow;
- optimize to `256 x 256 px` lossless WebP;
- add or update canonical production JSON records;
- update letters, route aliases, loaders, validation, or compatibility fixtures only where required;
- update only necessary alt text and image metadata.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Browser verification should use the existing local dev server at `http://localhost:3000`. If sandboxed localhost checks fail, retry outside the sandbox before concluding the server is unavailable.

### Batch 47: Slice Coverage QA And Next Prompt

Status: planned.

After each production slice:

- recount affected starts-with, contains-only, and mixed pools;
- verify `/admin/words` and representative `/ro/play/<target>` routes when the local server is available;
- update this feature `status.md`;
- update global `docs/status.md`;
- update the next prompt with either the next Batch 44 slice or final QA;
- record any words deferred because of vocabulary, image, route, or safety concerns.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

### Final QA Batch: Expansion Closeout

Status: planned.

Run after all approved slices for this request are complete.

Tasks:

- confirm final approved-word and ready-image totals;
- confirm no approved placeholders unless a separately approved exception exists;
- confirm new playable letters and affected sequence targets behave in setup, play, exclusion filtering, and admin inventory;
- confirm no missing or unused production image assets;
- verify representative local routes and assets;
- update `docs/status.md`, feature `status.md`, and the next-agent prompt;
- list any remaining release verification steps.

Suggested verification:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run build
git diff --check
```

## Batch 42 Worksheet Requirements

Create a new candidate worksheet before any production JSON changes. The worksheet must include:

```txt
candidate word
display spelling with Romanian diacritics
canonical starting letter
route/ID prefix if the letter is newly enabled
category
part of speech
age fit
child-known / learnable stretch / reject
familiarity score
imageability score
safety notes
primary requested area improved
secondary requested areas improved
primary speech target
secondary speech targets
target sound position: initial / medial / final / cluster / repeated
syllable count
simple or complex syllable shape
consonant clusters present
likely contrast target, if any
starts-with target improved
contains targets improved
overlap load notes
duplicate/near-synonym check
source notes
review decision
rejection reason, if rejected
therapist-review note
image brief status
```

Worksheet candidates must be deduplicated against all approved Romanian words by ID, exact `word`, exact `display`, and `normalized` value.

The worksheet should explicitly separate:

- strong child-known candidates;
- acceptable learnable stretch words;
- rejected or held words;
- candidates that need human decision because of vocabulary familiarity, image ambiguity, child safety, or Romanian usage uncertainty.

## Batch 42 Research Requirements

Before accepting candidates, Batch 42 must do source research where the decision depends on:

- current Romanian usage or spelling;
- whether a borrowed-letter word is standard enough for Romanian child vocabulary;
- whether a word is too obscure for a 4-to-6-year-old audience;
- Romanian speech/logopedie sound-position practice;
- child safety or appropriateness;
- whether an action or concept is imageable in one clear icon.

Record source URLs in the worksheet or a companion audit section. Use sources to understand language and speech-practice value; do not copy external images or protected assets.

## Production Slice Rules

After Batch 43 human vocabulary review, implement accepted words in small production slices:

- target about `15` words per slice;
- store each word once in its canonical starting-letter manifest;
- create or enable new letter manifests only after the vocabulary and route convention are ready;
- use stable word IDs and image paths matching the existing conventions;
- do not introduce speech-target metadata into production JSON unless a separate schema decision is approved;
- do not add placeholder-backed approved words for this request unless the human explicitly approves a temporary placeholder plan for a specific slice.

Each production slice must include image work or a documented image gate:

- write image briefs for every new word;
- generate small unlabeled contact sheets of about `12` to `15` cells;
- preserve the human-provided or worksheet order exactly;
- stop for human review before cropping, optimizing, editing JSON image fields, or replacing production files;
- use the existing refined pixel-art workflow from `docs/image-pipeline.md`;
- compare accepted cells against current style references such as `cozonac`, `cățel`, `cadă`, `buchet`, `castravete`, `jachetă`, `umbrelă`, `scaun`, and `vacă`;
- ensure every final image is `256 x 256 px`, lossless WebP, below the `20 KB` hard maximum, and safe inside circular wheel/admin masks.

## Non-Goals

This expansion must not add:

- accounts;
- billing;
- database-backed gameplay;
- admin editing;
- AI pronunciation scoring;
- clinical or therapy claims;
- production speech-target metadata without a separate schema decision;
- unreviewed placeholder-backed child-facing words;
- large unoptimized assets;
- obscure words merely to satisfy quotas.

## Verification Expectations

Documentation-only Batch 41:

```txt
git diff --check
```

Worksheet Batch 42:

```txt
git diff --check
```

Production and image slices:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Browser verification should use the existing local dev server at `http://localhost:3000`. If sandboxed localhost checks fail, retry outside the sandbox before concluding the server is unavailable.
