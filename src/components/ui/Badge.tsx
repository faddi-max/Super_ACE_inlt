import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-slate px-2 py-1 font-sans text-ui-label font-bold uppercase text-silver",
        className,
      )}
      {...props}
    />
  );
}
