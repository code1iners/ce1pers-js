# @ce1pers/use-array

Collection of utility functions for Array.

## Installation

##### npm

`npm i @ce1pers/use-array`

##### yarn

`yarn add @ce1pers/use-array`

## Usage

```javascript
import {
  getCombinations,
  getPermutations,
  getPermutationsWithSelf,
} from "@ce1pers/use-array";

const combinations = getCombinations([1, 2, 3], 2);
console.log("combinations", combinations);
// [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]

const permutations = getPermutations([1, 2, 3], 2);
console.log("permutations", permutations);
// [ [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 3 ], [ 3, 1 ], [ 3, 2 ] ]

const permutationsWithSelf = getPermutationsWithSelf([1, 2, 3], 2);
console.log("permutationsWithSelf", permutationsWithSelf);
// [ [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 2 ], [ 2, 3 ], [ 3, 1 ], [ 3, 2 ], [ 3, 3 ] ]

```