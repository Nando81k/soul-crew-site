export type MerchItem = {
  slug: string;
  name: string;
  format: "Vinyl" | "CD" | "Apparel" | "Print";
  price?: string;
  status: "Available" | "Coming Soon" | "Sold Out";
  image?: string;
  link?: { label: string; href: string };
  description?: string;
};

export const merch: MerchItem[] = [
  {
    slug: "2-sides-vinyl",
    name: "2 SIDES OF THE WAR — Vinyl",
    format: "Vinyl",
    status: "Coming Soon",
    description: "Limited pressing. Black wax. Editorial sleeve art.",
    link: { label: "Notify me", href: "#" },
  },
  {
    slug: "soul-crew-cd",
    name: "SOUL CREW Sampler — CD",
    format: "CD",
    status: "Coming Soon",
    description: "Compilation of singles and unreleased cuts from the collective.",
    link: { label: "Notify me", href: "#" },
  },
  {
    slug: "soul-crew-tee",
    name: "SOUL CREW Logo Tee",
    format: "Apparel",
    status: "Coming Soon",
    description: "Heavyweight tee. Black on white, white on black.",
    link: { label: "Notify me", href: "#" },
  },
  {
    slug: "pray-4-la-print",
    name: "Pray 4 LA — Risograph Print",
    format: "Print",
    status: "Coming Soon",
    description: "Numbered edition print of the single's cover artwork.",
    link: { label: "Notify me", href: "#" },
  },
];
