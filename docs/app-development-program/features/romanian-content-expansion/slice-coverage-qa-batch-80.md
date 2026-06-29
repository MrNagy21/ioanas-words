# Batch 80 Slice Coverage QA: After Batch 79

Date: 2026-06-24

Status: QA and next-prompt preparation complete; no production content changed.

## Scope

Batch 80 verifies the Batch 79 Slice 1 `H` production promotion and prepares the next content-expansion prompt.

This batch does not add words, generate images, crop cells, optimize public assets, change production JSON, add placeholders, change routes/schema/loaders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

## Batch 79 Promotion Check

Batch 79 promoted exactly the `15` human-approved Batch 78 `H` rows into `content/ro/words-h.json`, with one row per approved ID and no missing or duplicate Batch 79 IDs:

1. `ro-h-hipopotam` / `hipopotam`
2. `ro-h-hartie` / `hârtie`
3. `ro-h-hotel` / `hotel`
4. `ro-h-halat` / `halat`
5. `ro-h-harpa` / `harpă`
6. `ro-h-horn` / `horn`
7. `ro-h-hamster` / `hamster`
8. `ro-h-hambar` / `hambar`
9. `ro-h-husa` / `husă`
10. `ro-h-hol` / `hol`
11. `ro-h-hora` / `horă`
12. `ro-h-hochei` / `hochei`
13. `ro-h-hublou` / `hublou`
14. `ro-h-hamburger` / `hamburger`
15. `ro-h-hering` / `hering`

`/admin/releases/2` includes all `15` Batch 79 IDs and now lists `124` dirty-tree additions.

## Image QA

All Batch 79 images exist at canonical paths under `public/images/ro/h/`, are WebP files, are exactly `256 x 256 px`, are below the `20 KB` hard maximum, and are below the `12 KB` warning threshold.

| ID | Path | Size |
| --- | --- | ---: |
| `ro-h-hipopotam` | `public/images/ro/h/ro-h-hipopotam.webp` | `3,314 B` |
| `ro-h-hartie` | `public/images/ro/h/ro-h-hartie.webp` | `2,504 B` |
| `ro-h-hotel` | `public/images/ro/h/ro-h-hotel.webp` | `2,324 B` |
| `ro-h-halat` | `public/images/ro/h/ro-h-halat.webp` | `2,816 B` |
| `ro-h-harpa` | `public/images/ro/h/ro-h-harpa.webp` | `1,526 B` |
| `ro-h-horn` | `public/images/ro/h/ro-h-horn.webp` | `1,394 B` |
| `ro-h-hamster` | `public/images/ro/h/ro-h-hamster.webp` | `2,366 B` |
| `ro-h-hambar` | `public/images/ro/h/ro-h-hambar.webp` | `1,742 B` |
| `ro-h-husa` | `public/images/ro/h/ro-h-husa.webp` | `1,948 B` |
| `ro-h-hol` | `public/images/ro/h/ro-h-hol.webp` | `2,132 B` |
| `ro-h-hora` | `public/images/ro/h/ro-h-hora.webp` | `1,964 B` |
| `ro-h-hochei` | `public/images/ro/h/ro-h-hochei.webp` | `1,588 B` |
| `ro-h-hublou` | `public/images/ro/h/ro-h-hublou.webp` | `2,596 B` |
| `ro-h-hamburger` | `public/images/ro/h/ro-h-hamburger.webp` | `2,250 B` |
| `ro-h-hering` | `public/images/ro/h/ro-h-hering.webp` | `1,956 B` |

Visual review of `assets/image-sources/ro/batch-78/optimized-circular-preview.png` remains acceptable. The sensitive cells `horn`, `hol`, `horă`, `hochei`, and `hering` keep their meaningful subject pixels inside the circular mask. `horn` remains visibly padded so the roof/chimney composition is not clipped.

## Current Totals

Computed from `content/ro/words-*.json`:

- Total Romanian records: `494`
- Approved words: `491`
- Ready images: `491`
- Approved placeholders: `0`
- Rejected audit-trail records: `3`

Rejected audit-trail rows remain:

- `ro-g-ghicitoare`
- `ro-m-miez`
- `ro-s-stinghie`

## Affected Coverage

Computed from approved Romanian words:

| Target | Starts | Contains-only | Mixed |
| --- | ---: | ---: | ---: |
| `H` | 18 | 64 | 82 |
| `GE` | 9 | 8 | 17 |
| `CHE` | 2 | 15 | 17 |

## Verification

Passed on 2026-06-24 with the bundled Node runtime and local Bun path on `PATH`:

```txt
pnpm run validate:content
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:gameplay
pnpm run check:matching
pnpm run check:setup-storage
pnpm run build
git diff --check
```

Notes:

- `pnpm run validate:content` passed with only pre-existing image warning-threshold notices. No Batch 79 image is above the `12 KB` warning threshold.
- The first `pnpm run check:gameplay` attempt failed because `bun` was not on the shell `PATH`. After adding `/Users/darius/.bun/bin` to `PATH`, `check:gameplay`, `check:matching`, and `check:setup-storage` passed.
- Initial localhost QA could not run because `http://localhost:3000` was unavailable both inside and outside the sandbox. After the user started the expected dev server, the sandboxed localhost probe still failed to connect, but the required outside-sandbox retry passed for `/ro`, `/admin/words`, `/admin/releases/2`, `/ro/play/h`, and representative Batch 79 image URLs for `horn`, `hol`, `horă`, `hochei`, and `hering`. No alternate server or port was started.

## Next Recommended Prompt

```txt
Continue Word Wheel Romanian content expansion with Batch 81.

Read:
AGENTS.md
docs/agent-brief.md
docs/spec.md
docs/plan.md
docs/status.md
docs/image-pipeline.md
docs/app-development-program/speech-therapy-content-guidance.md
docs/app-development-program/features/romanian-content-expansion/spec.md
docs/app-development-program/features/romanian-content-expansion/plan.md
docs/app-development-program/features/romanian-content-expansion/status.md
docs/app-development-program/features/romanian-content-expansion/high-value-target-top-up-worksheet-batch-75.md
docs/app-development-program/features/romanian-content-expansion/implementation-orchestrator-prompt-batch-76.md
docs/app-development-program/features/romanian-content-expansion/slice-plan-index-batch-76.md
docs/app-development-program/features/romanian-content-expansion/production-promotion-batch-79.md
docs/app-development-program/features/romanian-content-expansion/slice-coverage-qa-batch-80.md

Task: Batch 81 production-slice planning for Slice 2 from Batch 76.

Plan only these Slice 2 accepted non-hold candidates:
hamsie, hienă, homar, ham, hanorac, hidrant, jurnal, jalon, jambon, joystick, jerseu, țintă, ținută, țesătură, țâșnitoare.

Do not add production JSON records, generate images, crop cells, optimize public assets, change routes/schema/loaders, add placeholders, add database/auth/billing/admin editing scope, add AI pronunciation, or make clinical claims.

For each candidate, verify source/spelling, duplicate/collision status against current production content, child-fit, safety, imageability, canonical file/ID/image path plan, category, part of speech, difficulty, age band, alt text direction, target coverage impact, and promotion risks. Pay special attention to `ham` dog-harness ambiguity, `jambon` overlap with future/related ham images, borrowed-word review for `joystick`, weapon-free framing for `țintă`, and strict child-fit checks for `ținută`, `țesătură`, and `țâșnitoare`.

Write a planning-only document under docs/app-development-program/features/romanian-content-expansion/ and update docs/app-development-program/features/romanian-content-expansion/status.md and docs/status.md with the Batch 81 result and the next prompt. Run git diff --check.
```
