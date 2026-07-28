# Page Override: Film Home (AVH Film) — `/film`

**Inherits:** MASTER.md. Overrides below win.
**Layer:** Film — Vintage Analog over Exaggerated Minimalism. Pattern: Portfolio Grid (DB pick).

## Purpose
The revenue page. Showreel first, work grid second, everything else third.

## Overrides
- **Surface:** ink hero + work grid; About/Philosophy strip flips to paper; footer back to ink. Grain overlay `--grain-opacity: 0.12` sitewide on this page (SVG turbulence, one fixed layer, `pointer-events: none`).
- **Showreel hero:** full-bleed Cloudflare Stream loop, muted, grayscale filter; center holds the AVH FILM wordmark in display clamp type. Sound-on toggle = kodak indicator. Poster required; no CLS.
- **Work grid:** masonry/uneven editorial grid. Cards: grayscale still → color + slow zoom (media scales inside `overflow: hidden` frame — frame never moves). Kodak index numbers `۰۱ ۰۲ ۰۳` on hover. Card CTA on hover + footer contact (DB pattern).
- **Cursor:** morphs to a kodak "پخش / PLAY" ring over any video card (pointer-fine only).
- **Light leaks:** allowed only as section transitions, ≤0.15 opacity warm gradient, disabled under reduced-motion. Never on text.
- **Anti-patterns (DB):** no corporate minimalism (the work must feel loud), no hidden portfolio (grid ≤1 scroll from top).

## Sections (CMS: `filmHome` global + `projects` collection)
1. Showreel hero
2. Selected work grid (featured `projects`, filter by category, `scroll={false}`)
3. Services strip (film / CGI / 3D motion)
4. Clients (logo wall — grayscale logos, color on hover)
5. About/Philosophy teaser (paper surface, links to /about)
6. Contact CTA (footer)
