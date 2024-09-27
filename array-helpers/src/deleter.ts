import type {
  DeleteItemByIdExtraOptionsType,
  DeleteItemOptions,
} from "./types";

/**
 *  Delete item from array by ID.
 */
export const deleteById = <T extends object>(
  array: readonly T[],
  options: DeleteItemByIdExtraOptionsType<T>,
) => {
  const { key, value } = options;

  if (options.once) {
    // Filtering item by id with key and value just once.
    const index = array.findIndex((item) => item[key] === value);

    // Soft copy for mutating.
    const copy = [...array];

    // Deleting index item.
    copy.splice(index, 1);

    return copy;
  } else {
    // Filtering item by id with key and value.
    return array.filter((item) => item[key] !== value);
  }
};

/**
 * Delete item from array by index.
 */
export const deleteByIndex = <T>(array: readonly T[], index: number) =>
  array.filter((_, __index__) => __index__ !== index);

/**
 * Delete item from array.
 */
export const deleteItem = <T extends object>(
  array: readonly T[],
  options: DeleteItemOptions<T>,
) => {
  switch (options?.by) {
    case "id":
      return deleteById(array, options);

    case "index":
      return deleteByIndex(array, options.index);
  }
};

export default deleteItem;
