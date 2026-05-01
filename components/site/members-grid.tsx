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
          ? "w-full px-4 py-16 sm:px-6 md:py-20 lg:px-12"
          : "w-full px-4 pb-20 pt-12 sm:px-6 lg:px-12"
      }
    >
      <div className="mx-auto max-w-400">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                The Crew
              </p>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
                {variant === "preview" ? "Members" : "All members"}
              </h2>
            </div>
            {variant === "preview" && (
              <Link
                href="/members"
                className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
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
                    <div className="flex flex-1 flex-col p-8 transition-colors duration-500 group-hover:bg-foreground group-hover:text-background">
                      <div className="flex items-start justify-between">
                        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors group-hover:text-background/70">
                          {member.role}
                        </p>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-background/70">
                          {member.location}
                        </p>
                      </div>
                      <h3 className="mt-10 font-display text-3xl leading-tight tracking-tight md:text-4xl">
                        {member.name}
                      </h3>
                      <p className="mt-6 text-sm leading-relaxed text-foreground/80 transition-colors group-hover:text-background/85">
                        {member.bio}
                      </p>
                    </div>
                    {member.image && (
                      <div
                        aria-hidden
                        className="relative w-0 shrink-0 overflow-hidden bg-muted transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:group-hover:w-56"
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
