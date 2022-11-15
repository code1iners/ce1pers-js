# @ce1pers/date-helpers

Simple date time JavaScript helpers.

## Installation

##### npm

`npm i @ce1pers/date-helpers`

##### yarn

`yarn add @ce1pers/date-helpers`

## Usage

```javascript
// Import Library.
import { getPassedTime, convertDateToEight, convertEightToDate } from "@ce1pers/date-helpers";

// Set datetime.
const date = new Date("2022-02-14T22:40:00");

// Get passed time.
const passedTime = getPassedTime(date);
console.log(passedTime);

// Convert to eight digit time.
const eight = convertDateToEight(date);
console.log(eight);

// Convert to date.
const convertedDate = convertEightToDate(eight);
console.log(convertedDate);
```
