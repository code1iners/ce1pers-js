import { extractNamingConvention } from "../shared/convention-extractor";

export const kebabize = (text: string) => {
  try {
    const trimmed = text.trim();
    const convention = extractNamingConvention(text);

    switch (convention) {
      case "snake":
        return trimmed.split("_").join("-").toLowerCase();

      case "pascal":
      case "camel":
        const splitted = text.split("");
        return splitted
          .map((char, index) => {
            const hasUppercase = /([A-Z])/g.test(char);
            const isFirstChar = index === 0;
            if (!hasUppercase || isFirstChar) return char.toLowerCase();
            return `-${char.toLowerCase()}`;
          })
          .join("");

      default:
        return trimmed.split(" ").join("-").toLowerCase();
    }
  } catch (err) {
    console.warn((err as Error).message);
    return text;
  }
};
