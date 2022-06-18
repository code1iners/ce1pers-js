# @ce1pers/use-window

Simple web application window screen hook.

```javascript
...

// Import hook.
import { useScreen } from "@ce1pers/use-window";

// Call use screen hook.
const { windowSize } = useScreen();

// Print current window width & height.
console.log(windowSize?.width, windowSize?.height);

...
```
