import { MembersGrid } from "@/components/site/members-grid";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata = {
  title: "Members",
  description:
    "MCs, vocalists and producers of the SOUL CREW collective — across Atlanta, Florida, New York, Detroit, Ohio and California.",
};

export default function MembersPage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-16">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              SOUL CREW · The Crew
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[0.92] tracking-tight md:text-8xl">
              The collective. <span className="text-muted-foreground">An alliance of soulful artists.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
              MCs, vocalists and producers from across the country, united in the
              mission to keep their soul, stay soulful, and win souls for Jesus
              Christ.
            </p>
          </FadeIn>
        </div>
      </section>
      <MembersGrid variant="full" />
    </>
  );
}
