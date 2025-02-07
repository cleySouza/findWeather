import {SafeAreaView, ViewProps} from 'react-native';
import {ReactNode} from 'react';

interface Props extends ViewProps {
  children: ReactNode;
}

export function Container({children, ...rest}: Props) {
  return <SafeAreaView {...rest}>{children}</SafeAreaView>;
}
