import manufacturing from "@/assets/images/resources/manufacturing.jpg";
import fabrics from "@/assets/images/resources/fabrics.jpg";
import partner from "@/assets/images/resources/partner.jpg";

export type ResourceItem = {
  number: string;
  category: string;
  title: string;
  description: string;
  cta: string;
  to: string;
  image: string;
};

export const resourcesContent = {
  eyebrow: "Insight & resources",
  titleLines: [
    { lead: "Make better", accent: "sportswear." },
    { lead: "Make better", accent: "decisions." },
  ],
  description:
    "Practical knowledge for brands, teams and international buyers covering sportswear manufacturing, performance materials, product development, quality and global sourcing.",
  items: [
    {
      number: "01",
      category: "Manufacturing guide",
      title: "How custom sportswear manufacturing works",
      description:
        "From product brief and specifications through sampling, production control and export-ready finishing.",
      cta: "Read insight",
      to: "/resources",
      image: manufacturing,
    },
    {
      number: "02",
      category: "Fabric & performance",
      title: "Choosing fabrics for performance apparel",
      description:
        "A practical look at fabric weight, stretch, comfort and performance considerations for sportswear development.",
      cta: "Read insight",
      to: "/resources",
      image: fabrics,
    },
    {
      number: "03",
      category: "Sourcing guide",
      title: "How to choose a sportswear manufacturing partner",
      description:
        "The key capabilities, communication and production factors buyers should evaluate before starting a manufacturing program.",
      cta: "Read insight",
      to: "/resources",
      image: partner,
    },
  ] satisfies ResourceItem[],
  footerNote:
    "Knowledge for better products, stronger sourcing decisions and global growth",
  footerCta: { label: "Explore all resources", to: "/resources" },
};