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
      className="relative isolate overflow-hidden bg-navy bg-cover bg-top pb-0 pt-12 text-white md:pb-0 md:pt-10"
      containerClassName="max-w-none px-0 md:px-0"
      style={{ backgroundImage: `url(${c.background})` }}
    >
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-0 -z-10 h-auto w-[220px] select-none sm:w-[320px] lg:w-[420px]"
        loading="lazy"
        src={c.ring}
      />

      <div className="mx-auto w-full max-w-360 px-6 lg:px-30">
        <Reveal>
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>
          <Heading
            as="h2"
            className="mt-10 text-[36px] leading-[34px] text-white sm:text-[44px] sm:leading-[39px]"
            id="material-system-title"
          >
            {c.titleLead} <span className="text-electric">{c.titleAccent}</span>{" "}
            {c.titleRest}
          </Heading>
          <p className="mt-4 max-w-[700px] font-sans text-[12px] leading-5 text-silver">
            {c.description}
          </p>
        </Reveal>
      </div>

      {/* Hairlines run full width; content sits in the same 1440 frame as the intro */}
      <ol className="mt-12 border-b border-white/10 lg:mt-28">
        {c.items.map((item) => (
          <li className="border-t border-white/10" key={item.number}>
            <div className="mx-auto grid w-full max-w-360 lg:grid-cols-[minmax(0,1fr)_537.97px]">
              {/* Text side: 403.47 tall on desktop */}
              <Reveal className="flex min-w-0 flex-col justify-between gap-8 px-6 py-10 lg:h-[403.47px] lg:gap-0 lg:px-30 lg:pb-10 lg:pt-6">
                <div className="grid grid-cols-[48px_minmax(0,1fr)] gap-x-3 lg:grid-cols-[92px_minmax(0,1fr)] lg:gap-x-0">
                  <span className="pt-2 font-display text-[18px] font-medium leading-none text-electric">
                    {item.number}
                  </span>
                  <div className="min-w-0">
                    <Heading
                      as="h3"
                      className="whitespace-pre-line text-[44px] font-extrabold leading-[42px] text-white sm:text-[56px] sm:leading-[52px] lg:text-[64px] lg:leading-[58px]"
                    >
                      {item.title}
                    </Heading>
                    <p className="mt-5 max-w-[484px] font-sans text-[12px] leading-5 text-mist">
                      {item.description}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2 lg:pl-[92px]">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Badge className="border-white/25 bg-white/5 px-3 py-2 text-[8px] tracking-[0.12em] text-white">
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Image: 537.97 x 403.47 · 1px electric left border */}
              <Reveal
                className="relative min-h-[260px] border-electric lg:h-[403.47px] lg:border-l"
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
                <Badge className="absolute right-4 top-4 border-white/30 bg-navy/50 px-2.5 py-1.5 tracking-[0.15em] text-white backdrop-blur-sm lg:right-6 lg:top-6">
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