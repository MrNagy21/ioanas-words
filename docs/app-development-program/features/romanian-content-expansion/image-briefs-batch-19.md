# Batch 19 Image Briefs: GE/GI/GHE/GHI Placeholder Replacement Slice

Batch: Romanian Content Expansion Batch 19, Placeholder Image Replacement Slice 4.

Spec date: 2026-05-17.

Status: Implemented fourth image-replacement slice. Corrected on 2026-05-26: the incorrect `ro-g-ghiuveta` / `ghiuvetă` record and asset were replaced by `ro-g-ghimbir` / `ghimbir`; the correct `ro-c-chiuveta` / `chiuvetă` record remains in the `C` / `CHI` pool.

## Scope

This slice replaced 12 placeholder-backed words that clear the remaining `GE`, `GI`, `GHE`, and `GHI` practice-target placeholders.

| Word ID | Word | Target value | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-a-alge` | `alge` | final `GE` spelling | Simple green seaweed/algae fronds, no underwater scene clutter. | accepted |
| `ro-f-fulger` | `fulger` | final `GE` spelling | Friendly yellow lightning bolt, no storm scene or danger. | accepted |
| `ro-m-margele` | `mărgele` | final `GE` spelling | Small colorful toy beads, no text or brand marks. | accepted |
| `ro-f-frigider` | `frigider` | medial `GI` spelling | Simple refrigerator, no brand, magnets, or written labels. | accepted |
| `ro-p-pagina` | `pagină` | medial `GI` spelling | One clean blank notebook page, no visible writing. | accepted |
| `ro-r-regina` | `regină` | medial `GI` spelling | Friendly generic queen bust with crown, not a specific character. | accepted |
| `ro-i-circ-inghetata` | `înghețată` | medial `GHE` spelling | Simple ice cream cone with scoops, no logo or wrapper text. | accepted |
| `ro-l-lighean` | `lighean` | medial `GHE` spelling | Simple household plastic wash basin/tub. | accepted |
| `ro-s-spaghete` | `spaghete` | medial `GHE` spelling | Plain plate of spaghetti, no restaurant branding. | accepted |
| `ro-g-ghirlanda` | `ghirlandă` | initial `GHI` | Small colorful garland, no letters or written flags. | accepted |
| `ro-g-ghimbir` | `ghimbir` | initial `GHI` | One fresh ginger root, warm tan skin with pale cut ends, no packaging or kitchen scene. | accepted as 2026-05-26 correction |
| `ro-u-unghie` | `unghie` | medial/final `GHI` spelling | Neutral clean fingernail icon, no injury or medical scene. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The original accepted source was a 4-by-3 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, background-normalized to the warm pack background, palette-reduced to 48 colors, staged as reviewed source PNGs under ignored `assets/image-sources/ro/<letter>/` paths, and optimized through the existing local image optimizer.

The 2026-05-26 `ghimbir` correction used a one-off built-in image generation with the same pack style target, then refined the result through a `128 px` pixel-art grid and optimized it as a `256 x 256 px` lossless WebP asset.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- no injury, frightening pose, or medical scene for `unghie`;
- no written marks on `pagină`, `frigider`, or `ghirlandă`;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/a/ro-a-alge.webp
public/images/ro/f/ro-f-frigider.webp
public/images/ro/f/ro-f-fulger.webp
public/images/ro/g/ro-g-ghimbir.webp
public/images/ro/g/ro-g-ghirlanda.webp
public/images/ro/l/ro-l-lighean.webp
public/images/ro/m/ro-m-margele.webp
public/images/ro/p/ro-p-pagina.webp
public/images/ro/r/ro-r-regina.webp
public/images/ro/s/ro-s-spaghete.webp
public/images/ro/u/ro-u-unghie.webp
public/images/ro/î/ro-i-circ-inghetata.webp
```

Source PNGs were staged under ignored `assets/image-sources/ro/<letter>/` paths from the accepted contact sheet.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `319`.
- Ready images: `122 -> 134`.
- Placeholder images: `197 -> 185`.
- `GE` practice target ready-image coverage improves to `10 / 0` ready/placeholder.
- `GI` practice target ready-image coverage improves to `4 / 0` ready/placeholder.
- `GHE` practice target ready-image coverage improves to `8 / 0` ready/placeholder.
- `GHI` practice target ready-image coverage improves to `8 / 0` ready/placeholder.
