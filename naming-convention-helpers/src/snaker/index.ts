import { extractNamingConvention } from "../shared/convention-extractor";

export const snakeize = (text: string) => {
  try {
    const convention = extractNamingConvention(text);
    if (convention === "snake") return text.toLowerCase();

    const trimmed = text.trim();
    const splitted = trimmed.split("");
    const result = splitted.map((char, index) => {
      switch (convention) {
        case "pascal":
        case "camel":
          // Is text uppercase?
          if (!/([A-Z])/g.test(char)) return char;
          const isFirstChar = index === 0;
          return isFirstChar ? char : `_${char}`;

        case "kebab":
          if (char !== "-") return char;
          return "_";

        default:
          if (char !== " ") return char;
          return "_";
      }
    });
    return result.join("").toLowerCase();
  } catch (err) {
    console.warn((err as Error).message);
    return text;
  }
};
