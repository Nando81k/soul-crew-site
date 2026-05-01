import { bioParagraphs, bioPillars } from "@/content/bio";
import { FadeIn } from "@/components/motion/fade-in";

export function BioSection() {
  return (
    <section
      id="bio"
      className="relative border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          <div className="grid grid-cols-12 items-end gap-8 border-b border-border pb-10">
            <div className="col-span-12 md:col-span-5">
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                About — Bio
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight md:text-5xl">
                We stand <em className="not-italic text-muted-foreground">on three things.</em>
              </h2>
            </div>
            <ol className="col-span-12 grid grid-cols-1 gap-px bg-border md:col-span-7 md:grid-cols-3">
              {bioPillars.map((pillar, i) => (
                <li
                  key={pillar}
                  className="group flex flex-col gap-3 bg-background p-5 transition-colors hover:bg-foreground/3"
                >
                  <span className="font-display text-xs uppercase tracking-[0.28em] text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")} / {String(bioPillars.length).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg leading-tight md:text-xl">
                    {pillar}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 grid grid-cols-12 gap-x-10 gap-y-8">
            <p className="col-span-12 font-display text-2xl leading-snug tracking-tight text-foreground md:col-span-9 md:text-3xl">
              {bioParagraphs[0]}
            </p>
            <aside className="col-span-12 flex flex-col justify-end gap-2 border-l border-border pl-5 text-xs uppercase tracking-[0.22em] text-muted-foreground md:col-span-3">
              <span>Daniel DeGree</span>
              <span>Producer · Founder</span>
              <span>Christian Hip Hop</span>
            </aside>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 columns-1 gap-10 text-[15px] leading-relaxed text-foreground/85 md:columns-2 [&>p]:break-inside-avoid">
            {bioParagraphs.slice(1).map((paragraph, i) => (
              <p key={i} className="mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
