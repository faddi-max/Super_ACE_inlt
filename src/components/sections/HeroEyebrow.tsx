import { heroEyebrow } from "@/content/hero";
import { cn } from "@/lib/cn";

type HeroEyebrowProps = { className?: string };

export function HeroEyebrow({ className }: HeroEyebrowProps) {
  return (
    <p
      className={cn(
        "text-center font-montserrat leading-5 text-hero-eyebrow font-bold uppercase text-white",
        className,
      )}
    >
      {heroEyebrow.map((segment, index) => (
        <span key={segment.text}>
          {index > 0 && " "}
          <span className={segment.accent ? "text-electric" : undefined}>
            {segment.text}
          </span>
        </span>
      ))}
    </p>
  );
}