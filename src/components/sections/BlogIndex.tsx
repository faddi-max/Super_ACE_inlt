import { useEffect, useState, useId } from "react";
import { ArrowRight, RefreshCw, Search } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { CursorGlow, Reveal } from "@/components/animation";
import { BlogCard } from "@/components/sections/BlogCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { blogListContent as c } from "@/content/blogs";
import {
  blogsService,
  type ApiBlogCategory,
  type ApiBlogPost,
  type ApiBlogPaginationMeta,
} from "@/api";
import { cn } from "@/lib/cn";
import { useBlogImage } from "@/lib/useBlogImage";

const eyebrowClass = "text-[10px] leading-[4px] tracking-[0.05em]";
const headingClass =
  "mt-[22px] text-[44px] leading-[39.16px] tracking-[0.44px] text-navy";

function FeaturedImage({
  src,
  alt,
  fallback,
}: {
  src?: string;
  alt: string;
  fallback: string;
}) {
  const { src: imageSrc, onError } = useBlogImage(src, fallback);

  return (
    <img
      alt={alt}
      className="size-full scale-100 object-cover transition-transform duration-[1400ms] ease-smooth motion-reduce:transition-none group-hover:scale-105"
      decoding="async"
      loading="lazy"
      onError={onError}
      src={imageSrc}
    />
  );
}

