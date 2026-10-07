import { Reveal } from "@/components/animation";
import { JourneyGroup } from "@/components/sections/JourneyGroup";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import {
  journeyRings,
  productionJourneyContent as c,
  type RingPosition,
} from "@/content/productionJourney";
import { cn } from "@/lib/cn";

// Left-side rings reuse the same asset, mirrored
const ringPlacement: Record<RingPosition, string> = {
  "top-right": "right-0 -top-16",
  "top-left": "left-0 -top-16 -scale-x-100",
  "bottom-right": "right-0 -bottom-16",
  "bottom-left": "left-0 -bottom-16 -scale-x-100",
};

export function ProductionJourney() {
  return (
    <>
      {c.groups.map((group, index) => {
        const isDark = group.theme === "dark";

        return (
          <Section
            aria-labelledby={`journey-group-${group.number}`}
            className={cn(
              "relative isolate overflow-hidden py-16 md:py-20",
              isDark
                ? "bg-navy bg-cover bg-top text-white"
                : "bg-white text-navy",
            )}
            containerClassName="max-w-360 lg:px-30"
            key={group.number}
            style={
              isDark ? { backgroundImage: `url(${c.background})` } : undefined
            }
          >
            {!isDark && (
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-journey-grid [background-size:48px_48px,48px_48px,100%_100%]"
              />
            )}
            {isDark && group.ring && (
              <img
                alt=""
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute -z-10 h-auto w-[220px] select-none sm:w-[320px] lg:w-[480px]",
                  ringPlacement[group.ring],
                )}
                loading="lazy"
                src={journeyRings[group.theme]}
              />
            )}

         {index === 0 && (
  <Reveal className="mb-12 lg:mb-16">
    <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
      {c.eyebrow}
    </Eyebrow>

    <Heading
      as="h2"
      className="mt-[22px] text-[36px] leading-[34px] tracking-[-0.72px] text-white sm:text-[44px] sm:leading-[39px]"
    >
      {c.title.map((part, i) => (
        <span
          className={cn(part.accent && "text-electric")}
          key={part.text}
        >
          {i > 0 && " "}
          {part.text}
        </span>
      ))}
    </Heading>

    <p className="mt-4 max-w-md text-small text-silver">{c.description}</p>
  </Reveal>
)}
            <JourneyGroup group={group} />
          </Section>
        );
      })}
    </>
  );
}