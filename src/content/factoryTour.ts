import { images } from "@/assets/images";
import pattern from "@/assets/images/capabilities/pattern.png";
import stitching from "@/assets/images/capabilities/stitching.png";
import rawMaterial from "@/assets/images/capabilities/raw-material.png";
import packaging from "@/assets/images/capabilities/packaging.png";
import inspection from "@/assets/images/quality/equipment-inspection.jpg";
import apparelCollection from "@/assets/images/choose-us/apparel-collection.jpg";
import garmentCraft from "@/assets/images/choose-us/garment-craft.jpg";
import apparelRange from "@/assets/images/choose-us/apparel-range.jpg";

export type FactoryGroup =
  | "design"
  | "production"
  | "quality"
  | "packing"
  | "shipping";

export type Department = {
  number: string;
  title: string;
  description: string;
  image: string;
  group?: FactoryGroup;
};

export type FactoryArea = {
  id: FactoryGroup;
  number: string;
  title: string;
  description: string;
};

// Descriptions for 02-11, the area strip copy and every photo are placeholders – replace with approved content
export const factoryTourContent = {
  eyebrow: "Factory tour",
  title: [{ text: "Where We" }, { text: "Manufacture.", accent: true }],
  description:
    "Explore the Super Ace manufacturing environment through a clean visual journey covering development, production, finishing, inspection, packing and shipping.",
  watermark: "Factory",
  chip: "Super Ace International · Factory Tour",
  panelTitle: "Departments",
  playLabel: "Play department tour",
  pauseLabel: "Pause department tour",
  departments: [
    {
      number: "01",
      title: "Design Office",
      description:
        "Product concepts, specifications and development requirements move from ideas into production-ready direction.",
      image: images.process.development,
      group: "design",
    },
    {
      number: "02",
      title: "Cutting Department",
      description:
        "Fabric is spread, marked and cut to pattern with controlled accuracy.",
      image: pattern,
      group: "production",
    },
    {
      number: "03",
      title: "Printing",
      description:
        "Artwork and branding are applied to panels before assembly.",
      image: apparelCollection,
      group: "production",
    },
    {
      number: "04",
      title: "Embroidery",
      description:
        "Logos, badges and detailing are embroidered to the approved specification.",
      image: garmentCraft,
      group: "production",
    },
    {
      number: "05",
      title: "Stitching Hall",
      description:
        "Cut panels are stitched into garments on dedicated production lines.",
      image: stitching,
      group: "production",
    },
    {
      number: "06",
      title: "Quality Control",
      description:
        "Garments are checked against approved measurements and standards.",
      image: inspection,
      group: "quality",
    },
    {
      number: "07",
      title: "Warehouse",
      description:
        "Materials and finished stock are stored and tracked ahead of dispatch.",
      image: rawMaterial,
      group: "packing",
    },
    {
      number: "08",
      title: "Packing",
      description:
        "Orders are folded, labelled and packed for export.",
      image: packaging,
      group: "packing",
    },
    {
      number: "09",
      title: "Shipping",
      description:
        "Finished orders are inspected, documented and dispatched worldwide.",
      image: images.process.exportDelivery,
      group: "shipping",
    },
    {
      number: "10",
      title: "Professional Photography",
      description:
        "Finished products are photographed for catalogues and brand presentation.",
      image: apparelRange,
    },
    {
      number: "11",
      title: "Factory Tour",
      description:
        "A complete view of the production floor, from first cut to final pack.",
      image: images.factoryFloor,
    },
  ] satisfies Department[],
  areas: [
    {
      id: "design",
      number: "01",
      title: "Design",
      description: "Design office and product development.",
    },
    {
      id: "production",
      number: "02",
      title: "Production",
      description: "Cutting, printing, embroidery and stitching.",
    },
    {
      id: "quality",
      number: "03",
      title: "Quality",
      description: "Quality control and consistency checks.",
    },
    {
      id: "packing",
      number: "04",
      title: "Packing",
      description: "Warehouse handling and finished-order packing.",
    },
    {
      id: "shipping",
      number: "05",
      title: "Shipping",
      description: "Inspection and dispatch of products.",
    },
  ] satisfies FactoryArea[],
};