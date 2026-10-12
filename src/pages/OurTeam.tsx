import { PageLayout } from "@/components/layout/PageLayout";
import { FAQ } from "@/components/sections/FAQ";
import { PageHero } from "@/components/sections/PageHero";
import { PeopleBehind } from "@/components/sections/PeopleBehind";
import { Testimonials } from "@/components/sections/Testimonials";
import { ourTeamHeroContent } from "@/content/ourTeamHero";

export default function OurTeam() {
  return (
    <PageLayout>
      <PageHero content={ourTeamHeroContent} />
      <PeopleBehind />
       <Testimonials />
            
            <FAQ />
    </PageLayout>
  );
}
