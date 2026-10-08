import { Check } from "lucide-react";
import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { technologyPartnersContent as c } from "@/content/technologyPartners";
import { cn } from "@/lib/cn";
import { trackPointer } from "@/lib/spotlight";
import bg from "@/assets/images/quality/bg.png";

export function TechnologyPartners() {
  return (
    <section
      aria-labelledby="technology-title"
      className="bg-navy bg-cover bg-center py-14 text-white sm:py-16 xl:pb-[84px] xl:pt-[90px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 xl:px-0">
        {/* Header: title left, checklist right (starts 742px in on desktop) */}
        <div className="grid gap-8 xl:grid-cols-[742px_minmax(0,1fr)] xl:gap-0">
          <Reveal>
            <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
              {c.eyebrow}
            </Eyebrow>

            {/* Each line rises out of its own mask, staggered */}
            <h2
              className="mt-5 font-display text-[32px] font-bold uppercase leading-[32px] tracking-[0.3px] sm:mt-[22px] sm:text-[38px] sm:leading-[36px] xl:text-[44px] xl:leading-[39.16px] xl:tracking-[0.44px]"
              id="technology-title"
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

            <p className="mt-4 max-w-[400px] font-sans text-[12px] leading-5 text-mist sm:text-[13px] sm:leading-[22px]">
              {c.description}
            </p>
          </Reveal>

          <ul className="xl:pt-[18px]">
            {c.points.map((point, i) => (
              <li key={point}>
                <Reveal delay={260 + i * 90}>
                  <div className="group flex h-10 cursor-default items-center gap-3.5">
                    <span
                      aria-hidden="true"
                      className="grid size-[18px] shrink-0 place-items-center rounded-full bg-silver text-navy transition-[background-color,color,transform] duration-300 ease-smooth group-hover:scale-110 group-hover:bg-electric group-hover:text-white motion-reduce:transition-none"
                    >
                      <Check size={10} strokeWidth={3} />
                    </span>
                    <span className="font-sans text-[12px] leading-none text-white transition-transform duration-300 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none sm:text-[13px]">
                      {point}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Cards: 3 x 388, gap 18, min height 188.23. Last row grows with its pills */}
        <ul className="mt-9 grid gap-[18px] sm:mt-11 sm:grid-cols-2 xl:grid-cols-3">
          {c.groups.map((group, gi) => (
            <li className="min-w-0" key={group.title}>
              <Reveal className="h-full" delay={120 + (gi % 3) * 90}>
                <article
                  className="motion-spotlight group flex h-full min-h-[188.23px] flex-col rounded-[14px] border border-slate border-t-slate-edge bg-slate/27 px-5 pb-5 pt-5 backdrop-blur-sm transition-[transform,border-color] duration-500 ease-smooth hover:-translate-y-1 hover:border-electric/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-[26px] sm:pb-[26px] sm:pt-6"
                  onPointerMove={trackPointer}
                >
                  <h3 className="relative border-b border-white/10 pb-4 font-display text-[20px] font-bold uppercase leading-6 tracking-[0.2px] text-white transition-colors duration-300 ease-smooth group-hover:text-electric motion-reduce:transition-none">
                    {group.title}
                  </h3>

                  <ul className="relative mt-5 flex flex-wrap gap-x-2.5 gap-y-3.5">
                    {group.partners.map((partner, pi) => (
                      <li key={partner}>
                        <Reveal delay={260 + (gi % 3) * 90 + pi * 60}>
                          <span
                            className={cn(
                              "inline-flex h-[38px] cursor-default items-center rounded-full border border-slate-edge bg-slate px-5 font-sans text-[12px] font-medium leading-none text-white transition-[transform,background-color,border-color,box-shadow] duration-300 ease-smooth motion-reduce:transition-none",
                              "hover:-translate-y-0.5 hover:border-electric hover:bg-electric hover:shadow-md hover:shadow-electric/20 motion-reduce:hover:translate-y-0",
                            )}
                          >
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