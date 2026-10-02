export interface FooterColumn {
  title: string;
  links: { label: string; to: string }[];
}

export const footerContent = {
  tagline:
    "Performance-driven sportswear and sporting goods manufacturing for brands, teams and businesses worldwide.",
  cta: { label: "Explore More", to: "/about" },
  columns: [
    {
      title: "Categories",
      links: [
        { label: "Teamwear", to: "/categories/teamwear" },
        { label: "Sportswear", to: "/categories/sportswear" },
        { label: "Combat", to: "/categories/combat" },
        { label: "Uniforms", to: "/categories/uniforms" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Categories", to: "/categories" },
        { label: "What We Manufacture", to: "/manufacture" },
        { label: "Certifications", to: "/certifications" },
        { label: "Testimonials", to: "/testimonials" },
      ],
    },
    {
      title: "Manufacturing",
      links: [
        { label: "Our Process", to: "/process" },
        { label: "OEM Manufacturing", to: "/oem" },
        { label: "ODM Development", to: "/odm" },
        { label: "Private Label", to: "/private-label" },
        { label: "Quality Control", to: "/quality" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "FAQ", to: "/faq" },
        { label: "Contact", to: "/contact" },
        { label: "Request a Quote", to: "/quote" },
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Terms", to: "/terms" },
      ],
    },
  ] satisfies FooterColumn[],
  info: [
    { label: "Sales", value: "sales@superaceinternational.com" },
    { label: "Manufacturing Base", value: "Sialkot, Pakistan" },
    { label: "Markets", value: "Worldwide · OEM / ODM" },
  ],
  socials: [
    { label: "LinkedIn", short: "in", href: "#" },
    { label: "Instagram", short: "ig", href: "#" },
    { label: "Facebook", short: "f", href: "#" },
  ],
  legal: "© 2026 SUPER ACE INTERNATIONAL. ALL RIGHTS RESERVED.",
};