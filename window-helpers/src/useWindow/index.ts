import type {
  OpenWindowInputs,
  SendMessageInputs,
  SendMessageToOriginInputs,
  UsePopupInputs,
} from "./types";

export const useWindow = (inputs?: UsePopupInputs) => {
  // Declared variables.
  let __window__: Window | null = null;
  let __targetOrigin__: string;
  let __sourceOrigin__: MessageEventSource;

  /**
   * Default window unload handler.
   */
  const defaultWindowUnloadHandler = () => {
    // Send message for notify which this window is invalid anymore.
    sendMessageToSourceOrigin({ data: "The windows closed.", type: "close" });

    // Has callback? then execute it.
    inputs?.onWindowUnloadCallback?.();
  };

  /**
   * Open new window popup.
   * @param {OpenWindowInputs} inputs - Open new window popup inputs.
   */
  const open = ({
    targetOrigin,
    callback,
    windowTarget = "_self",
    width = 500,
    height = 500,
    left,
    top,
    options,
    isPopup,
  }: OpenWindowInputs) => {
    try {
      // Set width & height of the window.
      const widthValue = width;
      const heightValue = height ?? widthValue;

      // Set position of the window.
      let leftValue = left ?? window.screen.availWidth / 2 - widthValue / 2;
      let topValue = top ?? window.screen.availHeight / 2 - heightValue / 2;

      // Set target options.
      setTargetOrigin(targetOrigin);

      const popupOptions = `popup,toolbar,scrollbars=yes,top=${topValue},left=${leftValue},width=${widthValue},height=${heightValue}${
        options ? `,${options}` : ""
      }`;

      // Defined window features.
      const windowFeatures = isPopup ? popupOptions : options;

      // Open new window popup.
      const openedWindow = window.open(
        targetOrigin,
        windowTarget,
        windowFeatures
      );

      // Has callback? execute it.
      callback?.();

      return setWindow(openedWindow);
    } catch (error) {
      console.error("[open]", error);
      return null;
    }
  };

  /**
   * @typedef {Object} SendMessageInputs
   * @property {string} to - (Required) Origin.
   * @property {string} type - (Required) Type.
   * @property {any} data - (Required) Payload.
   * @property {string} sourceOrigin - (Optional) Source origin object.
   */
  /**
   * Send message to selected origin.
   * @param {SendMessageInputs} inputs - Send message inputs.
   */
  const sendMessage = <T>({
    to,
    type,
    data,
    sourceOrigin,
  }: SendMessageInputs<T>) => {
    try {
      switch (to) {
        case "targetOrigin":
          return sendMessageToTargetOrigin<T>({ type, data });

        case "sourceOrigin":
          return sendMessageToSourceOrigin<T>({ type, data, sourceOrigin });

        default:
          throw new Error("'to' property of inputs is required.");
      }
    } catch (error) {
      console.error("[sendMessage]", (error as any).message);
      return false;
    }
  };

  /**
   * @typedef {Object} SendMessageToOriginInputs<T>
   * @property {string} type - (Required) Type.
   * @property {any} data - (Required) Payload.
   * @property {string} sourceOrigin - (Optional) Source origin object.
   */
  /**
   * Send message to targeted window.
   * @param  {SendMessageToOriginInputs<T>} inputs - Send message properties.
   * @returns {boolean} Return Success(true) of Failure(false)
   */
  const sendMessageToSourceOrigin = <T>({
    type,
    data,
  }: SendMessageToOriginInputs<T>) => {
    try {
      if (!__sourceOrigin__) throw new Error("Source origin does not exists.");
      __sourceOrigin__.postMessage(JSON.stringify({ data, type }), {
        targetOrigin: __targetOrigin__,
      });

      return true;
    } catch (error) {
      console.error("[sendMessageToSourceOrigin]", error);
      return false;
    }
  };

  /**
   * @typedef {Object} SendMessageToOriginInputs<T>
   * @property {string} type - (Required) Type.
   * @property {any} data - (Required) Payload.
   * @property {string} sourceOrigin - (Optional) Source origin object.
   */
  /**
   * Send message to targeted window.
   * @param  {SendMessageToOriginInputs<T> } inputs - Send message properties.
   * @returns {boolean} Return Success(true) of Failure(false)
   */
  const sendMessageToTargetOrigin = <T>({
    type,
    data,
  }: SendMessageToOriginInputs<T>) => {
    try {
      if (!__window__) throw new Error("Opened window does not exists.");

      __window__.postMessage(JSON.stringify({ type, data }), __targetOrigin__);

      return true;
    } catch (error) {
      console.error("[sendMessageToTargetOrigin]", error);
      return false;
    }
  };

  /**
   * Open deep link by scheme url.
   * @param {string} url Deep link URL.
   */
  const openDeepLink = (url: string) => {
    try {
      if (!window) throw new Error("Does not supported.");
      window.location.href = url;
    } catch (error) {
      console.error("[openDeepLink]", (error as any).message);
    }
  };

  /**
   * Subscribe window message event listener.
   */
  const subscribe = () => {
    if (window && inputs?.onMessageCallback) {
      window.addEventListener("message", inputs.onMessageCallback, false);
    }

    window.addEventListener("unload", defaultWindowUnloadHandler, false);
  };

  /**
   * Unsubscribe window message event listener.
   */
  const unsubscribe = () => {
    if (window && inputs?.onMessageCallback) {
      window.removeEventListener("message", inputs.onMessageCallback, false);
    }

    window.removeEventListener("unload", defaultWindowUnloadHandler, false);
  };

  const getSourceOrigin = () => __sourceOrigin__;
  const setSourceOrigin = (sourceOrigin: MessageEventSource) => {
    __sourceOrigin__ = sourceOrigin;
    return sourceOrigin;
  };

  const getTargetOrigin = () => __targetOrigin__;
  const setTargetOrigin = (targetOrigin: string) => {
    __targetOrigin__ = targetOrigin;
    return targetOrigin;
  };

  const getWindow = () => __window__;
  const setWindow = (window: Window | null) => {
    __window__ = window;
    return window;
  };

  // Initialize listeners.
  if (inputs?.isAutoSubscribe) subscribe();

  return {
    sendMessage,
    sendMessageToTargetOrigin,
    sendMessageToSourceOrigin,
    open,
    getWindow,
    getSourceOrigin,
    setSourceOrigin,
    setTargetOrigin,
    getTargetOrigin,
    openDeepLink,
    subscribe,
    unsubscribe,
  };
};
