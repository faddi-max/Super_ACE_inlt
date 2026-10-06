import resourcesBackground from "./resources/bg.png";
import resourcesManufacturing from "./resources/manufacturing.jpg";
import resourcesFabrics from "./resources/fabrics.jpg";
import resourcesPartner from "./resources/partner.jpg";
import productDevelopmentBanner from "./product-development/banner.png";
import productDevelopmentReference from "./product-development/reference.png";
import productDevelopmentSpecification from "./product-development/specification.png";
import productDevelopmentGarment from "./product-development/garment.png";
import productDevelopmentFinishing from "./product-development/finishing.png";
import productDevelopmentBackground from "./bg.png";

const imageModules = import.meta.glob<string>(
  [
    "./**/*.{avif,gif,jpg,jpeg,png,svg,webp}",
    "../brand/**/*.{avif,gif,jpg,jpeg,png,svg,webp}",
  ],
  {
    eager: true,
    import: "default",
  },
);

const imagesByName = Object.fromEntries(
  Object.entries(imageModules).map(([path, source]) => [
    path
      .split("/")
      .at(-1)
      ?.replace(/\.[^.]+$/, ""),
    source,
  ]),
) as Record<string, string>;

export const images = {
  ...imagesByName,
  about: imagesByName.about,
  combat: imagesByName.combat,
  fitness: imagesByName.fitness,
  factoryFloor: imagesByName["factory-floor"],
  homehero: imagesByName.homehero,
  herooveraly: imagesByName.herooveraly,
  partnerlogo1: imagesByName.partnerlogo1,
  partnerlogo2: imagesByName.partnerlogo2,
  partnerlogo3: imagesByName.partnerlogo3,
  "sports-apparel": imagesByName["sports-apparel"],
  teamwear: imagesByName.teamwear,
  Section: imagesByName.Section,
  cta: {
    background: imagesByName["cta-bg"],
  },
  manufacture: {
    overlay: imagesByName["manufacture-overlay"],
    uniform: imagesByName["manufacture-uniform"],
  },
  process: {
    productBrief: imagesByName["product-brief"],
    development: imagesByName.development,
    sampling: imagesByName.sampling,
    production: imagesByName.production,
    qualityControl: imagesByName["quality-control"],
    exportDelivery: imagesByName["export-delivery"],
  },
  productDevelopment: {
    background: productDevelopmentBackground,
    banner: productDevelopmentBanner,
    reference: productDevelopmentReference,
    specification: productDevelopmentSpecification,
    garment: productDevelopmentGarment,
    finishing: productDevelopmentFinishing,
  },
  resources: {
    background: resourcesBackground,
    manufacturing: resourcesManufacturing,
    fabrics: resourcesFabrics,
    partner: resourcesPartner,
  },
};
