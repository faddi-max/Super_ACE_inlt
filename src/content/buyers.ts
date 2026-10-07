export type BuyerItem = {
  number: string;
  title: string;
  description: string;
};

export const buyersContent = {
  // Eyebrow read from a small screenshot – verify
  eyebrow: "Global fit",
  title: ["Build for", "Different Buyers."],
  // Placeholder descriptions – replace with approved content
  items: [
    {
      number: "01",
      title: "Brands",
      description: "Custom sportswear collections developed around your brand.",
    },
    {
      number: "02",
      title: "Teams & Clubs",
      description: "Teamwear and uniform programs for clubs and organizations.",
    },
    {
      number: "03",
      title: "Organizations",
      description: "Branded apparel for institutions, events and corporate use.",
    },
    {
      number: "04",
      title: "Distributors",
      description: "Consistent bulk supply for regional distribution.",
    },
    {
      number: "05",
      title: "International Buyers",
      description: "Export-ready production for global sourcing programs.",
    },
  ] satisfies BuyerItem[],
};