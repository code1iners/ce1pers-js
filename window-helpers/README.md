# @ce1pers/window-helpers

Simple web application window screen hook.

## Installation

##### npm

`npm i @ce1pers/window-helpers`

##### yarn

`yarn add @ce1pers/window-helpers`

## Usage

### Use Popup

- [Sample Page](https://codeliners-post-message-window-a.netlify.app/)
- [Project A GitHub - Parent window](https://github.com/code1iners/hello-windows-post-message-a)
- [Project B GitHub - Child window](https://github.com/code1iners/hello-windows-post-message-a)

```javascript
// Import hook.
import { useWindow } from "@ce1pers/window-helpers";

// Declare use popup hook.

type SendMessageType = "connection" | "submit";

const { open, sendMessage } = useWindow({
  onMessageCallback,
});
const TARGET_URL = "http://localhost:5555";

// Open new window as popup.
open({
  targetOrigin: TARGET_URL,
  windowTarget: "_blank",
  callback: openPopupCallback,
  width: 400,
  height: 400,
});

setInterval(() => {
  sendMessage<SendMessageType>({
    to: "targetOrigin",
    type: "connection",
  });
}, 1000);

function onMessageCallback(event: MessageEvent) {
    if (event.origin !== TARGET_URL) return;
  // Write process what execute when received message from other window.
}

function openPopupCallback() {
  // Write process what you want when opened a new window.
}
```
