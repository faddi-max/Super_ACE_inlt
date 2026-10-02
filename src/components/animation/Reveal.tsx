import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function Reveal({ className, delay = 0, style, ...props }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const safeDelay = Math.min(Math.max(delay, 0), 500);

  return (
    <div
      {...props}
      className={cn("motion-reveal", className)}
      data-revealed={isRevealed}
      ref={elementRef}
      style={{ ...style, transitionDelay: `${safeDelay}ms` }}
    />
  );
}
