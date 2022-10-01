# @ce1pers/window-helpers

Simple web application window screen hook.

## Installation

##### npm

`npm i @ce1pers/window-helpers`

##### yarn

`yarn add @ce1pers/window-helpers`

## Usage

### Use Popup

```javascript
// Import hook.
import { usePopup } from "@ce1pers/window-helpers";

// Declare use popup hook.
const { open, sendMessageToTargetOrigin } = usePopup({
  onMessageCallback,
});

// Open new window as popup.
open({
  targetOrigin: "http://localhost:5555",
  windowTarget: "_blank",
  callback: openPopupCallback,
  width: 400,
  height: 400,
});

function onMessageCallback() {
  // Write process what execute when received message from other window.
}

function openPopupCallback() {
  // Write process what you want when opened a new window.
}
```
