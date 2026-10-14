import fabrics from "@/assets/images/resources/fabrics.jpg";
import fitness from "@/assets/images/fitness.jpg";

export type ArticleBlock =
  | { type: "paragraph"; text: string; emphasis?: "lead" | "strong" }
  | { type: "quote"; text: string; cite: string }
  | { type: "image"; src: string; alt: string; caption: string }
  | {
      type: "steps";
      items: { number: string; title: string; description: string }[];
    }
  | { type: "callout"; eyebrow: string; title: string; text: string };

export type ArticleSection = {
  id: string;
  number: string;
  nav: string;
  eyebrow: string;
  title: { text: string; accent?: boolean }[];
  blocks: ArticleBlock[];
};

// Placeholder copy – replace with approved article text
export const articleContent = {
  index: "01",
  summary:
    "Performance is not created at the final inspection point. It is built into every decision that happens before a garment reaches the production floor.",
  stripLabel: "From the floor",
  stripMeta: "Manufacturing · 08 Oct 2026",
  chaptersLabel: "Article & chapters",
  categoriesLabel: "Explore categories",
  categories: [
    { label: "Manufacturing", to: "/blogs?category=manufacturing" },
    { label: "Materials", to: "/blogs?category=materials" },
    { label: "Product Development", to: "/blogs?category=product-development" },
    { label: "Quality", to: "/blogs?category=quality" },
    { label: "Industry", to: "/blogs?category=industry" },
  ],
  meta: [
    { label: "Filed under", value: "Manufacturing", accent: true },
    { label: "Read time", value: "8 minutes" },
    { label: "Topic", value: "Performance apparel" },
  ],
  shareLabel: "Share",
  copyLabel: "Copy link",
  copiedLabel: "Link copied",
  shares: [
    {
      label: "Share on LinkedIn",
      short: "in",
      base: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    {
      label: "Share on Facebook",
      short: "f",
      base: "https://www.facebook.com/sharer/sharer.php?u=",
    },
  ],
  sections: [
    {
      id: "decision-point",
      number: "01",
      nav: "The decision point",
      eyebrow: "The decision point",
      title: [
        { text: "Performance starts " },
        { text: "before", accent: true },
        { text: " production" },
      ],
      blocks: [
        {
          type: "paragraph",
          emphasis: "lead",
          text: "A successful sportswear program begins with a clear product brief. The intended sport, movement, climate, fit, visual identity and commercial requirements all influence the way a garment is developed.",
        },
        {
          type: "paragraph",
          text: "Fit, construction and fabric choices made early shape everything that follows. When the brief is vague, every later stage has to guess, and guesses show up as inconsistency on the finished product. A defined specification gives the whole team one reference for each decision, from sampling to final inspection.",
        },
        {
          type: "quote",
          text: "Every production decision should protect the performance requirement defined at the start.",
          cite: "Super Ace International / Manufacturing principle",
        },
        {
          type: "paragraph",
          text: "A simple technical communication package becomes important here. The clearer the requirements are at the outset, the easier it is to carry them through to sample and bulk production without drift.",
        },
      ],
    },
    {
      id: "material-decisions",
      number: "02",
      nav: "Material decisions",
      eyebrow: "Material decisions",
      title: [
        { text: "The fabric " },
        { text: "defines", accent: true },
        { text: " the foundation" },
      ],
      blocks: [
        {
          type: "paragraph",
          emphasis: "lead",
          text: "Material selection influences how a garment feels, performs and holds its shape through repeated use. The right fabric depends on the sport, the construction and the conditions it will be worn in.",
        },
        {
          type: "image",
          src: fabrics,
          alt: "Collared shirts in pale blue and white hanging on wooden hangers",
          caption: "Fabric weight, finish and handfeel are reviewed before development begins.",
        },
        {
          type: "paragraph",
          text: "Weight, stretch, recovery, breathability and durability can all affect the final garment. Development teams therefore evaluate the material as part of the complete product, not as an isolated component.",
        },
      ],
    },
    {
      id: "product-development",
      number: "03",
      nav: "Product development",
      eyebrow: "Product development",
      title: [
        { text: "Turning a " },
        { text: "brief", accent: true },
        { text: " into a " },
        { text: "product", accent: true },
      ],
      blocks: [
        {
          type: "paragraph",
          text: "Once the direction is set, development translates the brief into a manufacturable product. Patterns, construction, trims, sizing and decoration are resolved so that nothing is left open when sampling starts.",
        },
        {
          type: "steps",
          items: [
            {
              number: "01",
              title: "Product brief",
              description: "Sport, fit, fabric and commercial requirements are defined.",
            },
            {
              number: "02",
              title: "Development",
              description: "Patterns, construction and decoration are specified.",
            },
            {
              number: "03",
              title: "Sample review",
              description: "Samples are reviewed against the approved specification.",
            },
            {
              number: "04",
              title: "Production ready",
              description: "The approved product moves into bulk production.",
            },
          ],
        },
      ],
    },
    {
      id: "operations",
      number: "04",
      nav: "Operations",
      eyebrow: "Operations",
      title: [{ text: "Precision lives on the floor" }],
      blocks: [
        {
          type: "paragraph",
          text: "Production is where the approved specification becomes a repeatable manufacturing process. Consistency depends on controlled construction steps, clear specifications and disciplined production practices.",
        },
        {
          type: "paragraph",
          text: "Cutting, sewing, decoration, finishing and packing need to work together so that the approved product is reproduced predictably across every size and every order.",
        },
        {
          type: "image",
          src: fitness,
          alt: "Athletic training equipment in a gym",
          caption: "Production-floor discipline keeps every order consistent.",
        },
      ],
    },
    {
      id: "technical-detail",
      number: "05",
      nav: "Technical detail",
      eyebrow: "Technical testing",
      title: [{ text: "The detail behind the product" }],
      blocks: [
        {
          type: "paragraph",
          emphasis: "strong",
          text: "The most useful manufacturing insights often live in the details: the material choice, the construction decision, the way a sample is reviewed, and the checks that keep an approved product consistent at scale.",
        },
        {
          type: "paragraph",
          text: "For a performance garment, the seam, the stitch pattern, the pattern fit and the finishing influence how the product feels and how long it lasts. Each decision is recorded so the same result can be reproduced in bulk.",
        },
        {
          type: "paragraph",
          text: "Process development then turns those requirements into controllable steps. Inspection points are placed where they are most useful, not only at the end of the line.",
        },
        {
          type: "callout",
          eyebrow: "Manufacturing note",
          title: "Good production is repeatable production",
          text: "A clear specification, controlled construction and consistent checks make the same quality possible on the first order and the fiftieth.",
        },
        {
          type: "paragraph",
          text: "This approach also supports better communication between brand and manufacturing teams. When the product is described clearly, questions can be asked and answered before a problem reaches the floor.",
        },
      ],
    },
  ] satisfies ArticleSection[],
};