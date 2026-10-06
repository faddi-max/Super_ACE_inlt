import { Reveal } from "@/components/animation";
import { categoriesIntroContent as c } from "@/content/categoriesIntro";

export function CategoriesIntro() {
  return (
    <section
      aria-labelledby="categories-intro-title"
      className="bg-white px-5 py-12 text-center text-navy sm:px-8 sm:py-14 lg:py-[60px]"
    >
      <Reveal className="mx-auto flex max-w-[1200px] flex-col items-center">
        <h2
          className="font-display text-[28px] font-bold uppercase leading-[1.1] tracking-[0.3px] sm:text-[32px] lg:text-[44px] lg:leading-[36px] lg:tracking-[0.44px]"
          id="categories-intro-title"
        >
          {c.title.map((part, i) => (
            <span className={part.accent ? "text-electric" : undefined} key={i}>
              {part.text}
            </span>
          ))}
        </h2>
        <p className="mt-3 max-w-[640px] font-sans text-[10px] leading-4 text-navy/50 sm:mt-4 sm:text-[11px] sm:leading-[18px]">
          {c.description}
        </p>
      </Reveal>
    </section>
  );
}
