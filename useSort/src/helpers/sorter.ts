interface BubbleProps {
  array: number[];
  index?: number;
  order?: "ascending" | "descending";
}

/**
 * Bubble sort.
 * @param array Unsorted array.
 * @param index Do not pass any input. this parameter designed for only recursive.
 * @param order Sort ordering. could choose ascending or descending.
 * @returns Sorted array.
 */
export const bubble = ({
  array,
  index = 0,
  order = "ascending",
}: BubbleProps) => {
  // Check weather it is the last index.
  if (array.length - 1 === index) return array;

  // Copied array.
  let result = [...array];

  // Check each value.
  for (let i = 0; i < array.length; i++) {
    const currentValue = result[i];
    const nextValue = result[i + 1];

    switch (order) {
      // In case of ascending.
      case "ascending":
        if (currentValue > nextValue) {
          result[i] = nextValue;
          result[i + 1] = currentValue;
        }
        break;

      // In case of descending.
      case "descending":
        if (currentValue < nextValue) {
          result[i] = nextValue;
          result[i + 1] = currentValue;
        }
        break;
    }
  }

  // Recursive.
  result = bubble({ array: result, index: index + 1, order });

  return result;
};
