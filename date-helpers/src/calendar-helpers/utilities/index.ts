import { DayConstants } from "../constants";
import {
  ConvertDayOptions,
  ConvertFormat,
  ObtainFirstDayOptions,
  ObtainLastDayOptions,
} from "../types";

/**
 * Parse day text format.
 * @param {string} text
 * @param {ConvertFormat} format
 */
export const parseTextFormat = (text: string, format?: ConvertFormat) =>
  format === "uppercase"
    ? text.toUpperCase()
    : format === "lowercase"
    ? text.toLowerCase()
    : text;

/**
 * Convert day index to string;
 * @param {number} dayIndex Day value as index.
 */
export const convertDay = (
  dayIndex: number,
  options: ConvertDayOptions = { convertFormat: "capitalize" }
) => {
  switch (dayIndex) {
    case 0:
      return parseTextFormat(DayConstants.Sunday, options?.convertFormat);
    case 1:
      return parseTextFormat(DayConstants.Monday, options?.convertFormat);
    case 2:
      return parseTextFormat(DayConstants.Tuesday, options?.convertFormat);
    case 3:
      return parseTextFormat(DayConstants.Wednesday, options?.convertFormat);
    case 4:
      return parseTextFormat(DayConstants.Thursday, options?.convertFormat);
    case 5:
      return parseTextFormat(DayConstants.Friday, options?.convertFormat);
    case 6:
      return parseTextFormat(DayConstants.Saturday, options?.convertFormat);
  }
};

/**
 * Obtain first date.
 */
export const obtainFirstDate = (year: number, month: number) =>
  new Date(year, month - 1, 1);

/**
 * Obtain first day.
 */
export const obtainFirstDay = (
  year: number,
  month: number,
  options?: ObtainFirstDayOptions
) => {
  const dayIndex = obtainFirstDate(year, month).getDay();
  const convertedDay = convertDay(dayIndex, options);
  return {
    dayIndex,
    convertedDay,
  };
};

/**
 * Obtain last date information.
 */
export const obtainLastDate = (year: number, month: number) =>
  new Date(year, month, 0);

/**
 * Obtain last day information.
 */
export const obtainLastDay = (
  year?: number,
  month?: number,
  options?: ObtainLastDayOptions
) => {
  const now = new Date();
  const yearInput = year ?? now.getFullYear();
  const monthInput = month ?? now.getMonth() + 1;
  const obtainedDate = obtainLastDate(yearInput, monthInput);
  const dayIndex = obtainedDate.getDay();
  const convertedDay = convertDay(dayIndex, options);
  return {
    dayIndex,
    convertedDay,
  };
};

/**
 * Compute total calendar date count by month.
 * @param {number} month
 */
export const computeMonthTotalDateCount = (year: number, month: number) => {
  const MAX_DATE_COUNT = 42;
  const firstDay = obtainFirstDay(year, month);
  const lastDate = obtainLastDate(year, month);

  const previousMonthDateCount = firstDay.dayIndex;
  const currentMonthDateCount = lastDate.getDate();
  const nextMonthDateCount =
    MAX_DATE_COUNT - (previousMonthDateCount + currentMonthDateCount);

  return {
    currentMonthDateCount,
    previousMonthDateCount,
    nextMonthDateCount,
  };
};

/**
 * Compute current month total calendar date count.
 */
export const computeCurrentMonthTotalDateCount = () => {
  const now = new Date();
  const firstDay = obtainFirstDay(now.getFullYear(), now.getMonth() + 1);
  const lastDay = obtainLastDay(now.getFullYear(), now.getMonth() + 1);

  const previousMonthDateCount = firstDay.dayIndex;
  const nextMonthDateCount = 7 - (lastDay.dayIndex + 1);
  return {
    currentMonthDateCount: 35 - previousMonthDateCount - nextMonthDateCount,
    previousMonthDateCount,
    nextMonthDateCount,
  };
};
