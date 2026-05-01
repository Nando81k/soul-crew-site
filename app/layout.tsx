import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: {
    default: "SOUL CREW — Christian Hip Hop Collective",
    template: "%s — SOUL CREW",
  },
  description:
    "SOUL CREW is a Christian Hip Hop artist collective founded by producer DANIEL DeGREE. Keeping our soul. Soulful. Winning souls for Jesus Christ.",
  metadataBase: new URL("https://soulcrew.example"),
  openGraph: {
    title: "SOUL CREW",
    description:
      "Christian Hip Hop collective — keeping our soul, soulful, winning souls for Jesus Christ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background text-foreground">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
