export type DescriptionPart = { text: string; bold?: boolean };

export type ChooseUsItem = {
  number: string;
  title: string;
  description: DescriptionPart[];
  /** Shown only while the row is active */
  cta?: { label: string; to: string };
};

export const chooseUsContent = {
  eyebrow: "Why choose Super Ace",
  titleLead: "Why Choose",
  titleAccent: "Super Ace?",
  description:
    "From premium fabric and stitching quality to flexible customization and worldwide export, Super Ace brings the manufacturing advantages brands need to move from product idea to finished sportswear.",
  cta: { label: "Start a Project", to: "/contact" },
  tag: "Manufacturing Advantage",
  tagline: [
    { text: "Quality. " },
    { text: "Flexibility.", accent: true },
    { text: " Global Reach." },
  ] satisfies { text: string; accent?: boolean }[],
  footerNote: "Super Ace International",
  items: [
    {
      number: "01",
      title: "Premium Fabric",
      description: [
        {
          text: "Premium fabric selected for sportswear performance and product requirements.",
        },
      ],
      cta: { label: "Explore", to: "/capabilities" },
    },
    {
      number: "02",
      title: "Best Stitching Quality",
      description: [
        {
          text: "Best stitching quality for clean construction and a consistent finished garment.",
        },
      ],
    },
    {
      number: "03",
      title: "2 Weeks Turnaround Time",
      description: [
        { text: "A " },
        { text: "2 weeks", bold: true },
        { text: " turnaround time identified by the client as a key advantage." },
      ],
    },
    {
      number: "04",
      title: "Quality Inspection System",
      description: [
        {
          text: "A quality inspection system supporting consistent production and finished products.",
        },
      ],
    },
    {
      number: "05",
      title: "Full Customization",
      description: [
        { text: "Full " },
        { text: "OEM / ODM / PL", bold: true },
        { text: " customization for brand-specific requirements." },
      ],
    },
    {
      number: "06",
      title: "29+ Years of Experience",
      description: [
        { text: "More than " },
        { text: "29 years", bold: true },
        { text: " of experience listed as a Super Ace advantage." },
      ],
    },
    {
      number: "07",
      title: "Low MOQ",
      description: [
        {
          text: "Low MOQ gives brands greater flexibility when developing and ordering products.",
        },
      ],
    },
    {
      number: "08",
      title: "Worldwide Export",
      description: [
        {
          text: "Worldwide export capability for brands serving international markets.",
        },
      ],
    },
  ] satisfies ChooseUsItem[],
};