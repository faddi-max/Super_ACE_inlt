import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/animation";
import { capabilitiesContent as c } from "@/content/capabilities";
import bg from "@/assets/images/capabilities/bg.png";

export function Capabilities() {
  return (
    <section
      aria-labelledby="capabilities-title"
      className="bg-navy bg-cover bg-top py-12 text-white sm:py-16 lg:py-[120px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            id="capabilities-title"
            className="font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
          >
            <span className="block">{c.titleLead}</span>
            <span className="block">
              {c.titleRest}{" "}
              <span className="text-electric">{c.titleAccent}</span>
            </span>
          </h2>
          <p className="max-w-[540px] font-sans text-[12px] leading-[20px] text-silver sm:text-[13px] sm:leading-[22.1px]">
            {c.description}
          </p>
        </Reveal>

        {/* Rows: 1180 x 189.67 on desktop, compact image-left rows on mobile */}
        <ul className="mt-10 border-t-[0.67px] border-white/10 sm:mt-14 lg:mt-[88px]">
          {c.items.map((item, i) => (
            <li className="border-b-[0.67px] border-white/10" key={item.number}>
              <Reveal delay={Math.min(i, 4) * 70}>
                <Link
                  className="group relative grid min-h-[88px] grid-cols-[84px_18px_minmax(0,1fr)_32px] items-center gap-x-3 py-3 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric sm:min-h-[132px] sm:grid-cols-[148px_24px_minmax(0,1fr)_40px] sm:gap-x-6 sm:py-5 lg:min-h-[189.67px] lg:grid-cols-[204px_26px_minmax(0,1fr)_40px] lg:gap-x-[42px] lg:py-6"
                  to={item.to}
                >
                  {/* Hover tint */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-electric/5 opacity-0 transition-opacity duration-500 ease-smooth motion-reduce:transition-none group-hover:opacity-100"
                  />
                  {/* Accent line sweeps along the bottom edge */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth motion-reduce:transition-none group-hover:scale-x-100"
                  />

                  {/* Image: 204 x 130 ratio held at every size */}
                  <span className="relative block aspect-[204/130] overflow-hidden bg-slate">
                    <img
                      alt=""
                      className="size-full object-cover transition-transform duration-[900ms] ease-smooth motion-reduce:transition-none group-hover:scale-110"
                      loading="lazy"
                      src={item.image}
                    />
                  </span>

                  <span className="relative font-display text-[11px] font-normal leading-none text-mist transition-colors duration-300 ease-smooth group-hover:text-electric sm:text-[13px] lg:text-[14px]">
                    {item.number}
                  </span>

                  <span className="relative block min-w-0 transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:translate-x-1.5 lg:group-hover:translate-x-2">
                    <span className="block font-display text-[16px] font-bold uppercase leading-[1.05] tracking-[0.2px] text-white sm:text-[22px] lg:text-[28px]">
                      {item.title}
                    </span>
                    <span className="mt-1 block max-w-[440px] font-sans text-[10px] leading-[15px] text-mist sm:mt-2 sm:text-[12px] sm:leading-[18px] lg:text-[13px] lg:leading-[20px]">
                      {item.description}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="relative flex size-8 items-center justify-center justify-self-end rounded-sm border border-electric/40 bg-electric/10 text-electric transition-[background-color,color,border-color] duration-300 ease-smooth motion-reduce:transition-none group-hover:border-electric group-hover:bg-electric group-hover:text-white sm:size-10"
                  >
                    <ArrowUpRight
                      className="size-3 transition-transform duration-300 ease-smooth motion-reduce:transition-none group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-3.5"
                      strokeWidth={2.5}
                    />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}