import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type HeadingProps = {
  as?: HeadingLevel;
  className?: string;
  children: ReactNode;
};

const sizes: Record<HeadingLevel, string> = {
  h1: "font-display text-h1 font-bold uppercase",
  h2: "font-display text-h2 font-bold uppercase",
  h3: "font-display text-h3 font-bold uppercase",
  h4: "font-sans text-h4 font-semibold",
};

export function Heading({ as = "h2", className, children }: HeadingProps) {
  const Element = as as ElementType;
  return <Element className={cn(sizes[as], className)}>{children}</Element>;
}
