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
    const step =
      event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
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
      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-0">
        {/* Watermark */}
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
            className="mt-[22px] text-[44px] leading-[39.16px] tracking-[0.44px] text-navy"
          >
            <span id="factory-tour-title">
              <MaskLines lines={c.title} />
            </span>
          </Heading>
          <p className="mt-[18px] max-w-[540px] font-sans text-[14px] leading-6 text-steel">
            {c.description}
          </p>
        </Reveal>

        {/* Stage: 872 image + 330 departments, 650 tall */}
        <Reveal className="mt-10 lg:mt-[70px]" delay={120}>
          <div className="grid overflow-hidden rounded-xl lg:h-[650px] lg:grid-cols-[minmax(0,1fr)_330px] lg:rounded-l-none">
            {/* Image side */}
            <div className="group/stage relative min-h-[380px] overflow-hidden bg-panel sm:min-h-[460px] lg:min-h-0">
              {c.departments.map((entry, i) => (
                <img
                  alt={i === active ? `${entry.title} at the Super Ace factory` : ""}
                  aria-hidden={i !== active}
                  className={cn(
                    "absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[900ms] ease-smooth motion-reduce:transition-none",
                    i === active
                      ? "scale-100 opacity-100"
                      : "scale-[1.06] opacity-0",
                  )}
                  decoding="async"
                  key={entry.number}
                  loading={i === 0 ? "eager" : "lazy"}
                  src={entry.image}
                />
              ))}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/20 to-transparent"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-navy/35 to-transparent"
              />

              <p className="absolute left-6 top-5 flex items-center gap-2 font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.2em] text-white lg:left-8 lg:top-[26px]">
                <span
                  aria-hidden="true"
                  className="size-[5px] rounded-full bg-electric"
                />
                {c.chip}
              </p>

              {/* Caption: re-keyed so it animates in on every change */}
              <div
                className="absolute bottom-7 left-6 right-24 lg:bottom-9 lg:left-8"
                key={active}
              >
                <p
                  className="quality-text-in font-display text-[12px] font-medium leading-none tabular-nums tracking-[0.1em] text-electric"
                  style={{ animationDelay: "0ms" }}
                >
                  {pad(active + 1)} — {total}
                </p>
                <h3
                  className="quality-text-in mt-2 font-display text-[36px] font-bold uppercase leading-[0.95] text-white sm:text-[44px] lg:text-[48px]"
                  style={{ animationDelay: "70ms" }}
                >
                  {item.title}
                </h3>
                <p
                  className="quality-text-in mt-2.5 max-w-[500px] font-sans text-[10px] leading-4 text-white/80 sm:text-[11px] sm:leading-[18px]"
                  style={{ animationDelay: "140ms" }}
                >
                  {item.description}
                </p>
              </div>

              {/* Play / pause the department tour */}
              <button
                aria-label={playing ? c.pauseLabel : c.playLabel}
                aria-pressed={playing}
                className="group/play absolute bottom-6 right-6 grid size-16 place-items-center rounded-full border-2 border-white bg-white/10 backdrop-blur-sm transition-transform duration-300 ease-smooth hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none lg:bottom-8 lg:right-8"
                onClick={() => setPlaying((p) => !p)}
                type="button"
              >
                {!playing && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 animate-ping rounded-full border border-white/60 motion-reduce:hidden"
                  />
                )}
                <span className="relative grid size-[50px] place-items-center rounded-full bg-electric text-white transition-colors duration-300 group-hover/play:bg-white group-hover/play:text-navy">
                  {playing ? (
                    <Pause fill="currentColor" size={16} strokeWidth={0} />
                  ) : (
                    <Play
                      className="ml-0.5"
                      fill="currentColor"
                      size={16}
                      strokeWidth={0}
                    />
                  )}
                </span>
              </button>

              {/* Autoplay progress */}
              {playing && (
                <span
                  aria-hidden="true"
                  className="tour-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-electric group-hover/stage:[animation-play-state:paused] motion-reduce:hidden"
                  key={active}
                  onAnimationEnd={next}
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                />
              )}
            </div>

            {/* Departments */}
            <div className="relative flex flex-col bg-navy bg-departments-glow pb-6 pt-8 text-white lg:pt-10">
              <div className="flex items-baseline justify-between px-6">
                <h3 className="font-display text-[28px] font-bold uppercase leading-none">
                  {c.panelTitle}
                </h3>
                <p className="font-display text-[12px] font-medium leading-none tabular-nums tracking-[0.1em] text-mist">
                  {pad(active + 1)} — {total}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mx-6 mt-5 block h-px bg-white/15"
              />

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
                      className="group relative flex h-[43px] w-full items-center px-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric"
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
                        className="absolute inset-x-6 bottom-0 h-px bg-white/10"
                      />

                      <span
                        className={cn(
                          "relative w-[34px] font-sans text-[9px] tabular-nums transition-colors duration-300",
                          isActive ? "text-white/70" : "text-white/35",
                        )}
                      >
                        {entry.number}
                      </span>
                      <span
                        className={cn(
                          "relative flex-1 font-display text-[17px] font-bold uppercase leading-5 tracking-[0.5px] transition-[color,transform] duration-300 ease-smooth motion-reduce:transition-none",
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
        <ul className="grid grid-cols-2 border-b-[0.8px] border-navy/10 lg:grid-cols-5">
          {c.areas.map((area, i) => {
            const isActive = item.group === area.id;

            return (
              <li
                className="border-t-[0.8px] px-5 border-navy/10 lg:h-[112px] lg:border-l-[0.8px] lg:border-t-0 lg:first:border-l-0"
                key={area.id}
              >
                <Reveal className="h-full" delay={150 + i * 70}>
                  <button
                    aria-pressed={isActive}
                    className="group relative block h-full w-full px-0 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric lg:px-6 lg:pt-6 lg:first:pl-0"
                    onClick={() => selectArea(area)}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 top-0 h-0.5 origin-left bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                    <span className="block font-sans text-[8px] font-extrabold leading-none tracking-[0.1em] text-electric">
                      {area.number}
                    </span>
                    <span
                      className={cn(
                        "mt-2.5 block font-display text-[22px] font-bold uppercase leading-none transition-colors duration-300 ease-smooth",
                        isActive
                          ? "text-electric"
                          : "text-navy group-hover:text-electric",
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