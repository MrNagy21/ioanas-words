# Batch 11 Next Romanian Production Scope Decision

Batch: Romanian Content Expansion Batch 11, Next Romanian Production Scope Decision.

Decision date: 2026-05-17.

## Scope Reviewed

Batch 11 reviewed post-Batch 10 `/admin/words` coverage, helper-derived coverage from `getLocaleCoverageSummary("ro")`, the Batch 2 candidate worksheet, and the product concern that word-by-word production/image batches are too slow.

No production JSON records or image assets were added in this batch.

## Post-Batch 10 Coverage

Helper-derived `/admin/words` summary:

- Enabled letters: `17`
- Approved words: `83`
- Ready images: `83`
- Placeholder images: `0`
- Starts-with assignments: `83`
- Contains-only assignments across enabled letters: `186`

Enabled-letter coverage:

| Letter | Starts-with | Contains-only | Mixed | Ready starts | Ready contains | Placeholder images |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `A` | 10 | 35 | 45 | 10 | 35 | 0 |
| `B` | 3 | 5 | 8 | 3 | 5 | 0 |
| `C` | 16 | 16 | 32 | 16 | 16 | 0 |
| `D` | 2 | 4 | 6 | 2 | 4 | 0 |
| `F` | 2 | 2 | 4 | 2 | 2 | 0 |
| `G` | 4 | 2 | 6 | 4 | 2 | 0 |
| `I` | 1 | 23 | 24 | 1 | 23 | 0 |
| `J` | 2 | 1 | 3 | 2 | 1 | 0 |
| `M` | 10 | 4 | 14 | 10 | 4 | 0 |
| `N` | 1 | 21 | 22 | 1 | 21 | 0 |
| `P` | 11 | 9 | 20 | 11 | 9 | 0 |
| `R` | 5 | 24 | 29 | 5 | 24 | 0 |
| `S` | 7 | 9 | 16 | 7 | 9 | 0 |
| `Ș` | 3 | 8 | 11 | 3 | 8 | 0 |
| `Ț` | 1 | 6 | 7 | 1 | 6 | 0 |
| `U` | 2 | 14 | 16 | 2 | 14 | 0 |
| `Z` | 3 | 3 | 6 | 3 | 3 | 0 |

Additional helper-derived target checks for currently unsupported or thin starts-with targets:

| Target | Starts-with | Contains-only | Mixed | Notes |
| --- | ---: | ---: | ---: | --- |
| `Ă` | 0 | 36 | 36 | Strong contains coverage; no exact starts-with bucket. |
| `Â` | 0 | 3 | 3 | Thin contains coverage; no exact starts-with bucket. |
| `Î` | 0 | 0 | 0 | No current exact coverage. |
| `L` | 0 | 10 | 10 | Contains-only coverage exists, but no starts-with bucket. |
| `T` | 0 | 16 | 16 | Contains-only coverage exists, but no starts-with bucket. |
| `V` | 0 | 4 | 4 | Thin contains coverage, no starts-with bucket. |

## Worksheet Availability

The Batch 2 worksheet contains `43` accepted candidate rows. Batch 5, Batch 8, and Batch 10 together implemented all `43` accepted rows as approved production words with ready reviewed images.

Accepted worksheet availability after Batch 10:

- Accepted rows: `43`
- Accepted rows already implemented: `43`
- Accepted rows still available for a future production slice: `0`

Rejected and needs-revision rows remain ineligible for production content. They should not be used to fill quotas without a new review pass and explicit documentation changing their decision.

## Decision

The next Romanian expansion step should change from small word-and-image slices to a split vocabulary-first and image-second pipeline.

Reasons:

- The current worksheet is exhausted, so another small production slice cannot be selected from existing accepted rows.
- Word selection and image production are different responsibilities and should not block each other for every small set.
- A single research-focused agent can create a broader Romanian vocabulary scope across letters and speech targets before implementation.
- A later image-focused agent can use the existing image pipeline to replace placeholders in bulk.
- The app can support a generic, clearly unfinished placeholder image if the product accepts placeholder-backed words for the interim gameplay/content-review phase.

## New Pipeline Direction

Batch 12 should be a Romanian Vocabulary Scope Spec.

It should:

- Research current Romanian child vocabulary, Romanian language usage, and speech/logopedie target guidance before selecting words.
- Use existing docs as constraints, especially `speech-therapy-content-guidance.md`, `review-and-qa.md`, and the image pipeline rules.
- Propose the full target word list by letter, not a tiny slice.
- Track speech target, sound position, syllable complexity, consonant clusters, contrast value, age fit, imageability, and safety in a reviewable worksheet/spec.
- Include target counts per letter that respect quality limits instead of forcing every letter to the same number.
- Decide how placeholders are used before JSON implementation.
- Resolve exact `Ă`, `Â`, and `Î` ASCII ID tokens if those buckets enter scope.
- Ask the human for borderline vocabulary, clinical/speech-therapy claims, placeholder visibility, or any scope expansion.

Batch 13 should implement the approved vocabulary scope into production manifests without final per-word images.

It should:

- Add only words approved by the Batch 12 spec/worksheet.
- Use canonical per-letter word files and stable IDs.
- Use a single app-owned generic placeholder image for all words that do not yet have a final image.
- Keep the placeholder visually clear as unfinished artwork, preferably a neutral question-mark tile rather than a character or "joker" image.
- Update validation and admin reporting so placeholder-backed words are intentional and visible to reviewers.
- Avoid speech-target metadata in production JSON unless a later human-approved schema changes that boundary.

Batch 14 and later should replace placeholder images with reviewed final images.

They should:

- Use the existing pixel-art image style and optimization rules.
- Work from words that have `imageStatus: "placeholder"`.
- Generate, review, optimize, and promote final WebP assets in larger image-focused batches.
- Keep every final image text-free, brand-free, child-safe, and recognizable at wheel size.

## Placeholder Policy To Resolve

The human-approved placeholder policy is:

- Approved placeholder-backed words may be visible in gameplay until final per-word images exist.
- Placeholder imagery must be deliberately generic and clearly unfinished, not misleading final artwork.
- The preferred placeholder is a neutral question-mark tile or equivalent simple app-owned mark, not a character or "joker" image.
- `/admin/words` must make placeholder-backed records easy to identify so image work can be prioritized.
- Future image batches replace placeholder images with reviewed final pixel-art assets.

## Diacritic Convention Status

`Ș` and `Ț` conventions are already resolved:

- Exact bucket IDs: `ș`, `ț`
- Exact word files: `content/ro/words-ș.json`, `content/ro/words-ț.json`
- Exact image folders: `/images/ro/ș/`, `/images/ro/ț/`
- ASCII route segments: `/ro/play/sh`, `/ro/play/tz`
- ASCII word ID and filename prefixes: `ro-sh-...`, `ro-tz-...`

`Ă`, `Â`, and `Î` ASCII ID tokens remain unresolved. If Batch 12 includes exact starts-with buckets for those letters, it must resolve the convention before implementation. The convention should preserve exact Romanian bucket identity while avoiding collisions with existing ASCII `A` and `I` IDs.

## Non-Goals Confirmed

- No rejected or needs-revision worksheet candidates were selected.
- No new production JSON records were introduced.
- No image assets were added.
- No speech-target metadata was added to production JSON.
- No admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were introduced.
