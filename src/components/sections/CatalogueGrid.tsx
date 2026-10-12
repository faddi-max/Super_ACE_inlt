import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { catalogueBookPath, catalogueBooks } from "@/content/catalogueBooks";
import { cataloguesContent as c } from "@/content/catalogues";

export function CatalogueGrid() {
  return (
    <section
      aria-labelledby="catalogue-grid-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:pb-[110px] lg:pt-[72px]"
      id="catalogues"
      style={{
        backgroundImage:
          "radial-gradient(34% 30% at 0% 100%, color-mix(in srgb, var(--color-electric) 14%, transparent) 0%, transparent 100%)",
      }}
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[937px] px-5 sm:px-8 xl:px-0">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
            {c.eyebrow}
          </Eyebrow>

          <h2
            className="mt-5 max-w-[560px] font-display text-[32px] font-bold uppercase leading-[34px] tracking-[0.3px] sm:mt-[22px] sm:text-[38px] sm:leading-[38px] xl:text-[44px] xl:leading-[43px] xl:tracking-[0.44px]"
            id="catalogue-grid-title"
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

        {/* Cards: ~299 x 293, 20px gaps, 3 columns */}
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[52px] lg:grid-cols-3">
          {c.items.map((item, i) => {
            // Only catalogues with page data get a View button
            const hasBook = item.title in catalogueBooks;

            return (
              <li className="min-w-0" key={item.number}>
                <Reveal className="h-full" delay={Math.min(i % 3, 2) * 90}>
                  <article className="group relative isolate flex min-h-[293px] flex-col overflow-hidden rounded-[3px] bg-navy px-[22px] pb-6 pt-[22px] text-white shadow-[0_0_0_0] shadow-navy/40 transition-[transform,box-shadow] duration-500 ease-smooth hover:-translate-y-1 hover:shadow-[0_11px_6.3px_0] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <img
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 size-full scale-100 object-cover opacity-[0.3] transition-[transform,opacity] duration-[1400ms] ease-smooth group-hover:scale-110 group-hover:opacity-40 motion-reduce:transition-none"
                      decoding="async"
                      loading="lazy"
                      src={item.image}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 bg-linear-to-t from-navy/60 via-transparent to-navy/30"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
                    />

                    <div className="flex items-start justify-between gap-4">
                      <p className="font-sans text-[8px] font-extrabold uppercase leading-[10px] tracking-[0.2em] text-silver">
                        {item.meta}
                      </p>
                      <span className="font-display text-[14px] font-medium leading-none tabular-nums text-white/40 transition-colors duration-500 group-hover:text-electric">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-14 lg:mt-16">
                      <h3 className="font-display text-[28px] font-bold uppercase leading-[1] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[255px] font-sans text-[11px] leading-[17px] text-silver">
                        {item.description}
                      </p>
                    </div>

                    <div className="relative mt-auto flex flex-wrap items-center gap-2 pt-5">
                      {hasBook && (
                        <Link
                          className="inline-flex h-[38px] items-center gap-2 rounded-[2px] border border-white/40 px-5 font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.1em] text-white transition-colors duration-300 ease-smooth hover:border-electric hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                          to={catalogueBookPath(item.title)}
                        >
                          View
                        </Link>
                      )}

                      <a
                        className="group/cta relative inline-flex h-[38px] w-fit items-center gap-2 overflow-hidden rounded-[2px] bg-electric px-5 font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.1em] text-white transition-[background-color,color,transform] duration-300 ease-smooth hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95 motion-reduce:transition-none"
                        download
                        href={item.file}
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 opacity-0 transition-[transform,opacity] duration-700 ease-smooth group-hover/cta:translate-x-[500%] group-hover/cta:opacity-100 motion-reduce:hidden"
                        />
                        <span className="relative">{c.cta}</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="relative transition-transform duration-300 ease-smooth group-hover/cta:translate-x-1 motion-reduce:transition-none"
                          size={11}
                          strokeWidth={2.5}
                        />
                      </a>
                    </div>
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