import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Line = { text: string; accent?: boolean };

type MaskLinesProps = {
  lines: Line[];
  accentClassName?: string;
  delay?: number;
  stagger?: number;
  className?: string;
};

export function MaskLines({
  lines,
  accentClassName = "text-electric",
  delay = 0,
  stagger = 110,
  className,
}: MaskLinesProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span className={cn("block", className)} data-revealed={revealed} ref={ref}>
      {lines.map((line, index) => (
        <span className="motion-mask" key={`${line.text}-${index}`}>
          <span
            className={cn("motion-mask__line", line.accent && accentClassName)}
            style={{ transitionDelay: `${delay + index * stagger}ms` }}
          >
            {line.text}
          </span>
        </span>
      ))}
    </span>
  );
}
