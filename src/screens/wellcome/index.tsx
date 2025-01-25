import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import Brand from '../../assets/images/cloudAndThunder.svg';

import {styles} from './styles.ts';

const {width, height} = Dimensions.get('window');

export function WellcomeScreen() {
  const percentageWidth = 0.61 * width;
  const percentageHeight = 0.26 * height;

  const title = 'Descubra o Clima \n na sua Cidade';
  const restBrand =
    'ficou tão fácil ter a previsão do tempo na palma da sua mão';

  return (
    <View style={styles.Container}>
      <Brand
        style={styles.image}
        width={percentageWidth}
        height={percentageHeight}
      />

      <Text style={styles.Title}>{title}</Text>

      <View style={styles.content}>
        <View style={styles.brandContent}>
          <Text style={styles.brand}>Com o </Text>
          <Text style={styles.brandBold}>FindWeather </Text>
          <Text style={styles.brand}>nunca</Text>
        </View>
        <Text style={styles.brand}>{restBrand}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}
