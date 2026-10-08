import { images } from "@/assets/images";

export type CatalogueItem = {
  number: string;
  title: string;
  description: string;
  meta: string;
  file: string;
  image: string;
};

export const cataloguesContent = {
  eyebrow: "Catalogue",
  titleLines: [
    { lead: "Product", accent: "Catalogues", rest: "to" },
    { lead: "download.", accent: "", rest: "" },
  ],
  cta: "Download",

  items: [
    {
      number: "01",
      title: "Teamwear",
      description:
        "From product brief and specifications through sampling, production control and export-ready finishing.",
      meta: "PDF · 12 MB",
      file: "/catalogues/teamwear.pdf",
      image: images.teamwear,
    },
    {
      number: "02",
      title: "Performance Apparel",
      description:
        "A practical look at fabric weight, stretch, comfort and performance considerations for sportswear development.",
      meta: "PDF · 12 MB",
      file: "/catalogues/performance-apparel.pdf",
      image: images.fitness,
    },
  
    {
      number: "03",
      title: "Outerwear & Jackets",
      description:
        "The key capabilities, communication and production factors buyers should evaluate before starting a manufacturing program.",
      meta: "PDF · 12 MB",
      file: "/catalogues/outerwear-jackets.pdf",
      image: images["sports-apparel"],
    },
    {
      number: "04",
      title: "Accessories",
      description:
        "The key capabilities, communication and production factors buyers should evaluate before starting a manufacturing program.",
      meta: "PDF · 12 MB",
      file: "/catalogues/accessories.pdf",
      image: images.combat,
    },
  ] satisfies CatalogueItem[],
};