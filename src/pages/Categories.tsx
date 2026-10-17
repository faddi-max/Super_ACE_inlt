import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { PageLayout } from "@/components/layout/PageLayout";
import { BuyerTypes } from "@/components/sections/BuyerTypes";
import { CategoriesHero } from "@/components/sections/CategoriesHero";
import { CategoriesIntro } from "@/components/sections/CategoriesIntro";
import { CustomerJourney } from "@/components/sections/CustomerJourney";
import { Customization } from "@/components/sections/Customization";
import { FAQ } from "@/components/sections/FAQ";
import { HowWeManufacture } from "@/components/sections/HowWeManufacture";
import { ManufacturingVisuals } from "@/components/sections/ManufacturingVisuals";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { ProductDevelopment } from "@/components/sections/ProductDevelopment";
import { SportProducts } from "@/components/sections/SportProducts";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reveal } from "@/components/animation";

import { cn } from "@/lib/cn";
import { useCategoryDetail } from "@/lib/useCategoryDetail";
import type { ApiProduct } from "@/api";

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

        {/* Accent line sweeps at bottom on hover */}
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

// ── Dynamic Category Section ───────────────────────────────────────────────

function DynamicCategorySection({
  onCategoryReady,
}: {
  onCategoryReady: (name: string, parentName: string) => void;
}) {
  const { slug, childSlug } = useParams<{ slug: string; childSlug?: string }>();
  const activeSlug = childSlug ?? slug;

  const { category, products, pagination, status, loadPage } = useCategoryDetail(activeSlug);

  const isLoading = status === "idle" || status === "loading";

  // Lift category name up to the page so the hero can use it
  const categoryName = category?.name ?? "";
  const parentName = category?.parent?.name ?? "Super Ace International";

  // Notify parent once we have the name
  if (!isLoading && categoryName) {
    onCategoryReady(categoryName, parentName);
  }

  return (
    <>
      {/* ── Products grid ── */}
      <section
        aria-labelledby="cat-products-title"
        className="bg-white py-12 text-navy sm:py-14 lg:pb-16 lg:pt-16"
        id="categories"
      >
        <div className="mx-auto w-full max-w-[1248px] px-4 sm:px-6 lg:px-0">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-[9px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric">
                {isLoading ? "\u00a0" : categoryName}
              </p>
              <h2
                className="mt-3 font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px]"
                id="cat-products-title"
              >
                <span className="block">{isLoading ? "\u00a0" : categoryName}</span>
                <span className="block text-electric">Products</span>
              </h2>
            </div>
            {!isLoading && pagination && (
              <p className="flex items-center gap-2 font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.15em] text-steel">
                <span aria-hidden="true" className="size-1 bg-electric" />
                {pagination.total} {pagination.total === 1 ? "product" : "products"}
              </p>
            )}
          </Reveal>

          {isLoading ? (
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-3 lg:gap-[18px]">
              {Array.from({ length: 3 }).map((_, i) => (
                <li
                  className="h-[400px] animate-pulse rounded-sm bg-navy/10 sm:h-[420px] lg:h-[460px]"
                  key={i}
                />
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

          {/* Pagination */}
          {pagination && (
            <Pagination
              currentPage={pagination.current_page}
              lastPage={pagination.last_page}
              onPage={loadPage}
            />
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
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function Categories() {
  const { slug } = useParams<{ slug?: string }>();
  const hasSlug = Boolean(slug);

  // Lifted state: hero reads category name once the API responds
  const [heroCategoryName, setHeroCategoryName] = useState<string | undefined>(undefined);
  const [heroParentName, setHeroParentName] = useState<string | undefined>(undefined);

  // Reset when slug changes so the hero reverts to static until new data loads
  const prevSlug = useRef(slug);
  if (prevSlug.current !== slug) {
    prevSlug.current = slug;
    setHeroCategoryName(undefined);
    setHeroParentName(undefined);
  }

  return (
    <PageLayout>
      <CategoriesHero
        categoryName={hasSlug ? heroCategoryName : undefined}
        parentName={hasSlug ? heroParentName : undefined}
      />
      <CategoriesIntro />

      {hasSlug ? (
        <DynamicCategorySection
          onCategoryReady={(name, parent) => {
            setHeroCategoryName(name);
            setHeroParentName(parent);
          }}
        />
      ) : (
        <>
          <div id="categories" />
          <SportProducts />
        </>
      )}

      <ProductDevelopment />
      <HowWeManufacture />
      <CustomerJourney />
      <BuyerTypes />
      <Customization />
      <ManufacturingVisuals />
      <Testimonials />
      <FAQ />
      <ProductBrief />
    </PageLayout>
  );
}