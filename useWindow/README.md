# @ce1pers/use-window

Simple web application window screen hook.

## Installation

##### npm

`npm i @ce1pers/use-window`

##### yarn

`yarn add @ce1pers/use-window`

## Usage

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

```javascript
...

// Import hook.
import { usePopup } from "@ce1pers/use-window";

const { open, sendMessageToTargetOrigin } = usePopup({
  onMessageCallback,
});

// Open new window as popup.
open({
    targetOrigin: 'http://localhost:5555',
    windowTarget: '_blank',
    callback: openPopupCallback,
})


function onMessageCallback() {
    // Write process what execute when received message from other window.
}

function openPopupCallback() {
    // Write process what you want when opened a new window.
}

...
```
