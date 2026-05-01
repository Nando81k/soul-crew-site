"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/projects", label: "Projects" },
  { href: "/#news", label: "News" },
  { href: "/#merch", label: "Merch" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduced ? false : { y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={[
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/65"
          : "border-b border-transparent bg-background/0",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-[height] duration-500",
          scrolled ? "h-14" : "h-20",
        ].join(" ")}
      >
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isHashOnly = link.href.startsWith("/#");
            const isActive = isHashOnly
              ? false
              : link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive}
              />
            );
          })}
        </nav>

        <ListenCTA />
      </div>
    </motion.header>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="SOUL CREW — Home"
      className="group relative flex items-center gap-3"
    >
      <Monogram />
      <span className="flex flex-col font-display text-[0.95rem] font-semibold uppercase leading-[0.95] tracking-[-0.01em]">
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5">
          Soul
        </span>
        <span className="text-foreground/55 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-foreground group-hover:translate-x-1.5">
          Crew
        </span>
      </span>
    </Link>
  );
}

function Monogram() {
  const reduced = useReducedMotion();
  return (
    <span className="relative inline-flex size-9 items-center justify-center">
      <motion.svg
        viewBox="0 0 36 36"
        className="absolute inset-0 size-full text-foreground"
        initial={false}
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        aria-hidden
      >
        <circle
          cx="18"
          cy="18"
          r="16.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.35"
          strokeDasharray="1.5 3"
        />
      </motion.svg>
      <span
        aria-hidden
        className="relative grid size-7 place-items-center overflow-hidden rounded-full bg-foreground text-background transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-12 group-hover:bg-background group-hover:text-foreground group-hover:ring-1 group-hover:ring-foreground"
      >
        <svg
          viewBox="0 0 28 28"
          className="size-full"
          aria-hidden
        >
          <line
            x1="4"
            y1="24"
            x2="24"
            y2="4"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.45"
          />
          <text
            x="6"
            y="13.5"
            fontFamily="var(--font-display), Georgia, serif"
            fontSize="10"
            fontWeight="700"
            fill="currentColor"
            letterSpacing="-0.5"
          >
            S
          </text>
          <text
            x="14.5"
            y="22.5"
            fontFamily="var(--font-display), Georgia, serif"
            fontSize="10"
            fontWeight="700"
            fill="currentColor"
            letterSpacing="-0.5"
          >
            C
          </text>
        </svg>
      </span>
    </span>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative flex items-center text-xs uppercase tracking-[0.22em]"
    >
      <span
        className="relative inline-block overflow-hidden"
        style={{ height: "1.1em" }}
      >
        <span
          aria-hidden
          className={[
            "block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full",
            active ? "text-foreground" : "text-muted-foreground",
          ].join(" ")}
        >
          {label}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full text-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
        >
          {label}
        </span>
        <span className="invisible block">{label}</span>
      </span>
      <span
        aria-hidden
        className={[
          "absolute -bottom-1.5 left-0 h-px bg-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          active
            ? "w-full opacity-100"
            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100",
        ].join(" ")}
      />
    </Link>
  );
}

function ListenCTA() {
  return (
    <Link
      href="/projects"
      className="group relative hidden overflow-hidden rounded-full border border-foreground px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] md:inline-flex md:items-center md:gap-2"
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
      />
      <span className="relative z-10 transition-colors duration-500 group-hover:text-background">
        Listen
      </span>
      <span
        aria-hidden
        className="relative z-10 inline-block transition-all duration-500 group-hover:translate-x-1 group-hover:text-background"
      >
        →
      </span>
    </Link>
  );
}
