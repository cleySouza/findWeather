import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigator} from '../../router';

import Brand from '../../assets/images/climate-change.svg';

import {styles} from './styles.ts';
import {calculateDimension} from '../../utils';

export function HomeEmptyScreen() {
  const navigation = useNavigator();

  const {width, height} = calculateDimension({
    percentHeight: 0.32,
    percentWidth: 0.67,
  });

  function handleClick() {
    navigation.navigate('searchScreen');
  }

  return (
    <View style={styles.Container}>
      <View style={styles.contentTitle}>
        <Text style={styles.title400}>Find</Text>
        <Text style={styles.title600}>Weather</Text>
      </View>
      <Brand width={width} height={height} />
      <TouchableOpacity onPress={handleClick}>
        <Text style={styles.buttonText}>
          {'Selecione aqui um local e \n encontre o clima em tempo real'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
