import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animation";
import { certificationsContent as c } from "@/content/certifications";
import { cn } from "@/lib/cn";
import bg from "@/assets/images/bg.png";

const CARD_WIDTH = 249;
const GAP = 19;

const arrowClass =
  "absolute top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-electric text-white transition-[opacity,transform,background-color] duration-300 ease-smooth hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-30 motion-reduce:transition-none md:flex";

export function Certifications() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
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
      className="bg-navy bg-cover bg-center py-12 text-white sm:py-16 lg:min-h-[723px] lg:pb-12 lg:pt-[52px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-5 sm:px-8 lg:min-h-[619px] lg:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.1em] text-electric sm:text-[9px]">
            {c.eyebrow}
          </p>
          <h2
            id="certifications-title"
            className="font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
          >
            <span className="block">{c.titleLead}</span>
            <span className="block text-electric">{c.titleAccent}</span>
          </h2>
        </Reveal>

        {/* Carousel: cards start 60px in, arrows sit in the 60px gutters */}
        <div className="relative mt-10 sm:mt-14 lg:mt-[120px]">
          <button
            aria-label="Previous certification"
            className={cn(arrowClass, "left-2")}
            disabled={!canPrev}
            onClick={() => scroll(-1)}
            type="button"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          <button
            aria-label="Next certification"
            className={cn(arrowClass, "right-2")}
            disabled={!canNext}
            onClick={() => scroll(1)}
            type="button"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>

          <ul
            aria-label="Certifications"
            className="-mx-5 flex scroll-pl-5 snap-x snap-mandatory gap-[19px] overflow-x-auto px-5 pb-6 pt-2 [scrollbar-width:none] sm:-mx-8 sm:scroll-pl-8 sm:px-8 md:mx-0 md:scroll-pl-[60px] md:px-[60px] [&::-webkit-scrollbar]:hidden"
            onScroll={update}
            ref={trackRef}
          >
            {c.items.map((item, i) => (
              <li className="shrink-0 snap-start" key={item.number}>
                <Reveal delay={Math.min(i, 4) * 90}>
                  {/* Card: 249 x 268, radius 10, 20px side padding, frost right border */}
                  <article className="group relative flex min-h-[268px] w-[249px] cursor-default flex-col items-center rounded-[10px] border-r-[0.57px] border-frost/24 bg-white px-5 pt-7 text-navy transition-[transform,box-shadow] duration-500 ease-smooth motion-reduce:transition-none hover:-translate-y-1.5 hover:shadow-[0_20px_40px_0] hover:shadow-navy/40 motion-reduce:hover:translate-y-0">
                    {/* Number + line */}
                    <div className="flex w-full items-center gap-2.5">
                      <span className="font-display text-[14px] font-medium leading-4 tabular-nums text-electric">
                        {item.number}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-5 bg-electric/60 transition-[width,background-color] duration-500 ease-smooth motion-reduce:transition-none group-hover:w-10 group-hover:bg-electric"
                      />
                    </div>

                    {/* Badge */}
                    <img
                      alt={item.imageAlt}
                      className="mt-[34px] h-[58px] w-auto transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:scale-105"
                      decoding="async"
                      loading="lazy"
                      src={item.image}
                    />

                    <h3 className="mt-10 text-center font-display text-[20px] font-bold uppercase leading-6 tracking-[0.2px]">
                      {item.title}
                    </h3>
                    <p className="mt-1 whitespace-pre-line text-center font-sans text-[10px] leading-4 text-mist">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer tagline pinned near the bottom on desktop */}
        <Reveal className="mt-6 flex items-center gap-2 lg:mt-auto lg:pl-[8px]" delay={300}>
          <span aria-hidden="true" className="size-1.5 bg-electric" />
          <p className="font-sans text-[7px] font-semibold uppercase leading-none tracking-[0.25em] text-mist/70 sm:text-[8px]">
            {c.footer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}