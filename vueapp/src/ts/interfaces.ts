export interface ActivityData {
  id: number;
  name: string;
  duration: number;
  start_date: Date;
  end_date: Date;
  trackNum: number;
}

export interface PlotConfig {
  margin: number;
  trackHeight: number;
  trackGap: number;
  dayWidth: number;
  dateMin: Date;
  plotWidth: number;
}
