import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

interface CardTempProps {
  search: any;
  onPress?: () => void;
}

export function CardTemp({search, onPress}: CardTempProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentTemp}>
          <Text style={styles.temp}>{Math.floor(search.current?.temp_c)}</Text>
          <Text style={styles.grau}>º</Text>
        </View>
        <Image
          style={styles.image}
          source={{uri: `https:${search?.current?.condition?.icon}`}}
        />
      </View>
      <Text style={styles.climate}>{search?.current?.condition?.text}</Text>
      <Text style={styles.city}>
        {search?.location?.name}, {search?.location?.country}
      </Text>
    </TouchableOpacity>
  );
}
