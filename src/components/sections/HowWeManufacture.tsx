import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import { CursorGlow, MaskLines, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { processContent as c } from "@/content/process";
import { cn } from "@/lib/cn";

const total = c.items.length;
const pad = (n: number) => String(n).padStart(2, "0");

export function HowWeManufacture() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = c.items[active];

  // Per the design, the lit line leads to the next node (01 lights 01 → 02)
  const progress = Math.min(active + 1, total - 1) / (total - 1);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step =
      event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (active + step + total) % total;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="relative isolate overflow-hidden bg-white bg-manufacture-glow py-12 sm:py-16 lg:pb-[76px] lg:pt-[62px]">
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 xl:px-0">
        {/* Header */}
        <Reveal>
          <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
            {c.eyebrow}
          </Eyebrow>
          <Heading
            as="h2"
            className="mt-5 text-[32px] leading-[0.95] tracking-[0.3px] text-navy sm:mt-[23px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
          >
            <MaskLines lines={c.title} />
          </Heading>
          <p className="mt-4 max-w-[480px] font-sans text-[13px] leading-[22px] text-steel sm:mt-[18px] sm:text-[14px] sm:leading-6">
            {c.description}
          </p>
        </Reveal>

        {/* Info bar */}
        <Reveal
          className="mt-10 flex flex-col gap-2 border-y-[0.8px] border-navy/10 py-3 sm:mt-14 sm:min-h-[46px] sm:flex-row sm:items-center sm:justify-between sm:py-2"
          delay={100}
        >
          <p className="flex items-center gap-2.5 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-navy">
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-electric"
            />
            {c.barLabel}
          </p>
          <p className="font-display text-[15px] font-medium uppercase leading-none tracking-[0.05em] text-mist sm:text-[16px]">
            <span className="font-bold text-electric">{c.stats.highlight}</span>{" "}
            {c.stats.rest}
          </p>
        </Reveal>

        {/* Timeline: md+ only (the stage list below handles smaller screens) */}
        <div className="relative mt-9 hidden md:block lg:mt-11">
          <span
            aria-hidden="true"
            className="absolute left-[8.3333%] right-[8.3333%] top-[23.5px] h-px bg-electric/25"
          />
          <span
            aria-hidden="true"
            className="absolute left-[8.3333%] right-[8.3333%] top-[23px] h-0.5 origin-left bg-electric transition-transform duration-700 ease-smooth motion-reduce:transition-none"
            style={{ transform: `scaleX(${progress})` }}
          />

          <ul className="relative grid grid-cols-6">
            {c.items.map((step, i) => {
              const isActive = i === active;
              const isFilled = isActive || i === total - 1;

              return (
                <li className="min-w-0" key={step.index}>
                  <Reveal delay={Math.min(i, 5) * 70}>
                    <button
                      aria-label={`Stage ${step.index}: ${step.title}`}
                      aria-pressed={isActive}
                      className="group flex w-full flex-col items-center px-1 text-center outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric lg:px-2"
                      onClick={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      type="button"
                    >
                      <span className="relative flex size-12 items-center justify-center">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute -inset-1.5 rounded-full bg-electric/15 transition-[transform,opacity] duration-500 ease-smooth motion-reduce:transition-none",
                            isActive ? "scale-100 opacity-100" : "scale-50 opacity-0",
                          )}
                        />
                        <span
                          className={cn(
                            "relative grid size-full place-items-center rounded-full border font-display text-[14px] font-bold leading-none transition-[background-color,border-color,color,transform] duration-500 ease-smooth group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                            isFilled
                              ? "border-electric bg-electric text-white"
                              : "border-electric/40 bg-white text-electric group-hover:border-electric",
                          )}
                        >
                          {step.index}
                        </span>
                      </span>

                      <span className="mt-4 block break-words font-display text-[15px] font-bold uppercase leading-5 text-navy transition-colors duration-300 ease-smooth group-hover:text-electric lg:mt-5 lg:text-[18px] lg:leading-6 xl:text-[22px]">
                        {step.title}
                      </span>
                      <span className="mt-1.5 block max-w-[168px] font-sans text-[9px] leading-3 text-mist xl:text-[8px]">
                        {step.summary}
                      </span>
                    </button>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Stage panel: stacked < lg, 3 columns lg (240/fluid/260), Figma 284/fluid/330 at xl */}
        <Reveal className="mt-8 sm:mt-10 lg:mt-[60px]" delay={150}>
          <div className="grid border-y-[0.8px] border-navy/10 lg:min-h-[406px] lg:grid-cols-[240px_minmax(0,1fr)_260px] xl:grid-cols-[284px_minmax(0,1fr)_330px]">
            {/* Sidebar: 2 columns on md, 1 column elsewhere */}
            <div className="min-w-0 border-b-[0.8px] border-navy/10 pb-3 pt-5 lg:border-b-0 lg:border-r-[0.8px] lg:pb-0">
              <p className="px-5 font-sans text-[8px] font-semibold uppercase leading-3 tracking-[0.15em] text-mist sm:px-6">
                {c.sidebarLabel}
              </p>
              <div
                aria-label={c.sidebarLabel}
                aria-orientation="vertical"
                className="mt-4 grid md:grid-cols-2 lg:mt-5 lg:grid-cols-1"
                onKeyDown={onKeyDown}
                role="tablist"
              >
                {c.items.map((entry, i) => {
                  const isActive = i === active;

                  return (
                    <button
                      aria-controls="process-panel"
                      aria-selected={isActive}
                      className="group relative flex min-h-11 w-full items-center overflow-hidden py-2 pl-5 pr-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric sm:pl-6 sm:pr-5 lg:min-h-[45px] lg:py-0"
                      id={`process-tab-${i}`}
                      key={entry.index}
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
                          "absolute inset-0 origin-left bg-linear-to-r from-electric/10 to-electric/[0.02] transition-transform duration-500 ease-smooth motion-reduce:transition-none",
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
                        className={cn(
                          "relative w-9 shrink-0 font-sans text-[10px] font-medium tabular-nums transition-colors duration-300 sm:w-10",
                          isActive ? "text-electric" : "text-navy/35",
                        )}
                      >
                        {entry.index}
                      </span>
                      <span
                        className={cn(
                          "relative min-w-0 flex-1 break-words font-display text-[17px] font-bold uppercase leading-5 tracking-[0.2px] transition-[color,transform] duration-300 ease-smooth motion-reduce:transition-none lg:text-[16px] xl:text-[18px]",
                          isActive
                            ? "translate-x-0.5 text-navy"
                            : "text-navy/35 group-hover:text-navy/70",
                        )}
                      >
                        {entry.title}
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className={cn(
                          "relative shrink-0 text-electric transition-[opacity,transform] duration-300 ease-smooth motion-reduce:transition-none",
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-2 opacity-0",
                        )}
                        size={10}
                        strokeWidth={2.5}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail: re-keyed so the text animates in on every change */}
            <div
              aria-labelledby={`process-tab-${active}`}
              className="min-w-0 px-5 py-8 sm:px-8 sm:py-10 lg:px-7 xl:px-11"
              id="process-panel"
              role="tabpanel"
            >
              <div key={active}>
                <p
                  className="quality-text-in font-display text-[16px] font-medium leading-5 tabular-nums text-mist"
                  style={{ animationDelay: "0ms" }}
                >
                  <span className="text-electric">{item.index}</span> /{" "}
                  {pad(total)}
                </p>
                <h3
                  className="quality-text-in mt-2.5 break-words font-display text-[36px] font-bold uppercase leading-[0.92] text-navy sm:text-[44px] xl:text-[48px]"
                  style={{ animationDelay: "70ms" }}
                >
                  {item.headline.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </h3>
                <p
                  className="quality-text-in mt-2 max-w-[470px] font-sans text-[12px] leading-5 text-steel xl:mt-1 xl:text-[10px] xl:leading-4"
                  style={{ animationDelay: "140ms" }}
                >
                  {item.description}
                </p>
                {/* Points: 2 cols sm, 1 col lg (narrow middle column), Figma 278/fluid at xl */}
                <ul className="mt-5 grid border-t-[0.8px] border-navy/10 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-2 lg:grid-flow-row lg:grid-cols-1 lg:grid-rows-none xl:mt-4 xl:grid-flow-col xl:grid-cols-[278px_1fr] xl:grid-rows-2">
                  {item.points.map((point, i) => (
                    <li
                      className="quality-text-in flex min-h-9 items-center gap-2.5 py-1.5 font-sans text-[10px] leading-4 text-slate lg:text-[9px] lg:leading-3 xl:py-0 xl:text-[8px]"
                      key={point}
                      style={{ animationDelay: `${210 + i * 60}ms` }}
                    >
                      <span
                        aria-hidden="true"
                        className="size-[5px] shrink-0 bg-electric"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo: all stay mounted so the crossfade never flashes */}
            <div className="relative aspect-[16/10] overflow-hidden bg-panel sm:aspect-[16/8] lg:aspect-auto lg:min-h-0">
              {c.items.map((entry, i) => (
                <img
                  alt=""
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[900ms] ease-smooth motion-reduce:transition-none",
                    i === active
                      ? "scale-100 opacity-100"
                      : "scale-[1.06] opacity-0",
                  )}
                  decoding="async"
                  key={entry.index}
                  loading={i === 0 ? "eager" : "lazy"}
                  src={entry.image}
                />
              ))}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-navy/70 to-transparent"
              />
              <p
                className="quality-text-in absolute bottom-4 left-4 right-4 flex items-center gap-3 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-white sm:bottom-5 sm:left-[18px] xl:text-[7px]"
                key={active}
              >
                <span aria-hidden="true" className="h-0.5 w-6 shrink-0 bg-electric" />
                {item.caption}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}