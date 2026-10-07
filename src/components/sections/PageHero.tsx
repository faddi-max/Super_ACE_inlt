import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import type { HeroPart, PageHeroContent } from "@/types";
import { cn } from "@/lib/cn";

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

const Parts = ({ parts }: { parts: HeroPart[] }) =>
  parts.map((part, i) => (
    <span className={cn(part.accent && "text-electric")} key={`${part.text}-${i}`}>
      {i > 0 && " "}
      {part.text}
    </span>
  ));

type PageHeroProps = { content: PageHeroContent };

export function PageHero({ content: c }: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-hero-title"
      className="relative isolate flex min-h-[min(100svh,520px)] w-full items-center overflow-hidden bg-navy text-white sm:min-h-[480px] lg:min-h-[522px]"
    >
      <img
        alt={c.imageAlt}
        className="hero-settle absolute inset-0 -z-20 size-full object-cover object-[40%_top] md:object-top"
        decoding="async"
        src={c.image}
      />
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
          className="hero-rise flex min-w-0 flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center font-sans text-ui-label font-extrabold uppercase tracking-[0.12em] text-white"
          style={delay(150)}
        >
          <Parts parts={c.eyebrow} />
        </p>

        <h1
          className="hero-rise mt-4 w-full min-w-0 max-w-full text-balance font-display text-[clamp(2.25rem,10vw,5rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] [overflow-wrap:anywhere] sm:mt-5 sm:tracking-[0.44px] lg:leading-[72px]"
          id="page-hero-title"
          style={delay(280)}
        >
          {c.titleLines.map((line, i) => (
            <span className="block" key={i}>
              <Parts parts={line} />
            </span>
          ))}
        </h1>

        <p
          className="hero-rise mt-5 max-w-[34rem] text-pretty font-sans text-[12px] leading-5 text-silver sm:mt-6 lg:max-w-[40rem]"
          style={delay(420)}
        >
          {c.description}
        </p>

        {c.stats && (
          <dl
            className="hero-rise mt-6 flex flex-wrap items-start justify-center gap-x-10 gap-y-4 sm:mt-8 sm:gap-x-12"
            style={delay(560)}
          >
            {c.stats.map((stat) => (
              <div
                className="flex flex-col-reverse items-center gap-1"
                key={stat.label}
              >
                <dt className="font-sans text-ui-label font-bold uppercase text-electric">
                  {stat.label}
                </dt>
                <dd className="font-display text-[26px] font-bold uppercase leading-none text-white sm:text-[30px]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  );
}