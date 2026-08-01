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
| `src/app/` | Routes: `/`, `/products`, `/services`, `/contact` + `robots`/`sitemap` |
| `src/components/` | Header, footer |
| `src/lib/content.ts` | All copy and product/service data. Edit content here, not in pages. |
| `src/app/globals.css` | Theme tokens (see below) |

## Theming

The entire palette lives in one `:root` block in `src/app/globals.css` (theme: **neo-cyber**). Components only reference semantic tokens (`bg`, `surface`, `line`, `ink`, `accent`, …) via Tailwind, so changing the theme means editing that single block.

## Deploy

Vercel, connected to this repo, `main` branch → production at `synkube.com`. No env vars required.
