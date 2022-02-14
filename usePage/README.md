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
import { usePage, testData } from "@ce1pers/use-page";

// Initialize pagination.
const { generate } = usePage({
  take: 4,
  data: testData.members,
});

// Generate.
const result = generate();

// Check paginated data.
console.log(result);
```
