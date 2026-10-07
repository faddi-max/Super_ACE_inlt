import {
  journeyRings,
  productionJourneyContent,
} from "@/content/productionJourney";
import fabric from "@/assets/images/capabilities/raw-material.png";
import zipper from "@/assets/images/material-system/zipper.png";
import thread from "@/assets/images/material-system/thread-accessories.png";
import buttons from "@/assets/images/material-system/buttons.png";
import labels from "@/assets/images/material-system/labels.jpg";

export type MaterialItem = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export const materialSystemContent = {
  // Reuses the grid background and ring from the production journey
  background: productionJourneyContent.background,
  ring: journeyRings.dark,
  eyebrow: "Material / Scope",
  titleLead: "The",
  titleAccent: "Material",
  titleRest: "System.",
  description:
    "Super Ace's raw-material capability is organized around the four material groups supplied in the current capability structure. Each group is presented as a distinct part of the manufacturing foundation rather than as a generic product catalogue.",
  badge: "Material",
  items: [
    {
      number: "01",
      title: "Fabric\nMaterial",
      description:
        "The primary textile input for sportswear and apparel production. This capability module establishes fabric as the first material layer within the Super Ace manufacturing system.",
      tags: ["Fabric Material", "Textile Input", "Production Foundation"],
      image: fabric,
    },
    // 02-05: titles read from the design; descriptions and tags are placeholders – replace with approved copy
    {
      number: "02",
      title: "Zipper",
      description:
        "Closure components selected and matched to the garment specification, construction and performance requirements.",
      tags: ["Fasteners", "Garment Components", "Closure Systems"],
      image: zipper,
    },
    {
      number: "03",
      title: "Thread /\nAccessories",
      description:
        "Thread and supporting accessories that hold the garment together and complete its construction and finish.",
      tags: ["Thread", "Accessories", "Support Materials"],
      image: thread,
    },
    {
      number: "04",
      title: "Buttons",
      description:
        "Button components sourced to match the garment design, construction and finishing requirements.",
      tags: ["Buttons", "Garment Components", "Finishing Details"],
      image: buttons,
    },
    {
      number: "05",
      title: "Labels",
      description:
        "Brand and care labels that identify the product and carry brand details through to the finished garment.",
      tags: ["Labels", "Brand Identification", "Product Detail"],
      image: labels,
    },
  ] satisfies MaterialItem[],
};