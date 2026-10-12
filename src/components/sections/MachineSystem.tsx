import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Reveal } from "@/components/animation";
import { machineSystemContent as c } from "@/content/machineSystem";
import { cn } from "@/lib/cn";
import bg from "@/assets/images/capabilities/bg.png";

const pad = (n: number) => String(n).padStart(2, "0");
const keyStep: Record<string, number> = {
  ArrowDown: 1,
  ArrowRight: 1,
  ArrowUp: -1,
  ArrowLeft: -1,
};
const delay = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

/**
 * Figma (1440 wide): panel 1397.01 × 624 · border 0.78 white @ 13%
 * menu column 264 · header 144 · rows 57.5 · pane header 143
 * register: title block to 200 · head 32 · rows 39 · note 36
 * Background (grid + ring) reuses the Capabilities section image.
 */
export function MachineSystem() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = c.categories[active];
  const gridStyle: CSSProperties = {
    gridTemplateColumns: `64px ${item.widths.map((w) => `minmax(0,${w}fr)`).join(" ")}`,
  };

  const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const step = keyStep[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (active + step + c.categories.length) % c.categories.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      aria-labelledby="machine-system-title"
      className="bg-navy bg-cover bg-top pb-14 pt-14 text-white sm:pb-16 sm:pt-16 lg:pb-[90px] lg:pt-[80px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            id="machine-system-title"
            className="font-display text-[34px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[40px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
          >
            <span className="block">
              {c.titleLead} <span className="text-electric">{c.titleAccent}</span>
            </span>
            <span className="block">{c.titleRest}</span>
          </h2>
          <p className="max-w-[640px] font-sans text-[12px] leading-[22px] text-silver">
            {c.description}
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-8 w-full max-w-[1397.01px] px-5 sm:px-8 xl:px-0">
        <Reveal delay={120}>
          <div className="grid overflow-hidden border-[0.78px] border-white/13 bg-white bg-clip-padding lg:h-[624px] lg:grid-cols-[264px_minmax(0,1fr)]">
            {/* Menu */}
            <div className="flex min-h-0 min-w-0 flex-col bg-shade text-white">
              <div className="px-5 pb-5 pt-5 lg:h-[144px] lg:px-[22px] lg:pb-0 lg:pt-4">
                <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric">
                  {c.menuEyebrow}
                </p>
                <h3 className="mt-[11px] font-display text-[29px] font-bold uppercase leading-[28px]">
                  {c.menuTitle.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-[7px] font-sans text-[8px] leading-[10px] text-mist">
                  {c.menuHint}
                </p>
              </div>

              <ul
                aria-label={c.menuEyebrow}
                aria-orientation="vertical"
                className="grid grid-cols-2 lg:flex lg:flex-col"
                onKeyDown={onKeyDown}
                role="tablist"
              >
                {c.categories.map((entry, i) => {
                  const isActive = i === active;
                  return (
                    <li
                      className="border-t border-white/10 lg:h-[57.5px]"
                      key={entry.number}
                      role="presentation"
                    >
                      <button
                        aria-controls="machine-panel"
                        aria-selected={isActive}
                        className={cn(
                          "group relative grid h-full min-h-[57.5px] w-full grid-cols-[38px_minmax(0,1fr)_12px] items-center px-4 text-left transition-colors duration-500 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric motion-reduce:transition-none lg:grid-cols-[42px_minmax(0,1fr)_12px] lg:px-[22px]",
                          isActive ? "bg-electric/10" : "hover:bg-white/5",
                        )}
                        id={`machine-tab-${i}`}
                        onClick={() => setActive(i)}
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
                            "absolute inset-y-0 left-0 w-0.5 origin-center bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                            isActive ? "scale-y-100" : "scale-y-0",
                          )}
                        />
                        <span className="font-display text-[28px] font-bold leading-none text-electric">
                          {entry.number}
                        </span>
                        <span className="min-w-0 transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
                          <span className="block truncate font-display text-[18px] font-bold uppercase leading-none">
                            {entry.label}
                          </span>
                          <span className="mt-1 block truncate font-sans text-[7px] uppercase leading-[9px] tracking-[0.1em] text-mist">
                            {entry.caption}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={cn(
                            "justify-self-end font-sans text-[11px] leading-none transition-colors duration-300",
                            isActive ? "text-electric" : "text-electric/50",
                          )}
                        >
                          +
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Register */}
            <div
              aria-labelledby={`machine-tab-${active}`}
              className="flex min-h-0 min-w-0 flex-col bg-white text-navy"
              id="machine-panel"
              key={active}
              role="tabpanel"
            >
              <div
                className="quality-text-in flex items-start justify-between gap-4 border-b border-navy/10 px-5 pb-6 pt-6 sm:px-[34px] lg:h-[143px] lg:pb-0 lg:pt-[33px]"
                style={delay(0)}
              >
                <div className="min-w-0">
                  <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric">
                    {item.stage}
                  </p>
                  <h3 className="mt-3 font-display text-[40px] font-bold uppercase leading-none sm:text-[46px] lg:text-[52px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-[8px] leading-[12px] text-steel">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-display text-[40px] font-bold leading-none text-electric lg:text-[44px]">
                    {pad(item.rows.length)}
                  </p>
                  <p className="mt-1 font-sans text-[6px] font-semibold uppercase leading-none tracking-[0.15em] text-steel">
                    {c.recordsLabel}
                  </p>
                </div>
              </div>

              <div
                className="quality-text-in flex items-end justify-between gap-4 border-b-2 border-navy px-5 pb-2 pt-[22px] sm:px-[34px] lg:h-[57px] lg:pt-0"
                style={delay(70)}
              >
                <h4 className="font-display text-[22px] font-bold uppercase leading-none">
                  {c.registerTitle}
                </h4>
                <p className="hidden font-sans text-[6px] font-semibold uppercase leading-none tracking-[0.12em] text-steel sm:block">
                  {c.registerHint}
                </p>
              </div>

              <div
                className="quality-text-in overflow-x-auto lg:overflow-visible"
                style={delay(140)}
              >
                <div className="min-w-[640px]">
                  <div
                    className="grid h-8 items-center bg-navy/[0.04] px-5 font-sans text-[6px] font-extrabold uppercase tracking-[0.15em] text-steel sm:px-[34px]"
                    style={gridStyle}
                  >
                    <span>#</span>
                    {item.columns.map((col) => (
                      <span key={col}>{col}</span>
                    ))}
                  </div>

                  {item.rows.length === 0 ? (
                    <p className="px-5 py-10 font-sans text-[11px] text-steel sm:px-[34px]">
                      {c.emptyRegister}
                    </p>
                  ) : (
                    <ul>
                      {item.rows.map((row, r) => (
                        <li
                          className="quality-text-in border-b border-navy/8"
                          key={`${item.number}-${r}`}
                          style={delay(180 + r * 40)}
                        >
                          <div
                            className="grid h-[38px] items-center px-5 transition-colors duration-300 hover:bg-electric/5 motion-reduce:transition-none sm:px-[34px]"
                            style={gridStyle}
                          >
                            <span className="font-display text-[22px] font-bold leading-none text-electric">
                              {pad(r + 1)}
                            </span>
                            {row.map((cell, k) => (
                              <span
                                className={cn(
                                  "font-sans text-[9px] leading-none",
                                  k === 0
                                    ? "font-extrabold text-navy"
                                    : "text-steel",
                                )}
                                key={k}
                              >
                                {cell}
                              </span>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <p
                className="quality-text-in mx-5 mb-5 mt-3 border-l-2 border-electric bg-navy/[0.03] px-3 py-3 font-sans text-[7px] leading-[10px] text-steel sm:mx-[34px] lg:mb-8 lg:mt-auto"
                style={delay(220)}
              >
                {c.source}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}