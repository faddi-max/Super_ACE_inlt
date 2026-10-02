import { useState } from "react";
import { Nav } from "@/components/layout/Nav";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="flex size-11 flex-col items-center justify-center gap-1.5 text-white focus-visible:outline-2 focus-visible:outline-electric"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span className="h-0.5 w-5 bg-current" />
        <span className="h-0.5 w-5 bg-current" />
      </button>
      {isOpen && (
        <div
          className="absolute inset-x-0 top-full border-t border-slate bg-navy px-5 py-6"
          id="mobile-navigation"
        >
          <Nav onNavigate={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}
