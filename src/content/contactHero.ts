import type { PageHeroContent } from "@/types";
import hero from "@/assets/images/categories/hero.jpg";

export const contactHeroContent: PageHeroContent = {
  eyebrow: [{ text: "Contact Us" }],
  titleLines: [
    [{ text: "Let's" }, { text: "Build" }],
    [{ text: "Performance.", accent: true }],
  ],
  description:
    "Tell us what you need made. Share your product, quantity, timeline, or technical requirements and our team can route your inquiry to the right Super Ace location.",
  image: hero,
  imageAlt: "Sewing line at the SUPER ACE factory",
  ctas: [
    { label: "Send an Inquiry", to: "#inquiry" },
    { label: "View Locations", to: "#locations", variant: "outline" },
  ],
};