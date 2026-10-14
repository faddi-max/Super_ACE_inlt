import { CursorGlow, Reveal } from "@/components/animation";
import { ArticleBlocks } from "@/components/sections/ArticleBlocks";
import { ArticleChapters } from "@/components/sections/ArticleChapters";
import { ArticleMeta } from "@/components/sections/ArticleMeta";
import { BlogCard } from "@/components/sections/BlogCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { articleContent as c } from "@/content/blogArticle";
import { useScrollSpy } from "@/lib/useScrollSpy";
import type { ApiBlogPost } from "@/api";

const chapterIds = c.sections.map((section) => section.id);
const columns = "lg:grid-cols-[200px_minmax(0,720px)_180px] lg:justify-between";

type BlogArticleProps = {
  post?: ApiBlogPost | null;
};

export function BlogArticle({ post }: BlogArticleProps) {
  const activeId = useScrollSpy(chapterIds);

  const summary = post?.excerpt || c.summary;
  const stripMeta = post
    ? `${post.category?.name || "Manufacturing"} · ${new Date(
        post.published_at,
      ).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}`
    : c.stripMeta;

  return (
    // overflow-x-clip (not hidden) so the sidebars can stay sticky
    <section className="relative isolate overflow-x-clip bg-white text-navy">
      <CursorGlow />
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-0">
        {/* Intro strip */}
        <Reveal
          className={`grid items-start gap-5 border-b-[0.8px] border-navy/10 py-10 lg:py-[52px] ${columns}`}
        >
          <span className="font-display text-[56px] font-bold leading-[0.85] text-electric lg:text-[64px]">
            {c.index}
          </span>
          <p className="max-w-[560px] font-sans text-[13px] font-semibold leading-[22px] text-navy">
            {summary}
          </p>
          <div className="space-y-2 lg:text-right">
            <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-electric">
              {c.stripLabel}
            </p>
            <p className="font-sans text-[8px] font-semibold uppercase leading-3 tracking-[0.12em] text-mist">
              {stripMeta}
            </p>
          </div>
        </Reveal>

        <div
          className={`grid gap-10 pb-20 pt-10 lg:gap-0 lg:pb-[100px] lg:pt-[56px] ${columns}`}
        >
          {/* Left: sticky chapters */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <Reveal className="motion-reveal--left">
              <ArticleChapters activeId={activeId} />
            </Reveal>
          </aside>

          {/* Center: article */}
          <article className="min-w-0">
            <ArticleMeta
              className="mb-12 border-b-[0.8px] border-navy/10 pb-8 lg:hidden"
              post={post}
            />
            <ArticleBlocks post={post} />
          </article>

          {/* Right: sticky meta */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <Reveal delay={150}>
              <ArticleMeta post={post} />
            </Reveal>
          </aside>
        </div>

        {/* Related articles if returned from API */}
        {post?.related && post.related.length > 0 && (
          <div className="border-t border-navy/10 pb-20 pt-12">
            <Eyebrow className="text-[10px] tracking-[0.05em]">
              Related insights
            </Eyebrow>
            <Heading
              as="h3"
              className="mt-4 text-[32px] font-bold uppercase leading-tight text-navy"
            >
              More from{" "}
              <span className="text-electric">
                {post.category?.name || "the floor"}
              </span>
            </Heading>
            <ul className="mt-8 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
              {post.related.map((rel, idx) => (
                <li key={rel.slug || rel.id}>
                  <BlogCard number={idx + 1} post={rel} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}