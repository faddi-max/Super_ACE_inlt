import background from "@/assets/images/process-journey/bg.png";
import ringDark from "@/assets/images/process-journey/ring-dark.png";
import ringLight from "@/assets/images/process-journey/ring-light.png";
import yarn from "@/assets/images/process-journey/yarn-procurement-detail.jpg";
import knitting from "@/assets/images/process-journey/knitwear-display.jpg";
import dyeing from "@/assets/images/process-journey/multicolor-garments.jpg";
import designing from "@/assets/images/process-journey/apparel-selection.jpg";
import sublimation from "@/assets/images/manufacturing-visuals/artwork.jpg";
import heatTransfer from "@/assets/images/manufacturing-visuals/artwork.jpg";
import cutting from "@/assets/images/manufacturing-visuals/preparation.jpg";
import embroidery from "@/assets/images/manufacturing-visuals/artwork.jpg";
import applique from "@/assets/images/manufacturing-visuals/artwork.jpg";
import stitching from "@/assets/images/manufacturing-visuals/construction.png";
import qualityInspection from "@/assets/images/process-journey/quality-inspection.png";
import steamPressing from "@/assets/images/manufacturing-visuals/finished-garment.png";
import packing from "@/assets/images/process-journey/packing.png";
import shipping from "@/assets/images/manufacturing-visuals/shipment.png";

export type JourneyTheme = "dark" | "light";

export type RingPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export const journeyRings = { dark: ringDark, light: ringLight };

export type JourneyStage = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export type JourneyGroup = {
  number: string;
  title: string;
  theme: JourneyTheme;
  ring?: RingPosition;
  stages: JourneyStage[];
};

// Stages 05-14: descriptions are placeholders – the design copy was unreadable
const groups: JourneyGroup[] = [
  {
    number: "01",
    title: "Material Foundation",
    theme: "dark",
    ring: "top-right",
    stages: [
      {
        number: "01",
        title: "Yarn Procurement",
        description:
          "Material selection and procurement establish the foundation for the production program.",
        image: yarn,
      },
      {
        number: "02",
        title: "Knitting",
        description:
          "Yarn is converted into the required knitted fabric construction for the product.",
        image: knitting,
      },
      {
        number: "03",
        title: "Dyeing",
        description:
          "Fabric is developed to the required color and finish before the next production stage.",
        image: dyeing,
      },
      {
        number: "04",
        title: "Designing",
        description:
          "Design direction, artwork and production specifications are developed for the garment.",
        image: designing,
      },
    ],
  },
  {
    number: "02",
    title: "Print & Preparation",
    theme: "light",
    ring: "bottom-left",
    stages: [
      {
        number: "05",
        title: "Sublimation / Digital Printing",
        description:
          "Artwork is transferred onto fabric with accurate color and placement.",
        image: sublimation,
      },
      {
        number: "06",
        title: "Heat Transfer",
        description:
          "Heat-applied graphics and branding are placed to specification.",
        image: heatTransfer,
      },
      {
        number: "07",
        title: "Cutting",
        description:
          "Fabric is cut to pattern so every size stays consistent.",
        image: cutting,
      },
      {
        number: "08",
        title: "Embroidery & Tackle Twill",
        description:
          "Embroidered and twill details are applied for a finished, branded look.",
        image: embroidery,
      },
    ],
  },
  {
    number: "03",
    title: "Precision Construction",
    theme: "dark",
    ring: "top-left",
    stages: [
      {
        number: "09",
        title: "Applique & Laser Cutting / Patching & Applique",
        description:
          "Precision-cut patches and applique elements are prepared and attached.",
        image: applique,
      },
      {
        number: "10",
        title: "Stitching",
        description:
          "Panels are stitched into garments with clean, consistent, strong seams.",
        image: stitching,
      },
      {
        number: "11",
        title: "Quality Inspection",
        description:
          "Garments are inspected against approved specifications and measurements.",
        image: qualityInspection,
      },
      {
        number: "12",
        title: "Steam Pressing",
        description:
          "Finished garments are steam pressed for shape, presentation and finish.",
        image: steamPressing,
      },
    ],
  },
  {
    number: "04",
    title: "Finishing & Delivery",
    theme: "light",
    stages: [
      {
        number: "13",
        title: "Packing",
        description:
          "Orders are folded, labelled and packed for export requirements.",
        image: packing,
      },
      {
        number: "14",
        title: "Shipping & Delivery",
        description:
          "Packed orders are dispatched with delivery planned for global markets.",
        image: shipping,
      },
    ],
  },
];

const total = groups.reduce((sum, group) => sum + group.stages.length, 0);

export const productionJourneyContent = {
  background,
  eyebrow: `${total} Stages / Full production journey`,
  title: [
    { text: "From" },
    { text: "Input", accent: true },
    { text: "to" },
    { text: "Output.", accent: true },
  ] satisfies { text: string; accent?: boolean }[],
  description:
    "The production line is presented as a sequence of individual checkpoints. Every stage has its own node, card and visual position on the journey.",
  groups,
};