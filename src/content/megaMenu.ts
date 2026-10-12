export type MegaColumn = {
  title: string;
  to: string;
  links: { label: string; to: string }[];
};

const slug = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const column = (title: string, to: string, labels: string[]): MegaColumn => ({
  title,
  to,
  links: labels.map((label) => ({ label, to: `${to}#${slug(label)}` })),
});

export const categoriesMegaMenuContent = {
  viewAll: { label: "View all categories", to: "/categories" },
  strip: "OEM · ODM · Private Label",
  // Sub-link labels are placeholders – replace with the approved product list
  columns: [
    column("Teamwear", "/categories/teamwear", [
      "Jerseys",
      "Shorts",
      "Tracksuits",
      "Jackets",
    ]),
    column("Fitness & Training", "/categories/fitness", [
      "Training",
      "Running",
      "Compression",
      "Gym Wear",
    ]),
    column("Sports Apparel", "/categories/sportswear", [
      "T-Shirts",
      "Hoodies",
      "Polos",
      "Track Pants",
    ]),
    column("Combat Sports", "/categories/combat", [
      "Boxing",
      "MMA",
      "Judo",
      "Karate",
    ]),
  ] satisfies MegaColumn[],
};