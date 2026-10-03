import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { categoriesContent as c } from "@/content/categories";
import { cn } from "@/lib/cn";
import background from "@/assets/images/categories-bg.png";

const STEP = 275;

type ArrowProps = {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
};

function Arrow({ direction, disabled, onClick }: ArrowProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      aria-label={
        direction === "prev" ? "Previous categories" : "Next categories"
      }
      className={cn(
        "mt-[129px] hidden size-11 shrink-0 self-start place-items-center rounded-full bg-electric text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric md:grid",
        disabled && "pointer-events-none opacity-40",
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <Icon size={18} strokeWidth={2.5} />
    </button>
  );
}

export function CategoriesSlider() {
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

  const scrollByCard = (direction: 1 | -1) =>
    trackRef.current?.scrollBy({ left: direction * STEP, behavior: "smooth" });

  return (
    <Section
      className="bg-navy bg-cover bg-center bg-no-repeat py-16 md:pb-[71px] md:pt-[76px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Reveal className="mb-12 space-y-2 text-center md:mb-[71px]">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <Heading
          as="h2"
          className="text-[32px] leading-[30px] tracking-[0px] text-white"
        >
          {c.title}
        </Heading>
      </Reveal>

      <Reveal className="flex items-center justify-center gap-4" delay={120}>
        <Arrow
          direction="prev"
          disabled={edges.start}
          onClick={() => scrollByCard(-1)}
        />

        <div
          className="min-w-0 max-w-[1076px] flex-1 snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={update}
          ref={trackRef}
        >
          <div className="flex w-max gap-6">
            {c.items.map((item) => (
              <Link
                className="group block w-[251px] shrink-0 snap-start rounded-[3px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
                key={item.title}
                to={item.to}
              >
                <div className="relative h-[302px] overflow-hidden rounded-[3px]">
                  <img
                    alt={item.title}
                    className="size-full rounded-[3px] object-cover opacity-92 transition-transform duration-700 ease-out group-hover:scale-105"
                    src={item.image}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-category-overlay"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-navy/35 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
                  />
                  {item.description && (
                    <div className="absolute inset-x-0 bottom-0 translate-y-3 space-y-3 px-[18px] pb-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
                      <p className="font-sans text-[10px] font-medium leading-[15.5px] text-white">
                        {item.description}
                      </p>
                      <span className="flex items-center gap-1 font-sans text-ui-label font-bold uppercase tracking-[0.16em] text-white">
                        {c.cta}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-center font-display text-[22px] font-bold uppercase leading-[22px] tracking-[0.5px] text-white">
                  {item.title}
                </h3>
                <span className="mx-auto mt-[15px] block h-0.5 w-[38px] bg-electric transition-[width] duration-500 ease-out group-hover:w-14" />
              </Link>
            ))}
          </div>
        </div>

        <Arrow
          direction="next"
          disabled={edges.end}
          onClick={() => scrollByCard(1)}
        />
      </Reveal>
    </Section>
  );
}
