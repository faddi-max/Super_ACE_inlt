import type { PageHeroContent } from "@/types";
import hero from "@/assets/images/categories/hero.jpg";

export const resourcesHeroContent: PageHeroContent = {
  eyebrow: [
    { text: "Global" },
    { text: "Sportswear", accent: true },
    { text: "Manufacturing" },
  ],
  titleLines: [
    [{ text: "Resources" }, { text: "Built", accent: true }],
    [{ text: "To", accent: true }, { text: "Perform." }],
  ],
  description:
    "Explore the people, standards, products, technology, logistics and opportunities behind Super Ace International organised for brands, teams and global buyers.",
  image: hero,
  imageAlt: "Sewing line at the SUPER ACE factory",
  ctas: [
  { label: "Explore Resources", to: "/resources" },
  { label: "View Catalogue", to: "/products", variant: "outline" },
],
};