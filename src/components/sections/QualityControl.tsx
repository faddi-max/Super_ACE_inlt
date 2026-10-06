import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CursorGlow, Reveal } from "@/components/animation";
import { qualityContent as c } from "@/content/quality";
import { cn } from "@/lib/cn";

const pad = (n: number) => String(n).padStart(2, "0");
const keyStep: Record<string, number> = {
  ArrowDown: 1,
  ArrowRight: 1,
  ArrowUp: -1,
  ArrowLeft: -1,
};

export function QualityControl() {
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = c.items[active];

  const select = (index: number, scrollCardIntoView: boolean) => {
    setActive(index);
    // Stacked layout: the card sits above the list, so bring it back into view
    const card = cardRef.current;
    if (
      scrollCardIntoView &&
      card &&
      window.matchMedia("(max-width: 1023px)").matches &&
      card.getBoundingClientRect().top < 0
    ) {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      card.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const step = keyStep[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (active + step + c.items.length) % c.items.length;
    select(next, false);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      aria-labelledby="quality-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:py-[100px]"
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-0">
        <Reveal className="space-y-3 text-center">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            id="quality-title"
            className="font-display text-[28px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[36px] lg:text-[40px]"
          >
            <span className="block">{c.titleLead}</span>
            <span className="block text-electric">{c.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:mt-[60px] lg:grid-cols-[minmax(0,1fr)_635px] lg:gap-[30px]">
          {/* List: seven rows share the 565px card height on desktop */}
          <Reveal className="lg:h-[565px]" delay={100}>
            <ul
              aria-orientation="vertical"
              className="flex flex-col gap-2.5 lg:grid lg:h-full lg:grid-rows-7"
              onKeyDown={onKeyDown}
              role="tablist"
            >
              {c.items.map((entry, i) => {
                const isActive = i === active;
                return (
                  <li className="lg:h-full" key={entry.number} role="presentation">
                    <button
                      aria-controls="quality-panel"
                      aria-selected={isActive}
                      className={cn(
                        "group relative flex min-h-[60px] w-full items-center gap-3 overflow-hidden rounded-md border px-3 py-3 text-left transition-[background-color,border-color,box-shadow,translate] duration-500 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none sm:gap-3.5 sm:px-4 lg:h-full",
                        isActive
                          ? "border-electric bg-white shadow-md shadow-electric/10"
                          : "border-silver/60 bg-silver/20 hover:translate-x-1 hover:border-electric/50 hover:bg-white motion-reduce:hover:translate-x-0",
                      )}
                      id={`quality-tab-${i}`}
                      onClick={() => select(i, true)}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      role="tab"
                      tabIndex={isActive ? 0 : -1}
                      type="button"
                    >
                      {/* Active marker */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-y-0 left-0 w-0.5 origin-center bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                          isActive ? "scale-y-100" : "scale-y-0",
                        )}
                      />
                      <span
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full bg-navy font-sans text-[9px] font-extrabold leading-none text-white transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                          isActive && "scale-110",
                        )}
                      >
                        {entry.number}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[16px] font-bold uppercase leading-[1.1] sm:text-[17px]">
                          {entry.title}
                        </span>
                        <span className="mt-0.5 block font-sans text-[9px] leading-[13px] text-mist sm:text-[10px] sm:leading-[14px]">
                          {entry.description}
                        </span>
                      </span>
                      <ChevronRight
                        aria-hidden="true"
                        className={cn(
                          "shrink-0 transition-[translate,color] duration-500 ease-smooth motion-reduce:transition-none",
                          isActive
                            ? "translate-x-1 text-electric"
                            : "text-mist group-hover:text-electric",
                        )}
                        size={14}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Card: 635 x 565, radius 16, navy, shadow 0 20 50 navy @ 13% */}
          <Reveal className="order-first lg:order-none" delay={200}>
            <div
              aria-labelledby={`quality-tab-${active}`}
              className="relative flex min-h-[320px] scroll-mt-24 flex-col justify-end overflow-hidden rounded-2xl bg-navy p-5 text-white shadow-[0_20px_50px_0] shadow-navy/13 sm:min-h-[440px] sm:p-7 lg:min-h-[565px]"
              id="quality-panel"
              ref={cardRef}
              role="tabpanel"
            >
              {/* All photos stay mounted so the crossfade never flashes */}
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
                  key={entry.number}
                  loading="lazy"
                  src={entry.image}
                />
              ))}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-navy via-navy/55 to-navy/5"
              />

              <p className="absolute left-5 top-5 flex items-center gap-2 bg-navy/60 px-2 py-1 font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.15em] text-white backdrop-blur-sm sm:left-7 sm:top-7">
                <span
                  aria-hidden="true"
                  className="size-[5px] shrink-0 rounded-full bg-electric"
                />
                <span className="tabular-nums">{pad(active + 1)}</span> /{" "}
                {pad(c.items.length)}
              </p>

              {/* Re-keyed on selection so the text animates in again */}
              <div className="relative" key={active}>
                <p
                  className="quality-text-in font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric sm:text-[9px]"
                  style={{ animationDelay: "0ms" }}
                >
                  {c.cardEyebrow}
                </p>
                <h3
                  className="quality-text-in mt-3 font-display text-[36px] font-extrabold uppercase leading-[0.9] sm:text-[44px] lg:text-[52px]"
                  style={{ animationDelay: "70ms" }}
                >
                  {item.headline[0]}
                  <span className="block text-electric">{item.headline[1]}</span>
                </h3>
                <p
                  className="quality-text-in mt-3 max-w-[420px] font-sans text-[11px] leading-[18px] text-silver sm:text-[12px] sm:leading-[20px]"
                  style={{ animationDelay: "140ms" }}
                >
                  {item.detail}
                </p>
                <div
                  className="quality-text-in mt-5"
                  style={{ animationDelay: "210ms" }}
                >
                  <Link
                    className="group/cta inline-flex h-10 items-center gap-2.5 rounded-sm bg-electric px-5 font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.07em] text-white transition-colors duration-300 ease-smooth hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                    to={c.ctaTo}
                  >
                    {item.cta}
                    <ArrowRight
                      aria-hidden="true"
                      className="transition-transform duration-300 ease-smooth group-hover/cta:translate-x-1 motion-reduce:transition-none"
                      size={12}
                      strokeWidth={2.5}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}