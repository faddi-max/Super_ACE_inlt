import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { blogPostHeroContent as c } from "@/content/blogPost";

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

export function BlogPostHero() {
  return (
    <section className="relative isolate flex w-full overflow-hidden bg-navy text-white lg:min-h-[693px]">
      {/* Background frame: glow + grid are part of the image */}
      <div
        aria-hidden="true"
        className="hero-fade absolute inset-0 -z-10 bg-cover bg-[position:25%_center] bg-no-repeat lg:bg-center"
        style={{ backgroundImage: `url(${c.grid})` }}
      />

      <Container className="grid items-center gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-6 lg:py-20">
        <div>
          <Eyebrow className="hero-rise text-white" style={delay(150)}>
            {c.category} <span className="text-white/60">/ {c.label}</span>
          </Eyebrow>

          <h1 className="mt-5 font-display text-[clamp(2.25rem,9.5vw,3.5rem)] font-bold uppercase leading-[1.02] sm:mt-6 sm:leading-[1.05] lg:text-[72px] lg:leading-[78px]">
            {c.title.map((line, index) => (
              <span
                className="hero-rise block"
                key={line.text}
                style={delay(300 + index * 110)}
              >
                {line.text}
                {line.accentWord && (
                  <>
                    {" "}
                    <span className="text-electric">{line.accentWord}</span>
                  </>
                )}
              </span>
            ))}
          </h1>

          <p
            className="hero-rise mt-5 max-w-[470px] font-sans text-[12px] leading-5 text-mist sm:mt-7 sm:text-[13px] sm:leading-[22px]"
            style={delay(800)}
          >
            {c.description}
          </p>

          <ul
            className="hero-rise mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[9px] font-bold uppercase leading-none tracking-[0.15em] text-mist sm:mt-10 sm:gap-x-5 sm:text-[8px] lg:mt-14"
            style={delay(950)}
          >
            {c.meta.map((item, index) => (
              <li className={index === 0 ? "text-white" : undefined} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="hero-settle relative mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none"
          style={delay(400)}
        >
          <img
            alt={c.imageAlt}
            className="motion-float size-full object-contain"
            src={c.image}
          />
        </div>
      </Container>
    </section>
  );
}