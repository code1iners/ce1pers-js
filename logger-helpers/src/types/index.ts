export type DebugLevel = "debug" | "info" | "warning" | "error";

export interface DebugInput {
  title: string;
  description?: string;
  parameters?: any;
  parametersStyle?: "string" | "object";
  debugLevel?: DebugLevel;
  includeDateTime?: boolean;
  flag?: string;
}
