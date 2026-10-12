import { Reveal } from "@/components/animation";
import { qcDocumentationContent as c } from "@/content/quality";

export function QcDocumentation() {
  return (
    <Reveal className="mt-8 lg:mx-10 lg:mt-10" delay={150}>
      <section
        aria-labelledby="qc-docs-title"
        className="grid gap-6 rounded-[4px] border-l-2 border-electric bg-cloud px-5 py-6 sm:px-7 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:py-7"
      >
        <div>
          <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.1em] text-electric">
            {c.eyebrow}
          </p>
          <h2
            className="mt-2 font-display text-[24px] font-bold uppercase leading-none tracking-[0.2px]"
            id="qc-docs-title"
          >
            {c.title}
          </h2>
          <p className="mt-2 max-w-[200px] font-sans text-[9px] leading-[14px] text-steel">
            {c.description}
          </p>
        </div>

        <ul className="flex flex-wrap content-start gap-x-2 gap-y-2">
          {c.documents.map((doc) => (
            <li
              className="inline-flex h-[26px] items-center gap-2 rounded-[3px] border-[0.67px] border-navy/10 bg-white px-3 font-sans text-[9px] font-medium leading-none text-navy transition-[border-color,color,transform] duration-300 ease-smooth hover:-translate-y-0.5 hover:border-electric hover:text-electric motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              key={doc}
            >
              <span
                aria-hidden="true"
                className="size-1 shrink-0 rounded-full bg-electric"
              />
              {doc}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}