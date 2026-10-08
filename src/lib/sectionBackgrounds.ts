import type { CSSProperties } from "react";

const line = "color-mix(in srgb, var(--color-navy) 4%, transparent)";

/** White section with a faint grid and an electric glow in the bottom-left corner */
export const gridGlowStyle: CSSProperties = {
  backgroundImage: [
    "radial-gradient(34% 46% at 0% 100%, color-mix(in srgb, var(--color-electric) 16%, transparent) 0%, transparent 100%)",
    `linear-gradient(${line} 1px, transparent 1px)`,
    `linear-gradient(90deg, ${line} 1px, transparent 1px)`,
  ].join(", "),
  backgroundSize: "100% 100%, 64px 64px, 64px 64px",
};