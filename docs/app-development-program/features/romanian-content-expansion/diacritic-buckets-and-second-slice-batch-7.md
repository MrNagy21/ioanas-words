# Romanian Content Expansion Batch 7 Planning

Batch: Diacritic Buckets And Second Production Slice Planning.

Date: 2026-05-17.

## Scope

This batch resolves the production convention for exact `Ș` and `Ț` starting-letter buckets and plans the next small Romanian production slice from already accepted worksheet rows.

No production words or image assets are added in this batch.

## Diacritic Bucket Convention

Decision: use the hybrid convention confirmed by the human on 2026-05-17.

| Layer | `Ș` example | `Ț` example | Rule |
| --- | --- | --- | --- |
| Letter ID | `ș` | `ț` | Keep exact lowercase Romanian bucket IDs. |
| Letter label | `Ș` | `Ț` | Use locale uppercase labels. |
| Word manifest file | `content/ro/words-ș.json` | `content/ro/words-ț.json` | Keep exact bucket filenames. |
| Route segment | `/ro/play/ș` | `/ro/play/ț` | Keep exact child-facing route targets. Browsers may percent-encode these characters in transport or display. |
| Word ID prefix | `ro-sh-...` | `ro-tz-...` | Keep production word IDs ASCII. |
| Image folder | `/images/ro/ș/...` | `/images/ro/ț/...` | Keep canonical image ownership under the exact bucket folder. |
| Image filename | `ro-sh-sapca.webp` | `ro-tz-testoasa.webp` | Match the ASCII word ID exactly. |

Examples:

```txt
content/ro/words-ș.json
id: ro-sh-sapca
image: /images/ro/ș/ro-sh-sapca.webp
route: /ro/play/ș

content/ro/words-ț.json
id: ro-tz-testoasa
image: /images/ro/ț/ro-tz-testoasa.webp
route: /ro/play/ț
```

Rationale:

- Exact bucket IDs preserve Romanian orthography and keep `S` distinct from `Ș`, and `T` distinct from `Ț`.
- Exact bucket filenames and route segments match the app's existing content model: `letters.json` uses `id` and `wordFile`, and `generateStaticParams` already emits route params from enabled letter IDs.
- ASCII word IDs and filenames keep IDs stable in JSON, image filenames, tooling, shell commands, and future external references.
- Canonical image folders remain tied to the exact starting-letter bucket, so image ownership still follows canonical storage.

Route/source notes:

- Next.js App Router dynamic segments receive route values through `params`, and `generateStaticParams` can provide known route params at build time: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes
- URL percent-encoding is normal for URL characters outside simple ASCII contexts; links can stay authored as `/ro/play/ș` while clients may encode the path during transport: https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding

Implementation note:

- `scripts/content/validate-content.mjs` now accepts `ro-sh-` as the required ASCII word ID prefix for `ș` manifests and `ro-tz-` for `ț` manifests.
- The validator still requires exact `word`, `display`, manifest letter, image folder, and canonical starting-letter placement.
- No alias routes such as `/ro/play/sh` or `/ro/play/tz` are introduced.
- No broader convention for future `Ă`, `Â`, or `Î` word ID tokens is implemented in this batch. Resolve those deliberately before adding production starting-letter files for those buckets.

## Planned Second Production Slice

Selection rule: only accepted rows from `candidate-review-worksheet-batch-2.md` are eligible. Rejected and needs-revision rows stay out.

Proposed slice size: `17` words. This is still a small image batch under the image pipeline's normal `10` to `25` image range.

These words remain in planning until the next batch creates image briefs, produces/reviews images, and either promotes them with ready images or gets explicit human approval for draft-only metadata.

Canonical JSON shape remains the established production word shape. Example for a future ready `Ș` word:

```json
{
  "id": "ro-sh-sapca",
  "word": "șapcă",
  "display": "șapcă",
  "normalized": "sapca",
  "partOfSpeech": "noun",
  "difficulty": 1,
  "ageBand": "4-6",
  "category": "clothing",
  "image": "/images/ro/ș/ro-sh-sapca.webp",
  "imageStatus": "ready",
  "alt": "O șapcă",
  "source": ["manual"],
  "license": "app-owned",
  "status": "approved"
}
```

If a future batch adds draft-only metadata before images, use the same canonical `id`, `word`, `display`, `normalized`, `category`, `image`, and `alt` shape, but keep `imageStatus: "placeholder"`, `license: "not-yet-created"`, and `status: "draft"` unless the human explicitly approves a different release path.

