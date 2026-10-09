import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { blogHeroContent as c } from "@/content/blogs";
import { cn } from "@/lib/cn";

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

export function BlogHero() {
  return (
    <section className="relative isolate flex min-h-[420px] w-full overflow-hidden bg-navy text-white sm:min-h-[520px] lg:min-h-[600px]">
      <img
        alt=""
        aria-hidden="true"
        className="hero-settle absolute inset-0 -z-20 size-full object-cover object-center"
        src={c.image}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/70" />
      <div
        aria-hidden="true"
        className="hero-fade absolute inset-0 -z-10 bg-hero-shade"
      />

      <Container className="flex flex-col items-center justify-center py-16 text-center">
        <Eyebrow
          className="hero-rise text-white"
          style={delay(200)}
        >
          {c.eyebrow}
        </Eyebrow>

        <h1 className="mt-5 font-display text-[clamp(2.75rem,10vw,4.5rem)] font-bold uppercase leading-[0.9] md:text-[80px] lg:text-[88px]">
          {c.title.map((line, index) => (
            <span
              key={line.text}
              className={cn(
                "hero-rise block",
                line.accent ? "text-electric" : "text-white",
              )}
              style={delay(350 + index * 120)}
            >
              {line.text}
            </span>
          ))}
        </h1>

        <p
          className="hero-rise mt-6 max-w-[520px] px-2 text-small text-silver sm:px-0"
          style={delay(800)}
        >
          {c.description}
        </p>
      </Container>
    </section>
  );
}