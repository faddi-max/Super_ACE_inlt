import { useEffect, useState,useRef, type ReactElement } from "react";
import { ChevronUp, Mail, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";
import {
  floatingActionsContent as c,
  type FloatingAction,
  type FloatingActionIcon,
} from "@/content/floatingActions";
import { cn } from "@/lib/cn";

const svg = { "aria-hidden": true, fill: "currentColor", viewBox: "0 0 24 24" };

const icons: Record<FloatingActionIcon, ReactElement> = {
  email: <Mail aria-hidden="true" size={20} strokeWidth={2} />,
  contact: <MessageSquareText aria-hidden="true" size={18} strokeWidth={2} />,
  tiktok: (
    <svg {...svg} className="size-5">
      <path d="M16.6 2h-3.2v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.1a6.1 6.1 0 1 0 5.3 6V8.6a7.6 7.6 0 0 0 4.4 1.4V6.8A4.4 4.4 0 0 1 16.6 2Z" />
    </svg>
  ),
  instagram: (
    <svg
      {...svg}
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </svg>
  ),
  messenger: (
    <svg {...svg} className="size-5">
      <path d="M12 2C6.5 2 2 6.2 2 11.4c0 2.9 1.4 5.5 3.6 7.2V22l3.3-1.8c1 .3 2 .4 3.1.4 5.5 0 10-4.2 10-9.4S17.500 2 12 2Zm1 12.600-2.600-2.700-5 2.700 5.500-5.800 2.600 2.700 5-2.700-5.500 5.800Z" />
    </svg>
  ),
  whatsapp: (
    <svg {...svg} className="size-5">
      <path d="M12 2a10 10 0 0 0-8.600 15.100L2 22l5-1.300A10 10 0 1 0 12 2Zm5.800 14.200c-.2.700-1.400 1.300-2 1.400-.5.100-1.200.1-1.900-.1-.4-.1-1-.3-1.700-.6-3-1.300-4.900-4.300-5-4.500-.2-.2-1.200-1.600-1.200-3s.8-2.100 1-2.400c.3-.3.600-.3.800-.3h.6c.2 0 .4 0 .6.500l.9 2.100c.1.200.1.400 0 .5l-.3.500-.4.400c-.1.200-.3.300-.1.600.2.300.7 1.200 1.500 1.900 1 .9 1.900 1.200 2.200 1.300.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.600-.1l2 1c.3.100.5.200.5.300.1.200.1.800-.1 1.500Z" />
    </svg>
  ),
};

const circle =
  "relative grid size-11 shrink-0 place-items-center rounded-full text-white shadow-[0_6px_16px_0] shadow-black/25 transition-transform duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none";

function ActionItem({ item, open }: { item: FloatingAction; open: boolean }) {
  const props = {
    "aria-label": item.label,
    className: cn(
      circle,
      "z-10",
      "group-hover/item:scale-[0.8] group-focus-within/item:scale-[0.8]",
    ),
    style: { background: item.background },
    tabIndex: open ? 0 : -1,
  };
  const icon = icons[item.id];

  return (
    <div className="group/item relative size-11">
      {/* Step 3: light pill grows out to the left; the icon shrinks inside its right end */}
      <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-0 flex h-11 items-center rounded-full bg-silver pl-5 pr-12 font-sans text-[11px] font-semibold text-navy opacity-0 shadow-[0_6px_16px_0] shadow-black/25 transition-[opacity,clip-path] duration-300 ease-smooth [clip-path:inset(0_0_0_100%)] group-hover/item:opacity-100 group-hover/item:[clip-path:inset(0_0_0_0)] group-focus-within/item:opacity-100 group-focus-within/item:[clip-path:inset(0_0_0_0)] motion-reduce:transition-none"
        >
          <span className="whitespace-nowrap">{item.pillLabel ?? item.label}</span>
      </span>
      {item.href.startsWith("/") ? (
        <Link {...props} to={item.href}>
          {icon}
        </Link>
      ) : (
        <a
          {...props}
          href={item.href}
          rel={item.external ? "noopener noreferrer" : undefined}
          target={item.external ? "_blank" : undefined}
        >
          {icon}
        </a>
      )}
    </div>
  );
}



export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click or Escape (only while open)
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const count = c.items.length;

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2.5 sm:bottom-6 sm:right-6"
      ref={rootRef}
    >
      <ul
        aria-hidden={!open}
        className={cn(
          "flex flex-col items-center gap-2.5",
          !open && "pointer-events-none",
        )}
        id="floating-actions-list"
      >
        {c.items.map((item, i) => (
          <li
            className={cn(
              "transition-[opacity,transform] duration-300 ease-smooth motion-reduce:transition-none",
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
            key={item.id}
            style={{ transitionDelay: `${open ? (count - 1 - i) * 40 : 0}ms` }}
          >
            <ActionItem item={item} open={open} />
          </li>
        ))}
      </ul>

      {/* Click toggles the stack; nothing opens on hover or focus */}
      <button
        aria-controls="floating-actions-list"
        aria-expanded={open}
        aria-label={c.toggleLabel}
        className={cn(
          circle,
          "bg-electric transition-[opacity,transform] hover:scale-110",
          !scrolled && !open && "opacity-80",
        )}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <ChevronUp
          aria-hidden="true"
          className={cn(
            "transition-transform duration-300 ease-smooth motion-reduce:transition-none",
            open && "rotate-180",
          )}
          size={18}
          strokeWidth={2.5}
        />
      </button>
    </div>
  );
}