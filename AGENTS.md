# Agent guidelines — synkube.com

See `README.md` for develop, build, deploy.

## Layout

- Routes: `src/app/` (`/`, `/products`, `/agents`, `/services`, `/contact`, metadata routes).
- Copy: `src/lib/content.ts`, `src/lib/content/agents-page.ts`.
- Shared UI: `src/components/` (header, footer, agents sections, diagram shell).

## Visual design

- Before layout, color, type, or motion changes: read root **`DESIGN.md`** ([Google design.md spec](https://github.com/google-labs-code/design.md)).
- Token source of truth: **`src/app/globals.css`** (`:root` + `@theme inline`, theme **neo-cyber**).
- After token or contract changes: `npx @google/design.md lint DESIGN.md`.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm typecheck
```

Deploy: Vercel on `main` → synkube.com. Post-deploy CSP smoke in README.
