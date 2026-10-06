import { images } from "@/assets/images";

export type TourStep = {
  number: string;
  title: string;
  description: string;
  /** Hotspot position as % of the image */
  hotspot: { x: number; y: number; labelSide?: "left" | "right" };
};

export const factoryTourContent = {
  eyebrow: "Factory tour",
  titleLead: "Where We",
  titleAccent: "Manufacture.",
  image: images.factoryFloor,
  imageAlt: "Sewing line on the SUPER ACE production floor",
  caption: "Production floor / Illustrative image",
  steps: [
    {
      number: "01",
      title: "Cutting",
      description: "Fabric is spread, marked and cut to pattern.",
      hotspot: { x: 84.7, y: 52.2 },
    },
    // Placeholder copy for 02-05 – replace with approved content
    {
      number: "02",
      title: "Production",
      description: "Cut panels are stitched into garments on dedicated lines.",
      hotspot: { x: 32.5, y: 62 },
    },
    {
      number: "03",
      title: "Finishing",
      description: "Trimming, pressing and detailing completed to spec.",
      hotspot: { x: 56.4, y: 70.1 },
    },
    {
      number: "04",
      title: "Inspection",
      description: "Garments checked against approved measurements.",
      hotspot: { x: 97.6, y: 78.1, labelSide: "left" },
    },
    {
      number: "05",
      title: "Packing",
      description: "Orders folded, labelled and packed for export.",
      hotspot: { x: 71.7, y: 40.1 },
    },
  ] satisfies TourStep[],
};