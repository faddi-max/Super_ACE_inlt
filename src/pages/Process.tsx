import { PageLayout } from "@/components/layout/PageLayout";
import { FactoryTourVideo } from "@/components/sections/FactoryTourVideo";
import { FAQ } from "@/components/sections/FAQ";
import { PageHero } from "@/components/sections/PageHero";

import { ProductBrief } from "@/components/sections/ProductBrief";
import { ProductionJourney } from "@/components/sections/ProductionJourney";
import { ProductionLineIntro } from "@/components/sections/ProductionLineIntro";
import { Testimonials } from "@/components/sections/Testimonials";
import { processHeroContent } from "@/content/processHero";
import { productionLineContent } from "@/content/productionLine";

export default function Process() {
  return (
    <PageLayout>
     <PageHero content={processHeroContent} />
      <ProductionLineIntro content={productionLineContent} />
      <ProductionJourney />
      <FactoryTourVideo />
          <Testimonials />
                    <FAQ />
      <ProductBrief />
    </PageLayout>
  );
}