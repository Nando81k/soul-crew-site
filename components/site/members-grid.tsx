import Image from "next/image";
import Link from "next/link";
import { members, type Member } from "@/content/members";
import { FadeIn } from "@/components/motion/fade-in";

type MembersGridProps = {
  variant?: "preview" | "full";
  limit?: number;
};

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

export function MembersGrid({ variant = "full", limit }: MembersGridProps) {
  const list: Member[] = limit ? members.slice(0, limit) : members;
  const rows = chunk(list, 2);

  return (
    <section
      id="members"
      className={
        variant === "preview"
          ? "w-full px-5 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-12"
          : "w-full px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-12"
      }
    >
      <div className="mx-auto max-w-400">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5 sm:gap-6 sm:pb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs sm:tracking-[0.32em]">
                The Crew
              </p>
              <h2 className="mt-2 font-display text-4xl leading-[0.95] tracking-tight sm:mt-3 sm:text-5xl md:text-6xl">
                {variant === "preview" ? "Members" : "All members"}
              </h2>
            </div>
            {variant === "preview" && (
              <Link
                href="/members"
                className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground sm:text-xs"
              >
                View all members →
              </Link>
            )}
          </div>
        </FadeIn>

        <div className="mt-8 flex flex-col gap-px bg-border">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-col gap-px sm:flex-row">
              {row.map((member, colIdx) => (
                <FadeIn
                  key={member.slug}
                  delay={(rowIdx * 2 + colIdx) % 6 * 0.04}
                  className="group flex flex-[1_1_0%] basis-0 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:hover:flex-[1.45_1_0%]"
                >
                  <article className="relative flex w-full bg-background">
                    <div className="flex min-w-0 flex-1 flex-col p-5 transition-colors duration-500 group-hover:bg-foreground group-hover:text-background sm:p-8">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition-colors group-hover:text-background/70 sm:tracking-[0.28em] sm:text-xs">
                          {member.role}
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors group-hover:text-background/70 sm:tracking-[0.18em] sm:text-xs">
                          {member.location}
                        </p>
                      </div>
                      <h3 className="mt-6 font-display text-2xl leading-tight tracking-tight sm:mt-10 sm:text-3xl md:text-4xl">
                        {member.name}
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-foreground/80 transition-colors group-hover:text-background/85 sm:mt-6 sm:text-sm">
                        {member.bio}
                      </p>
                    </div>
                    {member.image && (
                      <div
                        aria-hidden
                        className="relative w-[42%] shrink-0 self-stretch overflow-hidden bg-muted sm:hidden"
                      >
                        <Image
                          src={member.image}
                          alt=""
                          fill
                          sizes="(min-width: 640px) 0px, 42vw"
                          className="grayscale-img object-cover"
                        />
                      </div>
                    )}
                    {member.image && (
                      <div
                        aria-hidden
                        className="relative hidden w-0 shrink-0 overflow-hidden bg-muted transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:block sm:group-hover:w-56"
                      >
                        <Image
                          src={member.image}
                          alt=""
                          fill
                          sizes="224px"
                          className="grayscale-img object-cover scale-110 transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
                        />
                      </div>
                    )}
                  </article>
                </FadeIn>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
