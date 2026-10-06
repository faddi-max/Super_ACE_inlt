import {
  FileText,
  Flame,
  PersonStanding,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/animation";
import {
  complianceContent as c,
  type ComplianceIcon,
} from "@/content/compliance";
import bg from "@/assets/images/compliance/bg.png";

const icons: Record<ComplianceIcon, LucideIcon> = {
  shield: ShieldCheck,
  person: PersonStanding,
  flame: Flame,
  document: FileText,
};

export function ComplianceSafety() {
  return (
    <section
      aria-labelledby="compliance-title"
      className="bg-navy bg-cover bg-top py-14 text-white sm:py-16 lg:py-[100px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-0">
        <Reveal className="space-y-3 sm:space-y-4">
          <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.05em] text-electric sm:text-[9px]">
            {c.eyebrow}
          </p>
          <h2
            id="compliance-title"
            className="font-display text-[32px] font-bold uppercase leading-[0.95] tracking-[0.3px] sm:text-[38px] lg:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
          >
            <span className="block">{c.titleLead}</span>
            <span className="block text-electric">{c.titleAccent}</span>
          </h2>
          <p className="max-w-[640px] font-sans text-[12px] leading-[20px] text-silver sm:text-[13px] sm:leading-[22.1px]">
            {c.description}
          </p>
        </Reveal>

        {/* Rows: 122px tall on desktop, 0.67px white/10 dividers */}
        <ul className="mt-10 border-t-[0.67px] border-white/10 sm:mt-12 lg:mt-[56px]">
          {c.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <li className="border-b-[0.67px] border-white/10" key={item.number}>
                <Reveal delay={i * 90}>
                  <article className="group relative grid min-h-[96px] cursor-default grid-cols-[28px_minmax(0,1fr)_28px] items-center gap-x-4 gap-y-1 px-1 py-5 sm:min-h-[110px] sm:grid-cols-[34px_minmax(0,1fr)_32px] sm:gap-x-6 sm:px-4 lg:min-h-[122px] lg:grid-cols-[34px_260px_minmax(0,1fr)_24px] lg:gap-x-10 lg:gap-y-0 lg:px-10 lg:py-0">
                    {/* Hover tint */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-electric/5 opacity-0 transition-opacity duration-500 ease-smooth motion-reduce:transition-none group-hover:opacity-100"
                    />
                    {/* Accent line sweeps along the bottom edge */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-electric transition-transform duration-700 ease-smooth motion-reduce:transition-none group-hover:scale-x-100"
                    />

                    <span className="relative row-span-2 self-start pt-1.5 font-display text-[16px] font-normal leading-none text-mist/60 transition-colors duration-300 ease-smooth group-hover:text-electric lg:row-span-1 lg:self-center lg:pt-0 lg:text-[18px]">
                      {item.number}
                    </span>

                    <h3 className="relative col-start-2 whitespace-pre-line font-display text-[20px] font-bold uppercase leading-[24px] text-white transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:translate-x-1.5 sm:text-[22px] sm:leading-[26px] lg:whitespace-pre lg:text-[26px] lg:leading-[30px]">
                      {item.title}
                    </h3>

                    <p className="relative col-start-2 row-start-2 max-w-[460px] font-sans text-[10px] leading-[16px] text-mist sm:text-[11px] sm:leading-[17px] lg:col-start-3 lg:row-start-1">
                      {item.description}
                    </p>

                    <span
                      aria-hidden="true"
                      className="relative col-start-3 row-span-2 row-start-1 flex size-8 items-center justify-center justify-self-end rounded-full border border-transparent text-electric transition-[border-color,background-color,transform] duration-500 ease-smooth motion-reduce:transition-none group-hover:scale-110 group-hover:border-electric/40 group-hover:bg-electric/10 lg:col-start-4 lg:row-span-1"
                    >
                      <Icon
                        className="size-5 transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:-rotate-6 lg:size-[22px]"
                        strokeWidth={1.75}
                      />
                    </span>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}