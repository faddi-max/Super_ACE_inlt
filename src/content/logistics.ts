export type LogisticsPart = { text: string; accent?: boolean };

export type LogisticsGroup = {
  title: string;
  partners: string[];
};

export const logisticsContent = {
  eyebrow: "Logistic Partners",
  // Spaces live inside the text so punctuation stays attached
  titleLines: [
    [
      { text: "Delivered " },
      { text: "On Time", accent: true },
      { text: "," },
    ],
    [{ text: "Worldwide." }],
  ] satisfies LogisticsPart[][],
  description:
    "Trusted carriers and freight forwarders give you flexible air, sea and express options with full tracking.",
  points: [
    "Door-to-door & FOB / CIF options",
    "Real-time shipment tracking",
    "Customs and documentation support",
  ],
  groups: [
    {
      title: "International Courier & Express Services",
      partners: ["DHL Express", "FedEx", "UPS", "TNT Express", "Sky Net"],
    },
    {
      title: "Freight Forwarders & Cargo Services",
      partners: [
        "Maersk",
        "MSC Mediterranean Shipping Company",
        "CMA CGM",
        "Hapag-Lloyd",
      ],
    },
    {
      title: "Air Cargo Services",
      partners: [
        "Qatar Airways Cargo",
        "Emirates SkyCargo",
        "Turkish Cargo",
        "Virgin",
      ],
    },
  ] satisfies LogisticsGroup[],
};