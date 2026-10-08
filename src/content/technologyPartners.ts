export type TechPart = { text: string; accent?: boolean };

export type TechGroup = {
  title: string;
  partners: string[];
};

export const technologyPartnersContent = {
  eyebrow: "Technology Partners",
  titleLines: [
    [{ text: "Powered by " }, { text: "Modern", accent: true }],
    [{ text: "Technology." }],
  ] satisfies TechPart[][],
  description:
    "Precision machinery and digital tools mean consistent fit, repeatable colour and faster turnaround from sample to bulk.",
  points: [
    "Automated cutting and 3D sampling",
    "Sublimation, embroidery and digital print",
    "Colour-managed production workflow",
  ],
  groups: [
    {
      title: "Advanced Telecom & IT Infrastructure",
      partners: ["Nayatel (Private) Limited"],
    },
    { title: "Security & Surveillance", partners: ["Hikvision"] },
    { title: "Cutting & Finishing Machinery", partners: ["Laike"] },
    { title: "Embroidery & Digitizing Technology", partners: ["Tajima"] },
    { title: "IT & Computer Systems", partners: ["Dell"] },
    { title: "Heat Transfer & Press Machines", partners: ["East Sign"] },
    {
      title: "Design & Product Development Tools",
      partners: ["Adobe", "CorelDRAW"],
    },
    {
      title: "Testing & Quality Equipment",
      partners: ["James Heal", "SDL Atlas"],
    },
    {
      title: "ERP, CAD & Production Software",
      partners: ["Lectra", "Optitex", "CLO 3D"],
    },
    {
      title: "Printing, Sublimation & Ink Technology",
      partners: ["Kiian Digital", "Epson", "Mimaki", "Roland DG"],
    },
    {
      title: "Cutting & CAD/CAM Systems",
      partners: [
        "Gerber Technology",
        "Lectra",
        "Bullmer",
        "Eastman Machine Company",
      ],
    },
    {
      title: "Advanced Sewing & Stitching Machinery",
      partners: [
        "JUKI Corporation",
        "Jack Sewing Machine",
        "Brother Industries",
        "Pegasus Sewing Machine",
        "Great",
        "Gemsy",
        "Masfit",
        "Joyee",
      ],
    },
  ] satisfies TechGroup[],
};