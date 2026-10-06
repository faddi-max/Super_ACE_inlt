import iso from "@/assets/images/certifications/iso-9001.png";

export type CertificationItem = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const certificationsContent = {
  eyebrow: "Certifications",
  titleLead: "Trust &",
  titleAccent: "Certifications",
  footer: "Engineer performance. Export excellence.",
  // Cards 02-04 reuse the ISO badge as in the design – replace with real certificates
  items: [
    {
      number: "01",
      title: "ISO 9001:2015",
      description: "Quality Management\nSystem Certified",
      image: iso,
      imageAlt: "ISO 9001:2015 certified badge",
    },
    {
      number: "02",
      title: "ISO 9001:2015",
      description: "Quality Management\nSystem Certified",
      image: iso,
      imageAlt: "ISO 9001:2015 certified badge",
    },
    {
      number: "03",
      title: "ISO 9001:2015",
      description: "Quality Management\nSystem Certified",
      image: iso,
      imageAlt: "ISO 9001:2015 certified badge",
    },
    {
      number: "04",
      title: "ISO 9001:2015",
      description: "Quality Management\nSystem Certified",
      image: iso,
      imageAlt: "ISO 9001:2015 certified badge",
    },
    
  ] satisfies CertificationItem[],
};