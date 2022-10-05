import { DebugLevel, DebugInput } from "./types";

const capitalizer = (text: string) => {
  try {
    const firstChar = text.charAt(0).toUpperCase();
    const remainChars = text.slice(1);
    return `${firstChar}${remainChars}`;
  } catch (error) {
    console.error("[capitalizer:error]", error);
    return text;
  }
};

const makeNowDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return {
    now,
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
  };
};

const makeNowDateTime = () => {
  const { year, month, date, hours, minutes, seconds } = makeNowDate();
  const parsedMonth = String(month).padStart(2, "0");
  const parsedDate = String(date).padStart(2, "0");
  const parsedHours = String(hours).padStart(2, "0");
  const parsedMinutes = String(minutes).padStart(2, "0");
  const parsedSeconds = String(seconds).padStart(2, "0");

  return `${year}-${parsedMonth}-${parsedDate} ${parsedHours}:${parsedMinutes}:${parsedSeconds}`;
};

/**
 * Getting debug function.
 */
export const getDebugFunction = (debugLevel: DebugLevel) => {
  const { log, info, warn, error } = console;
  switch (debugLevel) {
    case "debug":
      return log;
    case "info":
      return info;
    case "warning":
      return warn;
    case "error":
      return error;
    default:
      return log;
  }
};

/**
 * Write console log.
 */
export const dbugger = ({
  title,
  description,
  parameters,
  parametersStyle = "object",
  debugLevel = "debug",
  includeDateTime = true,
  flag,
}: DebugInput) => {
  try {
    // Make logger.
    const logger = getDebugFunction(debugLevel);

    // Make message.
    const messages = [];
    title && messages.push(title);
    includeDateTime && messages.unshift(makeNowDateTime());
    flag && messages.push(flag);

    // Make parameters.
    const parsedParameters =
      parametersStyle === "string"
        ? JSON.stringify(parameters, null, 1)
        : parameters;

    // Make text.
    const text = description
      ? `[${messages.join("|")}] ${capitalizer(description)}`
      : `[${messages.join("|")}]`;

    // Write log.
    logger(text);
    logger(parsedParameters);
  } catch (error) {
    console.error("[debug:error]", error);
  }
};
