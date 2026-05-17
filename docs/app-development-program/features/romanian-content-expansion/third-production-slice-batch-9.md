# Romanian Content Expansion Batch 9 Planning

Batch: Third Production Slice Planning.

Date: 2026-05-17.

## Scope

This batch plans a third Romanian production slice from the remaining accepted Batch 2 worksheet rows that are not yet implemented.

No production JSON records or image assets are added in this batch.

## Source Rows

Selection rule: only accepted rows from `candidate-review-worksheet-batch-2.md` are eligible. Rejected and needs-revision rows stay out.

Starting set requested for Batch 9:

```txt
rochie, rachetă, iepure, scaun, nas, urs, coș, cămașă, dinți, cățel, pijama
```

All 11 rows are accepted worksheet candidates. Each was checked against current approved Romanian JSON by planned ID, exact `word`, and `normalized` value on 2026-05-17; no approved duplicate was found.

## Planned Third Production Slice

Proposed slice size: `11` words. This is within the image pipeline's normal batch size of `10` to `25` images.

These words remain in planning until the next batch creates image briefs, produces and reviews images, optimizes final WebP assets, and promotes canonical JSON records only after readiness validation.

| Worksheet row | Word | Duplicate check in approved JSON | Canonical file | Proposed ID | Canonical image path | Category | Alt text direction | Image-readiness path |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | `rochie` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-r.json` | `ro-r-rochie` | `/images/ro/r/ro-r-rochie.webp` | clothing | `O rochie`; show one clear child-friendly dress. | Brief -> reviewed source `assets/image-sources/ro/r/ro-r-rochie.png` -> optimized `public/images/ro/r/ro-r-rochie.webp` -> ready only after review. |
| 5 | `rachetă` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-r.json` | `ro-r-racheta` | `/images/ro/r/ro-r-racheta.webp` | toy | `O rachetă de jucărie`; show a friendly toy rocket, not a realistic weapon or launch scene. | Brief -> reviewed source `assets/image-sources/ro/r/ro-r-racheta.png` -> optimized `public/images/ro/r/ro-r-racheta.webp` -> ready only after review. |
| 8 | `iepure` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-i.json` | `ro-i-iepure` | `/images/ro/i/ro-i-iepure.webp` | animal | `Un iepure`; show one friendly rabbit. | Brief -> reviewed source `assets/image-sources/ro/i/ro-i-iepure.png` -> optimized `public/images/ro/i/ro-i-iepure.webp` -> ready only after review. |
| 18 | `scaun` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-s.json` | `ro-s-scaun` | `/images/ro/s/ro-s-scaun.webp` | household | `Un scaun`; show one simple chair. | Brief -> reviewed source `assets/image-sources/ro/s/ro-s-scaun.png` -> optimized `public/images/ro/s/ro-s-scaun.webp` -> ready only after review. |
| 20 | `nas` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-n.json` | `ro-n-nas` | `/images/ro/n/ro-n-nas.webp` | body | `Un nas`; show a neutral friendly face/nose crop without medical framing. | Brief -> reviewed source `assets/image-sources/ro/n/ro-n-nas.png` -> optimized `public/images/ro/n/ro-n-nas.webp` -> ready only after review. |
| 21 | `urs` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-u.json` | `ro-u-urs` | `/images/ro/u/ro-u-urs.webp` | animal | `Un urs prietenos`; show a friendly bear, not scary. | Brief -> reviewed source `assets/image-sources/ro/u/ro-u-urs.png` -> optimized `public/images/ro/u/ro-u-urs.webp` -> ready only after review. |
| 31 | `coș` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-c.json` | `ro-c-cos` | `/images/ro/c/ro-c-cos.webp` | household | `Un coș`; show a simple basket, not trash. | Brief -> reviewed source `assets/image-sources/ro/c/ro-c-cos.png` -> optimized `public/images/ro/c/ro-c-cos.webp` -> ready only after review. |
| 32 | `cămașă` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-c.json` | `ro-c-camasa` | `/images/ro/c/ro-c-camasa.webp` | clothing | `O cămașă`; show one shirt with clear sleeves/collar. | Brief -> reviewed source `assets/image-sources/ro/c/ro-c-camasa.png` -> optimized `public/images/ro/c/ro-c-camasa.webp` -> ready only after review. |
| 43 | `dinți` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-d.json` | `ro-d-dinti` | `/images/ro/d/ro-d-dinti.webp` | body | `Dinți`; show clean friendly teeth or a simple smile, not a dental procedure. | Brief -> reviewed source `assets/image-sources/ro/d/ro-d-dinti.png` -> optimized `public/images/ro/d/ro-d-dinti.webp` -> ready only after review. |
| 44 | `cățel` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-c.json` | `ro-c-catel` | `/images/ro/c/ro-c-catel.webp` | animal | `Un cățel`; show one friendly puppy, visually distinct from existing `câine`. | Brief -> reviewed source `assets/image-sources/ro/c/ro-c-catel.png` -> optimized `public/images/ro/c/ro-c-catel.webp` -> ready only after review. |
| 56 | `pijama` | Not duplicated by ID, exact word, or normalized value. | `content/ro/words-p.json` | `ro-p-pijama` | `/images/ro/p/ro-p-pijama.webp` | clothing | `O pijama`; show a folded or hanging pajama set, no text or character branding. | Brief -> reviewed source `assets/image-sources/ro/p/ro-p-pijama.png` -> optimized `public/images/ro/p/ro-p-pijama.webp` -> ready only after review. |

