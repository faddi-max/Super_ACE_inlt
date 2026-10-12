export type HistoryItem = {
  label: string;
  title: string;
  description: string;
};

export const aboutHistoryContent = {
  eyebrow: "Our History",
  titleLines: ["Experience", "Since 1997."],
  description:
    "A long-term manufacturing journey shaped around performance apparel, custom solutions and international trade.",
  items: [
    {
      label: "1997",
      title: "Foundation",
      description:
        "Super Ace begins its journey with a focus on sportswear and apparel manufacturing.",
    },
    {
      label: "Today",
      title: "Global Orientation",
      description:
        "Built for international buyers, custom product development and demanding sportswear applications.",
    },
    {
      label: "Next",
      title: "Performance Forward",
      description:
        "Continuing to develop engineered products, high-performance textiles and dependable production systems.",
    },
  ] satisfies HistoryItem[],
};