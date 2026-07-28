# design-sync notes — AVH

Seeded before the first sync. Facts here are verified against the repo, not guessed.

## Shape

- `shape: package` — there is no Storybook and no `*.stories.*` anywhere in the repo.
- The repo is a **Next.js 15 App Router app**, not a published library: there is no `dist/`.
  Components are TypeScript/React source under `src/components/`.
- Package manager: **npm** (`package-lock.json` → `npm ci`). Node 20+ (developed on 22).

## What is a design-system component vs. app chrome

Sync these — framework-free, no `next/*` imports:

| Path | Notes |
|---|---|
| `src/components/ui/Button.tsx` | `Button` + `buttonClasses()` recipe |
| `src/components/ui/Field.tsx` | `Field`, `Input`, `Textarea`, `Select`, `Checkbox` |
| `src/components/ui/Chip.tsx` | `Tag`, `FilterChip` |
| `src/components/ui/Surface.tsx` | `Card`, `GlassPanel`, `SectionHeading` |
| `src/components/ui/Feedback.tsx` | `Skeleton`, `EmptyState`, `Notice` |
| `src/components/ui/Modal.tsx` | native `<dialog>` |
| `src/components/ui/Accordion.tsx` | native `<details>` |
| `src/components/ui/NumberedList.tsx` | Persian numerals |
| `src/components/media/MediaFrame.tsx` | grayscale-at-rest media box |
| `src/components/media/ShowreelPlayer.tsx` | Cloudflare Stream, poster-first |
| `src/components/media/Grain.tsx` | film-stock overlay |
| `src/components/film/{WorkCard,Polaroid,FilmStrip}.tsx` | portfolio pieces |

Exclude — these import `next/link` and need a Next router at render time:

- `src/components/shared/ButtonLink.tsx` (app-level; the *look* lives in `buttonClasses()`)
- `src/components/shared/MobileMenu.tsx` (site chrome)
- `src/components/shared/ComingSoon.tsx` (placeholder, not a primitive)
- `src/components/film/WorkGrid.tsx` (page composition, not a primitive — `WorkCard` is)

`components/ui/**` was deliberately kept free of `next/*` so the compiled bundle renders anywhere.

## Styling

- **Tailwind v4, CSS-first.** No `tailwind.config.js`. The theme *is*
  `src/styles/tokens.css` (`@theme { … }`), imported by `src/app/globals.css`.
  Any standalone CSS build must run Tailwind over `src/**/*.tsx` with that file as the entry.
- Fonts are **self-hosted variable woff2** in `src/fonts/`, wired via `next/font/local` in
  `src/app/layout.tsx` (exposes `--font-vazir`, `--font-inter`). Outside Next, bind those two
  CSS variables to the same files — do **not** substitute a Google font. Persian rendering is
  the priority.
- **RTL is the default**, not an option: `<html lang="fa" dir="rtl">`. Components use logical
  properties only (`ms-*`, `me-*`, `ps-*`, `pe-*`, `border-s-*`). Preview any component inside
  an RTL container or the spacing will look wrong.

## Surface tokens (important for previews)

Components are surface-relative. On a dark (ink) ground the defaults apply; wrapping a subtree
in `data-surface="paper"` re-points `--color-border`, `--color-muted`, `--color-accent-text`
and `--color-error` so the same component stays legible on light ground. Preview cards for
`Field`, `Notice` and `NumberedList` are worth rendering on **both** grounds.

Reason it exists: kodak `#FFB800` as text on paper is 1.6:1 and is forbidden by the brand rules
(`design-system/avh/MASTER.md`) — the accent role becomes ink on paper instead.

## Brand rules that must survive the sync

Three colors only — ink `#0A0A0A`, paper `#F5F5F0`, kodak `#FFB800` (max 10% of a surface,
CTA/hover/indicator/hairline only). Every neutral is a `color-mix()` of ink and paper; there is
no fourth hue. `--color-error` is functional form feedback, not a brand color.

## Motion

`.reveal` elements start at `opacity: 0` and need `RevealObserver` (an IntersectionObserver) to
add `.is-in`. **A preview that renders `WorkCard`/`Polaroid` without that observer shows an
empty box.** Either mount the observer in the preview harness or strip the `reveal` class there.
Same for `.media-rest` with `data-reveal="in-view"`.
