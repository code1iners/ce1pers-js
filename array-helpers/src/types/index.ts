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

export interface ObjectArraySorterInput {
  array: any[];
  sortBy: string;
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
