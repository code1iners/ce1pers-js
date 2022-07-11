# @ce1pers/use-sort

Javascript library to simple sort.

## Installation

##### npm

`npm i @ce1pers/use-sort`

##### yarn

`yarn add @ce1pers/use-sort`

## Usage

```javascript
// Import library.
import { bubble } from "@ce1pers/use-sort";

// For bubble sort test.
const array = [1, 2, 3, 4, 5];

console.time();
const sorted = bubble({ array, order: "descending" });
console.timeEnd();

console.log(array, "=>", sorted); // [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]
```
