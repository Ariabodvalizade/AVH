import Link from "next/link";
import SmoothScroll from "@/components/motion/SmoothScroll";
import RevealObserver from "@/components/motion/RevealObserver";
import Cursor from "@/components/motion/Cursor";
import MobileMenu from "@/components/shared/MobileMenu";
import { ButtonLink } from "@/components/ui/Button";
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
          <div className="flex items-center gap-2">
            <ButtonLink href="/film#contact" variant="hairline" size="sm" className="hidden md:inline-flex">
              تماس
            </ButtonLink>
            <MobileMenu items={siteSettings.filmNav} />
          </div>
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
            <ButtonLink href={`mailto:${siteSettings.footer.email}`} size="lg" className="mt-6">
              بریف بدهید
            </ButtonLink>
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
