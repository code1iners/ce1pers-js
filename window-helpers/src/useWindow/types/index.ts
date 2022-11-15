export interface OpenWindowInputs {
  targetOrigin: string;
  callback?: () => void;
  windowTarget?: "_self" | "_blank" | "_parent" | "_top";
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  options?: string;
  isPopup?: boolean;
}

export interface SendMessageToOriginInputs<T> {
  data: any;
  type: T;
  sourceOrigin?: MessageEventSource;
}

export interface UsePopupInputs {
  isAutoSubscribe?: boolean;
  onMessageCallback?: (event: MessageEvent) => void;
  onWindowUnloadCallback?: () => void;
}

export interface SendMessageInputs<T> extends SendMessageToOriginInputs<T> {
  to: "targetOrigin" | "sourceOrigin";
}
