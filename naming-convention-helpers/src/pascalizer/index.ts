import { camelize } from "../camelizer";

export const pascalize = (text: string) => {
  try {
    const camelized = camelize(text);
    const firstChar = camelized.charAt(0).toUpperCase();
    const remainingText = camelized.slice(1);

    return `${firstChar}${remainingText}`;
  } catch (err) {
    console.warn((err as Error).message);
    return text;
  }
};
