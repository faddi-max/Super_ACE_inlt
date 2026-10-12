import { images } from "@/assets/images";

export type FacilityItem = {
  id: string;
  tab: string;
  kind: string;
  title: string;
  description: string;
  location: string;
  phone?: string;
  phoneHref?: string;
  footer: string;
  image: string;
  imageAlt: string;
  captionEyebrow: string;
  caption: string;
};

export const facilitiesContent = {
  eyebrow: "Where we work",
  titleLead: "Our Facilities",
  titleAccent: "& Offices.",
  description:
    "Explore the spaces where Super Ace International coordinates, manufactures and prepares sportswear for shipment.",
  tabsLabel: "Select a location",
  detailLabels: { location: "Location", phone: "Phone" },
  // TODO: replace the placeholder images with real photos of each location
  items: [
    {
      id: "factory",
      tab: "Factory",
      kind: "Manufacturer Factory",
      title: "Super Ace\nInternational",
      description:
        "Our flagship production facility supports sportswear manufacturing from cutting and stitching through quality checks and final packing.",
      location: "Wazirabad Rd. Harrar, Sialkot, Punjab, (51310), Pakistan",
      phone: "+92 300-9617111",
      phoneHref: "tel:+923009617111",
      footer: "Production & Fulfillment",
      image: images.factoryFloor,
      imageAlt: "Super Ace International factory building in Sialkot",
      captionEyebrow: "Manufacturing Base",
      caption: "Built to\nMake More.",
    },
    {
      id: "us-branch",
      tab: "US Branch",
      kind: "US Branch",
      title: "Super Ace\nUnited States",
      // Placeholder copy – replace with approved details
      description:
        "Our North American point of contact for buyers, sampling coordination and local customer support.",
      location: "Address to be confirmed",
      footer: "Sales & Customer Support",
      image: images.factoryFloor,
      imageAlt: "Super Ace US branch",
      captionEyebrow: "North America",
      caption: "Closer to\nYour Market.",
    },
    {
      id: "corporate",
      tab: "Corporate Offices",
      kind: "Corporate Office",
      title: "Super Ace\nEurope",
      description:
        "Our European corporate office manages international accounts, contracts and brand partnerships.",
      location:
        "Harju Maakond, Tallinn, Kesklinna Linnaosa, Pärnu mnt, 139e/2-8, 11317, Estonia",
      phone: "+372-641-0438",
      phoneHref: "tel:+3726410438",
      footer: "Corporate & Partnerships",
      image: images.factoryFloor,
      imageAlt: "Super Ace corporate office in Tallinn",
      captionEyebrow: "Corporate Office",
      caption: "Global Reach.\nLocal Care.",
    },
    {
      id: "headquarters",
      tab: "Headquarters",
      kind: "Headquarters",
      title: "Super Ace\nHeadquarters",
      description:
        "Our headquarters oversees strategy, global partnerships and the coordination of every Super Ace location.",
      location: "6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE",
      footer: "Strategy & Leadership",
      image: images.factoryFloor,
      imageAlt: "Super Ace headquarters in Dubai",
      captionEyebrow: "Headquarters",
      caption: "Where It\nAll Connects.",
    },
  ] satisfies FacilityItem[],
};