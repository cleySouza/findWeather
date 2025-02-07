import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {Routers} from './src/router';
import {OpenProvider, WeatherProvider} from './src/hooks';
import {Splash} from './src/utils/splash';

function App(): React.JSX.Element {
  const [visible, setVisible] = React.useState(true);
  // React.useEffect(() => {
  //   const init = async () => {};
  //
  //   init().finally(async () => {
  //     await BootSplash.hide({fade: true});
  //   });
  // }, []);
  return (
    <OpenProvider>
      <WeatherProvider>
        <NavigationContainer>
          {visible && <Splash onAnimationEnd={() => setVisible(false)} />}
          <Routers />
        </NavigationContainer>
      </WeatherProvider>
    </OpenProvider>
  );
}

export default App;
