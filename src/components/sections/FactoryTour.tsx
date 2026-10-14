// src/components/sections/FactoryTour.tsx
import { useRef, useState, type KeyboardEvent } from "react";
import { Pause, Play } from "lucide-react";
import { CursorGlow, MaskLines, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { factoryTourContent as c, type FactoryArea } from "@/content/factoryTour";
import { cn } from "@/lib/cn";

const AUTOPLAY_MS = 6000;
const total = c.departments.length;
const pad = (n: number) => String(n).padStart(2, "0");

export function FactoryTour() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = c.departments[active];

  const next = () => setActive((i) => (i + 1) % total);

  const selectArea = (area: FactoryArea) => {
    const index = c.departments.findIndex((d) => d.group === area.id);
    if (index >= 0) setActive(index);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const target = (active + step + total) % total;
    setActive(target);
    tabRefs.current[target]?.focus();
  };

  return (
    <section
      aria-labelledby="factory-tour-title"
      className="relative isolate overflow-hidden bg-white bg-manufacture-glow pb-14 pt-14 text-navy lg:pb-[72px] lg:pt-[36px]"
    >
      <CursorGlow />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-0">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-2 right-0 hidden select-none font-display text-[150px] font-bold uppercase leading-[150px] text-navy/[0.04] lg:block"
        >
          {c.watermark}
        </span>

        {/* Header */}
        <Reveal className="relative">
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>
          <Heading
            as="h2"
            className="mt-4 text-[32px] leading-[1] tracking-[0.3px] sm:mt-[22px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px] text-navy"
          >
            <span id="factory-tour-title">
              <MaskLines lines={c.title} />
            </span>
          </Heading>
          <p className="mt-4 max-w-[540px] font-sans text-[13px] leading-[22px] text-steel sm:mt-[18px] sm:text-[14px] sm:leading-6">
            {c.description}
          </p>
        </Reveal>

        {/* Stage */}
        <Reveal className="mt-8 sm:mt-10 lg:mt-[70px]" delay={120}>
          <div className="grid overflow-hidden rounded-xl lg:h-[650px] lg:grid-cols-[minmax(0,1fr)_330px] lg:rounded-l-none">
            {/* Image side */}
            <div className="group/stage relative aspect-[4/3] overflow-hidden bg-panel sm:aspect-[16/10] lg:aspect-auto lg:h-full">
              {c.departments.map((entry, i) => (
                <img
                  alt={i === active ? `${entry.title} at the Super Ace factory` : ""}
                  aria-hidden={i !== active}
                  className={cn(
                    "absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[900ms] ease-smooth motion-reduce:transition-none",
                    i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0",
                  )}
                  decoding="async"
                  key={entry.number}
                  loading={i === 0 ? "eager" : "lazy"}
                  src={entry.image}
                />
              ))}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/30 to-transparent"
              />

              <p className="absolute left-4 top-4 flex items-center gap-2 font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.2em] text-white sm:left-6 sm:top-5 lg:left-8 lg:top-[26px]">
                <span aria-hidden="true" className="size-[5px] rounded-full bg-electric" />
                {c.chip}
              </p>

              {/* Caption: fixed block at the bottom, text never overlaps the controls */}
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 sm:inset-x-6 sm:bottom-6 lg:inset-x-8 lg:bottom-8">
                <div className="min-w-0 flex-1" key={active}>
                  <p
                    className="quality-text-in font-display text-[11px] font-medium leading-none tabular-nums tracking-[0.1em] text-electric"
                    style={{ animationDelay: "0ms" }}
                  >
                    {pad(active + 1)} — {total}
                  </p>
                  <h3
                    className="quality-text-in mt-2 font-display text-[28px] font-bold uppercase leading-[0.95] text-white sm:text-[38px] lg:text-[44px]"
                    style={{ animationDelay: "70ms" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="quality-text-in mt-2 line-clamp-2 max-w-[460px] font-sans text-[10px] leading-4 text-white/80 sm:text-[11px] sm:leading-[18px]"
                    style={{ animationDelay: "140ms" }}
                  >
                    {item.description}
                  </p>
                </div>

                <button
                  aria-label={playing ? c.pauseLabel : c.playLabel}
                  aria-pressed={playing}
                  className="group/play relative grid size-12 shrink-0 place-items-center rounded-full border-2 border-white bg-white/10 backdrop-blur-sm transition-transform duration-300 ease-smooth hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:size-14 lg:size-16"
                  onClick={() => setPlaying((p) => !p)}
                  type="button"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-electric text-white transition-colors duration-300 group-hover/play:bg-white group-hover/play:text-navy sm:size-10 lg:size-[50px]">
                    {playing ? (
                      <Pause fill="currentColor" size={14} strokeWidth={0} />
                    ) : (
                      <Play className="ml-0.5" fill="currentColor" size={14} strokeWidth={0} />
                    )}
                  </span>
                </button>
              </div>

              {playing && (
                <span
                  aria-hidden="true"
                  className="tour-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-electric motion-reduce:hidden"
                  key={`progress-${active}`}
                  onAnimationEnd={next}
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                />
              )}
            </div>

            {/* Departments */}
            <div className="relative flex flex-col bg-navy bg-departments-glow pb-4 pt-6 text-white sm:pb-6 sm:pt-8 lg:pt-10">
              <div className="flex items-baseline justify-between px-5 sm:px-6">
                <h3 className="font-display text-[24px] font-bold uppercase leading-none sm:text-[28px]">
                  {c.panelTitle}
                </h3>
                <p className="font-display text-[12px] font-medium leading-none tabular-nums tracking-[0.1em] text-mist">
                  {pad(active + 1)} — {total}
                </p>
              </div>
              <span aria-hidden="true" className="mx-5 mt-4 block h-px bg-white/15 sm:mx-6 sm:mt-5" />

              <div
                aria-label={c.panelTitle}
                aria-orientation="vertical"
                onKeyDown={onKeyDown}
                role="tablist"
              >
                {c.departments.map((entry, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      aria-selected={isActive}
                      className="group relative flex h-[40px] w-full items-center px-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric sm:h-[43px] sm:px-6"
                      key={entry.number}
                      onClick={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      role="tab"
                      tabIndex={isActive ? 0 : -1}
                      type="button"
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-0 origin-left bg-linear-to-r from-electric/15 to-transparent transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-y-0 left-0 w-0.5 origin-center bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                          isActive ? "scale-y-100" : "scale-y-0",
                        )}
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-5 bottom-0 h-px bg-white/10 sm:inset-x-6"
                      />

                      <span
                        className={cn(
                          "relative w-[30px] shrink-0 font-sans text-[9px] tabular-nums transition-colors duration-300 sm:w-[34px]",
                          isActive ? "text-white/70" : "text-white/35",
                        )}
                      >
                        {entry.number}
                      </span>
                      <span
                        className={cn(
                          "relative min-w-0 flex-1 truncate font-display text-[15px] font-bold uppercase leading-5 tracking-[0.5px] transition-[color,transform] duration-300 ease-smooth motion-reduce:transition-none sm:text-[17px]",
                          isActive
                            ? "translate-x-0.5 text-white"
                            : "text-white/50 group-hover:text-white/80",
                        )}
                      >
                        {entry.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "relative size-[5px] shrink-0 bg-electric transition-[opacity,transform] duration-300 ease-smooth motion-reduce:transition-none",
                          isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Area strip */}
        <ul className="mt-2 grid grid-cols-2 border-b-[0.8px] border-navy/10 sm:grid-cols-3 lg:mt-0 lg:grid-cols-5">
          {c.areas.map((area, i) => {
            const isActive = item.group === area.id;
            return (
              <li
                className="border-t-[0.8px] border-navy/10 px-5 sm:[&:nth-child(3n+1)]:border-l-0 lg:h-[112px] lg:border-l-[0.8px] lg:border-t-0 lg:first:border-l-0"
                key={area.id}
              >
                <Reveal className="h-full" delay={150 + i * 70}>
                  <button
                    aria-pressed={isActive}
                    className="group relative block h-full w-full py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric lg:px-6 lg:pt-6 lg:first:pl-0"
                    onClick={() => selectArea(area)}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 top-0 h-0.5 origin-left bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                    <span className="block font-sans text-[8px] font-extrabold leading-none tracking-[0.1em] text-electric">
                      {area.number}
                    </span>
                    <span
                      className={cn(
                        "mt-2.5 block font-display text-[18px] font-bold uppercase leading-none transition-colors duration-300 ease-smooth sm:text-[20px] lg:text-[22px]",
                        isActive ? "text-electric" : "text-navy group-hover:text-electric",
                      )}
                    >
                      {area.title}
                    </span>
                    <span className="mt-1.5 block max-w-[180px] font-sans text-[8px] leading-3 text-mist">
                      {area.description}
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