export function BlogIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("category") || "all";

  const [categories, setCategories] = useState<ApiBlogCategory[]>([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [blogs, setBlogs] = useState<ApiBlogPost[]>([]);
  const [pagination, setPagination] = useState<ApiBlogPaginationMeta | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const gridSectionId = useId();

  // Debounce search query input by 350ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setCurrentPage(1);
    }, 350);
    return () => clearTimeout(timer);
  }, [query]);

  // Fetch categories once on mount
  useEffect(() => {
    let active = true;
    blogsService
      .getBlogCategories()
      .then((data) => {
        if (active && Array.isArray(data) && data.length > 0) {
          setCategories(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load blog categories:", err);
      });
    return () => {
      active = false;
    };
  }, []);

  // Fetch blogs when filter, search, page or reloadKey changes
  useEffect(() => {
    let active = true;

    Promise.resolve().then(() => {
      if (active) {
        setIsLoading(true);
        setIsError(false);
      }
    });

    blogsService
      .getBlogs({
        category: filter === "all" ? undefined : filter,
        search: debouncedQuery.trim() || undefined,
        page: currentPage,
      })
      .then((res) => {
        if (active) {
          setBlogs(res.data || []);
          setPagination(res.meta || null);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          console.error("Failed to load blogs:", err);
          setIsError(true);
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [filter, debouncedQuery, currentPage, reloadKey]);

  const handleFilterClick = (slug: string) => {
    setCurrentPage(1);
    const nextParams = new URLSearchParams(searchParams);
    if (slug === "all") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", slug);
    }
    setSearchParams(nextParams, { replace: true });
  };

  const handleClearFilters = () => {
    setQuery("");
    setDebouncedQuery("");
    handleFilterClick("all");
  };

  const handleRetry = () => {
    setReloadKey((k) => k + 1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const element = document.getElementById(gridSectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Build filter options: "All" first, then API categories or static fallback
  const filterList = [
    { id: "all", label: "All" },
    ...(categories.length > 0
      ? categories.map((cat) => ({
          id: cat.slug,
          label: cat.name,
        }))
      : c.filters.filter((f) => f.id !== "all")),
  ];

  // Resolve featured story: prefer featured flag or first article from API
  const featuredBlog = blogs.find((b) => b.is_featured) || blogs[0] || null;
  const showFeaturedSection = filter === "all" && !debouncedQuery.trim();

  const featuredData = featuredBlog
    ? {
        eyebrow: c.featured.eyebrow,
        title: c.featured.title,
        category: featuredBlog.category?.name || c.featured.category,
        date: featuredBlog.published_at
          ? new Date(featuredBlog.published_at).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : c.featured.date,
        headline: featuredBlog.title,
        description: featuredBlog.excerpt,
        cta: c.featured.cta,
        image: featuredBlog.image || c.featured.image,
        imageAlt: featuredBlog.title,
        to: `/blogs/${featuredBlog.slug}`,
      }
    : c.featured;

  return (
    <>
      {/* Filter bar */}
      <div className="border-b border-white/10 bg-navy">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-6 py-4 md:h-[62px] md:flex-row md:items-center md:justify-between md:py-0 lg:px-0">
          <nav aria-label="Article categories" className="min-w-0">
            <ul className="-mx-6 flex gap-2 overflow-x-auto px-6 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
              {filterList.map((item) => {
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
                      onClick={() => handleFilterClick(item.id)}
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

      {/* Featured story (prominently displayed when viewing all categories without search) */}
      {showFeaturedSection && (
        <section className="relative isolate overflow-hidden bg-white pb-14 pt-14 text-navy lg:pb-[64px] lg:pt-[72px]">
          <CursorGlow />
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-0">
            <Reveal>
              <Eyebrow className={eyebrowClass}>{featuredData.eyebrow}</Eyebrow>
              <Heading as="h2" className={headingClass}>
                <span className="motion-mask">
                  <span className="motion-mask__line">{featuredData.title}</span>
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
                  <FeaturedImage
                    alt={featuredData.imageAlt}
                    fallback={c.featured.image}
                    src={featuredData.image}
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
                      {featuredData.category} / {featuredData.date}
                    </p>
                    <h3 className="mt-5 max-w-[432px] font-display text-[40px] font-bold uppercase leading-[1] sm:text-[44px] lg:text-[48px]">
                      {featuredData.headline}
                    </h3>
                    <p className="mt-5 max-w-[400px] font-sans text-[10px] leading-4 text-white/60 line-clamp-4 lg:text-[11px] lg:leading-5">
                      {featuredData.description}
                    </p>
                    <Link
                      className="group/cta mt-7 inline-flex items-center gap-2 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-white transition-colors duration-300 ease-smooth hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
                      to={featuredData.to}
                    >
                      {featuredData.cta}
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
      )}

      {/* From the floor / Latest insights grid */}
      <section
        className={cn(
          "relative isolate overflow-hidden bg-white pb-20 text-navy lg:pb-[100px]",
          showFeaturedSection ? "mt-5" : "pt-12 sm:pt-16",
        )}
        id={gridSectionId}
      >
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

          {/* Loading state skeleton */}
          {isLoading && (
            <ul className="mt-7 grid gap-1 sm:grid-cols-2 lg:mt-[30px] lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <li
                  className="relative flex h-[360px] animate-pulse flex-col justify-end overflow-hidden rounded-[3px] border border-white/5 bg-navy/90 p-6 sm:h-[400px] lg:h-[420px]"
                  key={i}
                >
                  <div className="space-y-3">
                    <div className="h-2 w-20 rounded bg-white/10" />
                    <div className="h-8 w-4/5 rounded bg-white/10" />
                    <div className="h-3 w-full rounded bg-white/5" />
                    <div className="h-3 w-2/3 rounded bg-white/5" />
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Error state */}
          {!isLoading && isError && (
            <div className="mt-10 rounded-[3px] border border-navy/10 bg-navy/5 p-8 text-center sm:p-12">
              <p className="font-sans text-[13px] font-medium text-navy/70">
                {c.error}
              </p>
              <button
                className="mt-4 inline-flex h-8 items-center gap-2 rounded-[2px] border border-electric bg-electric px-4 font-sans text-[9px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-electric/90"
                onClick={handleRetry}
                type="button"
              >
                <RefreshCw className="size-3" />
                {c.retry}
              </button>
            </div>
          )}

          {/* Empty state */}
          {!isLoading && !isError && blogs.length === 0 && (
            <div className="mt-10 rounded-[3px] border border-navy/10 bg-navy/5 p-8 text-center sm:p-12">
              <p className="font-sans text-body text-navy/60">{c.empty}</p>
              {(filter !== "all" || debouncedQuery) && (
                <button
                  className="mt-4 inline-flex h-8 items-center rounded-[2px] border border-electric bg-transparent px-4 font-sans text-[9px] font-bold uppercase tracking-[0.12em] text-electric transition-colors hover:bg-electric hover:text-white"
                  onClick={handleClearFilters}
                  type="button"
                >
                  {c.clearFilters}
                </button>
              )}
            </div>
          )}

          {/* Blogs grid */}
          {!isLoading && !isError && blogs.length > 0 && (
            <>
              <ul className="mt-7 grid gap-1 sm:grid-cols-2 lg:mt-[30px] lg:grid-cols-3">
                {blogs.map((post, i) => (
                  <li key={post.slug || post.id}>
                    <Reveal className="h-full" delay={(i % 3) * 90}>
                      <BlogCard
                        number={(pagination?.from ? pagination.from - 1 : 0) + i + 1}
                        post={post}
                      />
                    </Reveal>
                  </li>
                ))}
              </ul>

              {/* Pagination */}
              {pagination && pagination.last_page > 1 && (
                <nav
                  aria-label="Blog pagination"
                  className="mt-12 flex items-center justify-center gap-2"
                >
                  <button
                    aria-label={c.paginationPrev}
                    className="inline-flex h-9 items-center rounded-[2px] border border-navy/15 px-4 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-navy transition-colors hover:border-electric hover:text-electric disabled:pointer-events-none disabled:opacity-30"
                    disabled={currentPage <= 1 || isLoading}
                    onClick={() => handlePageChange(currentPage - 1)}
                    type="button"
                  >
                    {c.paginationPrev}
                  </button>

                  {Array.from({ length: pagination.last_page }, (_, idx) => {
                    const pageNum = idx + 1;
                    const isCurrent = pageNum === currentPage;
                    return (
                      <button
                        aria-current={isCurrent ? "page" : undefined}
                        className={cn(
                          "inline-flex size-9 items-center justify-center rounded-[2px] border font-sans text-[11px] font-bold transition-colors",
                          isCurrent
                            ? "border-electric bg-electric text-white"
                            : "border-navy/15 text-navy hover:border-electric hover:text-electric",
                        )}
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        type="button"
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    aria-label={c.paginationNext}
                    className="inline-flex h-9 items-center rounded-[2px] border border-navy/15 px-4 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-navy transition-colors hover:border-electric hover:text-electric disabled:pointer-events-none disabled:opacity-30"
                    disabled={currentPage >= pagination.last_page || isLoading}
                    onClick={() => handlePageChange(currentPage + 1)}
                    type="button"
                  >
                    {c.paginationNext}
                  </button>
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}