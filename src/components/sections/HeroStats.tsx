import { CountUp, Reveal } from "@/components/animation";
import { heroStats } from "@/content/stats";
import { cn } from "@/lib/cn";

type HeroStatsProps = { className?: string };

export function HeroStats({ className }: HeroStatsProps) {
  return (
    <dl
      className={cn(
        "mx-auto grid w-full max-w-200 grid-cols-2 gap-x-12.5 gap-y-8 pt-12.5",
        "md:h-32 md:grid-cols-4",
        className,
      )}
    >
      {heroStats.map((stat, index) => (
        <Reveal
          key={stat.label}
          className="group relative flex cursor-default flex-col-reverse"
          delay={index * 90}
        >
          <dt className="font-montserrat text-stat-label font-bold uppercase text-cool-gray transition-colors duration-300 ease-smooth motion-reduce:transition-none group-hover:text-white">
            {stat.label}
          </dt>
          <dd className="font-display text-stat font-extrabold text-white transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:-translate-y-1">
            <CountUp value={stat.value} />
            <span className="inline-block text-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:rotate-90">
              +
            </span>
          </dd>
          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-0 h-0.5 w-8 origin-left scale-x-0 bg-electric transition-transform duration-500 ease-smooth motion-reduce:transition-none group-hover:scale-x-100"
          />
        </Reveal>
      ))}
    </dl>
  );
}