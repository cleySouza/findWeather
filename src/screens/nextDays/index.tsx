import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigator} from '../../hooks';

import {CardClimate} from '../../components/app/cardClimate';
import {CardNextDays} from '../../components/app/cardNextDays';
import Icon from 'react-native-vector-icons/Octicons';
import Calendar from 'react-native-vector-icons/Entypo';

import {styles} from './styles';
import {Theme} from '../../theme';

import {forecastConditionsIcons} from '../../utils';
import {ModalInfoDay} from '../../components/app';

export function NextDaysScreen({route}: any) {
  const [open, setOpen] = React.useState(false);
  const [itemSelected, setItemSelected] = React.useState<any>(null); // Para armazenar o item selecionado

  const {search} = route.params;
  const navigation = useNavigator();

  function handleGoBack() {
    navigation?.goBack();
  }

  function handlePressOpenInfo(item: any) {
    setOpen(true);
    setItemSelected(item);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: Theme.colors.dark400,
          paddingHorizontal: 20,
          paddingBottom: 40,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}>
        <View style={styles.contentHeader}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Icon name="chevron-left" size={25} color={Theme.colors.white} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 5,
            }}>
            <Calendar name="calendar" size={18} color={Theme.colors.white} />
            <Text style={styles.title}>Próximos 5 dias</Text>
          </View>
          <View style={{width: 40}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'flex-start',
            gap: 20,
            marginTop: 20,
          }}>
          <Image
            source={{
              uri: `${forecastConditionsIcons(
                search?.current?.condition?.text,
              )}`,
            }}
            style={{
              width: '45%',
              height: '90%',
            }}
          />
          <View style={{flex: 2}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: Theme.fonts.regular,
                color: Theme.colors.gray100,
              }}>
              Amanhã
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 76,
                  fontFamily: Theme.fonts.bold,
                  color: Theme.colors.white,
                  textAlign: 'center',
                }}>
                {Math.floor(search?.forecast?.forecastday?.[1]?.day?.maxtemp_c)}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: Theme.colors.white,
                  fontFamily: Theme.fonts.regular,
                  marginTop: -30,
                }}>
                º
              </Text>
              <Text
                style={{
                  fontSize: 33,
                  fontFamily: Theme.fonts.semibold,
                  color: Theme.colors.gray100,
                }}>
                /
                {Math.floor(search?.forecast?.forecastday?.[1]?.day?.mintemp_c)}
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: Theme.colors.gray100,
                  fontFamily: Theme.fonts.semibold,
                  marginTop: -20,
                }}>
                º
              </Text>
            </View>

            <View style={{width: '100%'}}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 20,
                  fontFamily: Theme.fonts.regular,
                  color: Theme.colors.gray100,
                  marginTop: -20,
                }}>
                {search?.forecast?.forecastday?.[1]?.day?.condition?.text}
              </Text>
            </View>
          </View>
        </View>
        <CardClimate
          humidity={search?.forecast?.forecastday?.[1]?.day?.avghumidity}
          wind={search?.forecast?.forecastday?.[1]?.day?.maxwind_kph}
          rain={search?.forecast?.forecastday?.[1]?.day?.daily_chance_of_rain}
        />
      </View>
      <View style={styles.content}>
        <CardNextDays search={search} selectItem={handlePressOpenInfo} />
      </View>
      {open && <ModalInfoDay setOpen={setOpen} item={itemSelected} />}
    </SafeAreaView>
  );
}
