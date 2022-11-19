# @ce1pers/date-helpers

Simple helpers related to date or time.

## Installation

##### npm

`npm i @ce1pers/date-helpers`

##### yarn

`yarn add @ce1pers/date-helpers`

## Links
- [Sample Wep Application](https://hello-calendars.netlify.app/)

## Usage

```javascript
// Import Library.
import { getPassedTime, convertDateToEight, convertEightToDate, makeCalendar } from "@ce1pers/date-helpers";

// Set datetime.
const date = new Date("2022-11-19T21:30:00");

// Get passed time.
const passedTime = getPassedTime(date);
console.log(passedTime);

// Convert to eight digit time.
const eight = convertDateToEight(date);
console.log(eight);

// Convert to date.
const convertedDate = convertEightToDate(eight);
console.log(convertedDate);

// Make current month calendar.
const currentMonthCalendar = makeCalendar(date.getFullYear(), date.getMonth() + 1);
console.log(currentMonthCalendar);
```
