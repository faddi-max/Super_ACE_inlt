import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { aboutMaterialsContent as c } from "@/content/aboutMaterials";

export function MaterialsThatPerform() {
  return (
    <section
      aria-labelledby="materials-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:py-20"
    >
      {/* Large faint circles behind the content */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[140px] -top-[260px] -z-10 hidden size-[1320px] rounded-full bg-electric/[0.02] lg:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[120px] left-0 -z-10 hidden size-[1040px] rounded-full bg-electric/[0.04] lg:block"
      />

      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,512fr)_minmax(0,590fr)] lg:gap-12 xl:gap-[98px] xl:px-0">
        {/* Photo */}
        <Reveal className="motion-reveal--left">
          <figure className="relative h-[420px] overflow-hidden bg-navy sm:h-[520px] lg:h-[650px]">
            <img
              alt={c.imageAlt}
              className="size-full object-cover object-[30%_center]"
              decoding="async"
              loading="lazy"
              src={c.image}
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-navy/60 to-transparent"
            />
            <figcaption className="absolute bottom-5 left-5 font-display text-[18px] font-medium uppercase leading-none tracking-[0.06em] text-white sm:text-[22px] lg:left-6">
              {c.caption}
            </figcaption>
          </figure>
        </Reveal>

        {/* Text + tiles */}
        <div className="min-w-0">
          <Reveal delay={100}>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-[36px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[40px] lg:mt-[19px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]">
              <span className="block">{c.titleLines[0]}</span>
              <span className="block text-electric">{c.titleLines[1]}</span>
            </h2>
            <p className="mt-4 max-w-[560px] font-sans text-[12px] leading-[22px] text-steel sm:text-[13px] sm:leading-6">
              {c.description}
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-4 lg:mt-[46px]">
            {c.tiles.map((tile, i) => (
              <li className="min-w-0" key={tile.title}>
                <Reveal className="h-full" delay={200 + i * 80}>
                  <article className="group h-full min-h-[90px] border-l-2 border-electric bg-white px-6 pb-5 pt-6 shadow-[0_2px_14px_0] shadow-navy/5 transition-transform duration-300 ease-smooth hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <h3 className="font-display text-[24px] font-bold uppercase leading-7 text-navy transition-colors duration-300 group-hover:text-electric sm:text-[28px]">
                      {tile.title}
                    </h3>
                    <p className="mt-[7px] font-sans text-[9px] leading-[14px] text-steel">
                      {tile.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}