export type MarketItem = {
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
    { region: "North America", countries: "USA · Canada", to: "/contact" },
    {
      region: "Europe",
      countries: "UK · Germany · France · Netherlands",
      to: "/contact",
    },
    { region: "Oceania", countries: "Australia · New Zealand", to: "/contact" },
    {
      region: "Middle East",
      countries: "UAE · Saudi Arabia · GCC",
      to: "/contact",
    },
    {
      region: "Asia",
      countries: "Japan · South Korea · Singapore",
      to: "/contact",
    },
    {
      region: "Africa",
      countries: "South Africa · Nigeria · Kenya",
      to: "/contact",
    },
  ] satisfies MarketItem[],
  stripLabel: "Export-ready manufacturing",
  pills: ["OEM / ODM", "Private Label", "Export Packing", "Global Shipping"],
};