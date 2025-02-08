import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useGuardCity, useWeather, useOpenApp} from '../hooks';

import {
  WellcomeScreen,
  SearchScreen,
  HomeScreen,
  NextDaysScreen,
} from '../screens';
import Icon from 'react-native-vector-icons/AntDesign';
import {Theme} from '../theme';
import {getForestApi} from '../service/api.ts';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export function Routers() {
  const {isOpen} = useOpenApp();
  const {getCity} = useGuardCity();
  const {setWeatherData} = useWeather();

  React.useEffect(() => {
    const city = getCity();
    if (city !== null) {
      getForestApi({value: city, days: 6}, setWeatherData);
    }
  });

  return (
    <Stack.Navigator
      initialRouteName={isOpen ? 'tabs' : 'wellcome'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="wellcome" component={WellcomeScreen} />
      <Stack.Screen name="nextDays" component={NextDaysScreen} />
      <Stack.Screen name="tabs" component={RoutesTabs} />
    </Stack.Navigator>
  );
}

export function RoutesTabs() {
  const {getWeatherData} = useWeather();
  const data = getWeatherData();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          backgroundColor: Theme.colors.dark,
          borderTopWidth: 0,
          paddingHorizontal: 20,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: Theme.fonts.semibold,
        },
        tabBarActiveTintColor: Theme.colors.white,
        tabBarInactiveTintColor: Theme.colors.gray500,
      }}>
      {
        <Tabs.Screen
          name="home"
          component={HomeScreen}
          initialParams={data}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <View>
                <Icon
                  name="home"
                  color={focused ? Theme.colors.white : Theme.colors.gray500}
                  size={24}
                />
              </View>
            ),
          }}
        />
      }
      <Tabs.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="search1"
                color={focused ? Theme.colors.white : Theme.colors.gray500}
                size={24}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
