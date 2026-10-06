import { CursorGlow, MaskLines, Reveal } from "@/components/animation";
import { customizationContent as c } from "@/content/customization";

export function Customization() {
  return (
    <section
      aria-labelledby="customization-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:pb-[68px] lg:pt-[76px]"
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-0">
        <Reveal>
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            className="mt-4 font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
            id="customization-title"
          >
            <MaskLines lines={c.title.map((text) => ({ text }))} />
          </h2>
        </Reveal>

        {/* Panel: 1200 x 472 → 472 | 392 | 336 */}
        <Reveal
          className="mt-8 grid border border-navy/10 sm:mt-10 md:grid-cols-2 lg:mt-[46px] lg:h-[472px] lg:grid-cols-[minmax(0,472fr)_minmax(0,392fr)_minmax(0,336fr)]"
          delay={120}
        >
          {/* Left: real product reference */}
          <div className="group relative order-1 h-[320px] overflow-hidden bg-navy sm:h-[400px] md:h-[440px] lg:h-full">
            <img
              alt={c.reference.imageAlt}
              className="size-full scale-100 object-cover object-center transition-transform duration-[1400ms] ease-smooth group-hover:scale-105 motion-reduce:transition-none"
              decoding="async"
              loading="lazy"
              src={c.reference.image}
            />
            <div className="absolute bottom-3 left-3 w-[368px] max-w-[calc(100%-1.5rem)] border-l-2 border-electric bg-navy/95 px-4 py-2.5 transition-transform duration-500 ease-smooth group-hover:-translate-y-1 sm:bottom-4 sm:left-[22px] motion-reduce:transition-none">
              <p className="font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric sm:text-[8px]">
                {c.reference.label}
              </p>
              <p className="mt-1.5 font-display text-[17px] font-medium uppercase leading-none tracking-[0.04em] text-white sm:text-[20px]">
                {c.reference.text}
              </p>
            </div>
          </div>

          {/* Middle: customization list */}
          <ul className="order-2 bg-white px-5 py-6 sm:px-7 md:order-3 md:col-span-2 md:grid md:grid-flow-col md:grid-rows-3 md:gap-x-10 lg:order-2 lg:col-span-1 lg:block lg:pb-0 lg:pl-7 lg:pr-3.5 lg:pt-7">
            {c.items.map((item, i) => (
              <li
                className="border-b border-navy/10 last:border-b-0 md:[&:nth-child(3)]:border-b-0 lg:[&:nth-child(3)]:border-b"
                key={item.number}
              >
                <Reveal delay={150 + i * 70}>
                  <div className="group relative flex min-h-[60px] cursor-default items-center gap-4 py-3 lg:h-[60px] lg:py-0">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
                    />
                    <span className="w-8 shrink-0 font-display text-[22px] font-normal leading-none text-electric transition-transform duration-500 ease-smooth group-hover:-translate-y-0.5 lg:w-12 motion-reduce:transition-none">
                      {item.number}
                    </span>
                    <span className="block min-w-0 transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
                      <span className="block font-sans text-[10px] font-extrabold uppercase leading-[14px] tracking-[0.1em] transition-colors duration-300 group-hover:text-electric">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block font-sans text-[9px] leading-[13px] text-navy/45">
                        {item.description}
                      </span>
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          {/* Right: final output */}
          <div className="group relative order-3 h-[420px] overflow-hidden bg-navy sm:h-[440px] md:order-2 md:h-[440px] lg:order-3 lg:h-full">
            <img
              alt={c.output.imageAlt}
              className="size-full scale-100 object-cover object-top transition-transform duration-[1400ms] ease-smooth group-hover:scale-105 motion-reduce:transition-none"
              decoding="async"
              loading="lazy"
              src={c.output.image}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[70%] bg-linear-to-t from-navy via-navy/70 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-7 text-white sm:px-8">
              <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric sm:text-[9px]">
                {c.output.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-[44px] font-bold uppercase leading-[0.9] sm:text-[52px] lg:text-[56px]">
                <MaskLines lines={c.output.title.map((text) => ({ text }))} />
              </h3>
              <p className="mt-3 max-w-[240px] font-sans text-[10px] leading-4 text-silver">
                {c.output.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
