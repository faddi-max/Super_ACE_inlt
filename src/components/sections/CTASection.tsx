import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { ctaContent as c } from "@/content/cta";
import { cn } from "@/lib/cn";

export function CTASection() {
  return (
    <section
      className="flex bg-navy bg-cover bg-center bg-no-repeat py-20 lg:min-h-[591px] lg:items-center lg:py-[100px]"
      style={{ backgroundImage: `url(${c.background})` }}
    >
      <div className="mx-auto w-full max-w-360 px-6 lg:px-30">
        <Reveal>
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>
        </Reveal>

        <Reveal delay={90}>
          <Heading
            as="h2"
            className="mt-[22px] text-[52px] leading-[48px] tracking-[0.44px] text-white lg:text-[80px] lg:leading-[71px]"
          >
            {c.title.map((line) => (
              <span
                className={cn("block", line.accent && "text-electric")}
                key={line.text}
              >
                {line.text}
              </span>
            ))}
          </Heading>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-[30px] max-w-[420px] font-sans text-[11px] leading-5 text-silver/60">
            {c.description}
          </p>
        </Reveal>

        <Reveal
          className="mt-10 flex flex-wrap items-center gap-x-[19px] gap-y-4"
          delay={270}
        >
          <Link
            className="group inline-flex h-[38px] items-center justify-center gap-2 whitespace-nowrap rounded-[3px] bg-electric px-5 font-sans text-[10px] font-semibold uppercase leading-[14px] tracking-[0.7px] text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            to={c.cta.to}
          >
            {c.cta.label}
            <ArrowRight
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              size={12}
              strokeWidth={2.5}
            />
          </Link>
          <span className="font-sans text-ui-label font-semibold uppercase tracking-[0.16em] text-white/50">
            {c.tags}
          </span>
        </Reveal>
      </div>
    </section>
  );
}