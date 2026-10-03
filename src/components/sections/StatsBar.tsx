import { CountUp, Reveal } from "@/components/animation";
import { statsContent as c } from "@/content/stats";
import { trackPointer } from "@/lib/spotlight";

export function StatsBar() {
  return (
    <section className="bg-navy py-16 lg:py-[72px]">
      <div className="mx-auto w-full max-w-360 px-6 lg:px-30">
        <div className="grid border-l-[0.8px] border-t-[0.8px] border-white/14 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((item, index) => (
            <Reveal
              className="motion-spotlight flex min-h-[150px] flex-col justify-center border-b-[0.8px] border-r-[0.8px] border-white/14 px-7"
              delay={index * 90}
              key={item.label}
              onPointerMove={trackPointer}
            >
              <CountUp
                className="font-display text-[56px] font-bold leading-[56px] text-white"
                suffix={item.suffix}
                value={item.value}
              />
              <p className="mt-3 font-sans text-ui-label font-bold uppercase text-electric">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
