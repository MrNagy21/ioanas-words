# Batch 62 Production Promotion: Fifth Batch 43 Queue

Batch: Romanian Content Expansion Batch 62.

Status: complete; human-approved Batch 61 cells promoted.

Last updated: 2026-06-12.

## Scope

The human reviewed the Batch 61 contact sheets and approved promotion with the instruction that all first-sheet images were fine except `gălușcă`, and then accepted any of the second spoon-based `gălușcă` corrective options.

Batch 62 promoted the accepted cells from:

- `assets/image-sources/ro/batch-61/contact-sheet.png`
- `assets/image-sources/ro/batch-61/corrective-contact-sheet-1.png`

The first sheet was used for all accepted cells except `gălușcă`. The third corrective spoon-based `gălușcă` option was used for `gălușcă`.

No rejected or unclear cells were promoted.

## Promoted Rows

Promoted in final row-major vocabulary order:

1. `locomotivă`
2. `sac`
3. `soră`
4. `gălușcă`
5. `fundiță`
6. `punguță`
7. `covor`
8. `cravată`
9. `lavetă`
10. `porumbel`
11. `roabă`
12. `cabană`
13. `pădure`
14. `medalie`
15. `bomboană`

Production JSON rows were added only to existing canonical manifests:

- `content/ro/words-l.json`
- `content/ro/words-s.json`
- `content/ro/words-g.json`
- `content/ro/words-f.json`
- `content/ro/words-p.json`
- `content/ro/words-c.json`
- `content/ro/words-r.json`
- `content/ro/words-m.json`
- `content/ro/words-b.json`

No new letter manifests, route aliases, loader imports, schema fields, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added.

## Image Processing

The accepted contact-sheet cells were cropped from the correct source sheet, padded for circular display, palette-limited through a refined `128 px` pixel-art workflow, nearest-upscaled to `256 x 256 px`, and saved as lossless WebP files.

QA artifacts:

- `assets/image-sources/ro/batch-61/final-preview.png`
- `assets/image-sources/ro/batch-61/circular-preview.png`
- `assets/image-sources/ro/batch-61/staged-sources/`

Circular-mask QA confirmed the padded final compositions remain usable in circular wheel slots. The wide `locomotivă`, diagonal `covor`, scene-like `cabană` and `pădure`, and spoon-based `gălușcă` remain inside the circular safe area.

## Final Assets

All Batch 62 public WebP assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum:

| Asset | Size |
| --- | ---: |
| `public/images/ro/l/ro-l-locomotiva.webp` | `2358 B` |
| `public/images/ro/s/ro-s-sac.webp` | `2146 B` |
| `public/images/ro/s/ro-s-sora.webp` | `1904 B` |
| `public/images/ro/g/ro-g-galusca.webp` | `1690 B` |
| `public/images/ro/f/ro-f-fundita.webp` | `2092 B` |
| `public/images/ro/p/ro-p-punguta.webp` | `1914 B` |
| `public/images/ro/c/ro-c-covor.webp` | `2216 B` |
| `public/images/ro/c/ro-c-cravata.webp` | `1304 B` |
| `public/images/ro/l/ro-l-laveta.webp` | `2532 B` |
| `public/images/ro/p/ro-p-porumbel.webp` | `1832 B` |
| `public/images/ro/r/ro-r-roaba.webp` | `1688 B` |
| `public/images/ro/c/ro-c-cabana.webp` | `2508 B` |
| `public/images/ro/p/ro-p-padure.webp` | `2898 B` |
| `public/images/ro/m/ro-m-medalie.webp` | `1690 B` |
| `public/images/ro/b/ro-b-bomboana.webp` | `1580 B` |

## Content Totals

Post-Batch-62 canonical totals from `content/ro/*.json`:

- total Romanian records: `445`;
- approved words: `442`;
- ready images: `442`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3`.

Rejected rows remain:

- `ro-g-ghicitoare`;
- `ro-m-miez`;
- `ro-s-stinghie`.

## Coverage Impact

Requested-target coverage after Batch 62:

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

Content-derived fixture updates:

- `fundiță` increases the F starts-with pool that remains after excluding exact `R`, so matching and setup-storage fixture counts changed from `6` to `7`.
- `V` contains-only is no longer an exact-size `15` pool after the new `V` contains additions. The exact-size visible-subset reset-regression fixture now uses the stable `GE` mixed pool, while the large-pool `S` and `Ș` fixtures remain unchanged.

## Verification

Passed on 2026-06-12:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run build
```

`pnpm run validate:content` reported known pre-existing warning-threshold image notices only; none of the Batch 62 assets exceeded the warning threshold.

## Browser QA

The sandboxed localhost check failed to connect to `http://localhost:3000`, then the required outside-sandbox retry passed against the expected user-running dev server on port `3000`.

Outside-sandbox checks returned `200` for:

- `/ro`;
- `/admin/words`;
- `/ro/play/l`;
- `/ro/play/s`;
- `/ro/play/g`;
- `/ro/play/f`;
- `/ro/play/p`;
- `/ro/play/c`;
- `/ro/play/r`;
- `/ro/play/m`;
- `/ro/play/b`;
- representative Batch 62 image asset URLs.

## Batch 63 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 62.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-60.md
6. docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-61.md
7. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-62.md
8. docs/app-development-program/features/romanian-content-expansion/status.md
9. docs/status.md

Goal:

Execute Batch 63: slice coverage QA and next-prompt preparation after the Batch 62 production promotion. Do not add production words, image assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Tasks:

- Recompute canonical totals from `content/ro/*.json`.
- Confirm Batch 62 assets exist, are `256 x 256 px`, and stay below the size thresholds.
- Confirm only the three rejected audit-trail rows remain placeholder-backed.
- Confirm no production `webcam` or `yak` row exists; `cameră web` remains in `C`; `iac` remains in `I`.
- Recompute requested-target coverage for `Ă`, `Â`, `K`, `Q`, `W`, `X`, `Y`, `CE`, `CI`, `GE`, `GI`, `GHE`, `GHI`, `CHE`, `CHI`, `L`, `R`, `S`, `Ș`, `T`, `Ț`, `V`, `B`, `D`, and `J`.
- Verify representative local routes on `http://localhost:3000` only if the expected dev server is running on port `3000`; retry outside the sandbox before marking it unavailable, and do not start a new server or use another port.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, `pnpm run build`, and `git diff --check`.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with the QA result and the next approved batch.

Next-step decision:

- If continuing content expansion, choose whether the next step should be another planning batch from the remaining Batch 43 candidate pool or final requested-expansion QA.
- Preserve existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.
```
