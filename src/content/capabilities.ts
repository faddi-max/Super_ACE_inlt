import research from "@/assets/images/capabilities/research.png";
import rawMaterial from "@/assets/images/capabilities/raw-material.png";
import pattern from "@/assets/images/capabilities/pattern.png";
import stitching from "@/assets/images/capabilities/stitching.png";
import quality from "@/assets/images/capabilities/quality.png";
import packaging from "@/assets/images/capabilities/packaging.png";

export type CapabilityItem = {
  number: string;
  title: string;
  description: string;
  image: string;
  to: string;
};

export const capabilitiesContent = {
  eyebrow: "Manufacturing capabilities",
  titleLead: "Built to perform.",
  titleRest: "Built for",
  titleAccent: "your brand.",
  description:
    "From technical fabrics to finished sportswear, our capabilities are built around performance, precision and reliable global production.",
  items: [
    {
      number: "01",
      title: "Research & Development",
      description:
        "Technical fabrics engineered for comfort, movement and durability.",
      image: research,
      to: "/capabilities",
    },
    // Descriptions for 02-07 were read from a small screenshot – verify
    {
      number: "02",
      title: "Raw Material",
      description:
        "From concept and specification to production-ready sportswear.",
      image: rawMaterial,
      to: "/capabilities",
    },
    {
      number: "03",
      title: "Pattern Making and Cutting",
      description:
        "Technical patterns and precise cutting that keep every size consistent.",
      image: pattern,
      to: "/capabilities",
    },
    {
      number: "04",
      title: "Stitching",
      description:
        "Clean, consistent and strong stitching built for high-performance wear.",
      image: stitching,
      to: "/capabilities",
    },
    {
      number: "05",
      title: "Embellishment",
      description:
        "Branded details and finishing elements for a complete product.",
      image: quality,
      to: "/capabilities",
    },
    {
      number: "06",
      title: "Quality Check",
      description:
        "Inspection points that keep every order consistent and export-ready.",
      image: quality,
      to: "/capabilities",
    },
    {
      number: "07",
      title: "Packaging & Export",
      description:
        "Production-ready packing prepared for efficient global delivery.",
      image: packaging,
      to: "/capabilities",
    },
  ] satisfies CapabilityItem[],
};