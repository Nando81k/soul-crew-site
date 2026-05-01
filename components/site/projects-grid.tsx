import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { PlayButton } from "@/components/site/play-button";

type ProjectsGridProps = {
  variant?: "preview" | "full";
  limit?: number;
};

export function ProjectsGrid({ variant = "full", limit }: ProjectsGridProps) {
  const list: Project[] = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      id="projects"
      className={
        variant === "preview"
          ? "mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 md:py-20"
          : "mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12"
      }
    >
      <FadeIn>
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5 sm:gap-6 sm:pb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs sm:tracking-[0.32em]">
              Discography
            </p>
            <h2 className="mt-2 font-display text-4xl leading-[0.95] tracking-tight sm:mt-3 sm:text-5xl md:text-6xl">
              {variant === "preview" ? "New & Coming" : "All projects"}
            </h2>
          </div>
          {variant === "preview" && (
            <Link
              href="/projects"
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              View full discography →
            </Link>
          )}
        </div>
      </FadeIn>

      <div className="mt-8 divide-y divide-border border-b border-border">
        {list.map((project, i) => (
          <FadeIn key={project.slug} delay={(i % 6) * 0.04}>
            <article className="group grid grid-cols-12 items-start gap-4 py-6 transition-colors hover:bg-foreground/2 sm:gap-6 sm:py-7">
              <div className="col-span-12 flex items-center justify-between gap-4 md:col-span-3 md:justify-start">
                <div className="flex items-center gap-3 sm:gap-4">
                  {project.previewUrl ? (
                    <PlayButton
                      slug={project.slug}
                      src={project.previewUrl}
                      title={project.title}
                    />
                  ) : (
                    <span className="flex size-11 items-center justify-center rounded-full border border-dashed border-border text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:size-12">
                      Soon
                    </span>
                  )}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-lg text-muted-foreground tabular-nums sm:text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Badge
                      variant="outline"
                      className="rounded-full border-border text-[10px] uppercase tracking-[0.18em]"
                    >
                      {project.type}
                    </Badge>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:hidden">
                  {project.status}
                </span>
              </div>
              <div className="col-span-12 md:col-span-6">
                <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
                  {project.artist}
                  {project.features && project.features.length > 0 && (
                    <> · feat. {project.features.join(", ")}</>
                  )}
                </p>
                {project.description && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:mt-4">
                    {project.description}
                  </p>
                )}
              </div>
              <div className="col-span-12 flex flex-row flex-wrap items-start gap-2 md:col-span-3 md:flex-col md:items-end md:gap-3">
                <span className="hidden text-xs uppercase tracking-[0.22em] text-muted-foreground md:inline">
                  {project.status}
                </span>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {project.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
