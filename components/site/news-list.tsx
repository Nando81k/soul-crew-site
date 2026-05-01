import Link from "next/link";
import { news } from "@/content/news";
import { FadeIn } from "@/components/motion/fade-in";

export function NewsList() {
  return (
    <section
      id="news"
      className="border-y border-border bg-foreground text-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-background/20 pb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-background/70">
                On The Road
              </p>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
                News & appearances
              </h2>
            </div>
            <p className="max-w-sm text-sm text-background/70">
              Performances, releases and studio sessions — what just dropped and
              what's coming next.
            </p>
          </div>
        </FadeIn>

        <ul className="mt-8 divide-y divide-background/15">
          {news.map((item, i) => (
            <FadeIn key={item.slug} delay={(i % 6) * 0.04}>
              <li className="grid grid-cols-12 gap-4 py-6">
                <div className="col-span-12 md:col-span-2">
                  <p className="text-xs uppercase tracking-[0.28em] text-background/60">
                    {item.date}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-background/50">
                    {item.kind}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="font-display text-2xl leading-tight tracking-tight md:text-3xl">
                    {item.title}
                  </h3>
                  {item.location && (
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-background/60">
                      {item.location}
                    </p>
                  )}
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-background/80">
                    {item.body}
                  </p>
                </div>
                {item.link && (
                  <div className="col-span-12 md:col-span-3 md:text-right">
                    <Link
                      href={item.link.href}
                      className="inline-flex items-center gap-2 rounded-full border border-background/40 px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors hover:bg-background hover:text-foreground"
                    >
                      {item.link.label} →
                    </Link>
                  </div>
                )}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
