import { PageLayout } from "@/components/layout/PageLayout";
import { ContactInquiry } from "@/components/sections/ContactInquiry";
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
      <div id="locations" />
      <Testimonials />
      <FAQ />
    </PageLayout>
  );
}