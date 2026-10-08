import { PageLayout } from "@/components/layout/PageLayout";
import { ContactInquiry } from "@/components/sections/ContactInquiry";
import { ContactLocations } from "@/components/sections/ContactLocations";
import { FAQ } from "@/components/sections/FAQ";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { contactHeroContent } from "@/content/contactHero";

export default function Contact() {
  return (
    <PageLayout>
      <PageHero content={contactHeroContent} />
      <div id="inquiry" />
      <ContactInquiry />
      <ContactLocations />
      <Testimonials />
      <FAQ />
    </PageLayout>
  );
}