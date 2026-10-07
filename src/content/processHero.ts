import { categoriesHeroContent } from "@/content/categoriesHero";
import type { PageHeroContent } from "@/types";

export const processHeroContent: PageHeroContent = {
  image: categoriesHeroContent.image,
  imageAlt: "Operator at a sewing machine on the SUPER ACE production floor",
  eyebrow: [
    { text: "Our" },
    { text: "Production", accent: true },
    { text: "Journey" },
  ],
  titleLines: [
    [{ text: "From" }, { text: "Concept", accent: true }],
    [{ text: "To Delivery." }],
  ],
  description:
    "Super Ace International manages every stage of sportswear and apparel production, from design development and sampling to bulk manufacturing, finishing, packing, and global delivery. View our production journey below.",
  // Labels are placeholders – replace with approved text
  stats: [
    { value: "14", label: "Stages" },
    { value: "01", label: "Workflow" },
    { value: "Global", label: "Delivery" },
  ],
};