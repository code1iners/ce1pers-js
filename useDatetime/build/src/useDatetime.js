"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDatetime = void 0;
const datetimeUtils_1 = require("./utils/datetimeUtils");
/**
 * ### Datetime hook.
 */
const useDatetime = () => {
    /**
     * ### Get passed time.
     */
    const getPassedTime = (datetime) => {
        const hours = (0, datetimeUtils_1.getTimeDifferenceAsHours)(datetime);
        // There is hours difference?
        if (Boolean(hours) && hours > 0) {
            return `${hours}시간 전`;
        }
        const minutes = (0, datetimeUtils_1.getTimeDifferenceAsMinutes)(datetime);
        // There is minutes difference?
        if (Boolean(minutes) && minutes > 0) {
            return `${minutes}분 전`;
        }
        const seconds = (0, datetimeUtils_1.getTimeDifferenceAsSeconds)(datetime);
        return `${seconds}초 전`;
    };
    /**
     * ### Convert date to eight digits.
     */
    const convertDateToEight = (datetime) => `${datetime.getFullYear()}${String(datetime.getMonth() + 1).padStart(2, "0")}${String(datetime.getDate()).padStart(2, "0")}`;
    /**
     * ### Convert eight digits to date.
     */
    const convertEightToDate = (eight) => {
        // Create new date.
        const dateObject = new Date();
        // Divide date.
        const { year, month, date } = (0, datetimeUtils_1.divideDateByEight)(eight);
        // Set date information.
        dateObject.setFullYear(year);
        dateObject.setMonth(month - 1);
        dateObject.setDate(date);
        return dateObject;
    };
    return { getPassedTime, convertDateToEight, convertEightToDate };
};
exports.useDatetime = useDatetime;
//# sourceMappingURL=useDatetime.js.map