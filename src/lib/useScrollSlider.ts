import { useCallback, useEffect, useRef, useState } from "react";

export function useScrollSlider(step: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const next = {
      start: el.scrollLeft <= 1,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
    };
    setEdges((prev) =>
      prev.start === next.start && prev.end === next.end ? prev : next,
    );
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (direction: 1 | -1) =>
    trackRef.current?.scrollBy({ left: direction * step, behavior: "smooth" });

  return { trackRef, edges, update, scroll };
}