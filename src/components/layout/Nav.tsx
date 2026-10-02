import { NavLink } from "react-router-dom";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/cn";

type NavProps = {
  className?: string;
  onNavigate?: () => void;
};

export function Nav({ className, onNavigate }: NavProps) {
  return (
    <nav aria-label="Main navigation" className={className}>
      <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-7">
        {navigation.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  "font-montserrat text-[10px] font-bold uppercase leading-[14px] tracking-[1.2px] align-middle transition-colors hover:text-electric",
                  isActive ? "text-electric" : "text-white",
                )
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}