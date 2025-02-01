import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routers} from './src/router';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}

export default App;
