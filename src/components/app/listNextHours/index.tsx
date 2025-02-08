import {styles} from './styles.ts';
import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';

interface IProps {
  item: any;
}

export function ListNextHours({item}: IProps) {
  // Obter todas as horas do item
  const hoursToDisplay = item.hour; // Pegue todas as horas diretamente

  return (
    <View style={styles.contentNextHours}>
      <FlatList
        data={hoursToDisplay}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View key={index} style={styles.cardNextHours}>
            <Text style={styles.textNextHoursTemp}>
              {Math.floor(item.temp_c)}º
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
