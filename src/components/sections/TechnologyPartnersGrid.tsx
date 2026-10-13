import { useState } from "react";
import { CountUp, CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PartnerMark } from "@/components/ui/PartnerMark";
import {
  technologyPartnersGridContent as c,
  type TechFilter,
} from "@/content/technologyPartnersGrid";
import { cn } from "@/lib/cn";

export function TechnologyPartnersGrid() {
  const [filter, setFilter] = useState<TechFilter>("all");
  const [active, setActive] = useState<string>(c.partners[0].name);

  const visible = c.partners.filter(
    (p) => filter === "all" || p.category === filter,
  );

  const selectFilter = (next: TechFilter) => {
    setFilter(next);
    const first = c.partners.find(
      (p) => next === "all" || p.category === next,
    );
    setActive(first?.name ?? "");
  };

  return (
    <section
      aria-labelledby="tech-grid-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:pb-[90px] lg:pt-[72px]"
      style={{
        backgroundImage:
          "radial-gradient(34% 30% at 0% 100%, color-mix(in srgb, var(--color-electric) 12%, transparent) 0%, transparent 100%)",
      }}
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 xl:px-0">
        {/* Header: title left, stat right */}
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
              {c.eyebrow}
            </Eyebrow>
            <h2
              className="mt-5 font-display text-[36px] font-bold uppercase leading-[34px] tracking-[0.3px] sm:mt-[22px] sm:text-[44px] sm:leading-[39px] sm:tracking-[0.44px]"
              id="tech-grid-title"
            >
              {c.titleLines.map((line, i) => (
                <span className="block" key={i}>
                  {line.map((part) => (
                    <span
                      className={"accent" in part && part.accent ? "text-electric" : undefined}
                      key={part.text}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-[500px] font-sans text-[12px] leading-5 text-steel sm:text-[13px] sm:leading-[22px]">
              {c.description}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 lg:pb-2">
            <span className="font-display text-[44px] font-extrabold leading-none text-navy">
              <CountUp value={String(c.partners.length)} />
            </span>
            <p className="font-sans text-[8px] font-semibold uppercase leading-[11px] tracking-[0.15em] text-steel">
              {c.statLabel[0]}
              <span className="block">{c.statLabel[1]}</span>
            </p>
          </div>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={120}>
          <div
            aria-label={c.filtersLabel}
            className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
            role="group"
          >
            {c.filters.map((item) => {
              const isActive = item.id === filter;
              return (
                <button
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-[2px] border px-4 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.12em] transition-[background-color,border-color,color] duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none",
                    isActive
                      ? "border-navy bg-navy text-white"
                      : "border-navy/10 bg-white text-navy/70 hover:border-electric hover:text-electric",
                  )}
                  key={item.id}
                  onClick={() => selectFilter(item.id)}
                  type="button"
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Cards: 4 columns, 12px gap */}
        {visible.length === 0 ? (
          <p className="mt-10 font-sans text-body text-navy/50">{c.empty}</p>
        ) : (
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {visible.map((partner, i) => {
              const isActive = partner.name === active;
              return (
                <li className="min-w-0" key={`${filter}-${partner.name}`}>
                  <Reveal className="h-full" delay={Math.min(i % 4, 3) * 70}>
                    <article
                      className={cn(
                        "relative flex h-[122px] cursor-default flex-col items-center justify-center gap-3 rounded-[3px] border px-4 text-center outline-none transition-[border-color,box-shadow,background-color,transform] duration-500 ease-smooth focus-visible:ring-2 focus-visible:ring-electric motion-reduce:transition-none",
                        isActive
                          ? "-translate-y-0.5 border-navy/10 border-l-[3px] border-l-electric bg-white shadow-[0_10px_28px_0] shadow-electric/15 motion-reduce:translate-y-0"
                          : "border-navy/10 bg-linear-to-b from-white to-cloud",
                      )}
                      onFocus={() => setActive(partner.name)}
                      onMouseEnter={() => setActive(partner.name)}
                      tabIndex={0}
                    >
                      {/* Corner notch */}
                      <span
                        aria-hidden="true"
                        className="absolute right-2 top-2 size-1.5 border-r border-t border-navy/25"
                      />
                      <PartnerMark
                        logo={''}
                        mark={partner.mark}
                        name={partner.name}
                      />
                      <p className="max-w-[210px] font-sans text-[10px] font-semibold leading-[14px] text-electric">
                        {partner.name}
                      </p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        )}

        {/* Footer strip */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 pt-4">
          <p className="flex items-center gap-2 font-sans text-[7px] font-semibold uppercase leading-none tracking-[0.2em] text-navy/50">
            <span aria-hidden="true" className="size-1.5 bg-electric" />
            {c.footerLeft}
          </p>
          <p className="font-sans text-[7px] font-semibold uppercase leading-none tracking-[0.2em] text-navy/40">
            {c.footerRight}
          </p>
        </div>
      </div>
    </section>
  );
}