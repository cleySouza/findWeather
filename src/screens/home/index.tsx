import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useWeather, useNavigator} from '../../hooks';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {CardClimate} from '../../components/app/cardClimate';
import {HomeEmptyScreen} from '../homeEmpty';

import {styles} from './styles.ts';
import {Theme} from '../../theme';
import {
  forecastConditionsIcons,
  formatDate,
  calculateDimension,
} from '../../utils';
import {ListNextHours} from '../../components/app/listNextHours';
import {Container} from '../../components/core';

export function HomeScreen({route}: any) {
  const {data} = route.params || {};
  const {getWeatherData} = useWeather();
  const dataHook = getWeatherData();
  const navigation = useNavigator();
  const search = data ? data : dataHook;

  const item = search?.forecast?.forecastday?.[0];

  const {width, height} = calculateDimension({
    percentHeight: 0.2,
    percentWidth: 0.42,
  });

  function handleGoNextDays() {
    navigation.navigate('nextDays', {search});
  }

  return (
    <Container style={styles.container}>
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
            style={{maxWidth: width, maxHeight: height}}
            width={width}
            height={height}
            source={{
              uri: `${forecastConditionsIcons(
                search?.current?.condition?.text,
              )}`,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.temperature}>
              {Math.floor(search?.current?.temp_c)}
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontFamily: Theme.fonts.regular,
                color: Theme.colors.white,
                marginTop: 15,
              }}>
              º
            </Text>
          </View>
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
            <TouchableOpacity
              style={styles.contentDayButton}
              onPress={handleGoNextDays}>
              <Text style={styles.contentDayButtonText}>Próximos 5 dias</Text>
              <Icon
                name="chevron-right"
                size={20}
                color={Theme.colors.gray100}
              />
            </TouchableOpacity>
          </View>
          <ListNextHours item={item} />
        </View>
      ) : (
        <HomeEmptyScreen />
      )}
    </Container>
  );
}
