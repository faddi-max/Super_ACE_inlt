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
    <section className="relative isolate overflow-hidden bg-white bg-manufacture-glow py-16 lg:pb-[187px] lg:pt-[62px]">
      <CursorGlow />
      <div className="mx-auto grid w-full max-w-360 gap-10 px-6 lg:grid-cols-[280px_900px] lg:gap-0 lg:px-30">
        <Reveal className="lg:pt-[30px]">
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>

          <Heading
            as="h2"
            className="mt-5 text-[44px] leading-[39.16px] tracking-[0.44px] text-navy"
          >
            <MaskLines lines={c.title.map((text) => ({ text }))} />
          </Heading>

          <p className="mt-4 max-w-[252px] font-sans text-[12px] leading-5 text-slate">
            {c.description}
          </p>

          <div
            aria-label={c.eyebrow}
            className="mt-10 w-full lg:mt-[62px] lg:w-[254px]"
            role="tablist"
          >
            {c.items.map((item, i) => {
              const isActive = i === active;

              return (
                <button
                  aria-controls={`manufacture-panel-${i}`}
                  aria-selected={isActive}
                  className="group relative flex h-16 w-full items-center border-b border-navy/10 pl-4 pr-3 text-left last:border-b-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric"
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
                      "w-[50px] font-sans text-[10px] leading-none transition-colors duration-300",
                      isActive ? "text-navy" : "text-navy/40",
                    )}
                  >
                    {item.index}
                  </span>
                  <span
                    className={cn(
                      "flex-1 font-display text-[20px] font-bold uppercase leading-5 tracking-[0.5px] transition-all duration-300 ease-out",
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

        <Reveal
          className="relative min-h-[360px] w-full overflow-hidden bg-panel [aspect-ratio:4/5] sm:min-h-0 sm:[aspect-ratio:3/2] lg:h-[565px] lg:min-h-[565px] lg:w-[900px] lg:[aspect-ratio:auto]"
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
                    "absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-out",
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
                    "absolute bottom-5 left-4 right-4 transition-all duration-700 ease-out sm:left-6 sm:right-6 lg:bottom-10 lg:left-12 lg:right-auto",
                    isActive
                      ? "translate-y-0 opacity-100 delay-150"
                      : "translate-y-4 opacity-0",
                  )}
                >
                  <p className="font-sans text-[10px] font-extrabold uppercase leading-[14px] tracking-[0.22em] text-[color-mix(in_srgb,var(--color-electric)_55%,var(--color-white))]">
                    {item.index} / {c.panelEyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-[40px] font-bold uppercase leading-[0.9] text-white sm:text-[48px] lg:mt-3 lg:text-[56px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[370px] font-sans text-[11px] leading-[17px] text-silver sm:mt-3 sm:text-[12px] sm:leading-[19px]">
                    {item.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                    {item.tags.map((tag) => (
                      <li
                        className="inline-flex h-6 items-center rounded-[2px] border border-white/30 bg-navy/30 px-2.5 font-sans text-[8px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:h-7 sm:px-3"
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
                    "absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-electric text-white transition-all duration-300 ease-out hover:scale-110 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:right-6 sm:top-6 lg:bottom-[34px] lg:right-9 lg:top-auto lg:size-[52px]",
                    isActive ? "delay-200" : "scale-90",
                  )}
                  tabIndex={isActive ? 0 : -1}
                  to={item.to}
                >
                  <ArrowUpRight size={12} strokeWidth={2.5} />
                </Link>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
