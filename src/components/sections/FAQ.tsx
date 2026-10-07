import { useState } from "react";
import { Link } from "react-router-dom";
import { CursorGlow, MaskLines, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { faqContent as c, type FaqFilter } from "@/content/faq";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [filter, setFilter] = useState<FaqFilter>("all");
  const [openId, setOpenId] = useState<string | null>(c.items[0].id);

  const visible = c.items.filter(
    (item) => filter === "all" || item.category === filter,
  );

  const selectFilter = (next: FaqFilter) => {
    setFilter(next);
    const first = c.items.find(
      (item) => next === "all" || item.category === next,
    );
    setOpenId(first?.id ?? null);
  };

  return (
    <section className="relative isolate overflow-hidden bg-white bg-faq-glow py-16 lg:pb-0 lg:pt-[59px]">
      <CursorGlow />
      <div className="relative mx-auto w-full max-w-360 px-6 lg:min-h-[686px] lg:px-30">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-[94px] -top-1.5 hidden select-none font-display text-[240px] font-bold uppercase leading-[240px] text-navy/[0.024] lg:block"
        >
          {c.watermark}
        </span>

        <div className="relative grid gap-12 lg:grid-cols-[456px_minmax(0,1fr)] lg:gap-0">
          <Reveal className="lg:pt-2">
            <div className="border-b-[0.8px] border-navy/10 pb-[19px] lg:w-[311px]">
              <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
                {c.eyebrow}
              </Eyebrow>
              <Heading
                as="h2"
                className="mt-4 text-[36px] leading-[39px] tracking-[0px] text-navy sm:text-[44px] sm:leading-[53.32px]"
              >
                <MaskLines lines={c.title.map((text) => ({ text }))} />
              </Heading>
            </div>

            <div className="mt-[18px] lg:h-[445px] lg:w-[244px] lg:border-r-[0.8px] lg:border-navy/10">
              <p className="max-w-full pr-4 pt-5 font-sans text-[12px] leading-5 text-navy/55 lg:max-w-[232px] lg:pt-[21px] lg:text-[11px] lg:leading-[22px]">
                {c.description}
              </p>

              <p className="mt-[26px] font-sans text-ui-label font-bold uppercase text-navy/45">
                {c.browseLabel}
              </p>

              <nav
                aria-label={c.browseLabel}
                className="mt-6 w-full lg:w-[218px]"
              >
                <ul>
                  {c.filters.map((item) => {
                    const isActive = item.id === filter;

                    return (
                      <li
                        className="border-b-[0.8px] border-navy/10 last:border-b-0"
                        key={item.id}
                      >
                        <button
                          aria-pressed={isActive}
                          className={cn(
                            "group flex h-[38px] w-full items-center justify-between text-left font-sans text-ui-label uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric",
                            isActive
                              ? "font-bold text-navy"
                              : "font-semibold text-navy/55 hover:text-navy",
                          )}
                          onClick={() => selectFilter(item.id)}
                          type="button"
                        >
                          <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                            {item.label}
                          </span>
                          <span
                            aria-hidden="true"
                            className={cn(
                              "mr-1 text-[10px] text-electric transition-all duration-300 ease-out",
                              isActive
                                ? "scale-100 opacity-100"
                                : "scale-50 opacity-0",
                            )}
                          >
                            +
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {visible.length === 0 ? (
              <p className="pt-10 font-sans text-body text-navy/50">
                {c.empty}
              </p>
            ) : (
              <ul>
                {visible.map((item, i) => {
                  const isOpen = item.id === openId;

                  return (
                    <li
                      className="border-b-[0.8px] border-navy/10"
                      key={item.id}
                    >
                      <h3>
                        <button
                          aria-controls={`faq-panel-${item.id}`}
                          aria-expanded={isOpen}
                          className="group flex min-h-[72px] w-full items-center py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric sm:h-[79px] sm:min-h-0 sm:py-0"
                          id={`faq-trigger-${item.id}`}
                          onClick={() => setOpenId(isOpen ? null : item.id)}
                          type="button"
                        >
                          <span className="w-9 shrink-0 font-sans text-[10px] leading-none text-navy/40 sm:w-[58px] sm:text-[11px]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={cn(
                              "min-w-0 flex-1 font-sans text-[16px] font-semibold leading-5 transition-all duration-300 ease-out group-hover:translate-x-1 sm:text-[20px] sm:leading-[26px]",
                              isOpen
                                ? "text-electric"
                                : "text-navy group-hover:text-electric",
                            )}
                          >
                            {item.question}
                          </span>
                        </button>
                      </h3>

                      <div
                        aria-labelledby={`faq-trigger-${item.id}`}
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                        id={`faq-panel-${item.id}`}
                        role="region"
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-[750px] pb-5 pl-9 pt-1.5 font-sans text-[12px] leading-5 text-navy/55 sm:pb-[21px] sm:pl-[58px] sm:text-[11px]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </Reveal>
        </div>

        <Reveal
          className="mt-10 flex flex-wrap items-center justify-end gap-x-[18px] gap-y-1 lg:absolute lg:bottom-[46px] lg:right-0 lg:mt-0"
          delay={200}
        >
          <p className="font-sans text-[9px] text-navy/40">{c.footer.prompt}</p>
          <Link
            className="group font-sans text-[9px] font-bold uppercase tracking-[0.1em] text-navy transition-colors duration-300 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
            to={c.footer.to}
          >
            {c.footer.cta}{" "}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:rotate-90"
            >
              +
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
