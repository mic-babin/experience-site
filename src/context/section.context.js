import React, { createContext, useState } from "react";

export const SectionContext = createContext({
  section: null,
  setSection: () => null,
});

export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState(null);
  const value = { section, setSection };
  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
};
