import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { blogPostHeroContent as c } from "@/content/blogPost";
import type { ApiBlogPost } from "@/api";
import { useBlogImage } from "@/lib/useBlogImage";

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

type BlogPostHeroProps = {
  post?: ApiBlogPost | null;
};

export function BlogPostHero({ post }: BlogPostHeroProps) {
  const { src: heroImg, onError } = useBlogImage(post?.image, c.image);

  const category = post?.category?.name || c.category;
  const description = post?.excerpt || c.description;

  const metaItems = post
    ? [
        new Date(post.published_at).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        `${post.reading_minutes || 3} min read`,
        post.author || "Super Ace International",
      ]
    : c.meta;

  return (
    <section className="relative isolate flex w-full overflow-hidden bg-navy text-white lg:min-h-[693px]">
      {/* Background frame: glow + grid are part of the image */}
      <div
        aria-hidden="true"
        className="hero-fade absolute inset-0 -z-10 bg-cover bg-[position:25%_center] bg-no-repeat lg:bg-center"
        style={{ backgroundImage: `url(${c.grid})` }}
      />

      <Container className="grid items-center gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-6 lg:py-20">
        <div>
          <Eyebrow className="hero-rise text-white" style={delay(150)}>
            {category} <span className="text-white/60">/ {c.label}</span>
          </Eyebrow>

          <h1 className="mt-5 font-display text-[clamp(2.25rem,9.5vw,3.5rem)] font-bold uppercase leading-[1.02] sm:mt-6 sm:leading-[1.05] lg:text-[72px] lg:leading-[78px]">
            {post ? (
              <span className="hero-rise block" style={delay(300)}>
                {post.title}
              </span>
            ) : (
              c.title.map((line, index) => (
                <span
                  className="hero-rise block"
                  key={line.text}
                  style={delay(300 + index * 110)}
                >
                  {line.text}
                  {line.accentWord && (
                    <>
                      {" "}
                      <span className="text-electric">{line.accentWord}</span>
                    </>
                  )}
                </span>
              ))
            )}
          </h1>

          <p
            className="hero-rise mt-5 max-w-[470px] font-sans text-[12px] leading-5 text-mist sm:mt-7 sm:text-[13px] sm:leading-[22px]"
            style={delay(800)}
          >
            {description}
          </p>

          <ul
            className="hero-rise mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[9px] font-bold uppercase leading-none tracking-[0.15em] text-mist sm:mt-10 sm:gap-x-5 sm:text-[8px] lg:mt-14"
            style={delay(950)}
          >
            {metaItems.map((item, index) => (
              <li className={index === 0 ? "text-white" : undefined} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="hero-settle relative mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none"
          style={delay(400)}
        >
          <img
            alt={post?.title || c.imageAlt}
            className="motion-float size-full object-contain"
            onError={onError}
            src={heroImg}
          />
        </div>
      </Container>
    </section>
  );
}