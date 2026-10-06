export type HeroContent = {
  eyebrow: { text: string; accent?: boolean }[];
  headline: { text: string; accent?: boolean }[];
  description: string;
  tags: string[];
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  caption: string;
};
export type EyebrowSegment = { text: string; accent?: boolean };

export const heroEyebrow: EyebrowSegment[] = [
  { text: "Premium", accent: true },
  { text: "Sportswear & Apparel" },
  { text: "Manufacturer For", accent: true },
  { text: "Global Brands" },
];
export const heroContent: HeroContent = {
  eyebrow: [
    { text: "Engineer", accent: true },
    { text: "Performance." },
    { text: "Export", accent: true },
    { text: "Excellence." },
  ],
  headline: [
    { text: "BUILT FOR" },
    { text: "CHAMPIONS."},
    { text: "ENGINEERED FOR", accent: true  },
    { text: "PERFORMANCE." },
  ],
  description:
    "A Trusted Sportswear Manufacturing Company, Serving Global Brands With High-End Custom Solutions.",
  tags: ["OEM", "ODM", "Private Label"],
  primaryCta: { label: "Request a Quote", to: "/contact" },
  secondaryCta: { label: "Explore More", to: "/about" },
  caption: "Performance / Precision",
};
