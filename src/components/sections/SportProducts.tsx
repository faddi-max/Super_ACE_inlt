import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/animation";
import { sportProductsContent as c, type SportId } from "@/content/sportProducts";
import { cn } from "@/lib/cn";

const keyStep: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };

export function SportProducts() {
  const [activeId, setActiveId] = useState<SportId>(c.sports[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const sport = c.sports.find((s) => s.id === activeId) ?? c.sports[0];
  const items = c.products[sport.id] ?? [];

  const select = (index: number) => {
    setActiveId(c.sports[index].id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    tabRefs.current[index]?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = keyStep[event.key];
    if (!step) return;
    event.preventDefault();
    const current = c.sports.findIndex((s) => s.id === activeId);
    const next = (current + step + c.sports.length) % c.sports.length;
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      {/* Band 1: sport selector. 1440 x 305, py 80, navy + electric radial glow */}
      <section
        aria-labelledby="sport-select-title"
        className="bg-navy bg-sport-select-glow py-14 text-white sm:py-16 lg:min-h-[305px] lg:py-20"
      >
        <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-28">
          <Reveal>
            <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
              {c.selectEyebrow}
            </p>
            <h2
              className="mt-4 font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
              id="sport-select-title"
            >
              {c.selectTitleLead}{" "}
              <span className="text-electric">{c.selectTitleAccent}</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div
              aria-label={c.tabsLabel}
              className="-mx-4 mt-6 flex snap-x gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:mt-6 lg:flex-wrap lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
              onKeyDown={onKeyDown}
              role="tablist"
            >
              {c.sports.map((item, i) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    aria-controls="sport-panel"
                    aria-selected={isActive}
                    className={cn(
                      "inline-flex h-11 shrink-0 snap-start items-center whitespace-nowrap rounded-[2px] px-4 font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.1em] transition-all duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:h-10 lg:h-7 lg:px-3 lg:text-[8px]",
                      isActive
                        ? "bg-electric text-white"
                        : "bg-white text-electric hover:-translate-y-0.5 hover:bg-electric/10 motion-reduce:hover:translate-y-0",
                    )}
                    id={`sport-tab-${item.id}`}
                    key={item.id}
                    onClick={() => select(i)}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    type="button"
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Band 2: product grid for the selected sport */}
      <section
        aria-labelledby={`sport-tab-${sport.id}`}
        className="bg-white py-12 text-navy sm:py-14 lg:pb-16 lg:pt-16"
        id="sport-panel"
        role="tabpanel"
      >
        <div className="mx-auto w-full max-w-[1248px] px-4 sm:px-6 lg:px-0">
          <Reveal
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            key={`head-${sport.id}`}
          >
            <div>
              <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric">
                {sport.label}
              </p>
              <h2 className="mt-3 font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]">
                <span className="block">{sport.label}</span>
                <span className="block text-electric">{c.gridAccent}</span>
              </h2>
            </div>
            <p className="flex items-center gap-2 font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.15em] text-steel">
              <span aria-hidden="true" className="size-1 bg-electric" />
              Showing {items.length} {sport.label} products
            </p>
          </Reveal>

          {items.length === 0 ? (
            <p className="mt-12 border-y border-navy/10 py-16 text-center font-sans text-body text-steel">
              {c.emptyNote}
            </p>
          ) : (
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-3 lg:gap-[18px]">
              {items.map((item, i) => (
                <li
                  className="h-[400px] sm:h-[420px] lg:h-[460px]"
                  key={`${sport.id}-${item.number}`}
                >
                  <Reveal className="h-full" delay={60 + (i % 3) * 90}>
                    <Link
                      className="group relative block h-full overflow-hidden bg-white outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric"
                      to={item.to}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 size-full scale-100 object-cover object-top transition-transform duration-[1200ms] ease-smooth group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                        decoding="async"
                        loading="lazy"
                        src={item.image}
                      />
                      {/* Resting gradient (Figma card overlay) */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-product-card-overlay"
                      />
                      {/* Deeper wash on hover so revealed copy stays readable */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/20 opacity-0 transition-opacity duration-700 ease-smooth group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                      />
                      {/* Accent line sweeps along the bottom on hover */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                      />

                      <div className="absolute inset-x-0 bottom-0 px-6 pb-6 sm:px-7 sm:pb-7">
                        <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric sm:text-[9px]">
                          {item.number} / {item.tag}
                        </p>
                        <h3 className="mt-3 whitespace-pre-line font-display text-[30px] font-bold uppercase leading-[0.98] text-white transition-transform duration-500 ease-smooth group-hover:-translate-y-0.5 sm:text-[34px] sm:leading-[34px] motion-reduce:transition-none">
                          {item.title}
                        </h3>

                        {/* Description + CTA: revealed on hover/focus, always shown on touch */}
                        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-smooth group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] motion-reduce:transition-none [@media(hover:none)]:grid-rows-[1fr]">
                          <div className="overflow-hidden">
                            <div className="translate-y-2 pt-3 opacity-0 transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
                              <p className="max-w-[350px] font-sans text-[10px] leading-4 text-silver">
                                {item.description}
                              </p>
                              <span className="mt-3 flex items-center gap-1.5 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-white">
                                {item.cta}
                                <ArrowRight
                                  aria-hidden="true"
                                  className="transition-transform duration-300 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none"
                                  size={10}
                                  strokeWidth={2.5}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}

          <Reveal className="mt-7 flex justify-center" delay={150}>
            <Link
              className="group inline-flex h-11 w-full max-w-72 items-center justify-center gap-2 rounded-[2px] bg-electric px-6 font-sans text-button font-semibold uppercase text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:h-9 sm:w-auto sm:max-w-none lg:min-w-[185px]"
              to={c.viewAll.to}
            >
              {c.viewAll.label}
              <ArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={12}
                strokeWidth={2.5}
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}