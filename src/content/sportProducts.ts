import gameJerseys from "@/assets/images/products/american-football/game-jerseys.png";
import footballPants from "@/assets/images/products/american-football/football-pants.png";
import uniformSets from "@/assets/images/products/american-football/uniform-sets.jpg";
import practiceJerseys from "@/assets/images/products/american-football/practice-jerseys.jpg";
import compressionTops from "@/assets/images/products/american-football/compression-tops.png";
import sidelineJackets from "@/assets/images/products/american-football/sideline-jackets.png";

export type SportId =
  | "american-football"
  | "ice-hockey"
  | "soccer"
  | "basketball"
  | "baseball-softball"
  | "volleyball"
  | "rugby"
  | "lacrosse"
  | "cycling"
  | "hand-ball"
  | "tennis"
  | "cricket";

export type SportProduct = {
  number: string;
  tag: string;
  title: string;
  description: string;
  cta: string;
  to: string;
  image: string;
};

export const sportProductsContent = {
  selectEyebrow: "01 / Sportswear / Team Wear",
  selectTitleLead: "Select a",
  selectTitleAccent: "Sport.",
  tabsLabel: "Select a sport",
  gridAccent: "Apparel.",
  emptyNote: "Products for this sport are being added.",
  viewAll: { label: "View All Products", to: "/products" },
  sports: [
    { id: "american-football", label: "American Football" },
    { id: "ice-hockey", label: "Ice Hockey" },
    { id: "soccer", label: "Soccer" },
    { id: "basketball", label: "Basketball" },
    { id: "baseball-softball", label: "Baseball / Softball" },
    { id: "volleyball", label: "Volleyball" },
    { id: "rugby", label: "Rugby" },
    { id: "lacrosse", label: "Lacrosse" },
    { id: "cycling", label: "Cycling" },
    { id: "hand-ball", label: "Hand Ball" },
    { id: "tennis", label: "Tennis" },
    { id: "cricket", label: "Cricket" },
  ] satisfies { id: SportId; label: string }[],
  // Only American Football is designed so far – add the other sports here
  products: {
    "american-football": [
      {
        number: "01",
        tag: "Game Day",
        title: "Game\nJerseys",
        description:
          "Custom mesh jerseys with team colors, names and numbers, built for game-day team identity and repeated play.",
        cta: "View Products",
        to: "/products",
        image: gameJerseys,
      },
      {
        number: "02",
        tag: "Game Day",
        title: "Football\nPants",
        description:
          "Football pants designed for the lower half of the uniform, with secure waist construction and movement-focused fit.",
        cta: "View Products",
        to: "/products",
        image: footballPants,
      },
      {
        number: "03",
        tag: "Complete Kit",
        title: "Complete\nUniform Sets",
        description:
          "Coordinated jersey and pants systems developed together around team color, graphics and roster consistency.",
        cta: "View Products",
        to: "/products",
        image: uniformSets,
      },
      {
        number: "04",
        tag: "Training",
        title: "Practice\nJerseys",
        description:
          "Breathable mesh practice tops for training sessions, warm-ups and regular team rotation.",
        cta: "View Products",
        to: "/products",
        image: practiceJerseys,
      },
      {
        number: "05",
        tag: "Performance Layer",
        title: "Compression\nTops",
        description:
          "Close-fitting performance base layers designed for mobility, moisture management and use under equipment.",
        cta: "View Products",
        to: "/products",
        image: compressionTops,
      },
      {
        number: "06",
        tag: "Sideline",
        title: "Sideline\nJackets",
        description:
          "Warm-up and sideline outerwear for travel, game-day presentation and team identity away from the field.",
        cta: "View Products",
        to: "/products",
        image: sidelineJackets,
      },
    ],
  } as Partial<Record<SportId, SportProduct[]>>,
};
