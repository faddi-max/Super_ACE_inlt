import { images } from "@/assets/images";
import gameJerseys from "@/assets/images/products/american-football/game-jerseys.png";
import footballPants from "@/assets/images/products/american-football/football-pants.png";
import uniformSets from "@/assets/images/products/american-football/uniform-sets.jpg";
import practiceJerseys from "@/assets/images/products/american-football/practice-jerseys.jpg";
import compressionTops from "@/assets/images/products/american-football/compression-tops.png";
import sidelineJackets from "@/assets/images/products/american-football/sideline-jackets.png";

export type BookProduct = {
  name: string;
  description: string;
  fabric: string;
  sizes: string;
  colourways: string;
  price: string;
  to: string;
  image: string;
};

export type BookPage =
  | {
      type: "cover";
      season: string;
      titleLines: [string, string];
      footer: string;
      tags: string[];
      image: string;
    }
  | {
      type: "intro";
      eyebrow: string;
      headline: [string, string];
      body: string;
      contentsLabel: string;
      contents: { number: string; title: string; page: string }[];
    }
  | {
      type: "section";
      number: string;
      title: string;
      subtitle: string;
      image: string;
    }
  | { type: "product"; section: string; product: BookProduct };

export type CatalogueBook = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  file: string;
  /** Keep this even: every leaf has a page on both sides */
  pages: BookPage[];
};

const spec = {
  fabric: "[FABRIC SPEC]",
  sizes: "[SIZE RANGE]",
  colourways: "[COLOURWAYS]",
  price: "[PRICE]",
  to: "/contact",
};

// Keyed by the catalogue title in catalogues.ts. Catalogues without an entry only get Download
export const catalogueBooks: Record<string, CatalogueBook> = {
  "Performance Apparel": {
    eyebrow: "Super Ace International",
    titleLead: "Performance",
    titleAccent: "Catalogues",
    description:
      "Flip through the collection, then download the full PDF for specifications and ordering details.",
    file: "/catalogues/performance-apparel.pdf",
    pages: [
      // 01 cover
      {
        type: "cover",
        season: "[SEASON / YEAR]",
        titleLines: ["Performance", "Collection"],
        footer: "Product Catalogue",
        tags: ["Teamwear", "Training", "Outerwear", "Accessories"],
        image: gameJerseys, // replace with the cover artwork
      },
      // 02 intro
      {
        type: "intro",
        eyebrow: "Introduction",
        headline: ["Built for", "the game."],
        body: "[Brand introduction: who Super Ace International makes kit for, and what sets the range apart. Two to three sentences.]",
        contentsLabel: "In this catalogue",
        contents: [
          { number: "01", title: "Teamwear", page: "P. 03" },
          { number: "02", title: "Training", page: "P. 06" },
          { number: "03", title: "Outerwear", page: "P. 09" },
          { number: "04", title: "Accessories", page: "P. 11" },
        ],
      },
      // 03 section 01
      {
        type: "section",
        number: "01",
        title: "Teamwear",
        subtitle: "Match-day kit for clubs, schools and academies.",
        image: images.teamwear,
      },
      // 04-05 teamwear products
      {
        type: "product",
        section: "Teamwear",
        product: {
          ...spec,
          name: "Pro Match Jersey",
          description:
            "Lightweight match shirt cut for a full range of movement.",
          image: gameJerseys,
        },
      },
      {
        type: "product",
        section: "Teamwear",
        product: {
          ...spec,
          name: "Match Shorts",
          description: "Training-ready shorts with an elasticated waistband.",
          image: footballPants,
        },
      },
      // 06 section 02
      {
        type: "section",
        number: "02",
        title: "Training",
        subtitle: "Breathable layers for sessions, warm-ups and rotation.",
        image: images.fitness,
      },
      // 07-08 training products
      {
        type: "product",
        section: "Training",
        product: {
          ...spec,
          name: "Practice Jersey",
          description:
            "Breathable mesh top for training sessions and warm-ups.",
          image: practiceJerseys,
        },
      },
      {
        type: "product",
        section: "Training",
        product: {
          ...spec,
          name: "Compression Top",
          description:
            "Close-fitting base layer for mobility and moisture management.",
          image: compressionTops,
        },
      },
      // 09 section 03
      {
        type: "section",
        number: "03",
        title: "Outerwear",
        subtitle: "Sideline and travel jackets with team identity.",
        image: images["sports-apparel"],
      },
      // 10 outerwear product
      {
        type: "product",
        section: "Outerwear",
        product: {
          ...spec,
          name: "Sideline Jacket",
          description:
            "Warm-up outerwear for travel and game-day presentation.",
          image: sidelineJackets,
        },
      },
      // 11 section 04
      {
        type: "section",
        number: "04",
        title: "Accessories",
        subtitle: "The finishing pieces that complete a team kit.",
        image: images.combat,
      },
      // 12 accessories product (placeholder image)
      {
        type: "product",
        section: "Accessories",
        product: {
          ...spec,
          name: "Team Kit Bag",
          description: "Durable carry bag sized for a full match-day kit.",
          image: uniformSets,
        },
      },
    ],
  },
};

export const catalogueSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const catalogueBookPath = (title: string) =>
  `/resources/catalogue/${catalogueSlug(title)}`;

export const findCatalogueBook = (slug: string) =>
  Object.entries(catalogueBooks).find(
    ([title]) => catalogueSlug(title) === slug,
  )?.[1];