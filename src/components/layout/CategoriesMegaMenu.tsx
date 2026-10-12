import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categoriesMegaMenuContent as c } from "@/content/megaMenu";

type Props = { onNavigate?: () => void };

const open =
  "lg:group-hover/mm:visible lg:group-hover/mm:translate-y-0 lg:group-hover/mm:opacity-100 lg:group-focus-within/mm:visible lg:group-focus-within/mm:translate-y-0 lg:group-focus-within/mm:opacity-100";

export function CategoriesMegaMenu({ onNavigate }: Props) {
  return (
    <div
      className={`mt-3 lg:invisible lg:absolute lg:inset-x-0 lg:top-full lg:z-50 lg:mt-0 lg:translate-y-1 lg:border-b lg:border-navy/10 lg:bg-white lg:opacity-0 lg:shadow-xl lg:shadow-navy/30 lg:transition-[opacity,translate,visibility] lg:duration-300 lg:ease-smooth motion-reduce:lg:transition-none ${open}`}
    >
      {/* Mobile: inline list */}
      <ul className="flex flex-col gap-3 border-l border-white/15 pl-4 lg:hidden">
        {c.columns.map((col) => (
          <li key={col.to}>
            <Link
              className="font-montserrat text-[10px] font-semibold text-silver transition-colors hover:text-electric"
              onClick={onNavigate}
              to={col.to}
            >
              {col.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop: white multi-column panel */}
      <div className="mx-auto hidden w-full max-w-360 px-30 lg:block">
        <div className="grid grid-cols-4 gap-x-12 py-10">
          {c.columns.map((col, i) => (
            <div
              className="translate-y-3 opacity-0 transition-[opacity,translate] duration-500 ease-smooth group-focus-within/mm:translate-y-0 group-focus-within/mm:opacity-100 group-focus-within/mm:[transition-delay:var(--d)] group-hover/mm:translate-y-0 group-hover/mm:opacity-100 group-hover/mm:[transition-delay:var(--d)] motion-reduce:transition-none"
              key={col.to}
              style={{ "--d": `${60 + i * 60}ms` } as CSSProperties}
            >
              <Link
                className="group/title inline-block font-display text-[22px] font-bold uppercase leading-[24px] tracking-[0.5px] text-navy transition-colors duration-300 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
                onClick={onNavigate}
                to={col.to}
              >
                {col.title}
                <span
                  aria-hidden="true"
                  className="mt-2 block h-0.5 w-8 bg-electric transition-[width] duration-500 ease-smooth group-hover/title:w-14 motion-reduce:transition-none"
                />
              </Link>

              <ul className="mt-5 flex flex-col gap-px">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      className="group/link flex h-[34px] items-center justify-between rounded-[2px] px-2 -mx-2 font-montserrat text-[11px] font-semibold text-navy/70 transition-colors duration-300 hover:bg-electric/10 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric"
                      onClick={onNavigate}
                      to={link.to}
                    >
                      {link.label}
                      <ArrowRight
                        aria-hidden="true"
                        className="-translate-x-1 opacity-0 transition-[opacity,translate] duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100 motion-reduce:transition-none"
                        size={11}
                        strokeWidth={2.5}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-navy/10 py-5">
          <p className="font-sans text-ui-label font-semibold uppercase tracking-[0.16em] text-steel">
            {c.strip}
          </p>
          <Link
            className="group inline-flex items-center gap-2 font-sans text-ui-label font-extrabold uppercase tracking-[0.16em] text-navy transition-colors duration-300 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
            onClick={onNavigate}
            to={c.viewAll.to}
          >
            {c.viewAll.label}
            <ArrowRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={10}
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}