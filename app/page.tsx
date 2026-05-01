import { HeroCarousel } from "@/components/site/hero-carousel";
import { BioSection } from "@/components/site/bio-section";
import { MembersGrid } from "@/components/site/members-grid";
import { ProjectsGrid } from "@/components/site/projects-grid";
import { NewsList } from "@/components/site/news-list";
import { MerchTeaser } from "@/components/site/merch-teaser";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <BioSection />
      <MembersGrid variant="preview" limit={6} />
      <ProjectsGrid variant="preview" limit={4} />
      <NewsList />
      <MerchTeaser />
    </>
  );
}
