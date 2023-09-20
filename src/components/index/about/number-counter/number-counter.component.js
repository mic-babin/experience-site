import React, { useState, useEffect } from "react";

import { Number } from "./number-counter.styles";

const NumberCounter = ({ max, inView, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTime = 0;
      const duration = 2000; // 2 seconds
      const increment = max / (duration / 1000); // Increment per second

      const animationFrame = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const newCount = Math.min(
          max,
          Math.floor(increment * (elapsedTime / 1000))
        );

        setCount(newCount);

        if (newCount < max) {
          requestAnimationFrame(animationFrame);
        }
      };

      requestAnimationFrame(animationFrame);
    }
  }, [inView, max]);

  return (
    <Number style={{ color: color }}>
      {inView ? <div>{count}</div> : <div>0</div>}
    </Number>
  );
};

export default NumberCounter;
