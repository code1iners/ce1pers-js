/**
 * @typedef ObjectArraySorterInput
 * @property {Array} array
 * @property {string} sortBy
 * @property {"string"|"number"|"bigint"|"boolean"|"symbol"|"undefined"|"object"|"function"} sortByType
 * @property {boolean} [reversed]
 */

/**
 * @typedef ObjectArrayMergerInput
 * @property {Array<Array>} arrays
 * @property {string} mergeBy
 */

export interface ObjectArraySorterInput<T> {
  array: T[];
  sortBy: keyof T;
  sortByType:
    | "string"
    | "number"
    | "bigint"
    | "boolean"
    | "symbol"
    | "undefined"
    | "object"
    | "function";
  reversed?: boolean;
}

export interface ObjectArrayMergerInput {
  arrays: Array<any>;
  mergeBy: string;
}
