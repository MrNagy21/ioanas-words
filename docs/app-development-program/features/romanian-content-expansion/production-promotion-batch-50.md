# Batch 50 Production Promotion: Second Requested Expansion Slice

Batch: Romanian Content Expansion Batch 50.

Status: complete.

Last updated: 2026-06-11.

## Scope

Batch 50 promoted the human-accepted Batch 49 contact-sheet cells into production JSON and optimized public WebP assets.

Human review decision:

- Accepted: `karate`, `kilt`, `yoga`, `tren`, `tractor`, `tablă`, `tigaie`, `tamburină`, `trandafir`, `ventilator`, `vopsea`, `volan`, `vestă`, and `vânătă`.
- Accepted with change: `kimono`, but the robe needed to be white. A single replacement white kimono icon with a blue belt was generated and used for production.

No route aliases, schema fields, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added.

## Promoted Words

| Word | ID | File | Image |
| --- | --- | --- | --- |
| `kimono` | `ro-k-kimono` | `content/ro/words-k.json` | `/images/ro/k/ro-k-kimono.webp` |
| `karate` | `ro-k-karate` | `content/ro/words-k.json` | `/images/ro/k/ro-k-karate.webp` |
| `kilt` | `ro-k-kilt` | `content/ro/words-k.json` | `/images/ro/k/ro-k-kilt.webp` |
| `yoga` | `ro-y-yoga` | `content/ro/words-y.json` | `/images/ro/y/ro-y-yoga.webp` |
| `tren` | `ro-t-tren` | `content/ro/words-t.json` | `/images/ro/t/ro-t-tren.webp` |
| `tractor` | `ro-t-tractor` | `content/ro/words-t.json` | `/images/ro/t/ro-t-tractor.webp` |
| `tablă` | `ro-t-tabla` | `content/ro/words-t.json` | `/images/ro/t/ro-t-tabla.webp` |
| `tigaie` | `ro-t-tigaie` | `content/ro/words-t.json` | `/images/ro/t/ro-t-tigaie.webp` |
| `tamburină` | `ro-t-tamburina` | `content/ro/words-t.json` | `/images/ro/t/ro-t-tamburina.webp` |
| `trandafir` | `ro-t-trandafir` | `content/ro/words-t.json` | `/images/ro/t/ro-t-trandafir.webp` |
| `ventilator` | `ro-v-ventilator` | `content/ro/words-v.json` | `/images/ro/v/ro-v-ventilator.webp` |
| `vopsea` | `ro-v-vopsea` | `content/ro/words-v.json` | `/images/ro/v/ro-v-vopsea.webp` |
| `volan` | `ro-v-volan` | `content/ro/words-v.json` | `/images/ro/v/ro-v-volan.webp` |
| `vestă` | `ro-v-vesta` | `content/ro/words-v.json` | `/images/ro/v/ro-v-vesta.webp` |
| `vânătă` | `ro-v-vanata` | `content/ro/words-v.json` | `/images/ro/v/ro-v-vanata.webp` |

## Image QA

Processing artifacts:

- square preview: `assets/image-sources/ro/batch-49/final-preview.png`;
- circular-mask preview: `assets/image-sources/ro/batch-49/circular-preview.png`;
- visible circle-boundary debug preview: `assets/image-sources/ro/batch-49/circular-preview-debug.png`;
- brand-comparison sheet: `assets/image-sources/ro/batch-49/brand-comparison.png`.

The first processing pass exposed subtle square background panels on padded images. The final pass fixed this by making edge-connected contact-sheet background pixels transparent before recompositing each subject onto a full-square background.

Foreground-vs-circle QA passed with `0` foreground pixels outside the circular safe area for every promoted image. Extra padding was applied to edge-heavy or long shapes, especially `tren`, `tractor`, `tigaie`, `trandafir`, `ventilator`, `karate`, `yoga`, and `tablă`.

Final WebP sizes:

| ID | Size |
| --- | ---: |
| `ro-k-kimono` | `2848 B` |
| `ro-k-karate` | `3794 B` |
| `ro-k-kilt` | `4652 B` |
| `ro-y-yoga` | `2838 B` |
| `ro-t-tren` | `4312 B` |
| `ro-t-tractor` | `4438 B` |
| `ro-t-tabla` | `2550 B` |
| `ro-t-tigaie` | `2794 B` |
| `ro-t-tamburina` | `3204 B` |
| `ro-t-trandafir` | `3628 B` |
| `ro-v-ventilator` | `3958 B` |
| `ro-v-vopsea` | `5102 B` |
| `ro-v-volan` | `3872 B` |
| `ro-v-vesta` | `4232 B` |
| `ro-v-vanata` | `2622 B` |

All promoted Batch 50 images are below the `12 KB` warning threshold and the `20 KB` hard maximum.

## Content Totals

After Batch 50:

- total Romanian records: `400`;
- approved words: `397`;
- ready images: `397`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3`.

Selected affected target coverage:

| Target | Starts | Contains | Mixed |
| --- | ---: | ---: | ---: |
| `K` | `5` | `1` | `6` |
| `Y` | `2` | `0` | `2` |
| `L` | `14` | `82` | `96` |
| `R` | `14` | `144` | `158` |
| `S` | `17` | `30` | `47` |
| `T` | `17` | `86` | `103` |
| `V` | `14` | `14` | `28` |
| `B` | `23` | `23` | `46` |
| `D` | `9` | `19` | `28` |

## Verification

Passed on 2026-06-11:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run build
git diff --check
```

`pnpm run validate:content` reported only pre-existing image warning-threshold notices plus the existing `ro-x-xilofon.webp` warning from Batch 46; none of the Batch 50 promoted images exceeded the warning threshold.

Local browser/app QA could not run because `http://localhost:3000` was unavailable both inside and outside the sandbox. No alternate dev server or port was started.

## Batch 51 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 50.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/requested-letter-and-sound-expansion-batch-41.md
7. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
8. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
9. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md
10. docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-49.md
11. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-50.md
12. docs/app-development-program/features/romanian-content-expansion/status.md
13. docs/status.md

Goal:

Execute Batch 51: slice coverage QA and next-prompt preparation after the Batch 50 production promotion.

Tasks:

- Recompute canonical totals from `content/ro/*.json`.
- Recompute affected starts-with, contains-only, and mixed pools for requested targets, especially `K`, `Y`, `T`, `V`, `L`, `R`, `S`, `B`, and `D`.
- Confirm no production `webcam` or `yak` row was introduced, `cameră web` remains in `C`, and `iac` remains in `I`.
- Confirm no approved placeholders, schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added.
- Verify the Batch 50 public WebP files exist, are `256 x 256 px`, and remain below the `20 KB` hard maximum.
- If the expected local dev server is reachable at `http://localhost:3000`, verify `/ro`, `/admin/words`, and representative affected routes such as `/ro/play/k`, `/ro/play/t`, `/ro/play/v`, and `/ro/play/y`. If sandboxed localhost checks fail, retry outside the sandbox before concluding the server is unavailable. Do not start another dev server or use another port.
- Decide and document the next content step: another production-slice planning batch from the already reviewed candidate pool, broader release QA, or pause for release.
- Update `docs/app-development-program/features/romanian-content-expansion/status.md`, `docs/status.md`, and `docs/next-image-batch-prompt.md`.

Run:

pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run build
git diff --check
```
