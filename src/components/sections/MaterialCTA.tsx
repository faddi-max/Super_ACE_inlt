import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/animation";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { materialCtaContent as c } from "@/content/materialCta";

export function MaterialCTA() {
  return (
    <Section
      aria-labelledby="material-cta-title"
      className="bg-white py-12 md:py-16"
      containerClassName="max-w-[1264px]"
    >
      <Reveal>
        {/* 1200 x 336 · border 0.73px · #0D121C + 135deg electric glow */}
        <div className="relative isolate flex min-h-[336px] flex-col justify-center gap-8 overflow-hidden border-[0.73px] border-white/10 bg-cta-panel px-6 py-12 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-0">
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-cta-card-glow"
          />
          <img
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden h-[336px] w-auto max-w-none -translate-x-1/4 select-none opacity-30 lg:left-[36%] lg:block lg:translate-x-0"
            loading="lazy"
            src={c.ring}
          />

          <div className="min-w-0">
            <Heading
              as="h2"
              className="text-[40px] font-extrabold leading-[38px] text-white sm:text-[52px] sm:leading-[48px] lg:text-[64px] lg:leading-[60px]"
              id="material-cta-title"
            >
              {c.titleLines.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </Heading>
            <p className="mt-4 max-w-[380px] font-sans text-[11px] leading-5 text-silver">
              {c.description}
            </p>
          </div>

          <Link
            className="group inline-flex h-10 w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[3px] bg-electric px-6 font-sans text-[10px] font-semibold uppercase leading-[14px] tracking-[0.7px] text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:w-auto"
            to={c.cta.to}
          >
            {c.cta.label}
            <ArrowRight
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              size={12}
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}