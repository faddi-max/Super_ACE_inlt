import { PageLayout } from "@/components/layout/PageLayout";
import { CategoriesHero } from "@/components/sections/CategoriesHero";
import { CategoriesIntro } from "@/components/sections/CategoriesIntro";
import { Customization } from "@/components/sections/Customization";

import { FAQ } from "@/components/sections/FAQ";
import { HowWeManufacture } from "@/components/sections/HowWeManufacture";
import { ManufacturingVisuals } from "@/components/sections/ManufacturingVisuals";
import { ProductDevelopment } from "@/components/sections/ProductDevelopment";
import { SportProducts } from "@/components/sections/SportProducts";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Categories() {
  return (
    <PageLayout>
      <CategoriesHero />
      <CategoriesIntro />
     
           
      <div id="categories" />
       <SportProducts />
       <ProductDevelopment />
       <Customization />
        <ManufacturingVisuals />
         <HowWeManufacture />
          <Testimonials />

            <FAQ />
    </PageLayout>
  );
}