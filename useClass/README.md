# @ce1pers/use-class

Simple html element class utility hooks.

## Installation

##### npm

`npm i @ce1pers/use-class`

##### yarn

`yarn add @ce1pers/use-class`

## Usage

```javascript
...

// Import hook.
import { clazz } from "@ce1pers/use-class";

// Declared any flag value.
const anyStatus = true;

// Input.
<ul className={
    clazz("enter any class name here", anyStatus ? "hero" : "zero")
}>
    ...
</ul>

// Output.
<ul class="enter any class name here hero">
    ...
</ul>

...
```
