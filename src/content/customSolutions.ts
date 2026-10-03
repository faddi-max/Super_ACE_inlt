import { images } from "@/assets/images";

export interface CustomSolution {
  index: string;
  title: string;
  description: string;
}

export const customSolutionsContent = {
  eyebrow: "High-End Custom Solutions",
  title: ["Built Around", "Your Brand."],
  description:
    "Make “custom solutions” tangible by showing the areas where Super Ace can develop products around a buyer's requirements. Replace or remove any capability that is not offered.",
  cta: { label: "Discuss your project", to: "/contact" },
  background: images.Section,
  items: [
    {
      index: "01",
      title: "Custom Fabrics",
      description:
        "Performance textile options developed around product requirements.",
    },
    {
      index: "02",
      title: "Custom Graphics",
      description: "Brand-specific visual treatments for apparel and teamwear.",
    },
    {
      index: "03",
      title: "Custom Labels",
      description: "Brand identification and product labeling options.",
    },
    {
      index: "04",
      title: "Custom Packaging",
      description:
        "Packaging solutions aligned with the final product and brand.",
    },
  ] satisfies CustomSolution[],
};
