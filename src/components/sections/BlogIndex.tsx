import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { CursorGlow, Reveal } from "@/components/animation";
import { BlogCard } from "@/components/sections/BlogCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { blogListContent as c, type BlogFilter } from "@/content/blogs";
import { cn } from "@/lib/cn";

const eyebrowClass = "text-[10px] leading-[4px] tracking-[0.05em]";
const headingClass =
  "mt-[22px] text-[44px] leading-[39.16px] tracking-[0.44px] text-navy";

export function BlogIndex() {
  const [filter, setFilter] = useState<BlogFilter>("all");
  const [query, setQuery] = useState("");
  const f = c.featured;

  const term = query.trim().toLowerCase();
  const visible = c.posts.filter(
    (post) =>
      (filter === "all" || post.category === filter) &&
      (!term || post.title.toLowerCase().includes(term)),
  );

  return (
    <>
      {/* Filter bar */}
      <div className="border-b border-white/10 bg-navy">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-6 py-4 md:h-[62px] md:flex-row md:items-center md:justify-between md:py-0 lg:px-0">
          <nav aria-label="Article categories" className="min-w-0">
            <ul className="-mx-6 flex gap-2 overflow-x-auto px-6 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
              {c.filters.map((item) => {
                const isActive = item.id === filter;
                return (
                  <li className="shrink-0" key={item.id}>
                    <button
                      aria-pressed={isActive}
                      className={cn(
                        "inline-flex h-8 items-center rounded-[2px] border px-4 font-sans text-[9px] font-bold uppercase tracking-[0.12em] transition-[background-color,border-color,color,transform] duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none",
                        isActive
                          ? "border-electric bg-electric text-white"
                          : "border-white/15 text-white hover:-translate-y-0.5 hover:border-electric hover:text-electric motion-reduce:hover:translate-y-0",
                      )}
                      onClick={() => setFilter(item.id)}
                      type="button"
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <label className="group relative block md:w-[280px]">
            <span className="sr-only">{c.searchLabel}</span>
            <input
              className="h-9 w-full rounded-[2px] border border-white/10 bg-white/5 pl-4 pr-10 font-sans text-[10px] text-white transition-[border-color,background-color] duration-300 ease-smooth placeholder:text-mist focus:border-electric focus-visible:outline-none"
              onChange={(e) => setQuery(e.target.value)}
              placeholder={c.searchPlaceholder}
              type="search"
              value={query}
            />
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-electric transition-transform duration-300 group-focus-within:scale-110"
              size={12}
              strokeWidth={2.5}
            />
          </label>
        </div>
      </div>

      {/* Featured story */}
      <section className="relative isolate overflow-hidden bg-white pb-14 pt-14 text-navy lg:pb-[64px] lg:pt-[72px]">
        <CursorGlow />
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-0">
          <Reveal>
            <Eyebrow className={eyebrowClass}>{f.eyebrow}</Eyebrow>
            <Heading as="h2" className={headingClass}>
              <span className="motion-mask">
                <span className="motion-mask__line">{f.title}</span>
              </span>
            </Heading>
          </Reveal>

          {/* Card: 1200 x 463.75, min 460, radius 3, 2 columns */}
          <Reveal
            className="motion-reveal--zoom mt-7 lg:mt-[30px]"
            delay={120}
          >
            <article className="group grid min-h-[460px] overflow-hidden rounded-[3px] bg-navy text-white lg:h-[463.75px] lg:grid-cols-[56fr_44fr]">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <img
                  alt={f.imageAlt}
                  className="size-full scale-100 object-cover transition-transform duration-[1400ms] ease-smooth motion-reduce:transition-none group-hover:scale-105"
                  src={f.image}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 hidden w-24 bg-linear-to-r from-transparent to-navy/40 lg:block"
                />
              </div>

              <div className="relative flex flex-col justify-center bg-feature-panel p-8 sm:p-10 lg:px-12">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth motion-reduce:transition-none group-hover:scale-x-100"
                />
                <Reveal delay={260}>
                  <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-electric">
                    {f.category} / {f.date}
                  </p>
                  <h3 className="mt-5 max-w-[432px] font-display text-[40px] font-bold uppercase leading-[1] sm:text-[44px] lg:text-[48px]">
                    {f.headline}
                  </h3>
                  <p className="mt-5 max-w-[400px] font-sans text-[10px] leading-4 text-white/60 lg:text-[11px] lg:leading-5">
                    {f.description}
                  </p>
                  <Link
                    className="group/cta mt-7 inline-flex items-center gap-2 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-white transition-colors duration-300 ease-smooth hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
                    to={f.to}
                  >
                    {f.cta}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-[9px] text-electric transition-transform duration-300 ease-smooth group-hover/cta:translate-x-1.5 motion-reduce:transition-none"
                      strokeWidth={2.5}
                    />
                  </Link>
                </Reveal>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* From the floor */}
      <section className="relative isolate overflow-hidden bg-white pb-20 text-navy mt-5 lg:pb-[100px]">
        <CursorGlow />
        <div className="mx-auto w-full max-w-[1200px] px-6 py-5 lg:px-0">
          <Reveal>
            <Eyebrow className={eyebrowClass}>{c.grid.eyebrow}</Eyebrow>
            <Heading as="h2" className={headingClass}>
              <span className="motion-mask">
                <span className="motion-mask__line">
                  {c.grid.titleLead}{" "}
                  <span className="text-electric">{c.grid.titleAccent}</span>
                </span>
              </span>
            </Heading>
          </Reveal>

          {visible.length === 0 ? (
            <p className="mt-10 font-sans text-body text-navy/50">{c.empty}</p>
          ) : (
            <ul className="mt-7 grid gap-1 sm:grid-cols-2 lg:mt-[30px] lg:grid-cols-3">
              {visible.map((post, i) => (
                <li key={`${filter}-${post.slug}`}>
                  <Reveal className="h-full" delay={(i % 3) * 90}>
                    <BlogCard number={c.posts.indexOf(post) + 1} post={post} />
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}