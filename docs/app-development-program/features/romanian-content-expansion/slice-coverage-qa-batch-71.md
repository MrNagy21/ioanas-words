# Batch 71 Slice Coverage QA And Next Prompt

Batch: Romanian Content Expansion Batch 71.

Status: complete.

Last updated: 2026-06-13.

## Scope Guard

Batch 71 is QA and planning handoff only. It does not add production words, image assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

## Canonical Totals

After Batch 70:

- total Romanian records: `474`;
- approved words: `471`;
- ready images: `471`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3` (`ghicitoare`, `miez`, and `stinghie`);
- missing approved production image assets: `0`.

Confirmed production decisions:

- `răchită` was not promoted and has no production row or asset.
- `rășină` uses the first corrective variant from `assets/image-sources/ro/batch-69/corrective-contact-sheet-1.png`.
- `gingie` uses the first corrective variant from `assets/image-sources/ro/batch-69/corrective-contact-sheet-1.png`.
- `tacâmuri` remains the promoted production row; `tacâm` was not added.
- `cameră web` remains in `C`.
- `iac` remains in `I`.
- `webcam` and `yak` were not reintroduced.
- New playable rare-letter routes `K`, `Q`, `W`, `X`, and `Y` remain enabled.

## Batch 70 Asset QA

All Batch 70 assets exist, are `256 x 256 px`, and are below both the `12 KB` warning threshold and `20 KB` hard maximum.

| Word | Asset | Size |
| --- | --- | ---: |
| `șnur` | `public/images/ro/ș/ro-sh-snur.webp` | `2198` bytes |
| `țambal` | `public/images/ro/ț/ro-tz-tambal.webp` | `6874` bytes |
| `țipar` | `public/images/ro/ț/ro-tz-tipar.webp` | `9434` bytes |
| `dantelă` | `public/images/ro/d/ro-d-dantela.webp` | `10984` bytes |
| `degetar` | `public/images/ro/d/ro-d-degetar.webp` | `11176` bytes |
| `daltă` | `public/images/ro/d/ro-d-dalta.webp` | `2306` bytes |
| `dudă` | `public/images/ro/d/ro-d-duda.webp` | `4782` bytes |
| `jder` | `public/images/ro/j/ro-j-jder.webp` | `4366` bytes |
| `jambiere` | `public/images/ro/j/ro-j-jambiere.webp` | `6832` bytes |
| `rășină` | `public/images/ro/r/ro-r-rasina.webp` | `5996` bytes |
| `bondar` | `public/images/ro/b/ro-b-bondar.webp` | `5192` bytes |
| `cojoc` | `public/images/ro/c/ro-c-cojoc.webp` | `11584` bytes |
| `bijuterie` | `public/images/ro/b/ro-b-bijuterie.webp` | `9376` bytes |
| `gingie` | `public/images/ro/g/ro-g-gingie.webp` | `3998` bytes |

Visual QA artifacts:

- `assets/image-sources/ro/batch-69/final-preview.png`
- `assets/image-sources/ro/batch-69/circular-preview.png`

The circular preview confirms the long or edge-heavy cells were padded so circular masks clip only background.

## Requested-Target Coverage

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | 0 | 196 | 196 |
| `Â` | 0 | 13 | 13 |
| `K` | 5 | 1 | 6 |
| `Q` | 1 | 0 | 1 |
| `W` | 1 | 2 | 3 |
| `X` | 1 | 5 | 6 |
| `Y` | 2 | 0 | 2 |
| `CE` | 14 | 4 | 18 |
| `CI` | 9 | 11 | 20 |
| `GE` | 9 | 7 | 16 |
| `GI` | 7 | 9 | 16 |
| `GHE` | 11 | 4 | 15 |
| `GHI` | 8 | 5 | 13 |
| `CHE` | 2 | 13 | 15 |
| `CHI` | 8 | 7 | 15 |
| `L` | 22 | 98 | 120 |
| `R` | 21 | 169 | 190 |
| `S` | 25 | 32 | 57 |
| `Ș` | 18 | 30 | 48 |
| `T` | 18 | 102 | 120 |
| `Ț` | 10 | 44 | 54 |
| `V` | 17 | 19 | 36 |
| `B` | 34 | 31 | 65 |
| `D` | 15 | 29 | 44 |
| `J` | 10 | 11 | 21 |

## Verification

Batch 71 verification passed on 2026-06-13:

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

`pnpm run validate:content` reported only pre-existing image warning-threshold notices outside the Batch 70 assets.

Sandboxed localhost checks failed, then the required outside-sandbox retry returned `200` for `/ro`, `/admin/words`, `/ro/play/gi`, and representative Batch 70 image URL `/images/ro/r/ro-r-rasina.webp`.

## Next-Step Decision

Continue content expansion with another planning-only slice from the remaining already human-reviewed Batch 43 candidate pool.

Preserved decisions:

- do not force `Ă` or `Â` starts-with rows;
- do not pad `Q`, `W`, or `Y` with obscure words;
- keep `cameră web` in `C`;
- keep `iac` in `I`;
- do not reintroduce `webcam` or `yak` unless the human explicitly reopens those decisions;
- keep `răchită` out unless the human explicitly reopens that decision;
- keep speech-target details in planning docs for now, not production manifests;
- continue avoiding near-duplicate diminutives and recent visual lookalikes when safer stretch rows remain.

## Batch 72 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 71.

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
13. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-68.md
14. docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-71.md
15. docs/app-development-program/features/romanian-content-expansion/status.md
16. docs/status.md

Goal:

Execute Batch 72: plan the next small production slice from the remaining already human-reviewed Batch 43 candidate pool. Do not generate images or add production JSON records in this batch.

Tasks:

- Recompute the current canonical totals and requested-target coverage from `content/ro/*.json`.
- Review remaining Batch 43 candidate rows after excluding already planned/promoted rows from Batches 44, 48, 52, 56, 60, 64, and 68.
- Select up to `15` concrete, child-safe, imageable Romanian nouns that are defensible for production and improve underfilled monitored areas without forcing obscure rare-letter padding.
- Before accepting any word whose current usage, form, child familiarity, safety, or source status is uncertain, do current source research and record the source.
- For each selected row, record canonical file, stable ID, planned image path, normalized form, category, difficulty, source check, image brief direction, and expected starts/contains impact.
- Defer weak rows with explicit reasons, especially near-duplicates, visually confusing concepts, obscure terms, or safety-awkward words.
- Preserve existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, do not reintroduce `webcam` or `yak`, and do not reopen `răchită` without explicit human decision.
- Run `git diff --check`.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with the planning result and the Batch 73 image-brief/contact-sheet prompt.

Do not add placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
```
