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

...
```


### Use Popup
```javascript
// Import hook.
import { usePopup } from "@ce1pers/use-window";

// Declare use popup hook.
const { open, sendMessageToTargetOrigin } = usePopup({
  onMessageCallback,
});

// Open new window as popup.
open({
    targetOrigin: 'http://localhost:5555',
    windowTarget: '_blank',
    callback: openPopupCallback,
    width: 400,
    height: 400,
})


function onMessageCallback() {
    // Write process what execute when received message from other window.
}

function openPopupCallback() {
    // Write process what you want when opened a new window.
}
```
