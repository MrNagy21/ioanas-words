# Romanian Content Expansion Batch 74 Production Promotion

Date: 2026-06-13

## Scope

Batch 74 completes the strict point 2 release requirement after Batch 73 left `GHI` at `14` mixed words and did not add a true new `GHE` row.

Added production rows:

- `ghemuit` (`ro-g-ghemuit`) for a more usual true new `GHE` starts-with word.
- `burghiu` (`ro-b-burghiu`) for a true new `GHI` contains word.

Source checks:

- `ghemuit` was selected by human review as the more usual replacement after `gherghef` was judged less suitable for the child-facing pack; source lookup used `https://dexonline.ro/definitie/ghemuit`.
- dexonline confirms `burghiu` as a Romanian noun for a spiral steel drill bit/tool: `https://dexonline.ro/definitie/burghiu`.

## Image Processing

Generated one two-cell contact sheet and copied it to:

- `assets/image-sources/ro/batch-74/contact-sheet.png`

The accepted cells were cropped with the contact-sheet border removed and with extra padding before optimization so the app's circular masks clip only background:

- `public/images/ro/g/ro-g-ghemuit.webp` - `3,320 B`
- `public/images/ro/b/ro-b-burghiu.webp` - `7,000 B`

Both final assets are `256 x 256 px`, below the `12 KB` warning threshold, and below the `20 KB` hard maximum. The circular preview is saved at:

- `assets/image-sources/ro/batch-74/circular-preview.png`

## Content Totals

Post-Batch-74 Romanian content totals:

- Total Romanian records: `479`
- Approved words: `476`
- Ready images: `476`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain `ghicitoare`, `miez`, and `stinghie`.

## Point 2 Coverage

Current derived practice-target coverage:

| Target | Starts | Contains | Mixed |
| --- | ---: | ---: | ---: |
| `ce` | 14 | 4 | 18 |
| `ci` | 9 | 11 | 20 |
| `ge` | 9 | 7 | 16 |
| `gi` | 7 | 9 | 16 |
| `che` | 2 | 14 | 16 |
| `chi` | 8 | 8 | 16 |
| `ghe` | 12 | 4 | 16 |
| `ghi` | 8 | 7 | 15 |

This satisfies the strict point 2 target for more words with `ce`, `ci`, `ge`, `gi`, `ghe`, `che`, `chi`, and `ghi`.

## Release Review

Updated `/admin/releases/2` to include:

- `ro-b-burghiu`
- `ro-g-ghemuit`

Release 2 now lists `109` dirty-tree additions for QA. Release 1 remains the committed baseline.

## Verification

Passed outside the sandbox where `pnpm` and localhost checks can run:

- `pnpm run validate:content`
- `pnpm run lint`
- `pnpm exec tsc --noEmit --incremental false`
- `pnpm run check:gameplay`
- `pnpm run check:matching`
- `pnpm run check:setup-storage`
- `pnpm run build`
- `git diff --check`

`pnpm run validate:content` reported only existing image warning-threshold notices outside the Batch 74 assets.

Browser/local route QA:

- In-app Browser loaded `/ro`, `/admin/releases/2`, `/ro/play/ghe`, and `/ro/play/ghi`.
- `/admin/releases/2` includes the new `burghiu` and `ghemuit` image references.
- `/ro/play/ghe` showed `16` available mixed words and included `ghemuit`.
- `/ro/play/ghi` showed `15` available mixed words.
- Outside-sandbox HTTP checks returned `200` for `/ro`, `/admin/releases/2`, `/ro/play/ghe`, `/ro/play/ghi`, `/images/ro/g/ro-g-ghemuit.webp`, and `/images/ro/b/ro-b-burghiu.webp`.

## Next Step

All listed Romanian expansion requirements are now satisfied for the current Release 2 candidate. The next step is human QA through `/admin/releases/2`, then commit/release preparation if QA accepts the pack.
