"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePassword = void 0;
/**
 * ### Random Password Generator.
 * @returns Many helper functions.
 */
const usePassword = ({ passwordLength = 20, useNumbers, useSymbols, useLowercase, useUppercase, }) => {
    // Variables (Include conditions).
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbols = ["@", "#", "$", "%"];
    const charCode = Array.from(Array(26)).map((_, i) => i + 97);
    const lowercaseLetters = charCode.map((char) => String.fromCharCode(char));
    const uppercaseLetters = lowercaseLetters.map((char) => char.toUpperCase());
    // Methods.
    /**
     * ### Generate random password by length parameter.
     * @param {number} length Password length (Is required).
     * @param {boolean} useNumbers include numbers.
     * @param {boolean} useSymbols Include symbols.
     * @param {boolean} useLowercase Include lowercase characters.
     * @param {boolean} useUppercase Include uppercase characters.
     * @returns
     */
    const generate = () => {
        // Check passwordLength parameter.
        if (typeof passwordLength !== "number")
            return {
                ok: false,
                error: {
                    code: "0001",
                    message: "passwordLength parameter must be number type.",
                },
            };
        // Check useNumbers parameter.
        if (typeof useNumbers !== "boolean")
            return {
                ok: false,
                error: {
                    code: "0002",
                    message: "useNumbers parameter must be boolean type.",
                },
            };
        // Check useSymbols parameter.
        if (typeof useSymbols !== "boolean")
            return {
                ok: false,
                error: {
                    code: "0003",
                    message: "useSymbols parameter must be boolean type.",
                },
            };
        // Check useLowercase parameter.
        if (typeof useLowercase !== "boolean")
            return {
                ok: false,
                error: {
                    code: "0004",
                    message: "useLowercase parameter must be boolean type.",
                },
            };
        // Check useUppercase parameter.
        if (typeof useUppercase !== "boolean")
            return {
                ok: false,
                error: {
                    code: "0005",
                    message: "useUppercase parameter must be boolean type.",
                },
            };
        // Declare result (password) variable.
        let password = "";
        // Set password tools.
        const availableCharacters = [
            ...(useNumbers ? numbers : []),
            ...(useSymbols ? symbols : []),
            ...(useLowercase ? lowercaseLetters : []),
            ...(useUppercase ? uppercaseLetters : []),
        ];
        // Check has include condition.
        if (!availableCharacters.length) {
            return {
                ok: false,
                error: {
                    code: "0006",
                    message: "Must choose one of include condition.",
                },
            };
        }
        // Set password by randomly.
        for (let i = 0; i < passwordLength; i++) {
            // Getting random index based on password length parameter.
            const randomIndex = Math.floor(Math.random() * availableCharacters.length);
            // Set password.
            password += availableCharacters[randomIndex];
        }
        // Return result password.
        return {
            ok: true,
            data: password,
        };
    };
    return {
        generate,
    };
};
exports.usePassword = usePassword;
