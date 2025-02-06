import React, {useContext, createContext} from 'react';
import {MMKV} from 'react-native-mmkv';

interface IWeatherProvider {
  children: React.ReactNode;
}

interface IWeatherContextTypes {
  data: any;
  setWeatherData: (data: any) => void;
  getWeatherData: () => any;
}

const storage = new MMKV();

const WeatherContext = createContext<IWeatherContextTypes | undefined>(
  undefined,
);

export function WeatherProvider({children}: IWeatherProvider) {
  const data = storage.getString('weatherData');

  const getWeatherData = (): any => {
    const storedData = storage.getString('weatherData');
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  };

  function setWeatherData(data: any) {
    console.log('setWeatherData', data);
    const stringifiedData = JSON.stringify(data);
    storage.set('weatherData', stringifiedData);
  }

  return (
    <WeatherContext.Provider value={{data, setWeatherData, getWeatherData}}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }

  return context;
}
