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
  }, []);

  return {
    windowSize,
  };
};
