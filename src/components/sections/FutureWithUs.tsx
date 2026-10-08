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

          {/* Each line rises out of its own mask, staggered */}
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

          <p className="mt-4 max-w-[560px] font-sans text-[12px] leading-5 text-steel sm:text-[13px] sm:leading-[22px]">
            {c.description}
          </p>
        </Reveal>

        {/* Principles: 1 col mobile, 2 col tablet, 4 x 285 on desktop */}
        <ul className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:mt-16 xl:grid-cols-4">
          {c.principles.map((item, i) => {
            const isActive = i === active;
            return (
              <li className="min-w-0" key={item.number}>
                <Reveal className="h-full" delay={150 + (i % 2) * 100}>
                  <article
                    className={cn(
                      "relative flex h-full min-h-[280px] cursor-default flex-col overflow-hidden rounded-xl border-[0.67px] bg-white px-5 pb-6 pt-5 outline-none transition-[transform,border-color,box-shadow] duration-500 ease-smooth focus-visible:ring-2 focus-visible:ring-electric motion-reduce:transition-none sm:min-h-[320px] sm:px-[26px] sm:pb-8 sm:pt-[26px] xl:h-[378px] xl:pb-[46px]",
                      isActive
                        ? "-translate-y-1 border-electric/50 shadow-[0_14px_36px_0] shadow-electric/20 motion-reduce:translate-y-0"
                        : "border-navy/10 shadow-[0_6px_24px_0] shadow-navy/5",
                    )}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    tabIndex={0}
                  >
                    {/* 3px accent bar sweeps across the top of the active card */}
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
                        "block font-display text-[52px] font-medium leading-none tabular-nums text-transparent transition-[transform,-webkit-text-stroke-color] duration-500 ease-smooth [-webkit-text-stroke-width:1.2px] motion-reduce:transition-none sm:text-[64px]",
                        isActive
                          ? "translate-x-1 [-webkit-text-stroke-color:var(--color-electric)]"
                          : "[-webkit-text-stroke-color:var(--color-silver)]",
                      )}
                    >
                      {item.number}
                    </span>

                    <h3
                      className={cn(
                        "mt-4 font-display text-[26px] font-bold uppercase leading-none text-navy transition-transform duration-500 ease-smooth motion-reduce:transition-none sm:mt-[18px] sm:text-[28px]",
                        isActive && "translate-x-1",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[260px] font-sans text-[13px] font-bold leading-[19px] text-navy sm:max-w-[210px] sm:text-[12px] sm:leading-[18px]">
                      {item.subtitle}
                    </p>
                    <p className="mt-2.5 max-w-[300px] font-sans text-[12px] leading-[19px] text-steel sm:max-w-[220px] sm:text-[11px] sm:leading-[17px] xl:text-[10px] xl:leading-4">
                      {item.description}
                    </p>

                    <p className="mt-6 border-t-[0.67px] border-navy/10 pt-3 font-sans text-[9px] font-extrabold uppercase leading-[13px] tracking-[0.12em] text-electric sm:mt-auto xl:text-[8px] xl:leading-none">
                      {item.label}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Highlights: stacked on mobile, 3 columns from md */}
        <ul className="mt-10 grid gap-7 sm:mt-12 md:grid-cols-3 md:gap-5 xl:mt-[66px]">
          {c.highlights.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={200 + i * 100}>
                <div className="group cursor-default border-t-[3px] border-mist/50 pt-5 transition-colors duration-500 ease-smooth hover:border-electric motion-reduce:transition-none sm:pt-6">
                  <h3 className="font-display text-[22px] font-bold uppercase leading-[1.05] text-electric transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none sm:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[340px] font-sans text-[12px] leading-[19px] text-steel md:max-w-[300px] xl:text-[10px] xl:leading-4">
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