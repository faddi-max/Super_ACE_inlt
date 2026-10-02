import { PageLayout } from "@/components/layout/PageLayout";
import { AboutSection } from "@/components/sections/AboutSection";

import { Hero } from "@/components/sections/Hero";
import { TrustedPartners } from "@/components/sections/TrustedPartners";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <TrustedPartners />
      <AboutSection />
    </PageLayout>
  );
}