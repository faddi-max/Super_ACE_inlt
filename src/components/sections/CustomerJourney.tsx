import { CursorGlow, Reveal } from "@/components/animation";
import { Heading } from "@/components/ui/Heading";
import { SliderArrow } from "@/components/ui/SliderArrow";
import { journeyContent as c } from "@/content/customerJourney";
import { useScrollSlider } from "@/lib/useScrollSlider";

const STEP = 300;

export function CustomerJourney() {
  const { trackRef, edges, update, scroll } = useScrollSlider(STEP);

  return (
    <section
      aria-labelledby="journey-title"
      className="relative isolate overflow-hidden bg-white bg-journey-glow py-14 text-navy lg:pb-12 lg:pt-16"
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-6 xl:px-0">
        {/* Header */}
        <Reveal className="mx-auto max-w-[660px] text-center">
          <Heading
            as="h2"
            className="text-[44px] leading-[39.16px] tracking-[0.44px] text-navy"
          >
            <span className="motion-mask" id="journey-title">
              <span className="motion-mask__line">
                {c.titleLead}{" "}
                <span className="text-electric">{c.titleAccent}</span>
              </span>
            </span>
          </Heading>
          <p className="mt-5 font-sans text-[13px] leading-[26px] text-steel">
            {c.description}
          </p>
        </Reveal>

        {/* Row: 11 x 109.083 = 1200 on xl, scroll track below */}
        <div className="mt-10 lg:mt-[30px]">
          <div
            className="-mx-6 snap-x snap-mandatory overflow-x-auto px-6 [scrollbar-width:none] xl:mx-0 xl:overflow-visible xl:px-0 [&::-webkit-scrollbar]:hidden"
            onScroll={update}
            ref={trackRef}
          >
            <ul className="flex w-max border-y-[0.67px] border-hairline/50 xl:grid xl:w-full xl:grid-cols-11">
              {c.steps.map((step, i) => (
              <li
  className="h-[145px] min-h-[94px] w-[150px] shrink-0 snap-start border-r-[0.67px] border-hairline/50 xl:w-auto"
  key={step.number}
>
  <Reveal className="h-full" delay={i * 60}>
    <article className="group relative flex h-full cursor-default flex-col px-[11px] pb-[15px] pt-[9px] opacity-50 transition-[background-color,opacity] duration-500 ease-smooth hover:bg-electric/[0.04] hover:opacity-100 motion-reduce:transition-none">
      {/* Accent line sweeps along the top on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-500 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
      />

      <span className="block font-display text-[20px] font-normal leading-5 tabular-nums text-electric transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
        {step.number}
      </span>
      <h3 className="mt-1.5 font-sans text-[8px] font-bold leading-3 text-navy transition-colors duration-300 ease-smooth group-hover:text-electric motion-reduce:transition-none">
        {step.title}
      </h3>
      <div className="mt-auto h-16">
        <img
          alt=""
          aria-hidden="true"
          className="size-full object-contain object-bottom transition-transform duration-700 ease-smooth group-hover:-translate-y-1.5 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:scale-100"
          decoding="async"
          loading="lazy"
          src={step.image}
        />
      </div>
    </article>
  </Reveal>
</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 hidden justify-center gap-3 md:flex xl:hidden">
            <SliderArrow
              className="grid"
              direction="prev"
              disabled={edges.start}
              label={c.prevLabel}
              onClick={() => scroll(-1)}
            />
            <SliderArrow
              className="grid"
              direction="next"
              disabled={edges.end}
              label={c.nextLabel}
              onClick={() => scroll(1)}
            />
          </div>
        </div>

        {/* Footer row */}
        <Reveal
          className="mt-8 flex flex-col gap-4 border-t-[0.67px] border-hairline/50 pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-[34px] lg:pt-[22px]"
          delay={200}
        >
          <p className="max-w-[640px] font-sans text-[10px] leading-[18px] text-steel">
            <span className="font-bold text-navy">{c.flowLabel}</span>{" "}
            {c.flow.join(" › ")}
          </p>
          <p className="shrink-0 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-electric">
            {c.tag}
          </p>
        </Reveal>
      </div>
    </section>
  );
}