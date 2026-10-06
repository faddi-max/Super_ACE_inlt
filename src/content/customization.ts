import reference from "@/assets/images/customization/reference.png";
import product from "@/assets/images/customization/product.png";

export type CustomizationItem = {
  number: string;
  title: string;
  description: string;
};

export const customizationContent = {
  eyebrow: "Customization",
  title: ["Build around", "your identity."],
  reference: {
    image: reference,
    imageAlt:
      "Technical sketch of a branded sports jersey beside fabric rolls, a color card and a hang tag",
    label: "Real product reference",
    text: "Brand + Name + Number",
  },
  items: [
    {
      number: "01",
      title: "Color",
      description: "Approved color system.",
    },
    {
      number: "02",
      title: "Artwork",
      description: "Graphics and placements.",
    },
    {
      number: "03",
      title: "Branding",
      description: "Logos, badges and marks.",
    },
    {
      number: "04",
      title: "Personalization",
      description: "Names and numbers where applicable.",
    },
    {
      number: "05",
      title: "Labels",
      description: "Brand, size and care details.",
    },
    {
      number: "06",
      title: "Packaging",
      description: "Final presentation and packing.",
    },
  ] satisfies CustomizationItem[],
  output: {
    image: product,
    imageAlt:
      "Finished navy and blue custom jersey with folded kits and a branded hang tag",
    eyebrow: "Final output",
    title: ["Your", "Product."],
    description:
      "One approved specification carried through to finished garments.",
  },
};
