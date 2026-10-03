import { aboutContent as c } from "@/content/about";
import { images } from "@/assets/images";
import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

/**
 * Figma (1440 wide), section-relative:
 * collage x114 / y36 (native 1x asset, 540 wide) · text column x726, w570
 * eyebrow y≈62 · heading top y≈80 · lead top y≈170 · body top y≈240
 * feature grid top y≈376 (rows 164 / 144) · vision/mission row top y≈784,
 * divider at x714, columns padded 54.
 */
export function AboutSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-24 pt-9 text-navy">
      <CursorGlow />
      {/* soft electric glows */}
      {/* <div
        aria-hidden="true"
        className="motion-float pointer-events-none absolute left-1/2 top-77.5 -z-10 ml-17.5 hidden h-45 w-105 rounded-full bg-electric/15 blur-[70px] lg:block"
      /> */}
      {/* <div
        aria-hidden="true"
        className="motion-float pointer-events-none absolute left-1/2 top-215 -z-10 -ml-115 hidden h-50 w-205 rounded-full bg-electric/15 blur-[80px] lg:block"
        style={{ animationDelay: "-4.5s" }}
      /> */}

      <div className="mx-auto max-w-360 px-6 lg:px-28.5">
        <div className="grid gap-12 lg:grid-cols-[540px_570px] lg:gap-18">
          <Reveal className="motion-reveal--left">
            <img
              alt={c.collageAlt}
              className="block h-auto w-full max-w-135"
              src={images.about}
            />
          </Reveal>

          <div className="lg:pt-5.5">
            <Reveal delay={100}>
              <Eyebrow>{c.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={180}>
              <Heading as="h2" className="mt-2.5">
                {c.headline.map((part) => (
                  <span
                    key={part.text}
                    className={cn(part.accent && "text-electric")}
                  >
                    {part.text}
                  </span>
                ))}
              </Heading>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-2.5 text-[13px] leading-[26px] text-navy">
                {c.lead}
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-5 text-[13px] leading-6 text-slate/60">
                {c.body}
              </p>
            </Reveal>

            <div className="mt-10 grid border-y border-silver sm:grid-cols-2">
              {c.features.map((item, index) => (
                <Reveal
                  key={item.number}
                  delay={300 + index * 70}
                  className={cn(
                    "group border-silver pb-6 pt-5 transition-colors duration-300 hover:bg-electric/5 motion-reduce:transition-none",
                    index > 0 && "border-t",
                    index === 1 && "sm:border-t-0",
                    index % 2 === 1 ? "sm:border-l sm:pl-5.5" : "sm:pr-5.5",
                  )}
                >
                  <p className="font-display text-[22px] font-light leading-none text-electric transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none">
                    {item.number}
                  </p>
                  <h3 className="mt-6 font-montserrat text-[13px] font-bold uppercase leading-3.5 tracking-[0.08em] transition-colors duration-300 group-hover:text-electric motion-reduce:transition-none">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-60 text-caption leading-[18px] text-slate/60">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Vision / Mission */}
        <div className="mt-16 grid max-w-300 md:grid-cols-2 lg:mt-25">
          {c.statements.map((item, index) => (
            <Reveal
              key={item.number}
              className={cn(
                "border-silver pb-16 pt-12 md:pl-13.5",
                index === 1 && "md:border-l",
              )}
              delay={index * 120}
            >
              <p className="font-montserrat text-[11px] font-extrabold leading-none tracking-[0.1em] text-electric">
                {item.number}
              </p>
              <Heading as="h2" className="mt-8.5">
                {item.title}
              </Heading>
              <p className="mt-4 max-w-110 text-[13px] leading-6 text-slate">
                {item.description}
              </p>
              <span
                aria-hidden="true"
                className="motion-line mt-7 block h-0.5 w-10.5 bg-electric"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
