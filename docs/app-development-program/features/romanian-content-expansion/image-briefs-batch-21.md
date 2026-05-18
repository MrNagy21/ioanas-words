# Batch 21 Image Briefs: General Placeholder Replacement Slice 6

Batch: Romanian Content Expansion Batch 21, General Placeholder Image Replacement Slice 6.

Spec date: 2026-05-17.

Status: Implemented sixth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed `B` records that are common, concrete, visually straightforward, and high-value for child-facing gameplay. All eight sequence practice targets already had `0` placeholders before this slice and were not changed.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-b-balon` | `balon` | toy | One simple colorful party balloon with a tied end and short string, no text or logo. | accepted |
| `ro-b-banana` | `banană` | food | One ripe yellow banana, no produce sticker or label. | accepted |
| `ro-b-barca` | `barcă` | vehicle | One small friendly rowboat, simple side view, no people or scene clutter. | accepted |
| `ro-b-bec` | `bec` | household | One classic light bulb with a glass bulb and base, no letters or glow-heavy effect. | accepted |
| `ro-b-biscuit` | `biscuit` | food | One round cookie or biscuit with a few chips, no face or packaging. | accepted |
| `ro-b-broasca` | `broască` | animal | One friendly green frog, clearly frog rather than lock. | accepted |
| `ro-b-branza` | `brânză` | food | One simple yellow cheese wedge with a few holes, no brand or wrapper. | accepted |
| `ro-b-bat` | `băț` | nature | One simple wooden stick or twig, no weapon framing. | accepted |
| `ro-b-buburuza` | `buburuză` | animal | One red ladybug with black spots. | accepted |
| `ro-b-bagaj` | `bagaj` | household | One simple travel suitcase, no logo, text, or airport scene. | accepted |
| `ro-b-barza` | `barză` | animal | One white stork with long legs and orange beak, neutral standing pose. | accepted |
| `ro-b-buzunar` | `buzunar` | clothing | One plain blue fabric pocket patch, no clothing brand or text. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 4-by-3 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, background-normalized to the warm pack background, palette-reduced to 64 colors, staged as reviewed source PNGs under ignored `assets/image-sources/ro/b/` paths, and optimized to final lossless WebP assets with local `cwebp`.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- `broască` is clearly a frog, not a lock;
- `băț` is framed as a simple natural twig, not a weapon;
- `barză` remains readable against the warm background;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/b/ro-b-bagaj.webp
public/images/ro/b/ro-b-balon.webp
public/images/ro/b/ro-b-banana.webp
public/images/ro/b/ro-b-barca.webp
public/images/ro/b/ro-b-barza.webp
public/images/ro/b/ro-b-bat.webp
public/images/ro/b/ro-b-bec.webp
public/images/ro/b/ro-b-biscuit.webp
public/images/ro/b/ro-b-branza.webp
public/images/ro/b/ro-b-broasca.webp
public/images/ro/b/ro-b-buburuza.webp
public/images/ro/b/ro-b-buzunar.webp
```

Source PNGs were staged under ignored `assets/image-sources/ro/b/` paths from the accepted contact sheet.

The package optimizer command remains affected by the known local Sharp macOS code-signature issue when run through the repo-local Node runtime, so final image processing used the bundled Codex Node runtime for Sharp-based cropping/background normalization and local `cwebp` for lossless WebP output.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `319`.
- Ready images: `142 -> 154`.
- Placeholder images: `177 -> 165`.
- `B` mixed-pool image readiness improves from `11` ready / `26` placeholder to `23` ready / `14` placeholder.
- `CE`, `CI`, `GE`, `GI`, `CHE`, `CHI`, `GHE`, and `GHI` practice targets remain at `0` placeholders.
