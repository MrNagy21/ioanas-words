# Word Wheel

Word Wheel is a Romanian-first vocabulary wheel app for young children. V1 is
static-first and deployable on Vercel without accounts, billing, a database, or
AI features.

## Stack

- Next.js App Router
- TypeScript
- Static JSON content planned under `content/`
- Local optimized images planned under `public/images/`

## Setup

Install dependencies:

```bash
pnpm install
```

This project is pinned to `pnpm@11.1.2` through `packageManager` in
`package.json`. Use nvm-managed Node with Corepack enabled before installing.

## Commands

```bash
pnpm run dev
pnpm run validate:content
pnpm run optimize:images -- --dry-run
pnpm run optimize:images
pnpm run build
pnpm run lint
pnpm run format
```

Approve dependency build scripts if pnpm asks:

```bash
pnpm approve-builds
```

## Project Structure

```txt
app/              Next.js App Router pages and global styles
src/components/   Reusable UI components
src/content/      Content loading and typing utilities
src/game/         Wheel/game logic
src/i18n/         Locale helpers
src/utils/        Shared utilities
content/ro/       Romanian static content manifests
public/images/ro/ Romanian image assets
scripts/content/  Content validation and future pipeline scripts
scripts/images/   Image optimization scripts
assets/image-sources/ Ignored source image staging area
docs/             Product, plan, and status docs
```

Image pipeline decisions are documented in `docs/image-pipeline.md`.

## Image Pipeline

Stage reviewed source images as
`assets/image-sources/<locale>/<letter>/<word-id>.(png|jpg|jpeg|webp|avif)`.
The staging folder is ignored by default. Run
`pnpm run optimize:images -- --dry-run` to preview output paths, then
`pnpm run optimize:images` to write final lossless `256 x 256 px` WebP assets
under `public/images/<locale>/<letter>/<word-id>.webp`.

Only mark content images as `imageStatus: "ready"` after human review. Ready
images are checked by `pnpm run validate:content` for existence, `.webp`
format, `256 x 256 px` dimensions, and byte-size limits.

## Current Scope

Current work is Batch 6 image-pipeline tooling. The app remains static-first:
no accounts, billing, database-backed gameplay state, admin tools, or AI
pronunciation features are part of v1.
