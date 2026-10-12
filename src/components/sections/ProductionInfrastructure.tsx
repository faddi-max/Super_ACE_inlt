import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CursorGlow, Reveal } from "@/components/animation";
import { productionInfrastructureContent as c } from "@/content/productionInfrastructure";


export function ProductionInfrastructure() {
  return (
    <section
      aria-labelledby="production-infrastructure-title"
      className="relative isolate overflow-hidden bg-white py-[60px] text-navy"
    >
      {/* Decorative backdrop: rings 1440 × 1043.2 + blueprint grid (10% opacity) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <img
          alt=""
          className="absolute left-1/2 top-1/2 h-[1043.2px] w-[1440px] max-w-none -translate-x-1/2 -translate-y-1/2"
          loading="lazy"
          src={c.rings}
        />
        <div className="absolute inset-0 bg-blueprint-grid opacity-10" />
      </div>
      <CursorGlow />

      <div className="mx-auto w-full max-w-[1181.2px] px-5 sm:px-8 lg:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            id="production-infrastructure-title"
            className="font-display text-[34px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[40px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
          >
            <span className="block">
              {c.titleLead} <span className="text-electric">{c.titleAccent}</span>
            </span>
            <span className="block">{c.titleRest}</span>
          </h2>
        </Reveal>

        <Reveal
          className="mt-8 grid border border-navy/12 bg-white sm:mt-10 lg:mt-[54px] lg:h-[541.8px] lg:grid-cols-[529.04fr_652.16fr]"
          delay={120}
        >
          {/* Left: infrastructure list */}
          <div className="flex min-h-0 min-w-0 flex-col">
            <p className="flex min-h-[64px] items-center border-b border-navy/10 px-6 font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.2em] text-steel sm:px-8 sm:text-[8px] lg:h-[76px] lg:px-[42px]">
              {c.panelLabel}
            </p>
            <ul className="flex flex-1 flex-col lg:grid lg:grid-rows-[106px_106px_108px_1fr]">
              {c.items.map((item, i) => (
                <li
                  className="min-h-0 border-b border-navy/10 last:border-b-0"
                  key={item.number}
                >
                  <Reveal className="h-full" delay={180 + i * 80}>
                    <article className="group relative grid h-full grid-cols-[34px_minmax(0,1fr)] gap-x-3 px-6 py-6 transition-colors duration-500 ease-smooth hover:bg-electric/5 motion-reduce:transition-none sm:px-8 lg:grid-cols-[50px_minmax(0,1fr)] lg:gap-x-0 lg:px-[42px] lg:pb-0 lg:pt-[22px]">
                      {/* Accent line sweeps down the left edge */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-electric transition-transform duration-500 ease-smooth group-hover:scale-y-100 motion-reduce:transition-none"
                      />
                      <span className="pt-1.5 font-display text-[14px] font-medium leading-none tabular-nums text-electric transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none sm:text-[16px]">
                        {item.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-[26px] font-bold uppercase leading-none text-navy transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none sm:text-[28px]">
                          {item.title}
                        </h3>
                        <p className="mt-2 font-sans text-[10px] leading-[15px] text-steel">
                          {item.description}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <li
                              className="inline-flex h-[18px] items-center border border-electric/30 bg-white px-2 font-sans text-[7px] font-bold uppercase leading-none tracking-[0.1em] text-electric transition-colors duration-300 ease-smooth hover:bg-electric hover:text-white motion-reduce:transition-none"
                              key={tag}
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual, 652.16 × 541.8, min-height 440 */}
          <div className="group/visual relative min-h-[440px] overflow-hidden border-t border-navy/10 bg-infrastructure-panel lg:min-h-0 lg:border-l lg:border-t-0">
            <span className="absolute right-5 top-5 z-10 border border-navy/10 bg-white px-2.5 py-1.5 font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.15em] text-navy sm:text-[8px] lg:right-10 lg:top-[26px]">
              {c.badge}
            </span>

            <div className="absolute inset-x-5 bottom-5 top-14 overflow-hidden sm:inset-x-8 lg:bottom-[72px] lg:left-[66px] lg:right-[60px] lg:top-[60px]">
              <img
                alt={c.visualAlt}
                className="size-full scale-100 object-cover transition-transform duration-[1200ms] ease-smooth group-hover/visual:scale-105 motion-reduce:transition-none"
                loading="lazy"
                src={c.visual}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-navy/35 via-transparent to-transparent"
              />
            </div>

            <p className="absolute bottom-5 left-5 z-10 font-display text-[32px] font-normal uppercase leading-[30px] sm:left-8 sm:text-[36px] sm:leading-[32px] lg:bottom-[26px] lg:left-7 lg:text-[42px] lg:leading-[35.7px]">
              <span className="block text-white">{c.overlay[0]}</span>
              <span className="block text-electric">{c.overlay[1]}</span>
            </p>
          </div>
        </Reveal>

        {/* CTA band: 188 tall, 26 below the panel */}
        <Reveal
          className="mt-6 grid gap-6 border border-l-2 border-electric/15 border-l-electric bg-electric/5 px-6 py-6 sm:px-8 lg:mt-[26px] lg:min-h-[188px] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:py-0 lg:pl-[30px] lg:pr-4"
          delay={200}
        >
          <div className="min-w-0">
            <p className="font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric sm:text-[8px]">
              {c.cta.eyebrow}
            </p>
            <h3 className="mt-[10px] font-display text-[28px] font-bold uppercase leading-[0.95] sm:text-[34px] lg:text-[36px] lg:leading-[36px]">
              {c.cta.title.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-2 max-w-[680px] font-sans text-[10px] leading-[17px] text-steel">
              {c.cta.description}
            </p>
          </div>

          <Link
            className="group inline-flex h-[38px] items-center justify-center gap-2 self-start whitespace-nowrap rounded-[3px] bg-electric px-5 font-sans text-[10px] font-semibold uppercase leading-[14px] tracking-[0.7px] text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none lg:self-center"
            to={c.cta.button.to}
          >
            {c.cta.button.label}
            <ArrowRight
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
              size={12}
              strokeWidth={2.5}
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}