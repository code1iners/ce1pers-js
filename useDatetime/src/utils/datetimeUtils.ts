/**
 * ### Getting time difference.
 */
export const getTimeDifference = (datetime: Date) =>
  Math.floor(new Date().getTime() - datetime.getTime());

/**
 * ### Getting time difference as seconds.
 */
export const getTimeDifferenceAsSeconds = (datetime: Date) =>
  Math.floor(getTimeDifference(datetime) / 1000);

/**
 * ### Getting time difference as minutes.
 */
export const getTimeDifferenceAsMinutes = (datetime: Date) =>
  Math.floor(getTimeDifferenceAsSeconds(datetime) / 60);

/**
 * ### Getting time difference as hours.
 */
export const getTimeDifferenceAsHours = (datetime: Date) =>
  Math.floor(getTimeDifferenceAsMinutes(datetime) / 60);

/**
 * ### Divide date by eight digits time.
 */
export const divideDateByEight = (eight: string) => ({
  year: Number(eight.slice(0, 4)),
  month: Number(eight.slice(4, 6)),
  date: Number(eight.slice(6, 8)),
});
