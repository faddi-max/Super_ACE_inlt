import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

const formatCount = (value: number, prefix: string, suffix: string) =>
  `${prefix}${Math.round(value).toLocaleString("en-US")}${suffix}`;

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      element.textContent = formatCount(value, prefix, suffix);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          element.textContent = formatCount(
            value * (1 - Math.pow(1 - progress, 4)),
            prefix,
            suffix,
          );
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, prefix, suffix, value]);

  return (
    <>
      <span
        aria-hidden="true"
        className={cn("tabular-nums", className)}
        ref={ref}
      >
        {formatCount(0, prefix, suffix)}
      </span>
      <span className="sr-only">{formatCount(value, prefix, suffix)}</span>
    </>
  );
}
