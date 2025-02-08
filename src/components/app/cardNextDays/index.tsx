import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface IProps {
  search: any;
  selectItem: (item: any) => void;
}

export function CardNextDays({search, selectItem}: IProps) {
  return (
    <View>
      <FlatList
        data={search?.forecast?.forecastday.slice(1)}
        style={{marginTop: 20}}
        renderItem={({item, index}) => {
          const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
          const monthsOfYear = [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
          ];
          const date = new Date(item.date + 'T00:00:00');
          const dayOfWeek = date.getDay();
          const month = date.getMonth();
          const dayOfMonth = date.getDate();
          const formattedDay = dayOfMonth.toString().padStart(2, '0');
          const text = item.day.condition.text;
          const limitedText =
            text.length > 22 ? text.slice(0, 22) + '...' : text;
          return (
            <TouchableOpacity
              onPress={() => selectItem(item)}
              key={index}
              style={styles.container}>
              <View>
                <Text style={styles.daysofweek}>{daysOfWeek[dayOfWeek]}</Text>
                <Text style={styles.monthofweek}>
                  {monthsOfYear[month]}, {formattedDay}
                </Text>
              </View>
              <View style={styles.contentClimateDay}>
                <Image
                  source={{uri: `https:${item.day.condition.icon}`}}
                  width={30}
                  height={30}
                />
                <Text ellipsizeMode="tail" style={styles.textClimateDay}>
                  {limitedText}
                </Text>
              </View>
              <View style={styles.contentTemperature}>
                <Text style={styles.maxTemperature}>
                  {Math.floor(item.day.maxtemp_c)}º
                </Text>
                <Text style={styles.minTemperature}>
                  /{Math.floor(item.day.mintemp_c)}º
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
