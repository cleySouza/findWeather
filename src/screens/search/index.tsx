import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {styles} from './styles.ts';
import {Theme} from '../../theme';
import {useNavigator} from '../../router';

export function SearchScreen() {
  const navigation = useNavigator();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Icon name="chevron-left" size={25} color={Theme.colors.white} />
          </TouchableOpacity>
          <Text style={styles.title}>Busca</Text>
          <View style={{width: 40}} />
        </View>
        <View style={styles.formContent}>
          <View style={styles.inputContent}>
            <Icon name="search" size={19} color={Theme.colors.white} />
            <TextInput
              placeholder="Digite o nome de uma cidade"
              placeholderTextColor={Theme.colors.gray200}
              style={styles.input}
            />
          </View>
          <TouchableOpacity onPress={handleGoBack} style={styles.buttonSearch}>
            <Icon name="location" size={29} color={Theme.colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
