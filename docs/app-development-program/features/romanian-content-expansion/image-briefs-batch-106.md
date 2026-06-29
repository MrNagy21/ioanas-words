# Romanian Content Expansion Batch 106 Image And Identity Briefs

Date: 2026-06-29

## Scope

Batch 106 resolves the Batch 105 `ramă` / `râmă` decision after explicit human approval to promote both exact Romanian words. It also records the Slice 8 image-generation brief and circular-mask QA inputs used by the production promotion batch.

Batch 106 does not add placeholders, clinical claims, database/auth/billing scope, admin editing features, AI pronunciation, or new route/loader behavior.

## Identity Decision

The user approved keeping both `ramă` and `râmă` because both are common and child-known. The content-system decision is deliberately narrow:

- Keep both exact words with `normalized: "rama"` because normalized values are Romanian folded forms.
- Keep gameplay matching exact: the wheel uses `word` / `display` lowercased Romanian text, not `normalized`, so the two words remain distinct for exact matching.
- Add a validator allowlist only for Romanian `normalized: "rama"` when the colliding exact words are `ramă` and `râmă`.
- Use distinct sense-specific IDs and image paths:
  - `ramă`: `ro-r-rama-cadru`, `/images/ro/r/ro-r-rama-cadru.webp`
  - `râmă`: `ro-r-rama-vierme`, `/images/ro/r/ro-r-rama-vierme.webp`

All other duplicate normalized values remain validation errors.

## Contact Sheet

Generated one ordered 5 x 3 contact sheet in this row-major order:

1. `leopard`
2. `lână`
3. `lan`
4. `lampion`
5. `ramă`
6. `râmă`
7. `rândunică`
8. `rechin`
9. `riglă`
10. `rulotă`
11. `ruladă`
12. `radio`
13. `romb`
14. `stea`
15. `saltea`

Source artifacts:

- `assets/image-sources/ro/batch-106/slice-8-contact-sheet.png`
- `assets/image-sources/ro/batch-106/ro-r-rigla-source.png`
- `assets/image-sources/ro/batch-106/slice-8-circle-preview.png`

`riglă` was regenerated separately because the first contact-sheet ruler had tiny printed digits. The final `riglă` source uses plain tick marks only, with no readable numbers, letters, logo, or brand.

## Image Decisions

| Word | Image decision |
| --- | --- |
| `leopard` | Friendly standing leopard; no hunting, attack, prey, or scary wildlife framing. |
| `lână` | Purple ball of wool/yarn; material sense, not a sheep-only image. |
| `lan` | Compact wheat field/crop row, not an unreadable landscape. |
| `lampion` | Red paper lantern; no text, symbols, flame, or national cue. |
| `ramă` | Empty decorative picture frame, clearly not a mirror. |
| `râmă` | Friendly earthworm on soil, non-scary and distinct from yarn. |
| `rândunică` | Single swallow bird, fully visible and not caged. |
| `rechin` | Friendly non-threatening shark; no attack, blood, prey, distressed swimmers, or danger sign. |
| `riglă` | Wooden school ruler with abstract tick marks only; no readable numbers or letters. |
| `rulotă` | Camper trailer; no brand, license text, or traffic danger. |
| `ruladă` | Rolled cake slice, distinct from generic cake. |
| `radio` | Portable radio; no readable station numbers, letters, logo, or brand. |
| `romb` | Blue rhombus tile, concrete shape-only visual. |
| `stea` | Single yellow star; no flag, badge, rating row, or night-sky clutter. |
| `saltea` | Mattress object only; no person/bedroom scene. |

## Circular-Mask QA

The first crop pass left a few subjects close to the circular mask, especially `rândunică`, `ramă`, `leopard`, and `saltea`. The final production crops were reprocessed with additional internal padding before promotion.

The final circular preview keeps all important subject pixels inside the mask. Long or wide objects (`riglă`, `rulotă`, `saltea`, `rândunică`, and `ramă`) have extra breathing room and do not touch the circular boundary.

