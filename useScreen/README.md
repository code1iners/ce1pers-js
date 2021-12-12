# @ce1pers/use-screen

React native hook to control device orientation.

## Installation

##### npm

`npm i @ce1pers/use-screen`

##### yarn

`yarn add @ce1pers/use-screen`

## Usage

```javascript
// Import hook.
import {
  addListener,
  getCurrentScreenOrientation,
  releaseOrientation,
  removeListener,
  setOrientationByLandscape,
  setOrientationByPortrait,
} from "@ce1pers/use-screen";

...

const App = () => {
  useEffect(async () => {
    // Set device orientation by landscape.
    await setOrientationByLandscape();
  }, []);

  return (
    <Container>
      <View>
        <Text>App Screen</Text>
      </View>
    </Container>
  );
};

export default App;

...
```
