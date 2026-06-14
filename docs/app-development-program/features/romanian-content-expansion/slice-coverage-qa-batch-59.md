# Batch 59 Slice Coverage QA And Next Prompt

Batch: Romanian Content Expansion Batch 59.

Status: complete.

Last updated: 2026-06-12.

## Scope

Batch 59 closed out the Batch 58 production promotion by recomputing totals, checking requested-target coverage, verifying promoted assets, confirming scope guards, resolving previously pending localhost route checks, and preparing the next batch prompt.

No production words, image assets, route aliases, schema fields, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added in Batch 59.

## Canonical Totals

Computed from `content/ro/*.json`:

- total Romanian records: `430`;
- approved words: `427`;
- ready images: `427`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3`.

Rejected rows remain:

- `ro-g-ghicitoare`;
- `ro-m-miez`;
- `ro-s-stinghie`.

## Coverage Snapshot

Requested and monitored targets after Batch 58:

| Target | Starts | Contains | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | `0` | `174` | `174` |
| `Â` | `0` | `12` | `12` |
| `K` | `5` | `1` | `6` |
| `Q` | `1` | `0` | `1` |
| `W` | `1` | `2` | `3` |
| `X` | `1` | `5` | `6` |
| `Y` | `2` | `0` | `2` |
| `CE` | `14` | `4` | `18` |
| `CI` | `9` | `11` | `20` |
| `GE` | `9` | `6` | `15` |
| `GI` | `6` | `9` | `15` |
| `GHE` | `11` | `4` | `15` |
| `GHI` | `8` | `5` | `13` |
| `CHE` | `2` | `13` | `15` |
| `CHI` | `8` | `7` | `15` |
| `L` | `20` | `87` | `107` |
| `R` | `18` | `153` | `171` |
| `S` | `22` | `31` | `53` |
| `Ș` | `13` | `28` | `41` |
| `T` | `17` | `91` | `108` |
| `Ț` | `6` | `40` | `46` |
| `V` | `16` | `15` | `31` |
| `B` | `30` | `24` | `54` |
| `D` | `11` | `22` | `33` |
| `J` | `5` | `9` | `14` |

## Scope Guard Checks

Confirmed:

- no production `webcam` row exists;
- no production `yak` row exists;
- `cameră web` remains `ro-c-camera-web` in `content/ro/words-c.json`;
- `iac` remains `ro-i-iac` in `content/ro/words-i.json`;
- there are `0` approved placeholder-backed rows;
- the rejected audit-trail rows remain the only placeholder-backed rows;
- no schema changes or route aliases were added by Batch 58 or Batch 59;
- no speech-target production metadata, database/auth/billing/admin feature, AI pronunciation, or clinical claim was added.

## Asset Checks

All Batch 58 public WebP files exist, are `256 x 256 px`, and remain below the `20 KB` hard maximum. They also remain below the `12 KB` warning threshold:

| Asset | Dimensions | Size |
| --- | --- | ---: |
| `public/images/ro/b/ro-b-biberon.webp` | `256 x 256` | `2482 B` |
| `public/images/ro/b/ro-b-borcan.webp` | `256 x 256` | `4374 B` |
| `public/images/ro/b/ro-b-burete.webp` | `256 x 256` | `6058 B` |
| `public/images/ro/b/ro-b-brad.webp` | `256 x 256` | `4858 B` |
| `public/images/ro/b/ro-b-bluza.webp` | `256 x 256` | `7906 B` |
| `public/images/ro/b/ro-b-banca.webp` | `256 x 256` | `3734 B` |
| `public/images/ro/d/ro-d-dormitor.webp` | `256 x 256` | `6280 B` |
| `public/images/ro/p/ro-p-periuta.webp` | `256 x 256` | `2850 B` |
| `public/images/ro/b/ro-b-bratara.webp` | `256 x 256` | `3744 B` |
| `public/images/ro/s/ro-s-sticla.webp` | `256 x 256` | `7038 B` |
| `public/images/ro/ș/ro-sh-sina.webp` | `256 x 256` | `5776 B` |
| `public/images/ro/v/ro-v-vierme.webp` | `256 x 256` | `4958 B` |
| `public/images/ro/v/ro-v-visine.webp` | `256 x 256` | `5530 B` |
| `public/images/ro/p/ro-p-papuci.webp` | `256 x 256` | `5536 B` |
| `public/images/ro/l/ro-l-ladita.webp` | `256 x 256` | `5742 B` |

## Localhost Route QA

The sandboxed `curl` check still cannot connect to `http://localhost:3000`, but outside-sandbox checks passed after the human started the expected dev server on port `3000`.

