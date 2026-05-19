# Batch 32 Image Briefs: General Placeholder Replacement Slice 15

Batch: Romanian Content Expansion Batch 32, General Placeholder Image Replacement Slice 15.

Spec date: 2026-05-18.

Status: Implemented fifteenth image-replacement slice.

## Scope

This slice replaced existing approved placeholder-backed records only. The selected words prioritize common, concrete, visually clear `N`, `O`, and `P` placeholders whose generated thumbnail concepts were clear enough for wheel and modal use.

| Word ID | Word | Category | Image brief | Review result |
| --- | --- | --- | --- | --- |
| `ro-n-nor` | `nor` | nature | One single fluffy white cloud, no broad sky scene or rain. | accepted |
| `ro-n-nuca` | `nucă` | food | One walnut, cracked open enough to read as a walnut, no bowl or tree. | accepted |
| `ro-n-nasture` | `nasture` | clothing | One large round clothing button with holes, no shirt or sewing scene. | accepted |
| `ro-n-nufar` | `nufăr` | nature | One water lily flower with a lily pad, no broad pond scene. | accepted |
| `ro-o-oaie` | `oaie` | animal | One friendly sheep, non-scary, simple woolly body. | accepted |
| `ro-o-oala` | `oală` | household | One cooking pot with handles and lid, no brand or food scene. | accepted |
| `ro-o-oglinda` | `oglindă` | household | One simple oval standing mirror with a frame, no face or person reflected. | accepted |
| `ro-o-omida` | `omidă` | animal | One friendly green caterpillar, simple segmented body, no scary bug detail. | accepted |
| `ro-o-ou` | `ou` | food | One plain white egg, no nest or chicken. | accepted |
| `ro-o-orez` | `orez` | food | One small bowl of white rice with visible grains, no chopsticks or label. | accepted |
| `ro-p-para` | `pară` | food | One green-yellow pear with a small leaf, no face. | accepted |
| `ro-p-palarie` | `pălărie` | clothing | One simple child-safe brimmed hat, no person or logo. | accepted |
| `ro-p-patura` | `pătură` | household | One folded colorful blanket, no bed or person. | accepted |
| `ro-p-pepene` | `pepene` | food | One watermelon slice with rind and red flesh, no text. | accepted |
| `ro-p-pensula` | `pensulă` | school | One paintbrush with colored bristles, no written label. | accepted |
| `ro-p-penar` | `penar` | school | One simple pencil case with plain pencils, no logos or text. | accepted |
| `ro-p-pieptene` | `pieptene` | household | One comb with teeth clearly visible, no hair or person. | accepted |
| `ro-p-portocala` | `portocală` | food | One orange fruit with a small leaf, no face. | accepted |
| `ro-p-pruna` | `prună` | food | One purple plum with a small leaf, no face. | accepted |
| `ro-p-puzzle` | `puzzle` | toy | A few large interlocking generic puzzle pieces, no letters, numbers, or characters. | accepted |

## Generation And Review

Generation used the established pixel-art pipeline in `docs/image-pipeline.md` with the built-in image generation workflow.

The accepted source was a 5-by-4 contact sheet generated with generous gutters and no labels. Source cells were cropped in the fixed order above, resized to `256 x 256 px`, simplified to a 48-color hard-edged palette, and encoded as final lossless WebP assets with local `cwebp`. This kept every final asset below the `12 KB` warning threshold and the `20 KB` hard maximum while preserving clear silhouettes.

Final review confirmed:

- recognizable at wheel and modal sizes;
- child-safe for ages 4 to 6;
- no text, letters, numbers, logos, watermarks, brands, or copyrighted characters;
- one centered subject per image;
- no person-dependent visuals;
- `oglindă` does not show a face or person reflection;
- `omidă` is friendly and non-scary;
- `puzzle` reads as a generic toy rather than branded character art;
- consistent cheerful pixel-art style;
- optimized `256 x 256 px` WebP assets below the `20 KB` hard maximum.

## Final Assets

Final WebP assets were written to canonical paths:

```txt
public/images/ro/n/ro-n-nor.webp
public/images/ro/n/ro-n-nuca.webp
public/images/ro/n/ro-n-nasture.webp
public/images/ro/n/ro-n-nufar.webp
public/images/ro/o/ro-o-oaie.webp
public/images/ro/o/ro-o-oala.webp
public/images/ro/o/ro-o-oglinda.webp
public/images/ro/o/ro-o-omida.webp
public/images/ro/o/ro-o-ou.webp
public/images/ro/o/ro-o-orez.webp
public/images/ro/p/ro-p-para.webp
public/images/ro/p/ro-p-palarie.webp
public/images/ro/p/ro-p-patura.webp
public/images/ro/p/ro-p-pepene.webp
public/images/ro/p/ro-p-pensula.webp
public/images/ro/p/ro-p-penar.webp
public/images/ro/p/ro-p-pieptene.webp
public/images/ro/p/ro-p-portocala.webp
public/images/ro/p/ro-p-pruna.webp
public/images/ro/p/ro-p-puzzle.webp
```

Final encoded sizes:

| Asset | Bytes |
| --- | ---: |
| `ro-n-nor.webp` | `9550` |
| `ro-n-nuca.webp` | `8804` |
| `ro-n-nasture.webp` | `7694` |
| `ro-n-nufar.webp` | `4698` |
| `ro-o-oaie.webp` | `7970` |
| `ro-o-oala.webp` | `7176` |
| `ro-o-oglinda.webp` | `5624` |
| `ro-o-omida.webp` | `7460` |
| `ro-o-ou.webp` | `8056` |
| `ro-o-orez.webp` | `8294` |
| `ro-p-para.webp` | `7240` |
| `ro-p-palarie.webp` | `8014` |
| `ro-p-patura.webp` | `4778` |
| `ro-p-pepene.webp` | `4880` |
| `ro-p-pensula.webp` | `7108` |
| `ro-p-penar.webp` | `4308` |
| `ro-p-pieptene.webp` | `7146` |
| `ro-p-portocala.webp` | `5832` |
| `ro-p-pruna.webp` | `4450` |
| `ro-p-puzzle.webp` | `4820` |

The accepted source contact sheet and cropped review sheet were staged under ignored `assets/image-sources/ro/batch-32/` paths. Cropped source PNGs were staged under ignored `assets/image-sources/ro/n/`, `assets/image-sources/ro/o/`, and `assets/image-sources/ro/p/` paths.

## Production Impact

This image-only slice made no vocabulary changes and added no speech-target metadata to production JSON.

Expected content impact after validation:

- Approved Romanian words: unchanged at `370`.
- Ready images: `272 -> 292`.
- Placeholder images: `98 -> 78`.
- Letter image readiness now includes:
  - `N`: `5` ready / `0` placeholder;
  - `O`: `9` ready / `0` placeholder;
  - `P`: `26` ready / `8` placeholder.

No `Ă` or `Â` bucket work was added.
