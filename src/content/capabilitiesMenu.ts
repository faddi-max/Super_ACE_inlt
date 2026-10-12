export type MenuLink = { label: string; href: string };

export type MenuGroup = {
  id: string;
  title: string;
  links: MenuLink[];
};

export type SidebarItem = {
  label: string;

  groupId?: string;
  href: string;
};

const slug = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const group = (id: string, title: string, labels: string[]): MenuGroup => ({
  id,
  title,
  links: labels.map((label) => ({
    label,
    href: `/capabilities/${id}#${slug(label)}`,
  })),
});

const groups = {
  raw: group("raw-material", "Raw Material", [
    "Fabric Material",
    "Zipper",
    "Thread / Accessories",
    "Button",
    "Labels",
  ]),
  quality: group("quality-check", "Quality Check", [
    "Color Matching",
    "Final Quality Insurance",
    "GSM Bleed & Washing Test",
    "Fabric Inspection",
  ]),
  pattern: group("pattern-cutting", "Pattern Making & Cutting", [
    "Pattern making and scanning",
    "Manual Cutting",
    "Cutting After Sublimation",
  ]),
  packing: group("packing-dispatch", "Packing & Dispatching", [
    "Steam Pressing",
    "Packing",
    "Dispatching",
  ]),
  stitching: group("stitching", "Stitching", [
    "Garments Stitching Hall",
    "Sample Stitching Hall",
    "Bags Stitching Hall",
  ]),
  rnd: group("research-development", "Research & Development", [
    "Designing",
    "Prototype and Fitment",
  ]),
  embellishment: group("embellishment", "Embellishment", [
    "Sublimation Printing",
    "Embroidery",
    "Sticker / Vinyl Printing",
    "Heat Transfer",
    "Silk Screen Printing",
  ]),
};

export const capabilitiesMenu = {
  eyebrow: "Capabilities",
  sidebar: [
    { label: "Raw Material", groupId: groups.raw.id, href: "/capabilities/raw-material" },
    { label: "Quality Check", groupId: groups.quality.id, href: "/capabilities/quality-check" },
    { label: "Pattern & Cutting", groupId: groups.pattern.id, href: "/capabilities/pattern-cutting" },
    { label: "Packing & Dispatch", groupId: groups.packing.id, href: "/capabilities/packing-dispatch" },
    { label: "Stitching", groupId: groups.stitching.id, href: "/capabilities/stitching" },
    { label: "R&D", groupId: groups.rnd.id, href: "/capabilities/research-development" },
    { label: "Embellishment", groupId: groups.embellishment.id, href: "/capabilities/embellishment" },
    { label: "Human Resources", href: "/capabilities/human-resources" },
  ] satisfies SidebarItem[],

  columns: [
    [groups.raw],
    [groups.quality],
    [groups.pattern, groups.packing],
    [groups.stitching, groups.rnd, groups.embellishment],
  ] satisfies MenuGroup[][],
};