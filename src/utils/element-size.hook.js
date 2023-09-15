import { useState, useEffect } from "react";

export const useElementSize = (element) => {
  const [size, setSize] = useState({ height: 0, width: 0 });
  const isBrowser = typeof window !== "undefined";

  const handleResize = () =>
    setSize({
      height: element?.current?.clientHeight,
      width: element?.current?.clientWidth,
    });

  useEffect(() => {
    if (!element?.current?.clientHeight || !element?.current?.clientWidth)
      return;
    handleResize();
    isBrowser && window.addEventListener("resize", handleResize);
    return () => {
      return () =>
        isBrowser && window.removeEventListener("resize", handleResize);
    };
  }, [element?.current?.clientHeight, element?.current?.clientWidth]);

  return size;
};
