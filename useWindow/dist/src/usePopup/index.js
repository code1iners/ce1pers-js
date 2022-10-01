"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePopup = void 0;
const usePopup = ({ onMessageCallback }) => {
    // Declared variables.
    let __newWindow__ = null;
    let __targetOrigin__;
    let __sourceOrigin__;
    // Initialize listeners.
    if (window && onMessageCallback) {
        window.addEventListener("message", onMessageCallback, false);
    }
    /**
     * Open new window popup.
     * @param {OpenPopupProps} props - Open new window popup props.
     */
    const open = ({ targetOrigin, callback, windowTarget = "_self", width = 500, height = 500, left, top, }) => {
        try {
            // Set width & height of the window.
            const widthValue = width;
            const heightValue = height !== null && height !== void 0 ? height : widthValue;
            // Set position of the window.
            let leftValue = left !== null && left !== void 0 ? left : window.screen.availWidth / 2 - widthValue / 2;
            let topValue = top !== null && top !== void 0 ? top : window.screen.availHeight / 2 - heightValue / 2;
            // Set target options.
            setTargetOrigin(targetOrigin);
            // Defined window features.
            const windowFeatures = `popup,toolbar,scrollbars=yes,top=${topValue},left=${leftValue},width=${widthValue},height=${heightValue}`;
            // Open new window popup.
            __newWindow__ = window.open(targetOrigin, windowTarget, windowFeatures);
            // Has callback? execute it.
            callback === null || callback === void 0 ? void 0 : callback();
        }
        catch (error) {
            console.error("[open]", error);
        }
    };
    /**
     * Send message to targeted window.
     * @param  {SendMessage } props - Send message properties.
     */
    const sendMessageToSourceOrigin = ({ type, data }) => {
        try {
            if (__sourceOrigin__) {
                __sourceOrigin__.postMessage(JSON.stringify({ data, type }), {
                    targetOrigin: __targetOrigin__,
                });
            }
        }
        catch (error) {
            console.error("[sendMessageToSourceOrigin]", error);
        }
    };
    /**
     * Send message to targeted window.
     * @param  {SendMessage } props - Send message properties.
     */
    const sendMessageToTargetOrigin = ({ type, data }) => {
        try {
            if (__newWindow__) {
                __newWindow__ === null || __newWindow__ === void 0 ? void 0 : __newWindow__.postMessage(JSON.stringify({ type, data }), __targetOrigin__);
            }
        }
        catch (error) {
            console.error("[sendMessageToTargetOrigin]", error);
        }
    };
    /**
     * Set source origin.
     * @param {MessageEventSource} sourceOrigin - Source origin.
     */
    const setSourceOrigin = (sourceOrigin) => {
        __sourceOrigin__ = sourceOrigin;
    };
    const getSourceOrigin = () => __sourceOrigin__;
    const setTargetOrigin = (targetOrigin) => {
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
exports.usePopup = usePopup;