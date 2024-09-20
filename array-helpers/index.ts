export { distincter } from "./src/distincter";
export { objectArrayMerger } from "./src/merger";
export { objectArraySorter } from "./src/sorter";
export { ObjectArrayMergerInput, ObjectArraySorterInput } from "./src/types";

import deleter from "./src/deleter";

const array = [
  { id: 0, name: "Emilie" },
  { id: 1, name: "Benjamin" },
  { id: 2, name: "Gary" },
  { id: 3, name: "Herman" },
  { id: 4, name: "Emilie" },
] as const;

// Delete by ID.
const result1 = deleter(array, {
  kind: "id",
  key: "name",
  value: "Emilie",
});
console.log("result1", result1);

// Delete by index.
// const result2 = deleter.deleteItem(array, { index: 3 });
// console.log("result2", result2);
