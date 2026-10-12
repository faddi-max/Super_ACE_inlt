import fabric from "@/assets/images/process/floor.png";

export type MaterialTile = { title: string; description: string };

export const aboutMaterialsContent = {
  // Same Figma export as the "Built around fabric" photo; swap if the crop differs
  image: fabric,
  imageAlt: "Hands guiding blue and white technical fabric on a cutting table",
  caption: "Fabrics / Performance",
  eyebrow: "Fabrics for sportswear",
  titleLines: ["Materials that", "perform."],
  description:
    "Fabric is where comfort, durability and athletic performance meet. Our visual system puts technical textile development at the center of the sportswear story.",
  tiles: [
    {
      title: "Moisture Wicking",
      description: "Designed to support active comfort and airflow.",
    },
    {
      title: "Breathable",
      description: "Material thinking centered on high-aeration use.",
    },
    {
      title: "Stretchable",
      description: "Flexibility for movement and athletic silhouettes.",
    },
    {
      title: "Durable",
      description: "High-tensile thinking for demanding environments.",
    },
  ] satisfies MaterialTile[],
};