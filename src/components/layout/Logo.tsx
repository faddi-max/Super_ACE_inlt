import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";
import { site } from "@/config/site";

type LogoProps = {
  variant?: "on-dark" | "on-light";
  className?: string;
};

export function Logo({ variant = "on-dark", className }: LogoProps) {
  return (
    <Link
      aria-label={`${site.name} home`}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 px-1 py-1",
        variant === "on-dark" ? "text-white" : "text-navy",
        className,
      )}
      to="/"
    >
      <svg
        aria-hidden="true"
        className="size-8 shrink-0 text-electric"
        viewBox="0 0 52 52"
      >
        <path fill="currentColor" d="M8 5h36L26 20h16L8 47l9-18H5L24 5H8Z" />
      </svg>
      <span className="font-display text-2xl font-extrabold uppercase leading-none">
        SUPER ACE
      </span>
    </Link>
  );
}
