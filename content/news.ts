export type NewsItem = {
  slug: string;
  date: string;
  title: string;
  location?: string;
  kind: "Show" | "Release" | "Appearance" | "Studio";
  body: string;
  link?: { label: string; href: string };
};

export const news: NewsItem[] = [
  {
    slug: "placeholder-1",
    date: "TBA",
    title: "SOUL CREW Showcase — Atlanta",
    location: "Atlanta, GA",
    kind: "Show",
    body: "An evening with Shamar Moses, PreFranz and the Atlanta wing of the collective. Date and venue to be announced.",
    link: { label: "Get notified", href: "#" },
  },
  {
    slug: "placeholder-2",
    date: "TBA",
    title: "2 SIDES OF THE WAR — release window",
    kind: "Release",
    body: "DANIEL DeGREE's full project drops this season. Pre-save list opening soon.",
    link: { label: "Pre-save", href: "#" },
  },
  {
    slug: "placeholder-3",
    date: "Recent",
    title: "Pray 4 LA — out now",
    kind: "Release",
    body: "DANIEL DeGREE x EJ Swavv x Klazik. Stream on all platforms.",
    link: { label: "Listen", href: "#" },
  },
  {
    slug: "placeholder-4",
    date: "TBA",
    title: "Studio sessions: Das The Nomad",
    kind: "Studio",
    body: "First full SOUL CREW project for Das The Nomad in motion.",
  },
];
