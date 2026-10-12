import type { PageHeroContent } from "@/types";
import hero from "@/assets/images/categories/hero.jpg";

export const aboutHeroContent: PageHeroContent = {
  image: hero,
  imageAlt: "Operator at a sewing machine on the SUPER ACE production floor",
  eyebrow: [
    { text: "Global" },
    { text: "Sportswear", accent: true },
    { text: "Manufacturing" },
  ],
  titleLines: [[{ text: "About" }, { text: "Us", accent: true }]],
  description:
    "A trusted sportswear manufacturing company serving global brands with high-end custom solutions. Super Ace International combines manufacturing precision, athletic endurance and performance-focused textile expertise.",
  ctas: [
    { label: "Our Story", to: "#story" },
    { label: "View Capabilities", to: "/capabilities", variant: "outline" },
  ],
};