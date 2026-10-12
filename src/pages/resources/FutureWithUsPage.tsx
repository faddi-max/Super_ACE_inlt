import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { FutureWithUs } from "@/components/sections/FutureWithUs";
import { VisionMission } from "@/components/sections/VisionMission";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { futureHeroContent } from "@/content/resourcePagesHero";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";

export default function FutureWithUsPage() {
  return (
    <PageLayout>
      <PageHero content={futureHeroContent} />
      <FutureWithUs />
      <VisionMission />
      <Testimonials />
      <FAQ />
      
      <ProductBrief />
    </PageLayout>
  );
}