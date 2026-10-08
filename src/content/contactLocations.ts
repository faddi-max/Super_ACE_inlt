export type LocationDetail = { label: string; value: string; href?: string };

export type LocationItem = {
  id: string;
  number: string;
  city: string;
  /** Short line under the city name in the tab */
  tabMeta: string;
  /** Eyebrow in the detail panel */
  role: string;
  title: string;
  address: string;
  details: LocationDetail[];
  /** Used for the embedded map and the "Open in map" link */
  mapQuery: string;
};

export const contactLocationsContent = {
  eyebrow: "Global presence",
  titleLines: [
    [{ text: "Find the right" }],
    [{ text: "Super Ace", accent: true }, { text: " location." }],
  ] satisfies { text: string; accent?: boolean }[][],
  description:
    "Select a location. The map and contact details update together so visitors can quickly understand where each Super Ace operation is based.",
  tabsLabel: "Select a Super Ace location",
  openInMap: "Open in map",
  items: [
    {
      id: "dubai",
      number: "01",
      city: "Dubai",
      tabMeta: "Headquarters · UAE",
      role: "Headquarters",
      title: "Dubai, UAE",
      address: "6th Floor, Meydan Road, Nad Al Sheba, Dubai, UAE",
      details: [
        { label: "Company", value: "SUPER 47 INTERNATIONAL LLC-FZ (PVT) LTD" },
        { label: "Company code", value: "2424649" },
        { label: "Direct contact", value: "Headquarters contact listed above" },
      ],
      mapQuery: "Nad Al Sheba Mall, Meydan Road, Dubai, UAE",
    },
    {
      id: "tallinn",
      number: "02",
      city: "Tallinn",
      tabMeta: "Corporate Office · Estonia",
      role: "Corporate Office",
      title: "Tallinn, Estonia",
      address:
        "Harju Maakond, Tallinn, Kesklinna Linnaosa, Pärnu mnt, 139e/2-8, 11317, Estonia",
      details: [
        {
          label: "Direct contact",
          value: "+372-641-0438",
          href: "tel:+3726410438",
        },
      ],
      mapQuery: "Pärnu mnt 139e, Tallinn, Estonia",
    },
    {
      id: "sialkot",
      number: "03",
      city: "Sialkot",
      tabMeta: "Manufacturer Factory · Pakistan",
      role: "Manufacturer Factory",
      title: "Sialkot, Pakistan",
      address: "Wazirabad Rd. Harrar, Sialkot, Punjab, (51310), Pakistan",
      details: [
        {
          label: "Direct contact",
          value: "+92 300-9617111",
          href: "tel:+923009617111",
        },
      ],
      mapQuery: "Wazirabad Road, Harrar, Sialkot, Pakistan",
    },
  ] satisfies LocationItem[],
};
