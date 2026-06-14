# Batch 58 Production Promotion: Fourth Batch 43 Queue

Batch: Romanian Content Expansion Batch 58.

Status: complete; human-approved Batch 57 cells promoted.

Last updated: 2026-06-12.

## Scope

The human reviewed the Batch 57 contact sheets and approved promotion with the instruction: "perfect go on".

Batch 58 promoted the accepted cells from:

- `assets/image-sources/ro/batch-57/contact-sheet.png`
- `assets/image-sources/ro/batch-57/corrective-contact-sheet-1.png`

The corrective sheet was used for `dormitor`, `brățară`, `sticlă`, and `vișine`. The first sheet was used for the other accepted cells.

No rejected or unclear cells were promoted.

## Promoted Rows

Promoted in final row-major vocabulary order:

1. `biberon`
2. `borcan`
3. `burete`
4. `brad`
5. `bluză`
6. `bancă`
7. `dormitor`
8. `periuță`
9. `brățară`
10. `sticlă`
11. `șină`
12. `vierme`
13. `vișine`
14. `papuci`
15. `lădiță`

Production JSON rows were added only to existing canonical manifests:

- `content/ro/words-b.json`
- `content/ro/words-d.json`
- `content/ro/words-p.json`
- `content/ro/words-s.json`
- `content/ro/words-ș.json`
- `content/ro/words-v.json`
- `content/ro/words-l.json`

No new letter manifests, route aliases, loader imports, schema fields, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims were added.

## Image Processing

The accepted contact-sheet cells were cropped from the correct source sheet, padded for circular display, palette-limited through a refined pixel-art workflow, and saved as `256 x 256 px` lossless WebP files.

QA artifacts:

- `assets/image-sources/ro/batch-57/final-preview.png`
- `assets/image-sources/ro/batch-57/circular-preview.png`
- `assets/image-sources/ro/batch-57/circular-preview-padded.png`
- `assets/image-sources/ro/batch-57/staged-sources/`

Circular-mask QA confirmed the padded final compositions remain usable in circular wheel slots. The wide `bancă`, detailed `dormitor`, diagonal `periuță`, wrist-based `brățară`, diagonal `șină`, and grouped `vișine` were kept inside the circular safe area with transparent padding.

The first final WebP pass exceeded the `20 KB` hard maximum because the images were more detailed than recent slices. The final accepted assets were regenerated with palette-limited lossless WebP output, keeping every asset below the `12 KB` warning threshold.

## Final Assets

All Batch 58 public WebP assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum:

| Asset | Size |
| --- | ---: |
| `public/images/ro/b/ro-b-biberon.webp` | `2482 B` |
| `public/images/ro/b/ro-b-borcan.webp` | `4374 B` |
| `public/images/ro/b/ro-b-burete.webp` | `6058 B` |
| `public/images/ro/b/ro-b-brad.webp` | `4858 B` |
| `public/images/ro/b/ro-b-bluza.webp` | `7906 B` |
| `public/images/ro/b/ro-b-banca.webp` | `3734 B` |
| `public/images/ro/d/ro-d-dormitor.webp` | `6280 B` |
| `public/images/ro/p/ro-p-periuta.webp` | `2850 B` |
| `public/images/ro/b/ro-b-bratara.webp` | `3744 B` |
| `public/images/ro/s/ro-s-sticla.webp` | `7038 B` |
| `public/images/ro/ș/ro-sh-sina.webp` | `5776 B` |
| `public/images/ro/v/ro-v-vierme.webp` | `4958 B` |
| `public/images/ro/v/ro-v-visine.webp` | `5530 B` |
| `public/images/ro/p/ro-p-papuci.webp` | `5536 B` |
| `public/images/ro/l/ro-l-ladita.webp` | `5742 B` |

## Content Totals

Post-Batch-58 canonical totals from `content/ro/*.json`:

- total Romanian records: `430`;
- approved words: `427`;
- ready images: `427`;
- approved placeholders: `0`;
- rejected audit-trail rows: `3`.

Rejected rows remain:

- `ro-g-ghicitoare`;
- `ro-m-miez`;
- `ro-s-stinghie`.

## Coverage Impact

Requested-target coverage after Batch 58:

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

Content-derived gameplay compatibility fixtures were updated because `papuci` increases the `CI` mixed practice-target pool from `19` to `20`.

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

## Browser QA

`http://localhost:3000/ro` was unavailable both inside and outside the sandbox earlier on 2026-06-12. No alternate dev server or port was started.

Follow-up on 2026-06-12: after the human started the expected dev server on port `3000`, the sandboxed check still failed, but outside-sandbox checks passed.

Browser QA follow-up passed for:

- `/ro`;
- `/admin/words`;
- `/ro/play/b`;
- `/ro/play/d`;
- `/ro/play/p`;
- `/ro/play/s`;
- `/ro/play/sh`;
- `/ro/play/v`;
- `/ro/play/l`;
- representative Batch 58 image asset URLs.

## Batch 59 Ready-To-Copy Prompt

```txt
You are continuing Word Wheel Romanian content expansion after Batch 58.

Read first:

1. AGENTS.md
2. docs/agent-brief.md
3. docs/spec.md
4. docs/image-pipeline.md
5. docs/app-development-program/features/romanian-content-expansion/production-slice-planning-batch-56.md
6. docs/app-development-program/features/romanian-content-expansion/image-briefs-batch-57.md
7. docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-58.md
8. docs/app-development-program/features/romanian-content-expansion/status.md
9. docs/status.md

Goal:

Execute Batch 59: slice coverage QA and next-prompt preparation after the Batch 58 production promotion. Do not add production words, image assets, route/schema changes, placeholders, speech-target production metadata, database/auth/billing/admin features, AI pronunciation, or clinical claims.

Tasks:

- Recompute canonical totals from `content/ro/*.json`.
- Confirm Batch 58 assets exist, are `256 x 256 px`, and stay below the size thresholds.
- Confirm only the three rejected audit-trail rows remain placeholder-backed.
- Confirm no production `webcam` or `yak` row exists; `cameră web` remains in `C`; `iac` remains in `I`.
- Recompute requested-target coverage for `Ă`, `Â`, `K`, `Q`, `W`, `X`, `Y`, `CE`, `CI`, `GE`, `GI`, `GHE`, `GHI`, `CHE`, `CHI`, `L`, `R`, `S`, `Ș`, `T`, `Ț`, `V`, `B`, `D`, and `J`.
- Verify representative local routes on `http://localhost:3000` only if the expected dev server is running on port `3000`; retry outside the sandbox before marking it unavailable, and do not start a new server or use another port.
- Run `pnpm run validate:content`, `pnpm run lint`, `pnpm exec tsc --noEmit --incremental false`, `pnpm run check:gameplay`, `pnpm run check:matching`, and `git diff --check`.
- Update the feature status, global docs/status.md, and docs/next-image-batch-prompt.md with the QA result and the next approved batch.

Next-step decision:

- If continuing content expansion, choose whether the next step should be another planning batch from the remaining Batch 43 candidate pool or final requested-expansion QA.
- Preserve existing decisions: do not force `Ă` or `Â` starts-with rows, do not pad `Q`, `W`, or `Y` with obscure words, keep `cameră web` in `C`, keep `iac` in `I`, and do not reintroduce `webcam` or `yak` without explicit human decision.
```
