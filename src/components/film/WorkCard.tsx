import MediaFrame from "@/components/media/MediaFrame";
import { faDigits } from "@/lib/cn";
import type { Project } from "@/content/film";

/**
 * Portfolio card. Media scales inside a fixed frame so the layout never moves;
 * grayscale lifts on hover and the kodak index number fades in with it.
 */
export default function WorkCard({
  project,
  index,
  aspect,
}: {
  project: Project;
  index: number;
  aspect?: string;
}) {
  return (
    <article className="group reveal cursor-pointer" data-cursor="play">
      <MediaFrame
        src={project.poster}
        alt={`نمای فیلم ${project.title}`}
        aspect={aspect ?? (project.tall ? "4/5" : "16/10")}
        reveal="hover"
        imgClassName="transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:scale-105"
      />
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-bold">{project.title}</h3>
          <p className="text-sm text-paper-40">
            {project.client} · {project.year}
          </p>
        </div>
        <span
          aria-hidden
          className="text-sm font-bold tabular-nums text-kodak opacity-0 transition-opacity duration-[var(--duration-base)] group-hover:opacity-100"
        >
          {faDigits(String(index + 1).padStart(2, "0"))}
        </span>
      </div>
    </article>
  );
}
