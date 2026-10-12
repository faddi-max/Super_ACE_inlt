import { useState } from "react";
import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { aboutStandardContent as c } from "@/content/aboutStandard";
import { cn } from "@/lib/cn";

export function SuperAceStandard() {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="standard-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:py-[100px]"
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1228px] px-5 sm:px-8 xl:px-0">
        <Reveal>
          <Eyebrow className="text-[9px] leading-none tracking-[0.05em] sm:text-[10px]">
            {c.eyebrow}
          </Eyebrow>
          <h2
            className="mt-3.5 font-display text-[36px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[40px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
            id="standard-title"
          >
            <span className="block">
              {c.titleLead} <span className="text-electric">{c.titleAccent}</span>
            </span>
            <span className="block">{c.titleRest}</span>
          </h2>
          <p className="mt-4 max-w-[340px] font-sans text-[12px] leading-5 text-steel sm:text-[13px] sm:leading-[22px]">
            {c.description}
          </p>
        </Reveal>

        {/* 1 col mobile, 2 col tablet, 4 x 285 on desktop */}
        <ul className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:mt-14 xl:grid-cols-4">
          {c.principles.map((item, i) => {
            const isActive = i === active;
            return (
           <li className="min-w-0 xl:h-[386px]" key={item.number}>
  <Reveal className="h-full" delay={120 + (i % 4) * 90}>
    <article
      className={cn(
        "relative flex h-full min-h-[280px] cursor-default flex-col overflow-hidden rounded-xl border-[0.67px] bg-white px-5 pb-6 pt-5 outline-none transition-[transform,border-color,box-shadow] duration-500 ease-smooth focus-visible:ring-2 focus-visible:ring-electric motion-reduce:transition-none sm:min-h-[320px] sm:px-[26px] sm:pb-8 sm:pt-[26px] xl:px-[27px] xl:pb-[55px] xl:pt-[30px]",
        isActive
          ? "border-electric/50 shadow-[0_14px_36px_0] shadow-electric/20 xl:-my-0.5 xl:h-[calc(100%+4px)]"
          : "border-navy/10 shadow-[0_6px_24px_0] shadow-navy/5",
      )}
      onClick={() => setActive(i)}
      onFocus={() => setActive(i)}
      onMouseEnter={() => setActive(i)}
      tabIndex={0}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 h-[3px] origin-left bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
          isActive ? "scale-x-100" : "scale-x-0",
        )}
      />

      <span
        className={cn(
          "block font-display text-[52px] font-medium leading-none tabular-nums text-transparent transition-[transform,-webkit-text-stroke-color] duration-500 ease-smooth [-webkit-text-stroke-width:1.2px] motion-reduce:transition-none sm:text-[64px]",
          isActive
            ? "[-webkit-text-stroke-color:var(--color-electric)]"
            : "[-webkit-text-stroke-color:var(--color-silver)]",
        )}
      >
        {item.number}
      </span>

      <h3 className="mt-4 font-display text-[28px] font-bold uppercase leading-none text-navy sm:mt-[18px] xl:mt-[17px] xl:text-[32px]">
        {item.title}
      </h3>
      <p className="mt-3 max-w-[260px] font-sans text-[14px] font-bold leading-[21px] text-navy xl:mt-2.5 xl:max-w-[232px] xl:text-[15px] xl:leading-[22px]">
        {item.subtitle}
      </p>
      <p className="mt-2.5 max-w-[300px] font-sans text-[12px] leading-[19px] text-steel xl:mt-[15px] xl:max-w-[232px] xl:text-[11px] xl:leading-5">
        {item.description}
      </p>

      <p className="mt-6 border-t-[0.67px] border-navy/10 pt-3 font-sans text-[9px] font-extrabold uppercase leading-[13px] tracking-[0.12em] text-electric sm:mt-auto xl:text-[8px] xl:leading-none">
        {item.label}
      </p>
    </article>
  </Reveal>
</li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}