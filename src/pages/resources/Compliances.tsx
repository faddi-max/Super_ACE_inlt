import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { CertificationsGrid } from "@/components/sections/CertificationsGrid";
import { compliancesHeroContent } from "@/content/resourcePagesHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ProductBrief } from "@/components/sections/ProductBrief";

export default function Compliances() {
  return (
    <PageLayout>
      <PageHero content={compliancesHeroContent} />
      <CertificationsGrid />
        <Testimonials />  
                  <FAQ />
                    <ProductBrief />
    </PageLayout>
  );
}