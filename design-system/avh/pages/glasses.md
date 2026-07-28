# Page Override: Glasses (AVH Factory) — `/factory/glasses`

**Inherits:** MASTER.md. Overrides below win.
**Layer:** Factory — Spatial UI + Dimensional Layering + contained 3D Hyperrealism.

## Purpose
AR/VR glasses product launch. Scrollytelling spec reveal + waitlist capture (Waitlist pattern module from DB, minus fake-urgency countdown).

## Overrides
- **Surface:** ink-only page (100% ink; paper appears only inside spec sheet section). Grain: none.
- **3D:** R3F `<GlassesScene>` island — `next/dynamic`, `ssr: false`, loaded only past the hero or on intersection. Draco/meshopt-compressed GLB. `antialias: true` at construction, `dpr` capped at 2, `frameloop="demand"` when idle. Reserve exact canvas aspect (CLS 0). Canvas `role="img"` + aria-label describing the glasses.
- **Scrollytelling:** ScrollTrigger pin + scrub drives camera/model rotation through feature sections. Every pinned scene must have a static grayscale poster fallback (reduced-motion + touch low-power).
- **Glass chrome:** sticky spec-nav uses `--glass-ink` (blur 40px) — the only heavy blur allowed on the page.
- **Kodak budget here:** waitlist CTA, active spec-nav indicator, measurement hairlines on the exploded-view diagram. Nothing else.
- **Waitlist form:** email + consent only. Success state in paper on ink. No countdown timers.

## Sections (CMS: `glassesPage` global)
1. Hero — oversized Persian display headline, model teaser (video poster grayscale → subtle color)
2. 3D scrollytelling feature blocks (pinned scenes)
3. Spec sheet (paper surface, tabular Persian digits)
4. Gallery (grayscale → color in-view)
5. Waitlist capture
6. FAQ
