import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/animation";
import { resourcesContent as c } from "@/content/resources";
import bg from "@/assets/images/resources/bg.png";

export function ResourcesInsights() {
  return (
    <section
      aria-labelledby="resources-title"
      className="bg-navy bg-cover bg-top py-14 text-white sm:py-16 lg:min-h-[723px] lg:pb-10 lg:pt-[56px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.1em] text-electric sm:text-[9px]">
            {c.eyebrow}
          </p>
          <h2
            id="resources-title"
            className="font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[40px] lg:tracking-[0.44px]"
          >
            {c.titleLines.map((line) => (
              <span className="block" key={line.accent}>
                {line.lead} <span className="text-electric">{line.accent}</span>
              </span>
            ))}
          </h2>
          <p className="max-w-[660px] font-sans text-[13px] leading-[22px] text-silver sm:text-[14px] sm:leading-[24px] lg:text-[15px] lg:leading-[28px]">
            {c.description}
          </p>
        </Reveal>

        {/* Cards: 942 wide, 3 x 314, 295 tall, hairline dividers */}
        <ul className="mt-10 grid grid-cols-1 border border-white/10 sm:mt-12 lg:mx-auto lg:mt-[56px] lg:w-[942px] lg:max-w-full lg:grid-cols-3 lg:divide-x lg:divide-white/10 max-lg:divide-y max-lg:divide-white/10">
          {c.items.map((item, i) => (
            <li className="min-w-0" key={item.number}>
              <Reveal className="h-full" delay={120 + i * 110}>
                <Link
                  className="group relative flex h-full min-h-[280px] flex-col overflow-hidden px-5 pb-[25px] pt-8 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric sm:min-h-[295px] lg:h-[295px] lg:min-h-0"
                  to={item.to}
                >
                  {/* Photo */}
                  <img
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 size-full scale-100 object-cover transition-transform duration-[1200ms] ease-smooth motion-reduce:transition-none group-hover:scale-110"
                    decoding="async"
                    loading="lazy"
                    src={item.image}
                  />
                  {/* Dark overlay lightens on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-navy/65 transition-opacity duration-700 ease-smooth motion-reduce:transition-none group-hover:opacity-70"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/30 to-navy/50"
                  />
                  {/* Accent line sweeps along the top on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth motion-reduce:transition-none group-hover:scale-x-100"
                  />

                  {/* Eyebrow + number */}
                  <div className="relative flex items-start justify-between gap-4">
                    <p className="font-sans text-[8px] font-extrabold uppercase leading-[10px] tracking-[0.2em] text-electric">
                      {item.category}
                    </p>
                    <span className="font-display text-[16px] font-medium leading-none tabular-nums text-white/40 transition-colors duration-500 ease-smooth group-hover:text-white">
                      {item.number}
                    </span>
                  </div>

                  {/* Title + description: top-aligned so all three cards line up */}
                  <div className="relative mt-10 transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:-translate-y-1 lg:mt-[58px]">
                    <h3 className="font-display text-[24px] font-bold uppercase leading-[1.02] text-white sm:text-[26px] sm:leading-[26px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[270px] font-sans text-[10px] leading-[16px] text-silver">
                      {item.description}
                    </p>
                  </div>

                  {/* CTA pinned to the bottom */}
                  <span className="relative mt-auto flex items-center gap-2.5 pt-6">
                    <span className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-white">
                      {item.cta}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex size-[22px] items-center justify-center rounded-full border-[0.67px] border-white/30 text-white transition-[background-color,border-color] duration-300 ease-smooth motion-reduce:transition-none group-hover:border-electric group-hover:bg-electric"
                    >
                      <ArrowRight
                        className="size-[9px] transition-transform duration-300 ease-smooth motion-reduce:transition-none group-hover:translate-x-0.5"
                        strokeWidth={2.5}
                      />
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Footer row */}
        <Reveal
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:mt-9"
          delay={300}
        >
          <p className="max-w-[460px] font-sans text-[7px] font-semibold uppercase leading-[11px] tracking-[0.15em] text-white/30 sm:text-[8px]">
            {c.footerNote}
          </p>
          <Link
            className="group inline-flex items-center gap-2.5 self-start font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-white outline-none transition-colors duration-300 ease-smooth hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric sm:self-auto"
            to={c.footerCta.to}
          >
            {c.footerCta.label}
            <span
              aria-hidden="true"
              className="flex size-[22px] items-center justify-center rounded-full border-[0.67px] border-white/30 transition-[background-color,border-color] duration-300 ease-smooth motion-reduce:transition-none group-hover:border-electric group-hover:bg-electric group-hover:text-white"
            >
              <ArrowRight
                className="size-[9px] transition-transform duration-300 ease-smooth motion-reduce:transition-none group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}