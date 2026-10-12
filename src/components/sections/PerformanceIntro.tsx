import { CursorGlow, Reveal } from "@/components/animation";
import { performanceIntroContent as c } from "@/content/performanceIntro";

/**
 * Figma (1440 wide): white strip, content frame 1200, py 60,
 * centred title (Barlow Condensed 700) + one-line description,
 * 2px electric rule along the bottom edge before the dark Machine System section.
 */
export function PerformanceIntro() {
  return (
    <>
  
    <section
      aria-labelledby="performance-intro-title"
      className="relative isolate overflow-hidden border-b-2 border-electric bg-white py-12 text-navy sm:py-14 lg:py-[60px]"
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-5 text-center sm:px-8 lg:px-0">
        <Reveal>
          <h2
            id="performance-intro-title"
            className="font-display text-[32px] font-bold uppercase leading-[1.1] tracking-[0.3px] sm:text-[40px] lg:text-[46px] lg:tracking-[0.44px]"
          >
            {c.titleLead} <span className="text-electric">{c.titleAccent}</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-3 max-w-[1168px] font-sans text-[11px] leading-5 text-steel lg:mt-4">
            {c.description}
          </p>
        </Reveal>
      </div>
    </section>
    </>
  );
}
