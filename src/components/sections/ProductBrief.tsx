import type { FormEvent } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { productBriefContent as c } from "@/content/productBrief";

const field =
  "h-full min-h-10 w-full rounded-[2px] border border-white/10 bg-card-start px-4 font-sans text-[10px] leading-4 text-white outline-none transition-colors duration-300 placeholder:text-mist focus:border-electric";

export function ProductBrief() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: connect to the enquiry endpoint
  };

  return (
    <section
      aria-labelledby="product-brief-title"
      className="flex bg-navy bg-cover bg-center bg-no-repeat py-16 text-white lg:h-[562px] lg:items-center lg:py-0"
      style={{ backgroundImage: `url(${c.background})` }}
    >
      <div className="mx-auto grid w-full max-w-360 items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_497px] lg:gap-0 lg:px-30">
        <Reveal>
          <Eyebrow className="text-[10px] leading-[4px] tracking-[0.05em]">
            {c.eyebrow}
          </Eyebrow>

          <h2
            className="mt-[22px] font-display text-[52px] font-bold uppercase leading-[48px] tracking-[0.44px] text-white lg:text-[80px] lg:leading-[71px]"
            id="product-brief-title"
          >
            <span className="block">{c.titleFirst}</span>
            <span className="block">
              <span className="text-electric">{c.titleAccent}</span>{" "}
              {c.titleRest}
            </span>
          </h2>

          <p className="mt-4 max-w-[600px] font-sans text-[12px] leading-[22px] text-silver">
            {c.description}
          </p>
        </Reveal>

        <Reveal className="w-full lg:justify-self-end" delay={150}>
          {/* 497 x 362.33 · 6 rows x 2 columns · 10px gaps */}
          <form
            className="grid w-full grid-cols-1 gap-[10px] sm:grid-cols-2 lg:h-[362.33px] lg:w-[497px] lg:grid-rows-[40px_40px_40px_40px_1fr_44px]"
            onSubmit={onSubmit}
          >
            <label className="block">
              <span className="sr-only">{c.fields.name}</span>
              <input
                autoComplete="name"
                className={field}
                name="name"
                placeholder={c.fields.name}
                required
                type="text"
              />
            </label>
            <label className="block">
              <span className="sr-only">{c.fields.company}</span>
              <input
                autoComplete="organization"
                className={field}
                name="company"
                placeholder={c.fields.company}
                type="text"
              />
            </label>

            <label className="block">
              <span className="sr-only">{c.fields.email}</span>
              <input
                autoComplete="email"
                className={field}
                name="email"
                placeholder={c.fields.email}
                required
                type="email"
              />
            </label>
            <label className="block">
              <span className="sr-only">{c.fields.country}</span>
              <input
                autoComplete="country-name"
                className={field}
                name="country"
                placeholder={c.fields.country}
                type="text"
              />
            </label>

            <label className="relative block sm:col-span-2">
              <span className="sr-only">{c.fields.category}</span>
              <select
                className={`${field} appearance-none pr-10 invalid:text-mist`}
                defaultValue=""
                name="category"
                required
              >
                <option disabled hidden value="">
                  {c.fields.category}
                </option>
                {c.categories.map((category) => (
                  <option
                    className="bg-navy text-white"
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white"
                size={12}
                strokeWidth={2.5}
              />
            </label>

            <label className="block">
              <span className="sr-only">{c.fields.productType}</span>
              <input
                className={field}
                name="productType"
                placeholder={c.fields.productType}
                type="text"
              />
            </label>
            <label className="block">
              <span className="sr-only">{c.fields.quantity}</span>
              <input
                className={field}
                name="quantity"
                placeholder={c.fields.quantity}
                type="text"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="sr-only">{c.fields.message}</span>
              <textarea
                className={`${field} min-h-[108px] resize-none py-3.5`}
                name="message"
                placeholder={c.fields.message}
              />
            </label>

            <button
              className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-[3px] bg-electric font-sans text-[10px] font-semibold uppercase leading-[14px] tracking-[0.7px] text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric sm:col-span-2"
              type="submit"
            >
              {c.submit}
              <ArrowRight
                aria-hidden="true"
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                size={12}
                strokeWidth={2.5}
              />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}