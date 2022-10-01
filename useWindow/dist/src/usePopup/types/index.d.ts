export interface OpenPopupProps {
    targetOrigin: string;
    callback?: () => void;
    windowTarget?: "_self" | "_blank" | "_parent" | "_top";
    width?: number;
    height?: number;
    left?: number;
    top?: number;
}
export interface SendMessage {
    data: any;
    type: "open" | "close" | "ready" | "data";
    sourceOrigin?: MessageEventSource;
}
export interface UsePopupProps {
    onMessageCallback?: (event: MessageEvent) => void;
    onWindowUnloadCallback?: () => void;
}
