export type MarketItem = {
  number: string;
  region: string;
  countries: string;
  to: string;
};

export const exportMarketContent = {
  eyebrow: "Export market",
  titleLead: "Build in Sialkot.",
  titleAccent: "Made for global",
  titleRest: "brands.",
  description:
    "Super Ace supports international sportswear brands, teams and private-label buyers with export-ready manufacturing, consistent production standards and flexible OEM solutions.",
  markets: [
    {
      number: "01",
      region: "North America",
      countries: "USA · Canada",
      to: "/contact",
    },
    {
      number: "02",
      region: "Europe",
      countries: "UK · Germany · France · Netherlands",
      to: "/contact",
    },
    {
      number: "03",
      region: "Middle East",
      countries: "UAE · Saudi Arabia · GCC",
      to: "/contact",
    },
    {
      number: "04",
      region: "Oceania",
      countries: "Australia · New Zealand",
      to: "/contact",
    },
  ] satisfies MarketItem[],
  stripLabel: "Export-ready manufacturing",
  pills: ["OEM / ODM", "Private Label", "Export Packing", "Global Shipping"],
};