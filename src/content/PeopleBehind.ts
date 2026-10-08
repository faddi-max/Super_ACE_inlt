import { images } from "@/assets/images";

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export const peopleBehindContent = {
  eyebrow: "Our Team",
  title: [
    { text: "The People " },
    { text: "Behind", accent: true },
    { text: " Every Stitch." },
  ] satisfies { text: string; accent?: boolean }[],
  description:
    "Designers, pattern makers, production leads and quality inspectors working as one team to deliver your order right.",
  items: [
    {
      name: "Usman Arshad Ch.",
      role: "Founder & CEO",
      description: "Leads strategy and global partnerships.",
      image: images.team["usman-arshad"],
    },
    {
      name: "M. Usman Jameel",
      role: "General Manager (GM)",
      description: "Oversees cutting, stitching and finishing.",
      image: images.team["usman-jameel"],
    },
    {
      name: "Rizwan Ahmed",
      role: "Products Development Head",
      description: "Turns concepts into production-ready tech sheets.",
      image: images.team["rizwan-ahmed"],
    },
    {
      name: "Ahmed Ali",
      role: "Merchandising Head",
      // Screenshot text was small, verify wording
      description: "Ensures every piece meets the standard.",
      image: images.team["ahmed-ali"],
    },
  ] satisfies TeamMember[],
};