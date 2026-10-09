# FORGE FITNESS — Design System

> A premium, high-end strength & conditioning brand. Dark, molten, cinematic, and fast.
> This document is the single source of truth for visual language, tokens, and patterns.

---

## 1. Brand direction

**Positioning:** An elite, coach-led strength facility — part industrial forge, part performance lab.
**Personality:** Powerful, disciplined, precise, premium, never cheap or "gym-bro".
**Promise:** _"Forge your strongest self."_

The site should feel like a $300+ custom build: cinematic imagery, generous negative space,
confident typography, restrained motion, and a tight, consistent design system.

## 2. Color

A near-black steel base with a single molten-ember accent. Restraint keeps it premium.

| Token | Hex | Use |
| --- | --- | --- |
| `ink-950` | `#07070A` | Page background |
| `ink-900` | `#0B0B0F` | Elevated bands |
| `steel-950` | `#0E0E12` | Cards, surfaces |
| `steel-900` | `#16161B` | Hover surfaces |
| `steel-800` | `#232329` | Borders, dividers |
| `steel-400` | `#7C7C88` | Muted body text |
| `steel-200` | `#C9C9CF` | Secondary text |
| `steel-50` | `#F5F5F6` | Primary text |
| `ember-500` | `#F65B15` | Primary brand accent |
| `ember-400` | `#FB7A3C` | Hover / glow |
| `embergold-400` | `#FFB347` | Gradient end |

**Gradients**
- Ember gradient: `linear-gradient(120deg,#F65B15,#FF9A1F 55%,#FFC24D)` — buttons, accents, text highlights.
- Steel gradient: `linear-gradient(180deg,#16161B,#0B0B0F)` — section bands.
- Grid lines: 1px white @ 4.5% opacity, 64px grid — technical texture.
- Vignette + bottom fade over every hero/media block to guarantee text contrast.

**Rules**
- One accent only. No second hue except gradient gold inside the ember ramp.
- Text on imagery always sits on a scrim (gradient overlay), never raw.
- Focus rings use `ember-500` at full strength for accessibility.

## 3. Typography

- **Display:** `Oswald` (condensed, 400–700). Uppercase for impact: H1, H2, eyebrows, stats, buttons.
- **Body:** `Inter` (400–700). Paragraphs, UI, card titles (H3), labels.
- Loaded via `next/font/google` with `display: swap`; no layout shift (size-adjust handled by Next).

| Style | Class | Notes |
| --- | --- | --- |
| Display XL | `font-display text-5xl md:text-7xl lg:text-8xl uppercase` | Hero H1, tracking-tight |
| Display L | `font-display text-4xl md:text-5xl lg:text-6xl uppercase` | Section H2 |
| Eyebrow | `font-display uppercase tracking-[0.3em] text-xs text-ember-500` | Section kicker |
| Card title | `font-sans font-semibold text-lg` | H3 |
| Body | `text-steel-400 leading-relaxed` | Copy |
| Stat | `font-display text-5xl md:text-6xl` | Numbers |

Line length capped at ~65ch. Headings use `text-balance`; paragraphs use `text-pretty`.

## 4. Spacing & layout

- Section rhythm: `py-20 sm:py-24 lg:py-32`.
- Container: centered, max `1320px`, responsive gutters (1.25rem → 3rem).
- Grid gaps: `gap-6` cards, `gap-10/16` columns.
- Radii: `rounded-2xl` for cards, `rounded-full` for pills/buttons, `rounded-4xl` for feature panels.
- Borders: 1px `steel-800`; hover lifts to `steel-700` + ember tint.

## 5. Components

- **Button** — variants `primary` (ember gradient), `outline`, `ghost`, `light`. Sizes `sm|md|lg`. Animated arrow/icon, sheen sweep on hover, scale-down on press.
- **SectionHeading** — eyebrow + H2 + optional description, centered or left aligned.
- **Reveal** — Framer Motion scroll reveal (fade/up) with stagger; respects reduced motion.
- **SmartImage** — `next/image` wrapper with shared blur placeholder, skeleton shimmer, and graceful `onError` fallback to an ember→steel gradient (never a broken image).
- **Marquee** — infinite CSS ticker for keyword bands.
- **Counter** — GSAP + ScrollTrigger animated statistics.
- **GalleryLightbox** — filtered masonry, layout animations, keyboard nav.

## 6. Motion

Purposeful, fast, subtle. GPU-only properties (transform/opacity).

- **Entrance:** hero uses a GSAP timeline (masked line reveal + scale-in image). Duration 0.6–1s, `power3.out`.
- **Scroll reveal:** Framer Motion `whileInView`, `y: 24`, `opacity: 0→1`, 0.55s, stagger 0.08s.
- **Hover:** transforms 200–300ms `ease-out`; image zoom 1.06; card lift `-6px`.
- **Counters:** GSAP tween on ScrollTrigger enter, once.
- **Parallax:** GSAP `yPercent` on About media (subtle, ≤8%).
- **Durations never exceed 1.2s.** Reduced-motion disables transforms and autoplay.

## 7. Imagery

- Source: Unsplash / Pexels CDNs, all URLs pre-validated (HTTP 200/206).
- Always cropped via `fit=crop` with explicit dimensions; served through `next/image` (AVIF/WebP).
- Dark scrims + ember tint unify mixed photography into one palette.
- Categories: Strength, Conditioning, CrossTraining, Boxing, Yoga & Mobility, Coaches, Facility.

## 8. Accessibility & performance

- Semantic landmarks, `aria-label`s on icon buttons, visible focus states, keyboard-operable menus/lightbox/tabs.
- Contrast: body text ≥ 4.5:1 on dark surfaces.
- `next/image` lazy-loading below the fold, `priority` on hero, explicit aspect ratios to prevent CLS.
- No layout-blocking fonts; animations GPU-only; scroll listeners throttled/passive.

## 9. Site map

Nav → Hero → About → Stats → Programs → Trainers → Membership → Gallery → Schedule → Testimonials → Join CTA → Contact → Footer.