Passed outside the sandbox on 2026-06-12:

| URL | Status | Content type |
| --- | ---: | --- |
| `http://localhost:3000/ro` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/admin/words` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/l` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/r` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/s` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/d` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/tz` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/b` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/p` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/sh` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/v` | `200` | `text/html; charset=utf-8` |
| `/images/ro/l/ro-l-lebada.webp` | `200` | `image/webp` |
| `/images/ro/r/ro-r-rac.webp` | `200` | `image/webp` |
| `/images/ro/s/ro-s-supa.webp` | `200` | `image/webp` |
| `/images/ro/d/ro-d-dovlecel.webp` | `200` | `image/webp` |
| `/images/ro/ț/ro-tz-telina.webp` | `200` | `image/webp` |
| `/images/ro/b/ro-b-biberon.webp` | `200` | `image/webp` |
| `/images/ro/d/ro-d-dormitor.webp` | `200` | `image/webp` |
| `/images/ro/p/ro-p-papuci.webp` | `200` | `image/webp` |
| `/images/ro/s/ro-s-sticla.webp` | `200` | `image/webp` |
| `/images/ro/ș/ro-sh-sina.webp` | `200` | `image/webp` |
| `/images/ro/v/ro-v-visine.webp` | `200` | `image/webp` |
| `/images/ro/l/ro-l-ladita.webp` | `200` | `image/webp` |

This resolves the route and representative asset checks that were previously pending for Batches 54, 55, and 58.

## Verification

Passed on 2026-06-12:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run build
git diff --check
```

`pnpm run validate:content` reported known warning-threshold image notices only; none of the Batch 58 assets exceeded the warning threshold.

## Next Step Decision

Proceed with Batch 60 as another planning-only production slice from the remaining already human-reviewed Batch 43 candidate pool. The next slice should stay quality-gated and should not force rare-letter padding.

Preserve the existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.

## Batch 60 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 59.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/speech-therapy-content-guidance.md
6. docs/app-development-program/features/romanian-content-expansion/candidate-review-worksheet-batch-42-requested-letter-and-sound-expansion.md
7. docs/app-development-program/features/romanian-content-expansion/human-vocabulary-review-batch-43.md
8. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-44.md
9. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-48.md
10. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-52.md
11. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-56.md
12. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-58.md
13. docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-59.md
14. docs/app-development-program/features/romanian-content-expansion/status.md
15. docs/status.md

Goal:

Execute Batch 60: plan the next small production slice from the remaining already human-reviewed Batch 43 candidate pool. This batch is planning-only.

Tasks:

- Re-read the Batch 43 accepted/held candidate decisions and the Batch 44, 48, 52, and 56 slice plans so already promoted rows are not repeated.
- Recompute current coverage from the canonical `427`-word pack.
- Choose a small quality-gated slice of about `12` to `15` words where the candidates are concrete, child-safe, imageable, and useful for requested coverage.
- Re-check current source evidence for any borrowed, rare-letter, or potentially ambiguous Romanian forms before planning them.
- Preserve existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.
- For every planned row, record canonical file, stable ID, image path, normalized form, category, difficulty, source check, metadata notes, image brief direction, and expected target coverage impact.
- Do not add production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Update `docs/app-development-program/features/romanian-content-expansion/status.md`, `docs/status.md`, and `docs/next-image-batch-prompt.md`.
- Provide the Batch 61 ready-to-copy prompt for image briefs and one contact sheet.

Run:

git diff --check
```
