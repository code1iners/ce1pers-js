import { IGenerateProps, IGenerateResult } from "./types/usePage.d";
/**
 * ### Pagination hook.
 */
export declare const generator: ({ take, data }: IGenerateProps) => {
    generate: () => IGenerateResult;
};
