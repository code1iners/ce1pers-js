"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divideDateByEight = exports.getTimeDifferenceAsHours = exports.getTimeDifferenceAsMinutes = exports.getTimeDifferenceAsSeconds = exports.getTimeDifference = void 0;
/**
 * ### Getting time difference.
 */
const getTimeDifference = (datetime) => Math.floor(new Date().getTime() - datetime.getTime());
exports.getTimeDifference = getTimeDifference;
/**
 * ### Getting time difference as seconds.
 */
const getTimeDifferenceAsSeconds = (datetime) => Math.floor((0, exports.getTimeDifference)(datetime) / 1000);
exports.getTimeDifferenceAsSeconds = getTimeDifferenceAsSeconds;
/**
 * ### Getting time difference as minutes.
 */
const getTimeDifferenceAsMinutes = (datetime) => Math.floor((0, exports.getTimeDifferenceAsSeconds)(datetime) / 60);
exports.getTimeDifferenceAsMinutes = getTimeDifferenceAsMinutes;
/**
 * ### Getting time difference as hours.
 */
const getTimeDifferenceAsHours = (datetime) => Math.floor((0, exports.getTimeDifferenceAsMinutes)(datetime) / 60);
exports.getTimeDifferenceAsHours = getTimeDifferenceAsHours;
/**
 * ### Divide date by eight digits time.
 */
const divideDateByEight = (eight) => ({
    year: Number(eight.slice(0, 4)),
    month: Number(eight.slice(4, 6)),
    date: Number(eight.slice(6, 8)),
});
exports.divideDateByEight = divideDateByEight;
//# sourceMappingURL=datetimeUtils.js.map