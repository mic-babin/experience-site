import React, { createContext, useState } from "react";

export const MenuContext = createContext({
  showMenu: null,
  setShowMenu: () => null,
});

export const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const value = { showMenu, setShowMenu };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
