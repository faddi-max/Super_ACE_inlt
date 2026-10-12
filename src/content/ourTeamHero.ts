import type { PageHeroContent } from "@/types";
import hero from "@/assets/images/categories/hero.jpg";

export const ourTeamHeroContent = {

  eyebrow: [],
  titleLines: [[{ text: "Our" }, { text: "Team", accent: true }]],
  description:
    "Designers, pattern makers, production leads and quality inspectors working as one team to deliver your order right.",
  image: hero,
  imageAlt:
    "Super Ace production team working at sewing machines on the factory floor",
} satisfies PageHeroContent;
