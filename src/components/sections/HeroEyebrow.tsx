import { heroEyebrow, type EyebrowSegment } from "@/content/hero";
import { cn } from "@/lib/cn";

type HeroEyebrowProps = {
  className?: string;
  segments?: EyebrowSegment[];
};

export function HeroEyebrow({
  className,
  segments = heroEyebrow,
}: HeroEyebrowProps) {
  return (
    <p
      className={cn(
        "text-center font-montserrat leading-5 text-hero-eyebrow font-bold uppercase text-white",
        className,
      )}
    >
      {segments.map((segment, index) => (
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