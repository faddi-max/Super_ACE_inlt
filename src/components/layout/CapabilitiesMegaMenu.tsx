import { useId, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { capabilitiesMenu as m, type MenuGroup } from "@/content/capabilitiesMenu";
import { cn } from "@/lib/cn";

type Props = { onNavigate?: () => void };

/** groupId → group, for the mobile accordion */
const groupsById: Record<string, MenuGroup> = Object.fromEntries(
  m.columns.flat().map((g) => [g.id, g]),
);

/**
 * Capabilities mega menu
 * < lg  : accordion inside the mobile menu
 * ≥ lg  : full-width panel anchored to the header (header must be `relative`),
 *         opens on hover / focus of the parent `group/mm` li
 */
export function CapabilitiesMegaMenu({ onNavigate }: Props) {
  return (
    <>
      <MobileAccordion onNavigate={onNavigate} />
      <DesktopPanel onNavigate={onNavigate} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile / tablet: accordion                                          */
/* ------------------------------------------------------------------ */

function MobileAccordion({ onNavigate }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const { pathname, hash } = useLocation();
  const current = `${pathname}${hash}`;
  const uid = useId();

  return (
    <div className="mt-3 border-l border-white/15 pl-4 lg:hidden">
      <ul className="flex flex-col gap-1">
        {m.sidebar.map((item) => {
          const group = item.groupId ? groupsById[item.groupId] : undefined;

          // Direct link (e.g. Human Resources)
          if (!group) {
            return (
              <li key={item.href}>
                <Link
                  className={cn(
                    "flex min-h-9 items-center font-montserrat text-[11px] font-semibold text-silver transition-colors duration-300 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
                    pathname === item.href && "text-electric",
                  )}
                  onClick={onNavigate}
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const isOpen = openId === group.id;
          const panelId = `${uid}-${group.id}`;
          const hasActive = pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className={cn(
                  "flex min-h-9 w-full items-center justify-between gap-3 text-left font-montserrat text-[11px] font-semibold transition-colors duration-300 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
                  isOpen || hasActive ? "text-electric" : "text-silver",
                )}
                onClick={() => setOpenId(isOpen ? null : group.id)}
                type="button"
              >
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 transition-transform duration-300 motion-reduce:transition-none",
                    isOpen && "rotate-180",
                  )}
                  size={14}
                  strokeWidth={2.5}
                />
              </button>

              {/* grid-rows trick for smooth height animation */}
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-smooth motion-reduce:transition-none",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
                id={panelId}
              >
                <div className="overflow-hidden">
                  <ul className="flex flex-col gap-2.5 pb-3 pl-3 pt-1">
                    <li>
                      <Link
                        className="font-montserrat text-[10px] font-bold uppercase tracking-[0.12em] text-electric hover:underline"
                        onClick={onNavigate}
                        tabIndex={isOpen ? 0 : -1}
                        to={item.href}
                      >
                        View {group.title}
                      </Link>
                    </li>
                    {group.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          className={cn(
                            "font-montserrat text-[10px] font-medium text-silver/80 transition-colors duration-300 hover:text-electric",
                            current === l.href && "text-electric",
                          )}
                          onClick={onNavigate}
                          tabIndex={isOpen ? 0 : -1}
                          to={l.href}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop: mega panel                                                 */
/* ------------------------------------------------------------------ */

function DesktopPanel({ onNavigate }: Props) {
  const [activeGroup, setActiveGroup] = useState(m.sidebar[0].groupId);
  const { pathname } = useLocation();

  return (
    <div
      className={cn(
        "hidden lg:invisible lg:absolute lg:inset-x-0 lg:top-full lg:z-50 lg:block lg:translate-y-1 lg:opacity-0",
        "lg:transition-[opacity,translate,visibility] lg:delay-150 lg:duration-300 lg:ease-smooth",
        "lg:group-hover/mm:visible lg:group-hover/mm:translate-y-0 lg:group-hover/mm:opacity-100 lg:group-hover/mm:delay-0",
        "lg:group-focus-within/mm:visible lg:group-focus-within/mm:translate-y-0 lg:group-focus-within/mm:opacity-100 lg:group-focus-within/mm:delay-0",
        "motion-reduce:lg:transition-none",
      )}
    >
      {/* Capped to viewport on short screens (80px ≈ header height) */}
      <div className="max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain bg-white shadow-xl shadow-navy/30">
        <div className="mx-auto flex w-full max-w-[1200px] gap-6 px-8 py-6 xl:gap-10 xl:px-0">
          {/* Sidebar */}
          <div className="w-[168px] shrink-0 self-start rounded-[4px] bg-[#EEF5FF] px-2.5 pb-5 pt-5 xl:w-[190px]">
            <p className="mb-2 px-2 font-montserrat text-[9px] font-bold uppercase leading-3 tracking-[0.15em] text-steel">
              {m.eyebrow}
            </p>

            <ul className="flex flex-col gap-px">
              {m.sidebar.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.groupId !== undefined && item.groupId === activeGroup);
                return (
                  <li key={item.href}>
                    <Link
                      className={cn(
                        "group/side flex h-[34px] items-center justify-between gap-2 rounded-[2px] px-2 font-montserrat text-[10px] font-bold text-navy transition-colors duration-300 hover:bg-electric/10 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-electric",
                        isActive && "bg-electric/10 text-electric",
                      )}
                      onClick={onNavigate}
                      onFocus={() => item.groupId && setActiveGroup(item.groupId)}
                      onMouseEnter={() => item.groupId && setActiveGroup(item.groupId)}
                      to={item.href}
                    >
                      <span className="truncate">{item.label}</span>
                      <ChevronRight
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-300 group-hover/side:translate-x-0.5 motion-reduce:transition-none"
                        size={12}
                        strokeWidth={2.5}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid min-w-0 flex-1 grid-cols-4 gap-x-5 pt-[22px] xl:gap-x-8">
            {m.columns.map((col, ci) => (
              <div className="flex min-w-0 flex-col gap-6 xl:gap-7" key={ci}>
                {col.map((g) => (
                  <section
                    aria-labelledby={`mm-${g.id}`}
                    key={g.id}
                    onMouseEnter={() => setActiveGroup(g.id)}
                  >
                    <h3
                      className={cn(
                        "font-montserrat text-[9px] font-extrabold uppercase leading-3 tracking-[0.12em] transition-colors duration-300 xl:tracking-[0.15em]",
                        g.id === activeGroup ? "text-electric" : "text-electric/80",
                      )}
                      id={`mm-${g.id}`}
                    >
                      {g.title}
                    </h3>

                    <ul className="mt-3 flex flex-col gap-3">
                      {g.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            className="inline-block font-montserrat text-[10px] font-semibold leading-[14px] text-navy transition-[color,translate] duration-300 ease-smooth hover:translate-x-1 hover:text-electric focus-visible:text-electric focus-visible:outline-none motion-reduce:transition-none"
                            onClick={onNavigate}
                            to={l.href}
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}