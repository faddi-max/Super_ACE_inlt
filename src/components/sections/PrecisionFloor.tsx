import { Play } from "lucide-react";
import { Reveal } from "@/components/animation";
import { aboutFloorContent as c } from "@/content/aboutFloor";

export function PrecisionFloor() {
  return (
    <section
      aria-labelledby="floor-title"
      className="bg-navy bg-floor-band text-white"
    >
      <div className="grid lg:min-h-[578px] lg:grid-cols-[793fr_647fr]">
        {/* Photo + overlay + play button */}
        <Reveal className="relative h-full min-h-[280px] overflow-hidden sm:min-h-[400px] lg:min-h-0">
          <img
            alt={c.imageAlt}
            className="absolute inset-0 size-full object-cover"
            decoding="async"
            loading="lazy"
            src={c.image}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-floor-photo-overlay"
          />
          <button
            aria-label={c.playLabel}
            className="group absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-white bg-electric text-white transition-transform duration-300 ease-smooth hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:size-[72px]"
            onClick={() => {
              // TODO: open the factory video
            }}
            type="button"
          >
            <Play
              aria-hidden="true"
              className="ml-0.5 size-5 fill-white sm:size-6"
              strokeWidth={0}
            />
          </button>
        </Reveal>

        {/* Text + stats */}
        <div className="flex items-center px-5 py-12 sm:px-8 sm:py-14 lg:pb-16 lg:pl-[53px] lg:pr-10 lg:pt-16 xl:pr-[120px]">
          <Reveal delay={120}>
            <h2
              className="font-display text-[44px] font-extrabold uppercase leading-[0.92] tracking-[0.44px] sm:text-[56px] xl:text-[72px] xl:leading-[66px]"
              id="floor-title"
            >
              {c.titleLines.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-6 max-w-[443px] font-sans text-[12px] leading-[22px] text-silver sm:leading-[25px] lg:mt-[30px]">
              {c.description}
            </p>

            <ul className="mt-9 grid max-w-[497px] grid-cols-3 gap-2.5 lg:mt-[51px]">
              {c.stats.map((s) => (
                <li
                  className="min-w-0 border-t border-white/15 pt-4 sm:pt-[21px]"
                  key={s.number}
                >
                  <p className="font-display text-[24px] font-bold leading-[28px] text-electric sm:text-[28px]">
                    {s.number}
                  </p>
                  <p className="mt-2 font-sans text-ui-label font-semibold uppercase text-mist sm:mt-[13px]">
                    {s.label}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}