/**
 * Props interface.
 */
interface IUsePasswordProps {
    passwordLength?: number;
    useNumbers: boolean;
    useSymbols: boolean;
    useLowercase: boolean;
    useUppercase: boolean;
}
/**
 * ### Random Password Generator.
 * @returns Many helper functions.
 */
export declare const usePassword: ({ passwordLength, useNumbers, useSymbols, useLowercase, useUppercase, }: IUsePasswordProps) => {
    generate: () => {
        ok: boolean;
        error: {
            code: string;
            message: string;
        };
        data?: undefined;
    } | {
        ok: boolean;
        data: string;
        error?: undefined;
    };
};
export {};
