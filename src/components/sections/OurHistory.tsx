import { MaskLines, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { aboutHistoryContent as c } from "@/content/aboutHistory";
import bg from "@/assets/images/process-journey/bg.png";

export function OurHistory() {
  return (
    <section
      aria-labelledby="history-title"
      className="bg-navy bg-cover bg-top py-14 text-white sm:py-16 lg:flex lg:min-h-[628px] lg:items-center lg:py-0"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* 1248 container: two equal columns, the timeline line is the centre */}
      <div className="mx-auto grid w-full max-w-[1248px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-0 xl:px-0">
        {/* Intro */}
        <Reveal className="lg:pr-10">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <Heading
            as="h2"
            className="mt-3.5 text-[44px] font-extrabold leading-[0.9] tracking-[0.44px] text-white sm:text-[56px] lg:text-[72px] lg:leading-[65px]"
            id="history-title"
          >
            <MaskLines lines={c.titleLines.map((text) => ({ text }))} />
          </Heading>
          <p className="mt-3 max-w-[520px] font-sans text-[14px] leading-6 text-silver sm:text-[15px] sm:leading-[26px]">
            {c.description}
          </p>
        </Reveal>

        {/* Timeline */}
        <ol className="relative ml-1.5 lg:ml-0">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-3 w-px bg-white/15"
          />
          {c.items.map((item, i) => (
            <li
              className="relative pb-8 pl-8 last:pb-11 sm:pb-[34px] sm:last:pb-[45px]"
              key={item.label}
            >
              {/* Outside <Reveal>: its transform would become the dot's containing block */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-3 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric shadow-[0_0_10px_2px] shadow-electric/50"
              />
              <Reveal delay={120 + i * 110}>
                <p className="font-display text-[22px] font-bold uppercase leading-6 text-electric sm:text-[24px]">
                  {item.label}
                </p>
                <h3 className="mt-3 font-display text-[24px] font-bold uppercase leading-none text-white sm:mt-[15px] sm:text-[28px]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[560px] font-sans text-[12px] leading-5 text-mist sm:mt-5 sm:text-[14px] sm:leading-[22px]">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}