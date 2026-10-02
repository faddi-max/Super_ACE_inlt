import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "font-sans text-eyebrow font-extrabold uppercase text-electric",
        className,
      )}
      {...props}
    />
  );
}
