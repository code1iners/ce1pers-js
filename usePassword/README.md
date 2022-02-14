# @ce1pers/use-password

Many useful hook related to password.

## Installation

##### npm

`npm i @ce1pers/use-password`

##### yarn

`yarn add @ce1pers/use-password`

## Usage

```javascript
// Import library.
import { usePassword } from "@ce1pers/use-password";

// Getting randomly password generate function.
const { generate } = usePassword();

// Declare conditions.
const passwordLength = 20;
const useNumbers = true;
const useSymbols = true;
const useLowercaseLetters = false;
const useUppercaseLetters = true;

// Generate randomly password.
const { ok, data, error } = generate({
  passwordLength,
  useNumbers,
  useSymbols,
  useLowercaseLetters,
  useUppercaseLetters,
});

if (ok) {
  console.log(data); // Randomly password data.

  // Write you want process.
} else {
  console.warn(error); // Error code & message.

  // Write you want process.
}
```
