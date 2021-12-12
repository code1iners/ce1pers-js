import * as ScreenOrientation from "expo-screen-orientation";

export const PORTRAIT_UP: string = "PORTRAIT_UP";
export const PORTRAIT_DOWN: string = "PORTRAIT_DOWN";
export const LANDSCAPE_LEFT: string = "PORTRAIT_UP";
export const LANDSCAPE_RIGHT: string = "PORTRAIT_UP";

/**
 * ### Get current screen orientation.
 * @returns PORTRAIT_UP | PORTRAIT_DOWN | LANDSCAPE_LEFT | LANDSCAPE_RIGHT
 */
export const getCurrentScreenOrientation = async (): Promise<string> => {
  const status = await ScreenOrientation.getOrientationAsync();
  switch (status) {
    case 1:
      return PORTRAIT_UP;
    case 2:
      return PORTRAIT_DOWN;
    case 3:
      return LANDSCAPE_LEFT;
    case 4:
      return LANDSCAPE_RIGHT;
  }
};

/**
 * ### Set device orientation by portrait.
 * @param direction : up = default | down | undefined;
 */
export const setOrientationByPortrait = async (
  direction: string = PORTRAIT_UP
): Promise<void> => {
  switch (direction) {
    case PORTRAIT_UP:
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
      break;

    case PORTRAIT_DOWN:
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_DOWN
      );
      break;

    default:
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
      console.warn(
        "[setOrientationByPortrait] : Parameter direction value is must be 'up' or 'down' or 'undefined'."
      );
      break;
  }
};

/**
 * ### Set device orientation by landscape.
 * @param direction : left = default | right | undefined;
 */
export const setOrientationByLandscape = async (
  direction: string = LANDSCAPE_LEFT
): Promise<void> => {
  switch (direction) {
    case LANDSCAPE_LEFT:
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
      break;

    case LANDSCAPE_RIGHT:
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
      break;

    default:
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
      console.warn(
        "[setOrientationByLandscape] : Parameter direction value is must be 'left' or 'right' or 'undefined'."
      );
      break;
  }
};

/**
 * ### Release orientation by default.
 */
export const releaseOrientation = async (): Promise<void> => {
  await ScreenOrientation.unlockAsync();
};

/**
 * ### Add event listener when changed orientation.
 * @param handler Event handler function.
 * @returns
 */
export const addListener = (
  handler: ScreenOrientation.OrientationChangeListener
): ScreenOrientation.Subscription => {
  return ScreenOrientation.addOrientationChangeListener(handler);
};

/**
 * ### Remove event listener by subscription.
 * @param subscription Response (Subscription) of addListener method.
 */
export const removeListener = (
  subscription: ScreenOrientation.Subscription
) => {
  ScreenOrientation.removeOrientationChangeListener(subscription);
};
