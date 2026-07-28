# Page Override: AR Catalog (AVH Factory) — `/factory/ar-catalog`

**Inherits:** MASTER.md. Overrides below win.
**Layer:** Factory — Spatial UI + Dimensional Layering.

## Purpose
Service page: AR product catalogs for industrial clients — browse demo catalog items, view in AR.

## Overrides
- **Surface:** ink base; catalog item cards are `--glass-ink` panels (radius 24px) over a depth-lit backdrop. Elevation via the 4-level z/shadow scale — depth is the message.
- **3D viewer:** `<ARCatalogViewer>` R3F island, lazy per-item (loads on card open, not page load). `<model-viewer>`-style AR handoff: GLB (Android/WebXR) + USDZ (iOS Quick Look). QR fallback on desktop.
- **How-it-works steps:** numbered with kodak indices, connected by kodak hairline (this is most of the page's kodak budget).
- **Industrial teaser videos:** Cloudflare Stream, grayscale posters, muted autoplay loops allowed ≤8s only in cards, full player in modal.
- **Filtering:** category filter uses `<Link scroll={false}>` — no scroll-to-top jumps (Next.js DB rule).

## Sections (CMS: `arCatalogPage` global + `catalogItems` collection)
1. Hero — value statement + demo reel
2. How it works (3–4 steps)
3. Demo catalog grid (filterable by industry)
4. AR viewer modal (per item)
5. Industries served
6. CTA — inquiry (routes to `inquiries` with type `ar-catalog`)
