// Export "Sportswear Design Blueprint Collage-2.png" from Figma (crop, no background fill)
// and save it at this path.
import collage from "@/assets/images/product-development/collage.png";

export type DevelopmentIcon = "pencil" | "book" | "file" | "check";

export type DevelopmentStep = {
  number: string;
  title: string;
  description: string;
  icon: DevelopmentIcon;
  detail: { label: string; value: string };
};

export const productDevelopmentContent = {
  eyebrow: "Product development",
  titleLead: "From your idea",
  titleRest: "to a",
  titleAccent: "product.",
  description:
    "A clear, step-by-step journey turns your concept into a production-ready garment. We align the design, fit and specifications before bulk manufacturing begins.",
  collage,
  collageAlt:
    "Blueprint-style collage of technical sportswear garments, tech packs and fabric swatches",
  journeyLabel: "Your product development journey",
  steps: [
    {
      number: "01",
      title: "Share your idea",
      description:
        "Send your design, inspiration images, tech pack or a brief describing the product you want to make.",
      icon: "pencil",
      detail: { label: "You provide", value: "Concept, artwork or reference" },
    },
    {
      number: "02",
      title: "Confirm details",
      description:
        "Review fabric, trims, measurements, colours and construction details so everyone works to the same brief.",
      icon: "book",
      detail: { label: "We align on", value: "Product specifications" },
    },
    {
      number: "03",
      title: "Review sample",
      description:
        "Assess the prototype for fit, look and feel. Share feedback and request adjustments where needed.",
      icon: "file",
      detail: { label: "We refine", value: "Fit and finish" },
    },
    {
      number: "04",
      title: "Approve for production",
      description:
        "Once the sample and specifications are approved, the product can move toward bulk production.",
      icon: "check",
      detail: { label: "Next stage", value: "Bulk manufacturing" },
    },
  ] satisfies DevelopmentStep[],
  flow: ["Idea", "Specifications", "Sample", "Approval"],
  footer: {
    strong: "Clear expectations. Fewer surprises.",
    note: "Key decisions are reviewed before bulk production, helping keep the final product aligned with the approved brief.",
    cta: { label: "Discuss your project", to: "/contact" },
  },
};