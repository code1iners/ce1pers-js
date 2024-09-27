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

export type KeyValueType<T = string> = {
  key: T;
  value: string | number;
};

export type DeleteItemKindType = "id" | "index";

export type DeleteItemByIdExtraOptionsType<T> = {
  key: keyof T;
  value: string | number;
  once?: boolean;
};

export type DeleteItemByIndexExtraOptionsType = {
  index: number;
};

export type DeleteItemByIdOptionsType<T extends object> = {
  by: "id";
} & DeleteItemByIdExtraOptionsType<T>;

export type DeleteItemByIndexOptionsType = {
  by: "index";
} & DeleteItemByIndexExtraOptionsType;

export type DeleteItemOptions<T extends object> =
  | DeleteItemByIdOptionsType<T>
  | DeleteItemByIndexOptionsType;
