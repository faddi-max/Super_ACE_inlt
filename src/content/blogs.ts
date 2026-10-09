import { images } from "@/assets/images";
import factory from "@/assets/images/categories/hero.jpg";
import garmentCraft from "@/assets/images/choose-us/garment-craft.jpg";
import apparelRange from "@/assets/images/choose-us/apparel-range.jpg";
import fabrics from "@/assets/images/resources/fabrics.jpg";
import partner from "@/assets/images/resources/partner.jpg";
import inspection from "@/assets/images/quality/equipment-inspection.jpg";
import stitching from "@/assets/images/capabilities/stitching.png";

export const blogHeroContent = {
  eyebrow: "Blogs / Insights",
  title: [
    { text: "Knowledge" },
    { text: "Built For", accent: true },
    { text: "Performance." },
  ],
  description:
    "Manufacturing insights, material knowledge and practical guidance from Super Ace International built for brands developing high-performance sportswear at global scale.",
  image: factory,
  imageAlt: "Machinist at a sewing line on the SUPER ACE production floor",
};

export type BlogCategory =
  | "manufacturing"
  | "materials"
  | "product-development"
  | "quality"
  | "industry";
export type BlogFilter = "all" | BlogCategory;

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  categoryLabel: string;
  title: string;
  excerpt: string;
  image: string;
  to: string;
};

export const blogListContent = {
  searchLabel: "Search insights",
  searchPlaceholder: "Search insights...",
  empty: "No articles match your search.",
  readLabel: "Read article",
  filters: [
    { id: "all", label: "All" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "materials", label: "Material" },
    { id: "product-development", label: "Product Development" },
    { id: "quality", label: "Quality" },
    { id: "industry", label: "Industry" },
  ] satisfies { id: BlogFilter; label: string }[],
  featured: {
    eyebrow: "Featured story",
    title: "Inside the Factory",
    category: "Manufacturing",
    date: "08 Oct 2026",
    headline: "How performance sportswear moves from concept to production",
    description:
      "A clear look at the decisions behind a performance garment — from technical development and material selection through production, inspection and final delivery.",
    cta: "Read article",
    to: "/blog",
    image: images.factoryFloor,
    imageAlt: "Sewing line on the SUPER ACE production floor",
  },
  grid: {
    eyebrow: "Latest insights",
    titleLead: "From the",
    titleAccent: "Floor",
  },
  posts: [
    { slug: "performance-garment", category: "manufacturing", categoryLabel: "Manufacturing", title: "What makes a performance garment?", excerpt: "How construction, fit and production decisions shape the final sportswear product.", image: garmentCraft, to: "/blog" },
    { slug: "choosing-fabric", category: "materials", categoryLabel: "Materials", title: "Choosing fabric for the right sport", excerpt: "A practical guide to performance fabrics, comfort, movement and durability.", image: fabrics, to: "/blog" },
    { slug: "brief-to-sample", category: "product-development", categoryLabel: "Product development", title: "From product brief to sample", excerpt: "The key development stages brands should understand before production begins.", image: images.process.productBrief, to: "/blog" },
    { slug: "quality-control-floor", category: "quality", categoryLabel: "Quality", title: "Quality control on the production floor", excerpt: "Where quality is checked, measured and protected throughout manufacturing.", image: inspection, to: "/blog" },
    { slug: "brand-needs", category: "industry", categoryLabel: "Industry", title: "What global sportswear brands need from manufacturing", excerpt: "Why consistency, communication and scalable production matter to growing brands.", image: partner, to: "/blog" },
    { slug: "technical-textiles", category: "materials", categoryLabel: "Materials", title: "Technical textiles built for movement", excerpt: "Understanding stretch, recovery and comfort when developing athletic apparel.", image: apparelRange, to: "/blog" },
    { slug: "finished-garment", category: "manufacturing", categoryLabel: "Manufacturing", title: "The details that define a finished garment", excerpt: "Seams, finishing and construction choices that influence feel and long-term use.", image: stitching, to: "/blog" },
    { slug: "teamwear-range", category: "product-development", categoryLabel: "Product development", title: "Building a complete teamwear range", excerpt: "How coordinated product ranges create consistency across a team's collection.", image: images.teamwear, to: "/blog" },
    { slug: "global-supply", category: "industry", categoryLabel: "Industry", title: "Inside global sportswear supply", excerpt: "The production considerations behind reliable international sportswear programs.", image: images.process.exportDelivery, to: "/blog" },
  ] satisfies BlogPost[],
};