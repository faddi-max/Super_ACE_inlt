import { Navigate, useParams } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/sections/PageHero";
import { ProductionLineIntro } from "@/components/sections/ProductionLineIntro";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { capabilitiesMenu } from "@/content/capabilitiesMenu";
import { capabilitiesIntroContent } from "@/content/productionLine";
import type { PageHeroContent } from "@/types";

// Image map: slug → imported asset
import research from "@/assets/images/capabilities/research.png";
import rawMaterial from "@/assets/images/capabilities/raw-material.png";
import pattern from "@/assets/images/capabilities/pattern.png";
import stitching from "@/assets/images/capabilities/stitching.png";
import quality from "@/assets/images/capabilities/quality.png";
import packaging from "@/assets/images/capabilities/packaging.png";
import capBg from "@/assets/images/capabilities/bg.png";

const slugImageMap: Record<string, string> = {
  "raw-material": rawMaterial,
  "quality-check": quality,
  "pattern-cutting": pattern,
  "packing-dispatch": packaging,
  stitching: stitching,
  "research-development": research,
  embellishment: stitching,       // closest visual match
  "human-resources": capBg,
};

const slugDescriptionMap: Record<string, string> = {
  "raw-material":
    "Raw material is the starting point of every Super Ace product. Fabric, thread, zippers, buttons and labels are sourced and inspected before they enter the production system.",
  "quality-check":
    "Quality is verified at every stage — from color matching and GSM testing through fabric inspection to final quality assurance before dispatch.",
  "pattern-cutting":
    "Technical patterns are made and scanned with precision. Cutting follows specification so that every size and every piece of fabric is consistent across the order.",
  "packing-dispatch":
    "Finishing, pressing and packing are the final steps that present the completed product correctly and prepare each order for reliable global delivery.",
  stitching:
    "Garment stitching, sample stitching and bags stitching halls operate with clean, consistent and strong construction built for high-performance sportswear.",
  "research-development":
    "Designing and prototype fitment are where product ideas are resolved into manufacturable specifications before sampling begins.",
  embellishment:
    "Sublimation printing, embroidery, vinyl, heat transfer and silk screen printing complete the branded appearance of every product.",
  "human-resources":
    "The Super Ace team is the foundation of a reliable manufacturing system. Skilled operators, supervisors and quality staff make consistent production possible.",
};

// ── Build a per-slug hero content object ──────────────────────────────────

function buildHeroContent(slug: string, title: string): PageHeroContent {
  return {
    image: slugImageMap[slug] ?? capBg,
    imageAlt: `${title} — Super Ace International manufacturing capability`,
    eyebrow: [
      { text: "Manufacturing" },
      { text: "/" },
      { text: "Capabilities", accent: true },
    ],
    titleLines: [
      [{ text: title }],
    ],
    description:
      slugDescriptionMap[slug] ??
      "Super Ace International combines specialized manufacturing capabilities to produce performance sportswear for global brands.",
    ctas: [
      { label: "Start a Brief", to: "/contact" },
      { label: "All Capabilities", to: "/capabilities", variant: "outline" as const },
    ],
  };
}

// ── Flatten sidebar into a slug → label lookup ────────────────────────────

const sidebarBySlug = Object.fromEntries(
  capabilitiesMenu.sidebar.map((item) => {
    const slug = item.href.replace("/capabilities/", "");
    return [slug, item.label];
  }),
);

// ── Page ──────────────────────────────────────────────────────────────────

export default function CapabilityDetail() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !(slug in sidebarBySlug)) {
    return <Navigate replace to="/capabilities" />;
  }

  const title = sidebarBySlug[slug];
  const heroContent = buildHeroContent(slug, title);

  return (
    <PageLayout>
      <PageHero content={heroContent} />
      <ProductionLineIntro content={capabilitiesIntroContent} />
      <Testimonials />
      <FAQ />
      <ProductBrief />
    </PageLayout>
  );
}
