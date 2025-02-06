import {styles} from './styles.ts';
import {Text, View} from 'react-native';
import Drop from '../../../assets/images/drop-miniature.svg';
import Wind from '../../../assets/images/wind-miniature.svg';
import Rain from '../../../assets/images/raining-cloud-miniature.svg';

interface Props {
  humidity: number;
  wind: number;
  rain: number;
}

export function CardClimate({humidity, wind, rain}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Drop />
        <Text style={styles.textContent}>{Math.floor(humidity)}%</Text>
        <Text style={styles.textSecondaryContent}>Umidade</Text>
      </View>
      <View style={styles.divisor} />
      <View style={styles.content}>
        <Wind />
        <Text style={styles.textContent}>{Math.floor(wind)}km/h</Text>
        <Text style={styles.textSecondaryContent}>Veloc. Vento</Text>
      </View>
      <View style={styles.divisor} />
      <View style={styles.content}>
        <Rain />
        <Text style={styles.textContent}>{Math.floor(rain)}%</Text>
        <Text style={styles.textSecondaryContent}>Chuva</Text>
      </View>
    </View>
  );
}
