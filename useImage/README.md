# @celpers/use-image

React hook to getting image file in device.

## Installation

##### npm

`npm i @ce1pers/use-image`

##### yarn

`yarn add @ce1pers/use-image`

## Usage

```javascript
// Import hook.
import useImage, { GRANTED, DENIED, NEVER_ASK_AGAIN } from "@ce1pers/use-image";

...

// Make any event handler(function).
const handleAnyButtonClick = async () => {
  const isGranted = await checkPermission();
  if (isGranted === GRANTED) {
    const asset = await selectImage();
    // Do something you want.
  } else {
    // Open app's info/setting (Optional).
    openSetting();
  }
};

...
```
