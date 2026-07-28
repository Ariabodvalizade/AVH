# Page Override: About (shared) — `/about`

**Inherits:** MASTER.md. Overrides below win.
**Layer:** shared — this page IS the narrative bridge between the two sites.

## Purpose
Brand story: *from the Kodak darkroom to spatial computing.* The one page where Film's analog layer and Factory's spatial layer coexist by design.

## Overrides
- **Timeline is the spine:** vertical scroll timeline whose visual treatment *transitions* as eras progress — early eras: paper surfaces, grain 0.15, warm monochrome stills, polaroid frames → late eras: ink surfaces, grain 0, glass panels, depth/parallax. The design system itself tells the story; copy carries the details.
- **Era marker:** a single kodak progress hairline runs the full timeline (start→end, logical direction) — the page's primary kodak spend.
- **Team:** grayscale portraits, color on hover; name Persian + Latin transliteration (`dir="ltr"` span); no social icon rows unless real.
- **Manifesto:** display clamp type on paper, Persian-first; Latin brand terms inline LTR.
- **Motion:** ScrollTrigger scrubbed era transitions (background color-mix ink↔paper, grain opacity, blur radius all tweened on scroll). Reduced-motion: hard cuts between era sections, all content static and readable.

## Sections (CMS: `aboutPage` global + `team` collection)
1. Manifesto (paper)
2. Timeline (darkroom → digital → CGI → spatial eras; each: year, title, body, media)
3. The two houses (split panel: AVH FILM ↔ AVH FACTORY cross-links, mirroring the gateway)
4. Team grid
5. Values / how we work (short)
6. Contact CTA
