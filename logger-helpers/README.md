
# @ce1pers/logger-helpers

Logger helpers with typescript.

## Installation

##### npm

`npm i @ce1pers/logger-helpers`

##### yarn

`yarn add @ce1pers/logger-helpers`

## Usage

```javascript
// Import hook.
import { dbugger } from "@ce1pers/logger-helpers";

dbugger({
  title: "Logger helper",
  flag: "Debug flag",
  description: "Sexy logger.",
  parameters: { name: "codeliner", hobby: "coding" },
});

/*
Output is..
[2022-10-05 23:56:50|Logger helper|Debug flag] Sexy logger.
{name: 'codeliner', hobby: 'coding'}
*/
```

## Advanced

Recommended this way when your deployed application mode is production.

`*.utils.js` : A utility module file.
```javascript
import { dbugger, DebugInput } from "@ce1pers/logger-helpers";

// Recommended with environment variable (e.g. process.env.NODE_ENV).
const DEBUG_MODE = true;

export const debug = (inputs: DebugInput) => {
  if (DEBUG_MODE) dbugger(inputs);
};
```

`*.other.js` : Usage module file.
```javascript
import { debug } from "./*.utils.js";

debug({
  title: "Logger helper",
  description: "Sexy logger.",
  debugLevel: "debug",
  flag: "Debug flag",
  parameters: { name: "codeliner", hobby: "coding" },
});
```