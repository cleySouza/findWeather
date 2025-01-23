import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles.ts';

export function WellcomeScreen() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Hello World!</Text>
    </View>
  );
}
