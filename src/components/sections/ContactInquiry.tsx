import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FormField } from "@/components/ui/FormField";
import { contactInquiryContent as c } from "@/content/contactInquiry";

export function ContactInquiry() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = c.form.fields
      .map((field) => `${field.label}: ${String(data.get(field.name) ?? "")}`)
      .join("\n");
    // Replace with your API / form service when the backend is ready
    window.location.href = `mailto:${c.form.recipient}?subject=${encodeURIComponent(c.form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      aria-labelledby="inquiry-title"
      className="bg-white py-14 text-navy sm:py-16 xl:py-20"
      id="inquiry"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 xl:grid-cols-[608px_minmax(0,1fr)] xl:gap-6 xl:px-0">
        {/* Form card: 608 wide, padding 35, radius 3, 0.71px border */}
        <Reveal className="motion-reveal--zoom">
          <form
            className="rounded-[3px] border-[0.71px] border-white/12 p-5 sm:p-[35px]"
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "var(--color-navy)",
              backgroundImage:
                "linear-gradient(222.74deg, var(--color-electric) -54.38%, var(--color-navy) 53.22%)",
            }}
          >
            <div className="grid gap-x-3.5 gap-y-[30px] sm:grid-cols-2">
              {c.form.fields.map((field) => (
                <FormField key={field.name} {...field} />
              ))}
            </div>

            <button
              className="group/btn relative mt-[18px] inline-flex h-9 w-full items-center justify-center gap-2.5 overflow-hidden rounded-[2px] bg-electric font-sans text-[10px] font-semibold uppercase leading-none tracking-[0.7px] text-white transition-[background-color,color,transform] duration-300 ease-smooth hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.99] motion-reduce:transition-none"
              type="submit"
            >
              {/* Light sweep across the button on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 opacity-0 transition-[transform,opacity] duration-700 ease-smooth group-hover/btn:translate-x-[500%] group-hover/btn:opacity-100 motion-reduce:hidden"
              />
              <span className="relative">{c.form.submit}</span>
              <ArrowRight
                aria-hidden="true"
                className="relative transition-transform duration-300 ease-smooth group-hover/btn:translate-x-1 motion-reduce:transition-none"
                size={12}
                strokeWidth={2.5}
              />
            </button>

            <p className="mt-4 text-center font-sans text-[8px] leading-3 text-mist/60">
              {c.form.note}
            </p>
          </form>
        </Reveal>

        {/* Right column */}
        <div className="xl:pt-5" id="locations">
          <Reveal>
            <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
              {c.eyebrow}
            </Eyebrow>

            <h2
              className="mt-5 font-display text-[32px] font-bold uppercase leading-[32px] tracking-[0.3px] sm:mt-[22px] sm:text-[38px] sm:leading-[36px] xl:text-[44px] xl:leading-[39.16px] xl:tracking-[0.44px]"
              id="inquiry-title"
            >
              {c.titleLines.map((line, i) => (
                <span className="motion-mask" key={i}>
                  <span
                    className="motion-mask__line"
                    style={{ transitionDelay: `${120 + i * 110}ms` }}
                  >
                    {line.map((part) => (
                      <span
                        className={part.accent ? "text-electric" : undefined}
                        key={part.text}
                      >
                        {part.text}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
            </h2>

            <p className="mt-4 max-w-[500px] font-sans text-[12px] leading-5 text-steel sm:text-[13px] sm:leading-[22px]">
              {c.description}
            </p>
          </Reveal>

          <ul className="mt-8 xl:mt-7">
            {c.contacts.map((item, i) => (
              <li
                className="border-t-[0.67px] border-navy/10 last:border-b-[0.67px]"
                key={item.label}
              >
                <Reveal delay={260 + i * 100}>
                  <div className="group relative cursor-default pb-6 pt-[22px]">
                    {/* Accent line sweeps along the top on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth group-hover:scale-x-100 motion-reduce:transition-none"
                    />
                    <p className="font-sans text-[8px] font-extrabold uppercase leading-3 tracking-[0.14em] text-electric">
                      {item.label}
                    </p>
                    {item.phone && (
                      <a
                        className="mt-2 inline-block font-sans text-[13px] font-bold leading-4 text-navy transition-colors duration-300 ease-smooth hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none"
                        href={item.phoneHref}
                      >
                        {item.phone}
                      </a>
                    )}
                    <p className="mt-1.5 font-sans text-[11px] font-medium leading-4 text-navy transition-transform duration-500 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none">
                      {item.address}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}