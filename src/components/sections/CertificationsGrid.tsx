import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  certificationsContent as c,
  certificationsGridItems as items,
} from "@/content/certifications";
import { gridGlowStyle } from "@/lib/sectionBackgrounds";

export function CertificationsGrid() {
  return (
    <section
      aria-labelledby="certifications-grid-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:pb-[110px] lg:pt-[72px]"
      style={{
        backgroundImage: gridGlowStyle.backgroundImage
          ?.toString()
          .split(", linear-gradient")[0],
      }}
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1141px] px-5 sm:px-8 xl:px-0">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
            {c.eyebrow}
          </Eyebrow>
          <h2
            className="mt-5 font-display text-[32px] font-bold uppercase leading-[32px] tracking-[0.3px] sm:mt-[22px] sm:text-[38px] sm:leading-[36px] xl:text-[44px] xl:leading-[39.16px] xl:tracking-[0.44px]"
            id="certifications-grid-title"
          >
            {c.titleLead} <span className="text-electric">{c.titleAccent}</span>
          </h2>
        </Reveal>

        {/* Cards: 209 x 205, 5 per row, 24px column gap, 59px row gap */}
        <ul className="mt-10 grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:mt-[56px] lg:grid-cols-5 lg:gap-y-[59px]">
          {items.map((item, i) => (
            <li className="w-full max-w-[209px]" key={item.number}>
              <Reveal delay={Math.min(i % 5, 4) * 80}>
                <article className="group flex min-h-[205px] w-full cursor-default flex-col items-center rounded-[10px] border-[0.57px] border-slate/40 bg-white px-[10px] pt-[26px] text-center transition-[transform,box-shadow,border-color] duration-500 ease-smooth hover:-translate-y-1.5 hover:border-electric/50 hover:shadow-[0_16px_36px_0] hover:shadow-electric/15 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <img
                    alt={item.imageAlt}
                    className="h-[70px] w-auto transition-transform duration-500 ease-smooth group-hover:scale-105 motion-reduce:transition-none"
                    decoding="async"
                    loading="lazy"
                    src={item.image}
                  />
                  <h3 className="mt-[22px] font-display text-[20px] font-bold uppercase leading-6 tracking-[0.2px] text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 whitespace-pre-line font-sans text-[10px] leading-4 text-mist">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}