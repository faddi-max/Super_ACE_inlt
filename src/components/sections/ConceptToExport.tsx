import { useState } from "react";
import { Reveal } from "@/components/animation";
import { conceptToExportContent as c } from "@/content/conceptToExport";
import { cn } from "@/lib/cn";
import bg from "@/assets/images/concept-to-export/bg.png";

const pad = (n: number) => String(n).padStart(2, "0");

export function ConceptToExport() {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="concept-title"
      className="bg-navy bg-cover bg-top py-12 text-white sm:py-16 lg:py-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 xl:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            id="concept-title"
            className="font-display text-[28px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[36px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
          >
            <span className="block">{c.titleLead}</span>
            <span className="block">
              <span className="text-electric">{c.titleAccent}</span>{" "}
              {c.titleRest}
            </span>
          </h2>
          <p className="max-w-[420px] font-sans text-[12px] leading-[20px] text-silver sm:text-[13px] sm:leading-[22.1px]">
            {c.description}
          </p>
        </Reveal>

        {/* Panel: 1180 x 366.46 on desktop, radius 16, 0.67px border, slate @ 27% */}
        <Reveal
          className="mt-10 overflow-hidden rounded-xl border-[0.67px] border-slate border-t-slate-edge bg-slate/27 backdrop-blur-sm sm:mt-12 sm:rounded-2xl lg:mt-16"
          delay={150}
        >
          <div className="flex min-h-11 items-center justify-between gap-3 border-b-[0.67px] border-slate-edge px-4 py-3 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.12em] sm:px-[18px] sm:py-0">
            <span className="text-white">{c.panelLabel}</span>
            <span className="shrink-0 text-mist">
              <span className="inline-block min-w-[2ch] tabular-nums text-electric">
                {pad(active + 1)}
              </span>{" "}
              — {c.steps.length}
              <span className="hidden sm:inline"> / {c.panelMeta}</span>
            </span>
          </div>

          <ul className="grid grid-cols-2 lg:h-[322.46px] lg:grid-cols-5 lg:grid-rows-2">
            {c.steps.map((step, i) => {
              const isActive = i === active;
              return (
                <li
                  className="min-w-0 border-b-[0.67px] border-r-[0.67px] border-slate-edge max-lg:[&:nth-child(2n)]:border-r-0 max-lg:[&:nth-child(n+9)]:border-b-0 lg:[&:nth-child(5n)]:border-r-0 lg:[&:nth-child(n+6)]:border-b-0"
                  key={step.number}
                >
                  <Reveal className="h-full" delay={Math.min(i, 5) * 45 + 100}>
                    <article
                      className={cn(
                        "group relative flex h-full min-h-[148px] cursor-default flex-col justify-between overflow-hidden px-4 pb-4 pt-5 outline-none transition-colors duration-500 ease-smooth motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric sm:min-h-[161px] sm:px-[18px] sm:pb-5 sm:pt-6",
                        isActive ? "bg-electric/10" : "bg-transparent",
                      )}
                      onClick={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      tabIndex={0}
                    >
                      {/* Accent line sweeps in on the active cell */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-0 top-0 h-0.5 origin-left bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                          isActive ? "scale-x-100" : "scale-x-0",
                        )}
                      />

                      <span
                        className={cn(
                          "block font-sans text-[9px] font-extrabold leading-none tracking-[0.1em] text-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                          isActive ? "translate-x-1" : "translate-x-0",
                        )}
                      >
                        {step.number}
                      </span>

                      <div className="min-w-0">
                        <h3 className="whitespace-pre-line break-words font-display text-[17px] font-bold uppercase leading-[18px] tracking-[0.2px] text-white sm:text-[20px] sm:leading-[20px]">
                          {step.title}
                        </h3>
                        <p
                          className={cn(
                            "mt-1.5 max-w-[180px] font-sans text-[9px] leading-[13px] text-mist transition-[opacity,transform] duration-500 ease-smooth motion-reduce:transition-none sm:mt-2 sm:leading-[14px]",
                            isActive
                              ? "translate-y-0 opacity-100"
                              : "translate-y-0.5 opacity-60",
                          )}
                        >
                          {step.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}