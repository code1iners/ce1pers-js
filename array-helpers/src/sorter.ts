import { ObjectArraySorterInput } from "./types";

/**
 * Sorts an object array based on the provided 'sortBy' and 'sortByType'.
 *
 * @throws {Error} Throws an type error if the 'array' argument type is not array.
 * @throws {Error} Throws an type error if the 'sortByType' is not supported.
 */
export const objectArraySorter = <T = any>(
  input: ObjectArraySorterInput<T>
) => {
  try {
    const { array, sortBy, sortByType, reversed = false } = input;

    if (!Array.isArray(array))
      throw new TypeError(`'array' argument must be array type.`);

    // Cloning array.
    const cloned: any[] = JSON.parse(JSON.stringify(array));

    // Not passed key parameter?
    if (!sortBy) {
      cloned.sort();
    } else {
      // Has key?
      switch (sortByType) {
        case "string":
          cloned.sort((a: any, b: any) => {
            const aKey = a[sortBy].toUpperCase();
            const bKey = b[sortBy].toUpperCase();
            return aKey.localeCompare(bKey);
          });
          break;

        case "number":
          cloned.sort((a: any, b: any) => a[sortBy] - b[sortBy]);
          break;

        default:
          throw new TypeError(`Unsupported 'sortByType'.`);
      }
    }

    // Use reversed?
    if (reversed) cloned.reverse();

    return cloned;
  } catch (err) {
    console.warn((err as Error).message);
    return input.array;
  }
};

/**
 * 중복되지 않는 조합에 대한 모든 경우의 수를 가져옵니다.
 * 조합은 서로 다른 n개의 원소를 가지고 순서에 상관없이 r개의 원소를 선택하는 것이다.

 * Input: [1, 2, 3]
 * Output: [ [1, 2], [1, 3], [2, 3] ]
 */
export const getCombinations = <T>(arr: T[], num: number) => {
  const results: T[][] = [];

  // nC1 이며, 1이면 의미 없기때문에 바로 반환한다.
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    // 조합에서는 값 순서에 상관없이 중복이 되면 안되기 때문에 현재값 이후의 배열들만 추출한다.
    const rest = origin.slice(index + 1);

    // 나머지 배열을 기준으로 다시 조합을 실시한다.
    // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
    const combinations = getCombinations(rest, num - 1);

    // 기준값(fixed)에 돌아온 조합(combinations)을 붙인다.
    const attached = combinations.map((v) => [fixed, ...v]);

    // 붙인 값을 결과 값에 넣어준다.
    results.push(...attached);
  });

  return results;
};

/**
 * 중복을 허용하는 순열에 대한 모든 경우의 수를 가져옵니다.
 * 순열은 서로 다른 n개의 원소를 가지고 중복 없이 순서에 상관있게 r개의 원소를 선택 혹은 나열 하는것이다.

 * Input: [1, 2, 3]
 * Output: [ [1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2] ]
 */
export const getPermutations = <T>(arr: T[], num: number) => {
  const results: T[][] = [];

  // nP1 이며, 1이면 의미 없기때문에 바로 반환한다.
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    // 순열에서는 조합과 달리 순서만 바뀌면 중복이 아니기때문에 기준값을 제외한 나머지 배열을 넣어준다.
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    // 나머지 배열을 기준으로 다시 순열을 구한다.
    // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
    const permutations = getPermutations(rest, num - 1);

    // 기준값(fixed)에 순열(permutations)을 붙인다.
    const attached = permutations.map((v) => [fixed, ...v]);

    // 붙인 값을 결과 값에 넣어준다.
    results.push(...attached);
  });

  return results;
};

/**
 * 중복순열에 대한 모든 경우의 수를 가져옵니다.
 * 중복순열은 서로 다른 n개의 원소를 가지고 중복을 허용하여 r개의 원소를 선택 혹은 나열 하는것이다.
 * (중복을 허용한다는건 본인 숫자의 중복을 의미한다.)

 * Input: [1, 2, 3]
 * Output: [ [1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3] ]
 */
export const getPermutationsWithSelf = <T>(arr: T[], num: number) => {
  const results: T[][] = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다.
    const permutations = getPermutations(origin, num - 1);

    // 기준값(fixed)에 순열(permutations)을 붙인다.
    const attached = permutations.map((v) => [fixed, ...v]);

    // 붙인 값을 결과 값에 넣어준다.
    results.push(...attached);
  });

  return results;
};
