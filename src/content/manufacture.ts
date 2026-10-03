import { images } from "@/assets/images";

export interface ManufactureItem {
  index: string;
  title: string;
  description: string;
  tags: string[];
  to: string;
  image: string;
}

export const manufactureContent = {
  eyebrow: "Our Manufacturing Range",
  title: ["What We", "Manufacture"],
  description:
    "From team performance to technical and lifestyle apparel, Super Ace develops customized products for global brands",
  panelEyebrow: "Manufacturing Range",
  defaultIndex: 3,
  items: [
    {
      index: "01",
      title: "Teamwear",
      description:
        "Custom team kits, jerseys and performance garments for global sports brands.",
      tags: ["Jerseys", "Shorts", "Tracksuits", "Jackets"],
      to: "/categories/teamwear",
      image: images.manufacture.uniform,
    },
    {
      index: "02",
      title: "Performance",
      description:
        "Technical garments engineered for training, movement and comfort.",
      tags: ["Training", "Fitness", "Running", "Compression"],
      to: "/categories/sportswear",
      image: images.manufacture.uniform,
    },
    {
      index: "03",
      title: "Combat",
      description:
        "Protective and performance products built for combat sports.",
      tags: ["Boxing", "MMA", "Judo", "Karate"],
      to: "/categories/combat",
      image: images.manufacture.uniform,
    },
    {
      index: "04",
      title: "Uniform",
      description:
        "Supporting products that extend and complete your sportswear collection.",
      tags: ["Soccer", "Tennis", "Football", "Volleyball"],
      to: "/categories/uniforms",
      image: images.manufacture.uniform,
    },
  ] satisfies ManufactureItem[],
};