
import { site } from "@/config/site";
import background from "@/assets/images/categories-bg.png";
export interface Certification {
  index: string;
  system: string;
  prefix: string;
  code: string;
  discipline: string;
  title: string;
  description: string;
  to: string;
}

const usage =
  "Use the certification mark only with a current, verifiable certificate issued by the relevant certification body.";

export const certificationsContent = {
  eyebrow: "Standard & Verifications",
  title: ["Quality Should", "Be Visible"],
  verify: "Verify",
  note: site.tagline,
  background: background,
  items: [
    {
      index: "01",
      system: "Quality System",
      prefix: "ISO",
      code: "9001",
      discipline: "Quality Management",
      title: "ISO 9001",
      description: `Quality-management standard reference. ${usage}`,
      to: "/certifications",
    },
    {
      index: "02",
      system: "Environmental System",
      prefix: "ISO",
      code: "14001",
      discipline: "Environmental Management",
      title: "ISO 14001",
      description: `Environmental-management standard reference. ${usage}`,
      to: "/certifications",
    },
    {
      index: "03",
      system: "Safety System",
      prefix: "ISO",
      code: "45001",
      discipline: "Health & Safety",
      title: "ISO 45001",
      description: `Occupational health and safety standard reference. ${usage}`,
      to: "/certifications",
    },
    {
      index: "04",
      system: "Energy System",
      prefix: "ISO",
      code: "50001",
      discipline: "Energy Management",
      title: "ISO 50001",
      description: `Energy-management standard reference. ${usage}`,
      to: "/certifications",
    },
  ] satisfies Certification[],
};