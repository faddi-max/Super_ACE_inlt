import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animation";
import { certificationsContent as c } from "@/content/certifications";
import { cn } from "@/lib/cn";

const CARD_WIDTH = 213;
const GAP = 21;

const arrowClass =
  "absolute top-1/2 z-10 hidden size-9 -translate-y-1/2 place-items-center rounded-full bg-electric text-white shadow-[0_6px_16px_0] shadow-electric/40 transition-[opacity,transform] duration-300 ease-smooth hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:pointer-events-none disabled:opacity-30 motion-reduce:transition-none md:grid";

export function Certifications() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(true);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // When every card fits, the arrows stay enabled (as in the design) and do nothing
    const scrollable = el.scrollWidth > el.clientWidth + 4;
    setCanPrev(!scrollable || el.scrollLeft > 4);
    setCanNext(!scrollable || el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (direction: 1 | -1) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    trackRef.current?.scrollBy({
      left: direction * (CARD_WIDTH + GAP),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <section
      aria-labelledby="certifications-title"
      className="bg-white py-12 text-navy sm:py-14 lg:pb-12 lg:pt-14"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-0">
        <Reveal className="flex flex-col items-center text-center">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            className="mt-4 font-display text-[34px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[40px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
            id="certifications-title"
          >
            {c.titleLead} <span className="text-electric">{c.titleAccent}</span>
          </h2>
        </Reveal>

        {/* Carousel: arrows sit on the outer card edges */}
        <div className="relative mx-auto mt-8 max-w-[1149px] sm:mt-10 lg:mt-[44px]">
          <button
            aria-label="Previous certification"
            className={cn(arrowClass, "left-0 -translate-x-1/2")}
            disabled={!canPrev}
            onClick={() => scroll(-1)}
            type="button"
          >
            <ChevronLeft size={14} strokeWidth={2.5} />
          </button>
          <button
            aria-label="Next certification"
            className={cn(arrowClass, "right-0 translate-x-1/2")}
            disabled={!canNext}
            onClick={() => scroll(1)}
            type="button"
          >
            <ChevronRight size={14} strokeWidth={2.5} />
          </button>

          <ul
            aria-label="Certifications"
            className="-mx-5 flex snap-x snap-mandatory gap-[21px] overflow-x-auto px-5 pb-6 pt-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
            onScroll={update}
            ref={trackRef}
          >
            {c.items.map((item, i) => (
              <li className="shrink-0 snap-start" key={item.number}>
                <Reveal delay={Math.min(i, 4) * 90}>
                  {/* Card: 213 x 211, radius 10, 1px light border */}
                  <article className="group relative flex h-[211px] w-[213px] cursor-default flex-col items-center rounded-[10px] border border-silver bg-white px-4 pt-[30px] text-navy transition-[transform,box-shadow,border-color] duration-500 ease-smooth hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-[0_16px_34px_0] hover:shadow-navy/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <img
                      alt={item.imageAlt}
                      className="h-[54px] w-auto transition-transform duration-500 ease-smooth group-hover:scale-105 motion-reduce:transition-none"
                      decoding="async"
                      loading="lazy"
                      src={item.image}
                    />
                    <h3 className="mt-[26px] text-center font-display text-[20px] font-bold uppercase leading-6 tracking-[0.2px]">
                      {item.title}
                    </h3>
                    <p className="mt-1 whitespace-pre-line text-center font-sans text-[9px] leading-[14px] text-mist">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}