import { Image } from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

/**
 * ### Load images.
 */
export const loadImages = (
  images: string[] | number[] | string[][] | number[][]
) => {
  return images?.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });
};

/**
 * ### Load fonts.
 */
export const loadFonts = (
  fonts:
    | string[]
    | {
        [fontFamily: string]: Font.FontSource;
      }[]
) => fonts?.map((font) => Font.loadAsync(font));
