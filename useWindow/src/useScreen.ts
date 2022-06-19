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

  const onResize = () =>
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  useEffect(() => {
    if (window) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.addEventListener("resize", onResize);
    }
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return {
    windowSize,
  };
};
