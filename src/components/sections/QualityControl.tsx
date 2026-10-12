import { useRef, useState, type KeyboardEvent } from "react";
import { ChevronUp, Plus } from "lucide-react";
import { CursorGlow, Reveal } from "@/components/animation";
import { QcDocumentation } from "@/components/sections/QcDocumentation";
import { QcGate } from "@/components/sections/QcGate";
import { qualityContent as c } from "@/content/quality";
import { cn } from "@/lib/cn";

const pad = (n: number) => String(n).padStart(2, "0");
const keyStep: Record<string, number> = { ArrowDown: 1, ArrowUp: -1 };

export function QualityControl() {
  const [active, setActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = c.items[active];

  const select = (index: number, bringCardIntoView: boolean) => {
    setActive(index);
    // Stacked layout: the card sits above the list, so bring it back into view
    const card = cardRef.current;
    if (
      bringCardIntoView &&
      card &&
      window.matchMedia("(max-width: 1023px)").matches &&
      card.getBoundingClientRect().top < 0
    ) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      card.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const step = keyStep[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (active + step + c.items.length) % c.items.length;
    select(next, false);
    rowRefs.current[next]?.focus();
  };

  return (
    <section
      aria-labelledby="quality-title"
      className="relative isolate overflow-hidden bg-white py-12 text-navy sm:py-16 lg:py-[100px]"
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-0">
        <Reveal className="space-y-3 text-center">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            id="quality-title"
            className="font-display text-[28px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[36px] lg:text-[40px] lg:leading-[40px]"
          >
            <span className="block">{c.titleLead}</span>
            <span className="block text-electric">{c.titleAccent}</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:mt-[56px] lg:grid-cols-[minmax(0,1fr)_635px] lg:gap-[30px]">
          {/* Accordion list: rows are ~54px closed, grow when open */}
          <Reveal delay={100}>
            <ul className="flex flex-col gap-2.5" onKeyDown={onKeyDown} role="list">
              {c.items.map((entry, i) => {
                const isActive = i === active;
                return (
                  <li key={entry.number}>
                   <button
  aria-controls="quality-panel"
  aria-expanded={isActive}
  className={cn(
    "group relative block w-full overflow-hidden rounded-[8px] border bg-white px-4 text-left transition-[border-color,box-shadow] duration-500 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none sm:px-5",
    isActive
      ? "border-electric shadow-[0_0_0_3px,0_8px_24px_0] shadow-electric/12"
      : "border-navy/8 shadow-[0_2px_8px_0] shadow-navy/4 hover:border-electric/40",
  )}
  id={`quality-row-${i}`}
  onClick={() => select(i, true)}
  ref={(el) => {
    rowRefs.current[i] = el;
  }}
  type="button"
>
  <span className="flex min-h-[54px] items-center gap-3 py-3">
    <span
      className={cn(
        "grid size-7 shrink-0 place-items-center rounded-full font-sans text-[8px] font-extrabold leading-none text-white transition-[background-color,transform] duration-500 ease-smooth motion-reduce:transition-none",
        isActive ? "bg-electric" : "bg-navy",
      )}
    >
      {entry.number}
    </span>
    <span className="min-w-0 flex-1">
      <span className="block font-display text-[15px] font-bold uppercase leading-[1.1] tracking-[0.2px] sm:text-[16px]">
        {entry.title}
      </span>
      <span className="mt-0.5 block font-sans text-[9px] leading-[13px] text-mist">
        {entry.description}
      </span>
    </span>
    {isActive ? (
      <ChevronUp aria-hidden="true" className="shrink-0 text-electric" size={12} />
    ) : (
      <Plus aria-hidden="true" className="shrink-0 text-mist" size={12} />
    )}
  </span>

  {/* Open detail: height animates via grid rows */}
  <span
    className={cn(
      "grid transition-[grid-template-rows,opacity] duration-500 ease-smooth motion-reduce:transition-none",
      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
    )}
  >
    <span className="overflow-hidden">
      <span className="block border-t-[0.67px] border-navy/8 pb-5 pl-10 pr-8 pt-4 font-sans text-[10px] leading-4 text-navy/60">
        {entry.detail}
      </span>
    </span>
  </span>
</button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Card: 635 wide, radius 16, navy, soft shadow */}
          <Reveal className="order-first h-full lg:order-none" delay={200}>
            <div
              aria-labelledby={`quality-row-${active}`}
              className="relative flex h-full min-h-[320px] scroll-mt-24 flex-col justify-end overflow-hidden rounded-2xl bg-navy p-5 text-white shadow-[0_20px_50px_0] shadow-navy/13 sm:min-h-[440px] sm:p-7 lg:min-h-[504px]"
              id="quality-panel"
              ref={cardRef}
              role="region"
            >
              {/* All photos stay mounted so the crossfade never flashes */}
              {c.items.map((entry, i) => (
                <img
                  alt=""
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[900ms] ease-smooth motion-reduce:transition-none",
                    i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0",
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
                  className="quality-text-in mt-3 max-w-[420px] font-sans text-[11px] leading-[18px] text-silver sm:text-[12px] sm:leading-5"
                  style={{ animationDelay: "140ms" }}
                >
                  {item.cardDetail}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <QcGate />
        <QcDocumentation />
      </div>
    </section>
  );
}