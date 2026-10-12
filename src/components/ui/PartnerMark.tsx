import type { CSSProperties } from "react";
import type { PartnerMark as Mark } from "@/content/technologyPartnersGrid";

type PartnerMarkProps = { mark: Mark; logo?: string; name: string };

export function PartnerMark({ mark, logo, name }: PartnerMarkProps) {
  // A real logo file always wins over the generated mark
  if (logo) {
    return (
      <img
        alt=""
        aria-hidden="true"
        className="h-9 max-w-[120px] object-contain"
        loading="lazy"
        src={logo}
      />
    );
  }

  const color = mark.color ?? "var(--color-navy)";
  const text = mark.text ?? name.slice(0, 1);
  const small = text.length > 2;

  if (mark.kind === "squares") {
    return (
      <svg aria-hidden="true" className="size-9" viewBox="0 0 24 24">
        <rect fill="#F25022" height="11" width="11" x="1" y="1" />
        <rect fill="#7FBA00" height="11" width="11" x="13" y="1" />
        <rect fill="#00A4EF" height="11" width="11" x="1" y="13" />
        <rect fill="#FFB900" height="11" width="11" x="13" y="13" />
      </svg>
    );
  }

  if (mark.kind === "word") {
    return (
      <span
        aria-hidden="true"
        className="font-display text-[20px] font-extrabold uppercase leading-none tracking-[0.04em]"
        style={{ color } as CSSProperties}
      >
        {text}
      </span>
    );
  }

  if (mark.kind === "ring") {
    return (
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-full border-[3px] font-display text-[17px] font-extrabold leading-none"
        style={{ borderColor: color, color } as CSSProperties}
      >
        {text}
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`grid size-9 place-items-center rounded-[4px] font-display font-extrabold uppercase leading-none text-white ${small ? "text-[11px] tracking-[0.04em]" : "text-[16px]"}`}
      style={{ backgroundColor: color } as CSSProperties}
    >
      {text}
    </span>
  );
}