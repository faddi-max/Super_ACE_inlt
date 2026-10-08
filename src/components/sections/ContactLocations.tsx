import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { contactLocationsContent as c } from "@/content/contactLocations";
import { cn } from "@/lib/cn";

const keyStep: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };

const embedUrl = (query: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
const openUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export function ContactLocations() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const total = c.items.length;
  const item = c.items[active];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = keyStep[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (active + step + total) % total;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      aria-labelledby="locations-title"
      className="bg-white py-14 text-navy sm:py-16 lg:py-20"
      id="locations"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 xl:px-0">
        <Reveal>
          <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
            {c.eyebrow}
          </Eyebrow>

          <h2
            className="mt-5 font-display text-[32px] font-bold uppercase leading-[32px] tracking-[0.3px] sm:mt-[22px] sm:text-[38px] sm:leading-[36px] xl:text-[44px] xl:leading-[39.16px] xl:tracking-[0.44px]"
            id="locations-title"
          >
            {c.titleLines.map((line, i) => (
              <span className="motion-mask" key={i}>
                <span
                  className="motion-mask__line"
                  style={{ transitionDelay: `${120 + i * 110}ms` }}
                >
                  {line.map((part) => (
                    <span
                      className={part.accent ? "text-electric" : undefined}
                      key={part.text}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </h2>

          <p className="mt-4 max-w-[500px] font-sans text-[12px] leading-5 text-steel sm:text-[13px] sm:leading-[22px]">
            {c.description}
          </p>
        </Reveal>

        <Reveal className="mt-10 lg:mt-14" delay={140}>
          {/* Outline sits inside the box so the panel stays exactly 1200 wide */}
          <div className="outline outline-1 -outline-offset-1 outline-navy/10">
            {/* Tabs: a single highlight slides between the three cells */}
            <div
              aria-label={c.tabsLabel}
              className="relative grid grid-cols-3"
              onKeyDown={onKeyDown}
              role="tablist"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none"
                style={{ transform: `translateX(${active * 100}%)` }}
              />
              {c.items.map((entry, i) => {
                const isActive = i === active;
                return (
                  <button
                    aria-controls="location-panel"
                    aria-selected={isActive}
                    className={cn(
                      "group relative flex min-h-[72px] min-w-0 flex-col justify-center border-navy/10 px-3 py-3 text-left transition-colors duration-500 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric motion-reduce:transition-none sm:min-h-[96px] sm:px-5 lg:min-h-[104px] lg:px-[30px]",
                      i > 0 && "border-l",
                      isActive ? "text-white" : "text-navy hover:bg-electric/5",
                    )}
                    id={`location-tab-${entry.id}`}
                    key={entry.id}
                    onClick={() => setActive(i)}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    type="button"
                  >
                    <span
                      className={cn(
                        "block font-sans text-[8px] font-extrabold leading-none tracking-[0.1em] transition-colors duration-500 ease-smooth",
                        isActive ? "text-white" : "text-electric",
                      )}
                    >
                      {entry.number}
                    </span>
                    <span
                      className={cn(
                        "mt-2 block truncate font-display text-[20px] font-bold uppercase leading-none transition-transform duration-500 ease-smooth motion-reduce:transition-none sm:text-[26px] lg:text-[30px]",
                        isActive ? "translate-x-1" : "group-hover:translate-x-1",
                      )}
                    >
                      {entry.city}
                    </span>
                    <span
                      className={cn(
                        "mt-1.5 hidden font-sans text-[8px] leading-[11px] transition-colors duration-500 ease-smooth sm:block",
                        isActive ? "text-white/80" : "text-steel",
                      )}
                    >
                      {entry.tabMeta}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div
              aria-labelledby={`location-tab-${item.id}`}
              className="grid border-t border-navy/10 lg:h-[420px] lg:min-h-[420px] lg:grid-cols-[496px_704px]"
              id="location-panel"
              role="tabpanel"
            >
              {/* Details: re-keyed so the copy animates in on every change */}
              <div className="min-w-0 px-5 py-8 sm:px-8 lg:px-[52px] lg:py-[46px]" key={item.id}>
                <p
                  className="quality-text-in font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric sm:text-[9px]"
                  style={{ animationDelay: "0ms" }}
                >
                  {item.role}
                </p>
                <h3
                  className="quality-text-in mt-4 font-display text-[32px] font-bold uppercase leading-none text-navy sm:text-[38px]"
                  style={{ animationDelay: "70ms" }}
                >
                  {item.title}
                </h3>
                <p
                  className="quality-text-in mt-4 max-w-[380px] font-sans text-[11px] leading-[18px] text-steel sm:text-[12px]"
                  style={{ animationDelay: "140ms" }}
                >
                  {item.address}
                </p>

                <dl className="mt-7 space-y-5">
                  {item.details.map((detail, i) => (
                    <div
                      className="quality-text-in"
                      key={detail.label}
                      style={{ animationDelay: `${210 + i * 70}ms` }}
                    >
                      <dt className="font-sans text-[8px] font-extrabold uppercase leading-3 tracking-[0.14em] text-electric">
                        {detail.label}
                      </dt>
                      <dd className="mt-1.5 font-sans text-[11px] font-medium leading-4 text-navy sm:text-[12px]">
                        {detail.href ? (
                          <a
                            className="transition-colors duration-300 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                            href={detail.href}
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Map: all three stay mounted and crossfade */}
              <div className="relative h-[320px] min-w-0 overflow-hidden border-t border-navy/10 bg-white sm:h-[380px] lg:h-[420px] lg:min-h-[420px] lg:w-[704px] lg:border-l-[0.8px] lg:border-t-0">
                {c.items.map((entry, i) => {
                  const isActive = i === active;
                  return (
                    <iframe
                      aria-hidden={!isActive}
                      className={cn(
                        "absolute inset-0 size-full border-0 transition-[opacity,transform] duration-[900ms] ease-smooth motion-reduce:transition-none",
                        isActive
                          ? "scale-100 opacity-100"
                          : "pointer-events-none scale-[1.04] opacity-0",
                      )}
                      key={entry.id}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={embedUrl(entry.mapQuery)}
                      tabIndex={isActive ? 0 : -1}
                      title={`Map of ${entry.title}`}
                    />
                  );
                })}

                <a
                  className="group absolute left-4 top-4 inline-flex h-9 items-center gap-2 rounded-[2px] bg-white px-4 font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.12em] text-electric shadow-md shadow-navy/20 transition-[background-color,color,transform] duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-electric hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none sm:left-6 sm:top-5"
                  href={openUrl(item.mapQuery)}
                  rel="noreferrer"
                  target="_blank"
                >
                  {c.openInMap}
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none"
                    size={10}
                    strokeWidth={2.5}
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}