// @ts-check

/**
 * Sorts an object array based on the provided 'sortBy' and 'sortByType'.
 *
 * @param {ObjectArraySorterInput} input
 *
 * @returns {Array} - Sorted array.
 *
 * @throws {Error} Throws an type error if the 'array' argument type is not array.
 * @throws {Error} Throws an type error if the 'sortByType' is not supported.
 */
export const objectArraySorter = ({
  array,
  sortBy,
  sortByType,
  reversed = false,
}) => {
  try {
    if (!Array.isArray(array))
      throw new TypeError(`'array' argument must be array type.`);

    // Cloning array.
    /** @type {Array} */
    const cloned = JSON.parse(JSON.stringify(array));

    // Not passed key parameter?
    if (!sortBy) {
      cloned.sort();
    } else {
      // Has key?
      switch (sortByType) {
        case "string":
          cloned.sort((a, b) => {
            const aKey = a[sortBy].toUpperCase();
            const bKey = b[sortBy].toUpperCase();
            return aKey.localeCompare(bKey);
          });
          break;

        case "number":
          cloned.sort((a, b) => a[sortBy] - b[sortBy]);
          break;

        default:
          throw new TypeError(`Unsupported 'sortByType'.`);
      }
    }

    // Use reversed?
    if (reversed) cloned.reverse();

    return cloned;
  } catch (error) {
    console.warn(error.message);
    return array;
  }
};
