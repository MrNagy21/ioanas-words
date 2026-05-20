# Ready-To-Copy Prompt: Wheel Setup Exclusion Filters Final QA

Read:

1. `AGENTS.md`
2. `docs/agent-brief.md`
3. `docs/spec.md`
4. `docs/plan.md`
5. `docs/status.md`
6. `docs/app-development-program/features/wheel-setup-exclusion-filters/spec.md`
7. `docs/app-development-program/features/wheel-setup-exclusion-filters/plan.md`
8. `docs/app-development-program/features/wheel-setup-exclusion-filters/status.md`

Implement only the remaining `Wheel Setup Exclusion Filters` Batch 5/6 polish and final QA.

Context:

- The four-step setup wizard is implemented: `Reguli`, `Evită`, `Cuvinte`, `Final`.
- Exclusion filtering already applies in setup and on `/ro/play/<target>`.
- Saved setup summaries include exclusions.
- Saved setup editing UX has been overhauled: editing preserves saved identity/name, `Salvează modificările` updates in place, save/update actions show inline feedback, duplicate names are blocked per target, `Salvează ca nouă` requires a unique name, and the final start action is `Pornește roata`.

Tasks:

- Decide whether a concise play-screen exclusion status fits without crowding the wheel-first mobile layout. If it does not fit, leave the play screen unchanged and record that decision.
- Verify result modal remove, replacement, and reset behavior still respect the filtered pool.
- Run final command and browser QA from the feature spec.
- Update `docs/app-development-program/features/wheel-setup-exclusion-filters/status.md` and `docs/status.md`.

Do not:

- Add new Romanian words.
- Add or modify image assets.
- Add database, auth, billing, accounts, admin editing, AI pronunciation, or clinical claims.
- Start another dev server or use another port.
- Reintroduce live setup controls on the play screen.

Verification:

```txt
pnpm run lint
pnpm exec tsc --noEmit --incremental false
pnpm run check:setup-storage
pnpm run check:gameplay
pnpm run check:matching
git diff --check
```

Browser verification:

```txt
http://localhost:3000/ro/setup/f
http://localhost:3000/ro/play/f
http://localhost:3000/ro/setup/ghe
```
