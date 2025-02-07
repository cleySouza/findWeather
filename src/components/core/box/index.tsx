import {ReactNode} from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

interface Props extends ViewProps {
  children?: ReactNode;
}

export function Box({children, ...rest}: Props) {
  return <View {...rest}>{children}</View>;
}
