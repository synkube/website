---
version: alpha
name: synkube-com
description: Neo-cyber dark marketing site for synkube.com — blueprint grid, cyan accent, purple secondary.
colors:
  bg: "#04070f"
  bg-elevated: "#090e1a"
  surface: "#0b1122"
  line: "#1b2540"
  line-strong: "#2a3a63"
  ink: "#e8eefb"
  ink-muted: "#94a0ba"
  accent: "#3ce3ff"
  accent-2: "#a08bff"
  ok: "#52e09b"
typography:
  h1:
    fontFamily: Geist
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.1
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    lineHeight: 1.6
  label-mono:
    fontFamily: Geist Mono
    fontSize: 0.75rem
    letterSpacing: "0.18em"
rounded:
  sm: 6px
  md: 12px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: 12px
---

## Overview

Theme **neo-cyber**: deep ink backgrounds, cyan primary accent (`#3ce3ff`), purple secondary for diagrams, subtle blueprint grid on hero. Static marketing site for SynKube (Next.js App Router, Tailwind v4, Vercel). Signature: mono eyebrows, animated diagram flow lines, selection invert (accent fill, dark text).

## Colors

Semantic tokens in `src/app/globals.css` `:root` and `@theme inline`. Tailwind classes use `bg`, `ink`, `accent`, etc.

- **bg / bg-elevated / surface:** page and panel hierarchy.
- **line / line-strong:** borders and diagram chrome.
- **ink / ink-muted:** body and supporting text.
- **accent / accent-2 / ok:** CTAs, eyebrows, diagram series, success.

RGBA tokens (`accent-soft`, `grid-line`) stay in CSS only until promoted to YAML.

## Typography

- **Sans:** Geist (`--font-geist-sans`) for body and headings.
- **Mono:** Geist Mono (`--font-geist-mono`) for `.eyebrow` section labels.

## Layout

Marketing routes under `src/app/`. Copy in `src/lib/content.ts` and `src/lib/content/agents-page.ts`. Shared chrome: header, footer, diagram shell in `src/components/`.

## Components

Page-specific blocks in `src/components/agents/` and shared diagram primitives in `src/components/diagram/`. Prefer semantic Tailwind colors over hex in TSX.

## Motion

`.flow-line` uses dashed stroke animation; disabled under `prefers-reduced-motion`. Hero uses `.bg-grid` mask.

## Do's and Don'ts

- **Do** change palette in `globals.css` first, then update this file.
- **Do** run `npx @google/design.md lint DESIGN.md` when editing tokens here.
- **Don't** add raw hex in components except documented exceptions (e.g. third-party brand SVGs, OG image generator mirroring theme).
- **Don't** bypass semantic tokens for one-off pages; extend content modules instead.
