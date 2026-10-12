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
  /** One-line summary shown under the title */
  description: string;
  /** Longer copy revealed when the row is open */
  detail: string;
  /** Two lines for the large card headline; the second line is accented */
  headline: [string, string];
  /** Short line on the photo card */
  cardDetail: string;
  image: string;
};

export type GateStage = {
  number: string;
  title: string;
  question: string;
  tag: string;
};

// Rows 02-07: copy read from a small screenshot, details are placeholders – replace with approved text
export const qualityContent = {
  eyebrow: "Quality controlled system",
  titleLead: "Quality is not a final step.",
  titleAccent: "It is engineered into production.",
  cardEyebrow: "Super Ace / Quality checkpoint",
  items: [
    {
      number: "01",
      title: "Pre-Production QC",
      description: "Approved sample, tech pack and material specifications.",
      detail:
        "Review customer tech pack, measurements and tolerances, labels, artwork, labels and the approved sample before bulk production begins.",
      headline: ["Material", "Inspection"],
      cardDetail:
        "Fabric, trims and colour direction are reviewed before production moves forward.",
      image: material,
    },
    {
      number: "02",
      title: "Raw Material Inspection",
      description: "Fabric, colour, weight, shrinkage and accessories.",
      detail:
        "Incoming fabric, trims and accessories are checked for colour, weight, shrinkage and defects before they enter the cutting room.",
      headline: ["Raw Material", "Inspection"],
      cardDetail:
        "Incoming fabric and accessories are verified against approved specifications.",
      image: construction,
    },
    {
      number: "03",
      title: "Cutting QC",
      description: "Marker layout, panels and cutting accuracy.",
      detail:
        "Marker layout, lay height and cut panels are checked so every size stays consistent before sewing starts.",
      headline: ["Cutting", "QC"],
      cardDetail: "Panels are cut to pattern and checked for accuracy.",
      image: stitching,
    },
    {
      number: "04",
      title: "In-Line Sewing QC",
      description: "Stitch quality, seam strength and construction.",
      detail:
        "Inspectors check stitch quality, seam strength and construction on the line, catching issues while production is running.",
      headline: ["In-Line", "Sewing QC"],
      cardDetail: "Seam consistency and construction are reviewed inline.",
      image: print,
    },
    {
      number: "05",
      title: "Printing & Embroidery QC",
      description: "Artwork, position, colour and decoration quality.",
      detail:
        "Print and embroidery placement, colour and finish are verified against the approved artwork.",
      headline: ["Printing &", "Embroidery QC"],
      cardDetail:
        "Placement, colour and finish are checked before final assembly.",
      image: measurement,
    },
    {
      number: "06",
      title: "Finishing & Final Inspection",
      description: "Appearance, measurements and approved specifications.",
      detail:
        "Finished garments are inspected for appearance and measured against the approved specification.",
      headline: ["Finishing &", "Final Inspection"],
      cardDetail:
        "Finished garments are reviewed for presentation and consistency.",
      image: final,
    },
    {
      number: "07",
      title: "Packing & Shipment QC",
      description: "Carton accuracy and shipment preparation.",
      detail:
        "Labels, cartons, quantities and export preparation are checked before dispatch.",
      headline: ["Packing &", "Shipment QC"],
      cardDetail:
        "Labels, cartons and export preparation are checked before dispatch.",
      image: packing,
    },
  ] satisfies QualityItem[],
};

export const qcGateContent = {
  eyebrow: "Quality checkpoints",
  title: "Five-Stage QC Gate",
  description:
    "From the first inquiry to worldwide delivery, every stage is organized into a clear production journey so clients can understand what happens before, during and after manufacturing.",
  stages: [
    { number: "01", title: "Material QC", question: "Are the materials correct?", tag: "Incoming" },
    { number: "02", title: "Cutting QC", question: "Are the panels cut correctly?", tag: "Preparation" },
    { number: "03", title: "In-Line QC", question: "Is production being conducted correctly?", tag: "Production" },
    { number: "04", title: "Finishing QC", question: "Does the finished garment meet approved standards?", tag: "Finishing" },
    { number: "05", title: "Final QC", question: "Is the shipment ready for the customer?", tag: "Pre-shipment" },
  ] satisfies GateStage[],
};

export const qcDocumentationContent = {
  eyebrow: "Quality evidence",
  title: "QC Documentation",
  description:
    "Inspection records help document the checks completed throughout the manufacturing process.",
  documents: [
    "Quality Inspection Checklist",
    "Fabric Inspection Report",
    "Measurement Report",
    "Sample Approval Record",
    "In-Line Inspection Report",
    "Printing / Embroidery Report",
    "Final Inspection Report",
    "AQL Inspection Report*",
    "Packing Inspection Report",
    "Non-Conformance Report*",
    "Corrective Action Report*",
  ],
};