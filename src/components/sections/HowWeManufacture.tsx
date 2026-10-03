import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { processContent as c } from "@/content/process";

export function HowWeManufacture() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16">
      <CursorGlow />
      <div className="mx-auto w-full max-w-360 px-6 lg:px-30">
        <Reveal>
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>
          <Heading
            as="h2"
            className="mt-[23px] text-[44px] leading-[39.16px] tracking-[0.44px] text-navy"
          >
            {c.title.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </Heading>
        </Reveal>

        <div className="mt-11 grid max-w-295 border-l-[0.8px] border-t-[0.8px] border-navy/12 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[220px_220px]">
          {c.items.map((item, i) => (
            <Reveal
              className="border-b-[0.8px] border-r-[0.8px] border-navy/12"
              delay={(i % 3) * 90}
              key={item.index}
            >
              <Link
                className="group relative block h-[220px] min-h-[220px] overflow-hidden p-[27px] transition-colors duration-500 ease-out hover:bg-electric/[0.04] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric"
                to={item.to}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-[30px] h-[140px] w-[150px] object-contain object-right opacity-40 transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:opacity-60"
                  src={item.image}
                />

                <div className="relative pt-[17px]">
                  <span className="block font-display text-[28px] font-medium leading-7 text-electric">
                    {item.index}
                  </span>
                  <h3 className="mt-[22px] font-display text-[28px] font-bold uppercase leading-7 text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-[7px] max-w-[210px] font-sans text-[10px] leading-[17px] text-navy/60">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute right-[30px] top-9 text-navy/40 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric"
                  size={10}
                  strokeWidth={2}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
