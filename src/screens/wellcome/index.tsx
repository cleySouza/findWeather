import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigator, useOpenApp} from '../../hooks';

import Brand from '../../assets/images/cloudAndThunder.svg';

import {styles} from './styles.ts';
import {calculateDimension} from '../../utils';

export function WellcomeScreen() {
  const navigation = useNavigator();
  const {setOpenApp, isOpen} = useOpenApp();

  useEffect(() => {
    if (!isOpen) {
      setOpenApp();
    }
  }, [isOpen, setOpenApp]);

  function handleClick() {
    navigation.navigate('tabs');
  }

  const {width, height} = calculateDimension({
    percentWidth: 0.61,
    percentHeight: 0.26,
  });

  const title = 'Descubra o Clima \n na sua Cidade';
  const restBrand =
    'ficou tão fácil ter a previsão do tempo na palma da sua mão';

  return (
    <View style={styles.Container}>
      <Brand style={styles.image} width={width} height={height} />

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
        <Text style={styles.textButton} onPress={handleClick}>
          Iniciar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
