# AVH — Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/avh/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** AVH — Ava-ye Honar-e Haftom (آوای هنر هفتم)
**Sites:** AVH FACTORY (product & technology) · AVH FILM (advertising film / CGI / 3D motion)
**Language:** fa-IR, RTL default. EN/LTR mirror later.
**Narrative thread:** *From the Kodak darkroom to spatial computing.*
**Base style:** Exaggerated Minimalism (shared skeleton)
**Film layer:** Vintage Analog / Retro Film · **Factory layer:** Spatial UI + Dimensional Layering
**Motion doctrine:** Motion-Driven (GSAP ScrollTrigger + Lenis) · Interactive Cursor (desktop pointer-fine only)

---

## 1. Color — LOCKED. Do not let any generator or search result replace these.

| Role | Hex | Budget | CSS Variable |
|------|-----|--------|--------------|
| Ink (primary surface) | `#0A0A0A` | ~60% of surface | `--color-ink` |
| Paper (secondary surface) | `#F5F5F0` | ~30% | `--color-paper` |
| Kodak (accent) | `#FFB800` | **max 10%** — CTAs, hover, active indicators, hairlines only | `--color-kodak` |

**Hard rules:**
- ❌ Never use kodak yellow as a large background or section fill.
- ❌ Never introduce a 4th brand color. Neutrals are opacity/`color-mix()` tints of ink and paper only.
- ❌ Kodak as **text on paper is forbidden** (1.6:1 — fails WCAG).
- ✅ Kodak text/icons on ink: 11.4:1 ✓. Ink text on kodak fill (CTA buttons): 12.3:1 ✓. Ink on paper: 18:1 ✓.
- `--color-destructive: #D92D20` is a **functional form-error color only** — never on marketing surfaces, never decorative. It is not a brand color.

## 2. Typography — LOCKED

- **Persian (primary):** `YekanBakh` (preferred) or `IRANSansX` — **self-hosted variable woff2** via `next/font/local`. Never Google Fonts for Persian.
- **Latin:** geometric grotesk — `Neue Montreal` → `Suisse Intl` → fallback `Inter` (self-host if licensed, otherwise Inter variable).
- Ignore all Google-Fonts pairings from the skill database. Persian rendering quality is the priority.
- Persian body line-height: **1.8** (Latin: 1.5). Base size 16px minimum.
- Display type follows Exaggerated Minimalism: `clamp(2.5rem, 9vw, 10rem)`, weight 800–900, tight tracking **on Latin only** (never negative letter-spacing on Persian).
- Numbers in specs/pricing: Persian digits in fa locale (`YekanBakhFaNum` cut), tabular figures.

## 3. Imagery & Video — LOCKED

- Default state of **all** imagery and video posters: `filter: grayscale(1)`.
- Color reveals only on hover (pointer-fine) or on scroll into view (`.in-view` via ScrollTrigger). Transition 500–700ms ease-out. Respect `prefers-reduced-motion`: reveal instantly, no transition.
- Film pages add grain overlay (`--grain-opacity: 0.12`); Factory pages max `0.05` or none.
- Showreels: Cloudflare Stream HLS via a single `<ShowreelPlayer>` wrapper. Never raw `<video src="*.mp4">`.

## 4. Spacing (marketing density — spacious)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2xs` | 4px | hairline gaps |
| `--space-xs` | 8px | icon gaps |
| `--space-sm` | 16px | standard padding |
| `--space-md` | 24px | component padding |
| `--space-lg` | 48px | block gaps |
| `--space-xl` | 96px | section padding |
| `--space-2xl` | 128px | section margins |
| `--space-3xl` | 192px | hero / statement breathing room |

## 5. Elevation, Radius, Z-index

- Shadows (on paper surfaces): `--shadow-sm/md/lg/xl` (4-level scale, see tokens.css). On ink surfaces prefer **hairlines** (`1px solid` ink/paper mixes) over shadows.
- Radius: Film surfaces `--radius-none: 0` (editorial, filmic). Factory glass panels `--radius-glass: 24px`. Buttons/inputs `--radius-control: 2px` sitewide.
- Z-index scale: `0 / 10 (sticky) / 20 (nav) / 40 (overlay) / 100 (modal) / 1000 (cursor)`.

## 6. Motion

- Micro-interactions 150–300ms; content reveals 300–400ms; cinematic hero reveals up to 800ms.
- Easing: enter `--ease-out` (expo-out), exit `--ease-in`, exits ~65% of enter duration.
- Transform/opacity only. Never animate width/height/top/left. Stagger lists 40ms/item.
- Lenis smooth scroll + GSAP ScrollTrigger; one `gsap.matchMedia()` guard for `prefers-reduced-motion` kills all non-essential motion.
- Custom cursor: `@media (pointer: fine)` only, `mix-blend-mode: difference`, magnetic pull ≤100px, fully absent on touch.

## 7. RTL

- `<html lang="fa" dir="rtl">` default. Use **logical properties only** (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start/end`) — never `left/right` paddings/margins in components.
- Directional motion mirrors: "forward" slides travel start→end (visually right→left in RTL).
- Latin inline runs inside Persian text: wrap in `<span dir="ltr">` where needed (specs, code, brand names).

## 8. Component notes

- **Buttons:** primary = kodak fill + ink text, radius 2px, hover lifts 1px + darkens fill 6%; secondary = 1px paper/ink hairline, transparent fill, hover shows kodak hairline.
- **Inputs:** 16px text (prevents iOS zoom), visible label above (never placeholder-only), error below field in `--color-destructive`, focus ring = 2px kodak.
- **Cards (work grid):** grayscale media, ink scrim gradient, title in paper; hover = color reveal + kodak index number; no layout-shifting transforms (scale media inside overflow-hidden frame).
- **Modals:** ink scrim 60% + blur(8px), paper or ink panel per site layer.

## 9. Anti-Patterns (Do NOT Use)

- ❌ Kodak yellow backgrounds or any 4th hue (incl. AI-purple gradients)
- ❌ Google-Fonts Persian, or Latin pairings from the DB overriding the locked grotesk
- ❌ Color-first imagery (grayscale is the default state, always)
- ❌ Emojis as icons — SVG only (Lucide, stroke 1.5px, one family)
- ❌ Missing `cursor-pointer`; invisible focus states; instant state changes
- ❌ Layout-shifting hovers; animating layout properties; scroll-jacking without escape
- ❌ Neo-brutalist stickers/borders, neon glow, RGB-split glitch (off-brand)
- ❌ Heavy text walls on portfolio pages; hidden/buried work

## 10. Pre-Delivery Checklist

- [ ] Ink/paper/kodak only; kodak ≤10% of viewport; contrast pairs from §1 respected
- [ ] Persian text renders in YekanBakh/IRANSansX, line-height 1.8, no clipped diacritics
- [ ] RTL verified at 375 / 768 / 1024 / 1440 — no horizontal scroll, no mirrored-icon mistakes
- [ ] All media starts grayscale; reveal works; `prefers-reduced-motion` respected
- [ ] Focus visible, keyboard nav, 44×44 targets, skip-link present
- [ ] CLS < 0.1 — aspect-ratio reserved for every image/video/canvas
- [ ] Three.js only on glasses/ar-catalog via dynamic import — verify with bundle analyzer
- [ ] Canvas has `role="img"` + descriptive `aria-label`
