import preparation from "@/assets/images/manufacturing-visuals/preparation.jpg";
import artwork from "@/assets/images/manufacturing-visuals/artwork.jpg";
import construction from "@/assets/images/manufacturing-visuals/construction.png";
import finishedGarment from "@/assets/images/manufacturing-visuals/finished-garment.png";
import shipment from "@/assets/images/manufacturing-visuals/shipment.png";

export type VisualItem = {
  number: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const manufacturingVisualsContent = {
  eyebrow: "Manufacturing visuals",
  titleLead: "From material to",
  titleRest: "finished",
  titleAccent: "product.",
  listLabel: "Manufacturing stages",
  // Descriptions were read from a small screenshot – verify against Figma
  items: [
    {
      number: "01",
      tag: "Material",
      title: "Preparation",
      description: "Careful direction and production preparation.",
      image: preparation,
      imageAlt: "Machinist preparing garments beside racks of finished jerseys",
    },
    {
      number: "02",
      tag: "Decoration",
      title: "Artwork",
      description: "Approved artwork and branding execution.",
      image: artwork,
      imageAlt: "Sublimation printing workflow from design to packing",
    },
    {
      number: "03",
      tag: "Assembly",
      title: "Construction",
      description: "Garment construction and finishing.",
      image: construction,
      imageAlt: "Sewing operators assembling sportswear on the production line",
    },
    {
      number: "04",
      tag: "Product",
      title: "Finished Garment",
      description: "Completed product prepared for inspection.",
      image: finishedGarment,
      imageAlt: "Green numbered jersey on a sewing table",
    },
    {
      number: "05",
      tag: "Ready",
      title: "Shipment",
      description: "Finished order prepared for delivery.",
      image: shipment,
      imageAlt: "Navy and blue team jerseys ready for shipment",
    },
  ] satisfies VisualItem[],
};
