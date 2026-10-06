import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CursorGlow, Reveal } from "@/components/animation";
import { industriesContent as c } from "@/content/industries";

export function Industries() {
  return (
    <section
      aria-labelledby="industries-title"
      className="relative isolate overflow-hidden bg-white py-16 text-navy md:py-24"
    >
        <CursorGlow />
      <div className="mx-auto w-full max-w-[1180px] px-6 lg:px-0">
        <Reveal className="space-y-4">
          <p className="font-sans text-[10px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric">
            {c.eyebrow}
          </p>
          <h2
            id="industries-title"
            className="font-display text-[44px] font-bold uppercase leading-[39.16px] tracking-[0.44px]"
          >
            {c.titleLead}
            <span className="block">
              We <span className="text-electric">Serve</span>
            </span>
          </h2>
          <p className="max-w-[560px] font-sans text-[14px] leading-[23.8px] text-steel">
            {c.description}
          </p>
        </Reveal>

        <Reveal
          className="mt-12 grid min-h-[490px] grid-cols-1 border border-navy/12 lg:grid-cols-[190px_1fr]"
          delay={120}
        >
          {/* Image strip: 190 x 488, photo at 32% opacity on navy */}
          <div
            aria-hidden="true"
            className="group/img relative hidden overflow-hidden bg-navy lg:block"
          >
            <img
              alt=""
              className="absolute inset-0 size-full scale-105 object-cover opacity-[0.32] transition-[transform,opacity] duration-[1200ms] ease-smooth motion-reduce:transition-none group-hover/img:scale-100 group-hover/img:opacity-[0.45]"
              loading="lazy"
              src={c.image}
            />
          </div>

          {/* 1px dividers come from gap-px over the navy/12 background */}
          <ul className="grid grid-cols-1 gap-px bg-navy/12 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {c.items.map((item, index) => (
              <li className="bg-white" key={item.number}>
                <Reveal className="h-full" delay={180 + index * 70}>
                  <article className="group relative flex h-full min-h-[244px] flex-col overflow-hidden px-8 pb-7 pt-8 transition-colors duration-500 ease-smooth motion-reduce:transition-none hover:bg-electric/5">
                    {/* Accent line sweeps in on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:scale-x-100"
                    />

                    {/* Number: 28px box */}
                    <span className="block font-display text-[28px] font-normal leading-[28px] text-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:translate-x-1">
                      {item.number}
                    </span>

                    {/* Title: Montserrat 700 / 20px / 24px, 20px below number */}
                    <h3 className="mt-5 whitespace-pre-line font-sans text-[20px] font-bold uppercase leading-[24px] tracking-[0px] text-navy transition-colors duration-300 ease-smooth motion-reduce:transition-none group-hover:text-electric">
                      {item.title}
                    </h3>

                    {/* Description: 14px below the title */}
                    <p className="mt-3.5 font-sans text-[11px] leading-[17px] text-steel">
                      {item.description}
                    </p>

                    {/* Link: pinned to the bottom, 20px minimum from the text */}
                    <Link
                      className="mt-auto inline-flex items-center gap-1.5 self-start pt-5 font-sans text-[8px] font-extrabold uppercase leading-[8px] tracking-[0.12em] text-navy transition-colors duration-300 ease-smooth motion-reduce:transition-none hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
                      to={item.cta.to}
                    >
                      {item.cta.label}
                      <ArrowRight
                        aria-hidden="true"
                        className="transition-transform duration-300 ease-smooth motion-reduce:transition-none group-hover:translate-x-1"
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