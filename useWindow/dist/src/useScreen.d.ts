interface WindowSize {
    width: number;
    height: number;
}
/**
 * Getting current window size (width & height).
 */
export declare const useScreen: () => {
    windowSize: WindowSize | undefined;
    subscribe: () => void;
    unsubscribe: () => void;
};
export {};
