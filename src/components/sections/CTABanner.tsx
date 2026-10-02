import { Link } from "react-router-dom";
import { site } from "@/config/site";
import { Heading } from "@/components/ui/Heading";

export function CTABanner() {
  return (
    <div className="flex flex-col gap-5 border border-slate bg-slate p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
      <div className="space-y-2">
        <Heading as="h3">{site.tagline}</Heading>
        <p className="text-small text-silver">{site.contact.label}</p>
      </div>
      <Link
        className="inline-flex min-h-11 items-center justify-center bg-electric px-5 py-3 font-sans text-button font-semibold uppercase text-white transition-colors hover:bg-white hover:text-navy"
        to={site.contact.href}
      >
        Contact
      </Link>
    </div>
  );
}
