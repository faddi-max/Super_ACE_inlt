export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const statsContent = {
  items: [
    { value: 15, suffix: "+", label: "Years of experience" },
    { value: 40, suffix: "+", label: "Export markets" },
    { value: 500, suffix: "+", label: "Skilled team members" },
    { value: 1000000, suffix: "+", label: "Pieces per year" },
  ] satisfies Stat[],
};
