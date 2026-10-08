export type Principle = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  label: string;
};

export type Highlight = { title: string; description: string };

export const futureWithUsContent = {
  eyebrow: "Future with us",
  titleLines: [
    { text: "Built to grow with" },
    { text: "Global brands.", accent: true },
  ] satisfies { text: string; accent?: boolean }[],
  description:
    "Four principles shape every garment we make and every partnership we build so your brand can scale with a manufacturer that engineers performance and delivers export excellence.",
  principles: [
    {
      number: "01",
      title: "Modern",
      subtitle: "Designs that move with your brand.",
      description:
        "Clean, aerodynamic silhouettes engineered for motion — developed from your concept or tech pack.",
      label: "Engineered for motion",
    },
    {
      number: "02",
      title: "Athletic",
      subtitle: "Made for people who push limits.",
      description:
        "Products aligned with human velocity and high performance, built for demanding sports environments.",
      label: "Aligned with performance",
    },
    {
      number: "03",
      title: "Premium",
      subtitle: "Detail your customers can feel.",
      description:
        "Zero-defect tolerance, laser bonding and fine seams — precision finishing on every order.",
      label: "Zero-defect tolerance",
    },
    {
      number: "04",
      title: "Driven",
      subtitle: "Durable where it counts.",
      description:
        "Moisture-wicking polymers and high tensile durability that hold up across extreme conditions.",
      label: "High tensile durability",
    },
  ] satisfies Principle[],
  highlights: [
    {
      title: "Concept to finished production",
      description:
        "Design support, sampling and bulk manufacturing coordinated under one roof.",
    },
    {
      title: "Custom solutions for global brands",
      description:
        "Teamwear, private label and bespoke programs built around your specification.",
    },
    {
      title: "Consistent export quality",
      description:
        "The same standard from first sample to final shipment, order after order.",
    },
  ] satisfies Highlight[],
};