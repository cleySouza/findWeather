import {styles} from './styles.ts';
import {Text} from 'react-native';
import Drop from '../../../assets/images/drop-miniature.svg';
import Wind from '../../../assets/images/wind-miniature.svg';
import Rain from '../../../assets/images/raining-cloud-miniature.svg';
import {Box} from '../../core';

interface Props {
  humidity: number;
  wind: number;
  rain: number;
}

export function CardClimate({humidity, wind, rain}: Props) {
  return (
    <Box style={styles.container}>
      <Box style={styles.content}>
        <Drop />
        <Text style={styles.textContent}>{Math.floor(humidity)}%</Text>
        <Text style={styles.textSecondaryContent}>Umidade</Text>
      </Box>
      <Box style={styles.divisor} />
      <Box style={styles.content}>
        <Wind />
        <Text style={styles.textContent}>{Math.floor(wind)}km/h</Text>
        <Text style={styles.textSecondaryContent}>Veloc. Vento</Text>
      </Box>
      <Box style={styles.divisor} />
      <Box style={styles.content}>
        <Rain />
        <Text style={styles.textContent}>{Math.floor(rain)}%</Text>
        <Text style={styles.textSecondaryContent}>Chuva</Text>
      </Box>
    </Box>
  );
}
