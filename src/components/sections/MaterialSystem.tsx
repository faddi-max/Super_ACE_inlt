// src/components/sections/MaterialSystem.tsx
import { Reveal } from "@/components/animation";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { materialSystemContent as c } from "@/content/materialSystem";

export function MaterialSystem() {
  return (
    <Section
      aria-labelledby="material-system-title"
      className="relative isolate overflow-hidden bg-navy bg-cover bg-top pb-0 pt-12 text-white sm:pt-14 md:pt-16 lg:pt-10"
      containerClassName="max-w-none px-0"
      style={{ backgroundImage: `url(${c.background})` }}
    >
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 -z-10 h-auto w-[160px] select-none sm:-top-12 sm:w-[240px] md:w-[300px] lg:-top-16 lg:w-[420px]"
        loading="lazy"
        src={c.ring}
      />

      {/* Intro */}
      <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-20 xl:px-30">
        <Reveal>
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>
          <Heading
            as="h2"
            className="mt-6 text-[30px] leading-[1.05] text-white sm:mt-8 sm:text-[38px] sm:leading-[1.02] md:text-[44px] md:leading-[39px]"
            id="material-system-title"
          >
            {c.titleLead} <span className="text-electric">{c.titleAccent}</span>{" "}
            {c.titleRest}
          </Heading>
          <p className="mt-4 max-w-[640px] font-sans text-[12px] leading-5 text-silver sm:text-[13px] sm:leading-[22px]">
            {c.description}
          </p>
        </Reveal>
      </div>

      {/* Rows */}
      <ol className="mt-10 border-b border-white/10 sm:mt-12 lg:mt-20">
        {c.items.map((item) => (
          <li className="border-t border-white/10" key={item.number}>
            <div className="mx-auto grid w-full max-w-360 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,538px)]">
              {/* Text side */}
              <Reveal className="flex min-w-0 flex-col justify-between gap-8 px-5 py-8 sm:px-8 sm:py-10 md:py-12 lg:min-h-[403px] lg:gap-0 lg:px-20 lg:py-10 xl:px-30">
                <div className="grid grid-cols-[36px_minmax(0,1fr)] gap-x-3 sm:grid-cols-[48px_minmax(0,1fr)] lg:grid-cols-[92px_minmax(0,1fr)] lg:gap-x-0">
                  <span className="pt-1.5 font-display text-[15px] font-medium leading-none text-electric sm:pt-2 sm:text-[18px]">
                    {item.number}
                  </span>
                  <div className="min-w-0">
                    <Heading
                      as="h3"
                      className="whitespace-pre-line break-words text-[36px] font-extrabold leading-[38px] text-white sm:text-[48px] sm:leading-[46px] md:text-[52px] md:leading-[50px] lg:text-[64px] lg:leading-[58px]"
                    >
                      {item.title}
                    </Heading>
                    <p className="mt-4 max-w-[484px] font-sans text-[12px] leading-5 text-mist sm:mt-5">
                      {item.description}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2 lg:pl-[92px]">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Badge className="border-white/25 bg-white/5 px-2.5 py-1.5 text-[8px] tracking-[0.12em] text-white sm:px-3 sm:py-2">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Image */}
              <Reveal
                className="relative aspect-[4/3] border-electric sm:aspect-[16/10] md:aspect-auto md:min-h-[320px] md:border-l lg:h-[403px] lg:min-h-0"
                delay={120}
              >
                <img
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  loading="lazy"
                  src={item.image}
                />
                {/* 0deg navy 40% to 0 + 90deg navy to 0 at 38% */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-material-overlay"
                />
                <Badge className="absolute right-3 top-3 border-white/30 bg-navy/50 px-2 py-1 tracking-[0.15em] text-white backdrop-blur-sm sm:right-4 sm:top-4 sm:px-2.5 sm:py-1.5 lg:right-6 lg:top-6">
                  {c.badge} / {item.number}
                </Badge>
              </Reveal>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}