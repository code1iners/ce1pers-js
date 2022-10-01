import { OpenPopupProps, SendMessage, UsePopupProps } from "./types";

export const usePopup = ({
  onMessageCallback,
  onWindowUnloadCallback,
}: UsePopupProps) => {
  // Declared variables.
  let __newWindow__: Window | null = null;
  let __targetOrigin__: string;
  let __sourceOrigin__: MessageEventSource;

  // Initialize listeners.
  if (window) {
    if (onMessageCallback) {
      window.addEventListener("message", onMessageCallback, false);
    }

    window.addEventListener("unload", defaultWindowUnloadHandler, false);
  }

  function defaultWindowUnloadHandler() {
    sendMessageToSourceOrigin({ data: "The windows closed.", type: "close" });

    if (onWindowUnloadCallback) onWindowUnloadCallback();
  }

  /**
   * Open new window popup.
   * @param {OpenPopupProps} props - Open new window popup props.
   */
  const open = ({
    targetOrigin,
    callback,
    windowTarget = "_self",
    width = 500,
    height = 500,
    left,
    top,
  }: OpenPopupProps) => {
    try {
      // Set width & height of the window.
      const widthValue = width;
      const heightValue = height ?? widthValue;

      // Set position of the window.
      let leftValue = left ?? window.screen.availWidth / 2 - widthValue / 2;
      let topValue = top ?? window.screen.availHeight / 2 - heightValue / 2;

      // Set target options.
      setTargetOrigin(targetOrigin);
      // Defined window features.
      const windowFeatures = `popup,toolbar,scrollbars=yes,top=${topValue},left=${leftValue},width=${widthValue},height=${heightValue}`;
      // Open new window popup.
      __newWindow__ = window.open(targetOrigin, windowTarget, windowFeatures);

      // Has callback? execute it.
      callback?.();
    } catch (error) {
      console.error("[open]", error);
    }
  };

  /**
   * Send message to targeted window.
   * @param  {SendMessage } props - Send message properties.
   */

  const sendMessageToSourceOrigin = ({ type, data }: SendMessage) => {
    try {
      if (__sourceOrigin__) {
        __sourceOrigin__.postMessage(JSON.stringify({ data, type }), {
          targetOrigin: __targetOrigin__,
        });
      }
    } catch (error) {
      console.error("[sendMessageToSourceOrigin]", error);
    }
  };

  /**
   * Send message to targeted window.
   * @param  {SendMessage } props - Send message properties.
   */
  const sendMessageToTargetOrigin = ({ type, data }: SendMessage) => {
    try {
      if (__newWindow__) {
        __newWindow__?.postMessage(
          JSON.stringify({ type, data }),
          __targetOrigin__
        );
      }
    } catch (error) {
      console.error("[sendMessageToTargetOrigin]", error);
    }
  };

  /**
   * Set source origin.
   * @param {MessageEventSource} sourceOrigin - Source origin.
   */
  const setSourceOrigin = (sourceOrigin: MessageEventSource) => {
    __sourceOrigin__ = sourceOrigin;
  };

  const getSourceOrigin = () => __sourceOrigin__;

  const setTargetOrigin = (targetOrigin: string) => {
    __targetOrigin__ = targetOrigin;
  };

  const getTargetOrigin = () => __targetOrigin__;

  const getNewWindow = () => __newWindow__;

  return {
    sendMessageToTargetOrigin,
    sendMessageToSourceOrigin,
    open,
    getNewWindow,
    getSourceOrigin,
    setSourceOrigin,
    setTargetOrigin,
    getTargetOrigin,
  };
};
