"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { SlowKenBurns } from "@/components/motion/slow-parallax";

type Slide = {
  eyebrow: string;
  headline: string;
  body: string;
  cta: { label: string; href: string };
  image: string;
  alt: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Members",
    headline: "Meet the crew",
    body: "An alliance of MCs, vocalists and producers across Atlanta, Florida, New York, Detroit, Ohio and California.",
    cta: { label: "Meet the members", href: "/members" },
    image: "https://picsum.photos/seed/soulcrew-members-hero/1920/1200?grayscale",
    alt: "SOUL CREW members placeholder",
  },
  {
    eyebrow: "Projects",
    headline: "New drops",
    body: "Singles and projects from DANIEL DeGREE and the collective — soulful production, sharpened pen.",
    cta: { label: "Hear the projects", href: "/projects" },
    image: "https://picsum.photos/seed/soulcrew-projects-hero/1920/1200?grayscale",
    alt: "Studio session placeholder",
  },
  {
    eyebrow: "News",
    headline: "On the road",
    body: "Appearances, performances and studio sessions — what just dropped and what's coming next.",
    cta: { label: "See what's next", href: "/#news" },
    image: "https://picsum.photos/seed/soulcrew-news-hero/1920/1200?grayscale",
    alt: "Live performance placeholder",
  },
  {
    eyebrow: "Merch",
    headline: "Vinyls & CDs",
    body: "Limited pressings, apparel and prints — physical pieces from the SOUL CREW catalog.",
    cta: { label: "Browse merch", href: "/#merch" },
    image: "https://picsum.photos/seed/soulcrew-merch-hero/1920/1200?grayscale",
    alt: "Vinyl record placeholder",
  },
];

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActive(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const autoplay = Autoplay({
    delay: 8000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  return (
    <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden bg-foreground text-background">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: 60 }}
        plugins={reduced ? [] : [autoplay]}
        className="h-full"
      >
        <CarouselContent className="h-[88vh] min-h-[640px] ml-0">
          {slides.map((slide, i) => (
            <CarouselItem key={slide.eyebrow} className="relative h-full pl-0 basis-full">
              <SlideBackground
                image={slide.image}
                alt={slide.alt}
                priority={i === 0}
                active={active === i}
              />
              <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:pb-32">
                <AnimatePresence mode="wait">
                  {active === i && (
                    <motion.div
                      key={slide.eyebrow}
                      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="max-w-3xl"
                    >
                      <p className="text-xs uppercase tracking-[0.4em] text-background/70">
                        {String(i + 1).padStart(2, "0")} · {slide.eyebrow}
                      </p>
                      <h1 className="mt-6 font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
                        {slide.headline}
                      </h1>
                      <p className="mt-6 max-w-xl text-base text-background/80 md:text-lg">
                        {slide.body}
                      </p>
                      <Link
                        href={slide.cta.href}
                        className="mt-10 inline-flex items-center gap-3 rounded-full border border-background/40 px-6 py-3 text-xs uppercase tracking-[0.22em] text-background transition-colors hover:bg-background hover:text-foreground"
                      >
                        {slide.cta.label}
                        <span aria-hidden>→</span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-6 size-12 border-background/40 bg-transparent text-background hover:bg-background hover:text-foreground" />
        <CarouselNext className="right-6 size-12 border-background/40 bg-transparent text-background hover:bg-background hover:text-foreground" />
      </Carousel>

      <div className="pointer-events-none absolute inset-x-0 top-6 z-20 mx-auto flex max-w-7xl items-center justify-between px-6">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-background/80">
          SOUL · CREW
        </p>
        <p className="hidden text-xs uppercase tracking-[0.32em] text-background/70 md:block">
          Christian Hip Hop · Est. by DANIEL DeGREE
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex justify-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.eyebrow}
            type="button"
            onClick={() => api?.scrollTo(i)}
            className="pointer-events-auto h-[2px] w-12 overflow-hidden bg-background/30"
            aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
          >
            <motion.span
              className="block h-full bg-background"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: active === i ? 1 : 0 }}
              transition={{
                duration: active === i ? 8 : 0.4,
                ease: "linear",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function SlideBackground({
  image,
  alt,
  active,
  priority,
}: {
  image: string;
  alt: string;
  active: boolean;
  priority?: boolean;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-foreground">
      <SlowKenBurns active={active} className="absolute inset-0">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover grayscale-img opacity-80"
        />
      </SlowKenBurns>
      <div className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/60 to-foreground/20" />
      <div className="absolute inset-0 bg-linear-to-r from-foreground/85 via-foreground/30 to-foreground/40" />
    </div>
  );
}
