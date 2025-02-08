import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigator, useWeather, useGuardCity} from '../../hooks';
import {getForestApi, getSearchApi} from '../../service/api.ts';

import Icon from 'react-native-vector-icons/Octicons';
import {CardTemp} from '../../components/app/cardTemp';
import {Loading} from '../../components/app/loading';

import {styles} from './styles.ts';
import {Theme} from '../../theme';

interface FormData {
  value: string;
}

export function SearchScreen() {
  const [search, setSearch] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigator();
  const {setCity} = useGuardCity();
  const {setWeatherData} = useWeather();
  const {control, handleSubmit} = useForm<FormData>({
    defaultValues: {value: ''},
  });

  function handleGoBack() {
    navigation.goBack();
  }

  function onSubmit(data: FormData) {
    getSearchApi({value: data.value}, setSearch, setLoading);
    // getForestApi({value: data.value, days: 6}, setSearch, setLoading);
    setCity(data.value);
  }

  function handlePressCard(item: any) {
    setWeatherData(item);
    navigation.navigate('home', {data: item});
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
            <Controller
              control={control}
              name="value"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Digite o nome de uma cidade"
                  placeholderTextColor={Theme.colors.gray200}
                  style={styles.input}
                />
              )}
            />
          </View>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.buttonSearch}>
            <Icon name="location" size={29} color={Theme.colors.white} />
          </TouchableOpacity>
        </View>
        {search && (
          <FlatList
            data={search}
            renderItem={({item}) => (
              <CardTemp search={item} onPress={() => handlePressCard(item)} />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
        {loading && <Loading />}
      </View>
    </SafeAreaView>
  );
}
