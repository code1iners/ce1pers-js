import { IGenerateProps, IGenerateResult } from "./types/usePage.type";
/**
 * ### Pagination hook.
 */
export declare const usePage: ({ take, data }: IGenerateProps) => {
    generate: () => IGenerateResult;
};
