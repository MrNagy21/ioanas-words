# Agent Instructions For Word Wheel

This repository is the beginning of a web app called Word Wheel. Before making implementation decisions, read:

1. `docs/agent-brief.md`
2. `docs/spec.md`
3. `docs/plan.md`
4. `docs/status.md`

`docs/agent-brief.md` is the quickest source of truth for what has been agreed. `docs/spec.md` is the full product and technical specification. `docs/plan.md` is the execution plan. `docs/status.md` is the living progress tracker.

## Current State

The project is currently at 0% implementation. Only documentation exists. No app has been scaffolded yet.

## Agreed Direction

- Build a Next.js App Router app with TypeScript.
- Deploy on Vercel.
- Keep v1 static-first and database-free for gameplay.
- Start with Romanian.
- Build for children around ages 4 to 6.
- Use common, concrete, child-known Romanian words.
- Use local repository images for the first pack if they stay small and optimized.
- Keep Cloudflare R2 as the scale path for thousands of images or multiple languages.
- Do not add accounts, billing, database, admin tools, or AI pronunciation in v1.
- Keep architecture ready for those future features.

## Execution Rules

- Follow the batches in `docs/plan.md`.
- Update `docs/status.md` whenever a batch starts, completes, or materially changes.
- Romanian Content Expansion has completed its pilot audit and worksheet phase. Future Romanian content work is production preparation: do not add words or images unless they are intended to be production-ready, validated, reviewed, and suitable for the child-facing app once implemented.
- When a production decision depends on current facts, standards, child development guidance, Romanian language usage, safety, licensing, deployment behavior, or framework behavior that may have changed, do internet or source research before deciding and cite or record the source in the relevant docs.
- Ask the human for critical decisions instead of silently choosing. Critical decisions include production vocabulary acceptance tradeoffs, clinical/speech-therapy claims, child-safety concerns, licensing uncertainty, introducing placeholders into child-facing content, schema changes that affect future content, database/auth/billing architecture, and any change that expands or narrows v1 scope.
- The user is responsible for running the local dev server on port `3000`.
  Agents should verify against `http://localhost:3000` when the server is already running.
  If the server is not reachable on port `3000`, ask the user to start it instead of starting another port.
- Do not skip content validation when adding real content.
- Do not add obscure Romanian words just to fill letter quotas.
- Do not store large unoptimized image assets in the repository.
- Do not introduce a database into v1 gameplay.
- Keep public exercise content loadable from static JSON and image assets.
- Preserve a free anonymous mode in all future architecture.
- When completing an implementation batch, provide a ready-to-copy prompt for the next batch. If there is no next batch, explicitly explain that the spec or feature is finalized and list any remaining verification or release steps.

## First Implementation Task

Start with Batch 0 from `docs/plan.md`:

- scaffold Next.js App Router with TypeScript;
- add lint/build scripts;
- confirm local dev server and production build work;
- update `docs/status.md`.
