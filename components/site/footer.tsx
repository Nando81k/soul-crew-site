import Link from "next/link";
import { bioPillars } from "@/content/bio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight">
              SOUL CREW
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              A Christian Hip Hop artist collective founded by producer DANIEL DeGREE.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              We stand on
            </p>
            <ul className="mt-4 space-y-2 font-display text-lg">
              {bioPillars.map((pillar, i) => (
                <li key={pillar} className="flex gap-3">
                  <span className="text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline underline-offset-4">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline underline-offset-4">
                  Spotify
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline underline-offset-4">
                  Apple Music
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline underline-offset-4">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:mt-16 sm:gap-4 sm:pt-8 sm:text-xs md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} SOUL CREW · DANIEL DeGREE</p>
          <p>Keeping our soul · Soulful · Winning souls for Jesus Christ</p>
        </div>
      </div>
    </footer>
  );
}
