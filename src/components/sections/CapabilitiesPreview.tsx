import { Link } from "react-router-dom";
import { Heading } from "@/components/ui/Heading";

export function CapabilitiesPreview() {
  return (
    <div className="flex flex-col gap-4 border-y border-slate py-8 sm:flex-row sm:items-center sm:justify-between">
      <Heading as="h2">Capabilities</Heading>
      <Link
        className="font-sans text-button font-semibold uppercase text-electric hover:text-navy"
        to="/capabilities"
      >
        Explore capabilities <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
