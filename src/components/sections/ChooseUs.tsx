import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animation";
import { chooseUsContent as c } from "@/content/chooseUs";
import { cn } from "@/lib/cn";
import bg from "@/assets/images/bg.png";

const CARD_WIDTH = 287;
const GAP = 16;

const arrowClass =
  "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-electric text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function ChooseUs() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: direction * (CARD_WIDTH + GAP),
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="choose-us-title"
      className="bg-navy bg-cover bg-center py-16 text-white md:py-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-0">
        <Reveal className="space-y-4">
          <p className="font-sans text-[10px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric">
            {c.eyebrow}
          </p>
          <h2
            id="choose-us-title"
            className="font-display text-[44px] font-bold uppercase leading-[39.16px] tracking-[0.44px]"
          >
            {c.titleLead}
            <span className="block text-electric">{c.titleAccent}</span>
          </h2>
          <p className="max-w-[640px] font-sans text-[13px] leading-[22.1px] text-silver">
            {c.description}
          </p>
        </Reveal>

        <div className="relative pt-[55px]">
          <button
            aria-label="Previous"
            className={cn(arrowClass, "left-0 -translate-x-1/2")}
            onClick={() => scroll(-1)}
            style={{ top: "calc(55px + 178px)" }}
            type="button"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next"
            className={cn(arrowClass, "right-0 translate-x-1/2")}
            onClick={() => scroll(1)}
            style={{ top: "calc(55px + 178px)" }}
            type="button"
          >
            <ChevronRight size={18} />
          </button>

          <ul
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            ref={trackRef}
          >
            {c.items.map((item) => (
              <li
                className="group relative h-[356px] w-[287px] shrink-0 snap-start overflow-hidden"
                key={item.title}
                tabIndex={0}
              >
                <img
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  loading="lazy"
                  src={item.image}
                />
                {/* Spec overlay: electric tint (135deg) + 30% dark layer */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, color-mix(in srgb, var(--color-electric) 8%, transparent) 0%, transparent 35%), linear-gradient(0deg, color-mix(in srgb, var(--color-navy) 30%, transparent), color-mix(in srgb, var(--color-navy) 30%, transparent))",
                  }}
                />
                {/* Readability gradient, hover/focus only */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-navy via-navy/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-visible:opacity-100"
                />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-[24px] font-bold uppercase leading-[0.95]">
                    {item.title}
                  </h3>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                    <div className="overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <p className="mt-3 font-sans text-[10px] leading-[16px] text-silver">
                        {item.description}
                      </p>
                      <span className="mt-4 block h-0.5 w-8 bg-electric" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}