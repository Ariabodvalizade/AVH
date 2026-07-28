# Page Override: VVIP (AVH Film) — `/film/vvip`

**Inherits:** MASTER.md + film-home.md layer rules. Overrides below win.

## Purpose
Premium production tier for flagship clients — private, concierge-grade offering.
**Assumption (flagged):** modeled as a positioning + inquiry page, with an optional link-gated private screening gallery. Confirm if a full client login portal is wanted instead.

## Overrides
- **Tone:** the quietest page on the site — Exaggerated Minimalism at full strength: one statement per viewport, `--space-3xl` everywhere, almost no UI chrome. Grain reduced to 0.08.
- **Kodak discipline:** exactly three kodak moments on the whole page — the wordmark hairline, one inline emphasis in the manifesto, the inquiry CTA. Nothing else. Restraint *is* the luxury signal.
- **No pricing, no grids of cards** — offerings presented as a numbered editorial list (kodak Persian numerals, paper text on ink).
- **Private screenings:** unlisted routes `/film/vvip/s/[token]` — signed Cloudflare Stream URLs, `noindex`, expiring token. Not linked from nav.
- **Inquiry form:** name, company, contact, project outline, budget band (optional select). Routes to `inquiries` type `vvip`, flagged high-priority.

## Sections (CMS: `vvipPage` global)
1. Manifesto statement (single display line + short paragraph)
2. Offerings (numbered list: e.g. director-led TVC, full CGI, launch films)
3. Process (3 quiet steps)
4. Selected references (2–3 projects max, largest presentation on the site)
5. Private inquiry form
