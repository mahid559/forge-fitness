# FORGE FITNESS — Build & Code Guide (`skill.md`)

How this project is structured and how to extend it safely. Read alongside `design.md`.

## Stack

- **Next.js 15** (App Router, RSC by default) + **TypeScript** (strict)
- **Tailwind CSS** with tokens in `tailwind.config.ts`
- **Framer Motion** for UI/scroll/reveal transitions
- **GSAP + ScrollTrigger** for hero timeline, counters, parallax
- **Lucide React** for all icons

## Commands

```bash
npm run dev        # local dev server
npm run build      # production build
npm run start      # serve production build
npm run lint       # eslint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
```

## Directory map

```
app/
  layout.tsx          # fonts, metadata, global chrome (nav/footer, scroll progress)
  page.tsx            # composes all sections in order
  globals.css         # tokens, base styles, utilities
components/
  layout/             # Navbar, Footer, MobileMenu, ScrollProgress, BackToTop
  sections/           # one file per page section
  ui/                 # Button, SectionHeading, Reveal, SmartImage, Counter,
                      # Marquee, Badge, GalleryLightbox, Tabs...
lib/
  images.ts           # validated image catalog + helpers (img(), BLUR)
  data/               # typed content: programs, trainers, plans, testimonials,
                      # schedule, gallery, stats, nav, site
  utils.ts            # cn(), formatters
  motion.ts           # shared Framer Motion variants
```

## Conventions

- **Components** are named exports, default-exported only at page boundaries. Client components declare `'use client'` at the very top and are kept leaf-ward so pages stay server-rendered.
- **Content is data-driven.** Never hardcode copy inside components — add it to `lib/data/*` with an exported TypeScript type/interface.
- **Images** always go through `SmartImage` and `lib/images.ts`. Add new photos as IDs/URLs in the catalog so sizing, blur, and fallbacks stay centralized.
- **Styling** uses Tailwind utilities plus a small set of semantic classes in `globals.css` (`.card`, `.eyebrow`, `.section`, `.text-gradient`). Prefer utilities; promote to a class only when repeated 3+ times.
- **Classnames** are composed with `cn()` from `lib/utils.ts`.
- **Motion** variants live in `lib/motion.ts`. Reuse `fadeUp`, `stagger`, `scaleIn`. Always guard heavy motion behind `useReducedMotion`.
- **Icons**: Lucide only, size via `className`, always `aria-hidden` when decorative.

## Adding a section

1. Add types + data to `lib/data/`.
2. Create `components/sections/MySection.tsx` (server component by default).
3. Compose primitives (`SectionHeading`, `Reveal`, `Button`, `SmartImage`).
4. Import into `app/page.tsx` in the correct order, with an `id` for anchor navigation.
5. Add the anchor to `lib/data/nav.ts` if it belongs in the navbar.

## Image rules

- Only use URLs validated to return 200/206 (see `lib/images.ts` — the catalog is pre-checked).
- Request crops with explicit width/height; pass `sizes` to `next/image`.
- Always provide `alt` text. Decorative media uses empty alt.
- `SmartImage` renders a gradient fallback on error — never ship a broken image.

## Performance budget

- Hero image is the only `priority` image; everything else lazy-loads.
- Animations use transform/opacity only; no animating layout properties.
- Keep client components small; avoid re-rendering lists on scroll.
- Respect `prefers-reduced-motion` everywhere.
