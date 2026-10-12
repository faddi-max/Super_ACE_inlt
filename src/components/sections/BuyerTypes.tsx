import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CursorGlow, Reveal } from "@/components/animation";
import { buyersContent as c } from "@/content/buyers";
import { cn } from "@/lib/cn";

// Dark navy with a soft electric glow behind the heading
const backgroundStyle = {
  backgroundColor: "var(--color-navy)",
  backgroundImage:
    "radial-gradient(45% 70% at 40% 20%, color-mix(in srgb, var(--color-electric) 16%, transparent) 0%, transparent 100%)",
};

export function BuyerTypes() {
  const [active, setActive] = useState(0);

  return (
    <section
      aria-labelledby="buyers-title"
      className="relative isolate overflow-hidden bg-navy py-14 text-white sm:py-16 lg:pb-[72px] lg:pt-[60px]"
      style={backgroundStyle}
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1216px] px-5 sm:px-8 xl:px-0">
        <Reveal>
          <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
            {c.eyebrow}
          </p>
          <h2
            className="mt-4 font-display text-[36px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[40px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
            id="buyers-title"
          >
            {c.titleLines.map((line, i) => (
              <span className="block" key={i}>
                {line.map((part) => (
                  <span
                    className={cn(part.accent && "text-electric")}
                    key={part.text}
                  >
                    {part.text}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[640px] font-sans text-[12px] leading-5 text-silver sm:text-[13px] sm:leading-[22px]">
            {c.description}
          </p>
        </Reveal>

        <ul className="mt-8 grid border-t-[0.8px] border-white/12 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5">
          {c.items.map((item, i) => {
            const isActive = i === active;
            return (
              <li
                className={cn(
                  "min-w-0 border-b-[0.8px] border-white/12 sm:border-r-[0.8px] lg:border-b-0",
                  // Odd item out spans the row on the 2-column layout
                  i === c.items.length - 1 && "sm:col-span-2 lg:col-span-1",
                )}
                key={item.number}
              >
                <Reveal className="h-full" delay={Math.min(i, 4) * 80}>
                  <Link
                    className={cn(
                      "group relative flex h-full min-h-[200px] flex-col overflow-hidden px-5 pb-5 pt-5 outline-none transition-colors duration-500 ease-smooth focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric motion-reduce:transition-none lg:h-[223px] lg:min-h-0",
                      isActive
                        ? "bg-linear-to-b from-electric/[0.14] to-electric/[0.03]"
                        : "bg-transparent",
                    )}
                    onFocus={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    to={item.to}
                  >
                    {/* Accent bar across the top of the active card */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 top-0 h-0.5 origin-left bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />

                    <span className="flex items-center gap-2.5">
                      <span className="font-display text-[14px] font-medium leading-none tabular-nums text-electric">
                        {item.number}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "h-px bg-electric/60 transition-[width] duration-500 ease-smooth motion-reduce:transition-none",
                          isActive ? "w-10" : "w-5",
                        )}
                      />
                    </span>

                    <h3 className="mt-10 break-words font-display text-[22px] font-bold uppercase leading-[24px] tracking-[0.2px] text-white lg:mt-12 lg:text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[210px] font-sans text-[9px] leading-[14px] text-mist">
                      {item.description}
                    </p>

                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute bottom-4 right-4 grid size-6 place-items-center rounded-full border-[0.67px] transition-[background-color,border-color,color] duration-300 ease-smooth motion-reduce:transition-none",
                        isActive
                          ? "border-electric bg-electric text-white"
                          : "border-white/25 text-mist",
                      )}
                    >
                      <ArrowUpRight size={10} strokeWidth={2.5} />
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}