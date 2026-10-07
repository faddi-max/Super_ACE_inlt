import { categoriesHeroContent } from "@/content/categoriesHero";
import type { PageHeroContent } from "@/types";

export const capabilitiesHeroContent: PageHeroContent = {
  image: categoriesHeroContent.image,
  imageAlt: "Operator at a sewing machine on the SUPER ACE production floor",
  eyebrow: [{ text: "Manufacturing", accent: true }, { text: "Capabilities" }],
  titleLines: [
    [{ text: "Built from" }],
    [{ text: "The" }, { text: "Material", accent: true }, { text: "Up." }],
  ],
  description:
    "Raw material is the starting point of every Super Ace product. Our capability begins with the materials that enter the manufacturing system: fabric, thread and accessories, buttons, and labels.",
  // Same stat strip as the design; labels are placeholders
  stats: [
    { value: "14", label: "Stages" },
    { value: "01", label: "Workflow" },
    { value: "Global", label: "Delivery" },
  ],
};