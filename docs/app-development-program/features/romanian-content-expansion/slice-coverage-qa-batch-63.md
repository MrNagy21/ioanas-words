# Batch 63 Slice Coverage QA And Next Prompt

Batch: Romanian Content Expansion Batch 63.

Status: complete.

Last updated: 2026-06-13.

## Scope

Batch 63 closed out the Batch 62 production promotion by recomputing totals, checking requested-target coverage, verifying promoted assets, confirming scope guards, checking localhost routes, and preparing the next batch prompt.

No production words, image assets, route aliases, schema fields, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added in Batch 63.

## Canonical Totals

Computed from `content/ro/*.json`:

- total Romanian records: `445`;
- approved words: `442`;
- ready images: `442`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3`;
- duplicate IDs: `0`.

Rejected rows remain:

- `ro-g-ghicitoare`;
- `ro-m-miez`;
- `ro-s-stinghie`.

## Coverage Snapshot

Requested and monitored targets after Batch 62:

| Target | Starts | Contains | Mixed |
| --- | ---: | ---: | ---: |
| `Ă` | `0` | `185` | `185` |
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
| `L` | `22` | `90` | `112` |
| `R` | `19` | `158` | `177` |
| `S` | `24` | `31` | `55` |
| `Ș` | `13` | `29` | `42` |
| `T` | `17` | `94` | `111` |
| `Ț` | `6` | `42` | `48` |
| `V` | `16` | `19` | `35` |
| `B` | `31` | `27` | `58` |
| `D` | `11` | `25` | `36` |
| `J` | `5` | `9` | `14` |

## Scope Guard Checks

Confirmed:

- no production `webcam` row exists;
- no production `yak` row exists;
- `cameră web` remains `ro-c-camera-web` in `content/ro/words-c.json`;
- `iac` remains `ro-i-iac` in `content/ro/words-i.json`;
- there are `0` approved placeholder-backed rows;
- the rejected audit-trail rows remain the only placeholder-backed rows;
- no schema changes or route aliases were added by Batch 62 or Batch 63;
- no speech-target production metadata, database/auth/billing/admin feature, AI pronunciation, or clinical claim was added.

## Asset Checks

All Batch 62 public WebP files exist, are `256 x 256 px`, and remain below the `20 KB` hard maximum. They also remain below the `12 KB` warning threshold:

| Asset | Dimensions | Size |
| --- | --- | ---: |
| `public/images/ro/l/ro-l-locomotiva.webp` | `256 x 256` | `2358 B` |
| `public/images/ro/s/ro-s-sac.webp` | `256 x 256` | `2146 B` |
| `public/images/ro/s/ro-s-sora.webp` | `256 x 256` | `1904 B` |
| `public/images/ro/g/ro-g-galusca.webp` | `256 x 256` | `1690 B` |
| `public/images/ro/f/ro-f-fundita.webp` | `256 x 256` | `2092 B` |
| `public/images/ro/p/ro-p-punguta.webp` | `256 x 256` | `1914 B` |
| `public/images/ro/c/ro-c-covor.webp` | `256 x 256` | `2216 B` |
| `public/images/ro/c/ro-c-cravata.webp` | `256 x 256` | `1304 B` |
| `public/images/ro/l/ro-l-laveta.webp` | `256 x 256` | `2532 B` |
| `public/images/ro/p/ro-p-porumbel.webp` | `256 x 256` | `1832 B` |
| `public/images/ro/r/ro-r-roaba.webp` | `256 x 256` | `1688 B` |
| `public/images/ro/c/ro-c-cabana.webp` | `256 x 256` | `2508 B` |
| `public/images/ro/p/ro-p-padure.webp` | `256 x 256` | `2898 B` |
| `public/images/ro/m/ro-m-medalie.webp` | `256 x 256` | `1690 B` |
| `public/images/ro/b/ro-b-bomboana.webp` | `256 x 256` | `1580 B` |

## Localhost Route QA

The sandboxed localhost check could not connect to `http://localhost:3000`, but outside-sandbox checks passed against the expected user-running dev server on port `3000`.

Passed outside the sandbox on 2026-06-13:

| URL | Status | Content type |
| --- | ---: | --- |
| `http://localhost:3000/ro` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/admin/words` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/l` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/s` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/g` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/f` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/p` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/c` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/r` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/m` | `200` | `text/html; charset=utf-8` |
| `http://localhost:3000/ro/play/b` | `200` | `text/html; charset=utf-8` |
| `/images/ro/l/ro-l-locomotiva.webp` | `200` | `image/webp` |
| `/images/ro/g/ro-g-galusca.webp` | `200` | `image/webp` |
| `/images/ro/c/ro-c-cabana.webp` | `200` | `image/webp` |
| `/images/ro/p/ro-p-padure.webp` | `200` | `image/webp` |
| `/images/ro/b/ro-b-bomboana.webp` | `200` | `image/webp` |

## Verification

Passed on 2026-06-13:

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

`pnpm run validate:content` reported known pre-existing warning-threshold image notices only; none of the Batch 62 assets exceeded the warning threshold.

## Next Step Decision

Proceed with Batch 64 as another planning-only production slice from the remaining already human-reviewed Batch 43 candidate pool. The next slice should stay quality-gated and should not force rare-letter padding.

Preserve the existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.

## Batch 64 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 63.

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
12. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-60.md
13. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-62.md
14. docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-63.md
15. docs/app-development-program/features/romanian-content-expansion/status.md
16. docs/status.md

Goal:

Execute Batch 64: plan the next small production slice from the remaining already human-reviewed Batch 43 candidate pool. This batch is planning-only.

Tasks:

- Re-read the Batch 43 accepted/held candidate decisions and the Batch 44, 48, 52, 56, and 60 slice plans so already promoted rows are not repeated.
- Recompute current coverage from the canonical `442`-word pack.
- Choose a small quality-gated slice of about `12` to `15` words where the candidates are concrete, child-safe, imageable, and useful for requested coverage.
- Re-check current source evidence for any borrowed, rare-letter, or potentially ambiguous Romanian forms before planning them.
- Preserve existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.
- For every planned row, record canonical file, stable ID, image path, normalized form, category, difficulty, source check, metadata notes, image brief direction, and expected target coverage impact.
- Do not add production JSON records, image assets, placeholders, route/schema changes, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.
- Update `docs/app-development-program/features/romanian-content-expansion/status.md`, `docs/status.md`, and `docs/next-image-batch-prompt.md`.
- Provide the Batch 65 ready-to-copy prompt for image briefs and one contact sheet.

Run:

git diff --check
```
