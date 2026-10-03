import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type SliderArrowProps = {
  direction: "prev" | "next";
  disabled: boolean;
  label: string;
  onClick: () => void;
  className?: string;
};

export function SliderArrow({
  direction,
  disabled,
  label,
  onClick,
  className,
}: SliderArrowProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      aria-label={label}
      className={cn(
        "size-11 shrink-0 place-items-center rounded-full bg-electric text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
        disabled && "pointer-events-none opacity-40",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <Icon size={18} strokeWidth={2.5} />
    </button>
  );
}