import type { NamingConvention } from "./types";

export const extractNamingConvention = (
  text: string
): NamingConvention | undefined => {
  const trimmed = text.trim();
  if (trimmed.includes(" ")) return "normal";
  if (trimmed.includes("-")) return "kebab";
  if (trimmed.includes("_")) return "snake";

  const isFirstCharUppercase = /[A-Z]/.test(trimmed.charAt(0));
  const isRemainingCharUppercase = trimmed
    .split("")
    .some((char) => /[A-Z]/.test(char));
  if (isFirstCharUppercase && isRemainingCharUppercase) return "pascal";
  if (!isFirstCharUppercase && isRemainingCharUppercase) return "camel";

  return "normal";
};
