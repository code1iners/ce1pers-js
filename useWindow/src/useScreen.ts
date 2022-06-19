import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

/**
 * Getting current window size (width & height).
 */
export const useScreen = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>();

  useEffect(() => {
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
  const onResizeHandler = () =>
    setWindowSize({
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
