import {
  Calculator,
  ClipboardList,
  Factory,
  FlaskConical,
  Landmark,
  Package,
  PencilRuler,
  Printer,
  Scissors,
  ShieldCheck,
  Shirt,
  TrendingUp,
  Truck,
  UserPlus,
  Warehouse,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import {
  aboutStructureContent as c,
  type StructureIcon,
  type StructureItem,
} from "@/content/aboutStructure";
import { cn } from "@/lib/cn";
import { trackPointer } from "@/lib/spotlight";
import bg from "@/assets/images/process-journey/bg.png";

const icons: Record<StructureIcon, LucideIcon> = {
  landmark: Landmark,
  factory: Factory,
  design: PencilRuler,
  printer: Printer,
  scissors: Scissors,
  shirt: Shirt,
  shield: ShieldCheck,
  package: Package,
  clipboard: ClipboardList,
  warehouse: Warehouse,
  flask: FlaskConical,
  trending: TrendingUp,
  truck: Truck,
  calculator: Calculator,
  users: UserPlus,
  wrench: Wrench,
};

const pad = (n: number) => String(n).padStart(2, "0");

// Pair items into rows: [left, right]
const rows = c.items.reduce<StructureItem[][]>((acc, item, i) => {
  if (i % 2 === 0) acc.push([item]);
  else acc[acc.length - 1].push(item);
  return acc;
}, []);

function StructureCard({
  item,
  side,
  delay,
}: {
  item: StructureItem;
  side: "left" | "right";
  delay: number;
}) {
  const Icon = icons[item.icon];
  const isLeft = side === "left";

  return (
    <Reveal className="h-full" delay={delay}>
      <article
        className={cn(
          "motion-spotlight group flex h-full min-h-[96px] items-center gap-4 rounded-[10px] border border-slate border-t-slate-edge bg-slate/27 px-4 py-4 backdrop-blur-sm transition-[transform,border-color] duration-500 ease-smooth hover:border-electric/40 motion-reduce:transition-none sm:px-5 lg:h-[115px] lg:gap-5 lg:px-6 lg:py-0",
          // Left cards put the icon next to the centre line on desktop
          isLeft ? "lg:flex-row-reverse lg:text-right" : "lg:text-left",
        )}
        onPointerMove={trackPointer}
      >
        <span
          aria-hidden="true"
          className="relative grid size-10 shrink-0 place-items-center rounded-lg border border-electric/30 bg-electric/10 text-electric transition-[background-color,color,border-color] duration-300 ease-smooth group-hover:border-electric group-hover:bg-electric group-hover:text-white motion-reduce:transition-none sm:size-11 lg:size-[46px]"
        >
          <Icon className="size-[18px] lg:size-5" strokeWidth={1.75} />
        </span>

        <div className="relative min-w-0 flex-1">
          <p className="font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.16em] text-electric sm:text-[8px]">
            {item.number} / {item.category}
          </p>
          <h3 className="mt-2 font-display text-[19px] font-bold uppercase leading-none text-white sm:text-[21px] lg:mt-2.5 lg:text-[22px]">
            {item.title}
          </h3>
          <p className="mt-2 font-sans text-[9px] leading-[14px] text-mist lg:mt-2.5">
            {item.details.join(" · ")}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export function OurStructure() {
  return (
    <section
      aria-labelledby="structure-title"
      className="bg-navy bg-cover bg-top py-14 text-white sm:py-16 lg:py-[72px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-full max-w-[1228px] px-5 sm:px-8 xl:px-0">
        <Reveal>
          <Eyebrow className="text-[9px] leading-none tracking-[0.05em] sm:text-[10px]">
            {c.eyebrow}
          </Eyebrow>
          <Heading
            as="h2"
            className="mt-3.5 text-[36px] font-extrabold leading-[0.95] tracking-[0.3px] text-white sm:text-[44px] lg:leading-[39.16px] lg:tracking-[0.44px]"
            id="structure-title"
          >
            <span className="block">{c.titleLead}</span>
            <span className="block text-electric">{c.titleAccent}</span>
          </Heading>
          <p className="mt-5 max-w-[560px] font-sans text-[12px] leading-5 text-silver sm:text-[13px] sm:leading-[22px]">
            {c.description}
          </p>
        </Reveal>

        {/* Rows: cards either side of a centre line on desktop, single column below */}
        <ol className="relative mt-10 flex flex-col gap-3 sm:mt-12 lg:mt-14 lg:gap-5">
          {/* Centre line with soft glow */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-electric shadow-[0_0_10px_1px] shadow-electric/60 lg:block"
          />

          {rows.map((row, r) => (
            <li
              className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_100px_minmax(0,1fr)] lg:items-center lg:gap-0"
              key={r}
            >
              <StructureCard delay={r * 60} item={row[0]} side="left" />

              {/* Node + connectors */}
              <span
                aria-hidden="true"
                className="relative hidden items-center justify-center lg:flex"
              >
                <span className="h-px flex-1 bg-electric/30" />
                <span className="relative z-10 grid size-[42px] shrink-0 place-items-center rounded-full border border-electric/40 bg-navy shadow-[0_0_14px_0] shadow-electric/40">
                  <span className="grid size-[30px] place-items-center rounded-full border-[1.5px] border-electric font-sans text-[8px] font-extrabold leading-none text-electric">
                    {pad(r + 1)}
                  </span>
                </span>
                <span className="h-px flex-1 bg-electric/30" />
              </span>

              {row[1] && (
                <StructureCard delay={r * 60 + 80} item={row[1]} side="right" />
              )}
            </li>
          ))}
        </ol>

        <Reveal
          className="mt-10 flex items-center justify-center gap-2 lg:mt-14"
          delay={200}
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-electric" />
          <p className="text-center font-sans text-[8px] font-semibold uppercase leading-none tracking-[0.2em] text-mist sm:text-[9px]">
            {c.footer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}