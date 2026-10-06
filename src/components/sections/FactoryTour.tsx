import { useState } from "react";
import { Reveal } from "@/components/animation";
import { factoryTourContent as c } from "@/content/factoryTour";
import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 6000;

export function FactoryTour() {
  const [active, setActive] = useState(0);
  const { x, y } = c.steps[active].hotspot;
  const next = () => setActive((i) => (i + 1) % c.steps.length);

  return (
    <section
      aria-labelledby="factory-tour-title"
      className="group/tour bg-white py-12 text-navy sm:py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-0">
        <Reveal className="space-y-4">
          <p className="font-sans text-[10px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric">
            {c.eyebrow}
          </p>
          <h2
            id="factory-tour-title"
            className="font-display text-[clamp(2.25rem,10vw,2.75rem)] font-bold uppercase leading-[0.9] tracking-[0.44px] sm:text-[44px] sm:leading-[39.16px]"
          >
            {c.titleLead}
            <span className="block text-electric">{c.titleAccent}</span>
          </h2>
        </Reveal>

        {/* Image: 1180 x 548.5625 */}
        <Reveal
          className="relative mt-8 aspect-[16/9] overflow-hidden bg-navy sm:mt-10 sm:aspect-[1180/548.5625]"
          delay={120}
        >
          {/* Pans and zooms toward the active hotspot */}
          <div
            className="absolute inset-0 scale-[1.08] transition-[transform,transform-origin] duration-[1400ms] ease-smooth motion-reduce:scale-100 motion-reduce:transition-none"
            style={{ transformOrigin: `${x}% ${y}%` }}
          >
            <img
              alt={c.imageAlt}
              className="size-full object-cover"
              loading="lazy"
              src={c.image}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-navy/15"
            />

            {c.steps.map((step, i) => {
              const isActive = i === active;
              const left = step.hotspot.labelSide === "left";
              return (
                <button
                  aria-label={`${step.number} ${step.title}`}
                  aria-pressed={isActive}
                  className="tour-spot group/spot absolute z-10 -translate-x-1/2 -translate-y-1/2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  key={step.number}
                  onClick={() => setActive(i)}
                  style={{
                    left: `${step.hotspot.x}%`,
                    top: `${step.hotspot.y}%`,
                    animationDelay: `${600 + i * 140}ms`,
                  }}
                  type="button"
                >
                  <span className="relative flex size-3.5 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover/spot:scale-125">
                    <span
                      className={cn(
                        "size-1.5 rounded-full transition-colors duration-500",
                        isActive ? "bg-electric" : "bg-navy",
                      )}
                    />
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 animate-ping rounded-full bg-white/70 motion-reduce:hidden"
                      />
                    )}
                  </span>
                  <span
                    className={cn(
                      "absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap px-2 py-1 font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.2em] text-white transition-[background-color,translate] duration-500 ease-smooth motion-reduce:transition-none sm:block",
                      left ? "right-full mr-2.5" : "left-full ml-2.5",
                      isActive
                        ? "bg-electric"
                        : "bg-navy/80 group-hover/spot:bg-navy",
                    )}
                  >
                    {step.number} {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Caption + readability gradient (not scaled) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-navy/60 to-transparent"
          />
          <p className="pointer-events-none absolute bottom-4 left-4 font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.2em] text-white/80">
            {c.caption}
          </p>
        </Reveal>

        {/* Steps: 1177 x 166, gap 32 */}
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:mt-8 sm:gap-x-8 sm:gap-y-8 sm:grid-cols-3 lg:min-h-[166px] lg:grid-cols-5">
          {c.steps.map((step, i) => {
            const isActive = i === active;
            return (
              <li key={step.number}>
                <Reveal className="h-full" delay={150 + i * 70}>
                  <button
                    aria-pressed={isActive}
                    className="group/step relative block h-full w-full cursor-pointer pt-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
                    onClick={() => setActive(i)}
                    type="button"
                  >
                    {/* Track + autoplay progress */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 top-0 h-0.5 bg-navy/12 transition-opacity duration-500 ease-smooth",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="tour-progress absolute inset-x-0 top-0 h-0.5 origin-left bg-navy group-hover/tour:[animation-play-state:paused] group-focus-within/tour:[animation-play-state:paused]"
                        onAnimationEnd={next}
                        style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                      />
                    )}

                    <span
                      className={cn(
                        "block transition-transform duration-700 ease-smooth motion-reduce:transition-none",
                        isActive ? "translate-y-0" : "translate-y-6",
                      )}
                    >
                      <span className="block font-display text-[22px] font-normal uppercase leading-[22px] tracking-[2.42px] text-electric">
                        {step.number}
                      </span>
                      <span
                        className={cn(
                          "mt-3 block font-display text-[22px] font-bold uppercase leading-[1.1] tracking-[-0.3px] transition-colors duration-300 ease-smooth sm:mt-[15px] sm:text-[30px] sm:leading-[36px]",
                          isActive
                            ? "text-navy"
                            : "text-navy group-hover/step:text-electric",
                        )}
                      >
                        {step.title}
                      </span>
                      <span
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-700 ease-smooth motion-reduce:transition-none",
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <span className="overflow-hidden">
                          <span className="block max-w-[210px] pt-1.5 font-sans text-[11px] leading-[1.5] text-mist sm:text-[14px] sm:leading-[20px]">
                            {step.description}
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}