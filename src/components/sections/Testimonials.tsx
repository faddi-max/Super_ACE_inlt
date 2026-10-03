import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CursorGlow, MaskLines, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { testimonialsContent as c } from "@/content/testimonials";
import { cn } from "@/lib/cn";

const verticalLabel =
  "font-montserrat text-[8px] font-extrabold uppercase leading-none tracking-[2px] text-muted-label [writing-mode:vertical-rl]";

const arrowButton =
  "grid size-9 place-items-center rounded-full border border-navy/15 bg-white text-navy transition-all duration-300 ease-out hover:scale-105 hover:border-electric hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

export function Testimonials() {
  const [active, setActive] = useState(0);
  const total = c.items.length;
  const go = (index: number) => setActive((index + total) % total);

  return (
    <section className="relative isolate overflow-hidden bg-white bg-testimonials-glow py-16 lg:pb-[65px] lg:pt-[77px]">
      <CursorGlow />
      <div className="mx-auto w-full max-w-360 px-6 lg:px-30">
        <Reveal className="mx-auto flex flex-col items-center text-center">
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>
          <Heading
            as="h2"
            className="mt-[22px] text-[44px] leading-[39.16px] tracking-[0.44px] text-navy"
          >
            <MaskLines lines={[{ text: c.title }]} />
          </Heading>
          <p className="mt-[25px] max-w-[450px] font-sans text-[11px] leading-5 text-navy/50">
            {c.description}
          </p>
        </Reveal>

        <Reveal
          className="mx-auto mt-12 max-w-[1160px] lg:mt-[61px]"
          delay={120}
        >
          <div
            aria-label={c.title}
            aria-roledescription="carousel"
            className="grid min-h-[430px] border-y-[0.8px] border-navy/10 bg-testimonial-strip lg:grid-cols-[130px_1fr_130px]"
          >
            <div className="hidden flex-col items-start gap-6 border-r-[0.8px] border-navy/9 pl-0.5 pt-[175px] lg:flex">
              <span className={cn(verticalLabel, "rotate-180")}>
                {c.labelLeft}
              </span>
              <span className="font-display text-[28px] font-medium leading-7 text-electric">
                {String(active + 1).padStart(2, "0")}
              </span>
            </div>

            <div aria-live="polite" className="grid">
              {c.items.map((item, i) => {
                const isActive = i === active;

                return (
                  <figure
                    aria-hidden={!isActive}
                    className={cn(
                      "col-start-1 row-start-1 flex flex-col items-center px-6 pt-[66px] text-center transition-all duration-700 ease-out",
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-3 opacity-0",
                    )}
                    key={i}
                  >
                    <span
                      aria-hidden="true"
                      className="block h-[55px] font-sans text-[55px] font-normal leading-[55px] tracking-[0px] text-testimonial-quote"
                    >
                      “
                    </span>
                    <blockquote className="max-w-[760px] font-display text-[26px] font-medium leading-8 text-navy lg:text-[36px] lg:leading-[44px]">
                      {item.quote}
                    </blockquote>
                    <span
                      aria-hidden="true"
                      className="mt-[26px] block h-0.5 w-[38px] bg-electric"
                    />
                    <figcaption className="mt-[27px] flex items-center gap-4 text-left">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy font-sans text-[10px] font-semibold tracking-[0.1em] text-white">
                        {initials(item.name)}
                      </span>
                      <span className="block">
                        <span className="block font-sans text-[11px] font-bold leading-[15px] text-navy">
                          {item.name}
                        </span>
                        <span className="block font-sans text-[9px] leading-[14px] text-navy/50">
                          {item.role}
                        </span>
                        <span className="block font-sans text-[8px] uppercase leading-[13px] tracking-[0.14em] text-navy/35">
                          {item.location}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            <div className="hidden items-center justify-end border-l-[0.8px] border-navy/9 pr-0.5 lg:flex">
              <span className={verticalLabel}>{c.labelRight}</span>
            </div>
          </div>
        </Reveal>

        <Reveal
          className="mt-8 flex items-center justify-center gap-4 lg:mt-[34px]"
          delay={200}
        >
          <button
            aria-label="Previous testimonial"
            className={arrowButton}
            onClick={() => go(active - 1)}
            type="button"
          >
            <ChevronLeft size={12} strokeWidth={2.5} />
          </button>

          <div className="flex items-center">
            {c.items.map((_, i) => (
              <button
                aria-current={i === active}
                aria-label={`Show testimonial ${i + 1}`}
                className="grid h-6 place-items-center px-1 focus-visible:outline-2 focus-visible:outline-electric"
                key={i}
                onClick={() => go(i)}
                type="button"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full transition-all duration-500 ease-out",
                    i === active
                      ? "w-5 bg-electric"
                      : "w-1.5 bg-navy/15 hover:bg-navy/30",
                  )}
                />
              </button>
            ))}
          </div>

          <button
            aria-label="Next testimonial"
            className={arrowButton}
            onClick={() => go(active + 1)}
            type="button"
          >
            <ChevronRight size={12} strokeWidth={2.5} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
