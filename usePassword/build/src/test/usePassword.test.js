"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import library.
const usePassword_1 = require("../usePassword");
// Declared hook.
const { generate } = (0, usePassword_1.usePassword)({
    useLowercase: false,
    useNumbers: false,
    useSymbols: false,
    useUppercase: true,
    passwordLength: 50,
});
// Generate.
const generated = generate();
// Check response.
console.log(generated);
