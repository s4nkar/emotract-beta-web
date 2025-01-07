import React, { createContext, useState, ReactNode } from 'react';

// Interface for the context
interface ToggleContextType {
  sideMenuIsExpand: boolean;
  toggleSideMenu: () => void;
  isExpandOnHover: boolean;
  handleHoverExpand: (value: boolean) => void;
}

// Create the context
export const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

// ToggleProvider component to provide the context
export const ToggleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(false);
  const [isExpandOnHover, setIsExpandOnHover] = useState(false);

  const toggleSideMenu = () => setSideMenuIsExpand((prev) => !prev);

  const handleHoverExpand = (value: boolean) => {
      setIsExpandOnHover(value);
  };

  return (
    <ToggleContext.Provider value={{ sideMenuIsExpand, toggleSideMenu, isExpandOnHover, handleHoverExpand }}>
      {children}
    </ToggleContext.Provider>
  );
};
