import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { articleContent as c } from "@/content/blogArticle";
import { cn } from "@/lib/cn";

import type { ApiBlogPost } from "@/api";

const dt =
  "font-sans text-[8px] font-extrabold uppercase leading-[10px] tracking-[0.15em] text-mist";
const shareButton =
  "flex size-[26px] items-center justify-center rounded-full border border-navy/15 font-sans text-[8px] font-semibold text-navy/70 transition-[border-color,color,transform] duration-300 ease-smooth hover:-translate-y-0.5 hover:border-electric hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none motion-reduce:hover:translate-y-0";

type ArticleMetaProps = {
  className?: string;
  post?: ApiBlogPost | null;
};

export function ArticleMeta({ className, post }: ArticleMetaProps) {
  const [copied, setCopied] = useState(false);
  const url =
    typeof window === "undefined" ? "" : encodeURIComponent(window.location.href);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const metaRows = post
    ? [
        {
          label: "Filed under",
          value: post.category?.name || "Product Development",
          accent: true,
        },
        {
          label: "Read time",
          value: `${post.reading_minutes || 3} minutes`,
          accent: false,
        },
        {
          label: "Topic",
          value: post.tags?.length ? post.tags.join(", ") : "Sportswear",
          accent: false,
        },
      ]
    : c.meta;

  return (
    <dl
      className={cn(
        "grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-1 lg:gap-y-0",
        className,
      )}
    >
      {metaRows.map((row) => (
        <div
          className="lg:border-b lg:border-navy/10 lg:py-5 lg:first:pt-0"
          key={row.label}
        >
          <dt className={dt}>{row.label}</dt>
          <dd
            className={cn(
              "mt-2 font-sans text-[11px] font-bold uppercase leading-4",
              row.accent ? "text-electric" : "text-navy",
            )}
          >
            {row.value}
          </dd>
        </div>
      ))}

      <div className="col-span-2 lg:col-span-1 lg:pt-5">
        <dt className={dt}>{c.shareLabel}</dt>
        <dd className="mt-3 flex gap-2">
          {c.shares.map((share) => (
            <a
              aria-label={share.label}
              className={shareButton}
              href={`${share.base}${url}`}
              key={share.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              {share.short}
            </a>
          ))}
          <button
            aria-label={copied ? c.copiedLabel : c.copyLabel}
            className={cn(shareButton, copied && "border-electric text-electric")}
            onClick={copy}
            type="button"
          >
            {copied ? <Check size={11} strokeWidth={2.5} /> : <Link2 size={11} />}
          </button>
        </dd>
      </div>
    </dl>
  );
}