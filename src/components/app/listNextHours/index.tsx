import {styles} from './styles.ts';
import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';

interface IProps {
  hours: any;
}

export function ListNextHours({hours}: IProps) {
  const currentHour = new Date().getHours();

  const upcomingHours = hours.filter((item: any) => {
    const hourFromItem = new Date(item.time).getHours();
    return hourFromItem > currentHour;
  });
  return (
    <View style={styles.contentNextHours}>
      <FlatList
        data={upcomingHours}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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
  );
}
