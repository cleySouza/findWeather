import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routers} from './src/router';
import {OpenProvider, WeatherProvider, GuardCityProvider} from './src/hooks';
import {Splash} from './src/utils/splash';

function App(): React.JSX.Element {
  const [visible, setVisible] = React.useState(true);

  return (
    <OpenProvider>
      <GuardCityProvider>
        <WeatherProvider>
          <NavigationContainer>
            {visible && <Splash onAnimationEnd={() => setVisible(false)} />}
            <Routers />
          </NavigationContainer>
        </WeatherProvider>
      </GuardCityProvider>
    </OpenProvider>
  );
}

export default App;
