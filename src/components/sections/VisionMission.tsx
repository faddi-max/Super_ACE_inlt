import { Reveal } from "@/components/animation";
import { visionMissionContent as c } from "@/content/visionMission";
import { cn } from "@/lib/cn";

export function VisionMission() {
  return (
    <section
      aria-label="Our vision and mission"
      className="relative isolate overflow-hidden bg-navy text-white"
    >
      {/* Background photo */}
      <img
        alt={c.imageAlt}
        className="absolute inset-0 -z-20 size-full object-cover"
        decoding="async"
        loading="lazy"
        src={c.image}
      />
      {/* Navy wash: denser on the left where text starts */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-navy/85 via-navy/70 to-navy/55"
      />

      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:py-[76px] xl:px-0">
        <ul className="grid md:grid-cols-2">
          {c.items.map((item, i) => (
            <li
              className={cn(
                "relative",
                i === 0
                  ? "pb-12 md:pb-0 md:pl-[34px] md:pr-14"
                  : "border-t-[0.67px] border-white/30 pt-12 md:border-t-0 md:border-l-[0.67px] md:pl-14 md:pt-0",
              )}
              key={item.number}
            >
              <Reveal delay={120 + i * 140}>
                {/* Column content: 54px inset inside the 314px-tall divider */}
                <div className="md:py-[54px]">
                  <span className="block font-display text-[16px] font-bold leading-none tabular-nums text-electric">
                    {item.number}
                  </span>

                  <h2 className="mt-5 font-display text-[32px] font-bold uppercase leading-[32px] tracking-[0.3px] sm:text-[36px] sm:leading-9">
                    {item.title}
                  </h2>

                  <p className="mt-4 max-w-[440px] font-sans text-[13px] leading-[21px] text-white/85">
                    {item.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className="mt-8 block h-0.5 w-11 bg-electric"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}