# @ce1pers/use-window

Simple web application window screen hook.

## Installation

##### npm

`npm i @ce1pers/use-window`

##### yarn

`yarn add @ce1pers/use-window`

## Usage

### Use Screen
```javascript
// Import hook.
import { useScreen } from "@ce1pers/use-window";

// Call use screen hook.
const { windowSize } = useScreen();

// Print current window width & height.
console.log(windowSize?.width, windowSize?.height);
```
