import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/animation";
import { Heading } from "@/components/ui/Heading";
import type {
  JourneyGroup as JourneyGroupData,
  JourneyTheme,
} from "@/content/productionJourney";
import { cn } from "@/lib/cn";

const titleColor: Record<JourneyTheme, string> = {
  dark: "text-white",
  light: "text-navy",
};

export function JourneyGroup({ group }: { group: JourneyGroupData }) {
  return (
    <div>
      <Reveal className="flex items-center gap-4 md:pl-3">
        <span className="grid size-7 shrink-0 place-items-center border border-electric/50 font-display text-[12px] font-medium leading-none text-electric">
          {group.number}
        </span>
        <Heading
          as="h3"
          className={cn(
            "text-[22px] leading-none sm:text-[26px]",
            titleColor[group.theme],
          )}
          id={`journey-group-${group.number}`}
        >
          {group.title}
        </Heading>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-linear-to-r from-electric/60 to-transparent"
        />
      </Reveal>

      <ol className="relative mt-8">
        {/* Center line: 1.5px electric with a soft glow */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-4 w-[1.5px] -translate-x-1/2 bg-electric shadow-[0_0_6px_0] shadow-electric/70 md:left-1/2"
        />

        {group.stages.map((stage, i) => {
          const isLeft = i % 2 === 0;
          const isLast = i === group.stages.length - 1;

          return (
            <li
              className="relative grid items-center py-4 pl-12 md:min-h-[273px] md:grid-cols-2 md:py-0 md:pl-0"
              key={stage.number}
            >
              {/* Node: dark halo 42px · electric ring 28px · centre dot 6px */}
              <span
                aria-hidden="true"
                className="absolute left-4 top-1/2 z-10 grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-electric/25 bg-navy shadow-[0_0_14px_0] shadow-electric/30 md:left-1/2 md:size-[42px]"
              >
                <span className="grid size-5 place-items-center rounded-full border-[1.5px] border-electric md:size-7">
                  <span className="size-1.5 rounded-full bg-[#1E90FF]" />
                </span>
              </span>

              {/* Arrow: midway between nodes, 12 x 6 chevron */}
              {!isLast && (
                <ChevronDown
                  aria-hidden="true"
                  className="absolute bottom-0 left-4 z-10 -translate-x-1/2 translate-y-1/2 text-mist/70 md:left-1/2"
                  size={24}
                  strokeWidth={1.25}
                />
              )}

              <Reveal
                className={cn(
                  isLeft
                    ? "md:col-start-1 md:flex md:justify-end md:pr-14"
                    : "md:col-start-2 md:pl-14",
                )}
                delay={80}
              >
                {/* Card: 473.67 x 205 */}
                <article
                  className={cn(
                    "group relative isolate flex min-h-[180px] w-full flex-col justify-end overflow-hidden border-electric p-5 text-white md:h-[205px] md:max-w-[473.67px]",
                    isLeft
                      ? "items-end border-r text-right"
                      : "items-start border-l text-left",
                  )}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105 motion-reduce:transition-none"
                    loading="lazy"
                    src={stage.image}
                  />
                  {/* Spec overlay: electric/navy 255.64deg gradient + 20% black */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-journey-card-overlay"
                  />
                  <span className="mb-2 grid size-6 place-items-center bg-electric font-sans text-[9px] font-extrabold leading-none text-white">
                    {stage.number}
                  </span>
                  <Heading
                    as="h4"
                    className="max-w-[320px] text-balance font-display text-[22px] font-bold uppercase leading-none text-white sm:text-[24px]"
                  >
                    {stage.title}
                  </Heading>
                  <p className="mt-2 max-w-[280px] font-sans text-[10px] leading-4 text-silver">
                    {stage.description}
                  </p>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}