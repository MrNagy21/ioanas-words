# Batch 24 Image Briefs: General Placeholder Replacement Slice 7

Batch: Romanian Content Expansion Batch 24, General Placeholder Image Replacement Slice 7.

Spec date: 2026-05-18.

Status: Implemented seventh image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records from Batch 23 only. The selected words prioritize newly added high-value sequence targets and exact-`Î` starts-with records where the final image concept is clear in a small wheel slot.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-c-centura` | `centură` | clothing | One child-friendly clothing belt with a visible buckle, no brand or text. | accepted |
| `ro-c-covrigi` | `covrigi` | food | A small pile of two or three golden looped pretzels, no package or label. | accepted |
| `ro-c-chiuveta` | `chiuvetă` | household | One clean sink basin with faucet, no clutter or room scene. | accepted |
| `ro-g-geamantan` | `geamantan` | household | One friendly travel suitcase with handle, no logo or text tag. | accepted |
| `ro-g-gelatina` | `gelatină` | food | One colorful jelly dessert on a plain base, no package or brand. | accepted |
| `ro-f-franghie` | `frânghie` | toy | One soft coiled rope, no unsafe scene. | accepted |
| `ro-t-triunghi` | `triunghi` | school | One solid colorful triangle classroom shape, no letters or ruler marks. | accepted |
| `ro-d-dreptunghi` | `dreptunghi` | school | One solid colorful rectangle classroom shape, no letters or ruler marks. | accepted |
| `ro-i-circ-inot` | `înot` | people | Safe swimming icon with a smiling child-like swimmer above calm water, no danger scene. | accepted |
| `ro-i-circ-incaltaminte` | `încălțăminte` | clothing | A small group of footwear with shoes and boots, no brand. | accepted |
| `ro-i-circ-imbracaminte` | `îmbrăcăminte` | clothing | A neat stack of folded shirt and pants, no logo. | accepted |
| `ro-i-circ-incuietoare` | `încuietoare` | household | One simple door lock or latch hardware piece, no key-brand text. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 4-by-3 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, background-normalized to the warm pack background, palette-reduced to 64 colors, staged as reviewed source PNGs under ignored `assets/image-sources/ro/<letter>/` paths, and optimized to final lossless WebP assets with local `cwebp`.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- shape images for `triunghi` and `dreptunghi` contain no written marks;
- `înot` is calm and non-dangerous;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/c/ro-c-centura.webp
public/images/ro/c/ro-c-covrigi.webp
public/images/ro/c/ro-c-chiuveta.webp
public/images/ro/g/ro-g-geamantan.webp
public/images/ro/g/ro-g-gelatina.webp
public/images/ro/f/ro-f-franghie.webp
public/images/ro/t/ro-t-triunghi.webp
public/images/ro/d/ro-d-dreptunghi.webp
public/images/ro/î/ro-i-circ-inot.webp
public/images/ro/î/ro-i-circ-incaltaminte.webp
public/images/ro/î/ro-i-circ-imbracaminte.webp
public/images/ro/î/ro-i-circ-incuietoare.webp
```

Source PNGs were staged under ignored `assets/image-sources/ro/<letter>/` paths from the accepted contact sheet.

The package optimizer command remains affected by the known local Sharp macOS code-signature issue when run through the repo-local Node runtime, so final image processing used the bundled Codex Node runtime for Sharp-based cropping/background normalization and local `cwebp` for lossless WebP output.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `154 -> 166`.
- Placeholder images: `216 -> 204`.
- Exact `Î` mixed-pool image readiness improves from `1` ready / `7` placeholder to `5` ready / `3` placeholder.
- Sequence target image readiness improves for:
  - `CE`: `14` ready / `2` placeholder -> `15` ready / `1` placeholder;
  - `GE`: `10` ready / `5` placeholder -> `12` ready / `3` placeholder;
  - `GI`: `4` ready / `11` placeholder -> `5` ready / `10` placeholder;
  - `CHI`: `9` ready / `6` placeholder -> `10` ready / `5` placeholder;
  - `GHI`: `8` ready / `7` placeholder -> `11` ready / `4` placeholder.
