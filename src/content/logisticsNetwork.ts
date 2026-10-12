export type LogisticsMark = {
  text: string;
  color: string;
  /** Second colour run, e.g. FedEx */
  accentText?: string;
  accentColor?: string;
  italic?: boolean;
  sub?: string;
  subColor?: string;
};

/** null = empty spacer cell (desktop only), as in the design */
export type LogisticsCell = LogisticsMark | null;

export const logisticsNetworkContent = {
  intro: {
    eyebrow: "Logistics Partners",
    titleLines: [
      [{ text: "Trusted Names." }],
      [{ text: "Global Connections.", accent: true }],
    ] satisfies { text: string; accent?: boolean }[][],
    description:
      "Our logistics partner network includes carriers across air, sea, courier and freight forwarding. These connections help support international shipping across different destinations and order requirements.",
  },
  // 6 columns: row 3 starts with a blank cell, then four partners
  partners: [
    { text: "ICE", color: "#E5484D", italic: true, sub: "COURIER" },
    { text: "DHL", color: "#FFCC00", italic: true, sub: "EXPRESS" },
    { text: "Fed", color: "#FFFFFF", accentText: "Ex", accentColor: "#4D90FF", sub: "EXPRESS", subColor: "#FFFFFF" },
    { text: "UPS", color: "#C9A24D", sub: "UNITED PARCEL SERVICE" },
    { text: "TNT", color: "#FF7A2F", italic: true, sub: "EXPRESS" },
    { text: "SKY NET", color: "#FF5A5F", sub: "WORLDWIDE EXPRESS" },
    { text: "FREIGHT", color: "#7DB8FF", sub: "FORWARDING" },
    { text: "✦ MAERSK", color: "#7ED0FF" },
    { text: "MSC", color: "#F5C842", sub: "MEDITERRANEAN SHIPPING" },
    { text: "CMA CGM", color: "#F0606D", sub: "SHIPPING GROUP" },
    { text: "Hapag-Lloyd", color: "#9FA8FF" },
    { text: "AIR CARGO", color: "#FF8A7A", sub: "LOGISTICS" },
    null,
    { text: "Emirates", color: "#F0646E", sub: "SKYCARGO", subColor: "#A7ABB1" },
    { text: "JAPAN CARGO", color: "#FF6B7A", sub: "LOGISTICS" },
    { text: "PJS", color: "#4FD1A1", sub: "LOGISTICS" },
    { text: "QATAR", color: "#D6DAE0", sub: "CARGO" },
  ] satisfies LogisticsCell[],
  shipping: {
    eyebrow: "Shipping Support",
    titleLines: [
      [{ text: "From factory floor" }],
      [{ text: "To " }, { text: "final destination.", accent: true }],
    ] satisfies { text: string; accent?: boolean }[][],
    description:
      "Super Ace coordinates order preparation and shipping with logistics partners to help keep international deliveries organized. The right shipping option can depend on destination, shipment size and timing.",
    // Listed column by column: left column first, then right
    points: [
      "Courier and express services",
      "Ocean freight connections",
      "Air freight options",
      "Export packing coordination",
    ],
    caption: { lead: "Global logistics", rest: "Air · Sea · Road" },
  },
  footerLeft: "Super Ace International · Logistics network",
  footerCta: { label: "Discuss your shipment", to: "/contact" },
};