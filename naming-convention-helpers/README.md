# @ce1pers/naming-convention-helpers

Simple random helpers.

## Installation

##### npm

`npm i @ce1pers/naming-convention-helpers`

##### yarn

`yarn add @ce1pers/naming-convention-helpers`

## Usage

```javascript
// Import helper.
import { 
    extractNamingConvention,
    camelize,
    pascalize,
    snakeize,
    kebabize
} from "@ce1pers/naming-convention-helpers";

const TEST_TEXT = "naming convetion test message";

const convention = extractNamingConvention(TEST_TEXT);
console.log("convention", convention); // Expected "normal" (Other types - "camel" | "pascal" | "kebab" | "snake")

const camelized = camelize(TEST_TEXT);
console.log("camelized =>", camelized); // Expected "namingConventionTestMessage"

const pascalized = pascalize(TEST_TEXT);
console.log("pascalized =>", pascalized); // Expected "NamingConventionTestMessage"

const snaked = snakeize(TEST_TEXT);
console.log("snaked =>", snaked); // Expected "naming_convention_test_message"

const kebabed = kebabize(TEST_TEXT);
console.log("kebabed =>", kebabed); // Expected "naming-convention-test-message"


```
