import { PageLayout } from "@/components/layout/PageLayout";
import { AboutSection } from "@/components/sections/AboutSection";
import { Capabilities } from "@/components/sections/Capabilities";
import { CategoriesSlider } from "@/components/sections/CategoriesSlider";
import { Certifications } from "@/components/sections/Certifications";
import { ChooseUs } from "@/components/sections/ChooseUs";
import { ComplianceSafety } from "@/components/sections/ComplianceSafety";
import { ConceptToExport } from "@/components/sections/ConceptToExport";
import { CTASection } from "@/components/sections/CTASection";
import { CustomerJourney } from "@/components/sections/CustomerJourney";
// import { CustomSolutions } from "@/components/sections/CustomSolutions";
import { ExportMarket } from "@/components/sections/ExportMarket";
import { Facilities } from "@/components/sections/Facilities";
import { FactoryTour } from "@/components/sections/FactoryTour";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { HowWeManufacture } from "@/components/sections/HowWeManufacture";
import { Industries } from "@/components/sections/Industries";
import { QualityControl } from "@/components/sections/QualityControl";
import { ResourcesInsights } from "@/components/sections/ResourcesInsights";
import { Testimonials } from "@/components/sections/Testimonials";

import { TrustedPartners } from "@/components/sections/TrustedPartners";
import { WhatWeManufacture } from "@/components/sections/WhatWeManufacture";


export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <TrustedPartners />
      <AboutSection />
       <Industries />
        <CategoriesSlider />
          
       <HowWeManufacture />
       <CustomerJourney />
        <FactoryTour />
      
      
   
      
       <Facilities />
         <WhatWeManufacture />
      <Capabilities />
      <QualityControl />
    <ComplianceSafety />
     <ExportMarket />
     <ChooseUs />
      <Certifications />
      <ResourcesInsights />
      <Testimonials />
      
      <FAQ />
      <CTASection />
    </PageLayout>
  );
}
