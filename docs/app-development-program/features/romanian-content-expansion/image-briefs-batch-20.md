# Batch 20 Image Briefs: CE/CI Placeholder Replacement Slice 5

Batch: Romanian Content Expansion Batch 20, Placeholder Image Replacement Slice 5.

Spec date: 2026-05-17.

Status: Implemented fifth image-replacement slice.

## Scope

This slice replaced the remaining `CE` and `CI` practice-target placeholders while preserving `CHE`, `CHI`, `GE`, `GI`, `GHE`, and `GHI` at `0` placeholders.

| Word ID | Word | Target value | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-c-ceara` | `ceară` | initial `CE` | Simple yellow candle wax block or wax drop, no flame, text, or label. | accepted |
| `ro-c-cetate` | `cetate` | initial `CE` | Friendly simple stone fortress/castle wall with towers, no written flags or signs. | accepted |
| `ro-p-purcel` | `purcel` | final `CE` spelling | Cute small generic piglet, no clothing or branded farm context. | accepted |
| `ro-c-caciula` | `căciulă` | medial `CI` spelling | Simple warm winter beanie with pom-pom, no logo or letters. | accepted |
| `ro-c-cizma` | `cizmă` | initial `CI` | One simple rubber boot, no logo or decorative text. | accepted |
| `ro-c-cioc` | `cioc` | initial `CI` | Simple bird beak icon only, not a full bird. | accepted |
| `ro-c-ciucure` | `ciucure` | initial `CI` | One decorative tassel with threads and a small cord, no text. | accepted |
| `ro-r-radacina` | `rădăcină` | medial `CI` spelling | Simple plant roots with a tiny green sprout, no soil-scene clutter. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 4-by-2 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, background-normalized to the warm pack background, palette-reduced to 48 colors, staged as reviewed source PNGs under ignored `assets/image-sources/ro/<letter>/` paths, and optimized to final WebP assets.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- no flame or dangerous scene for `ceară`;
- no written flags, signs, or labels for `cetate`;
- no full-bird confusion for `cioc`;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/c/ro-c-caciula.webp
public/images/ro/c/ro-c-ceara.webp
public/images/ro/c/ro-c-cetate.webp
public/images/ro/c/ro-c-cioc.webp
public/images/ro/c/ro-c-ciucure.webp
public/images/ro/c/ro-c-cizma.webp
public/images/ro/p/ro-p-purcel.webp
public/images/ro/r/ro-r-radacina.webp
```

Source PNGs were staged under ignored `assets/image-sources/ro/<letter>/` paths from the accepted contact sheet.

The package optimizer command failed under `node` in this local environment because Sharp hit the known macOS code-signature loading issue. The same repository optimizer script was then run through Bun, which successfully loaded Sharp and used the existing optimizer settings.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `319`.
- Ready images: `134 -> 142`.
- Placeholder images: `185 -> 177`.
- `CE` practice target ready-image coverage improves to `14 / 0` ready/placeholder.
- `CI` practice target ready-image coverage improves to `14 / 0` ready/placeholder.
- `CHE`, `CHI`, `GE`, `GI`, `GHE`, and `GHI` practice targets remain at `0` placeholders.
