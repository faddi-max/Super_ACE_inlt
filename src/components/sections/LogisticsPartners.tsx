import { Check } from "lucide-react";
import { CountUp, CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { logisticsContent as c } from "@/content/logistics";
import { trackPointer } from "@/lib/spotlight";

/**
 * Measured from the 710px screenshot (x2.03 to 1440 scale):
 * container 1200 (x120-1320) · right column 690 · cards radius 16, padding 28,
 * 16px between cards · pills 38 tall, 14px gap · badge 24px · list rows 40px apart.
 */
const grid = "color-mix(in srgb, var(--color-navy) 4%, transparent)";

export function LogisticsPartners() {
  return (
    <section
      aria-labelledby="logistics-title"
      className="relative isolate overflow-hidden bg-white py-16 text-navy lg:py-20"
      style={{
        backgroundImage: [
          "radial-gradient(34% 46% at 0% 100%, color-mix(in srgb, var(--color-electric) 16%, transparent) 0%, transparent 100%)",
          `linear-gradient(${grid} 1px, transparent 1px)`,
          `linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
        ].join(", "),
        backgroundSize: "100% 100%, 64px 64px, 64px 64px",
      }}
    >
      <CursorGlow />
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_690px] lg:items-start lg:gap-[30px] lg:px-0">
        {/* Left column */}
        <div className="lg:pt-[26px]">
          <Reveal>
            <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
              {c.eyebrow}
            </Eyebrow>

            {/* Each line rises out of its own mask, staggered */}
            <h2
              className="mt-[22px] font-display text-[44px] font-bold uppercase leading-[39.16px] tracking-[0.44px] text-navy"
              id="logistics-title"
            >
              {c.titleLines.map((line, i) => (
                <span className="motion-mask" key={i}>
                  <span
                    className="motion-mask__line"
                    style={{ transitionDelay: `${120 + i * 110}ms` }}
                  >
                    {line.map((part, j) => (
                      <span
                        className={part.accent ? "text-electric" : undefined}
                        key={`${part.text}-${j}`}
                      >
                        {part.text}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-[18px] max-w-[330px] font-sans text-[13px] leading-[22px] text-steel">
              {c.description}
            </p>
          </Reveal>

          <ul className="mt-10">
            {c.points.map((point, i) => (
              <li key={point}>
                <Reveal delay={340 + i * 90}>
                  <div className="group flex h-10 cursor-default items-center gap-3.5">
                    <span
                      aria-hidden="true"
                      className="grid size-[18px] shrink-0 place-items-center rounded-full bg-electric/12 text-electric transition-[background-color,color,transform] duration-300 ease-smooth group-hover:scale-110 group-hover:bg-electric group-hover:text-white motion-reduce:transition-none"
                    >
                      <Check size={10} strokeWidth={3} />
                    </span>
                    <span className="font-sans text-[13px] leading-none text-navy transition-transform duration-300 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
                      {point}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: three bordered cards */}
        <ul className="flex flex-col gap-4">
          {c.groups.map((group, gi) => (
            <li key={group.title}>
              <Reveal delay={150 + gi * 130}>
                <article
                  className="motion-spotlight group rounded-2xl border-[0.67px] border-navy/12 bg-white/80 p-7 shadow-[0_8px_30px_0] shadow-navy/5 backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-500 ease-smooth hover:-translate-y-1 hover:border-electric/40 hover:shadow-[0_16px_40px_0] hover:shadow-electric/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  onPointerMove={trackPointer}
                >
                  <div className="relative flex items-center justify-between gap-4 border-b-[0.67px] border-navy/10 pb-[14px]">
                    <h3 className="font-display text-[22px] font-bold uppercase leading-6 tracking-[0.3px] text-navy transition-colors duration-300 ease-smooth group-hover:text-electric motion-reduce:transition-none">
                      {group.title}
                    </h3>
                    <span className="grid h-6 min-w-6 shrink-0 place-items-center rounded-md border-[0.67px] border-electric/25 bg-electric/10 px-1.5 font-sans text-[10px] font-bold leading-none text-electric">
                      <CountUp duration={1000} value={String(group.partners.length)} />
                    </span>
                  </div>

                  <ul className="relative mt-4 flex flex-wrap gap-x-3.5 gap-y-3">
                    {group.partners.map((partner, pi) => (
                      <li key={partner}>
                        <Reveal delay={300 + gi * 130 + pi * 70}>
                          <span className="inline-flex h-[38px] cursor-default items-center rounded-full border-[0.67px] border-navy/10 bg-silver/30 px-5 font-sans text-[12px] font-medium leading-none text-navy transition-[transform,border-color,color,background-color,box-shadow] duration-300 ease-smooth hover:-translate-y-0.5 hover:border-electric hover:bg-white hover:text-electric hover:shadow-md hover:shadow-electric/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                            {partner}
                          </span>
                        </Reveal>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}