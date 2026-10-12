export type StructureIcon =
  | "landmark"
  | "factory"
  | "design"
  | "printer"
  | "scissors"
  | "shirt"
  | "shield"
  | "package"
  | "clipboard"
  | "warehouse"
  | "flask"
  | "trending"
  | "truck"
  | "calculator"
  | "users"
  | "wrench";

export type StructureItem = {
  number: string;
  category: string;
  title: string;
  details: string[];
  icon: StructureIcon;
};

// Order is row by row: odd numbers sit left of the line, even numbers right
export const aboutStructureContent = {
  eyebrow: "Our Structure",
  titleLead: "One Team.",
  titleAccent: "Every Detail.",
  description:
    "A coordinated team across leadership, product development, manufacturing, quality, and global operations working together to deliver dependable sportswear production.",
  footer: "One connected team · One quality standard",
  items: [
    {
      number: "01",
      category: "Leadership",
      title: "Executive & Management",
      details: ["CEO & Directors", "General Management", "Operations"],
      icon: "landmark",
    },
    {
      number: "02",
      category: "Production",
      title: "Production",
      details: ["Line Supervision", "Stitching In-Charge", "PPC"],
      icon: "factory",
    },
    {
      number: "03",
      category: "Product",
      title: "Design & Development",
      details: ["Creative Design", "Pattern Making", "CAD & Sampling"],
      icon: "design",
    },
    {
      number: "04",
      category: "Decoration",
      title: "Printing & Embellishment",
      details: ["Screen Printing", "Sublimation", "Embroidery"],
      icon: "printer",
    },
    {
      number: "05",
      category: "Material Prep",
      title: "Cutting",
      details: ["Fabric Cutting", "Marker Making", "Spreading"],
      icon: "scissors",
    },
    {
      number: "06",
      category: "Assembly",
      title: "Stitching",
      details: ["Stitching Supervisors", "Operators", "Inline Checks"],
      icon: "shirt",
    },
    {
      number: "07",
      category: "Quality",
      title: "Quality Assurance & Control",
      details: ["QA Management", "QC Inspection", "Final Audit"],
      icon: "shield",
    },
    {
      number: "08",
      category: "Delivery",
      title: "Packing & Dispatch",
      details: ["Packing Team", "Dispatch Coordination", "Logistics"],
      icon: "package",
    },
    {
      number: "09",
      category: "Sourcing",
      title: "Procurement & Supply Chain",
      details: ["Purchasing", "Vendor Coordination", "Inventory Control"],
      icon: "clipboard",
    },
    {
      number: "10",
      category: "Storage",
      title: "Warehouse & Inventory",
      details: ["Warehouse Management", "Store Keeping", "Stock Audits"],
      icon: "warehouse",
    },
    {
      number: "11",
      category: "Validation",
      title: "Laboratory & Testing",
      details: ["Lab Testing", "GSM & Color Fastness", "Wash Tests"],
      icon: "flask",
    },
    {
      number: "12",
      category: "Growth",
      title: "Sales & Marketing",
      details: ["Sales", "Export Sales", "Digital Marketing & CRM"],
      icon: "trending",
    },
    {
      number: "13",
      category: "Global Trade",
      title: "Export & Documentation",
      details: ["Export Management", "Shipping Documents", "Coordination"],
      icon: "truck",
    },
    {
      number: "14",
      category: "Control",
      title: "Finance & Accounts",
      details: ["Accounting", "Payroll", "Auditing"],
      icon: "calculator",
    },
    {
      number: "15",
      category: "People",
      title: "Human Resources",
      details: ["Recruitment", "Training & Development", "Compliance"],
      icon: "users",
    },
    {
      number: "16",
      category: "Reliability",
      title: "Maintenance & Engineering",
      details: ["Maintenance", "Mechanical Engineering", "Equipment Support"],
      icon: "wrench",
    },
  ] satisfies StructureItem[],
};