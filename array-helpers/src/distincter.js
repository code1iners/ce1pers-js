// @ts-check

/**
 * Remove duplicate item in array.
 *
 * @param {Array} array
 *
 * @returns {Array}
 *
 * @throws {TypeError} Throws an type error if the 'array' argument is not array type.
 */
export const distincter = (array) => {
  try {
    if (!Array.isArray(array))
      throw new TypeError(`'array' argument must be 'array' type.`);
    return Array.from(new Set(JSON.parse(JSON.stringify(array))));
  } catch (err) {
    console.warn(err.message);
    return array;
  }
};
