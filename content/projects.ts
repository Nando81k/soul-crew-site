export type Project = {
  slug: string;
  title: string;
  type: "Single" | "EP" | "Album" | "Project";
  artist: string;
  features?: string[];
  releaseDate?: string;
  status: "Out Now" | "Coming Soon" | "In The Works";
  cover?: string;
  links?: { label: string; href: string }[];
  description?: string;
  previewUrl?: string;
};

const placeholderTrack = (n: number) =>
  `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${n}.mp3`;

export const projects: Project[] = [
  {
    slug: "pray-4-la",
    title: "Pray 4 LA",
    type: "Single",
    artist: "DANIEL DeGREE",
    features: ["EJ Swavv", "Klazik"],
    status: "Out Now",
    description:
      "Lead single from 2 SIDES OF THE WAR. A prayer for the city, a witness to the people.",
    links: [
      { label: "Spotify", href: "#" },
      { label: "Apple Music", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    previewUrl: placeholderTrack(1),
  },
  {
    slug: "2-sides-of-the-war",
    title: "2 SIDES OF THE WAR",
    type: "Project",
    artist: "DANIEL DeGREE",
    status: "Coming Soon",
    description:
      "A producer-led project on the spiritual battlefield, featuring multiple SOUL CREW MCs and friends of the collective.",
    links: [{ label: "Pre-save", href: "#" }],
    previewUrl: placeholderTrack(2),
  },
  {
    slug: "better-now",
    title: "BETTER NOW",
    type: "Single",
    artist: "DANIEL DeGREE",
    features: ["Selah The Corner"],
    status: "Out Now",
    description:
      "DANIEL DeGREE x Selah The Corner. A reflection on growth, grace, and where Yahweh has brought us.",
    links: [
      { label: "Spotify", href: "#" },
      { label: "Apple Music", href: "#" },
    ],
    previewUrl: placeholderTrack(3),
  },
  {
    slug: "das-the-nomad-project",
    title: "Untitled (Das The Nomad x DANIEL DeGREE)",
    type: "EP",
    artist: "Das The Nomad",
    features: ["DANIEL DeGREE"],
    status: "In The Works",
    description: "Das The Nomad's first SOUL CREW release, fully produced by DANIEL DeGREE.",
    previewUrl: placeholderTrack(4),
  },
  {
    slug: "green-pastures-collab",
    title: "Untitled (Green Pastures Sessions)",
    type: "EP",
    artist: "Green Pastures",
    features: ["DANIEL DeGREE"],
    status: "In The Works",
    description:
      "Multiple projects/EPs in motion with Shamar Moses and PreFranz — Soul, Neo-Soul, boom bap and R&B.",
    previewUrl: placeholderTrack(5),
  },
  {
    slug: "kenny-knoxville-collab",
    title: "Untitled (Kenny Knoxville Sessions)",
    type: "Single",
    artist: "Kenny Knoxville",
    features: ["DANIEL DeGREE"],
    status: "In The Works",
    description: "A long-time-coming collaboration with the CHH legend.",
    previewUrl: placeholderTrack(6),
  },
];
