import material from "@/assets/images/quality/equipment-inspection.jpg";
import construction from "@/assets/images/capabilities/pattern.png";
import stitching from "@/assets/images/capabilities/stitching.png";
import print from "@/assets/images/choose-us/apparel-collection.jpg";
import measurement from "@/assets/images/capabilities/research.png";
import final from "@/assets/images/capabilities/quality.png";
import packing from "@/assets/images/capabilities/packaging.png";

export type QualityItem = {
  number: string;
  title: string;
  /** Two lines for the large card headline; the second line is accented */
  headline: [string, string];
  description: string;
  detail: string;
  cta: string;
  image: string;
};

export const qualityContent = {
  eyebrow: "Quality controlled system",
  titleLead: "Quality is not a final step.",
  titleAccent: "It is engineered into production.",
  cardEyebrow: "Super Ace quality checkpoint",
  ctaTo: "/contact",
  items: [
    {
      number: "01",
      title: "Material Inspection",
      headline: ["Material", "Inspection"],
      description:
        "Fabric, trims and colour direction reviewed before production.",
      detail:
        "Fabric, trims and colour direction are reviewed before production moves forward.",
      cta: "Controlled before production",
      image: material,
    },
    // 02-07: copy read from a small screenshot, detail and CTA are placeholders – replace with approved text
    {
      number: "02",
      title: "Construction Checks",
      headline: ["Construction", "Checks"],
      description:
        "Panels, seams and build details checked against specification.",
      detail:
        "Panels, seams and build details are checked against the approved specification.",
      cta: "Built to specification",
      image: construction,
    },
    {
      number: "03",
      title: "Stitching Checks",
      headline: ["Stitching", "Checks"],
      description:
        "Seam consistency, stitch quality and finishing reviewed inline.",
      detail:
        "Seam consistency, stitch quality and finishing are reviewed inline during production.",
      cta: "Checked inline",
      image: stitching,
    },
    {
      number: "04",
      title: "Print / Embroidery",
      headline: ["Print /", "Embroidery"],
      description:
        "Placement, colour and finish checked before final assembly.",
      detail:
        "Placement, colour and finish are checked before final assembly.",
      cta: "Verified before assembly",
      image: print,
    },
    {
      number: "05",
      title: "Measurement Checks",
      headline: ["Measurement", "Checks"],
      description:
        "Garment dimensions checked against the approved specification.",
      detail:
        "Garment dimensions are checked against the approved specification.",
      cta: "Measured to spec",
      image: measurement,
    },
    {
      number: "06",
      title: "Final Inspection",
      headline: ["Final", "Inspection"],
      description:
        "Finished garments reviewed for presentation and consistency.",
      detail:
        "Finished garments are reviewed for presentation and consistency.",
      cta: "Approved before packing",
      image: final,
    },
    {
      number: "07",
      title: "Packing Checks",
      headline: ["Packing", "Checks"],
      description:
        "Labels, cartons and export preparation checked before dispatch.",
      detail:
        "Labels, cartons and export preparation are checked before dispatch.",
      cta: "Ready for export",
      image: packing,
    },
  ] satisfies QualityItem[],
};