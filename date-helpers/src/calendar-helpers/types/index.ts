export type ConvertFormat = "uppercase" | "lowercase" | "capitalize";

export interface ConvertDayOptions {
  convertFormat?: ConvertFormat;
}

export interface ObtainFirstDayOptions extends ConvertDayOptions {}
export interface ObtainLastDayOptions extends ConvertDayOptions {}

export interface CalendarDateItem {
  key: string;
  month: number;
  date: number;
  day: {
    index: number;
    text: string | undefined;
  };
  isToday: boolean;
}
