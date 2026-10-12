export type BuyerItem = {
  number: string;
  title: string;
  description: string;
  to: string;
};

export const buyersContent = {
  eyebrow: "Global B2B",
  titleLines: [
    [{ text: "Built for " }, { text: "Different", accent: true }],
    [{ text: "Buyers." }],
  ] satisfies { text: string; accent?: boolean }[][],
  description:
    "Whether you're building a brand, outfitting a team or supplying a market, Super Ace supports your needs with tailored sportswear manufacturing.",
  items: [
    {
      number: "01",
      title: "Brands",
      description:
        "Custom collections and private-label products developed around your brand identity.",
      to: "/contact",
    },
    {
      number: "02",
      title: "Teams & Clubs",
      description:
        "Sports-specific apparel and coordinated kits for teams, clubs and training programs.",
      to: "/contact",
    },
    {
      number: "03",
      title: "Organizations",
      description:
        "Performance apparel and coordinated products for organizations and group programs.",
      to: "/contact",
    },
    {
      number: "04",
      title: "Distributors",
      description:
        "Manufacturing support for resellers and commercial sportswear collections.",
      to: "/contact",
    },
    {
      number: "05",
      title: "International Buyers",
      description:
        "Export-oriented production coordination, packing and order preparation.",
      to: "/contact",
    },
  ] satisfies BuyerItem[],
};