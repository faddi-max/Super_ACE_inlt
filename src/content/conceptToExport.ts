export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const conceptToExportContent = {
  eyebrow: "From concept to export",
  titleLead: "From Concept to Export,",
  titleAccent: "Engineered",
  titleRest: "Under Control.",
  description:
    "A disciplined production system built around specification, consistency and performance from the first product brief through final export preparation.",
  panelLabel: "Manufacturing Process",
  panelMeta: "Controlled production flow",
  steps: [
    {
      number: "01",
      title: "Enquiry &\nRequirements",
      description: "Brief, quantities, market and delivery requirements.",
    },
    {
      number: "02",
      title: "Product Brief",
      description: "Product direction, construction and intended use.",
    },
    {
      number: "03",
      title: "Material &\nConstruction",
      description: "Fabric, trims and build specifications are aligned.",
    },
    {
      number: "04",
      title: "Design / Specification",
      description: "Artwork, measurements and specifications are confirmed.",
    },
    {
      number: "05",
      title: "Sampling",
      description: "The physical product direction is developed and reviewed.",
    },
    {
      number: "06",
      title: "Review & Revision",
      description: "Feedback is translated into controlled refinements.",
    },
    {
      number: "07",
      title: "Approval",
      description: "The production-ready specification is approved.",
    },
    {
      number: "08",
      title: "Bulk Production",
      description: "Production follows the approved product direction.",
    },
    {
      number: "09",
      title: "Quality Control",
      description:
        "Quality checkpoints remain integrated through production.",
    },
    {
      number: "10",
      title: "Packing & Export",
      description: "Finished goods are prepared for international shipment.",
    },
  ] satisfies ProcessStep[],
};