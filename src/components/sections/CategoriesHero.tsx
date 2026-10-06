import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/animation";
import { Container } from "@/components/ui/Container";
import { categoriesHeroContent as c } from "@/content/categoriesHero";
import { cn } from "@/lib/cn";

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

const buttonBase =
  "group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xs px-6 font-sans text-button font-semibold uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:h-10 sm:w-auto";

export function CategoriesHero() {
  return (
    <section
      aria-labelledby="categories-hero-title"
      className="relative isolate flex min-h-[460px] w-full items-center overflow-hidden bg-navy text-white sm:min-h-[480px] lg:h-[522px] lg:min-h-0"
    >
      <img
        alt={c.imageAlt}
        className="hero-settle absolute inset-0 -z-20 size-full object-cover object-[35%_top] sm:object-top"
        decoding="async"
        src={c.image}
      />
      {/* Navy wash keeps the headline readable over the photo */}
      <div
        aria-hidden="true"
        className="hero-fade absolute inset-0 -z-10 bg-navy/70"
      />
      <div
        aria-hidden="true"
        className="hero-fade absolute inset-0 -z-10 bg-hero-shade"
      />

      <Container className="flex max-w-360 flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-16 md:px-8 lg:px-30 lg:py-0">
        <p
          className="hero-rise flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-sans text-[8px] font-extrabold uppercase leading-4 tracking-[0.18em] text-white sm:text-eyebrow sm:tracking-[0.22em]"
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
          className="hero-rise mt-4 max-w-full text-balance break-words font-display text-[clamp(2rem,9vw,5rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] sm:mt-5 sm:tracking-[0.44px] lg:leading-[80px]"
          id="categories-hero-title"
          style={delay(280)}
        >
          {c.title}
        </h1>

        <p
          className="hero-rise mt-4 max-w-[560px] text-pretty font-sans text-[11px] leading-[18px] text-silver sm:mt-5 sm:text-[12px] sm:leading-5 lg:text-[13px] lg:leading-[22px]"
          style={delay(420)}
        >
          {c.description}
        </p>

        <Reveal
          className="mt-6 flex w-full max-w-72 flex-col items-stretch gap-2.5 sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-3"
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