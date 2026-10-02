import { pillars } from "@/content/sections";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";

export function PillarsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {pillars.map((pillar) => (
        <Card key={pillar.title}>
          <Heading as="h3" className="mb-3">
            {pillar.title}
          </Heading>
          <p className="text-body text-silver">{pillar.description}</p>
        </Card>
      ))}
    </div>
  );
}
