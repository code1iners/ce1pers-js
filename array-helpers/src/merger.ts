import { ObjectArrayMergerInput } from "./types";

/**
 * Merges object arrays into one array using the provided 'mergeBy'
 *
 * @throws {Error} - Throws an error if the length of the arrays are not equal.
 * @throws {Error} - Throws an error if the provided merge key does not exist.
 */
export const objectArrayMerger = ({
  arrays,
  mergeBy,
}: ObjectArrayMergerInput) => {
  try {
    // Does not same array length.
    const referenceLength = arrays.at(0).length;
    for (let i = 1; i < arrays.length; i += 1) {
      if (arrays[i].length !== referenceLength)
        throw new Error("Arrays length does not equal.");
    }

    // Have a mergeBy into each array?
    const hasMergeKey = arrays.every((array) =>
      array.every((item: any) => mergeBy in item)
    );
    if (!hasMergeKey)
      throw new Error(`Merge key '${mergeBy}' does not exist in all arrays.`);

    // Defined result as variable.
    const result = [];

    // Merging text from each array.
    for (let i = 0; i < referenceLength; i += 1) {
      const mergedTextArray = [];

      for (let j = 0; j < arrays.length; j += 1) {
        mergedTextArray.push(arrays.at(j).at(i)[mergeBy]);
      }

      result.push(mergedTextArray);
    }

    return result;
  } catch (err) {
    console.warn((err as Error).message);
    return [];
  }
};
