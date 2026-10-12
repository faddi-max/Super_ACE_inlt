import campus from "@/assets/images/process/campus.png"; 

export type VisionMissionItem = {
  number: string;
  title: string;
  description: string;
};

export const visionMissionContent = {
  image: campus,
  imageAlt: "Super Ace manufacturing campus surrounded by palm trees",
  items: [
    {
      number: "01",
      title: "Our Vision",
      description:
        "Build Super Ace as a trusted global sportswear manufacturing partner, combining performance, precision and modern textile solutions.",
    },
    {
      number: "02",
      title: "Our Mission",
      description:
        "Develop and manufacture high-performance custom apparel with consistency, quality and a customer-focused production approach.",
    },
  ] satisfies VisionMissionItem[],
};