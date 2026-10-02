import { Link } from "react-router-dom";
import { pages } from "@/content/pages";
import { PageLayout } from "@/components/layout/PageLayout";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  const page = pages.notFound;

  return (
    <PageLayout>
      <Section className="min-h-[55vh] border-b border-slate md:flex md:items-center">
        <div className="max-w-4xl space-y-5">
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <Heading as="h1">{page.title}</Heading>
          <p className="text-lead text-silver">{page.description}</p>
          <Link
            className="inline-flex min-h-11 items-center bg-electric px-5 py-3 font-sans text-button font-semibold uppercase text-white hover:bg-white hover:text-navy"
            to="/"
          >
            Return home
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}
