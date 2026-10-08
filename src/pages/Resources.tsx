import { PageLayout } from "@/components/layout/PageLayout";
import { AboutSection } from "@/components/sections/AboutSection";
import { CatalogueDownloads } from "@/components/sections/CatalogueDownloads";
import { LogisticsPartners } from "@/components/sections/LogisticsPartners";
import { PageHero } from "@/components/sections/PageHero";
import { PeopleBehind } from "@/components/sections/PeopleBehind";
import { resourcesHeroContent } from "@/content/resourcesHero";
import { FutureWithUs } from "@/components/sections/FutureWithUs";
import { FAQ } from "@/components/sections/FAQ";

import { Certifications } from "@/components/sections/Certifications";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechnologyPartners } from "@/components/sections/TechnologyPartners";

export default function Resources() {
  return (
    <PageLayout>
      <PageHero content={resourcesHeroContent} />
      <div id="resources-list" />
  <AboutSection isresoursepage={true} />
  <PeopleBehind />
  <CatalogueDownloads />
  <LogisticsPartners />
  <TechnologyPartners />
  <FutureWithUs />
  <Certifications />
        <Testimonials />

        <FAQ />
    </PageLayout>
  );
}