export interface GetPassedTimeOutputs {
  unit: "hour" | "minute" | "second";
  time: number;
}

export interface WithFormatInput {
  format: string;
  date?: Date;
}
