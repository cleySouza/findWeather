import React, {useContext, createContext} from 'react';
import {MMKV} from 'react-native-mmkv';

interface IGuardCityProvider {
  children: React.ReactNode;
}

interface IGuardCityContextTypes {
  data: any;
  setCity: (data: any) => void;
  getCity: () => any;
}

const storage = new MMKV();

const GuardCityContext = createContext<IGuardCityContextTypes | undefined>(
  undefined,
);

export function GuardCityProvider({children}: IGuardCityProvider) {
  const data = storage.getString('cley@nameCityData');

  const getCity = (): any => {
    const storedData = storage.getString('cley@nameCityData');
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  };

  function setCity(data: any) {
    const stringifiedData = JSON.stringify(data);
    storage.set('cley@nameCityData', stringifiedData);
  }

  return (
    <GuardCityContext.Provider value={{data, setCity, getCity}}>
      {children}
    </GuardCityContext.Provider>
  );
}

export function useGuardCity(): IGuardCityContextTypes {
  const context = useContext(GuardCityContext);

  if (!context) {
    throw new Error('useGuardCity must be used within a GuardCityContext');
  }

  return context;
}
