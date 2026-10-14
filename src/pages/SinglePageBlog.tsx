import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { BlogArticle } from "@/components/sections/BlogArticle";
import { BlogPostHero } from "@/components/sections/BlogPostHero";
import { FAQ } from "@/components/sections/FAQ";
import { ProductBrief } from "@/components/sections/ProductBrief";
import { Testimonials } from "@/components/sections/Testimonials";
import { blogsService, type ApiBlogPost } from "@/api";

export const SinglePageBlog = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<ApiBlogPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  useEffect(() => {
    if (!slug) return;

    let active = true;

    Promise.resolve().then(() => {
      if (active) {
        setIsLoading(true);
        setIsNotFound(false);
      }
    });

    blogsService
      .getBlogBySlug(slug)
      .then((data) => {
        if (!active) return;
        if (data) {
          setPost(data);
          setIsLoading(false);
          const pageTitle = data.seo?.title || data.meta?.title || data.title;
          if (pageTitle) {
            document.title = pageTitle.includes("Super Ace")
              ? pageTitle
              : `${pageTitle} | Super Ace International`;
          }
        } else {
          setIsNotFound(true);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!active) return;
        console.error("Failed to load blog post by slug:", err);
        setIsNotFound(true);
        setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  if (!isLoading && isNotFound && !post) {
    return (
      <PageLayout>
        <section className="bg-navy py-28 text-center text-white">
          <div className="mx-auto max-w-xl px-6">
            <h1 className="font-display text-4xl font-bold uppercase sm:text-5xl">
              Article Not Found
            </h1>
            <p className="mt-4 font-sans text-sm text-white/70">
              The article you are looking for does not exist or may have been moved.
            </p>
            <Link
              className="mt-8 inline-flex h-9 items-center rounded-[2px] border border-electric bg-electric px-6 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-electric/90"
              to="/blogs"
            >
              Back to all articles
            </Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <BlogPostHero post={post} />
      <BlogArticle post={post} />
      <Testimonials />
      <FAQ />
      <ProductBrief />
    </PageLayout>
  );
};