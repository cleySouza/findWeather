import {ActivityIndicator} from 'react-native';
import {styles} from './styles.ts';

export function Loading() {
  return <ActivityIndicator size="large" style={styles.container} />;
}
