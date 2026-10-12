import { Link } from "react-router-dom";
import { CursorGlow, Reveal } from "@/components/animation";
import { exportMarketContent as c } from "@/content/exportMarket";

// Card spec: 191.79 x 113.94 · padding 4 / 5 / 15 / 5 · radius 3 · navy + radial glow
const cardStyle = {
  backgroundColor: "var(--color-navy)",
  backgroundImage:
    "radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--color-electric) 40%, transparent) 0%, color-mix(in srgb, var(--color-navy) 17.7%, transparent) 100%)",
} as const;

export function ExportMarket() {
  return (
    <section
      aria-labelledby="export-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:py-[88px]"
      style={{
        backgroundImage:
          "radial-gradient(60% 90% at 100% 0%, color-mix(in srgb, var(--color-electric) 9%, transparent) 0%, transparent 70%)",
      }}
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-0">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_607px] lg:gap-8">
          <Reveal className="space-y-4 lg:space-y-5">
            <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.25em] text-electric">
              {c.eyebrow}
            </p>
            <h2
              id="export-title"
              className="font-display text-[34px] font-bold uppercase leading-[1] tracking-[0.3px] sm:text-[42px] lg:text-[48px] lg:leading-[52px] lg:tracking-[0.44px]"
            >
              <span className="block">{c.titleLead}</span>
              <span className="block">
                <span className="text-electric">{c.titleAccent}</span>{" "}
                {c.titleRest}
              </span>
            </h2>
            <p className="max-w-[380px] font-sans text-[12px] leading-[20px] text-steel sm:text-[13px] sm:leading-[22px]">
              {c.description}
            </p>
          </Reveal>

          {/* Cards: 3 x 191.79 on desktop, gap 16 */}
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {c.markets.map((market, i) => (
              <li className="min-w-0" key={market.region}>
                <Reveal className="h-full" delay={120 + (i % 3) * 90 + Math.floor(i / 3) * 60}>
                  <Link
                    className="group relative flex min-h-[113.94px] flex-col items-center justify-center overflow-hidden rounded-[3px] border-b-[0.57px] border-b-[#1117231F] px-[5px] pb-[15px] pt-1 text-center outline-none transition-[transform,box-shadow] duration-500 ease-smooth hover:-translate-y-1 hover:shadow-[0_14px_30px_0] hover:shadow-electric/25 focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:h-[113.94px] lg:min-h-0"
                    style={cardStyle}
                    to={market.to}
                  >
                    {/* Accent line sweeps along the bottom on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
                    />
                    <span className="relative block max-w-full font-display text-[20px] font-bold uppercase leading-[1] tracking-[0.3px] text-white sm:text-[22px]">
                      {market.region}
                    </span>
                    <span className="relative mt-2 block max-w-full font-sans text-[8px] font-semibold uppercase leading-3 tracking-[0.14em] text-electric transition-colors duration-300 ease-smooth group-hover:text-white sm:text-[9px]">
                      {market.countries}
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Strip: label left, plain text items right */}
        <Reveal
          className="mt-10 flex flex-col gap-4 border-t-[0.67px] border-navy/10 pt-6 sm:mt-12 md:flex-row md:items-center md:justify-between lg:mt-[46px] lg:pt-[26px]"
          delay={200}
        >
          <p className="font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.25em] text-steel sm:text-[9px]">
            {c.stripLabel}
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:gap-x-10">
            {c.pills.map((pill) => (
              <li
                className="cursor-default font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.18em] text-navy/60 transition-colors duration-300 ease-smooth hover:text-electric motion-reduce:transition-none sm:text-[9px]"
                key={pill}
              >
                {pill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}