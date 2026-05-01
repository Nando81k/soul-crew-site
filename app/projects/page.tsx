import { ProjectsGrid } from "@/components/site/projects-grid";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata = {
  title: "Projects",
  description:
    "Singles, EPs and projects from DANIEL DeGREE and the SOUL CREW collective.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs sm:tracking-[0.32em]">
              SOUL CREW · Discography
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[2.75rem] leading-[0.92] tracking-tight sm:mt-6 sm:text-6xl md:text-8xl">
              The catalog. <span className="text-muted-foreground">Out, coming and in the works.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:mt-8 sm:text-base md:text-lg">
              Singles and projects produced by DANIEL DeGREE with the SOUL CREW
              collective and friends — soulful production, sharpened pen.
            </p>
          </FadeIn>
        </div>
      </section>
      <ProjectsGrid variant="full" />
    </>
  );
}
