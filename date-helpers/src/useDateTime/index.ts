import { GetPassedTimeOutputs } from "./types";

/**
 * ### Getting time difference.
 */
export const getTimeDifference = (date: Date) =>
  Math.floor(new Date().getTime() - date.getTime());

/**
 * ### Getting time difference as seconds.
 */
export const getTimeDifferenceAsSeconds = (date: Date) =>
  Math.floor(getTimeDifference(date) / 1000);

/**
 * ### Getting time difference as minutes.
 */
export const getTimeDifferenceAsMinutes = (date: Date) =>
  Math.floor(getTimeDifferenceAsSeconds(date) / 60);

/**
 * ### Getting time difference as hours.
 */
export const getTimeDifferenceAsHours = (date: Date) =>
  Math.floor(getTimeDifferenceAsMinutes(date) / 60);

/**
 * ### Divide date by eight digits time.
 */
export const divideDateByEight = (eight: string) => {
  if (eight.length !== 8) return null;

  return {
    year: Number(eight.slice(0, 4)),
    month: Number(eight.slice(4, 6)),
    date: Number(eight.slice(6, 8)),
  };
};

/**
 * ### Get passed time.
 */
export const getPassedTime = (date: Date): GetPassedTimeOutputs | null => {
  try {
    const hours = getTimeDifferenceAsHours(date);
    // There is hours difference?
    if (Boolean(hours) && hours > 0) {
      return { unit: "hour", time: hours };
    }

    const minutes = getTimeDifferenceAsMinutes(date);
    // There is minutes difference?
    if (Boolean(minutes) && minutes > 0) {
      return { unit: "minute", time: minutes };
    }

    const seconds = getTimeDifferenceAsSeconds(date);
    return { unit: "second", time: seconds };
  } catch (error) {
    console.error((error as any).message);
    return null;
  }
};

/**
 * ### Convert eight digits to date.
 */
export const convertEightToDate = (eight: string) => {
  try {
    // Divide date.
    const result = divideDateByEight(eight);
    if (!result) throw new Error("Failed divide date by eight digits.");

    return new Date(`${result.year}-${result.month}-${result.date}`);
  } catch (error) {
    console.error((error as any).message);
    return null;
  }
};

/**
 * ### Convert date to eight digits.
 */
export const convertDateToEight = (dateParam: Date, divider?: string) => {
  try {
    const year = dateParam.getFullYear();
    const month = String(dateParam.getMonth() + 1).padStart(2, "0");
    const date = String(dateParam.getDate()).padStart(2, "0");

    return `${year}${divider ? divider : ""}${month}${
      divider ? divider : ""
    }${date}`;
  } catch (error) {
    console.error((error as any).message);
    return null;
  }
};
