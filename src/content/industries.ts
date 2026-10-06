import factory from "@/assets/images/industries/factory.png";

export type IndustryItem = {
  number: string;
  title: string;
  description: string;
  cta: { label: string; to: string };
};

export const industriesContent = {
  eyebrow: "Who we serve",
  titleLead: "Industries",
  titleAccent: "We Serve",
  description:
    "From performance teams to global sports brands, Super Ace International develops custom apparel and textile solutions around each partner's performance, specification and production needs.",
  image: factory,
  items: [
    {
      number: "01",
      title: "Sports\nBrands",
      description: "Custom performance apparel and collections.",
      cta: { label: "View Products", to: "/products" },
    },
    {
      number: "02",
      title: "Teams\n& Clubs",
      description: "Teamwear and uniform programs.",
      cta: { label: "View Products", to: "/products" },
    },
    {
      number: "03",
      title: "Fitness\nBrands",
      description: "Training and active apparel.",
      cta: { label: "View Products", to: "/products" },
    },
    {
      number: "04",
      title: "Retailers\n& Distributors",
      description: "Collections and distribution supply.",
      cta: { label: "Start a Brief", to: "/contact" },
    },
    {
      number: "05",
      title: "New\nLabels",
      description: "Development-led manufacturing.",
      cta: { label: "Start a Brief", to: "/contact" },
    },
    {
      number: "06",
      title: "Corporate\n/ Promo",
      description: "Brand-led custom apparel.",
      cta: { label: "Start a Brief", to: "/contact" },
    },
  ] satisfies IndustryItem[],
};