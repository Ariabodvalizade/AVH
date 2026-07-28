import Link from "next/link";
import SmoothScroll from "@/components/motion/SmoothScroll";
import RevealObserver from "@/components/motion/RevealObserver";
import Cursor from "@/components/motion/Cursor";
import { siteSettings } from "@/content/site";

export default function FilmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-layer="film" className="grain">
      <SmoothScroll />
      <RevealObserver />
      <Cursor />

      <a
        href="#main"
        className="fixed start-4 top-4 z-[var(--z-modal)] -translate-y-24 bg-kodak px-4 py-2 text-sm font-bold text-ink transition-transform focus:translate-y-0"
      >
        پرش به محتوا
      </a>

      <header className="glass sticky top-0 z-[var(--z-nav)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/film" className="flex items-baseline gap-2 font-bold">
            <span>آوای هنر هفتم</span>
            <span className="font-latin text-xs tracking-[0.2em] text-kodak" dir="ltr">
              FILM
            </span>
          </Link>
          <ul className="hidden items-center gap-6 text-sm md:flex">
            {siteSettings.filmNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-paper-70 transition-colors duration-[var(--duration-fast)] hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/film#contact"
            className="border border-kodak px-4 py-1.5 text-sm font-bold text-kodak transition-colors duration-[var(--duration-fast)] hover:bg-kodak hover:text-ink"
            style={{ borderRadius: "var(--radius-control)" }}
          >
            تماس
          </Link>
        </nav>
      </header>

      <main id="main">{children}</main>

      <footer id="contact" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-h3 font-extrabold" style={{ fontSize: "var(--text-h3)" }}>
              پروژه‌ای در ذهن دارید؟
            </p>
            <p className="mt-2 max-w-[50ch] text-paper-70">
              از یک تیزر ۱۵ثانیه‌ای تا کمپین کامل — بریف بدهید تا تریتمنت پیشنهادی ما را ببینید.
            </p>
            <a
              href={`mailto:${siteSettings.footer.email}`}
              className="mt-6 inline-block bg-kodak px-8 py-3 font-bold text-ink transition-transform duration-[var(--duration-fast)] hover:-translate-y-px"
              style={{ borderRadius: "var(--radius-control)" }}
            >
              بریف بدهید
            </a>
          </div>
          <div className="text-sm text-paper-70">
            <p>{siteSettings.footer.city}</p>
            <p className="mt-1 font-latin" dir="ltr">
              {siteSettings.footer.email}
            </p>
            <p className="mt-1">{siteSettings.footer.phone}</p>
            <p className="mt-6 text-muted">{siteSettings.brandFa} © ۱۴۰۴</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
