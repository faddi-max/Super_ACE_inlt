import { images } from "@/assets/images";

export type Partner = { name: string; logo: string };

export const partnersContent = {
  eyebrow: "Trusted Partner",
  title: "Built for brands that demand more.",
  // Replace the names with the real brand names; they are used as alt text.
  partners: [
    { name: "Partner 1", logo: images.partnerlogo1 },
    { name: "Partner 2", logo: images.partnerlogo2 },
    { name: "Partner 3", logo: images.partnerlogo3 },
    { name: "Partner 4", logo: images.partnerlogo1 },
    { name: "Partner 5", logo: images.partnerlogo2 },
    { name: "Partner 6", logo: images.partnerlogo3 },
  ] satisfies Partner[],
};
