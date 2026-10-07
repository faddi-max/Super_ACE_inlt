import { CursorGlow, MaskLines, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { buyersContent as c } from "@/content/buyers";
import { cn } from "@/lib/cn";

export function BuyerTypes() {
  return (
    <section
      aria-labelledby="buyers-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:py-20"
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-360 px-6 lg:px-30">
        <Reveal>
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>
          <Heading
            as="h2"
            className="mt-5 text-[36px] leading-[34px] tracking-[0.44px] text-navy sm:text-[44px] sm:leading-[39.16px]"
            id="buyers-title"
          >
            <MaskLines lines={c.title.map((text) => ({ text }))} />
          </Heading>
        </Reveal>

        <ul className="mt-8 grid w-full max-w-[1200px] grid-cols-1 border-t-[0.8px] border-t-slate sm:grid-cols-2 lg:mt-10 lg:h-[181.6px] lg:grid-cols-5 lg:grid-rows-1">
          {c.items.map((item, i) => (
            <li
              className={cn(
                "min-w-0 border-b-[0.8px] border-r-[0.8px] border-navy/12",
                // Odd item out spans the row on the 2-column layout
                i === c.items.length - 1 && "sm:col-span-2 lg:col-span-1",
              )}
              key={item.number}
            >
              <Reveal className="h-full" delay={Math.min(i, 4) * 80}>
                <article className="group relative h-full min-h-[140px] overflow-hidden px-5 pb-6 pt-5 transition-colors duration-500 ease-smooth hover:bg-electric/5 motion-reduce:transition-none">
                  {/* Accent line sweeps in on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-500 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                  <span className="block font-display text-[22px] font-normal leading-none text-electric transition-transform duration-300 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
                    {item.number}
                  </span>
                  <h3 className="mt-6 break-words font-display text-[18px] font-bold uppercase leading-[20px] tracking-[0.2px] text-navy transition-colors duration-300 ease-smooth group-hover:text-electric motion-reduce:transition-none">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[210px] font-sans text-[10px] leading-[16px] text-navy/55">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}