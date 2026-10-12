
import { useState } from "react";
import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { futureWithUsContent as c } from "@/content/futureWithUs";
import { cn } from "@/lib/cn";
import { gridGlowStyle } from "@/lib/sectionBackgrounds";

export function FutureWithUs() {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="future-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:py-20"
      style={gridGlowStyle}
    >
      <CursorGlow />

      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 xl:px-0">
        <Reveal>
          <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
            {c.eyebrow}
          </Eyebrow>

          <h2
            className="mt-5 font-display text-[32px] font-bold uppercase leading-[32px] tracking-[0.3px] sm:mt-[22px] sm:text-[38px] sm:leading-[36px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
            id="future-title"
          >
            {c.titleLines.map((line, i) => (
              <span className="motion-mask" key={line.text}>
                <span
                  className={cn(
                    "motion-mask__line",
                    line.accent && "text-electric",
                  )}
                  style={{ transitionDelay: `${120 + i * 110}ms` }}
                >
                  {line.text}
                </span>
              </span>
            ))}
          </h2>

          <p className="mt-4 max-w-[460px] font-sans text-[12px] leading-5 text-steel sm:text-[13px] sm:leading-[22px]">
            {c.description}
          </p>
        </Reveal>

        {/* Principles */}
        <ul className="mt-9 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:mt-14 xl:grid-cols-4 xl:gap-[10px]">
          {c.principles.map((item, i) => {
            const isActive = i === active;

            return (
              <li className="min-w-0" key={item.number}>
                <Reveal
                  className="h-full"
                  delay={150 + (i % 4) * 90}
                >
                  <article
                    className={cn(
                      "group relative isolate flex h-[379.42px] w-full cursor-default flex-col overflow-hidden rounded-[14px] border border-white/15 bg-[#0B0F1A] px-[26px] pb-[28px] pt-[30px] text-white outline-none transition-[transform,border-color,box-shadow] duration-500 ease-smooth focus-visible:ring-2 focus-visible:ring-electric motion-reduce:transition-none xl:w-[285px]",
                      isActive
                        ? "-translate-y-1 border-electric/60 shadow-[0_18px_40px_0] shadow-electric/25 motion-reduce:translate-y-0"
                        : "shadow-[0_10px_28px_0] shadow-navy/25",
                    )}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    tabIndex={0}
                  >
                    {/* Background image */}
                    <img
                      alt=""
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-0 -z-20 size-full object-cover transition-[transform,opacity] duration-[1200ms] ease-smooth motion-reduce:transition-none",
                        isActive
                          ? "scale-105 opacity-70"
                          : "scale-100 opacity-50",
                      )}
                      decoding="async"
                      loading="lazy"
                      src={item.image}
                    />

                    {/* Image readability overlay */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0B0F1A]/40 via-[#0B0F1A]/75 to-[#0B0F1A]/95"
                    />

                    {/* Active accent bar */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 top-0 h-[3px] origin-left bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />

                    {/* Outlined number */}
                    <span
                      className={cn(
                        "block font-display text-[44px] font-medium leading-none tabular-nums text-transparent transition-colors duration-500 [-webkit-text-stroke-width:1px] motion-reduce:transition-none",
                        isActive
                          ? "[-webkit-text-stroke-color:var(--color-electric)]"
                          : "[-webkit-text-stroke-color:rgba(255,255,255,0.35)]",
                      )}
                    >
                      {item.number}
                    </span>

                    {/* Card content */}
                    <div className="mt-auto">
                      <h3
                        className={cn(
                          "font-display text-[26px] font-bold uppercase leading-none text-white transition-transform duration-500 ease-smooth motion-reduce:transition-none sm:text-[28px]",
                          isActive && "translate-x-1",
                        )}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-2.5 max-w-[220px] font-sans text-[12px] font-bold leading-[17px] text-white">
                        {item.subtitle}
                      </p>

                      <p className="mt-2 max-w-[230px] font-sans text-[11px] leading-[17px] text-silver/80 xl:text-[10px] xl:leading-4">
                        {item.description}
                      </p>

                      <p className="mt-6 border-t-[0.67px] border-white/15 pt-3 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.12em] text-electric">
                        {item.label}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Highlights */}
        <ul className="mt-10 grid gap-7 sm:mt-12 md:grid-cols-3 md:gap-5 xl:mt-[60px]">
          {c.highlights.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={200 + i * 100}>
                <div className="group cursor-default border-t-2 border-electric/50 pt-5 transition-colors duration-500 ease-smooth hover:border-electric motion-reduce:transition-none">
                  <h3 className="font-display text-[20px] font-bold uppercase leading-[1.05] text-electric transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none sm:text-[22px]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 max-w-[320px] font-sans text-[11px] leading-[17px] text-steel xl:text-[10px] xl:leading-4">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
