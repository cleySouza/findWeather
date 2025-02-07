import React, {useState} from 'react';
import {Animated, Image} from 'react-native';
import BootSplash from 'react-native-bootsplash';

interface Props {
  onAnimationEnd: () => void;
}

export function Splash({onAnimationEnd}: Props) {
  const [opacity] = useState(() => new Animated.Value(1));

  const {container, logo} = BootSplash.useHideAnimation({
    manifest: require('../../assets/bootsplash/manifest.json'),
    logo: require('../../assets/bootsplash/logo.png'),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 500,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, {opacity}]}>
      <Image {...logo} />
    </Animated.View>
  );
}
