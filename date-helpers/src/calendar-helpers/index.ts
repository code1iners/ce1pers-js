import { CalendarDateItem } from "./types";
import {
  computeMonthTotalDateCount,
  convertDay,
  obtainFirstDate,
  obtainLastDate,
} from "./utilities";

/**
 * Make calendar object.
 * @param {number} year
 * @param {number} month
 */
export const makeCalendar = (
  year?: number,
  month?: number
): CalendarDateItem[] => {
  const { currentMonthDateCount, previousMonthDateCount, nextMonthDateCount } =
    computeMonthTotalDateCount(year, month);

  // Set date object.
  const now = new Date();
  year && now.setFullYear(year);
  month && now.setMonth(month - 1);

  // Make previous month.
  const previousMonthLastDate = obtainLastDate(
    now.getFullYear(),
    now.getMonth()
  );

  const previousMonth = Array.from(
    { length: previousMonthDateCount },
    (_, i) => {
      const date = previousMonthLastDate.getDate() - i;
      const dayIndex = (previousMonthLastDate.getDay() - i) % 7;
      const dayText = convertDay(dayIndex);
      return {
        month: previousMonthLastDate.getMonth() + 1,
        date,
        day: { index: dayIndex, text: dayText },
        isToday: false,
      };
    }
  );
  // Sort previous month.
  previousMonth.sort((a, b) => a.date - b.date);

  // Make current month.
  const currentMonthFirstDate = obtainFirstDate(
    now.getFullYear(),
    now.getMonth() + 1
  );

  const currentMonth = Array.from({ length: currentMonthDateCount }, (_, i) => {
    const date = currentMonthFirstDate.getDate() + i;
    const dayIndex = (currentMonthFirstDate.getDay() + i) % 7;
    const dayText = convertDay(dayIndex);
    return {
      month: currentMonthFirstDate.getMonth() + 1,
      date,
      day: { index: dayIndex, text: dayText },
      isToday: date === now.getDate(),
    };
  });

  // Make next month.
  const nextMonthFirstDate = obtainFirstDate(
    now.getFullYear(),
    now.getMonth() + 2
  );

  const nextMonth = Array.from({ length: nextMonthDateCount }, (_, i) => {
    const date = nextMonthFirstDate.getDate() + i;
    const dayIndex = (nextMonthFirstDate.getDay() + i) % 7;
    const dayText = convertDay(dayIndex);
    return {
      month: nextMonthFirstDate.getMonth() + 1,
      date,
      day: { index: dayIndex, text: dayText },
      isToday: false,
    };
  });

  // Combine previous, current, next month information.
  currentMonth.unshift(...previousMonth);
  currentMonth.push(...nextMonth);

  // Append keys.
  const result = currentMonth.map((date) => ({
    ...date,
    key: `${String(date.month).padStart(2, "0")}${String(date.date).padStart(
      2,
      "0"
    )}-${Math.random().toString(36).substring(2)}`,
  }));

  return result;
};
