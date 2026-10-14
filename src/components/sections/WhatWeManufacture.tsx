import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/assets/images";
import { CursorGlow, MaskLines, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { manufactureContent as c } from "@/content/manufacture";
import { cn } from "@/lib/cn";

export function WhatWeManufacture() {
  const [active, setActive] = useState(c.defaultIndex);

  return (
    <section className="relative isolate overflow-hidden bg-white bg-manufacture-glow py-12 sm:py-16 lg:pb-24 lg:pt-[62px] xl:pb-[187px]">
      <CursorGlow />
      {/* Stacked < lg, fluid 2 columns at lg, Figma 280/900 at xl+ */}
      <div className="mx-auto grid w-full max-w-360 gap-8 px-5 sm:gap-10 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8 lg:px-10 xl:grid-cols-[280px_900px] xl:gap-0 xl:px-30">
        <Reveal className="min-w-0 lg:pt-[30px]">
          <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
            {c.eyebrow}
          </Eyebrow>

          <Heading
            as="h2"
            className="mt-5 text-[32px] leading-[0.95] tracking-[0.3px] text-navy sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
          >
            <MaskLines lines={c.title.map((text) => ({ text }))} />
          </Heading>

          <p className="mt-4 max-w-md font-sans text-[13px] leading-5 text-slate sm:text-[12px] lg:max-w-[252px]">
            {c.description}
          </p>

          {/* Tabs: 1 col mobile, 2 cols sm, 1 col lg+ (side rail) */}
          <div
            aria-label={c.eyebrow}
            className="mt-8 grid w-full sm:grid-cols-2 sm:gap-x-6 lg:mt-[62px] lg:w-full lg:grid-cols-1 lg:gap-x-0 xl:w-[254px]"
            role="tablist"
          >
            {c.items.map((item, i) => {
              const isActive = i === active;

              return (
                <button
                  aria-controls={`manufacture-panel-${i}`}
                  aria-selected={isActive}
                  className="group relative flex h-14 w-full items-center border-b border-navy/10 pl-4 pr-3 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric sm:h-16 sm:last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0 lg:[&:nth-last-child(2)]:border-b"
                  id={`manufacture-tab-${i}`}
                  key={item.index}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  role="tab"
                  type="button"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-0 left-0 w-0.5 bg-electric transition-transform duration-300 ease-out",
                      isActive ? "scale-y-100" : "scale-y-0",
                    )}
                  />
                  <span
                    className={cn(
                      "w-10 shrink-0 font-sans text-[10px] leading-none transition-colors duration-300 sm:w-[50px]",
                      isActive ? "text-navy" : "text-navy/40",
                    )}
                  >
                    {item.index}
                  </span>
                  <span
                    className={cn(
                      "min-w-0 flex-1 break-words font-display text-[18px] font-bold uppercase leading-5 tracking-[0.5px] transition-all duration-300 ease-out sm:text-[20px]",
                      isActive
                        ? "translate-x-1 text-navy"
                        : "text-navy/40 group-hover:text-navy/70",
                    )}
                  >
                    {item.title}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className={cn(
                      "shrink-0 text-navy transition-all duration-300 ease-out",
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-1 opacity-0",
                    )}
                    size={10}
                    strokeWidth={2.5}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel: aspect box < lg, 480px tall at lg, Figma 900 x 565 at xl */}
        <Reveal
          className="relative min-w-0 w-full overflow-hidden bg-panel [aspect-ratio:4/5] sm:[aspect-ratio:3/2] lg:h-[480px] lg:[aspect-ratio:auto] xl:h-[565px] xl:w-[900px]"
          delay={120}
        >
          {c.items.map((item, i) => {
            const isActive = i === active;

            return (
              <div
                aria-hidden={!isActive}
                aria-labelledby={`manufacture-tab-${i}`}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-out",
                  isActive ? "opacity-100" : "pointer-events-none opacity-0",
                )}
                id={`manufacture-panel-${i}`}
                key={item.index}
                role="tabpanel"
              >
                <img
                  alt={item.title}
                  className={cn(
                    "absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-out motion-reduce:transition-none",
                    isActive ? "scale-100" : "scale-[1.06]",
                  )}
                  src={item.image}
                />
                <img
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 size-full object-cover"
                  src={images.manufacture.overlay}
                />

                <div
                  className={cn(
                    "absolute bottom-4 left-4 right-4 transition-all duration-700 ease-out sm:bottom-5 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-24 xl:bottom-10 xl:left-12 xl:right-auto",
                    isActive
                      ? "translate-y-0 opacity-100 delay-150"
                      : "translate-y-4 opacity-0",
                  )}
                >
                  <p className="font-sans text-[9px] font-extrabold uppercase leading-[14px] tracking-[0.22em] text-[color-mix(in_srgb,var(--color-electric)_55%,var(--color-white))] sm:text-[10px]">
                    {item.index} / {c.panelEyebrow}
                  </p>
                  <h3 className="mt-2 break-words font-display text-[36px] font-bold uppercase leading-[0.9] text-white sm:text-[48px] lg:mt-3 lg:text-[48px] xl:text-[56px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[370px] font-sans text-[11px] leading-[17px] text-silver sm:mt-3 sm:text-[12px] sm:leading-[19px]">
                    {item.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                    {item.tags.map((tag) => (
                      <li
                        className="inline-flex h-6 items-center rounded-[2px] border border-white/30 bg-navy/30 px-2 font-sans text-[8px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm sm:h-7 sm:px-3 sm:tracking-[0.12em]"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  aria-label={`Explore ${item.title}`}
                  className={cn(
                    "absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-electric text-white transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:right-6 sm:top-6 lg:bottom-6 lg:right-6 lg:top-auto lg:size-12 xl:bottom-[34px] xl:right-9 xl:size-[52px]",
                    isActive ? "delay-200" : "scale-90",
                  )}
                  tabIndex={isActive ? 0 : -1}
                  to={item.to}
                >
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}