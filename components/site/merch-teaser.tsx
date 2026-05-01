import Link from "next/link";
import { merch } from "@/content/merch";
import { FadeIn } from "@/components/motion/fade-in";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const tileFor = (format: string, i: number) => {
  if (format === "Vinyl") {
    return (
      <div className="relative flex h-full items-center justify-center bg-foreground">
        <div className="size-[78%] rounded-full border border-background/30 bg-foreground" />
        <div className="absolute size-[55%] rounded-full border border-background/40" />
        <div className="absolute size-[35%] rounded-full border border-background/40" />
        <div className="absolute size-[14%] rounded-full bg-background" />
        <div className="absolute size-[3%] rounded-full bg-foreground" />
      </div>
    );
  }
  if (format === "CD") {
    return (
      <div className="relative flex h-full items-center justify-center bg-foreground">
        <div className="size-[70%] rounded-full bg-linear-to-br from-background/90 via-background/50 to-background/80" />
        <div className="absolute size-[24%] rounded-full bg-foreground" />
      </div>
    );
  }
  if (format === "Apparel") {
    return (
      <div className="flex h-full items-center justify-center bg-background">
        <p className="font-display text-5xl font-semibold tracking-tight text-foreground">
          SOUL
          <br />
          CREW
        </p>
      </div>
    );
  }
  return (
    <div className="grid h-full grid-rows-3 bg-background">
      <div className="border-b border-border" />
      <div className="flex items-center justify-center border-b border-border">
        <p className="font-display text-3xl tracking-tight">{`№ ${String(i + 1).padStart(3, "0")}`}</p>
      </div>
      <div />
    </div>
  );
};

export function MerchTeaser() {
  return (
    <section id="merch" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <FadeIn>
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Merch
            </p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
              Vinyls, CDs & more
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Limited pressings and physical pieces from the SOUL CREW catalog.
          </p>
        </div>
      </FadeIn>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {merch.map((item, i) => (
          <FadeIn key={item.slug} delay={i * 0.05}>
            <article className="group flex h-full flex-col">
              <AspectRatio ratio={1} className="overflow-hidden border border-border">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
                  {tileFor(item.format, i)}
                </div>
              </AspectRatio>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {item.format}
                  </p>
                  <h3 className="mt-1 font-display text-xl leading-tight tracking-tight">
                    {item.name}
                  </h3>
                </div>
                <span className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {item.status}
                </span>
              </div>
              {item.description && (
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {item.description}
                </p>
              )}
              {item.link && (
                <Link
                  href={item.link.href}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  {item.link.label} →
                </Link>
              )}
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
