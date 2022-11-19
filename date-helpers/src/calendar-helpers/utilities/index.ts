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
export const obtainFirstDate = (year?: number, month?: number) => {
  const now = new Date();
  now.setDate(1);
  year && now.setFullYear(year);
  month && now.setMonth(month - 1);
  return now;
};

/**
 * Obtain first day.
 */
export const obtainFirstDay = (
  year?: number,
  month?: number,
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
 * @param {number} year
 * @param {number} month
 */
export const obtainLastDate = (year?: number, month?: number) => {
  const now = new Date();
  year && now.setFullYear(year);
  month ? now.setMonth(month) : now.setMonth(now.getMonth() + 1);
  now.setDate(0);
  return now;
};

/**
 * Obtain last day information.
 */
export const obtainLastDay = (
  year?: number,
  month?: number,
  options?: ObtainLastDayOptions
) => {
  const now = obtainLastDate(year, month);
  console.log(now);
  const dayIndex = now.getDay();
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
export const computeMonthTotalDateCount = (year?: number, month?: number) => {
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
  const firstDay = obtainFirstDay();
  const lastDay = obtainLastDay();

  const previousMonthDateCount = firstDay.dayIndex;
  const nextMonthDateCount = 7 - (lastDay.dayIndex + 1);
  return {
    currentMonthDateCount: 35 - previousMonthDateCount - nextMonthDateCount,
    previousMonthDateCount,
    nextMonthDateCount,
  };
};
