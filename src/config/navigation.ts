import type { NavigationItem } from "@/types";

export const resourcesMenuLabel = "Resources";

export const navigation: NavigationItem[] = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Process", to: "/process" },
  { label: "Capabilities", to: "/capabilities" },
  {
    label: "Resources",
    to: "/resources/our-team",
    children: [
      { label: "Our Team", to: "/resources/our-team" },
      { label: "Compliances", to: "/resources/compliances" },
      { label: "Catalogue", to: "/resources/catalogue" },
      { label: "Logistic Partners", to: "/resources/logistic-partners" },
      { label: "Technology Partners", to: "/resources/technology-partners" },
      { label: "Future With Us", to: "/resources/future-with-us" },
    ],
  },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];