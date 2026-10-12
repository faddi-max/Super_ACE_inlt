import { PageLayout } from "@/components/layout/PageLayout";
import { FAQ } from "@/components/sections/FAQ";
import { MaterialCTA } from "@/components/sections/MaterialCTA";
import { MaterialSystem } from "@/components/sections/MaterialSystem";
import { PageHero } from "@/components/sections/PageHero";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { ProductionInfrastructure } from "@/components/sections/ProductionInfrastructure";
import { ProductionLineIntro } from "@/components/sections/ProductionLineIntro";
import { Testimonials } from "@/components/sections/Testimonials";
import { capabilitiesHeroContent } from "@/content/capabilitiesHero";
import { capabilitiesIntroContent } from "@/content/productionLine";

export default function Capabilities() {
  return (
    <PageLayout>
      <PageHero content={capabilitiesHeroContent} />
      <ProductionLineIntro content={capabilitiesIntroContent} />
      <MaterialSystem />
      <ProductionInfrastructure />
      <MaterialCTA />
        <Testimonials />
            <FAQ />
            <ProductBrief />
    </PageLayout>
  );
}