import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Reveal } from "@/components/animation";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { useCategories } from "@/lib/useCategories";
import type { ApiCategory } from "@/api";
import hero from "@/assets/images/categories/hero.jpg";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

const buttonBase =
  "group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xs px-6 font-sans text-button font-semibold uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:w-auto";

// ── Hero ──────────────────────────────────────────────────────────────────

function CategoryHero({ category, child }: { category: ApiCategory; child?: ApiCategory }) {
  const displayName = child ? child.name : category.name;
  const eyebrow = child
    ? [category.name, "/", child.name]
    : ["Super Ace International", "/", category.name];

  return (
    <section
      aria-labelledby="cat-detail-hero-title"
      className="relative isolate flex min-h-[min(100svh,520px)] w-full items-center overflow-hidden bg-navy text-white sm:min-h-[480px] lg:min-h-[522px]"
    >
      <img
        alt={`${displayName} sportswear manufacturing`}
        className="hero-settle absolute inset-0 -z-20 size-full object-cover object-[40%_top] md:object-top"
        decoding="async"
        src={hero}
      />
      <div aria-hidden="true" className="hero-fade absolute inset-0 -z-10 bg-navy/80 sm:bg-navy/70" />
      <div aria-hidden="true" className="hero-fade absolute inset-0 -z-10 bg-hero-shade" />

      <Container className="flex min-w-0 max-w-360 flex-col items-center px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-30 lg:py-20">
        <p
          className="hero-rise flex min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-sans text-eyebrow font-extrabold uppercase tracking-[0.18em] text-white sm:tracking-[0.22em]"
          style={delay(150)}
        >
          {eyebrow.map((part, i) => (
            <span className={part === child?.name || part === category.name ? "text-electric" : ""} key={i}>
              {part}
            </span>
          ))}
        </p>

        <h1
          className="hero-rise mt-4 w-full min-w-0 max-w-full text-balance font-display text-[clamp(1.875rem,9vw,5rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] [overflow-wrap:anywhere] sm:mt-5 sm:tracking-[0.44px] lg:leading-none"
          id="cat-detail-hero-title"
          style={delay(280)}
        >
          {displayName}
        </h1>

        <p
          className="hero-rise mt-4 max-w-[34rem] text-pretty font-sans text-[12px] leading-5 text-silver sm:mt-5 sm:text-[13px] sm:leading-[22px] lg:text-[14px] lg:leading-6"
          style={delay(420)}
        >
          {category.description ||
            `Explore ${displayName} products manufactured by Super Ace International — built to specification, quality-controlled, and export-ready.`}
        </p>

        <Reveal
          className="mt-6 flex w-full max-w-xs flex-col items-stretch gap-2.5 sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-3"
          delay={200}
        >
          <Link
            className={`${buttonBase} bg-electric text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-navy`}
            to="/contact"
          >
            Start a Brief
            <ArrowRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" size={12} strokeWidth={2.5} />
          </Link>
          <Link
            className={`${buttonBase} border border-silver/60 text-white transition-colors duration-300 hover:border-electric hover:text-electric`}
            to="/categories"
          >
            All Categories
            <ArrowRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" size={12} strokeWidth={2.5} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

// ── Children Grid (shown on parent page) ─────────────────────────────────

function ChildrenGrid({ category }: { category: ApiCategory }) {
  if (!category.children.length) return null;
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container className="max-w-360 px-5 sm:px-8 lg:px-30">
        <Reveal>
          <p className="font-sans text-[9px] font-extrabold uppercase tracking-[0.16em] text-electric">
            {category.name}
          </p>
          <h2 className="mt-3 font-display text-[32px] font-bold uppercase leading-[1.05] text-navy sm:text-[44px]">
            Explore Sub-Categories
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {category.children.map((child, i) => (
            <Reveal delay={i * 80} key={child.id}>
              <li>
                <Link
                  className="group flex h-full min-h-[140px] flex-col justify-between rounded-[4px] border border-navy/10 bg-panel p-6 transition-all duration-300 hover:border-electric hover:shadow-lg hover:shadow-electric/10"
                  to={`/categories/${category.slug}/${child.slug}`}
                >
                  <span className="font-display text-[20px] font-bold uppercase leading-tight text-navy transition-colors group-hover:text-electric">
                    {child.name}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-[9px] font-bold uppercase tracking-[0.14em] text-electric">
                    Explore
                    <ArrowRight
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      size={10}
                      strokeWidth={2.5}
                    />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function CategoryDetail() {
  const { slug, childSlug } = useParams<{ slug: string; childSlug?: string }>();
  const { categories, status } = useCategories();

  // Loading skeleton
  if (status === "loading" || status === "idle") {
    return (
      <PageLayout>
        <div className="flex min-h-[60vh] items-center justify-center bg-navy">
          <span className="font-display text-[18px] uppercase tracking-[0.2em] text-silver animate-pulse">
            Loading…
          </span>
        </div>
      </PageLayout>
    );
  }

  // Find parent category
  const category = categories.find((c) => c.slug === slug);

  // If category not found after successful fetch, redirect to /categories
  if (!category) {
    return <Navigate replace to="/categories" />;
  }

  // Find child if childSlug present
  const child = childSlug
    ? category.children.find((c) => c.slug === childSlug)
    : undefined;

  // If child slug given but not found, redirect to parent
  if (childSlug && !child) {
    return <Navigate replace to={`/categories/${slug}`} />;
  }

  return (
    <PageLayout>
      <CategoryHero category={category} child={child} />
      {/* Show subcategory grid only on the parent page, not on child pages */}
      {!child && <ChildrenGrid category={category} />}
      <Testimonials />
      <FAQ />
      <ProductBrief />
    </PageLayout>
  );
}
