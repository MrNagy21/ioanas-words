# Agent Instructions For Word Wheel

This repository contains the Word Wheel web app. Before making implementation decisions, read:

1. `docs/agent-brief.md`
2. `docs/spec.md`
3. `docs/plan.md`
4. `docs/status.md`

`docs/agent-brief.md` is the quickest source of truth for what has been agreed. `docs/spec.md` is the full product and technical specification. `docs/plan.md` is the execution plan. `docs/status.md` is the living progress tracker.

## Current State

The Romanian wheel, setup wizard, saved configurations, content catalog, and public demo already exist. The next app-development work is the Guided Practice App plan agreed on 2026-10-16, under `docs/app-development-program/features/guided-practice-app/`. GP0–GP7 are implemented and locally verified; GP8 has manifest/icons with offline deferred. GP9 Romanian review, physical devices and therapist pilot remain. Read `docs/status.md` for current evidence; do not restart scaffolding.

## Agreed Direction

- Build a Next.js App Router app with TypeScript.
- Deploy on Vercel.
- Keep v1 static-first and database-free for gameplay.
- Start with Romanian.
- Build for children around ages 4 to 6.
- Use common, concrete, child-known Romanian words.
- Use local repository images for the first pack if they stay small and optimized.
- Keep Cloudflare R2 as the scale path for thousands of images or multiple languages.
- Do not add accounts, billing, a hosted database, admin editing, or AI pronunciation in this pilot.
- The Guided Practice App scope includes a public introduction, onboarding, local child profiles/goals/history, adult-entered pronunciation observations, rewards, and backup/restore. Public content remains static; child records stay in browser storage. See the feature package for final counting and reward rules.
- Keep architecture ready for those future features.

## Execution Rules

- Follow the active program linked from `docs/plan.md`. The next batch is Guided Practice App GP9, not the original scaffold Batch 0.
- Update `docs/status.md` whenever a batch starts, completes, or materially changes.
- Use `pnpm` for project commands. The package manager is pinned by `packageManager` in `package.json`; future agents should run `pnpm install`, `pnpm run dev`, `pnpm run validate:content`, `pnpm run lint`, and `pnpm run build` rather than substituting another package manager. If `pnpm` is missing from the shell PATH, fix the Node/Corepack or nvm PATH before treating verification as complete.
- Romanian Content Expansion has completed its pilot audit and worksheet phase. Future Romanian content work is production preparation: do not add words or images unless they are intended to be production-ready, validated, reviewed, and suitable for the child-facing app once implemented.
- When a production decision depends on current facts, standards, child development guidance, Romanian language usage, safety, licensing, deployment behavior, or framework behavior that may have changed, do internet or source research before deciding and cite or record the source in the relevant docs.
- Ask the human for critical decisions instead of silently choosing. Critical decisions include production vocabulary acceptance tradeoffs, clinical/speech-therapy claims, child-safety concerns, licensing uncertainty, introducing placeholders into child-facing content, schema changes that affect future content, database/auth/billing architecture, and any change that expands or narrows v1 scope.
- The local dev server is expected to be running on port `3000`.
  Agents should verify browser and route behavior against `http://localhost:3000`.
  If a sandboxed command cannot reach `localhost:3000`, retry the reachability check outside the sandbox before concluding the server is unavailable.
  Do not start another dev server or use another port.
- Do not skip content validation when adding real content.
- Do not add obscure Romanian words just to fill letter quotas.
- Do not store large unoptimized image assets in the repository.
- Do not introduce a server database dependency into gameplay. Preserve the browser-only IndexedDB transaction and migration contracts for local child records.
- Keep public exercise content loadable from static JSON and image assets.
- Preserve a free anonymous mode in all future architecture.
- When completing an implementation batch, provide a ready-to-copy prompt for the next batch. If there is no next batch, explicitly explain that the spec or feature is finalized and list any remaining verification or release steps.

## Next implementation task

Continue Guided Practice App GP9 using `docs/app-development-program/features/guided-practice-app/next-implementation-prompt.md`:

- read the implementation report and accepted contracts;
- obtain user-arranged reviewed Romanian mappings before verified goal credit;
- complete physical-device and therapist usability checks;
- preserve explicit online-required messaging and local backup behavior;
- update status with actual release evidence. Do not deploy without an explicit request.
