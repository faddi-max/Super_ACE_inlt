import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type CursorGlowProps = {
  className?: string;
  size?: number;
  ease?: number;
};

export function CursorGlow({
  className,
  size = 380,
  ease = 0.12,
}: CursorGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const section = glow?.parentElement;
    if (!glow || !section) return;

    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!canHover || reduceMotion) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let running = false;
    let active = false;

    const paint = () => {
      glow.style.transform = `translate3d(${current.x - size / 2}px, ${current.y - size / 2}px, 0)`;
    };

    const tick = () => {
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      paint();

      const settled =
        Math.abs(target.x - current.x) < 0.1 &&
        Math.abs(target.y - current.y) < 0.1;

      if (settled) {
        running = false;
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      target.x = event.clientX - rect.left;
      target.y = event.clientY - rect.top;

      if (!active) {
        active = true;
        current.x = target.x;
        current.y = target.y;
        paint();
        glow.style.opacity = "1";
      }

      if (!running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      active = false;
      glow.style.opacity = "0";
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, [ease, size]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-0 top-0 -z-10 hidden rounded-full bg-cursor-glow opacity-0 transition-opacity duration-700 ease-out will-change-transform lg:block",
        className,
      )}
      ref={glowRef}
      style={{ height: size, width: size }}
    />
  );
}
