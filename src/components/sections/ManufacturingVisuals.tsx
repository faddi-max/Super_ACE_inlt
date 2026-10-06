import { Reveal } from "@/components/animation";
import { manufacturingVisualsContent as c } from "@/content/manufacturingVisuals";

export function ManufacturingVisuals() {
  return (
    <section
      aria-labelledby="manufacturing-visuals-title"
      className="bg-navy py-14 text-white sm:py-16 lg:pb-[72px] lg:pt-16"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            className="font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
            id="manufacturing-visuals-title"
          >
            <span className="block">{c.titleLead}</span>
            <span className="block">
              {c.titleRest}{" "}
              <span className="text-electric">{c.titleAccent}</span>
            </span>
          </h2>
        </Reveal>

        {/* Strip: 5 x (240 x 430) = 1200 on desktop; swipeable row below lg */}
        <ul
          aria-label={c.listLabel}
          className="-mx-4 mt-10 flex snap-x snap-mandatory overflow-x-auto px-4 [scrollbar-width:none] sm:-mx-6 sm:mt-12 sm:px-6 lg:mx-0 lg:mt-[70px] lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          role="region"
          tabIndex={0}
        >
          {c.items.map((item, i) => (
            <li
              className="h-[400px] w-[240px] shrink-0 snap-start sm:h-[430px] lg:w-auto"
              key={item.number}
            >
              <Reveal className="h-full" delay={i * 90}>
                <article className="group relative h-full cursor-default overflow-hidden bg-panel-deep">
                  <img
                    alt={item.imageAlt}
                    className="absolute inset-0 size-full scale-100 object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105 motion-reduce:transition-none"
                    decoding="async"
                    loading="lazy"
                    src={item.image}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-navy via-navy/45 to-transparent transition-opacity duration-700 ease-smooth group-hover:opacity-90 motion-reduce:transition-none"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
                  />

                  <div className="absolute inset-x-0 bottom-0 px-5 pb-5 transition-transform duration-500 ease-smooth group-hover:-translate-y-1 motion-reduce:transition-none">
                    <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-electric lg:text-[7px]">
                      {item.number} / {item.tag}
                    </p>
                    <h3 className="mt-2 font-display text-[24px] font-bold uppercase leading-none text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-[10px] leading-[14px] text-silver/70 lg:text-[8px] lg:leading-3">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
