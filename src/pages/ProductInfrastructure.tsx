import { PageLayout } from "@/components/layout/PageLayout";
import { FAQ } from "@/components/sections/FAQ";
import { MachineSystem } from "@/components/sections/MachineSystem";
import { PageHero } from "@/components/sections/PageHero";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { ProductionLineIntro } from "@/components/sections/ProductionLineIntro";


import { Testimonials } from "@/components/sections/Testimonials";
import { ProductHeroContent } from "@/content/ProductHeroContent";
import { productInfrastructureIntroContent } from "@/content/productInfrastructureIntroContent";

export const ProductInfrastructure = () => {
  return (
    <PageLayout>
      <PageHero content={ProductHeroContent} />
    
   <ProductionLineIntro content={productInfrastructureIntroContent} />
      <MachineSystem />
      <Testimonials />
      <FAQ />
      <ProductBrief />
    </PageLayout>
  );
};