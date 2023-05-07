# @ce1pers/random-helpers

Simple random helpers.

## Installation

##### npm

`npm i @ce1pers/random-helpers`

##### yarn

`yarn add @ce1pers/random-helpers`

## Usage

```javascript
// Import helper.
import { generate, pick } from "@ce1pers/random-helpers";

const key = generate({ length: 15 });
console.log(key); // lj8xh4wb3bfyj7y (Example value).

// Picking one of them(1, 2, 3, 4, 5).
const [ok, picked] = pick([1, 2, 3, 4, 5]);

// Is success?
if (ok) {
  console.log(picked); // 3 (Selected value)
}

```
