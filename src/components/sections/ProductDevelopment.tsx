import { Fragment } from "react";
import { ArrowRight, BookOpen, Check, FileText, Pencil } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/animation";
import {
  productDevelopmentContent as c,
  type DevelopmentIcon,
} from "@/content/productDevelopment";
import { trackPointer } from "@/lib/spotlight";

const icons: Record<DevelopmentIcon, LucideIcon> = {
  pencil: Pencil,
  book: BookOpen,
  file: FileText,
  check: Check,
};

// Figma fill: #0B0F1A under a 53.98deg electric gradient (8% → 39%), plus the faint technical grid
const grid = "color-mix(in srgb, white 3%, transparent)";
const backgroundStyle = {
  backgroundColor: "var(--color-navy)",
  backgroundImage: [
    `linear-gradient(${grid} 1px, transparent 1px)`,
    `linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
    "linear-gradient(53.98deg, rgba(30, 144, 255, 0.08) 67.98%, rgba(30, 144, 255, 0.39) 94.17%)",
  ].join(", "),
  backgroundSize: "48px 48px, 48px 48px, 100% 100%",
};

export function ProductDevelopment() {
  return (
    <section
      aria-labelledby="product-development-title"
      className="relative isolate overflow-hidden bg-navy py-14 text-white sm:py-16 lg:py-20"
      style={backgroundStyle}
    >
      <div className="mx-auto w-full max-w-[1224px] px-5 sm:px-8 xl:px-0">
        {/* Header + collage */}
        <div className="relative">
          <Reveal className="relative z-10 space-y-3 sm:space-y-4">
            <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[10px]">
              {c.eyebrow}
            </p>
            <h2
              className="font-display text-[36px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[40px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
              id="product-development-title"
            >
              <span className="block">{c.titleLead}</span>
              <span className="block">
                {c.titleRest}{" "}
                <span className="text-electric">{c.titleAccent}</span>
              </span>
            </h2>
            <p className="max-w-[360px] font-sans text-[11px] leading-[18px] text-silver sm:text-[12px] sm:leading-5">
              {c.description}
            </p>
          </Reveal>

          <img
            alt={c.collageAlt}
            aria-hidden="true"
            className="pointer-events-none absolute -top-2 right-0 -z-10 h-[200px] w-auto max-w-[70%] select-none object-contain object-right opacity-40 sm:h-[220px] lg:right-0 lg:top-[-10px] lg:h-[215px] lg:max-w-none"
            decoding="async"
            src={c.collage}
          />
        </div>

        {/* Journey rule */}
        <Reveal className="mt-10 flex items-center gap-4 lg:mt-12" delay={80}>
          <p className="shrink-0 font-sans text-[7px] font-semibold uppercase leading-none tracking-[0.22em] text-silver sm:text-[8px]">
            {c.journeyLabel}
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-white/15" />
        </Reveal>

        {/* Step cards */}
        <ul className="mx-auto mt-6 grid max-w-[1148px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {c.steps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <li className="min-w-0" key={step.number}>
                <Reveal className="h-full" delay={120 + i * 90}>
                  <article
                    className="motion-spotlight group flex h-full min-h-[207px] flex-col rounded-[4px] border-[0.8px] border-white/12 bg-white/[0.04] px-5 pb-5 pt-5 backdrop-blur-sm transition-[transform,border-color] duration-500 ease-smooth hover:-translate-y-1 hover:border-electric/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    onPointerMove={trackPointer}
                  >
                    <div className="relative flex items-start justify-between">
                      <span className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.12em] text-electric">
                        Step {step.number}
                      </span>
                      <span
                        aria-hidden="true"
                        className="grid size-[22px] place-items-center rounded-[4px] border-[0.8px] border-white/15 bg-white/5 text-silver transition-colors duration-300 ease-smooth group-hover:border-electric group-hover:text-electric motion-reduce:transition-none"
                      >
                        <Icon size={11} strokeWidth={2} />
                      </span>
                    </div>

                    <h3 className="relative mt-5 font-display text-[22px] font-bold uppercase leading-[1.05] tracking-[0.2px] text-white">
                      {step.title}
                    </h3>
                    <p className="relative mt-2 font-sans text-[9px] leading-[14px] text-mist">
                      {step.description}
                    </p>
                    <p className="relative mt-auto border-t-[0.67px] border-white/10 pt-3 font-sans text-[7px] leading-[10px] text-silver">
                      <span className="font-extrabold uppercase tracking-[0.1em] text-electric">
                        {step.detail.label}:
                      </span>{" "}
                      {step.detail.value}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Flow */}
        <Reveal
          className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-sans text-[7px] font-semibold uppercase leading-none tracking-[0.25em] text-mist/70"
          delay={200}
        >
          {c.flow.map((label, i) => (
            <Fragment key={label}>
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="size-[3px] rounded-full bg-electric/70"
                />
              )}
              <span>{label}</span>
            </Fragment>
          ))}
        </Reveal>

        {/* Footer */}
        <Reveal
          className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:mt-12"
          delay={240}
        >
          <div>
            <p className="font-sans text-[10px] font-bold leading-4 text-white">
              {c.footer.strong}
            </p>
            <p className="mt-0.5 max-w-[500px] font-sans text-[9px] leading-[14px] text-mist">
              {c.footer.note}
            </p>
          </div>
          <Link
            className="group inline-flex h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[2px] bg-electric px-6 font-sans text-[8px] font-extrabold uppercase leading-[14px] tracking-[0.7px] text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            to={c.footer.cta.to}
          >
            {c.footer.cta.label}
            <ArrowRight
              aria-hidden="true"
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              size={11}
              strokeWidth={2.5}
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}