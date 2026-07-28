# Page Override: Vertical (AVH Film) — `/film/vertical`

**Inherits:** MASTER.md + film-home.md layer rules. Overrides below win.

## Purpose
9:16 social/vertical production work (reels, TVC cutdowns, social campaigns).

## Overrides
- **Grid:** phone-frame cards, strict `aspect-ratio: 9/16`, 3-up desktop / 2-up tablet / snap-scroll 1.2-up mobile (vertical page is the one sanctioned horizontal snap carousel on mobile — with visible affordance and full keyboard support).
- **Playback:** hover/in-view preview loops ≤6s, muted, grayscale→color; tap/click opens full 9:16 player (Cloudflare Stream) in an ink modal sized to viewport height, not width.
- **Data:** `projects` where `format = vertical` — no separate collection.
- **Grain:** 0.12 as film-home. Kodak: active card indicator + platform tags only.
- **Perf:** max 2 previews playing simultaneously; pause all off-screen (IntersectionObserver). Posters mandatory.

## Sections (CMS: `verticalPage` global)
1. Statement hero (short — one Persian display line)
2. Vertical reel grid
3. Platform/process note (paper strip)
4. CTA — brief us (routes to `inquiries` type `vertical`)
