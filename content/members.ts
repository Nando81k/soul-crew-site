export type Member = {
  slug: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  image?: string;
  socials?: { label: string; href: string }[];
};

const portrait = (slug: string) =>
  `https://picsum.photos/seed/soulcrew-${slug}/800/1000?grayscale`;

export const members: Member[] = [
  {
    slug: "daniel-degree",
    name: "DANIEL DeGREE",
    role: "Producer / Founder",
    location: "USA",
    bio: "Christian Hip Hop producer Horace Daniel DeGree. Founder of SOUL CREW. Builds soulful, sample-driven beats anchored in Yahweh.",
    image: portrait("daniel-degree"),
  },
  {
    slug: "servant",
    name: "SERVant",
    role: "MC",
    location: "Florida",
    bio: "Co-founder of SOUL CREW. One of the original two artists alongside Bhreyion who built the alliance with DANIEL DeGREE.",
    image: portrait("servant"),
  },
  {
    slug: "bhreyion",
    name: "Bhreyion",
    role: "MC",
    location: "New York",
    bio: "Co-founder of SOUL CREW. Stepped away to pursue solo work, then returned to commit fully to the collective.",
    image: portrait("bhreyion"),
  },
  {
    slug: "das-the-nomad",
    name: "Das The Nomad",
    role: "MC",
    location: "Ohio",
    bio: "Prolific Christian Hip Hop artist with many singles and projects. Connected with DANIEL DeGREE through a Selah The Corner challenge.",
    image: portrait("das-the-nomad"),
  },
  {
    slug: "shamar-moses",
    name: "Shamar Moses",
    role: "MC / Producer",
    location: "Atlanta, GA",
    bio: "Former secular rapper who turned to Yahweh. Half of duo Green Pastures with his wife PreFranz. Produces nonstop in the J Dilla tradition.",
    image: portrait("shamar-moses"),
  },
  {
    slug: "prefranz",
    name: "PreFranz",
    role: "Vocalist / MC",
    location: "Atlanta, GA",
    bio: "Singer and rapper. Half of duo Green Pastures with husband Shamar Moses. Brings Soul, Neo-Soul, and R&B textures.",
    image: portrait("prefranz"),
  },
  {
    slug: "handlez-mcgee",
    name: "Handlez McGee",
    role: "MC",
    location: "Atlanta, GA",
    bio: "Atlanta-based MC and part of the extended SOUL CREW collective.",
    image: portrait("handlez-mcgee"),
  },
  {
    slug: "mitoga",
    name: "MITOGA",
    role: "MC",
    location: "Atlanta, GA",
    bio: "Atlanta-based artist contributing to SOUL CREW projects.",
    image: portrait("mitoga"),
  },
  {
    slug: "kingdom-key",
    name: "Kingdom Key",
    role: "MC",
    location: "Detroit",
    bio: "Detroit MC bringing Midwest soul to the SOUL CREW catalog.",
    image: portrait("kingdom-key"),
  },
  {
    slug: "roman6",
    name: "Roman6",
    role: "MC",
    location: "California",
    bio: "California artist holding down the West Coast for SOUL CREW.",
    image: portrait("roman6"),
  },
  {
    slug: "kenny-knoxville",
    name: "Kenny Knoxville",
    role: "MC / Legend",
    location: "USA",
    bio: "CHH legend and longtime friend of DANIEL DeGREE. A pillar of the extended collective.",
    image: portrait("kenny-knoxville"),
  },
];
