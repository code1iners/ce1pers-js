# @ce1pers/array-helpers

Included simple array helpers.

## Installation

##### npm

`npm i @ce1pers/array-helpers`

## Usage

```javascript
// Import Library.
import { objectArraySorter, objectArrayMerger, distincter } from "@ce1pers/array-helpers";

// Object array sorter example.
const sorterResult = objectArraySorter({
  array: [
    { id: 1, name: 'user1' },
    { id: 3, name: 'user3' },
    { id: 2, name: 'user2' },
  ],
  sortBy: 'id',
  sortByType: 'number',
});
console.log(sorterResult); // [{ id: 1, name: 'user1' }, { id: 2, name: 'user2' }, { id: 3, name: 'user3' }]

// Object array merger example.
const mergerResult = objectArrayMerger({
  arrays: [[{ id: 1, name: 'user1' }], [{ id: 2, name: 'user2' }], [{ id: 3, name: 'user3' }]],
  mergeBy: 'name',
});
console.log(mergerResult); // [['user1', 'user2', 'user3']]

// Distincter example.
const distincterResult = distincter([1, 1, 2, 3, 4, '5', '5']);
console.log(distincterResult); // [1, 2, 3, 4, '5']

```
