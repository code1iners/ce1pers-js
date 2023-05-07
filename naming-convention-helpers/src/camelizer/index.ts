interface Options {
  delimiter?: string;
}

export const camelize = (text: string, options?: Options) => {
  try {
    const trimmed = text.trim();
    let delimiter = options?.delimiter ?? " ";

    if (trimmed.includes("_")) delimiter = "_";
    if (trimmed.includes("-")) delimiter = "-";

    const splitted = trimmed.split(delimiter);
    for (let i = 1; i < splitted.length; i++) {
      const originText = splitted[i];
      const sliced = originText.slice(1);
      splitted[i] = `${originText.toUpperCase().charAt(0)}${sliced}`;
    }
    const result = splitted.join("");

    return `${result.charAt(0).toLowerCase()}${result.slice(1)}`;
  } catch (err) {
    console.warn((err as Error).message);
    return text;
  }
};
