export type AboutContent = {
  eyebrow: string;
  headline: { text: string; accent?: boolean }[];
  lead: string;
  body: string;
  features: { number: string; title: string; description: string }[];
  statements: { number: string; title: string; description: string }[];
  collageAlt: string;
};

export const aboutContent: AboutContent = {
  eyebrow: "About Super Ace",
  headline: [
    { text: "A " },
    { text: "Manufacturing Partner", accent: true },
    { text: " Built Around Performance." },
  ],
  lead: "Super Ace International develops custom sportswear and apparel solutions for brands turning product ideas into performance-ready collections.",
  body: "Our approach connects product development, specification, sampling and production into one focused manufacturing journey. The goal is simple: make the path from your concept to finished apparel clear, consistent and ready for demanding sports environments.",
  features: [
    {
      number: "01",
      title: "Custom Development",
      description:
        "Product solutions developed around brand requirements and specifications.",
    },
    {
      number: "02",
      title: "Performance Apparel",
      description:
        "Sportswear focused on performance, consistency and demanding sports environments.",
    },
    {
      number: "03",
      title: "Precision Manufacturing",
      description:
        "Manufacturing positioned around controlled construction and production quality.",
    },
    {
      number: "04",
      title: "Global Markets",
      description:
        "Solutions presented for international brands and global export requirements.",
    },
  ],
  statements: [
    {
      number: "01",
      title: "Our Vision",
      description:
        "Build Super Ace as a trusted global sportswear manufacturing partner, combining performance, precision and modern textile solutions.",
    },
    {
      number: "02",
      title: "Our Mission",
      description:
        "Develop and manufacture high-performance custom apparel with consistency, quality and a customer-focused production approach.",
    },
  ],
  collageAlt:
    "Athlete lifting a barbell, a basketball player mid-jump, a white tee, a varsity jacket and runners at dusk",
};
