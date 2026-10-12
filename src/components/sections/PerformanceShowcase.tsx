import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  aboutPerformanceContent as c,
  type PerformancePhoto,
} from "@/content/aboutPerformance";
import { cn } from "@/lib/cn";

const card = "border border-navy/10 bg-white";

function PhotoCard({
  photo,
  className,
}: {
  photo: PerformancePhoto;
  className?: string;
}) {
  return (
    <figure
      className={cn("group relative isolate overflow-hidden bg-navy", className)}
    >
      <img
        alt={photo.imageAlt}
        className="absolute inset-0 -z-20 size-full scale-100 object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105 motion-reduce:transition-none"
        decoding="async"
        loading="lazy"
        src={photo.image}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-navy/85 via-navy/10 to-transparent"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
      />
      <figcaption className="absolute inset-x-0 bottom-0 px-[22px] pb-[22px]">
        <p className="font-sans text-[8px] font-extrabold uppercase leading-[10px] tracking-[0.2em] text-electric">
          {photo.eyebrow}
        </p>
        <p className="mt-2 font-display text-[26px] font-bold uppercase leading-8 text-white sm:text-[32px]">
          {photo.title}
        </p>
      </figcaption>
    </figure>
  );
}

export function PerformanceShowcase() {
  return (
    <section
      aria-labelledby="performance-title"
      className="relative isolate overflow-hidden bg-white py-14 text-navy sm:py-16 lg:py-[88px]"
    >
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 xl:px-0">
        <Reveal>
          <Eyebrow className="text-[9px] leading-none tracking-[0.05em] sm:text-[10px]">
            {c.eyebrow}
          </Eyebrow>
          <h2
            className="mt-3.5 font-display text-[36px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[40px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
            id="performance-title"
          >
            <span className="block">{c.titleLead}</span>
            <span className="block">
              {c.titleRest} <span className="text-electric">{c.titleAccent}</span>
            </span>
          </h2>
        </Reveal>

        {/* Row 1: 679 + 502, gap 18, 594 tall (299 + 277 on the right) */}
        <div className="mt-8 grid gap-3 sm:mt-10 lg:mt-[51px] lg:grid-cols-[679fr_502fr] lg:gap-[18px] xl:h-[594px]">
          <Reveal className="h-full" delay={100}>
            <article
              className={cn(
                card,
                "relative isolate h-full overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-[41px] lg:pb-[39px] lg:pt-[42px]",
              )}
            >
              {/* Faint electric wash, top-left */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-cta-card-glow opacity-60"
              />
              {/* Bold chevron watermark behind the tiles */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-12 -right-10 -z-10 w-[240px] text-navy/[0.04] sm:w-[300px] lg:bottom-auto lg:left-[281px] lg:right-auto lg:top-[171px] lg:w-[340px]"
                fill="currentColor"
                viewBox="0 0 340 260"
              >
                <path d="M0 200 170 30 340 200v60L170 90 0 260Z" />
              </svg>

              <Eyebrow>{c.main.eyebrow}</Eyebrow>
              <h3 className="mt-5 font-display text-[40px] font-bold uppercase leading-[0.9] sm:text-[48px] lg:mt-[26px] xl:text-[56px] xl:leading-[49px]">
                {c.main.title.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </h3>
              <p className="mt-4 max-w-[580px] font-sans text-[12px] leading-[22px] text-steel sm:text-[13px] sm:leading-[26px]">
                {c.main.description}
              </p>

              <ul className="mt-7 grid max-w-[598px] gap-3 sm:grid-cols-2 lg:mt-[35px]">
                {c.main.features.map((f) => (
                  <li
                    className="min-h-[94px] border-l-2 border-electric bg-cloud px-5 pb-4 pt-[22px] transition-transform duration-300 ease-smooth hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    key={f.title}
                  >
                    <p className="font-display text-[18px] font-bold uppercase leading-[18px] text-navy">
                      {f.title}
                    </p>
                    <p className="mt-1.5 max-w-[240px] font-sans text-[9px] leading-4 text-steel">
                      {f.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-[18px] xl:h-full xl:grid-rows-[299px_277px]">
            {c.side.map((item, i) => (
              <li className="min-w-0" key={item.title}>
                <Reveal className="h-full" delay={180 + i * 90}>
                  <article className={cn(card, "h-full px-5 py-7 sm:px-7 lg:px-[33px] lg:pt-8")}>
                    <Eyebrow>{item.eyebrow}</Eyebrow>
                    <h3 className="mt-[7px] font-display text-[28px] font-bold uppercase leading-8 sm:text-[32px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[440px] font-sans text-[11px] leading-[22px] text-steel">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2: 740 + 443, gap 16, 584 tall (284 + 284 on the right) */}
        <div className="mt-3 grid gap-3 lg:mt-12 lg:grid-cols-[740fr_443fr] lg:gap-4 lg:h-[500px] xl:h-[584px]">
          <Reveal className="h-full" delay={120}>
            <PhotoCard
              className="h-full min-h-[340px] sm:min-h-[420px] lg:min-h-0"
              photo={c.photos.large}
            />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:gap-4">
            {c.photos.small.map((photo, i) => (
              <Reveal className="h-full" delay={200 + i * 90} key={photo.title}>
                <PhotoCard
                  className="h-full min-h-[240px] lg:min-h-0"
                  photo={photo}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}