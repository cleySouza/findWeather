declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-vector-icons/Octicons' {
  import {IconProps} from 'react-native-vector-icons/Icon';
  import React from 'react';

  const Ionicons: React.ComponentType<IconProps>;

  export default Ionicons;
}
