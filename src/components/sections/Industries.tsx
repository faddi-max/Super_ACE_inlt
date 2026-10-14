import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CursorGlow, Reveal } from "@/components/animation";
import { industriesContent as c } from "@/content/industries";

export function Industries() {
  return (
    <section
      aria-labelledby="industries-title"
      className="relative isolate overflow-hidden bg-white py-12 text-navy sm:py-16 md:py-20 lg:py-24"
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 xl:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            id="industries-title"
            className="font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
          >
            {c.titleLead}
            <span className="block">
              We <span className="text-electric">Serve</span>
            </span>
          </h2>
          <p className="max-w-[560px] font-sans text-[13px] leading-[22px] text-steel sm:text-[14px] sm:leading-[23.8px]">
            {c.description}
          </p>
        </Reveal>

        <Reveal
          className="mt-8 grid grid-cols-1 border border-navy/12 sm:mt-10 lg:mt-12 lg:min-h-[490px] lg:grid-cols-[160px_minmax(0,1fr)] xl:grid-cols-[190px_minmax(0,1fr)]"
          delay={120}
        >
          {/* Image: banner strip below lg, side strip from lg (190 x 488 at xl) */}
          <div
            aria-hidden="true"
            className="group/img relative h-28 overflow-hidden bg-navy sm:h-36 lg:h-auto"
          >
            <img
              alt=""
              className="absolute inset-0 size-full scale-105 object-cover opacity-[0.32] transition-[transform,opacity] duration-[1200ms] ease-smooth motion-reduce:transition-none group-hover/img:scale-100 group-hover/img:opacity-[0.45]"
              loading="lazy"
              src={c.image}
            />
          </div>

          {/* 1px dividers come from gap-px over the navy/12 background */}
          <ul className="grid min-w-0 grid-cols-1 gap-px bg-navy/12 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {c.items.map((item, index) => (
              <li className="min-w-0 bg-white" key={item.number}>
                <Reveal className="h-full" delay={180 + Math.min(index, 5) * 70}>
                  <article className="group relative flex h-full min-h-[200px] flex-col overflow-hidden px-5 pb-6 pt-6 transition-colors duration-500 ease-smooth hover:bg-electric/5 motion-reduce:transition-none sm:min-h-[220px] sm:px-6 sm:pt-7 lg:min-h-[244px] xl:px-8 xl:pb-7 xl:pt-8">
                    {/* Accent line sweeps in on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-500 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
                    />

                    <span className="block font-display text-[24px] font-normal leading-[24px] text-electric transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none sm:text-[28px] sm:leading-[28px]">
                      {item.number}
                    </span>

                    {/* Title scales 17px (lg, narrow cards) to 20px (xl) */}
                    <h3 className="mt-4 whitespace-pre-line break-words font-sans text-[17px] font-bold uppercase leading-[21px] tracking-[0px] text-navy transition-colors duration-300 ease-smooth group-hover:text-electric motion-reduce:transition-none sm:mt-5 sm:text-[18px] sm:leading-[22px] xl:text-[20px] xl:leading-[24px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-sans text-[11px] leading-[17px] text-steel xl:mt-3.5">
                      {item.description}
                    </p>

                    {/* Link: pinned to the bottom, 44px tap height on touch */}
                    <Link
                      className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-4 font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.12em] text-navy transition-colors duration-300 ease-smooth hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric motion-reduce:transition-none lg:min-h-0 lg:pt-5 lg:text-[8px]"
                      to={item.cta.to}
                    >
                      {item.cta.label}
                      <ArrowRight
                        aria-hidden="true"
                        className="transition-transform duration-300 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none"
                        size={10}
                        strokeWidth={2.5}
                      />
                    </Link>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}