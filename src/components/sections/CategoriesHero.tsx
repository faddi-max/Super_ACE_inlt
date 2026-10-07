import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { categoriesHeroContent as c } from "@/content/categoriesHero";
import { cn } from "@/lib/cn";

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

const buttonBase =
  "group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xs px-6 font-sans text-button font-semibold uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:w-auto";

export function CategoriesHero() {
  return (
    <section
      aria-labelledby="categories-hero-title"
      className="relative isolate flex min-h-[min(100svh,520px)] w-full items-center overflow-hidden bg-navy text-white sm:min-h-[480px] lg:min-h-[522px]"
    >
      <img
        alt={c.imageAlt}
        className="hero-settle absolute inset-0 -z-20 size-full object-cover object-[40%_top] md:object-top"
        decoding="async"
        src={c.image}
      />
      {/* Stronger wash on small screens where text covers more of the photo */}
      <div
        aria-hidden="true"
        className="hero-fade absolute inset-0 -z-10 bg-navy/80 sm:bg-navy/70"
      />
      <div
        aria-hidden="true"
        className="hero-fade absolute inset-0 -z-10 bg-hero-shade"
      />

      <Container className="flex min-w-0 max-w-360 flex-col items-center px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-30 lg:py-20">
        <p
          className="hero-rise flex min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-sans text-eyebrow font-extrabold uppercase tracking-[0.18em] text-white sm:tracking-[0.22em]"
          style={delay(150)}
        >
          {c.eyebrow.map((part, i) => (
            <span
              className={cn("accent" in part && part.accent && "text-electric")}
              key={i}
            >
              {part.text}
            </span>
          ))}
        </p>

        <h1
          className="hero-rise mt-4 w-full min-w-0 max-w-full text-balance font-display text-[clamp(1.875rem,9vw,5rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] [overflow-wrap:anywhere] sm:mt-5 sm:tracking-[0.44px] lg:leading-none"
          id="categories-hero-title"
          style={delay(280)}
        >
          {c.title}
        </h1>

        <p
          className="hero-rise mt-4 max-w-[34rem] text-pretty font-sans text-[12px] leading-5 text-silver sm:mt-5 sm:text-[13px] sm:leading-[22px] lg:text-[14px] lg:leading-6"
          style={delay(420)}
        >
          {c.description}
        </p>

        <Reveal
          className="mt-6 flex w-full max-w-xs flex-col items-stretch gap-2.5 sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-3"
          delay={200}
        >
          <Link
            className={cn(
              buttonBase,
              "bg-electric text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-navy",
            )}
            to={c.primaryCta.to}
          >
            {c.primaryCta.label}
            <ArrowRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={12}
              strokeWidth={2.5}
            />
          </Link>
          <Link
            className={cn(
              buttonBase,
              "border border-silver/60 text-white transition-colors duration-300 hover:border-electric hover:text-electric",
            )}
            to={c.secondaryCta.to}
          >
            {c.secondaryCta.label}
            <ArrowRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={12}
              strokeWidth={2.5}
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}