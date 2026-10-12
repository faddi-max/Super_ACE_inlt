import { CursorGlow, Reveal } from "@/components/animation";
import { ArticleBlocks } from "@/components/sections/ArticleBlocks";
import { ArticleChapters } from "@/components/sections/ArticleChapters";
import { ArticleMeta } from "@/components/sections/ArticleMeta";
import { articleContent as c } from "@/content/blogArticle";
import { useScrollSpy } from "@/lib/useScrollSpy";

const chapterIds = c.sections.map((section) => section.id);
const columns = "lg:grid-cols-[200px_minmax(0,720px)_180px] lg:justify-between";

export function BlogArticle() {
  const activeId = useScrollSpy(chapterIds);

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
            {c.summary}
          </p>
          <div className="space-y-2 lg:text-right">
            <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-electric">
              {c.stripLabel}
            </p>
            <p className="font-sans text-[8px] font-semibold uppercase leading-3 tracking-[0.12em] text-mist">
              {c.stripMeta}
            </p>
          </div>
        </Reveal>

        <div className={`grid gap-10 pb-20 pt-10 lg:gap-0 lg:pb-[100px] lg:pt-[56px] ${columns}`}>
          {/* Left: sticky chapters */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <Reveal className="motion-reveal--left">
              <ArticleChapters activeId={activeId} />
            </Reveal>
          </aside>

          {/* Center: article */}
          <article className="min-w-0">
            <ArticleMeta className="mb-12 border-b-[0.8px] border-navy/10 pb-8 lg:hidden" />
            <ArticleBlocks />
          </article>

          {/* Right: sticky meta */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <Reveal delay={150}>
              <ArticleMeta />
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}