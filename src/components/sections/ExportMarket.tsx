import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CursorGlow, Reveal } from "@/components/animation";
import { exportMarketContent as c } from "@/content/exportMarket";

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
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_630px] lg:gap-0">
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

          {/* Right column: 630 wide, top rule full width, rows inset 80px each side (470px) */}
          <div className="border-t-[0.67px] border-navy/10 lg:px-20">
            <ul>
              {c.markets.map((market, i) => (
                <li
                  className="border-b-[0.67px] border-navy/10"
                  key={market.number}
                >
                  <Reveal delay={120 + i * 90}>
                    <Link
                      className="group relative grid min-h-[84px] grid-cols-[32px_minmax(0,1fr)_32px] items-center gap-x-4 py-5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric sm:min-h-[96px] sm:grid-cols-[56px_minmax(0,1fr)_32px] sm:gap-x-6 lg:h-[104.33px] lg:min-h-0 lg:grid-cols-[89px_minmax(0,1fr)_36px] lg:gap-x-0 lg:py-0"
                      to={market.to}
                    >
                      {/* Hover tint */}
                      <span
                        aria-hidden="true"
                        className="absolute -inset-x-3 inset-y-0 bg-electric/5 opacity-0 transition-opacity duration-500 ease-smooth motion-reduce:transition-none group-hover:opacity-100"
                      />
                      {/* Accent line sweeps along the bottom edge */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth motion-reduce:transition-none group-hover:scale-x-100"
                      />

                      {/* Number: Barlow Condensed 500 / 18px */}
                      <span className="relative font-display text-[16px] font-medium leading-none tabular-nums text-navy transition-colors duration-300 ease-smooth group-hover:text-electric lg:text-[18px]">
                        {market.number}
                      </span>

                      <span className="relative block min-w-0 transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:translate-x-1.5">
                        {/* Region: Barlow Condensed 700 / 32px / 32px */}
                        <span className="block font-display text-[26px] font-bold uppercase leading-[26px] text-navy transition-colors duration-300 ease-smooth group-hover:text-electric sm:text-[30px] sm:leading-[30px] lg:text-[32px] lg:leading-[32px]">
                          {market.region}
                        </span>
                        {/* Countries: Montserrat 600 / 10px / 12px / 0.1em, 6px below */}
                        <span className="mt-1.5 block font-sans text-[9px] font-semibold uppercase leading-[12px] tracking-[0.1em] text-electric lg:text-[10px]">
                          {market.countries}
                        </span>
                      </span>

                      {/* Arrow button: 36px circle */}
                      <span
                        aria-hidden="true"
                        className="relative flex size-8 items-center justify-center justify-self-end rounded-full border-[0.67px] border-navy/15 bg-white/60 text-navy transition-[background-color,border-color,color] duration-300 ease-smooth motion-reduce:transition-none group-hover:border-electric group-hover:bg-electric group-hover:text-white lg:size-9"
                      >
                        <ArrowRight
                          className="size-[10px] transition-transform duration-300 ease-smooth motion-reduce:transition-none group-hover:translate-x-0.5"
                          strokeWidth={2}
                        />
                      </span>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Strip: rule 46px under the rows, pills 26px below the rule */}
        <Reveal
          className="mt-10 flex flex-col gap-4 border-t-[0.67px] border-navy/10 pt-6 sm:mt-12 md:flex-row md:items-center md:justify-between lg:mt-[46px] lg:pt-[26px]"
          delay={200}
        >
          <p className="font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.25em] text-steel">
            {c.stripLabel}
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {c.pills.map((pill, i) => (
              <li key={pill}>
                <Reveal delay={300 + i * 70}>
                  {/* Pill: 30px tall, Montserrat 600 / 10px / 0.1em, 13px side padding */}
                  <span className="inline-flex h-[30px] cursor-default items-center rounded-full border-[0.67px] border-navy/15 bg-white px-[13px] font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.1em] text-navy transition-[transform,border-color,color,box-shadow] duration-300 ease-smooth motion-reduce:transition-none hover:-translate-y-0.5 hover:border-electric hover:text-electric hover:shadow-md hover:shadow-electric/10 motion-reduce:hover:translate-y-0">
                    {pill}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}