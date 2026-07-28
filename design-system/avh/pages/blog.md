# Page Override: Blog (shared) — `/blog`, `/blog/[slug]`

**Inherits:** MASTER.md. Overrides below win.
**Layer:** shared — editorial, reading-first. The calmest treatment in the system.

## Purpose
Notes from both houses: production breakdowns, CGI/AR tech posts, industry commentary.

## Overrides
- **Reading surface:** article body on **paper** (long-form Persian reads better dark-on-light). Index page may stay ink. Grain: none. Cursor: default system cursor on article bodies — never interfere with text selection.
- **Measure:** Persian body 16–18px, line-height 1.8, max measure ~60ch equivalent; headings in display grotesk/Yekan black but scaled down (clamp max 3.5rem — no 10rem heads inside articles).
- **Media in articles:** grayscale-at-rest rule applies, reveal on in-view; videos via `<ShowreelPlayer>` embeds; code blocks LTR with `dir="ltr"`.
- **Cards on index:** cover (grayscale→color), category tag (kodak hairline chip), Persian date (Persian digits), reading time. No masonry — clean 2-col editorial list.
- **Kodak:** links + category chips + blockquote hairline. That's all.
- **Motion:** fade-in only (300ms). No pinning, no parallax — CLS 0 and instant readability win here.

## Sections (CMS: `posts` collection + `blogPage` global)
1. Index: featured post + chronological list, category filter (`scroll={false}`)
2. Article: title → meta → cover → rich body (headings, images, video embeds, pull-quotes) → related posts (same category) → CTA back to relevant site (film/factory by post tag)
