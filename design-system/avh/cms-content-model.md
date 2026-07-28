# AVH — Payload CMS Content Model

Payload 3 (embedded in the same Next.js app, `/admin`).
**Localization:** `locales: ['fa', 'en']`, `defaultLocale: 'fa'`, `fallback: true`.
Every field marked **(L)** is `localized: true`. No hardcoded copy anywhere in components.
**Access:** public `read` on content; `create`-only public access on form collections; everything else admin-only.

---

## Reusable field groups

### `seo` (group — on every global/collection with a URL)
| Field | Type | Notes |
|---|---|---|
| title | text (L) | ≤60 chars |
| description | textarea (L) | ≤160 chars |
| ogImage | upload → media | 1200×630 |
| noIndex | checkbox | default false |

### `videoAsset` (group — Cloudflare Stream only, never raw mp4)
| Field | Type | Notes |
|---|---|---|
| cfUid | text (required) | Cloudflare Stream video UID |
| poster | upload → media (required) | grayscale-at-rest handled by frontend |
| aspect | select | `16:9` \| `9:16` \| `1:1` \| `2.39:1` |
| captions | upload (vtt) | optional, per-locale array |
| signed | checkbox | default false; true = signed URLs (VVIP screenings) |

### `cta` (group)
| Field | Type |
|---|---|
| label | text (L) |
| href | text |
| style | select: `kodak` \| `hairline` |

---

## Collections

### 1. `media` (upload)
alt **(L, required)** · caption (L) · credit · focalPoint. Image sizes: thumb/card/full/og (WebP/AVIF).

### 2. `projects` — the portfolio spine (Film + Factory case studies)
| Field | Type | Notes |
|---|---|---|
| title | text (L, required) | |
| slug | text (unique) | from EN title |
| site | select | `film` \| `factory` |
| formats | select (hasMany) | `film` \| `cgi` \| `3d-motion` \| `vertical` \| `ar` |
| categories | rel → categories (hasMany) | |
| client | rel → clients | |
| year | number | |
| showreel | videoAsset | main film |
| poster | upload → media (required) | grid still |
| gallery | array { media, caption (L) } | |
| body | richText (L) | case study |
| credits | array { role (L), names } | |
| bts | group: { enabled, intro (L), items array { media \| videoAsset, caption (L) } } | feeds /film/bts |
| featured | checkbox + featuredOrder number | film-home grid |

### 3. `catalogItems` — AR catalog demo objects
title (L) · slug · industry rel → categories · description (L) · poster → media · **modelGlb** (upload, draco/meshopt) · **modelUsdz** (upload, iOS Quick Look) · teaser videoAsset · specs array { label (L), value (L) } · order.

### 4. `clients`
name (L) · logo (SVG upload) · site select `film`|`factory`|`both` · url · order.

### 5. `team`
name (L) · nameLatin (text, rendered `dir="ltr"`) · role (L) · portrait → media · bio (L) · order.

### 6. `posts` — blog
title (L) · slug · house select `film`|`factory`|`studio` · category rel · cover → media · excerpt (L) · body richText (L, embeds: media, videoAsset, pull-quote, code[ltr]) · author rel → team · publishedAt · readingTime (auto) · related rel → posts · seo.

### 7. `categories`
label (L) · slug · scope select `projects`|`posts`|`industries`.

### 8. `waitlistSignups` (public create only)
email (required, unique) · name · locale · source (default `glasses`) · consent checkbox (required) · createdAt.

### 9. `inquiries` (public create only)
type select `general`|`film`|`vertical`|`ar-catalog`|`vvip` · name · company · email · phone · message (textarea) · budgetBand select (optional) · status select `new`|`in-review`|`closed` (admin) · priority (auto: vvip → high).

### 10. `screenings` — VVIP private links
title · project rel → projects · video videoAsset (signed: true) · token (auto, unique) · expiresAt · allowedNote (admin memo). Renders at `/film/vvip/s/[token]`, noIndex.

---

## Globals (one per page + settings)

### `siteSettings`
gatewayHeadline (L) · factoryNav / filmNav / sharedNav: array { label (L), href } · footer: { addresses (L), phones, emails, socials array } · defaultSeo · announcement (L, optional).

### `gateway` — `/`
factoryPanel { title (L), tagline (L), media, cta } · filmPanel { same } · brandLine (L — the darkroom→spatial line).

### `filmHome` — `/film`
showreel videoAsset · headline (L) · soundToggleLabels (L) · featuredProjects rel (ordered) · services array { title (L), desc (L), icon } · clients rel (hasMany) · philosophyTeaser { text (L), cta } · contactCta cta · seo.

### `factoryHome` — `/factory`
hero { headline (L), sub (L), media } · pillars array { title (L), desc (L), href } (glasses / ar-catalog) · featuredProjects rel (site=factory) · cta · seo.

### `glassesPage` — `/factory/glasses`
hero { headline (L), sub (L), teaser videoAsset } · model3d { glb upload, usdz upload, cameraPresets json } · featureSections array { eyebrow (L), headline (L), body (L), media \| sceneAnchor (text — scrollytelling camera key) } · specs array { group (L), rows array { label (L), value (L) } } · gallery array → media · waitlist { enabled, headline (L), success (L), consentText (L) } · faq array { q (L), a (L) } · seo.

### `arCatalogPage` — `/factory/ar-catalog`
hero { headline (L), sub (L), demoReel videoAsset } · steps array { title (L), body (L) } · industries rel → categories · featuredItems rel → catalogItems · inquiryCta cta · seo.

### `verticalPage` — `/film/vertical`
headline (L) · intro (L) · reels rel → projects (filter format=vertical, ordered) · processNote (L) · cta · seo.

### `btsPage` — `/film/bts`
manifesto (L) · featuredEssays rel → projects (where bts.enabled) · outroCta cta · seo.

### `vvipPage` — `/film/vvip`
manifesto { line (L), paragraph (L) } · offerings array { title (L), desc (L), deliverables array (L) } · process array { step (L) } · references rel → projects (max 3) · form { intro (L), budgetBands array, success (L) } · seo.

### `aboutPage` — `/about`
manifesto (L) · timeline array { era select `darkroom`|`digital`|`cgi`|`spatial`, year, title (L), body (L), media } · housesSplit { filmText (L), factoryText (L) } · values array { title (L), body (L) } · contactCta · seo.

### `blogPage` — `/blog`
title (L) · description (L) · featuredPost rel → posts · seo.
