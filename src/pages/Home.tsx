import { PageLayout } from "@/components/layout/PageLayout";
import { AboutSection } from "@/components/sections/AboutSection";
import { CategoriesSlider } from "@/components/sections/CategoriesSlider";
import { CertificationsSlider } from "@/components/sections/CertificationsSlider";
import { CTASection } from "@/components/sections/CTASection";
import { CustomSolutions } from "@/components/sections/CustomSolutions";
import { FAQ } from "@/components/sections/FAQ";

import { Hero } from "@/components/sections/Hero";
import { HowWeManufacture } from "@/components/sections/HowWeManufacture";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedPartners } from "@/components/sections/TrustedPartners";
import { WhatWeManufacture } from "@/components/sections/WhatWeManufacture";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <TrustedPartners />
      <AboutSection />
      <CategoriesSlider />
      <WhatWeManufacture />
      <CustomSolutions />
      <HowWeManufacture />
      <CertificationsSlider />
      <Testimonials />
      <FAQ />
      <CTASection />
    </PageLayout>
  );
}