export type MachineCategory = {
  number: string;
  label: string;
  caption: string;
  /** Eyebrow above the register title, e.g. "01 / Textile formation" */
  stage: string;
  title: string;
  description: string;
  /** Column headings after the "#" column */
  columns: string[];
  /** Column widths in fr (first column is rendered bold) */
  widths: number[];
  rows: string[][];
};

const defaultColumns = ["Type", "Model", "Dia", "Gauge"];
const defaultWidths = [357, 244, 175, 225];

export const machineSystemContent = {
  eyebrow: "Technical inventory",
  titleLead: "The",
  titleAccent: "Machine",
  titleRest: "System.",
  description:
    "One menu. One technical register. Choose the production stage and review only the equipment relevant to it.",
  menuEyebrow: "01 / Machine menu",
  menuTitle: ["Production", "Categories"],
  menuHint: "Select a category to change the register",
  registerTitle: "Technical register",
  registerHint: "Type / Model / Dia / Gauge",
  recordsLabel: "Records",
  emptyRegister: "Register data for this category is being prepared.",
  source:
    "Source: fields matched from the client-supplied machinery register. Type / Model / Dia / Gauge.",
  categories: [
    {
      number: "01",
      label: "Knitting",
      caption: "Textile formation",
      stage: "01 / Textile formation",
      title: "Knitting Machines",
      description: "Knitting equipment supporting textile formation.",
      columns: defaultColumns,
      widths: defaultWidths,
      // Gauge values read from a small screenshot – verify against the register
      rows: [
        ["Double Knit", "40", "30", "20"],
        ["Double Knit", "40", "30", "18"],
        ["Double Knit", "40", "30", "18"],
        ["Double Knit", "40", "30", "16"],
        ["Double Knit", "60", "30", "22"],
        ["Double Knit", "60", "30", "22"],
        ["Single Knit", "60", "30", "20"],
        ["Single Knit", "94", "30", "24"],
      ],
    },
    {
      number: "02",
      label: "Dyeing",
      caption: "Fabric colouration",
      stage: "02 / Fabric colouration",
      title: "Dyeing Machines",
      description: "Equipment supporting dyeing and fabric-processing stages.",
      columns: defaultColumns,
      widths: defaultWidths,
      rows: [],
    },
    {
      number: "03",
      label: "Pattern / GGT",
      caption: "Development",
      stage: "03 / Development",
      title: "Pattern & GGT",
      description: "Garment pattern technology supporting development.",
      columns: defaultColumns,
      widths: defaultWidths,
      rows: [],
    },
    {
      number: "04",
      label: "Embroidery",
      caption: "Embellishment",
      stage: "04 / Embellishment",
      title: "Embroidery Machines",
      description: "Embroidery equipment supporting branded detailing.",
      columns: defaultColumns,
      widths: defaultWidths,
      rows: [],
    },
    {
      number: "05",
      label: "Sublimation",
      caption: "Digital printing",
      stage: "05 / Digital printing",
      title: "Sublimation",
      description: "Digital printing equipment supporting custom graphics.",
      columns: defaultColumns,
      widths: defaultWidths,
      rows: [],
    },
    {
      number: "06",
      label: "Heat Transfer",
      caption: "Decoration",
      stage: "06 / Decoration",
      title: "Heat Transfer",
      description: "Heat transfer equipment supporting garment decoration.",
      columns: defaultColumns,
      widths: defaultWidths,
      rows: [],
    },
    {
      number: "07",
      label: "Stitching",
      caption: "Construction",
      stage: "07 / Construction",
      title: "Stitching Machines",
      description: "Stitching equipment supporting garment construction.",
      columns: defaultColumns,
      widths: defaultWidths,
      rows: [],
    },
    {
      number: "08",
      label: "Socks",
      caption: "Sock production",
      stage: "08 / Sock production",
      title: "Sock Production",
      description: "Dedicated equipment supporting sock production.",
      columns: defaultColumns,
      widths: defaultWidths,
      rows: [],
    },
  ] satisfies MachineCategory[],
};
