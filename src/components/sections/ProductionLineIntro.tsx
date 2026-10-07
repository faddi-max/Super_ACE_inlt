import { Reveal } from "@/components/animation";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import type { ProductionLineContent } from "@/content/productionLine";

type ProductionLineIntroProps = { content: ProductionLineContent };

export function ProductionLineIntro({ content: c }: ProductionLineIntroProps) {
  return (
    <Section
      aria-labelledby="production-line-title"
      className="bg-white py-12 text-navy md:py-16"
      containerClassName="flex flex-col items-center text-center"
    >
      <Reveal className="space-y-4">
        <Heading
          as="h2"
          className="text-[32px] leading-[30px] tracking-[1.28px] text-navy sm:text-[44px] sm:leading-[39px]"
          id="production-line-title"
        >
          {c.titleLead} <span className="text-electric">{c.titleAccent}</span>{" "}
          {c.titleRest}
        </Heading>
        <p className="mx-auto max-w-4xl font-sans text-[14px] font-normal leading-[24px] text-steel">
          {c.description}
        </p>
      </Reveal>
    </Section>
  );
}