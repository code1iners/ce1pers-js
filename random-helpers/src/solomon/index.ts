/**
 * Pick one of them.
 */
export const pick = <T>(items: T[]): [boolean, T | undefined] => {
  try {
    const tagged = Array.from([...items]).map((item, index) => ({
      [index]: item,
    }));

    // Make random number with limit.
    const randomNumber = Math.random();
    const pickedNumber = Math.floor(randomNumber * items.length);
    const pickedObject = tagged[pickedNumber];
    const [picked] = Object.values(pickedObject);

    return [true, picked];
  } catch (err) {
    return [false, undefined];
  }
};
