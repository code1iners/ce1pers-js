export interface OpenPopupProps {
  targetOrigin: string;
  callback?: () => void;
  windowTarget?: "_self" | "_blank" | "_parent" | "_top";
}

export interface SendMessage {
  data: any;
  type: "open" | "close" | "ready" | "data";
  sourceOrigin?: MessageEventSource;
}

export interface UsePopupProps {
  onMessageCallback?: (event: MessageEvent) => void;
}

export const usePopup = ({ onMessageCallback }: UsePopupProps) => {
  // Declared variables.
  let __newWindow__: Window | null = null;
  let __targetOrigin__: string;
  let __sourceOrigin__: MessageEventSource;

  // Initialize listeners.
  if (window && onMessageCallback) {
    window.addEventListener("message", onMessageCallback, false);
  }

  /**
   * Open new window popup.
   * @param {OpenPopupProps} props - Open new window popup props.
   */
  const open = ({
    targetOrigin,
    callback,
    windowTarget = "_self",
  }: OpenPopupProps) => {
    try {
      const widthValue = 400;
      const heightValue = widthValue;
      const leftValue = window.screen.availWidth / 2 - widthValue / 2;
      const topValue = window.screen.availHeight / 2 - heightValue / 2;

      __targetOrigin__ = targetOrigin;

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

  const getNewWindow = () => __newWindow__;

  return {
    sendMessageToTargetOrigin,
    sendMessageToSourceOrigin,
    open,
    getNewWindow,
    getSourceOrigin,
    setSourceOrigin,
  };
};
