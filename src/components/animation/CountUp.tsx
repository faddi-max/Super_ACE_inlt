import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number | string;
  duration?: number;
  className?: string;
};

type Parsed = {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  grouped: boolean;
};

function parse(value: number | string): Parsed | null {
  const match = String(value).match(/^(\D*?)(\d[\d,]*\.?\d*)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  const clean = num.replace(/,/g, "");
  return {
    prefix,
    suffix,
    target: Number(clean),
    decimals: clean.includes(".") ? clean.split(".")[1].length : 0,
    grouped: num.includes(","),
  };
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

export function CountUp({ value, duration = 1800, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parse(value);
  const finalText = String(value);
  const [display, setDisplay] = useState(() =>
    typeof IntersectionObserver === "undefined" || !parsed
      ? finalText
      : `${parsed.prefix}${(0).toFixed(parsed.decimals)}${parsed.suffix}`,
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || !parsed || typeof IntersectionObserver === "undefined") return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setDisplay(finalText);
      return;
    }

    let frame = 0;
    const format = (n: number) =>
      `${parsed.prefix}${n.toLocaleString("en-US", {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
        useGrouping: parsed.grouped,
      })}${parsed.suffix}`;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        setDisplay(t === 1 ? finalText : format(parsed.target * easeOutExpo(t)));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span className={className} ref={ref}>
      <span aria-hidden="true" className="tabular-nums">
        {display}
      </span>
      <span className="sr-only">{finalText}</span>
    </span>
  );
}