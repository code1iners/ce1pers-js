"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScreen = void 0;
const react_1 = require("react");
/**
 * Getting current window size (width & height).
 */
const useScreen = () => {
    const [windowSize, setWindowSize] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if (window) {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        return () => {
            unsubscribe();
        };
    }, []);
    /**
     * On resize event handler.
     */
    const onResizeHandler = () => setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    /**
     * Subscribe to window resize event listener.
     */
    const subscribe = () => {
        if (window) {
            window.addEventListener("resize", onResizeHandler);
        }
    };
    /**
     * Unsubscribe to window resize event listener.
     */
    const unsubscribe = () => {
        if (window) {
            window.removeEventListener("resize", onResizeHandler);
        }
    };
    return {
        windowSize,
        subscribe,
        unsubscribe,
    };
};
exports.useScreen = useScreen;
