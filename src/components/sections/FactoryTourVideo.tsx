import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animation";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { factoryTourVideoContent as c } from "@/content/factoryTourVideo";

export function FactoryTourVideo() {
  return (
    <Section
      aria-labelledby="factory-video-title"
      // 1440 x 641 · padding 80 / 80 · navy + electric gradient
      className="relative isolate overflow-hidden bg-navy py-16 text-white md:py-20 lg:flex lg:min-h-[641px] lg:items-center"
      // 1224 - 2 x 32 padding = 1160 card
      containerClassName="min-w-0 max-w-[1224px]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-factory-video-band"
      />
      <Reveal delay={100}>
        {/* Card: 1160 x 440 min · 0.67px border · white @ 12% */}
        <div className="relative isolate flex min-h-[440px] items-center overflow-hidden border-[0.67px] border-white/12 px-6 py-10 sm:px-10 lg:px-12">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 size-full object-cover"
            loading="lazy"
            src={c.background}
          />
          {/* 90deg navy 96% to 38% */}
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-factory-video-overlay"
          />

          <div className="relative min-w-0">
            {/* Montserrat 800 / 9px / 100% / 1.98px (0.22em) */}
            <Eyebrow className="leading-none">{c.eyebrow}</Eyebrow>

            {/* Barlow Condensed 800 / 78px / 63.96px */}
            <Heading
              as="h2"
              className="mt-3 text-[48px] font-extrabold leading-[42px] text-white sm:text-[64px] sm:leading-[54px] lg:text-[78px] lg:leading-[63.96px]"
              id="factory-video-title"
            >
              <span className="block">{c.titleLead}</span>
              <span className="block text-electric">{c.titleAccent}</span>
            </Heading>

            <p className="mt-5 max-w-[420px] font-sans text-[12px] leading-5 text-silver">
              {c.description}
            </p>

            <Button
              className="mt-6 h-10 text-[12px] min-h-0 gap-2.5 border-white/40 px-6"
              onClick={() => {
                // TODO: open the factory tour video
              }}
              variant="outline"
            >
              {c.cta}
              <ArrowRight aria-hidden="true" size={12} strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}