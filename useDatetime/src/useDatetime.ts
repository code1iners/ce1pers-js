import {
  divideDateByEight,
  getTimeDifferenceAsHours,
  getTimeDifferenceAsMinutes,
  getTimeDifferenceAsSeconds,
} from "./utils/datetimeUtils";

/**
 * ### Datetime hook.
 */
export const useDatetime = () => {
  /**
   * ### Get passed time.
   */
  const getPassedTime = (datetime: Date): string => {
    const hours = getTimeDifferenceAsHours(datetime);
    // There is hours difference?
    if (Boolean(hours) && hours > 0) {
      return `${hours}시간 전`;
    }

    const minutes = getTimeDifferenceAsMinutes(datetime);
    // There is minutes difference?
    if (Boolean(minutes) && minutes > 0) {
      return `${minutes}분 전`;
    }

    const seconds = getTimeDifferenceAsSeconds(datetime);
    return `${seconds}초 전`;
  };

  /**
   * ### Convert date to eight digits.
   */
  const convertDateToEight = (datetime: Date): string =>
    `${datetime.getFullYear()}${String(datetime.getMonth() + 1).padStart(
      2,
      "0"
    )}${String(datetime.getDate()).padStart(2, "0")}`;

  /**
   * ### Convert eight digits to date.
   */
  const convertEightToDate = (eight: string): Date => {
    // Create new date.
    const dateObject = new Date();

    // Divide date.
    const { year, month, date } = divideDateByEight(eight);

    // Set date information.
    dateObject.setFullYear(year);
    dateObject.setMonth(month - 1);
    dateObject.setDate(date);

    return dateObject;
  };

  return { getPassedTime, convertDateToEight, convertEightToDate };
};
