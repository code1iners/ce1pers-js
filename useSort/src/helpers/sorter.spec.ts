import { bubble } from "./sorter";

// For bubble sort test.
const array = [1, 2, 3, 4, 5];
console.time();
const sorted = bubble({ array, order: "descending" });
console.timeEnd();
console.log(array, "=>", sorted);
