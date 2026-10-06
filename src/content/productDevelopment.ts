import { images } from "@/assets/images";

export type DevelopmentItem = {
  number: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const productDevelopmentContent = {
  eyebrow: "Product development",
  titleLead: "From your idea",
  titleRest: "to a",
  titleAccent: "product.",
  route: {
    eyebrow: "Product development route",
    title: "One product.\nOne controlled\npath.",
    description:
      "Reference, specification and approved details move through a defined development sequence before bulk production.",
  },
  steps: ["Brief", "Materials", "Construction", "Approval"],
  banner: {
    image: images.productDevelopment.banner,
    imageAlt:
      "Flat-lay of technical sportswear garments with pattern and tech pack sketches",
    label: "Development reference",
    flow: ["Concept", "Tech Pack", "Sampling", "Fit", "Production Handoff"],
  },
  items: [
    {
      number: "01",
      tag: "Brief",
      title: "Reference",
      description: "Product, artwork and requirements.",
      image: images.productDevelopment.reference,
      imageAlt: "Fabric swatches, a technical flat and a reference photo",
    },
    {
      number: "02",
      tag: "Material",
      title: "Specification",
      description: "Fabric, trims, colors and measurements.",
      image: images.productDevelopment.specification,
      imageAlt: "Pattern software showing a garment specification",
    },
    {
      number: "03",
      tag: "Construction",
      title: "Garment",
      description: "Fit, panels, seams and finishing.",
      image: images.productDevelopment.garment,
      imageAlt: "Hands guiding fabric through an industrial sewing machine",
    },
    {
      number: "04",
      tag: "Approval",
      title: "Finishing",
      description: "Approved sample becomes the benchmark.",
      image: images.productDevelopment.finishing,
      imageAlt: "Inspecting a finished sample against an approval checklist",
    },
  ] satisfies DevelopmentItem[],
};
