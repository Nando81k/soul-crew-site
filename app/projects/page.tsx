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
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              SOUL CREW · Discography
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[0.92] tracking-tight md:text-8xl">
              The catalog. <span className="text-muted-foreground">Out, coming and in the works.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
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
