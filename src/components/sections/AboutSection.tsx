import { aboutContent as c } from "@/content/about";
import { images } from "@/assets/images";
import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

export function AboutSection({ isaboutpage }: { isaboutpage?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-10 text-navy sm:pb-20 lg:pb-24 lg:pt-9">
      <CursorGlow />

      <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12 xl:px-28.5">
        {/* Collage + text: stacked < lg, 2 fluid columns lg, fixed Figma columns xl+ */}
        <div className="grid items-start gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[540px_570px] xl:gap-18">
          <Reveal className="motion-reveal--left min-w-0">
            <img
              alt={c.collageAlt}
              className="mx-auto block h-auto w-full max-w-135 lg:mx-0"
              src={images.about}
            />
          </Reveal>

          <div className="min-w-0 lg:pt-5.5">
            <Reveal delay={100}>
              <Eyebrow>{c.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={180}>
              <Heading
                as="h2"
                className="mt-2.5 text-balance leading-[1.05] sm:leading-[1.02] lg:leading-[0.95] xl:leading-[0.886]"
              >
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
              <p className="mt-3 text-[13px] leading-6 text-navy sm:text-[14px] sm:leading-7 xl:mt-2.5 xl:text-[13px] xl:leading-[26px]">
                {c.lead}
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p className="mt-4 text-[13px] leading-6 text-slate/60 sm:mt-5 sm:text-[14px] xl:text-[13px]">
                {c.body}
              </p>
            </Reveal>

            {/* Features: 1 col < sm, 2 cols sm+ */}
            <div className="mt-8 grid border-y border-silver sm:mt-10 sm:grid-cols-2">
              {c.features.map((item, index) => (
                <Reveal
                  key={item.number}
                  delay={300 + index * 70}
                  className={cn(
                    "group min-w-0 border-silver pb-5 pt-5 transition-colors duration-300 hover:bg-electric/5 motion-reduce:transition-none sm:pb-6",
                    index > 0 && "border-t",
                    index === 1 && "sm:border-t-0",
                    index % 2 === 1
                      ? "sm:border-l sm:pl-5 xl:pl-5.5"
                      : "sm:pr-5 xl:pr-5.5",
                  )}
                >
                  <p className="font-display text-[22px] font-light leading-none text-electric transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none">
                    {item.number}
                  </p>
                  <h3 className="mt-5 font-montserrat text-[12px] font-bold uppercase leading-4 tracking-[0.08em] transition-colors duration-300 group-hover:text-electric motion-reduce:transition-none sm:mt-6 sm:text-[13px]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-xs text-[10px] leading-[18px] text-slate/60 sm:max-w-60 sm:text-caption">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Vision / Mission: stacked < md with a divider, side by side md+ */}
        {!isaboutpage ? (
          <div className="mt-10 grid max-w-300 md:mt-14 md:grid-cols-2 lg:mt-25">
            {c.statements.map((item, index) => (
              <Reveal
                key={item.number}
                className={cn(
                  "min-w-0 border-silver pb-10 pt-10 md:pb-16 md:pl-8 md:pt-12 xl:pl-13.5",
                  index === 1 && "border-t md:border-l md:border-t-0",
                )}
                delay={index * 120}
              >
                <p className="font-montserrat text-[11px] font-extrabold leading-none tracking-[0.1em] text-electric">
                  {item.number}
                </p>
                <Heading as="h2" className="mt-6 md:mt-8.5">
                  {item.title}
                </Heading>
                <p className="mt-4 max-w-110 text-[13px] leading-6 text-slate sm:text-[14px]">
                  {item.description}
                </p>
                <span
                  aria-hidden="true"
                  className="motion-line mt-6 block h-0.5 w-10.5 bg-electric md:mt-7"
                />
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}