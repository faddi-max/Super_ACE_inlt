import { categoriesHeroContent } from "@/content/categoriesHero";
import type { PageHeroContent } from "@/types";

export const ProductHeroContent: PageHeroContent = {
  image: categoriesHeroContent.image,
  imageAlt: "Operator at a sewing machine on the SUPER ACE production floor",
  eyebrow: [{ text: "Manufacturing", accent: true }, { text: "Capabilities" }],
  titleLines: [
    [{ text: "Built Behind" }],
    [{ text: "The" }, { text: "Product", accent: true }],
  ],
  description:
    "Representative infrastructure categories are organized by production stage, giving buyers a clear view of the machinery supporting textile formation, development, decoration and garment construction.",

  stats: [
    { value: "08", label: "Stages" },
    { value: "01", label: "Workflow" },
    { value: "Global", label: "Delivery" },
  ],
};