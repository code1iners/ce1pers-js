# @ce1pers/use-page

Javascript hook to pagination.

## Installation

##### npm

`npm i @ce1pers/use-page`

##### yarn

`yarn add @ce1pers/use-page`

## Usage

```javascript
// Import library.
import { paginator } from "@ce1pers/use-page";

// Initialize pagination.
const { getValues, next, previous } = paginator({
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  take: 3,
});

// Current values.
getValues(); // [ 1, 2, 3 ]

// Next page values.
next(); // [ 4, 5, 6 ]

// Previous page values.
previous(); // [ 1, 2, 3 ]
```