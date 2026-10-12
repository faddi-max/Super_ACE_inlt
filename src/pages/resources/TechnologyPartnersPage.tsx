import { PageLayout } from "@/components/layout/PageLayout";
import { FAQ } from "@/components/sections/FAQ";
import { PageHero } from "@/components/sections/PageHero";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { TechnologyPartnersGrid } from "@/components/sections/TechnologyPartnersGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { technologyHeroContent } from "@/content/resourcePagesHero";

export default function TechnologyPartnersPage() {
  return (
    <PageLayout>
      <PageHero content={technologyHeroContent} />
      <TechnologyPartnersGrid />
       <Testimonials />
            <FAQ />
              <ProductBrief />
    </PageLayout>
  );
}