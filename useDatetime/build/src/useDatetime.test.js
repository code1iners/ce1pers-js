"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useDatetime_1 = require("./useDatetime");
const { getPassedTime, convertDateToEight, convertEightToDate } = (0, useDatetime_1.useDatetime)();
const eight = convertDateToEight(new Date("2022-02-14T22:40:00"));
console.log(eight);
const date = convertEightToDate(eight);
console.log(date);
//# sourceMappingURL=useDatetime.test.js.map