import React, { createContext, useState } from "react";

export const ShouldStickContext = createContext({
  shouldStick: null,
  setShouldStick: () => null,
});

export const ShouldStickProvider = ({ children }) => {
  const [shouldStick, setShouldStick] = useState(true);
  const value = { shouldStick, setShouldStick };
  return (
    <ShouldStickContext.Provider value={value}>
      {children}
    </ShouldStickContext.Provider>
  );
};
