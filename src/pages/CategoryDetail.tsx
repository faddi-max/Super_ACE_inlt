import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Reveal } from "@/components/animation";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { useCategories } from "@/lib/useCategories";
import { useCategoryDetail } from "@/lib/useCategoryDetail";
import type { ApiCategory, ApiProduct } from "@/api";
import hero from "@/assets/images/categories/hero.jpg";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { cn } from "@/lib/cn";

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

// ── Children Grid (shown on parent page when category has sub-categories) ──

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

// ── Product Card ───────────────────────────────────────────────────────────

function ProductCard({ product, index }: { product: ApiProduct; index: number }) {
  return (
    <Reveal className="h-full" delay={60 + (index % 3) * 90}>
      <Link
        className="group relative block h-full overflow-hidden bg-navy outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric"
        to={`/categories/${product.category.slug}/${product.slug}`}
      >
        {product.image ? (
          <img
            alt={product.name}
            className="absolute inset-0 size-full scale-100 object-cover object-top transition-transform duration-[1200ms] ease-smooth group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
            decoding="async"
            loading="lazy"
            src={product.image}
          />
        ) : (
          <div className="absolute inset-0 size-full bg-navy/40" />
        )}

        {/* Resting gradient overlay */}
        <span aria-hidden="true" className="absolute inset-0 bg-product-card-overlay" />

        {/* Deeper wash on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/20 opacity-0 transition-opacity duration-700 ease-smooth group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        />

        {/* Accent line at bottom on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
        />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 sm:px-7 sm:pb-7">
          <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.2em] text-electric sm:text-[9px]">
            {product.sku}
          </p>
          <h3 className="mt-3 whitespace-pre-line font-display text-[30px] font-bold uppercase leading-[0.98] text-white transition-transform duration-500 ease-smooth group-hover:-translate-y-0.5 sm:text-[34px] sm:leading-[34px] motion-reduce:transition-none">
            {product.name}
          </h3>

          {/* Revealed on hover */}
          {product.short_description && (
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-smooth group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] motion-reduce:transition-none [@media(hover:none)]:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="translate-y-2 pt-3 opacity-0 transition-[opacity,transform] duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
                  <p className="max-w-[350px] font-sans text-[10px] leading-4 text-silver">
                    {product.short_description}
                  </p>
                  <span className="mt-3 flex items-center gap-1.5 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-white">
                    View Product
                    <ArrowRight
                      aria-hidden="true"
                      className="transition-transform duration-300 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none"
                      size={10}
                      strokeWidth={2.5}
                    />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </Reveal>
  );
}

// ── Products Grid Section ──────────────────────────────────────────────────

function ProductsGrid({
  categoryName,
  products,
  total,
  isLoading,
}: {
  categoryName: string;
  products: ApiProduct[];
  total: number;
  isLoading: boolean;
}) {
  return (
    <section aria-labelledby="cat-products-title" className="bg-white py-12 text-navy sm:py-14 lg:pb-16 lg:pt-16">
      <div className="mx-auto w-full max-w-[1248px] px-4 sm:px-6 lg:px-0">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric">
              {categoryName}
            </p>
            <h2
              className="mt-3 font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
              id="cat-products-title"
            >
              <span className="block">{categoryName}</span>
              <span className="block text-electric">Products</span>
            </h2>
          </div>
          {!isLoading && (
            <p className="flex items-center gap-2 font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.15em] text-steel">
              <span aria-hidden="true" className="size-1 bg-electric" />
              Showing {total} {total === 1 ? "product" : "products"}
            </p>
          )}
        </Reveal>

        {isLoading ? (
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-3 lg:gap-[18px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <li className="h-[400px] sm:h-[420px] lg:h-[460px] animate-pulse bg-navy/10 rounded-sm" key={i} />
            ))}
          </ul>
        ) : products.length === 0 ? (
          <p className="mt-12 border-y border-navy/10 py-16 text-center font-sans text-body text-steel">
            No products found in this category yet.
          </p>
        ) : (
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-3 lg:gap-[18px]">
            {products.map((product, i) => (
              <li className="h-[400px] sm:h-[420px] lg:h-[460px]" key={product.id}>
                <ProductCard index={i} product={product} />
              </li>
            ))}
          </ul>
        )}

        <Reveal className="mt-7 flex justify-center" delay={150}>
          <Link
            className="group inline-flex h-11 w-full max-w-72 items-center justify-center gap-2 rounded-[2px] bg-electric px-6 font-sans text-button font-semibold uppercase text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:h-9 sm:w-auto sm:max-w-none lg:min-w-[185px]"
            to="/contact"
          >
            Request a Sample
            <ArrowRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={12}
              strokeWidth={2.5}
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ── Pagination ─────────────────────────────────────────────────────────────

function Pagination({
  currentPage,
  lastPage,
  onPage,
}: {
  currentPage: number;
  lastPage: number;
  onPage: (page: number) => void;
}) {
  if (lastPage <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <button
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-[2px] border font-sans text-[11px] font-semibold transition-colors duration-200",
          currentPage === 1
            ? "cursor-not-allowed border-navy/10 text-navy/30"
            : "border-navy/20 text-navy hover:border-electric hover:text-electric",
        )}
        disabled={currentPage === 1}
        onClick={() => onPage(currentPage - 1)}
        type="button"
      >
        ‹
      </button>

      {Array.from({ length: lastPage }, (_, i) => i + 1).map((p) => (
        <button
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-[2px] border font-sans text-[11px] font-semibold transition-colors duration-200",
            p === currentPage
              ? "border-electric bg-electric text-white"
              : "border-navy/20 text-navy hover:border-electric hover:text-electric",
          )}
          key={p}
          onClick={() => onPage(p)}
          type="button"
        >
          {p}
        </button>
      ))}

      <button
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-[2px] border font-sans text-[11px] font-semibold transition-colors duration-200",
          currentPage === lastPage
            ? "cursor-not-allowed border-navy/10 text-navy/30"
            : "border-navy/20 text-navy hover:border-electric hover:text-electric",
        )}
        disabled={currentPage === lastPage}
        onClick={() => onPage(currentPage + 1)}
        type="button"
      >
        ›
      </button>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function CategoryDetail() {
  const { slug, childSlug } = useParams<{ slug: string; childSlug?: string }>();

  // Determine which slug to fetch: child takes priority when present
  const activeSlug = childSlug ?? slug;

  const { category, products, pagination, status, loadPage } = useCategoryDetail(activeSlug);
  const { categories, status: catStatus } = useCategories();

  // Loading skeleton — show while either the tree or detail is being fetched
  const isLoading = status === "loading" || status === "idle";
  const isDetailLoading = status === "loading";

  if (isLoading && !category) {
    return (
      <PageLayout>
        <div className="flex min-h-[60vh] items-center justify-center bg-navy">
          <span className="animate-pulse font-display text-[18px] uppercase tracking-[0.2em] text-silver">
            Loading…
          </span>
        </div>
      </PageLayout>
    );
  }

  // If detail loaded but category not found, fall back to tree lookup, then redirect
  if (status === "error" || (!category && status === "success")) {
    // Try to find from the preloaded tree as a fallback
    if (catStatus !== "success") {
      return (
        <PageLayout>
          <div className="flex min-h-[60vh] items-center justify-center bg-navy">
            <span className="animate-pulse font-display text-[18px] uppercase tracking-[0.2em] text-silver">
              Loading…
            </span>
          </div>
        </PageLayout>
      );
    }
    return <Navigate replace to="/categories" />;
  }

  if (!category) return null;

  // For the hero: if we navigated via /categories/:slug/:childSlug, show parent context
  // The detail API is fetched for the active slug (child), so category IS the child
  // We'll use the category.parent from the API for breadcrumb context
  const parentCategory = childSlug && category.parent
    ? ({ ...category.parent, children: [], parent_id: null, subheading: null, description: null, image: null, products_count: 0, meta: { title: null, description: null } } as ApiCategory)
    : null;

  // Build what the hero renders as "parent" / "child"
  const heroParent = parentCategory ?? category;
  const heroChild = parentCategory ? category : undefined;

  return (
    <PageLayout>
      <CategoryHero category={heroParent} child={heroChild} />

      {/* Sub-categories grid: only on parent pages that have children */}
      {!childSlug && <ChildrenGrid category={category} />}

      {/* Live products from the API */}
      <ProductsGrid
        categoryName={category.name}
        isLoading={isDetailLoading}
        products={products}
        total={pagination?.total ?? 0}
      />

      {/* Pagination */}
      {pagination && (
        <div className="bg-white pb-12">
          <Pagination
            currentPage={pagination.current_page}
            lastPage={pagination.last_page}
            onPage={loadPage}
          />
        </div>
      )}

      <Testimonials />
      <FAQ />
      <ProductBrief />
    </PageLayout>
  );
}
