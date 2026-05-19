# Batch 38 Image Generation And Corrective Regeneration

Batch: Romanian Content Expansion Batch 38.

Spec date: 2026-05-19.

Status: Complete.

## Scope

Batch 38 implemented only the image work explicitly approved in Batch 37:

- `20` approved placeholder replacements;
- `5` approved corrective regenerations for already-ready assets.

No vocabulary, `Ă`/`Â` buckets, route/schema changes, speech-target production metadata, admin editing, auth, database, billing, accounts, AI pronunciation, or clinical claims were added.

`ghicitoare`, `miez`, and `stinghie` remain `rejected` and were not given new assets. The spoken `Capea` / `Kapia` note remains unresolved because no current production word ID matches it.

## Review Artifacts

Generated sources were staged under ignored local source folders:

- `assets/image-sources/batch-38/ro/...`
- `assets/image-sources/batch-38-final/ro/...`

Review sheets were created locally before promotion:

- `assets/image-sources/ro/batch-38/contact-sheet.png`
- `assets/image-sources/ro/batch-38/brand-comparison.png`
- `assets/image-sources/ro/batch-38/final-contact-sheet.png`

The brand-comparison sheet placed the Batch 38 candidates beside the on-brand reference set from `docs/image-pipeline.md`. The accepted final assets are recognizable, child-safe, text-free, logo-free, brand-free, and close to the established polished pixel-art game-icon style. The generated sources were post-processed into a lower-color, sharper pixel-art form before final WebP optimization so every final file stayed comfortably below the `20 KB` hard maximum.

## Accepted Assets

| Word ID | Word | Type | Public path | Size | Dimensions | Review |
| --- | --- | --- | --- | ---: | --- | --- |
| `ro-b-bebelus` | bebeluș | placeholder replacement | `/images/ro/b/ro-b-bebelus.webp` | 1940 B | 256 x 256 | Accepted |
| `ro-b-bunic` | bunic | placeholder replacement | `/images/ro/b/ro-b-bunic.webp` | 2778 B | 256 x 256 | Accepted |
| `ro-b-bunica` | bunică | placeholder replacement | `/images/ro/b/ro-b-bunica.webp` | 2748 B | 256 x 256 | Accepted |
| `ro-b-baietel` | băiețel | placeholder replacement | `/images/ro/b/ro-b-baietel.webp` | 1498 B | 256 x 256 | Accepted |
| `ro-e-echipa` | echipă | placeholder replacement | `/images/ro/e/ro-e-echipa.webp` | 2738 B | 256 x 256 | Accepted |
| `ro-f-fetita` | fetiță | placeholder replacement | `/images/ro/f/ro-f-fetita.webp` | 2724 B | 256 x 256 | Accepted |
| `ro-f-frizura` | frizură | placeholder replacement | `/images/ro/f/ro-f-frizura.webp` | 2270 B | 256 x 256 | Accepted |
| `ro-g-gemeni` | gemeni | placeholder replacement | `/images/ro/g/ro-g-gemeni.webp` | 2418 B | 256 x 256 | Accepted |
| `ro-g-gimnast` | gimnast | placeholder replacement | `/images/ro/g/ro-g-gimnast.webp` | 1394 B | 256 x 256 | Accepted |
| `ro-t-tata` | tata | placeholder replacement | `/images/ro/t/ro-t-tata.webp` | 2380 B | 256 x 256 | Accepted |
| `ro-i-circ-imbratisare` | îmbrățișare | placeholder replacement | `/images/ro/î/ro-i-circ-imbratisare.webp` | 2358 B | 256 x 256 | Accepted |
| `ro-g-gigant` | gigant | placeholder replacement | `/images/ro/g/ro-g-gigant.webp` | 2538 B | 256 x 256 | Accepted |
| `ro-m-magie` | magie | placeholder replacement | `/images/ro/m/ro-m-magie.webp` | 1446 B | 256 x 256 | Accepted |
| `ro-m-magician` | magician | placeholder replacement | `/images/ro/m/ro-m-magician.webp` | 2442 B | 256 x 256 | Accepted |
| `ro-u-unicorn` | unicorn | placeholder replacement | `/images/ro/u/ro-u-unicorn.webp` | 2146 B | 256 x 256 | Accepted |
| `ro-z-zana` | zână | placeholder replacement | `/images/ro/z/ro-z-zana.webp` | 2076 B | 256 x 256 | Accepted |
| `ro-i-circ-imparat` | împărat | placeholder replacement | `/images/ro/î/ro-i-circ-imparat.webp` | 2156 B | 256 x 256 | Accepted |
| `ro-z-zmeu` | zmeu | placeholder replacement | `/images/ro/z/ro-z-zmeu.webp` | 2456 B | 256 x 256 | Accepted |
| `ro-g-gimnastica` | gimnastică | placeholder replacement | `/images/ro/g/ro-g-gimnastica.webp` | 2062 B | 256 x 256 | Accepted |
| `ro-p-plus` | pluș | placeholder replacement | `/images/ro/p/ro-p-plus.webp` | 2298 B | 256 x 256 | Accepted |
| `ro-r-robinet` | robinet | corrective regeneration | `/images/ro/r/ro-r-robinet.webp` | 2638 B | 256 x 256 | Accepted |
| `ro-a-aripa` | aripă | corrective regeneration | `/images/ro/a/ro-a-aripa.webp` | 2912 B | 256 x 256 | Accepted |
| `ro-c-coaja` | coajă | corrective regeneration | `/images/ro/c/ro-c-coaja.webp` | 2346 B | 256 x 256 | Accepted |
| `ro-e-esarfa` | eșarfă | corrective regeneration | `/images/ro/e/ro-e-esarfa.webp` | 4296 B | 256 x 256 | Accepted |
| `ro-g-girafa` | girafă | corrective regeneration | `/images/ro/g/ro-g-girafa.webp` | 1924 B | 256 x 256 | Accepted |

## Content Impact

All `20` approved placeholder-backed records were promoted to canonical ready image paths with app-owned licensing and concrete alt text. The `5` corrective records stayed approved and ready, with regenerated final assets replacing the earlier weaker files.

Production Romanian content after Batch 38:

- Approved words: `367`.
- Ready images: `367`.
- Approved placeholders: `0`.

Exact `Ă` and `Â` remain disabled/convention-only. No production record exists for the spoken `Capea` / `Kapia` note, so no asset was created for it.
