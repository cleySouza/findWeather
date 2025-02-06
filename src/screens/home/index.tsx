import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles.ts';
import {Theme} from '../../theme';
import {CardClimate} from '../../components/app/cardClimate';
import {forecastConditionsIcons} from '../../utils/forecastIcon.tsx';
import {useWeather} from '../../hooks/useWeather.tsx';
import {HomeEmptyScreen} from '../homeEmpty';

export function HomeScreen({route}: any) {
  const [search, setSearch] = React.useState();
  const {getWeatherData, data} = useWeather();

  React.useEffect(() => {
    const dataWeather = getWeatherData();
    if (dataWeather) {
      setSearch(dataWeather);
    }
    console.log('getWeatherData()', dataWeather);
  }, [getWeatherData]);

  console.log('route ', route);
  console.log('data ', data);

  const date = new Date();

  const monthDate = Intl.DateTimeFormat('pt-BR', {
    month: 'short',
  }).format(date);
  const weekday = Intl.DateTimeFormat('pt-BR', {
    weekday: 'short',
  }).format(date);
  const day = Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
  }).format(date);
  const year = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
  }).format(date);

  function formatDate() {
    const week = weekday.toUpperCase();
    const month = monthDate.charAt(0).toUpperCase() + monthDate.slice(1);
    return `${week} ${day} ${month} de ${year}`;
  }

  const hours = search?.forecast?.forecastday?.[0]?.hour;

  return (
    <SafeAreaView style={styles.container}>
      {search ? (
        <View style={styles.content}>
          <View style={styles.header}>
            <Icon name="location-on" style={styles.iconLocation} />
            <View>
              <Text style={styles.titleHeader}>
                {search?.location?.name}, {search?.location?.country}
              </Text>
              <Text style={styles.subtitleHeader}>{formatDate()}</Text>
            </View>
          </View>
          <Image
            style={{width: '60%', height: '27%'}}
            source={forecastConditionsIcons(search?.current?.condition?.text)}
          />
          <Text style={styles.temperature}>
            {Math.floor(search?.current?.temp_c)}
          </Text>
          <Text style={styles.textClimate}>
            {search?.current?.condition?.text}
          </Text>

          <CardClimate
            humidity={search?.current?.humidity}
            wind={search?.current?.wind_kph}
            rain={search?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain}
          />

          <View style={styles.contentDay}>
            <Text style={styles.contentDayText}>Hoje</Text>
            <TouchableOpacity style={styles.contentDayButton}>
              <Text style={styles.contentDayButtonText}>Próximos 5 dias</Text>
              <Icon
                name="chevron-right"
                size={20}
                color={Theme.colors.gray100}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.contentNextHours}>
            <FlatList
              data={hours}
              horizontal={true}
              renderItem={({item, index}) => (
                <View key={index} style={styles.cardNextHours}>
                  <Text style={styles.textNextHoursTemp}>
                    {Math.floor(item.temp_c)}
                  </Text>
                  <Image
                    source={{uri: `https:${item.condition?.icon}`}}
                    style={{width: 40, height: 40}}
                  />
                  <Text style={styles.textNextHours}>
                    {item?.time?.substring(11, 16)}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      ) : (
        <HomeEmptyScreen />
      )}
    </SafeAreaView>
  );
}
