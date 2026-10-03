import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MaskLines, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { customSolutionsContent as c } from "@/content/customSolutions";
import { trackPointer } from "@/lib/spotlight";

export function CustomSolutions() {
  return (
    <section
      className="bg-navy bg-cover bg-top bg-no-repeat py-16 lg:pb-[93px] lg:pt-[106px]"
      style={{ backgroundImage: `url(${c.background})` }}
    >
      <div className="mx-auto grid w-full max-w-360 gap-12 px-6 lg:grid-cols-[569.5px_610.5px] lg:items-start lg:gap-0 lg:px-30">
        <Reveal className="lg:pt-4">
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>

          <Heading
            as="h2"
            className="mt-6 text-[44px] leading-[39.16px] tracking-[0.44px] text-white"
          >
            <MaskLines lines={c.title.map((text) => ({ text }))} />
          </Heading>

          <p className="mt-4 max-w-[490px] text-[15px] font-normal leading-[25.5px] text-silver">
            {c.description}
          </p>

          <Link
            className="group mt-[31px] inline-flex h-[38px] w-[202px] items-center justify-center gap-2 whitespace-nowrap rounded-[3px] bg-electric px-5 font-sans text-[10px] font-semibold uppercase leading-[14px] tracking-[0.7px] text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            to={c.cta.to}
          >
            {c.cta.label}
            <ArrowRight
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              size={12}
              strokeWidth={2.5}
            />
          </Link>
        </Reveal>

        <div className="grid border-l-[0.8px] border-t-[0.8px] border-white/14 sm:grid-cols-2 lg:h-[289px] lg:w-[610.5px] lg:grid-rows-[144.5px_144.5px]">
          {c.items.map((item, i) => (
            <Reveal
              className="motion-spotlight group flex min-h-[144.5px] flex-col border-b-[0.8px] border-r-[0.8px] border-white/14 px-7 pt-7 transition-colors duration-500 ease-out"
              delay={i * 90}
              key={item.index}
              onPointerMove={trackPointer}
            >
              <span className="font-sans text-[9px] font-extrabold leading-[15.3px] tracking-[1.08px] text-electric">
                {item.index}
              </span>
              <h3 className="mt-[9px] font-display text-[25px] font-bold uppercase leading-[22.5px] text-white transition-transform duration-500 ease-out group-hover:translate-x-1">
                {item.title}
              </h3>
              <p className="mt-1.5 max-w-[240px] font-sans text-[10px] leading-[17px] text-silver">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
