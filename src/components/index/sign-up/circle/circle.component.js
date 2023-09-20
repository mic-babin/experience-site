import React, { useState, useEffect, useRef } from "react";
import { Wrapper } from "./circle.styles"; // Assuming "Wrapper" is correctly imported from the styles file.

const Circle = ({ height, index, width }) => {
  const startingValue = (26.71 / 3.5) * Math.abs(index);
  const circle = useRef();
  const [count, setCount] = useState(4.45 + startingValue);
  const incrementAmount = 0.1; // Increment by 100 each time
  const maxValue = 26.71;
  const minValue = 4.45;
  const loopDuration = 11.23; // 10 milliseconds per loop

  useEffect(() => {
    let isForward = true;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        let nextCount;

        if (isForward) {
          nextCount = prevCount + incrementAmount;
        } else {
          nextCount = prevCount - incrementAmount;
        }

        if (nextCount >= maxValue) {
          isForward = false;
        } else if (nextCount <= minValue) {
          isForward = true;
        }

        return nextCount;
      });
    }, loopDuration);

    return () => clearInterval(interval);
  }, []);

  const circleStyle = {
    width: `${14.3}vw`,
    height: `${height * 0.99}px`,
  };

  return (
    <Wrapper ref={circle} style={circleStyle}>
      {}
    </Wrapper>
  );
};

export default Circle;
