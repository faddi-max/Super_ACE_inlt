import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { logisticsNetworkContent as c } from "@/content/logisticsNetwork";

/** Illustration drawn in SVG: globe, plane, route arcs, ship and truck */
function LogisticsIllustration() {
  return (
    <svg
      aria-label="Illustration of air, sea and road freight around a globe"
      className="size-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      viewBox="0 0 600 322"
    >
      <defs>
        <radialGradient cx="50%" cy="45%" id="lg-bg" r="75%">
          <stop offset="0" stopColor="#10264A" />
          <stop offset="1" stopColor="#070C18" />
        </radialGradient>
        <radialGradient cx="38%" cy="32%" id="lg-globe" r="80%">
          <stop offset="0" stopColor="#2A4F8A" />
          <stop offset="1" stopColor="#0C1B3A" />
        </radialGradient>
      </defs>

      <rect fill="url(#lg-bg)" height="322" width="600" />

      {/* Globe */}
      <circle cx="300" cy="150" fill="url(#lg-globe)" r="92" />
      <circle cx="300" cy="150" fill="none" r="92" stroke="#3B82F6" strokeOpacity=".3" />
      <g fill="#5E6E8C" fillOpacity=".75">
        <path d="M250 105l22-12 18 6 8 16-10 14-20 4-14-10z" />
        <path d="M330 118l20-6 14 10-4 18-16 6-12-12z" />
        <path d="M286 170l18-4 10 14-6 18-16 4-8-16z" />
        <path d="M352 160l14-2 6 12-10 8-10-8z" />
        <path d="M244 150l10-4 6 10-8 8-8-6z" />
      </g>

      {/* Dotted routes */}
      <g
        fill="none"
        stroke="#4C8DFF"
        strokeDasharray="2 5"
        strokeLinecap="round"
        strokeOpacity=".75"
      >
        <path d="M40 245C120 90 330 40 570 90" />
        <path d="M40 245C200 300 420 270 570 90" />
      </g>
      <circle cx="40" cy="245" fill="#0B0F1A" r="4" stroke="#4C8DFF" strokeWidth="2" />
      <circle cx="570" cy="90" fill="#0B0F1A" r="4" stroke="#4C8DFF" strokeWidth="2" />

      {/* Plane */}
      <g transform="translate(318 84) rotate(-16)">
        <path d="M-4 -1L8 -18H14L8 -1Z" fill="#AFC0DA" />
        <path d="M-34 0Q0 -5 36 -2Q44 0 36 3Q0 6 -34 3Z" fill="#E8EEF8" />
        <path d="M-34 0L-40 -12H-32L-24 0Z" fill="#E8EEF8" />
        <path d="M-6 2L14 24H22L10 2Z" fill="#C9D6EA" />
      </g>

      {/* Ship, left */}
      <path d="M78 232H250L236 252H92Z" fill="#1A2744" />
      <rect fill="#3B82F6" height="24" rx="1.5" width="28" x="96" y="208" />
      <rect fill="#F2A63B" height="24" rx="1.5" width="28" x="126" y="208" />
      <rect fill="#E5565A" height="24" rx="1.5" width="28" x="156" y="208" />
      <rect fill="#3B82F6" height="14" rx="1.5" width="28" x="186" y="218" />

      {/* Dock + truck, right */}
      <path d="M385 240H515L507 254H393Z" fill="#1A2744" />
      <rect fill="#E5565A" height="24" rx="1.5" width="26" x="398" y="216" />
      <rect fill="#F2A63B" height="38" rx="1.5" width="26" x="428" y="202" />
      <rect fill="#3B82F6" height="24" rx="1.5" width="26" x="458" y="216" />
      <rect fill="#E8EEF8" height="24" rx="3" width="48" x="508" y="224" />
      <rect fill="#C9D6EA" height="18" rx="3" width="20" x="558" y="230" />
      <circle cx="522" cy="250" fill="#0B0F1A" r="5" stroke="#E8EEF8" strokeWidth="1.5" />
      <circle cx="566" cy="250" fill="#0B0F1A" r="5" stroke="#E8EEF8" strokeWidth="1.5" />
      <path d="M60 254H585" stroke="#4C8DFF" strokeOpacity=".25" />
    </svg>
  );
}

