export interface ChartData {
  spm: { a: string; b: string; c: string; d: string };
  date: string;
  funnelChart: {
    label: string;
    count: number;
  }[];
}
