import React, { createContext, useState } from 'react';
import { InputEventHandlerType, InputEventType } from '../types/events';

export interface IGlobalContext {
  isDrawerOpen: boolean;
  toggleDrawer?: () => void;

  searchValue: string;
  handleSearch?: InputEventHandlerType;
}

const defaultState = {
  isDrawerOpen: false,
  searchValue: '',
};

export const GlobalContext = createContext<IGlobalContext>(defaultState);

const GlobalContextProvider: React.FC = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(defaultState.isDrawerOpen);
  const [searchValue, setSearchValue] = useState(defaultState.searchValue);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const handleSearch = (event: InputEventType) => {
    setSearchValue(event.target.value);
  };

  return (
    <GlobalContext.Provider
      value={{ isDrawerOpen, toggleDrawer, searchValue, handleSearch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