## Expected Coverage Impact

Using the current 72 approved Romanian words as the baseline and the 11 planned rows as hypothetical approved records:

| Target | Current starts/contains/mixed | Planned starts/contains/mixed |
| --- | ---: | ---: |
| `R` | `3 / 22 / 25` | `5 / 24 / 29` |
| `I` | `0 / 20 / 20` | `1 / 23 / 24` |
| `S` | `6 / 7 / 13` | `7 / 9 / 16` |
| `N` | `0 / 19 / 19` | `1 / 21 / 22` |
| `U` | `1 / 12 / 13` | `2 / 14 / 16` |
| `C` | `13 / 13 / 26` | `16 / 16 / 32` |
| `D` | `1 / 4 / 5` | `2 / 4 / 6` |
| `P` | `10 / 8 / 18` | `11 / 9 / 20` |
| `Ș` | `3 / 6 / 9` | `3 / 8 / 11` |
| `Ț` | `1 / 4 / 5` | `1 / 6 / 7` |
| `J` | `2 / 0 / 2` | `2 / 1 / 3` |
| `M` | `10 / 2 / 12` | `10 / 4 / 14` |
| `A` | `10 / 30 / 40` | `10 / 35 / 45` |

Expected aggregate impact if all 11 later pass image review and validation:

- Approved words: `72 -> 83`.
- Ready images: `72 -> 83`.
- New canonical starts-with buckets after approval: `I` and `N`.
- Existing buckets strengthened: `C`, `D`, `P`, `R`, `S`, and `U`.
- Contains-only coverage improves for high-value targets including `R`, `S`, `Ș`, `Ț`, and `J`.

Per-word coverage notes:

| Word | Expected starts/contains/mixed impact |
| --- | --- |
| `rochie` | Adds starts-with `R`; adds contains-only `C` and `I`. |
| `rachetă` | Adds starts-with `R`; adds contains-only `A` and `C`. |
| `iepure` | Adds starts-with `I`; adds contains-only `P`, `R`, and `U`. |
| `scaun` | Adds starts-with `S`; adds contains-only `A`, `C`, `N`, and `U`. |
| `nas` | Adds starts-with `N`; adds contains-only `A` and final `S`. |
| `urs` | Adds starts-with `U`; adds contains-only `R` and final `S`. |
| `coș` | Adds starts-with `C`; adds contains-only final `Ș`. |
| `cămașă` | Adds starts-with `C`; adds contains-only `A`, `M`, and medial `Ș`. |
| `dinți` | Adds starts-with `D`; adds contains-only `I`, `N`, and final `Ț`. |
| `cățel` | Adds starts-with `C`; adds contains-only medial `Ț`. |
| `pijama` | Adds starts-with `P`; adds contains-only `A`, `I`, `J`, and `M`. |

## Readiness Path

Next implementation batch should:

1. Add image briefs for the 11 planned words before any JSON promotion.
2. Generate or assign reviewed pixel-art images using `docs/image-pipeline.md`.
3. Optimize final WebP assets to the canonical paths listed above.
4. Add `content/ro/words-i.json` and `content/ro/words-n.json` plus loader imports only when `iepure` and `nas` have ready reviewed images, or use draft-only metadata only with explicit human approval.
5. Add or update canonical word manifests only after the image paths and metadata are clear.
6. Promote to `status: "approved"` and `imageStatus: "ready"` only after human visual review and automated validation.
7. Enable new `I` and `N` letter buckets only when their approved words and images are ready.

Draft-only metadata for this slice should be used only with explicit human approval. The preferred path is image briefs plus ready images before child-facing approval.

## Non-Goals Confirmed

- No production JSON records in Batch 9.
- No image assets in Batch 9.
- No rejected or needs-revision worksheet candidates.
- No placeholder-backed approved words.
- No speech-target metadata in production JSON.
- No admin editing.
- No auth, database, upload, CSV, billing, or accounts.
- No AI pronunciation.
- No medical diagnosis, treatment claims, or visible clinical claims.
- No change to exact Romanian bucket storage or current ASCII public route behavior for `Ș` and `Ț`.
