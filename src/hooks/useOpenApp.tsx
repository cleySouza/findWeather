import React, {useContext, createContext, ReactNode} from 'react';
import {MMKV} from 'react-native-mmkv';

interface IOpenAppProvider {
  children: ReactNode;
}

interface IOpenAppContextTypes {
  isOpen: boolean;
  setOpenApp: () => void;
}

const storage = new MMKV();

const OpenAppContext = createContext<IOpenAppContextTypes | undefined>(
  undefined,
);

export function OpenProvider({children}: IOpenAppProvider) {
  const isOpen = storage.getBoolean('cley@isOpen') ?? false;

  function setOpenApp() {
    storage.set('cley@isOpen', true);
  }

  return (
    <OpenAppContext.Provider value={{isOpen, setOpenApp}}>
      {children}
    </OpenAppContext.Provider>
  );
}

export function useOpenApp() {
  const context = useContext(OpenAppContext);

  if (!context) {
    throw new Error('useOpenApp must be used within an OpenProvider');
  }

  return context;
}
