export type ComplianceIcon = "shield" | "person" | "flame" | "document";

export type ComplianceItem = {
  number: string;
  title: string;
  description: string;
  icon: ComplianceIcon;
};

export const complianceContent = {
  eyebrow: "Responsible manufacturing",
  titleLead: "Compliance &",
  titleAccent: "Workplace Safety",
  description:
    "Responsible manufacturing is part of how we build long-term partnerships. At Super Ace, safe working practices, responsible workplace standards and clear production controls support the people behind every performance garment we manufacture.",
  items: [
    {
      number: "01",
      title: "Safe Workplace",
      description:
        "Organized production areas, practical safety controls and a workplace designed around employee wellbeing.",
      icon: "shield",
    },
    {
      number: "02",
      title: "Worker Wellbeing",
      description:
        "Respectful working practices, clear responsibilities and a culture that values skilled production teams.",
      icon: "person",
    },
    {
      number: "03",
      title: "Emergency Readiness",
      description:
        "Fire prevention, emergency access and response procedures form part of responsible factory operations.",
      icon: "flame",
    },
    {
      number: "04",
      title: "Compliance\nTransparency",
      description:
        "Clear production records and buyer-focused documentation support responsible sourcing conversations.",
      icon: "document",
    },
  ] satisfies ComplianceItem[],
};