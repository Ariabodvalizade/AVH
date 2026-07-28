# AVH — آوای هنر هفتم

دو سایت هم‌خانواده در یک کدبیس:

- **AVH FILM** — فیلم تبلیغاتی، CGI، موشن سه‌بعدی → `/film`
- **AVH FACTORY** — محصول و فناوری AR/VR → `/factory`

زبان: فارسی (fa-IR)، RTL پیش‌فرض. نسخهٔ انگلیسی/LTR بعداً اضافه می‌شود.

---

## اجرا

نیازمندی: **Node.js 20 یا بالاتر** (توسعه با ۲۲ انجام شده).

```bash
npm install

npm run dev      # سرور توسعه → http://localhost:3000
npm run build    # بیلد پروداکشن
npm run start    # اجرای بیلد → http://localhost:3000
```

برای اجرای بیلد روی پورت دیگر: `npm run start -- -p 3100`

---

## وضعیت فعلی

| مسیر | وضعیت |
|---|---|
| `/` | دروازهٔ برند (اسپلیت‌اسکرین فیلم / فکتوری) — آماده |
| `/film` | خانهٔ فیلم — آماده |
| `/film/vertical` | تولید عمودی ۹:۱۶ — آماده |
| `/film/bts` · `/film/vvip` · `/about` · `/blog` · `/factory` | صفحهٔ «در حال ساخت» |

## ساختار

```
src/
├─ app/                  # روت‌های App Router
│  ├─ layout.tsx         # <html lang="fa" dir="rtl"> + فونت‌های محلی
│  ├─ page.tsx           # دروازهٔ برند
│  └─ film/              # لایهٔ فیلم (گرین، ناوبری، فوتر)
├─ components/
│  ├─ motion/            # SmoothScroll (Lenis) · RevealObserver · Cursor
│  ├─ media/             # MediaFrame — سیاه‌وسفید در سکون، رنگ با reveal
│  ├─ film/              # WorkGrid
│  └─ shared/
├─ content/              # داده‌های استاب، هم‌شکلِ مدل Payload CMS
├─ fonts/                # وریبل woff2 (self-hosted)
└─ styles/tokens.css     # توکن‌های قفل‌شدهٔ برند
```

## سیستم طراحی

مرجع کامل در `design-system/avh/`:

- `MASTER.md` — قواعد سراسری و توکن‌های قفل‌شده
- `pages/*.md` — override به‌ازای هر صفحه
- `wireframes.html` — وایرفریم هر هشت صفحه
- `cms-content-model.md` — مدل محتوای Payload

**رنگ‌ها قفل‌اند:** ink `#0A0A0A` (۶۰٪) · paper `#F5F5F0` (۳۰٪) · kodak `#FFB800` (حداکثر ۱۰٪ — فقط CTA، hover، ایندیکیتور، خط مو).
هرگز زرد به‌عنوان پس‌زمینهٔ بزرگ، و هرگز رنگ چهارم.

## کارهای باقی‌مانده

- فونت فارسی: فعلاً **Vazirmatn**؛ با رسیدن فایل لایسنس‌دار **YekanBakh** فقط `src/fonts/` عوض می‌شود.
- پوسترها SVG موقتی‌اند تا نمونه‌کار واقعی برسد.
- ویدیو: `<ShowreelPlayer>` روی Cloudflare Stream (HLS) — هنوز وصل نشده.
- CMS: Payload، طبق `cms-content-model.md`.
- منوی موبایل (همبرگری) برای لایهٔ فیلم.
