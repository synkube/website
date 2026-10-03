# synkube.com · marketing site

Static marketing site for [synkube.com](https://synkube.com). Next.js App Router, Tailwind CSS v4, fully static pages, hosted on Vercel.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build (all pages prerendered)
pnpm lint
pnpm typecheck
```

## Structure

| Path | Purpose |
|------|---------|
| `src/app/` | Routes: `/`, `/products`, `/agents`, `/services`, `/contact` + `robots`/`sitemap` |
| `src/components/` | Header, footer, shared UI |
| `src/components/agents/` | `/agents` page sections and SVG diagrams |
| `src/components/diagram/` | Shared diagram shell (scroll + arrow markers) |
| `src/lib/content.ts` | Site-wide copy (home, products, services, contact) |
| `src/lib/content/agents-page.ts` | `/agents` copy and structured data |
| `src/app/globals.css` | Theme tokens (see below) |

## Theming

The entire palette lives in one `:root` block in `src/app/globals.css` (theme: **neo-cyber**). Components only reference semantic tokens (`bg`, `surface`, `line`, `ink`, `accent`, …) via Tailwind, so changing the theme means editing that single block.

## Deploy

Vercel, connected to this repo, `main` branch → production at `synkube.com`. No env vars required.
