import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CursorGlow, MaskLines, Reveal } from "@/components/animation";
import { chooseUsContent as c } from "@/content/chooseUs";
import { cn } from "@/lib/cn";

// Dark navy with a faint grid and an electric glow in the top-right corner
const grid = "color-mix(in srgb, white 3.5%, transparent)";
const backgroundStyle = {
  backgroundImage: [
    "radial-gradient(45% 55% at 100% 0%, color-mix(in srgb, var(--color-electric) 20%, transparent) 0%, transparent 100%)",
    "radial-gradient(35% 40% at 0% 100%, color-mix(in srgb, var(--color-electric) 7%, transparent) 0%, transparent 100%)",
    `linear-gradient(${grid} 1px, transparent 1px)`,
    `linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
  ].join(", "),
  backgroundSize: "100% 100%, 100% 100%, 51px 51px, 51px 51px",
};

export function ChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="choose-us-title"
      className="relative isolate overflow-hidden bg-navy py-14 text-white sm:py-16 lg:pb-0 lg:pt-[88px]"
      style={backgroundStyle}
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1216px] px-5 sm:px-8 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_744px] lg:gap-0">
          {/* Left: intro */}
          <Reveal>
            <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
              {c.eyebrow}
            </p>

            <h2
              className="mt-4 font-display text-[48px] font-bold uppercase leading-[0.92] tracking-[0.3px] sm:text-[60px] lg:text-[72px] lg:leading-[66px]"
              id="choose-us-title"
            >
              <MaskLines
                lines={[
                  { text: c.titleLead },
                  { text: c.titleAccent, accent: true },
                ]}
              />
            </h2>

            <p className="mt-5 max-w-[340px] font-sans text-[11px] leading-[18px] text-silver">
              {c.description}
            </p>

            <Link
              className="group mt-6 inline-flex h-[37px] items-center justify-center gap-2 whitespace-nowrap rounded-[2px] bg-electric px-5 font-sans text-[9px] font-extrabold uppercase leading-[14px] tracking-[0.7px] text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
              to={c.cta.to}
            >
              {c.cta.label}
              <ArrowRight
                aria-hidden="true"
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                size={11}
                strokeWidth={2.5}
              />
            </Link>

            <p className="mt-6 flex items-center gap-3 font-sans text-[7px] font-semibold uppercase leading-none tracking-[0.2em] text-mist">
              <span aria-hidden="true" className="h-px w-6 bg-electric" />
              {c.tag}
            </p>
          </Reveal>

          {/* Right: advantage list, hairline rows */}
          <ul className="border-t-[0.67px] border-white/10">
            {c.items.map((item, i) => {
              const isActive = i === active;
              return (
                <li className="border-b-[0.67px] border-white/10" key={item.number}>
                  <Reveal delay={100 + i * 60}>
                    <article
                      className={cn(
                        "relative flex min-h-[84px] cursor-default items-center gap-4 px-4 py-4 outline-none transition-colors duration-500 ease-smooth focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric motion-reduce:transition-none sm:gap-6 sm:px-7 lg:h-[103px] lg:min-h-0 lg:py-0",
                        isActive
                          ? "bg-linear-to-r from-electric/[0.07] to-transparent"
                          : "hover:bg-white/[0.02]",
                      )}
                      onClick={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      tabIndex={0}
                    >
                      {/* Active marker on the left edge */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-y-0 left-0 w-0.5 origin-center bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                          isActive ? "scale-y-100" : "scale-y-0",
                        )}
                      />

                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-electric font-sans text-[8px] font-extrabold leading-none text-white sm:size-9">
                        {item.number}
                      </span>

                      <span className="block min-w-0">
                        <span className="block font-display text-[22px] font-bold uppercase leading-[1.05] tracking-[0.2px] text-white sm:text-[26px] lg:text-[28px]">
                          {item.title}
                        </span>
                        <span className="mt-1 block max-w-[480px] font-sans text-[9px] leading-[14px] text-mist sm:text-[10px]">
                          {item.description.map((part, pi) => (
                            <span
                              className={cn((part as { text: string; bold?: boolean }).bold && "font-bold text-electric")}
                              key={pi}
                            >
                              {part.text}
                            </span>
                          ))}
                        </span>

                        {item.cta && (
                          <span
                            className={cn(
                              "grid transition-[grid-template-rows,opacity] duration-500 ease-smooth motion-reduce:transition-none",
                              isActive
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0",
                            )}
                          >
                            <span className="overflow-hidden">
                              <Link
                                className="group/cta mt-2 inline-flex items-center gap-1.5 font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.15em] text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
                                tabIndex={isActive ? 0 : -1}
                                to={item.cta.to}
                              >
                                {item.cta.label}
                                <ArrowRight
                                  aria-hidden="true"
                                  className="transition-transform duration-300 group-hover/cta:translate-x-1"
                                  size={8}
                                  strokeWidth={2.5}
                                />
                              </Link>
                            </span>
                          </span>
                        )}
                      </span>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom strip */}
        <Reveal
          className="mt-10 flex flex-col gap-3 border-t-[0.67px] border-white/10 pb-12 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-12 lg:pb-14"
          delay={200}
        >
          <p className="font-display text-[22px] font-bold uppercase leading-none tracking-[0.3px] text-white sm:text-[26px]">
            {c.tagline.map((part) => (
              <span
                className={cn(part.accent && "text-electric")}
                key={part.text}
              >
                {part.text}
              </span>
            ))}
          </p>
          <p className="font-sans text-[7px] font-semibold uppercase leading-none tracking-[0.2em] text-white/40">
            {c.footerNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
