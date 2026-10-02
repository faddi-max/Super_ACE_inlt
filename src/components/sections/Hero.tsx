import { site } from "@/config/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

type HeroProps = {
  eyebrow: string;
  title: string;
};

export function Hero({ eyebrow, title }: HeroProps) {
  return (
    <Section className="border-b border-slate py-20 md:py-28">
      <div className="max-w-4xl space-y-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" className="max-w-4xl">
          {title}
        </Heading>
        <p className="max-w-xl text-lead text-slate">{site.tagline}</p>
      </div>
    </Section>
  );
}
