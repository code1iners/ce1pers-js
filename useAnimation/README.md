# @ce1pers/use-animation

Collection of various useful animation helper functions.

## Installation

##### npm

`npm i @ce1pers/use-animation`

##### yarn

`yarn add @ce1pers/use-animation`

## References

- [With React](https://main--cosmic-dango-4b1eee.netlify.app/) - [Source Code](https://github.com/code1iners/use-animation-sample-react)

## Usage

### Add styles by CDN (Required).

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <!-- add this code. -->
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.statically.io/gh/code1iners/ce1pers-content-provider-gulp/v0.0.0/dist/mouse-click-effects/index.min.css"
    />
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### React source code.

```javascript
import { useEffect } from "react";
import { makeRotateEffect } from "@ce1pers/use-animation";
import "./App.css";

function App() {
  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) =>
      makeRotateEffect({
        x: e.clientX,
        y: e.clientY,
        dotColor: "rgb(26, 188, 156)",
      })
    );

    return () => {
      document.removeEventListener("click", (e: MouseEvent) =>
        makeRotateEffect({ x: e.clientX, y: e.clientY })
      );
    };
  }, []);

  return <div className="App">Hello Use Animation</div>;
}

export default App;
```
