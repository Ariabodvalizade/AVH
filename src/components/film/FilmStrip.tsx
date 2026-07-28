/**
 * Perforation motif used to separate BTS essays. Static — the page's rhythm
 * comes from spacing and print texture, not motion.
 */
export default function FilmStrip() {
  return (
    <div className="flex items-center gap-4 py-16" aria-hidden>
      <span className="h-px flex-1 bg-border" />
      <span className="flex gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-3 w-2 border border-kodak/50" />
        ))}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
