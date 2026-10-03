import { partnersContent as c } from "@/content/partners";
import { CursorGlow, Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Figma (1440 wide), section-relative:
 * eyebrow centre y≈44 · heading centre y≈74 (≈32px Barlow Condensed)
 * logo row x112–1312 (6 × 200) · top hairline y≈114 · cells 112 tall
 * logos ≈ 56px tall, grey, centred in each cell.
 */
export function TrustedPartners() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-9.5 text-navy">
      <CursorGlow />
      <div className="mx-auto max-w-300 px-6 lg:px-0">
        <Reveal className="text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-1.5 font-display text-[32px] font-bold uppercase leading-none">
            {c.title}
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 border-r border-t border-silver sm:grid-cols-3 lg:grid-cols-6">
          {c.partners.map((partner, index) => (
            <Reveal
              key={partner.name}
              className="flex h-28 items-center justify-center border-b border-l border-silver lg:border-b-0"
              delay={index * 70}
            >
              <img
                alt={partner.name}
                className="max-h-14 w-auto max-w-[60%] object-contain opacity-80 grayscale transition duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0"
                src={partner.logo}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
