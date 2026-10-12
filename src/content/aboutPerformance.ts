import motion from "@/assets/images/capabilities/cap1.png";
import precision from "@/assets/images/capabilities/cap2.png";
import fabric from "@/assets/images/capabilities/cap3.png";

export type PerformanceFeature = { title: string; description: string };

export type PerformancePhoto = {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
};

export const aboutPerformanceContent = {
  eyebrow: "Factory Overview",
  titleLead: "Where product",
  titleRest: "becomes",
  titleAccent: "performance.",
  main: {
    eyebrow: "Manufacturing precision",
    title: ["Engineered for", "demanding sports", "environments."],
    description:
      "Our manufacturing language is centered on consistency, technical construction and performance-focused textile solutions — supporting custom apparel and international sporting-goods requirements.",
    features: [
      {
        title: "Fine Seams",
        description: "Construction focused on comfort and controlled finish.",
      },
      {
        title: "Laser Bonding",
        description:
          "Technical manufacturing capability highlighted in the brand system.",
      },
      {
        title: "High Tensile",
        description: "Durability-oriented textile performance.",
      },
      {
        title: "High Aeration",
        description: "Performance apparel designed around airflow and movement.",
      },
    ] satisfies PerformanceFeature[],
  },
  side: [
    {
      eyebrow: "Quality assurance",
      title: "Consistency by design.",
      description:
        "Quality is treated as a core manufacturing discipline: precise construction, material performance, repeatability and attention to detail across custom products.",
    },
    {
      eyebrow: "Fabrics for sportswear",
      title: "Performance textiles.",
      description:
        "The brand system highlights moisture-wicking polymers, high tensile durability and materials selected for demanding athletic environments.",
    },
  ],
  photos: {
    large: {
      eyebrow: "Performance apparel",
      title: "Engineered for motion",
      image: motion,
      imageAlt: "Athletes in navy and white performance kit inside a stadium",
    } satisfies PerformancePhoto,
    small: [
      {
        eyebrow: "Manufacturing",
        title: "Made with precision",
        image: precision,
        imageAlt: "Operators stitching navy sportswear on the production line",
      },
      {
        eyebrow: "Textile development",
        title: "Built around fabric",
        image: fabric,
        imageAlt: "Hands guiding blue technical fabric",
      },
    ] satisfies PerformancePhoto[],
  },
};