import type { PageHeroContent } from "@/types";
import { resourcesHeroContent } from "@/content/resourcesHero";

const base = {
  image: resourcesHeroContent.image,
  imageAlt: resourcesHeroContent.imageAlt,
};
export const compliancesHeroContent: PageHeroContent = {
  ...base,
  titleLines: [[{ text: "Compliances" }]],
  description:
    "Committed to quality, responsible manufacturing, and customer requirements, we support international brands with a focus on consistent standards and dependable production practices.",
};

export const catalogueHeroContent: PageHeroContent = {
  ...base,
  titleLines: [[{ text: "Catalogues" }]],
  description:
    "Explore our product catalogues to discover sportswear styles, product options, and custom manufacturing solutions tailored to your brand's needs.",
};

export const logisticsHeroContent: PageHeroContent = {
  ...base,
  titleLines: [[{ text: "Logistic" }, { text: "Partners", accent: true }]],
  description:
    "Reliable logistics are an essential part of getting every order from production to destination. Super Ace works with established shipping and freight partners to support smooth, coordinated deliveries for international buyers.",
};

export const technologyHeroContent: PageHeroContent = {
  ...base,
  titleLines: [[{ text: "Technology" }, { text: "Partners", accent: true }]],
  description:
    "Precision machinery, design software and IT infrastructure from trusted global technology leaders power every stage of Super Ace production.",
};
export const futureHeroContent: PageHeroContent = {
  ...base,
  titleLines: [[{ text: "Future" }, { text: "With Us", accent: true }]],
  description:
    "Committed to quality, responsible manufacturing, and customer requirements, we support international brands with a focus on consistent standards and dependable production practices.",
};