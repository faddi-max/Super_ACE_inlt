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
    <section className="relative isolate overflow-hidden bg-white bg-manufacture-glow py-16 lg:pb-[76px] lg:pt-[62px]">
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-0">
        {/* Header */}
        <Reveal>
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>
          <Heading
            as="h2"
            className="mt-[23px] text-[44px] leading-[39.16px] tracking-[0.44px] text-navy"
          >
            <MaskLines lines={c.title} />
          </Heading>
          <p className="mt-[18px] max-w-[480px] font-sans text-[14px] leading-6 text-steel">
            {c.description}
          </p>
        </Reveal>

        {/* Info bar */}
        <Reveal
          className="mt-14 flex flex-col gap-2 border-y-[0.8px] border-navy/10 py-3 sm:h-[46px] sm:flex-row sm:items-center sm:justify-between sm:py-0"
          delay={100}
        >
          <p className="flex items-center gap-2.5 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-navy">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-electric"
            />
            {c.barLabel}
          </p>
          <p className="font-display text-[16px] font-medium uppercase leading-none tracking-[0.05em] text-mist">
            <span className="font-bold text-electric">{c.stats.highlight}</span>{" "}
            {c.stats.rest}
          </p>
        </Reveal>

        {/* Timeline: 6 equal columns, nodes centred in each */}
        <div className="relative mt-11 hidden md:block">
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
                <li key={step.index}>
                  <Reveal delay={i * 70}>
                    <button
                      aria-label={`Stage ${step.index}: ${step.title}`}
                      aria-pressed={isActive}
                      className="group flex w-full flex-col items-center px-2 text-center outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
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

                      <span className="mt-5 block font-display text-[18px] font-bold uppercase leading-6 text-navy transition-colors duration-300 ease-smooth group-hover:text-electric lg:text-[22px]">
                        {step.title}
                      </span>
                      <span className="mt-1.5 block max-w-[168px] font-sans text-[8px] leading-3 text-mist">
                        {step.summary}
                      </span>
                    </button>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Stage panel: 1200 x 406, columns 284 / fluid / 330 */}
        <Reveal className="mt-10 lg:mt-[60px]" delay={150}>
          <div className="grid border-y-[0.8px] border-navy/10 lg:min-h-[406px] lg:grid-cols-[284px_minmax(0,1fr)_330px]">
            {/* Sidebar */}
            <div className="border-b-[0.8px] border-navy/10 pb-4 pt-5 lg:border-b-0 lg:border-r-[0.8px] lg:pb-0">
              <p className="px-6 font-sans text-[8px] font-semibold uppercase leading-3 tracking-[0.15em] text-mist">
                {c.sidebarLabel}
              </p>
              <div
                aria-label={c.sidebarLabel}
                aria-orientation="vertical"
                className="mt-5"
                onKeyDown={onKeyDown}
                role="tablist"
              >
                {c.items.map((entry, i) => {
                  const isActive = i === active;

                  return (
                    <button
                      aria-controls="process-panel"
                      aria-selected={isActive}
                      className="group relative flex h-[45px] w-full items-center overflow-hidden pl-6 pr-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric"
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
                          "relative w-10 font-sans text-[10px] font-medium tabular-nums transition-colors duration-300",
                          isActive ? "text-electric" : "text-navy/35",
                        )}
                      >
                        {entry.index}
                      </span>
                      <span
                        className={cn(
                          "relative flex-1 font-display text-[18px] font-bold uppercase leading-5 tracking-[0.2px] transition-[color,transform] duration-300 ease-smooth motion-reduce:transition-none",
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
              className="px-6 py-10 lg:px-11"
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
                  className="quality-text-in mt-2.5 font-display text-[40px] font-bold uppercase leading-[0.92] text-navy sm:text-[48px]"
                  style={{ animationDelay: "70ms" }}
                >
                  {item.headline.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </h3>
                <p
                  className="quality-text-in mt-1 max-w-[470px] font-sans text-[10px] leading-4 text-steel"
                  style={{ animationDelay: "140ms" }}
                >
                  {item.description}
                </p>
                <ul className="mt-4 grid border-t-[0.8px] border-navy/10 sm:grid-flow-col sm:grid-cols-[278px_1fr] sm:grid-rows-2">
                  {item.points.map((point, i) => (
                    <li
                      className="quality-text-in flex h-9 items-center gap-2.5 font-sans text-[8px] leading-3 text-slate"
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
            <div className="relative min-h-[260px] overflow-hidden bg-panel sm:min-h-[320px] lg:min-h-0">
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
                className="quality-text-in absolute bottom-5 left-[18px] flex items-center gap-3 font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.2em] text-white"
                key={active}
              >
                <span aria-hidden="true" className="h-0.5 w-6 bg-electric" />
                {item.caption}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}