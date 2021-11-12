import React, { createContext, useState } from 'react';

export interface IGlobalContext {
  isDrawerOpen: boolean;
  toggleDrawer?: () => void;
}

const defaultState = {
  isDrawerOpen: false,
};

export const GlobalContext = createContext<IGlobalContext>(defaultState);

const GlobalContextProvider: React.FC = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(defaultState.isDrawerOpen);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <GlobalContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
