"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

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
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActiveFor = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.header
      initial={reduced ? false : { y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={[
        "sticky top-0 z-50 w-full transition-all duration-500",
        open || scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/70"
          : "border-b border-transparent bg-background/0",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-500 sm:px-6",
          scrolled || open ? "h-14" : "h-16 md:h-20",
        ].join(" ")}
      >
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={isActiveFor(link.href)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ListenCTA />
          <MenuToggle open={open} onToggle={() => setOpen((v) => !v)} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <MobileMenu
            links={links}
            isActiveFor={isActiveFor}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="SOUL CREW — Home"
      className="group relative flex items-center gap-2.5 sm:gap-3"
    >
      <Monogram />
      <span className="flex flex-col font-display text-[0.9rem] font-semibold uppercase leading-[0.95] tracking-[-0.01em] sm:text-[0.95rem]">
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5">
          Soul
        </span>
        <span className="text-foreground/55 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 group-hover:text-foreground">
          Crew
        </span>
      </span>
    </Link>
  );
}

function Monogram() {
  const reduced = useReducedMotion();
  return (
    <span className="relative inline-flex size-8 items-center justify-center sm:size-9">
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
        className="relative grid size-6 place-items-center overflow-hidden rounded-full bg-foreground text-background transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-12 group-hover:bg-background group-hover:text-foreground group-hover:ring-1 group-hover:ring-foreground sm:size-7"
      >
        <svg viewBox="0 0 28 28" className="size-full" aria-hidden>
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

function MenuToggle({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative -mr-1 flex size-10 items-center justify-center rounded-full border border-foreground/15 transition-colors hover:border-foreground md:hidden"
    >
      <span className="relative block h-3 w-5">
        <span
          aria-hidden
          className={[
            "absolute left-0 top-0 h-px w-full origin-center bg-foreground transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-y-[5px] rotate-45" : "",
          ].join(" ")}
        />
        <span
          aria-hidden
          className={[
            "absolute bottom-0 left-0 h-px w-full origin-center bg-foreground transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "-translate-y-[6px] -rotate-45" : "",
          ].join(" ")}
        />
      </span>
    </button>
  );
}

function MobileMenu({
  links,
  isActiveFor,
  onClose,
}: {
  links: { href: string; label: string }[];
  isActiveFor: (href: string) => boolean;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden"
    >
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -16, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-border/60 bg-background/95 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-5 py-6 sm:px-6">
          <ul className="flex flex-col">
            {links.map((link, i) => {
              const active = isActiveFor(link.href);
              return (
                <motion.li
                  key={link.href}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.06 + i * 0.04,
                  }}
                  className="border-b border-border/50 last:border-b-0"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-baseline justify-between gap-4 py-4"
                  >
                    <span
                      className={[
                        "font-display text-3xl tracking-tight",
                        active ? "text-foreground" : "text-foreground/85",
                      ].join(" ")}
                    >
                      {link.label}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.06 + links.length * 0.04,
            }}
            className="mt-6"
          >
            <Link
              href="/projects"
              onClick={onClose}
              className="flex items-center justify-center gap-3 rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.22em] text-background"
            >
              Listen now <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </nav>
      </motion.div>
    </motion.div>
  );
}
