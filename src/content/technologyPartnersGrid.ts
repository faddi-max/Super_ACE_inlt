export type TechCategory =
  | "design"
  | "sewing"
  | "printing"
  | "cutting"
  | "testing"
  | "it";
export type TechFilter = "all" | TechCategory;

export type PartnerMark = {
  kind: "badge" | "ring" | "word" | "squares";
  text?: string;
  color?: string;
};

export type TechPartner = {
  name: string;
  category: TechCategory;
  /** Generated placeholder mark, used when there is no `logo` */
  mark: PartnerMark;
  /** Import a real logo file and put it here, e.g. logo: adobeLogo */
  logo?: string;
};

const badge = (text: string, color: string): PartnerMark => ({ kind: "badge", text, color });
const ring = (text: string, color: string): PartnerMark => ({ kind: "ring", text, color });
const word = (text: string, color: string): PartnerMark => ({ kind: "word", text, color });

export const technologyPartnersGridContent = {
  eyebrow: "Technology Partners",
  titleLines: [
    [{ text: "Trusted Technology." }],
    [{ text: "Global Partnerships.", accent: true }],
  ] satisfies { text: string; accent?: boolean }[][],
  description:
    "Powered by trusted technology leaders, we combine advanced machinery, innovative software, and precision-driven systems to deliver high-quality sportswear manufacturing for global brands.",
  statLabel: ["Trusted technologies", "in our workflow"],
  filtersLabel: "Filter technology partners",
  empty: "No partners in this category yet.",
  footerLeft: "Super Ace International / Technology partners",
  footerRight: "Engineer performance. Export excellence.",
  filters: [
    { id: "all", label: "All Partners" },
    { id: "design", label: "Design & Software" },
    { id: "sewing", label: "Sewing & Embroidery" },
    { id: "printing", label: "Printing & Transfer" },
    { id: "cutting", label: "Cutting & CAD/CAM" },
    { id: "testing", label: "Testing & Quality" },
    { id: "it", label: "IT & Infrastructure" },
  ] satisfies { id: TechFilter; label: string }[],
  // Same order as the design (42 cards). Last ten names are read from a small screenshot: verify
  partners: [
    { name: "Adobe", category: "design", mark: badge("A", "#FA0F00") },
    { name: "CorelDRAW", category: "design", mark: ring("C", "#6C3CE0") },
    { name: "JUKI", category: "sewing", mark: word("JUKI", "#1D3B8B") },
    { name: "JACK", category: "sewing", mark: word("JACK", "#1E73BE") },
    { name: "Brother", category: "sewing", mark: badge("b", "#0B3B9E") },
    { name: "PEGASUS", category: "sewing", mark: ring("P", "#D6202B") },
    { name: "GREAT", category: "sewing", mark: word("GREAT", "#6B7280") },
    { name: "GEMSY", category: "sewing", mark: ring("G", "#E03A3E") },
    { name: "MASFIT", category: "sewing", mark: word("MASFIT", "#333333") },
    { name: "JOYEE", category: "sewing", mark: badge("JOYEE", "#111111") },
    { name: "Tajima", category: "sewing", mark: badge("T", "#C21D7A") },
    { name: "Kiian Digital", category: "printing", mark: word("KIIAN", "#2A2F3A") },
    { name: "EPSON", category: "printing", mark: word("EPSON", "#003399") },
    { name: "Mimaki", category: "printing", mark: ring("M", "#C8102E") },
    { name: "Roland DG", category: "printing", mark: badge("R", "#2F6DB5") },
    { name: "East Sign", category: "printing", mark: badge("E", "#E8742A") },
    { name: "Gerber", category: "cutting", mark: badge("G", "#F5A623") },
    { name: "Lectra", category: "cutting", mark: ring("L", "#111111") },
    { name: "Bullmer", category: "cutting", mark: word("BULLMER", "#1C3F94") },
    { name: "Eastman", category: "cutting", mark: ring("E", "#F0A30A") },
    { name: "James Heal", category: "testing", mark: badge("JH", "#111111") },
    { name: "SDL ATLAS", category: "testing", mark: word("SDL ATLAS", "#C0272D") },
    { name: "Dell", category: "it", mark: ring("D", "#007DB8") },
    { name: "Optitex", category: "design", mark: ring("O", "#111111") },
    { name: "CLO 3D", category: "design", mark: word("CLO", "#111111") },
    { name: "Nayatel", category: "it", mark: badge("N", "#1F3E8C") },
    { name: "Hikvision", category: "it", mark: word("HIK", "#D71920") },
    { name: "Laike", category: "cutting", mark: badge("L", "#4A6FE3") },
    { name: "Microsoft Technology", category: "it", mark: { kind: "squares" } },
    { name: "CAD & Production", category: "cutting", mark: badge("CA", "#2F6DB5") },
    { name: "Advanced Sewing & Stitching Machinery", category: "sewing", mark: badge("AS", "#2F6DB5") },
    { name: "Jack Sewing Machine", category: "sewing", mark: word("JACK", "#1E73BE") },
    { name: "ERP", category: "design", mark: badge("ERP", "#1E90FF") },
    { name: "Heat Transfer", category: "printing", mark: badge("HT", "#E8742A") },
    { name: "Sublimation", category: "printing", mark: badge("S", "#6C3CE0") },
    { name: "Quality Lab", category: "testing", mark: badge("QL", "#1E90FF") },
    { name: "IT Systems", category: "it", mark: badge("IT", "#1E90FF") },
    { name: "Embroidery & Digitizing", category: "sewing", mark: badge("ED", "#C21D7A") },
    { name: "Dyeing & Finishing", category: "printing", mark: badge("DF", "#1E73BE") },
    { name: "Telecom Infrastructure", category: "it", mark: badge("TI", "#1F3E8C") },
    { name: "Digital Workflow", category: "design", mark: badge("DW", "#1E90FF") },
    { name: "CAD/CAM", category: "cutting", mark: badge("CC", "#2F6DB5") },
  ] satisfies TechPartner[],
};