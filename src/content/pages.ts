import type { PageCopy } from "@/types";

export const pages = {
  home: {
    eyebrow: "SUPER ACE International",
    title: "SUPER ACE",
    description: "Engineer Performance. Export Excellence.",
  },
  about: {
    eyebrow: "About",
    title: "About SUPER ACE",
    description: "Engineer Performance. Export Excellence.",
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "Capabilities",
    description: "Engineer Performance. Export Excellence.",
  },
  products: {
    eyebrow: "Products",
    title: "Products",
    description: "Engineer Performance. Export Excellence.",
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Sustainability",
    description: "Engineer Performance. Export Excellence.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact SUPER ACE",
    description: "Engineer Performance. Export Excellence.",
  },
  notFound: {
    eyebrow: "404",
    title: "Page not found",
    description: "Engineer Performance. Export Excellence.",
  },
} satisfies Record<string, PageCopy>;
