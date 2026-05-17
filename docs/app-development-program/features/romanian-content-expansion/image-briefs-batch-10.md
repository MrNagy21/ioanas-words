# Romanian Content Expansion Batch 10 Image Briefs

Date: 2026-05-17

Scope: the 11 Batch 9 planned third-slice records only.

Style: high-clarity child-friendly pixel art, one centered subject, warm shared background `rgb(253, 247, 230)`, no text, no letters, no numbers, no logo, no watermark, no brand, no copyrighted character, no complex scene, no frightening or adult content.

Final target: `256 x 256 px` lossless WebP at `public/images/ro/<letter>/<word-id>.webp`, referenced in JSON as `/images/ro/<letter>/<word-id>.webp`.

## Briefs

| Word ID | Display | Canonical path | Alt text | Category | Visual subject | Review notes |
| --- | --- | --- | --- | --- | --- | --- |
| `ro-r-rochie` | `rochie` | `/images/ro/r/ro-r-rochie.webp` | `O rochie` | clothing | One child-friendly dress with short sleeves and a clear skirt. | Must read as a dress, not a shirt; no person, letters, logo, or character print. |
| `ro-r-racheta` | `rachetă` | `/images/ro/r/ro-r-racheta.webp` | `O rachetă de jucărie` | toy | One friendly toy rocket with rounded nose cone and simple fins. | Must stay toy-like, not a realistic weapon or launch scene. |
| `ro-i-iepure` | `iepure` | `/images/ro/i/ro-i-iepure.webp` | `Un iepure` | animal | One gentle rabbit with long ears in a simple sitting pose. | Must read as rabbit, not mouse or toy; no extra carrot or scenery. |
| `ro-s-scaun` | `scaun` | `/images/ro/s/ro-s-scaun.webp` | `Un scaun` | household | One simple wooden chair with backrest, seat, and visible legs. | Must read as chair, not table or stool; no extra objects. |
| `ro-n-nas` | `nas` | `/images/ro/n/ro-n-nas.webp` | `Un nas` | body | A friendly face crop focused on the nose. | Must be neutral and child-safe; no medical framing, injury, or full body. |
| `ro-u-urs` | `urs` | `/images/ro/u/ro-u-urs.webp` | `Un urs prietenos` | animal | One cute brown bear with round ears and friendly face. | Must not look frightening; no teeth, claws, or forest scene. |
| `ro-c-cos` | `coș` | `/images/ro/c/ro-c-cos.webp` | `Un coș` | household | One woven basket with handle. | Must read as a basket, not a trash bin; keep it simple and empty or with plain cloth only. |
| `ro-c-camasa` | `cămașă` | `/images/ro/c/ro-c-camasa.webp` | `O cămașă` | clothing | One button-up shirt with collar and sleeves. | Must read as shirt; no person, logo, or printed letters. |
| `ro-d-dinti` | `dinți` | `/images/ro/d/ro-d-dinti.webp` | `Dinți` | body | A simple friendly smile showing clean teeth. | Must avoid dental procedure, blood, braces, or medical tools. |
| `ro-c-catel` | `cățel` | `/images/ro/c/ro-c-catel.webp` | `Un cățel` | animal | One friendly puppy with floppy ears and small body. | Must be distinct from existing `câine`; no extra toys or scenery. |
| `ro-p-pijama` | `pijama` | `/images/ro/p/ro-p-pijama.webp` | `O pijama` | clothing | One child pajama set with top and pants. | Must avoid character branding, printed letters, or a person wearing it. |

## Prompt Template

```txt
Create a high-clarity pixel art icon for a children's Romanian vocabulary game.
Romanian word: "<display>". Intended meaning: <brief subject>.
Style: cheerful handcrafted pixel art, clean silhouette, rounded friendly shapes, simple readable details, soft playful colors, consistent game icon style matching the existing Word Wheel Romanian starter pack.
Composition: one centered subject only, square canvas, subject fills 70% to 85% of the image, clear margin around the subject, flat warm off-white background rgb(253, 247, 230).
Technical: no text, no letters, no numbers, no logo, no watermark, no brand, no copyrighted character, no photorealism, no 3D render, no complex scene, no scary mood, no clutter.
Audience: children ages 4 to 6.
```

## Review Status

Status: reviewed and accepted on 2026-05-17.

All 11 generated source images were reviewed before JSON promotion. Review checks passed for recognizability, child safety, no text, no letters, no logos, no brands, no watermarks, style consistency with the Romanian starter image pack, and optimization viability. The `rachetă` image is clearly toy-like, the `urs` image is friendly, and the `nas` and `dinți` images avoid medical framing. Final WebP files were generated only after this review pass.

The staged source PNGs and trace metadata live under ignored `assets/image-sources/ro/` paths. Canonical committed assets live under `public/images/ro/<letter>/<word-id>.webp`.
