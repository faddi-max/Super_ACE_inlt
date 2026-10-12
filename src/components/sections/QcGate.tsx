import { Reveal } from "@/components/animation";
import { qcGateContent as c } from "@/content/quality";
import { cn } from "@/lib/cn";

const grid = "color-mix(in srgb, var(--color-electric) 7%, transparent)";

// Spec: 1200 x 342.9 · padding 44 · radius 3 · navy + radial electric glow @ 38%
const panelStyle = {
  backgroundColor: "var(--color-navy)",
  backgroundImage: [
    "radial-gradient(50% 50% at 50% 50%, color-mix(in srgb, var(--color-electric) 38%, transparent) 0%, color-mix(in srgb, var(--color-navy) 38%, transparent) 100%)",
    `linear-gradient(${grid} 1px, transparent 1px)`,
    `linear-gradient(90deg, ${grid} 1px, transparent 1px)`,
  ].join(", "),
  backgroundSize: "100% 100%, 24px 24px, 24px 24px",
} as const;

export function QcGate() {
  return (
    <Reveal className="mt-12 lg:mt-[60px]" delay={100}>
      <section
        aria-labelledby="qc-gate-title"
        className="rounded-[3px] px-5 py-11 text-white sm:px-8 lg:min-h-[342.9px] lg:px-12"
        style={panelStyle}
      >
        <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
          <p className="font-sans text-[8px] font-extrabold uppercase leading-none tracking-[0.1em] text-electric sm:text-[9px]">
            {c.eyebrow}
          </p>
          <h2
            className="mt-2.5 font-display text-[30px] font-bold uppercase leading-none tracking-[0.3px] sm:text-[36px]"
            id="qc-gate-title"
          >
            {c.title}
          </h2>
          <p className="mt-4 font-sans text-[11px] leading-5 text-silver sm:text-[12px] sm:leading-[22px]">
            {c.description}
          </p>
        </div>

        {/* Timeline: vertical on mobile, 5 columns from lg */}
        <ol className="relative mt-9 grid gap-7 lg:grid-cols-5 lg:gap-0">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[17px] top-4 w-px bg-white/30 lg:bottom-auto lg:left-[10%] lg:right-[10%] lg:top-[17px] lg:h-px lg:w-auto"
          />
          {c.stages.map((stage, i) => {
            const filled = i === 0 || i === c.stages.length - 1;
            return (
              <li
                className="group relative flex items-start gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                key={stage.number}
              >
                <span
                  className={cn(
                    "relative z-10 grid size-[34px] shrink-0 place-items-center rounded-full border-[3px] border-white/90 font-sans text-[8px] font-extrabold leading-none transition-transform duration-500 ease-smooth group-hover:scale-110 motion-reduce:transition-none",
                    filled
                      ? "bg-electric text-white shadow-[0_0_14px_0] shadow-electric/50"
                      : "bg-white text-navy",
                  )}
                >
                  {stage.number}
                </span>
                <div className="min-w-0 lg:mt-3.5">
                  <h3 className="font-display text-[16px] font-bold leading-none tracking-[0.2px] text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-1.5 max-w-[150px] font-sans text-[8px] leading-3 text-mist lg:mx-auto">
                    {stage.question}
                  </p>
                  <p className="mt-2 font-sans text-[7px] font-extrabold uppercase leading-none tracking-[0.15em] text-silver">
                    {stage.tag}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </Reveal>
  );
}