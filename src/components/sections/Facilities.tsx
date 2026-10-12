import { useRef, useState, type KeyboardEvent } from "react";
import { CursorGlow, Reveal } from "@/components/animation";
import { facilitiesContent as c } from "@/content/facilities";
import { cn } from "@/lib/cn";
import bg from "@/assets/images/concept-to-export/bg.png";

const pad = (n: number) => String(n).padStart(2, "0");
const keyStep: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };

export function Facilities() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = c.items[active];

  const select = (index: number) => {
    setActive(index);
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
    const next = (active + step + c.items.length) % c.items.length;
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      aria-labelledby="facilities-title"
      className="relative isolate overflow-hidden bg-navy bg-cover bg-top py-12 text-white sm:py-16 lg:py-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 xl:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            className="font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
            id="facilities-title"
          >
            {c.titleLead} <span className="text-electric">{c.titleAccent}</span>
          </h2>
          <p className="max-w-[420px] font-sans text-[12px] leading-5 text-silver sm:text-[13px] sm:leading-[22px]">
            {c.description}
          </p>
        </Reveal>

        {/* Tabs: swipeable row on mobile, wrapped on desktop */}
        <Reveal delay={120}>
          <div
            aria-label={c.tabsLabel}
            className="-mx-5 mt-6 flex snap-x gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 xl:mx-0 xl:flex-wrap xl:overflow-visible xl:px-0 xl:pb-0 [&::-webkit-scrollbar]:hidden"
            onKeyDown={onKeyDown}
            role="tablist"
          >
            {c.items.map((entry, i) => {
              const isActive = i === active;
              return (
                <button
                  aria-controls="facility-panel"
                  aria-selected={isActive}
                  className={cn(
                    "inline-flex h-11 shrink-0 snap-start items-center whitespace-nowrap rounded-[2px] border px-4 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.1em] transition-[background-color,border-color,color] duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:h-10 xl:h-8",
                    isActive
                      ? "border-electric bg-electric text-white"
                      : "border-white/30 bg-transparent text-white hover:border-electric hover:text-electric",
                  )}
                  id={`facility-tab-${entry.id}`}
                  key={entry.id}
                  onClick={() => select(i)}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                >
                  {entry.tab}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Panel: image 55% | details 45%. Height grows with content, never clips */}
        <Reveal
          className="mt-6 grid overflow-hidden border-[0.67px] border-white/12 lg:min-h-[420px] lg:grid-cols-[55fr_45fr]"
          delay={200}
        >
          <div
            aria-labelledby={`facility-tab-${item.id}`}
            className="relative min-h-[320px] overflow-hidden bg-navy sm:min-h-[380px] lg:min-h-[420px]"
            id="facility-panel"
            role="tabpanel"
          >
            {/* All photos stay mounted so the crossfade never flashes */}
            {c.items.map((entry, i) => (
              <img
                alt={i === active ? entry.imageAlt : ""}
                aria-hidden={i !== active}
                className={cn(
                  "absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[900ms] ease-smooth motion-reduce:transition-none",
                  i === active ? "scale-100 opacity-100" : "scale-[1.05] opacity-0",
                )}
                decoding="async"
                key={entry.id}
                loading="lazy"
                src={entry.image}
              />
            ))}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/20 to-transparent"
            />

            {/* Re-keyed so the caption animates in on every tab change */}
            <div
              className="quality-text-in absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-7 sm:pb-8"
              key={item.id}
            >
              <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric sm:text-[9px]">
                {item.captionEyebrow}
              </p>
              <p className="mt-2 whitespace-pre-line font-display text-[34px] font-bold uppercase leading-[0.92] text-white sm:text-[40px] lg:text-[44px]">
                {item.caption}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-between bg-navy/60 px-6 py-8 backdrop-blur-sm sm:px-9 lg:px-10 lg:py-9">
            <div key={item.id} className="quality-text-in">
              <p className="font-display text-[16px] font-medium leading-none tabular-nums text-electric">
                {pad(active + 1)} / {pad(c.items.length)}
              </p>
              <p className="mt-5 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.18em] text-white sm:text-[9px]">
                {item.kind}
              </p>
              <h3 className="mt-3 whitespace-pre-line font-display text-[36px] font-bold uppercase leading-[0.92] sm:text-[44px] lg:text-[48px]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[400px] font-sans text-[11px] leading-[18px] text-silver sm:text-[12px] sm:leading-5">
                {item.description}
              </p>

              <span
                aria-hidden="true"
                className="mt-6 block h-0.5 w-9 bg-electric"
              />

              <dl className="mt-5 space-y-2.5 font-sans text-[10px] leading-4">
                <div className="flex gap-4">
                  <dt className="w-[52px] shrink-0 text-[8px] font-extrabold uppercase leading-4 tracking-[0.14em] text-electric">
                    {c.detailLabels.location}
                  </dt>
                  <dd className="min-w-0 text-mist">{item.location}</dd>
                </div>
                {item.phone && (
                  <div className="flex gap-4">
                    <dt className="w-[52px] shrink-0 text-[8px] font-extrabold uppercase leading-4 tracking-[0.14em] text-electric">
                      {c.detailLabels.phone}
                    </dt>
                    <dd className="min-w-0 text-mist">
                      <a
                        className="transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                        href={item.phoneHref}
                      >
                        {item.phone}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <p className="mt-8 border-t-[0.67px] border-white/12 pt-4 font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.15em] text-mist">
              {item.footer}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}