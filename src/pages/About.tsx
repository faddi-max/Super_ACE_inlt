import { PageLayout } from "@/components/layout/PageLayout";
import { AboutSection } from "@/components/sections/AboutSection";

import { FAQ } from "@/components/sections/FAQ";
import { MaterialsThatPerform } from "@/components/sections/MaterialsThatPerform";
import { OurHistory } from "@/components/sections/OurHistory";
import { OurStructure } from "@/components/sections/OurStructure";
import { PageHero } from "@/components/sections/PageHero";
import { PerformanceShowcase } from "@/components/sections/PerformanceShowcase";
import { PrecisionFloor } from "@/components/sections/PrecisionFloor";

import { ProductBrief } from "@/components/sections/ProductBrief";
import { ResponsibleByDesign } from "@/components/sections/ResponsibleByDesign";
import { SuperAceStandard } from "@/components/sections/SuperAceStandard";
import { Testimonials } from "@/components/sections/Testimonials";
import { aboutHeroContent } from "@/content/aboutHero";

export default function About() {
  return (
    <PageLayout>
      <PageHero content={aboutHeroContent} />
      <div className="scroll-mt-20" id="story" />
      <AboutSection isaboutpage={true} />
    <OurHistory />
     <SuperAceStandard />
     <OurStructure />
     <PerformanceShowcase />
     <PrecisionFloor />
<ResponsibleByDesign />
<MaterialsThatPerform />
      <Testimonials />
      <FAQ />
      <ProductBrief />
    </PageLayout>
  );
}