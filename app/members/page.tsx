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
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs sm:tracking-[0.32em]">
              SOUL CREW · The Crew
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[2.75rem] leading-[0.92] tracking-tight sm:mt-6 sm:text-6xl md:text-8xl">
              The collective. <span className="text-muted-foreground">An alliance of soulful artists.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:mt-8 sm:text-base md:text-lg">
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
