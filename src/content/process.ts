import { images } from "@/assets/images";

export interface ProcessStep {
  index: string;
  title: string;
  headline: string[];
  summary: string;
  description: string;
  points: string[];
  caption: string;
  image: string;
}

// Copy for stages 02-06 (description, points, caption) is placeholder – replace with approved text
export const processContent = {
  eyebrow: "Manufacturing process",
  title: [{ text: "How We" }, { text: "Manufacture.", accent: true }],
  description:
    "A structured manufacturing journey that connects customer requirements, product development, sampling, production, quality control and final delivery.",
  barLabel: "From idea to bulk production",
  stats: { highlight: "06", rest: "Core stages · 11 customer steps" },
  sidebarLabel: "Explore each stage",
  items: [
    {
      index: "01",
      title: "Inquiry & Design",
      headline: ["Inquiry &", "Design"],
      summary: "Requirements, design approval & technical direction",
      description:
        "We begin by understanding the customer's requirements and moving the approved product direction into a clear technical development stage.",
      points: [
        "Inquiry",
        "Design Approval",
        "Share Your Design",
        "Tech Pack Development",
      ],
      caption: "Design & Development",
      image: images.process.productBrief,
    },
    {
      index: "02",
      title: "Development",
      headline: ["Development"],
      summary: "Pattern, fabric and material development",
      description:
        "Product requirements are translated into patterns, material choices and construction details that can be produced consistently.",
      points: [
        "Pattern Making",
        "Fabric Selection",
        "Material Development",
        "Technical Specification",
      ],
      caption: "Product Development",
      image: images.process.development,
    },
    {
      index: "03",
      title: "Sampling",
      headline: ["Sampling"],
      summary: "Samples developed, reviewed and approved",
      description:
        "Samples are developed, reviewed against the specification and refined until the product is approved for bulk production.",
      points: ["Sample Development", "Fit Review", "Revisions", "Sample Approval"],
      caption: "Sampling Room",
      image: images.process.sampling,
    },
    {
      index: "04",
      title: "Production",
      headline: ["Production"],
      summary: "Cutting, embellishment, stitching and bulk production",
      description:
        "Approved products move into bulk production with controlled cutting, decoration and stitching stages.",
      points: ["Cutting", "Embellishment", "Stitching", "Bulk Production"],
      caption: "Production Floor",
      image: images.process.production,
    },
    {
      index: "05",
      title: "Quality Control",
      headline: ["Quality", "Control"],
      summary: "Quality checking and final inspection",
      description:
        "Quality checkpoints run through production, from material checks to final inspection against approved requirements.",
      points: [
        "Inline Checks",
        "Measurement Checks",
        "Final Inspection",
        "Inspection Reports",
      ],
      caption: "Quality Control",
      image: images.process.qualityControl,
    },
    {
      index: "06",
      title: "Packing & Delivery",
      headline: ["Packing &", "Delivery"],
      summary: "Packing, dispatch and worldwide delivery",
      description:
        "Finished products are packed, documented and prepared for dispatch and delivery to international destinations.",
      points: [
        "Packing",
        "Dispatch",
        "Export Documentation",
        "Worldwide Delivery",
      ],
      caption: "Export & Delivery",
      image: images.process.exportDelivery,
    },
  ] satisfies ProcessStep[],
};