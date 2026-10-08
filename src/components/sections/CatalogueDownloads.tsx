import { ArrowRight } from "lucide-react";
import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cataloguesContent as c } from "@/content/catalogues";
import { trackPointer } from "@/lib/spotlight";

export function CatalogueDownloads() {
  return (
    <section
      aria-labelledby="catalogue-title"
      className="relative isolate overflow-hidden bg-white py-16 text-navy lg:py-[80px]"
      id="catalogues"
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-360 px-6 lg:px-30">
        <Reveal>
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>

          {/* Each title line rises out of its own mask, staggered */}
          <h2
            className="mt-[22px] font-display text-[44px] font-bold uppercase leading-[39.16px] tracking-[0.44px] text-navy"
            id="catalogue-title"
          >
            {c.titleLines.map((line, i) => (
              <span className="motion-mask" key={line.lead}>
                <span
                  className="motion-mask__line"
                  style={{ transitionDelay: `${120 + i * 110}ms` }}
                >
                  {line.lead}
                  {line.accent && (
                    <>
                      {" "}
                      <span className="text-electric">{line.accent}</span>
                    </>
                  )}
                  {line.rest && ` ${line.rest}`}
                </span>
              </span>
            ))}
          </h2>
        </Reveal>

        <ul className="mt-11 grid max-w-[1192px] grid-cols-1 gap-[0.75px] bg-white/11 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((item, i) => (
            <li
              className="relative bg-navy transition-[transform,box-shadow] duration-500 ease-smooth focus-within:z-10 hover:z-10 hover:-translate-y-1 hover:shadow-[0_11px_6.3px_0] hover:shadow-navy/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              key={item.number}
            >
              <Reveal
                className="motion-reveal--zoom h-full"
                delay={150 + i * 100}
              >
                <article
                  className="motion-spotlight group relative flex h-full min-h-[255px] flex-col overflow-hidden px-[22.5px] pb-[25.5px] pt-[22.5px] text-white lg:h-[292px]"
                  onPointerMove={trackPointer}
                >
                  {/* Photo: 27% on navy, slow zoom + brighten on hover */}
                  <img
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 size-full scale-100 object-cover opacity-[0.27] transition-[transform,opacity] duration-[1400ms] ease-smooth group-hover:scale-110 group-hover:opacity-40 motion-reduce:transition-none"
                    decoding="async"
                    loading="lazy"
                    src={item.image}
                  />

                  {/* Accent line sweeps along the top */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <p className="font-sans text-[8px] font-extrabold uppercase leading-[10px] tracking-[0.2em] text-silver transition-[letter-spacing,color] duration-500 ease-smooth group-hover:tracking-[0.28em] group-hover:text-white motion-reduce:transition-none">
                      {item.meta}
                    </p>
                    <span className="font-display text-[14px] font-medium leading-none tabular-nums text-white/40 transition-[color,transform] duration-500 ease-smooth group-hover:-translate-y-0.5 group-hover:text-electric motion-reduce:transition-none">
                      {item.number}
                    </span>
                  </div>

                  <div className="relative mt-12 transition-transform duration-500 ease-smooth group-hover:-translate-y-1.5 motion-reduce:transition-none lg:mt-[58px]">
                    <h3 className="font-display text-[24px] font-bold uppercase leading-[1.02] text-white transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[250px] font-sans text-[10px] leading-4 text-silver transition-colors duration-500 ease-smooth group-hover:text-white motion-reduce:transition-none">
                      {item.description}
                    </p>
                  </div>

                  <a
                    className="group/cta relative mt-auto inline-flex h-[30px] w-fit items-center gap-2 overflow-hidden rounded-[2px] bg-electric px-3.5 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.12em] text-white transition-[background-color,color,transform] duration-300 ease-smooth hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 motion-reduce:transition-none"
                    download
                    href={item.file}
                  >
                    {/* Light sweep across the button on hover */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 opacity-0 transition-[transform,opacity] duration-700 ease-smooth group-hover/cta:translate-x-[500%] group-hover/cta:opacity-100 motion-reduce:hidden"
                    />
                    <span className="relative">{c.cta}</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="relative transition-transform duration-300 ease-smooth group-hover/cta:translate-x-1 motion-reduce:transition-none"
                      size={10}
                      strokeWidth={2.5}
                    />
                  </a>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}