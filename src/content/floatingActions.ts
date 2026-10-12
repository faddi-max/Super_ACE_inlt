export type FloatingActionIcon =
  | "email"
  | "tiktok"
  | "instagram"
  | "messenger"
  | "whatsapp"
  | "contact";

export type FloatingAction = {
  id: FloatingActionIcon;
  label: string;
  href: string;
  /** Any CSS background value (solid colour or gradient) */
  background: string;
  external?: boolean;
  /** Shows an expanding text pill on hover (3rd state) */
  pillLabel?: string;
};

export const floatingActionsContent = {
  toggleLabel: "Back to top and contact options",
  // Top to bottom, same order as the design
  items: [
    {
      id: "email",
      label: "Email us",
      href: "mailto:sales@superaceinternational.com",
      background: "#ff3b5c",
    },
    {
      id: "tiktok",
      label: "TikTok",
      href: "#", // TODO: real TikTok URL
      background: "#000000",
      external: true,
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "#", // TODO: real Instagram URL
      background:
        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)",
      external: true,
    },
    {
      id: "messenger",
      label: "Messenger",
      href: "#", // TODO: https://m.me/<page>
      background: "#1e8fff",
      external: true,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/923009617111",
      background: "#25d366",
      external: true,
    },
    {
      id: "contact",
      label: "Contact us",
      href: "/contact",
      background: "#000000",
      pillLabel: "Contact us",
    },
  ] satisfies FloatingAction[],
};
