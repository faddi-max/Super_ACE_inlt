import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogListContent as c, type BlogPost } from "@/content/blogs";

type BlogCardProps = { post: BlogPost; number: number };

export function BlogCard({ post, number }: BlogCardProps) {
  return (
    <Link
      className="group relative flex h-[360px] flex-col justify-end overflow-hidden rounded-[3px] bg-navy outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-electric sm:h-[400px] lg:h-[420px]"
      to={post.to}
    >
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full scale-100 object-cover transition-transform duration-[1200ms] ease-smooth motion-reduce:transition-none group-hover:scale-110"
        decoding="async"
        loading="lazy"
        src={post.image}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-transparent transition-opacity duration-700 ease-smooth motion-reduce:transition-none group-hover:opacity-90"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth motion-reduce:transition-none group-hover:scale-x-100"
      />

      <div className="relative p-6 transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:-translate-y-1">
        <p className="font-sans text-[8px] font-extrabold uppercase leading-[10px] tracking-[0.15em] text-electric">
          {String(number).padStart(2, "0")} / {post.categoryLabel}
        </p>
        <h3 className="mt-3 max-w-[330px] font-display text-[30px] font-bold uppercase leading-[1] text-white">
          {post.title}
        </h3>
        <p className="mt-2.5 max-w-[330px] font-sans text-[10px] leading-4 text-white/60 transition-colors duration-500 group-hover:text-white/80">
          {post.excerpt}
        </p>
        <span className="mt-4 flex items-center gap-2 font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-white">
          {c.readLabel}
          <ArrowRight
            aria-hidden="true"
            className="size-[9px] text-electric transition-transform duration-300 ease-smooth group-hover:translate-x-1.5 motion-reduce:transition-none"
            strokeWidth={2.5}
          />
        </span>
      </div>
    </Link>
  );
}