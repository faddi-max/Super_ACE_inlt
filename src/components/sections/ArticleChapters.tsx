import { Link } from "react-router-dom";
import { articleContent as c } from "@/content/blogArticle";
import { cn } from "@/lib/cn";

const label =
  "font-sans text-[8px] font-extrabold uppercase leading-[10px] tracking-[0.15em] text-electric";

type ArticleChaptersProps = { activeId: string };

export function ArticleChapters({ activeId }: ArticleChaptersProps) {
  const count = c.sections.length;
  const activeIndex = Math.max(
    c.sections.findIndex((section) => section.id === activeId),
    0,
  );

  const goTo = (id: string) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <div className="space-y-10">
      <nav aria-label={c.chaptersLabel}>
        <p className={label}>{c.chaptersLabel}</p>

        <div className="relative mt-5">
          {/* Rail + fill that grows with the active chapter */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px bg-navy/10"
          />
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px origin-top bg-electric transition-transform duration-700 ease-smooth motion-reduce:transition-none"
            style={{ transform: `scaleY(${(activeIndex + 1) / count})` }}
          />

          <ul>
            {c.sections.map((section, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={section.id}>
                  <a
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "group flex items-baseline gap-3 py-2.5 pl-4 font-sans text-[10px] leading-[14px] transition-[color,transform] duration-500 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none",
                      isActive
                        ? "translate-x-1 font-bold text-electric"
                        : "text-navy/50 hover:translate-x-0.5 hover:text-navy",
                    )}
                    href={`#${section.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      goTo(section.id);
                    }}
                  >
                    <span className="tabular-nums text-[8px] opacity-70">
                      {section.number}
                    </span>
                    {section.nav}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <nav aria-label={c.categoriesLabel}>
        <p className={label}>{c.categoriesLabel}</p>
        <ul className="mt-4 space-y-1">
          {c.categories.map((item) => (
            <li key={item.label}>
              <Link
                className="inline-block py-1.5 font-sans text-[10px] leading-[14px] text-navy/50 transition-[color,transform] duration-300 ease-smooth hover:translate-x-1 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}