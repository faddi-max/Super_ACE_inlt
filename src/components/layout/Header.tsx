import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import logo from "@/assets/brand/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="relative z-50 w-full bg-navy"
      style={{
        backgroundColor: "var(--color-navy)",
        backgroundImage:
          "radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--color-electric) 10%, transparent) 0%, color-mix(in srgb, var(--color-navy) 10%, transparent) 100%)",
        backgroundBlendMode: "screen",
      }}
    >
      {/* 1440 x 80, horizontal padding 120px, logo 77x77 */}
      <div className="mx-auto flex h-20 w-full max-w-360 items-center justify-between gap-2.5 px-6 lg:px-30">
        <Link
          to="/"
          aria-label="SUPER ACE home"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="SUPER ACE"
            className="size-[77px] max-w-none object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <Nav className="hidden lg:block" />

        <Link
          to="/contact"
          className="group hidden h-9 items-center gap-2 rounded-[3px] bg-electric px-4 text-center font-montserrat text-[10px] font-semibold uppercase leading-3.5 tracking-[0.7px] text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric lg:inline-flex"
        >
          Explore More
          <ArrowRight
            className="transition-transform duration-300 group-hover:translate-x-1"
            size={12}
            strokeWidth={2.5}
          />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-sm text-white transition-colors duration-300 hover:bg-white/10 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="absolute inset-x-0 top-20 bg-navy px-6 pb-8 pt-4 lg:hidden">
          <Nav onNavigate={() => setOpen(false)} />
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="group mt-6 inline-flex h-10 items-center gap-2 rounded-[3px] bg-electric px-5 font-montserrat text-[10px] font-semibold uppercase leading-3.5 tracking-[0.7px] text-white shadow-button transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
          >
            Explore More
            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={12}
            />
          </Link>
        </div>
      )}
    </header>
  );
}
