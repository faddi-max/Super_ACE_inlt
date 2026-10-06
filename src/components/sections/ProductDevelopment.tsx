import { Fragment, useState } from "react";
import { Reveal } from "@/components/animation";
import { productDevelopmentContent as c } from "@/content/productDevelopment";
import { cn } from "@/lib/cn";
import bg from "@/assets/images/bg.png";

export function ProductDevelopment() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="product-development-title"
      className="bg-navy bg-[length:100%_100%] bg-no-repeat py-14 text-white sm:py-16 lg:pb-[58px] lg:pt-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-[1201px] px-4 sm:px-6 lg:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            className="font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
            id="product-development-title"
          >
            <span className="block">{c.titleLead}</span>
            <span className="block">
              {c.titleRest}{" "}
              <span className="text-electric">{c.titleAccent}</span>
            </span>
          </h2>
        </Reveal>

        {/* Panel: 1201 x 690.4, 0.8px borders @ white/13, rail 364 + right 837 */}
        <Reveal
          className="mt-10 grid border-[0.8px] border-white/13 sm:mt-12 lg:mt-[70px] lg:h-[690.4px] lg:grid-cols-[364px_minmax(0,1fr)]"
          delay={120}
          onMouseLeave={() => setActive(null)}
        >
          {/* Left rail */}
          <div className="flex flex-col justify-center border-b-[0.8px] border-white/13 px-5 py-10 sm:px-8 lg:border-b-0 lg:border-r-[0.8px] lg:px-5 lg:py-0">
            <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric sm:text-[9px]">
              {c.route.eyebrow}
            </p>
            <h3 className="mt-4 whitespace-pre-line font-display text-[34px] font-bold uppercase leading-[0.95] sm:text-[40px] lg:text-[41px] lg:leading-[36px]">
              {c.route.title}
            </h3>
            <p className="mt-4 max-w-[324px] font-sans text-[11px] leading-5 text-mist sm:text-[12px] lg:text-[10px]">
              {c.route.description}
            </p>

            {/* Stepper: circles evenly spaced by flex-1 connectors; labels hang below */}
            <ol className="mt-8 flex w-full max-w-[324px] items-center pb-6 lg:mt-9">
              {c.steps.map((label, i) => {
                const reached = active !== null && i <= active;
                return (
                  <Fragment key={label}>
                    {i > 0 && (
                      <li
                        aria-hidden="true"
                        className="relative h-px flex-1 bg-white/15"
                      >
                        <span
                          className="absolute inset-0 origin-left bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none"
                          style={{ transform: `scaleX(${reached ? 1 : 0})` }}
                        />
                      </li>
                    )}
                    <li className="relative shrink-0">
                      <button
                        aria-current={i === active}
                        aria-label={`Step ${i + 1}: ${label}`}
                        className={cn(
                          "group relative grid size-6 place-items-center rounded-full border font-sans text-[8px] font-extrabold leading-none transition-[background-color,border-color,color,transform] duration-500 ease-smooth before:absolute before:-inset-3 before:content-[''] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none",
                          reached
                            ? "border-electric bg-electric text-white"
                            : "border-electric/40 bg-transparent text-electric hover:border-electric",
                          i === active && "scale-110",
                        )}
                        onBlur={() => setActive(null)}
                        onClick={() => setActive(i)}
                        onMouseEnter={() => setActive(i)}
                        type="button"
                      >
                        {String(i + 1).padStart(2, "0")}
                        <span
                          className={cn(
                            "absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.1em] transition-colors duration-300 sm:text-[8px]",
                            reached ? "text-white" : "text-mist",
                          )}
                        >
                          {label}
                        </span>
                      </button>
                    </li>
                  </Fragment>
                );
              })}
            </ol>
          </div>

          {/* Right: banner 837 x 235.8 + 2 x 2 cards */}
          <div className="grid min-w-0 lg:grid-rows-[235.8px_minmax(0,1fr)]">
            <div className="group relative h-[190px] overflow-hidden border-b-[0.8px] border-white/13 bg-cloud bg-development-banner sm:h-[220px] lg:h-[235.8px] lg:min-h-[235px]">
              <img
                alt={c.banner.imageAlt}
                className="size-full origin-right scale-100 object-contain object-right mix-blend-multiply transition-transform duration-[1400ms] ease-smooth group-hover:scale-105 motion-reduce:transition-none"
                decoding="async"
                loading="lazy"
                src={c.banner.image}
              />
              <div className="absolute bottom-3 left-3 w-max max-w-[calc(100%-1.5rem)] border-[0.8px] border-slate-edge bg-navy/90 px-3 py-2 backdrop-blur-sm sm:bottom-3.5 sm:left-6 sm:px-4 sm:py-3">
                <p className="font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric sm:text-[8px]">
                  {c.banner.label}
                </p>
                <p className="mt-1.5 font-display text-[12px] font-medium uppercase leading-[1.2] tracking-[0.06em] text-white sm:mt-2 sm:text-[14px] lg:whitespace-nowrap">
                  {c.banner.flow.join(" → ")}
                </p>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 lg:h-full lg:grid-rows-2">
              {c.items.map((item, i) => {
                const isActive = i === active;
                return (
                  <li
                    className="min-w-0 border-b-[0.8px] border-white/13 last:border-b-0 sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(odd)]:border-r-[0.8px]"
                    key={item.number}
                  >
                    <Reveal className="h-full" delay={150 + i * 90}>
                      <article
                        className="group relative flex h-full flex-col overflow-hidden px-5 pb-6 pt-5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric sm:px-[26px] sm:pt-7"
                        onBlur={() => setActive(null)}
                        onFocus={() => setActive(i)}
                        onMouseEnter={() => setActive(i)}
                        tabIndex={0}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute inset-0 bg-electric/5 transition-opacity duration-500 ease-smooth motion-reduce:transition-none",
                            isActive ? "opacity-100" : "opacity-0",
                          )}
                        />
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute inset-x-0 top-0 h-0.5 origin-left bg-electric transition-transform duration-700 ease-smooth motion-reduce:transition-none",
                            isActive ? "scale-x-100" : "scale-x-0",
                          )}
                        />

                        <div className="relative aspect-[366.5/100] w-full overflow-hidden bg-navy">
                          <img
                            alt={item.imageAlt}
                            className={cn(
                              "size-full object-cover transition-transform duration-[1200ms] ease-smooth motion-reduce:transition-none",
                              isActive ? "scale-105" : "scale-100",
                            )}
                            decoding="async"
                            loading="lazy"
                            src={item.image}
                          />
                        </div>

                        <p className="relative mt-2 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric">
                          {item.number} / {item.tag}
                        </p>
                        <h4
                          className={cn(
                            "relative mt-2 font-display text-[24px] font-medium uppercase leading-[26px] transition-transform duration-500 ease-smooth motion-reduce:transition-none sm:text-[26px]",
                            isActive && "translate-x-1",
                          )}
                        >
                          {item.title}
                        </h4>
                        <p className="relative mt-2 font-sans text-[10px] leading-4 text-mist">
                          {item.description}
                        </p>
                      </article>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}