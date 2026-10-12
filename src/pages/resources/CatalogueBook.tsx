import { Navigate, useParams } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { CatalogueViewer } from "@/components/sections/CatalogueViewer";
import { Testimonials } from "@/components/sections/Testimonials";
import { findCatalogueBook } from "@/content/catalogueBooks";
import { catalogueHeroContent } from "@/content/resourcePagesHero";
import { FAQ } from "@/components/sections/FAQ";
import { ProductBrief } from "@/components/sections/ProductBrief";

export default function CatalogueBook() {
  const { slug = "" } = useParams();
  const book = findCatalogueBook(slug);

  if (!book) return <Navigate to="/resources/catalogue" replace />;

  return (
    <PageLayout>
      <PageHero content={catalogueHeroContent} />
      <CatalogueViewer book={book} />
      <Testimonials />
      <FAQ />
        <ProductBrief />
    </PageLayout>
  );
}