import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { LogisticsNetwork } from "@/components/sections/LogisticsNetwork";
import { logisticsHeroContent } from "@/content/resourcePagesHero";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";

export default function LogisticPartners() {
  return (
    <PageLayout>
      <PageHero content={logisticsHeroContent} />
      <LogisticsNetwork />
        <Testimonials />  
                        <FAQ />
                        <ProductBrief />
    </PageLayout>
  );
}