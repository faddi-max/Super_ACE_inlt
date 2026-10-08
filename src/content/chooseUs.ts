import customManufacturing from "@/assets/images/choose-us/custom-manufacturing.jpg";
import apparelRange from "@/assets/images/choose-us/apparel-range.jpg";
import garmentCraft from "@/assets/images/choose-us/garment-craft.jpg";
import apparelCollection from "@/assets/images/choose-us/apparel-collection.jpg";

export type ChooseUsItem = {
  title: string;
  description: string;
  image: string;
};

export const chooseUsContent = {
  eyebrow: "Choose Us",
  titleLead: "Why Choose",
  titleAccent: "Super Ace",
  description:
    "We combine technical sportswear manufacturing, controlled quality and custom development to deliver with confidence for global brands.",
  items: [
    {
      title: "Custom Manufacturing",
      description:
        "Custom sportswear developed around your designs, specifications, branding and performance requirements.",
      image: garmentCraft,
    },
    {
      title: "Quality Control",
      description:
        "Defined inspection points help maintain consistency across materials, construction, finishing and final orders.",
      image: customManufacturing,
    },
    {
      title: "Performance Textiles",
      description:
        "Technical fabric and construction solutions selected for fit, comfort, durability and performance.",
      image: apparelRange,
    },
    {
      title: "Specification Driven",
      description:
        "Every production program is aligned with approved product details, technical requirements and brand standards.",
      image: apparelCollection,
    },
    // Placeholder copy – replace with approved content
    {
      title: "Export Ready",
      description:
        "Packing, documentation and delivery planning aligned with international shipping requirements.",
      image: customManufacturing,
    },
    {
      title: "Flexible Development",
      description:
        "From samples to bulk production, programs are developed to suit your brand and order volumes.",
      image: garmentCraft,
    },
  ] satisfies ChooseUsItem[],
};
