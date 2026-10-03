import { images } from "@/assets/images";

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
  to: string;
  image: string;
}

export const processContent = {
  eyebrow: "From Concept to Production",
  title: ["How We", "Manufacture."],
  items: [
    {
      index: "01",
      title: "Product Brief",
      description:
        "Understand product requirements, specifications and project objectives.",
      to: "/process",
      image: images.process.productBrief,
    },
    {
      index: "02",
      title: "Development",
      description:
        "Translate the product requirements into a manufacturable apparel solution.",
      to: "/process",
      image: images.process.development,
    },
    {
      index: "03",
      title: "Sampling",
      description:
        "Develop samples for review and approval before bulk production.",
      to: "/process",
      image: images.process.sampling,
    },
    {
      index: "04",
      title: "Production",
      description: "Move approved products into the manufacturing stage.",
      to: "/process",
      image: images.process.production,
    },
    {
      index: "05",
      title: "Quality Control",
      description:
        "Check production against approved product requirements and standards.",
      to: "/process",
      image: images.process.qualityControl,
    },
    {
      index: "06",
      title: "Export & Delivery",
      description:
        "Prepare finished products for international shipment and delivery.",
      to: "/process",
      image: images.process.exportDelivery,
    },
  ] satisfies ProcessStep[],
};