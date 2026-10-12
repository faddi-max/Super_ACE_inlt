import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { CatalogueGrid } from "@/components/sections/CatalogueGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { catalogueHeroContent } from "@/content/resourcePagesHero";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { FAQ } from "@/components/sections/FAQ";

export default function Catalogue() {
  return (
    <PageLayout>
      <PageHero content={catalogueHeroContent} />
      <CatalogueGrid />
      <Testimonials />
      <FAQ />
        <ProductBrief />
    </PageLayout>
  );
}