// FutureWithUsPage.tsx
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { FutureWithUs } from "@/components/sections/FutureWithUs";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { futureHeroContent } from "@/content/resourcePagesHero";

export default function FutureWithUsPage() {
  return (
    <PageLayout>
      <PageHero content={futureHeroContent} />
      <FutureWithUs />
      <ProductBrief />
    </PageLayout>
  );
}