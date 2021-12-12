# @ce1pers/use-resource

React native hook to initialize resources.

## Installation

##### npm

`npm i @ce1pers/use-resource`

##### yarn

`yarn add @ce1pers/use-resource`

## Usage

```javascript
// Import hook.
import { loadFonts,loadImages } from "@ce1pers/use-resource";

export default function App() {

  ...

  const loadResources = async () => {
    // Add you want icons as arguments.
    const fonts = loadFonts([Ionicons.font]);
    await Promise.all([...fonts]);
  };

  ...

  return (
      <View>
        <Ionicons name="beer" size={20} />
      </View>
  );
}

```