| Worksheet row | Word | Canonical file | Proposed ID | Canonical image path | Category | Production planning decision |
| ---: | --- | --- | --- | --- | --- | --- |
| 25 | `șapcă` | `words-ș.json` | `ro-sh-sapca` | `/images/ro/ș/ro-sh-sapca.webp` | clothing | Include; first simple initial `Ș` clothing word. |
| 27 | `șosetă` | `words-ș.json` | `ro-sh-soseta` | `/images/ro/ș/ro-sh-soseta.webp` | clothing | Include; initial `Ș` and useful `S/Ș` contrast context. |
| 29 | `șoricel` | `words-ș.json` | `ro-sh-soricel` | `/images/ro/ș/ro-sh-soricel.webp` | animal | Include; initial `Ș`, medial `R`, child-friendly animal image. |
| 36 | `țestoasă` | `words-ț.json` | `ro-tz-testoasa` | `/images/ro/ț/ro-tz-testoasa.webp` | animal | Include; first initial `Ț` production candidate. |
| 13 | `sanie` | `words-s.json` | `ro-s-sanie` | `/images/ro/s/ro-s-sanie.webp` | vehicle | Include; simple initial `S`. |
| 17 | `salată` | `words-s.json` | `ro-s-salata` | `/images/ro/s/ro-s-salata.webp` | food | Include; simple initial `S`, clear bowl image. |
| 23 | `sandale` | `words-s.json` | `ro-s-sandale` | `/images/ro/s/ro-s-sandale.webp` | clothing | Include; simple initial `S`, clothing category. |
| 47 | `zar` | `words-z.json` | `ro-z-zar` | `/images/ro/z/ro-z-zar.webp` | toy | Include; short initial `Z`, final `R`. |
| 67 | `gem` | `words-g.json` | `ro-g-gem` | `/images/ro/g/ro-g-gem.webp` | food | Include; short initial `GE` watchlist word. |
| 68 | `girafă` | `words-g.json` | `ro-g-girafa` | `/images/ro/g/ro-g-girafa.webp` | animal | Include; first initial `GI` watchlist word. |
| 60 | `ceapă` | `words-c.json` | `ro-c-ceapa` | `/images/ro/c/ro-c-ceapa.webp` | food | Include; first initial `CE` watchlist word. |
| 62 | `cireșe` | `words-c.json` | `ro-c-cirese` | `/images/ro/c/ro-c-cirese.webp` | food | Include; initial `CI` plus medial `Ș`. |
| 63 | `ciorap` | `words-c.json` | `ro-c-ciorap` | `/images/ro/c/ro-c-ciorap.webp` | clothing | Include; initial `CI`, but image brief must distinguish it from `șosetă`. |
| 39 | `față` | `words-f.json` | `ro-f-fata` | `/images/ro/f/ro-f-fata.webp` | body | Include; medial `Ț` and first `F` starts-with candidate. |
| 52 | `frunză` | `words-f.json` | `ro-f-frunza` | `/images/ro/f/ro-f-frunza.webp` | nature | Include; medial `Z`, `F/R` cluster complexity noted for later review. |
| 65 | `bicicletă` | `words-b.json` | `ro-b-bicicleta` | `/images/ro/b/ro-b-bicicleta.webp` | vehicle | Include if image brief stays clear; 4 syllables and `cl` cluster make it a later-practice word, not beginner-only. |
| 69 | `deget` | `words-d.json` | `ro-d-deget` | `/images/ro/d/ro-d-deget.webp` | body | Include; medial `GE`, first `D` starts-with candidate. |

## Expected Coverage Impact

Using the Batch 6 approved catalog as the baseline and the 17 planned rows as hypothetical approved records:

| Target | Batch 6 starts/contains/mixed | Planned starts/contains/mixed |
| --- | ---: | ---: |
| `Ș` | `0 / 5 / 5` | `3 / 6 / 9` |
| `Ț` | `0 / 3 / 3` | `1 / 4 / 5` |
| `S` | `3 / 5 / 8` | `6 / 7 / 13` |
| `Z` | `2 / 2 / 4` | `3 / 3 / 6` |
| `GE` | `1 / 1 / 2` | `2 / 2 / 4` |
| `GI` | `0 / 0 / 0` | `1 / 0 / 1` |
| `CE` | `0 / 0 / 0` | `1 / 1 / 2` |
| `CI` | `0 / 1 / 1` | `2 / 2 / 4` |
| `F` | `0 / 1 / 1` | `2 / 2 / 4` |
| `D` | `0 / 3 / 3` | `1 / 4 / 5` |

Expected aggregate impact if all 17 pass image review and validation:

- Approved words: `55 -> 72`.
- Ready images: `55 -> 72`.
- New enabled canonical buckets after approval: `Ș`, `Ț`, `F`, and `D`.
- Existing buckets strengthened: `B`, `C`, `G`, `S`, and `Z`.
- Initial high-value target gaps addressed for `Ș`, `Ț`, `S`, `Z`, `CE`, `CI`, `GE`, and `GI`.

## Readiness Path

Next implementation batch should:

1. Add image briefs for the 17 planned words before any JSON promotion.
2. Generate or assign reviewed pixel-art images using `docs/image-pipeline.md`.
3. Optimize final WebP assets to the canonical paths listed above.
4. Add or update canonical word manifests only after the image paths and metadata are clear.
5. Promote to `status: "approved"` and `imageStatus: "ready"` only after human visual review and automated validation.
6. Enable new letters only when their approved words and images are ready.

Draft-only metadata for this slice should be used only with explicit human approval. The preferred path is image-briefs plus ready images before child-facing approval.

## Non-Goals Confirmed

- No admin editing.
- No auth, database, upload, CSV, billing, or accounts.
- No AI pronunciation.
- No medical diagnosis, treatment claims, or visible clinical claims.
- No child-facing `/admin/words` link.
- No rejected worksheet candidates.
- No placeholder-backed approved words.
- No speech-target metadata in production JSON.
- No new child-facing approved words in this planning batch.
