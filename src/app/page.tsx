import Link from "next/link";
import { gateway, siteSettings } from "@/content/site";

/** Brand gateway — split screen: FILM (start) | FACTORY (end). */
export default function GatewayPage() {
  const panels = [gateway.filmPanel, gateway.factoryPanel];
  return (
    <main className="flex min-h-dvh flex-col">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <span className="text-sm font-bold">{siteSettings.brandFa}</span>
        <span className="font-latin text-xs tracking-[0.2em] text-muted" dir="ltr">
          AVH — 7TH ART VOICE
        </span>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {panels.map((p, i) => (
          <Link
            key={p.href}
            href={p.href}
            className="group relative flex min-h-[40dvh] flex-1 items-end overflow-hidden transition-[flex-grow] duration-700 ease-[var(--ease-out)] hover:flex-[1.6] md:min-h-0"
          >
            <img
              src={p.poster}
              alt=""
              aria-hidden
              className="media-rest absolute inset-0 size-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="relative z-10 p-8 md:p-12">
              <div
                className="font-latin text-[clamp(3rem,8vw,7rem)] font-extrabold leading-none tracking-[var(--tracking-display-latin)]"
                dir="ltr"
              >
                {p.titleLatin}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="inline-block h-px w-10 bg-kodak" aria-hidden />
                <span className="text-lg font-bold">آوای هنر هفتم — {p.titleFa}</span>
              </div>
              <p className="mt-2 text-sm text-paper-70">{p.tagline}</p>
            </div>
            {i === 0 && (
              <span
                aria-hidden
                className="absolute inset-y-0 end-0 hidden w-px bg-kodak/60 md:block"
              />
            )}
          </Link>
        ))}
      </div>

      <footer className="border-t border-border px-6 py-4 text-center text-sm text-muted">
        {gateway.brandLine}
      </footer>
    </main>
  );
}
