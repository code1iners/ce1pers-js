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
export declare const usePopup: ({ onMessageCallback }: UsePopupProps) => {
    sendMessageToTargetOrigin: ({ type, data }: SendMessage) => void;
    sendMessageToSourceOrigin: ({ type, data }: SendMessage) => void;
    open: ({ targetOrigin, callback, windowTarget, }: OpenPopupProps) => void;
    getNewWindow: () => Window | null;
    getSourceOrigin: () => MessageEventSource;
    setSourceOrigin: (sourceOrigin: MessageEventSource) => void;
};
