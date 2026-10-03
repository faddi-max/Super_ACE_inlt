import { Link } from "react-router-dom";
import { MaskLines, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SliderArrow } from "@/components/ui/SliderArrow";
import { certificationsContent as c } from "@/content/certifications";
import { useScrollSlider } from "@/lib/useScrollSlider";
import { trackPointer } from "@/lib/spotlight";

const STEP = 308;

export function CertificationsSlider() {
  const { trackRef, edges, update, scroll } = useScrollSlider(STEP);

  return (
    <section
      className="bg-navy bg-cover bg-top bg-no-repeat py-14 lg:pb-[53px] lg:pt-[57px]"
      style={{ backgroundImage: `url(${c.background})` }}
    >
      <div className="mx-auto w-full max-w-360 px-6 lg:px-30">
        <Reveal>
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>
          <Heading
            as="h2"
            className="mt-3 text-[44px] leading-[39.16px] tracking-[0.44px] text-white"
          >
            <MaskLines lines={c.title.map((text) => ({ text }))} />
          </Heading>
        </Reveal>

        <div className="mt-12 grid items-center gap-4 lg:mt-[66px] lg:grid-cols-[44px_1fr_44px]">
          <SliderArrow
            className="hidden lg:grid"
            direction="prev"
            disabled={edges.start}
            label="Previous certifications"
            onClick={() => scroll(-1)}
          />

          <div
            className="-my-2 w-full min-w-0 max-w-[906px] snap-x snap-mandatory overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] lg:mx-auto [&::-webkit-scrollbar]:hidden"
            onScroll={update}
            ref={trackRef}
          >
            <div className="flex w-max gap-[18px]">
              {c.items.map((item, i) => (
                <Reveal
                  className="w-[290px] shrink-0 snap-start"
                  delay={i * 90}
                  key={item.title}
                >
                  <article
                    className="motion-spotlight relative flex h-[390px] min-h-[390px] flex-col rounded-[3px] border border-white/10 border-t-white/14 bg-certification-card px-[26px] pb-[26px] pt-[30px] transition-all duration-500 ease-out hover:-translate-y-1"
                    onPointerMove={trackPointer}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-px -top-px h-0.5 w-[289px] bg-accent-fade"
                    />

                    <Eyebrow className="text-[8px] leading-3">
                      {item.index} / {item.system}
                    </Eyebrow>

                    <div className="mt-[23px] flex h-32 w-full flex-col items-center justify-center border border-white/10 border-t-white/18 bg-navy">
                      <p className="font-display text-[42px] font-bold uppercase leading-[42px] tracking-[0.04em] text-white">
                        {item.prefix}{" "}
                        <span className="text-electric">{item.code}</span>
                      </p>
                      <p className="mt-2 font-sans text-[8px] font-medium uppercase leading-[10px] tracking-[0.24em] text-white/60">
                        {item.discipline}
                      </p>
                    </div>

                    <h3 className="mt-8 font-display text-[24px] font-bold uppercase leading-6 text-white">
                      {item.title}
                    </h3>
                    <p className="mt-[9px] font-sans text-[10px] leading-[17px] text-silver/60">
                      {item.description}
                    </p>

                    <div className="mt-auto flex h-[23px] items-start justify-between border-t border-white/10 pt-2.5 font-sans text-ui-label uppercase">
                      <span className="text-white/30">{item.discipline}</span>
                      <Link
                        className="font-bold text-electric transition-colors hover:text-white after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-electric"
                        to={item.to}
                      >
                        {c.verify}
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <SliderArrow
            className="hidden lg:grid"
            direction="next"
            disabled={edges.end}
            label="Next certifications"
            onClick={() => scroll(1)}
          />
        </div>

        <Reveal
          className="mt-12 flex items-center gap-3.5 lg:mt-[65px]"
          delay={200}
        >
          <span aria-hidden="true" className="size-2 bg-electric" />
          <p className="font-sans text-ui-label font-semibold uppercase text-white/40">
            {c.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
