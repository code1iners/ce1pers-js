import { OpenPopupProps, SendMessage, UsePopupProps } from "./types";
export declare const usePopup: ({ onMessageCallback, onWindowUnloadCallback, }: UsePopupProps) => {
    sendMessageToTargetOrigin: ({ type, data }: SendMessage) => void;
    sendMessageToSourceOrigin: ({ type, data }: SendMessage) => void;
    open: ({ targetOrigin, callback, windowTarget, width, height, left, top, }: OpenPopupProps) => void;
    getNewWindow: () => Window | null;
    getSourceOrigin: () => MessageEventSource;
    setSourceOrigin: (sourceOrigin: MessageEventSource) => void;
    setTargetOrigin: (targetOrigin: string) => void;
    getTargetOrigin: () => string;
};
