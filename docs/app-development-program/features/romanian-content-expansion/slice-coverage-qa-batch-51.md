# Batch 51 Slice Coverage QA And Next Prompt

Batch: Romanian Content Expansion Batch 51.

Status: complete.

Last updated: 2026-06-11.

## Scope

Batch 51 closed out the Batch 50 production promotion by recomputing totals, checking affected coverage, verifying promoted assets, confirming scope guards, and preparing the next batch prompt.

No production words, image assets, route aliases, schema fields, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added in Batch 51.

## Canonical Totals

Computed from `content/ro/*.json`:

- total Romanian records: `400`;
- approved words: `397`;
- ready images: `397`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3`.

Rejected rows remain:

- `ro-g-ghicitoare`;
- `ro-m-miez`;
- `ro-s-stinghie`.

## Coverage Snapshot

Affected and monitored targets after Batch 50:

| Target | Starts | Contains | Mixed |
| --- | ---: | ---: | ---: |
| `K` | `5` | `1` | `6` |
| `Y` | `2` | `0` | `2` |
| `T` | `17` | `86` | `103` |
| `V` | `14` | `14` | `28` |
| `L` | `14` | `82` | `96` |
| `R` | `14` | `144` | `158` |
| `S` | `17` | `30` | `47` |
| `B` | `23` | `23` | `46` |
| `D` | `9` | `19` | `28` |
| `Q` | `1` | `0` | `1` |
| `W` | `1` | `2` | `3` |
| `X` | `1` | `5` | `6` |
| `CE` | `14` | `3` | `17` |
| `CI` | `9` | `9` | `18` |
| `GE` | `9` | `6` | `15` |
| `GI` | `6` | `9` | `15` |
| `GHE` | `11` | `4` | `15` |
| `CHE` | `2` | `13` | `15` |
| `CHI` | `8` | `7` | `15` |
| `Ș` | `12` | `27` | `39` |
| `Ț` | `5` | `36` | `41` |
| `J` | `5` | `9` | `14` |

## Scope Guard Checks

Confirmed:

- no production `webcam` row exists;
- no production `yak` row exists;
- `cameră web` remains `ro-c-camera-web` in `content/ro/words-c.json`;
- `iac` remains `ro-i-iac` in `content/ro/words-i.json`;
- there are `0` approved placeholder-backed rows;
- the only placeholder-status rows found by text search are rejected audit-trail rows;
- no schema changes or route aliases were added by Batch 50;
- no speech-target production metadata, database/auth/billing/admin feature, AI pronunciation, or clinical claim was added.

## Asset Checks

All Batch 50 public WebP files exist, are `256 x 256 px`, and remain below the `20 KB` hard maximum. They also remain below the `12 KB` warning threshold:

| Asset | Size |
| --- | ---: |
| `public/images/ro/k/ro-k-kimono.webp` | `2848 B` |
| `public/images/ro/k/ro-k-karate.webp` | `3794 B` |
| `public/images/ro/k/ro-k-kilt.webp` | `4652 B` |
| `public/images/ro/y/ro-y-yoga.webp` | `2838 B` |
| `public/images/ro/t/ro-t-tren.webp` | `4312 B` |
| `public/images/ro/t/ro-t-tractor.webp` | `4438 B` |
| `public/images/ro/t/ro-t-tabla.webp` | `2550 B` |
| `public/images/ro/t/ro-t-tigaie.webp` | `2794 B` |
| `public/images/ro/t/ro-t-tamburina.webp` | `3204 B` |
| `public/images/ro/t/ro-t-trandafir.webp` | `3628 B` |
| `public/images/ro/v/ro-v-ventilator.webp` | `3958 B` |
| `public/images/ro/v/ro-v-vopsea.webp` | `5102 B` |
| `public/images/ro/v/ro-v-volan.webp` | `3872 B` |
| `public/images/ro/v/ro-v-vesta.webp` | `4232 B` |
| `public/images/ro/v/ro-v-vanata.webp` | `2622 B` |

## Browser QA

`http://localhost:3000/ro` was unavailable both inside and outside the sandbox on 2026-06-11. No alternate dev server or port was started.

Browser QA remains pending for:

- `/ro`;
- `/admin/words`;
- `/ro/play/k`;
- `/ro/play/t`;
- `/ro/play/v`;
- `/ro/play/y`.

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

`pnpm run validate:content` reported known warning-threshold image notices only; none of the Batch 50 assets exceeded the warning threshold.

## Next Step Decision

Proceed with another production-slice planning batch from the already human-reviewed Batch 43 candidate pool. This should stay planning-only until the next image-brief/contact-sheet batch.

The next batch should continue quality-gated expansion without forcing `Ă`, `Â`, `Q`, `W`, or `Y` padding, and should preserve the decisions that `cameră web` stays in `C`, `iac` stays in `I`, and `webcam` / `yak` remain out unless explicitly reopened.

## Batch 52 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 51.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/requested-letter-and-sound-expansion-batch-41.md
7. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
8. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
9. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md
10. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md
11. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-50.md
12. docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-51.md
13. docs/app-development-program/features/romanian-content-expansion/status.md
14. docs/status.md

Goal:

Execute Batch 52: plan the next small production slice from the already human-reviewed Batch 43 candidate pool. This batch is planning-only.

Tasks:

- Re-read the Batch 43 accepted/held candidate decisions.
- Recompute current coverage from the canonical `397`-word pack.
- Choose a small quality-gated slice of about `12` to `15` words where the candidates are concrete, child-safe, imageable, and useful for requested coverage.
- Re-check current source evidence for any borrowed, rare-letter, or potentially ambiguous Romanian forms before planning them.
- Preserve existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.
- For every planned row, record canonical file, stable ID, image path, normalized form, category, difficulty, source check, metadata notes, image brief direction, and expected target coverage impact.
- Do not add production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Update `docs/app-development-program/features/romanian-content-expansion/status.md`, `docs/status.md`, and `docs/next-image-batch-prompt.md`.
- Provide the Batch 53 ready-to-copy prompt for image briefs and one contact sheet.

Run:

git diff --check
```
