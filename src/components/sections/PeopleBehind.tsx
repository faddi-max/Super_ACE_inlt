import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { peopleBehindContent as c } from "@/content/PeopleBehind";

export function PeopleBehind() {
  return (
    <section
      aria-labelledby="people-title"
      className="relative isolate overflow-hidden bg-white py-16 text-navy md:py-24"
      style={{
        backgroundImage:
          "radial-gradient(34% 40% at 100% 45%, color-mix(in srgb, var(--color-electric) 14%, transparent) 0%, transparent 100%), radial-gradient(30% 30% at 0% 0%, color-mix(in srgb, var(--color-electric) 5%, transparent) 0%, transparent 100%)",
      }}
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-0">
        <Reveal>
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>

          {/* Heading rises out of its mask */}
          <h2
            className="mt-[22px] font-display text-[44px] font-bold uppercase leading-[39.16px] tracking-[0.44px] text-navy"
            id="people-title"
          >
            <span className="motion-mask">
              <span
                className="motion-mask__line"
                style={{ transitionDelay: "120ms" }}
              >
                {c.title.map((part) => (
                  <span
                    className={part.accent ? "text-electric" : undefined}
                    key={part.text}
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            </span>
          </h2>

          <p className="mt-4 max-w-[640px] font-sans text-[13px] leading-[22.1px] text-navy/50">
            {c.description}
          </p>
        </Reveal>

        {/* Grid: 4 x 287, gap 16 */}
        <ul className="mt-[55px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((item, i) => (
            <li className="min-w-0" key={`${item.name}-${i}`}>
              <Reveal className="h-full" delay={Math.min(i % 4, 3) * 100}>
                <article
                  className="group relative h-[356px] w-full overflow-hidden bg-navy outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                  tabIndex={0}
                >
                  <img
                    alt=""
                    className="absolute inset-0 size-full scale-100 object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                    decoding="async"
                    loading="lazy"
                    src={item.image}
                  />
                  {/* Spec overlay: electric tint (135deg) + 30% dark layer */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, color-mix(in srgb, var(--color-electric) 8%, transparent) 0%, transparent 35%), linear-gradient(0deg, color-mix(in srgb, var(--color-navy) 30%, transparent), color-mix(in srgb, var(--color-navy) 30%, transparent))",
                    }}
                  />
                  {/* Text readability gradient, always on, deepens on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/35 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-navy via-navy/40 to-transparent opacity-0 transition-opacity duration-500 ease-smooth group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                  />
                  {/* Accent line sweeps along the top on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                  />

                  {/* Text block starts at a fixed offset so every role lines up */}
                  <div className="absolute inset-x-0 top-[224px] px-[26px] transition-transform duration-500 ease-smooth group-hover:-translate-y-1 motion-reduce:transition-none">
                    <p className="font-sans text-[10px] font-medium uppercase leading-[14px] tracking-[0.14em] text-silver transition-colors duration-300 ease-smooth group-hover:text-white motion-reduce:transition-none">
                      {item.role}
                    </p>
                    <h3 className="mt-[11px] font-display text-[24px] font-bold uppercase leading-6 text-white transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 max-w-[196px] font-sans text-[9px] leading-[14px] text-silver">
                      {item.description}
                    </p>
                    <span className="mt-5 block h-0.5 w-7 bg-electric transition-[width] duration-500 ease-smooth group-hover:w-12 group-focus-visible:w-12 motion-reduce:transition-none" />
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