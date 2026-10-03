export type FaqCategory = "oem" | "sampling" | "production" | "shipping";
export type FaqFilter = "all" | FaqCategory;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

const placeholder = "Placeholder answer. Replace with approved copy.";

export const faqContent = {
  eyebrow: "Need to Know",
  title: ["Frequently Asked", "Questions"],
  description:
    "Straight answers for brands planning custom sportswear, sampling, production and international delivery.",
  browseLabel: "Browse Questions",
  watermark: "ACE",
  empty: "No questions in this category yet.",
  footer: {
    prompt: "Can't find your answer?",
    cta: "Talk to our manufacturing team",
    to: "/contact",
  },
  filters: [
    { id: "all", label: "All" },
    { id: "oem", label: "OEM / ODM" },
    { id: "sampling", label: "Sampling" },
    { id: "production", label: "Production" },
    { id: "shipping", label: "Shipping" },
  ] satisfies { id: FaqFilter; label: string }[],
  items: [
    {
      id: "moq",
      question: "What Is Your Minimum Order Quantity?",
      answer:
        "MOQ depends on the product, construction, fabric and customization requirements. Confirm the exact MOQ with our team when submitting your project brief.",
      category: "oem",
    },
    {
      id: "tech-pack",
      question: "Can You Manufacture From Our Tech Pack?",
      answer: placeholder,
      category: "oem",
    },
    {
      id: "sample-approval",
      question: "Can We Approve A Sample Before Bulk Production?",
      answer: placeholder,
      category: "sampling",
    },
    {
      id: "products",
      question: "What Products Can Super Ace Manufacture?",
      answer: placeholder,
      category: "production",
    },
    {
      id: "private-label",
      question: "How Do We Start A Private-Label Project?",
      answer: placeholder,
      category: "oem",
    },
  ] satisfies FaqItem[],
};