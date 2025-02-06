import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routers} from './src/router';
import {OpenProvider} from './src/hooks/useOpenApp';
import {WeatherProvider} from './src/hooks/useWeather';

function App(): React.JSX.Element {
  return (
    <OpenProvider>
      <WeatherProvider>
        <NavigationContainer>
          <Routers />
        </NavigationContainer>
      </WeatherProvider>
    </OpenProvider>
  );
}

export default App;
