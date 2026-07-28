# Page Override: BTS (AVH Film) — `/film/bts`

**Inherits:** MASTER.md + film-home.md layer rules. Overrides below win.

## Purpose
Behind-the-scenes photo/video essays — the human, analog side of the narrative. This page leans hardest into the Kodak-darkroom end.

## Overrides
- **Analog dial turned up:** grain `--grain-opacity: 0.15` (page max), polaroid-style paper frames on stills (paper border + caption), slight random rotation (−2°/+2°, CSS only, static — no jitter animation).
- **Imagery exception:** BTS stills may present as *warm-toned monochrome* (sepia-leaning grayscale via `filter: grayscale(1) sepia(0.25)`) — still no full color at rest; color reveals on hover/in-view as sitewide.
- **Layout:** editorial photo-essay flow — alternating full-bleed and contained rows, generous `--space-3xl` breathing room, captions in small Persian text on paper tags.
- **Motion:** slow fade-ins (600ms), parallax ≤2 layers and subtle; this page should feel printed, not animated.
- **Each essay links back to its parent project** (`projects` relation) with a kodak arrow-link.

## Sections (CMS: `btsPage` global; entries from `projects.bts` groups)
1. Intro statement (paper surface — darkroom manifesto line)
2. Essay stream (per-project BTS sets: stills + clips + captions)
3. Film-strip divider motif between essays (ink + kodak hairlines)
4. CTA — see the finished films (→ /film work grid)
