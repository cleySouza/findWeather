import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Octicons';
import {styles} from './styles.ts';
import {Theme} from '../../theme';
import {useNavigator} from '../../router';
import {CardTemp} from '../../components/app/cardTemp';
import {getForestApi} from '../../service/api.ts';
import {Loading} from '../../components/app/loading';
import {useWeather} from '../../hooks/useWeather.tsx';

interface FormData {
  value: string;
}

export function SearchScreen() {
  const [search, setSearch] = React.useState();
  const {setWeatherData, getWeatherData} = useWeather();
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigator();
  const {control, handleSubmit} = useForm<FormData>({
    defaultValues: {value: ''},
  });

  function handleGoBack() {
    navigation.goBack();
  }

  function onSubmit(data: FormData) {
    setLoading(true);
    getForestApi({value: data.value, days: 7, data: ''}, setSearch, setLoading);
  }

  function handlePressCard() {
    let data: any;
    setWeatherData(search);
    if (search) {
      data = getWeatherData();
    }
    console.log(data);

    if (data) {
      navigation.navigate('home', {search});
    }
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
        {search && <CardTemp search={search} onPress={handlePressCard} />}
        {loading && <Loading />}
      </View>
    </SafeAreaView>
  );
}