export function LogisticsNetwork() {
  const s = c.shipping;

  return (
    <>
      {/* White intro band */}
      <section
        aria-labelledby="logistics-network-title"
        className="bg-white px-5 py-12 text-navy sm:px-8 sm:py-14"
      >
        <div className="mx-auto w-full max-w-[1144px]">
          <Reveal>
            <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
              {c.intro.eyebrow}
            </Eyebrow>
            <h2
              className="mt-5 font-display text-[36px] font-bold uppercase leading-[34px] tracking-[0.3px] sm:mt-[22px] sm:text-[44px] sm:leading-[39px] sm:tracking-[0.44px]"
              id="logistics-network-title"
            >
              {c.intro.titleLines.map((line, i) => (
                <span className="block" key={i}>
                  {line.map((part) => (
                    <span
                      className={"accent" in part && part.accent ? "text-electric" : undefined}
                      key={part.text}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h2>
            <p className="mt-4 max-w-[500px] font-sans text-[12px] leading-5 text-steel sm:text-[13px] sm:leading-[22px]">
              {c.intro.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Dark network section */}
      <section
        aria-label="Logistics network"
        className="relative isolate overflow-hidden bg-navy px-5 pb-14 pt-14 text-white sm:px-8 lg:pb-[70px] lg:pt-[70px]"
        style={{
          backgroundImage:
            "radial-gradient(70% 55% at 0% 0%, color-mix(in srgb, var(--color-electric) 24%, var(--color-navy)) 0%, transparent 100%), radial-gradient(45% 40% at 100% 100%, color-mix(in srgb, var(--color-shade) 80%, transparent) 0%, transparent 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-[1144px]">
          {/* Partner grid: hairline borders collapse into single 1px lines */}
          <Reveal>
            <div className="pl-px pt-px">
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                {c.partners.map((p, i) =>
                  p === null ? (
                    <li aria-hidden="true" className="hidden lg:block" key={`gap-${i}`} />
                  ) : (
                    <li className="-ml-px -mt-px min-w-0" key={p.text + i}>
                      <div className="flex h-[112px] cursor-default flex-col items-center justify-center gap-1.5 border border-white/10 bg-white/[0.02] px-3 text-center transition-colors duration-300 ease-smooth hover:bg-electric/10 motion-reduce:transition-none">
                        <p
                          className={`font-sans text-[16px] font-extrabold leading-none tracking-[-0.01em] ${p.italic ? "italic" : ""}`}
                          style={{ color: p.color }}
                        >
                          {p.text}
                          {p.accentText && (
                            <span style={{ color: p.accentColor }}>{p.accentText}</span>
                          )}
                        </p>
                        {p.sub && (
                          <p
                            className="font-sans text-[6.5px] font-semibold uppercase leading-none tracking-[0.14em] opacity-75"
                            style={{ color: p.subColor ?? p.color }}
                          >
                            {p.sub}
                          </p>
                        )}
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>

          {/* Shipping support */}
          <div className="mt-14 grid items-center gap-10 lg:mt-[100px] lg:grid-cols-[minmax(0,1fr)_600px] lg:gap-[40px]">
            <Reveal>
              <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em]">
                {s.eyebrow}
              </Eyebrow>
              <h2 className="mt-5 font-display text-[36px] font-bold uppercase leading-[34px] tracking-[0.3px] sm:text-[44px] sm:leading-[39px] sm:tracking-[0.44px]">
                {s.titleLines.map((line, i) => (
                  <span className="block" key={i}>
                    {line.map((part) => (
                      <span
                        className={"accent" in part && part.accent ? "text-electric" : undefined}
                        key={part.text}
                      >
                        {part.text}
                      </span>
                    ))}
                  </span>
                ))}
              </h2>
              <p className="mt-4 max-w-[440px] font-sans text-[12px] leading-5 text-silver/80">
                {s.description}
              </p>

              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-flow-col sm:grid-rows-2">
                {s.points.map((point) => (
                  <li
                    className="flex items-center gap-3 font-sans text-[10px] leading-4 text-silver"
                    key={point}
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-[18px] shrink-0 place-items-center rounded-full border border-electric/40 bg-electric/10 text-electric"
                    >
                      <Check size={10} strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative aspect-[600/322] w-full overflow-hidden border-2 border-electric/90 shadow-[0_0_28px_2px] shadow-electric/45">
                <LogisticsIllustration />
                <p className="absolute bottom-4 left-5 font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.2em] text-white/70">
                  <span className="font-extrabold text-electric">
                    {s.caption.lead}
                  </span>{" "}
                  / {s.caption.rest}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Footer strip */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 lg:mt-[50px]">
            <p className="font-sans text-[7px] font-semibold uppercase leading-none tracking-[0.25em] text-white/50">
              {c.footerLeft}
            </p>
            <Link
              className="font-sans text-[8px] font-bold leading-none text-white transition-colors duration-300 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
              to={c.footerCta.to}
            >
              {c.footerCta.label} ›
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}