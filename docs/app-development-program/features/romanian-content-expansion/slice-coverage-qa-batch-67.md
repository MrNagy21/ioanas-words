# Batch 67 Slice Coverage QA And Next Prompt

Batch: Romanian Content Expansion Batch 67.

Status: complete.

Last updated: 2026-06-13.

## Scope Guard

Batch 67 is QA and planning handoff only. It does not add production words, image assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

## Canonical Totals

After Batch 66:

- total Romanian records: `460`;
- approved words: `457`;
- ready images: `457`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- missing approved production image assets: `0`.

Confirmed production decisions:

- `tacâmuri` is the promoted production row; `tacâm` was not added.
- `cameră web` remains in `C`.
- `iac` remains in `I`.
- `webcam` and `yak` were not reintroduced.
- New playable rare-letter routes `K`, `Q`, `W`, `X`, and `Y` remain enabled.

## Batch 66 Asset QA

All Batch 66 assets exist, are `256 x 256 px`, and are below both the `12 KB` warning threshold and `20 KB` hard maximum.

| Word | Asset | Size |
| --- | --- | ---: |
| `bibliotecă` | `public/images/ro/b/ro-b-biblioteca.webp` | `3808` bytes |
| `radiator` | `public/images/ro/r/ro-r-radiator.webp` | `4582` bytes |
| `sacou` | `public/images/ro/s/ro-s-sacou.webp` | `5266` bytes |
| `șoim` | `public/images/ro/ș/ro-sh-soim.webp` | `3582` bytes |
| `ștampilă` | `public/images/ro/ș/ro-sh-stampila.webp` | `2910` bytes |
| `șezlong` | `public/images/ro/ș/ro-sh-sezlong.webp` | `3524` bytes |
| `tacâmuri` | `public/images/ro/t/ro-t-tacamuri.webp` | `2926` bytes |
| `țarc` | `public/images/ro/ț/ro-tz-tarc.webp` | `3952` bytes |
| `țiglă` | `public/images/ro/ț/ro-tz-tigla.webp` | `4198` bytes |
| `viespe` | `public/images/ro/v/ro-v-viespe.webp` | `4052` bytes |
| `șurubelniță` | `public/images/ro/ș/ro-sh-surubelnita.webp` | `2336` bytes |
| `joben` | `public/images/ro/j/ro-j-joben.webp` | `3438` bytes |
| `jantă` | `public/images/ro/j/ro-j-janta.webp` | `6120` bytes |
| `coțofană` | `public/images/ro/c/ro-c-cotofana.webp` | `2908` bytes |
| `jardinieră` | `public/images/ro/j/ro-j-jardiniera.webp` | `4034` bytes |

Visual QA artifacts:

- `assets/image-sources/ro/batch-65/final-preview.png`
- `assets/image-sources/ro/batch-65/circular-preview.png`

## Requested-Target Coverage

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | 0 | 192 | 192 |
| `Â` | 0 | 13 | 13 |
| `K` | 5 | 1 | 6 |
| `Q` | 1 | 0 | 1 |
| `W` | 1 | 2 | 3 |
| `X` | 1 | 5 | 6 |
| `Y` | 2 | 0 | 2 |
| `CE` | 14 | 4 | 18 |
| `CI` | 9 | 11 | 20 |
| `GE` | 9 | 6 | 15 |
| `GI` | 6 | 9 | 15 |
| `GHE` | 11 | 4 | 15 |
| `GHI` | 8 | 5 | 13 |
| `CHE` | 2 | 13 | 15 |
| `CHI` | 8 | 7 | 15 |
| `L` | 22 | 95 | 117 |
| `R` | 20 | 162 | 182 |
| `S` | 25 | 32 | 57 |
| `Ș` | 17 | 29 | 46 |
| `T` | 18 | 98 | 116 |
| `Ț` | 8 | 44 | 52 |
| `V` | 17 | 19 | 36 |
| `B` | 32 | 29 | 61 |
| `D` | 11 | 27 | 38 |
| `J` | 8 | 9 | 17 |

## Verification

Batch 67 reused the Batch 66 post-promotion verification, all passing on 2026-06-13:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run check:setup-storage
pnpm run build
git diff --check
```

`pnpm run validate:content` reported only pre-existing image warning-threshold notices outside the Batch 66 assets.

Sandboxed localhost checks failed, then the required outside-sandbox retry returned `200` for `/ro`, `/admin/words`, affected play routes, and representative Batch 66 image URLs.

## Next-Step Decision

Continue content expansion with another planning-only slice from the remaining already human-reviewed Batch 43 candidate pool.

Preserved decisions:

- do not force `Ă` or `Â` starts-with rows;
- do not pad `Q`, `W`, or `Y` with obscure words;
- keep `cameră web` in `C`;
- keep `iac` in `I`;
- do not reintroduce `webcam` or `yak` unless the human explicitly reopens those decisions;
- keep speech-target details in planning docs for now, not production manifests;
- continue avoiding near-duplicate diminutives and recent visual lookalikes when safer stretch rows remain.

## Batch 68 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 67.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
6. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
7. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md
8. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md
9. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md
10. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-56.md
11. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-60.md
12. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-64.md
13. docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-67.md
14. docs/app-development-program/features/romanian-content-expansion/status.md
15. docs/status.md

Goal:

Execute Batch 68: plan the next small production slice from the remaining already human-reviewed Batch 43 candidate pool. Do not generate images or add production JSON records in this batch.

Tasks:

- Recompute the current canonical totals and requested-target coverage from `content/ro/*.json`.
- Review remaining Batch 43 candidate rows after excluding already planned/promoted rows from Batches 44, 48, 52, 56, 60, and 64.
- Select up to `15` concrete, child-safe, imageable Romanian nouns that are defensible for production and improve underfilled monitored areas without forcing obscure rare-letter padding.
- Before accepting any word whose current usage, form, child familiarity, safety, or source status is uncertain, do current source research and record the source.
- For each selected row, record canonical file, stable ID, planned image path, normalized form, category, difficulty, source check, image brief direction, and expected starts/contains impact.
- Defer weak rows with explicit reasons, especially near-duplicates, visually confusing concepts, obscure terms, or safety-awkward words.
- Preserve existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.
- Run `git diff --check`.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with the planning result and the Batch 69 image-brief/contact-sheet prompt.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```
