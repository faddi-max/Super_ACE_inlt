import rings from "@/assets/images/production-infrastructure/rings.png";
import visual from "@/assets/images/production-infrastructure/visual.png";

export type InfrastructureItem = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export const productionInfrastructureContent = {
  eyebrow: "Production Infrastructure",
  titleLead: "Built",
  titleAccent: "Behind",
  titleRest: "The Product.",
  panelLabel: "Selected production infrastructure",
  rings,
  visual,
  visualAlt:
    "Technical apparel collection with pattern and construction line drawings",
  badge: "Production / Infrastructure",
  overlay: ["Engineered", "for production."],
  items: [
    {
      number: "01",
      title: "Knitting",
      description: "Dedicated knitting machinery supporting textile production.",
      tags: ["Knitting Machines", "Double Rib", "Single Knit"],
    },
    {
      number: "02",
      title: "Dyeing",
      description: "Equipment supporting dyeing and fabric-processing stages.",
      tags: ["Jet", "Boiler", "Dunker", "Raising", "Dryer"],
    },
    {
      number: "03",
      title: "Pattern Development",
      description: "Garment pattern technology supporting development.",
      tags: ["Gerber Tech", "Garment Pattern"],
    },
    {
      number: "04",
      title: "Garment Construction",
      description:
        "Specialist stitching infrastructure for garment construction.",
      tags: ["Stitching Machines", "Overlock", "Flatlock", "Lockstitch"],
    },
  ] satisfies InfrastructureItem[],
  cta: {
    eyebrow: "Technical library / Full equipment overview",
    title: ["Explore the machinery", "behind production."],
    description:
      "View the complete manufacturing equipment overview, including the machinery categories documented by the client across knitting, dyeing, pattern development, embroidery, sublimation, heat transfer and stitching.",
    button: { label: "View full machinery", to: "/productInfrastructure" },
  },
};
