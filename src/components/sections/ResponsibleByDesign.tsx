import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { aboutResponsibilityContent as c } from "@/content/aboutResponsibility";

export function ResponsibleByDesign() {
  return (
    <section
      aria-labelledby="responsible-title"
      className="relative isolate overflow-hidden bg-navy bg-journey-grid pb-32 pt-14 text-white [background-size:48px_48px,48px_48px,100%_100%] sm:pb-40 sm:pt-16 lg:min-h-[476px] lg:pb-0 lg:pt-[108px]"
    >
      <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12 xl:px-30">
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2
            className="mt-3.5 font-display text-[44px] font-extrabold uppercase leading-[0.88] tracking-[0.44px] sm:text-[56px] xl:text-[72px] xl:leading-[61px]"
            id="responsible-title"
          >
            {c.titleLines.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-[630px] font-sans text-[13px] leading-6 text-silver sm:text-[14px] lg:mt-7">
            {c.description}
          </p>
        </Reveal>
      </div>

      {/* Oversized watermark, cropped by the section edge */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 left-5 -z-10 select-none whitespace-nowrap font-display text-[120px] font-bold uppercase leading-none text-white/[0.04] sm:text-[170px] lg:bottom-auto lg:left-[54.4%] lg:top-[328px] lg:text-[240px] lg:leading-[240px]"
      >
        {c.watermark}
      </span>
    </section>
  );
}