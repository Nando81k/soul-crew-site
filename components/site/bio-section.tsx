import { bioParagraphs, bioPillars } from "@/content/bio";
import { FadeIn } from "@/components/motion/fade-in";

export function BioSection() {
  return (
    <section
      id="bio"
      className="relative border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
        <FadeIn>
          <div className="grid grid-cols-12 items-end gap-6 border-b border-border pb-8 sm:gap-8 sm:pb-10">
            <div className="col-span-12 md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs sm:tracking-[0.32em]">
                About — Bio
              </p>
              <h2 className="mt-3 font-display text-3xl leading-[0.95] tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
                We stand <em className="not-italic text-muted-foreground">on three things.</em>
              </h2>
            </div>
            <ol className="col-span-12 grid grid-cols-1 gap-px bg-border md:col-span-7 md:grid-cols-3">
              {bioPillars.map((pillar, i) => (
                <li
                  key={pillar}
                  className="group flex flex-col gap-2 bg-background p-4 transition-colors hover:bg-foreground/3 sm:gap-3 sm:p-5"
                >
                  <span className="font-display text-[11px] uppercase tracking-[0.24em] text-muted-foreground tabular-nums sm:text-xs sm:tracking-[0.28em]">
                    {String(i + 1).padStart(2, "0")} / {String(bioPillars.length).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base leading-tight sm:text-lg md:text-xl">
                    {pillar}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 grid grid-cols-12 gap-x-8 gap-y-6 sm:mt-12 sm:gap-x-10 sm:gap-y-8">
            <p className="col-span-12 font-display text-xl leading-snug tracking-tight text-foreground sm:text-2xl md:col-span-9 md:text-3xl">
              {bioParagraphs[0]}
            </p>
            <aside className="col-span-12 flex flex-col gap-1.5 border-l border-border pl-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:gap-2 sm:pl-5 sm:text-xs sm:tracking-[0.22em] md:col-span-3 md:justify-end">
              <span>Daniel DeGree</span>
              <span>Producer · Founder</span>
              <span>Christian Hip Hop</span>
            </aside>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 columns-1 gap-8 text-[14px] leading-relaxed text-foreground/85 sm:mt-10 sm:gap-10 sm:text-[15px] md:columns-2 [&>p]:break-inside-avoid">
            {bioParagraphs.slice(1).map((paragraph, i) => (
              <p key={i} className="mb-5 last:mb-0 sm:mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
