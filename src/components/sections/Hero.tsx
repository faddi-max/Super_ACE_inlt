import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroContent as c } from "@/content/hero";
import { images } from "@/assets/images";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { HeroStats } from "./HeroStats";
import { HeroEyebrow } from "./HeroEyebrow";

/**
 * Figma: 1440 × 770 · top 79 · bg navy
 * Vertical rhythm (desktop): eyebrow centre y≈124, headline top y≈162,
 * paragraph top y≈489, tags top y≈561, buttons top y≈606.
 * Entrance animation lives in `components/animation/motion.css` (.hero-*).
 */
const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[min(100svh,640px)] w-full overflow-hidden bg-navy text-white sm:min-h-[700px] lg:min-h-[838px]">
      <img
        alt=""
        aria-hidden="true"
        className="hero-settle absolute inset-0 -z-20 size-full object-cover object-top"
        src={images.homehero}
      />
      <img
        alt=""
        aria-hidden="true"
        className="hero-fade absolute inset-0 -z-10 size-full object-cover mix-blend-screen"
        src={images.herooveraly}
      />
      <div
        aria-hidden="true"
        className="hero-fade absolute inset-0 -z-10 bg-hero-shade"
      />

      <Container className="flex flex-col items-center pb-16 pt-20 text-center sm:pt-[122px]">
        <div
          className="hero-rise font-montserrat text-nav font-extrabold uppercase leading-1 tracking-[0.05em]"
          style={delay(200)}
        >
          <HeroEyebrow />
        </div>

        <h1 className="mt-5 font-display text-[clamp(2.75rem,12vw,3.5rem)] text-[96px] leading-[0.9] font-bold uppercase sm:mt-9 md:text-hero">
          {c.headline.map((line, index) => (
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
          className="hero-rise mt-4 max-w-[600px] px-2 text-[15px] text-silver sm:mt-5 sm:px-0"
          style={delay(900)}
        >
          {c.description}
        </p>

        <ul
          className="hero-rise mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-montserrat text-[12px] font-semibold uppercase text-silver sm:mt-9"
          style={delay(1020)}
        >
          {c.tags.map((tag, index) => (
            <li key={tag} className="flex items-center gap-3">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="size-0.75 rounded-full bg-electric"
                />
              )}
              {tag}
            </li>
          ))}
        </ul>

        <div
          className="hero-rise mt-6 flex w-full max-w-72 flex-col items-center justify-center gap-2 sm:mt-9 sm:w-auto sm:max-w-none sm:flex-row sm:gap-3"
          style={delay(1140)}
        >
          <Link
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xs bg-electric px-6 font-montserrat text-button font-semibold uppercase text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:h-10 sm:w-auto"
            to={c.primaryCta.to}
          >
            {c.primaryCta.label}
            <ArrowRight aria-hidden="true" size={12} strokeWidth={2.5} />
          </Link>
          <Link
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xs border border-silver/60 px-6 font-montserrat text-button font-semibold uppercase text-white transition-colors hover:border-electric hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:h-10 sm:w-auto"
            to={c.secondaryCta.to}
          >
            {c.secondaryCta.label}
            <ArrowRight aria-hidden="true" size={12} strokeWidth={2.5} />
          </Link>
        </div>
        <HeroStats />
      </Container>

      <p
        className="hero-rise absolute bottom-3 right-4 font-montserrat text-caption font-semibold uppercase tracking-[0.16em] text-white/60 sm:bottom-5 sm:right-6 lg:right-15"
        style={delay(1400)}
      >
        {c.caption}
      </p>
    </section>
  );
}
