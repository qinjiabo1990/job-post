'use client';

import { useContext, createContext } from 'react';

const initialState = {
  user: 'test',
};

const AppContext = createContext(null);

export function AppProvider({ children }) {
  return (
    <AppContext.Provider value={initialState}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
