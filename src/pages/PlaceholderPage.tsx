import type { PageCopy } from "@/types";
import { Reveal } from "@/components/animation";
import { PageLayout } from "@/components/layout/PageLayout";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

type PlaceholderPageProps = {
  page: PageCopy;
};

export function PlaceholderPage({ page }: PlaceholderPageProps) {
  return (
    <PageLayout>
      <Section className="min-h-[55vh] border-b border-slate md:flex md:items-center">
        <Reveal className="max-w-4xl space-y-5">
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <Heading as="h1">{page.title}</Heading>
          <p className="max-w-xl text-lead text-slate">{page.description}</p>
        </Reveal>
      </Section>
    </PageLayout>
  );
}
