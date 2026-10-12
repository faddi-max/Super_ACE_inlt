import { ChevronRight } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CapabilitiesMegaMenu } from "@/components/layout/CapabilitiesMegaMenu";
import { CategoriesMegaMenu } from "@/components/layout/CategoriesMegaMenu";
import { navigation, resourcesMenuLabel } from "@/config/navigation";
import { cn } from "@/lib/cn";

type NavProps = {
  className?: string;
  onNavigate?: () => void;
};

/**
 * Resources dropdown (Figma): 210 × 381 · padding 10 · gap 10 · white
 * Capabilities + Categories mega menus: full-width panels anchored to the header.
 * All open on hover and keyboard focus (desktop); listed inline on mobile.
 */
export function Nav({ className, onNavigate }: NavProps) {
  const { pathname, hash } = useLocation();
  const current = `${pathname}${hash}`;

  return (
    <nav aria-label="Main navigation" className={className}>
      <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-7">
        {navigation.map((item) => (
          <li
            className={cn(
              item.mega && "group/mm lg:static",
              !item.mega && item.children && "group/dd relative",
            )}
            key={item.to}
          >
            <NavLink
              to={item.to}
              end={item.to === "/"}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  "font-montserrat text-[10px] font-bold uppercase leading-[14px] tracking-[1.2px] align-middle transition-colors hover:text-electric",
                  // Mega items: highlight on hover/focus + an invisible bridge under
                  // the label so the pointer can reach the panel without it closing
                  item.mega &&
                    "lg:relative lg:inline-block lg:group-hover/mm:text-electric lg:group-focus-within/mm:text-electric lg:after:absolute lg:after:inset-x-0 lg:after:top-full lg:after:hidden lg:after:h-10 lg:after:content-[''] lg:group-hover/mm:after:block",
                  isActive ? "text-electric" : "text-white",
                )
              }
            >
              {item.label}
            </NavLink>

            {item.mega === "capabilities" && (
              <CapabilitiesMegaMenu onNavigate={onNavigate} />
            )}

            {item.mega === "categories" && (
              <CategoriesMegaMenu onNavigate={onNavigate} />
            )}

            {!item.mega && item.children && (
              <div className="mt-3 lg:invisible lg:absolute lg:left-0 lg:top-full lg:z-50 lg:mt-0 lg:translate-y-1 lg:pt-5 lg:opacity-0 lg:transition-[opacity,translate,visibility] lg:duration-300 lg:ease-smooth lg:group-focus-within/dd:visible lg:group-focus-within/dd:translate-y-0 lg:group-focus-within/dd:opacity-100 lg:group-hover/dd:visible lg:group-hover/dd:translate-y-0 lg:group-hover/dd:opacity-100 motion-reduce:lg:transition-none">
                <div className="border-l border-white/15 pl-4 lg:h-[381px] lg:w-[210px] lg:border-l-0 lg:bg-white lg:p-2.5 lg:pl-2.5 lg:shadow-xl lg:shadow-navy/30">
                  <div className="lg:px-1.5 lg:pt-[21px]">
                    <p className="mb-2 hidden font-montserrat text-[9px] font-bold uppercase leading-3 tracking-[0.15em] text-steel lg:block">
                      {resourcesMenuLabel}
                    </p>
                    <ul className="flex flex-col gap-3 lg:gap-px">
                      {item.children.map((child) => {
                        const isActive = current === child.to;
                        return (
                          <li key={child.to}>
                            <Link
                              className={cn(
                                "group/child flex items-center justify-between font-montserrat text-[10px] font-semibold text-silver transition-colors duration-300 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric lg:h-[34px] lg:rounded-[2px] lg:px-2 lg:font-bold lg:text-navy lg:hover:bg-electric/10 lg:hover:text-electric lg:focus-visible:outline-offset-[-2px]",
                                isActive && "text-electric lg:bg-electric/10",
                              )}
                              onClick={onNavigate}
                              to={child.to}
                            >
                              {child.label}
                              <ChevronRight
                                aria-hidden="true"
                                className="hidden transition-transform duration-300 group-hover/child:translate-x-0.5 motion-reduce:transition-none lg:block"
                                size={12}
                                strokeWidth={2.5}
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}