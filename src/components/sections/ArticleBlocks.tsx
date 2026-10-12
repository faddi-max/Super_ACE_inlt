import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import {
  articleContent as c,
  type ArticleBlock,
  type ArticleSection,
} from "@/content/blogArticle";
import { cn } from "@/lib/cn";

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <Reveal>
          <p
            className={cn(
              "mt-5 font-sans",
              block.emphasis === "lead" &&
                "text-[13px] leading-[24px] text-navy",
              block.emphasis === "strong" &&
                "text-[14px] font-bold leading-[24px] text-navy",
              !block.emphasis && "text-[12px] leading-[22px] text-slate/60",
            )}
          >
            {block.text}
          </p>
        </Reveal>
      );

    case "quote":
      return (
        <Reveal className="group relative mt-9 py-1 pl-6">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-electric transition-transform duration-700 ease-smooth group-data-[revealed=true]:scale-y-100 motion-reduce:scale-y-100 motion-reduce:transition-none"
          />
          <blockquote>
            <p className="font-display text-[26px] font-bold uppercase leading-[1.08] text-navy">
              “{block.text}”
            </p>
            <footer className="mt-3 font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.15em] text-mist">
              {block.cite}
            </footer>
          </blockquote>
        </Reveal>
      );

    case "image":
      return (
        <Reveal className="motion-reveal--zoom mt-8">
          <figure className="group">
            <div className="aspect-[16/10] overflow-hidden bg-panel">
              <img
                alt={block.alt}
                className="size-full object-cover transition-transform duration-[1400ms] ease-smooth motion-reduce:transition-none group-hover:scale-105"
                loading="lazy"
                src={block.src}
              />
            </div>
            <figcaption className="mt-3 font-sans text-[8px] leading-3 text-mist">
              {block.caption}
            </figcaption>
          </figure>
        </Reveal>
      );

    case "steps":
      return (
        <ul className="mt-8 border-t-[0.8px] border-navy/10">
          {block.items.map((step, i) => (
            <li className="border-b-[0.8px] border-navy/10" key={step.number}>
              <Reveal delay={i * 80}>
                <div className="group relative grid grid-cols-[48px_minmax(0,1fr)] items-center gap-x-3 px-1 py-4 transition-colors duration-500 ease-smooth hover:bg-electric/5 motion-reduce:transition-none">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                  <span className="font-display text-[22px] font-normal leading-none text-electric transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
                    {step.number}
                  </span>
                  <span className="block transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
                    <span className="block font-sans text-[10px] font-bold uppercase leading-[14px] tracking-[0.1em] text-navy">
                      {step.title}
                    </span>
                    <span className="mt-1 block font-sans text-[10px] leading-4 text-slate/60">
                      {step.description}
                    </span>
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <Reveal className="motion-reveal--left mt-9">
          <aside className="border-l-2 border-electric bg-electric/5 px-6 py-5">
            <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.15em] text-electric">
              {block.eyebrow}
            </p>
            <p className="mt-3 font-display text-[24px] font-bold uppercase leading-[1.05] text-navy">
              {block.title}
            </p>
            <p className="mt-2 max-w-[560px] font-sans text-[10px] leading-4 text-slate/60">
              {block.text}
            </p>
          </aside>
        </Reveal>
      );
  }
}

function Chapter({ section }: { section: ArticleSection }) {
  return (
    <section
      className="scroll-mt-24 [&:not(:first-child)]:mt-16 lg:[&:not(:first-child)]:mt-[88px]"
      id={section.id}
    >
      <Reveal>
        <Eyebrow className="text-[8px] leading-[10px] tracking-[0.15em]">
          {section.number} / {section.eyebrow}
        </Eyebrow>
        <Heading
          as="h2"
          className="mt-4 text-[34px] leading-[1] tracking-[0.44px] text-navy sm:text-[44px]"
        >
          <span className="motion-mask">
            <span className="motion-mask__line">
              {section.title.map((part) => (
                <span
                  className={cn(part.accent && "text-electric")}
                  key={part.text}
                >
                  {part.text}
                </span>
              ))}
            </span>
          </span>
        </Heading>
      </Reveal>

      {section.blocks.map((block, i) => (
        <Block block={block} key={i} />
      ))}
    </section>
  );
}

export function ArticleBlocks() {
  return (
    <>
      {c.sections.map((section) => (
        <Chapter key={section.id} section={section} />
      ))}
    </>
  );
}