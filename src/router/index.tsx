import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation, ParamListBase} from '@react-navigation/native';

import {WellcomeScreen, HomeEmptyScreen, SearchScreen} from '../screens';
import Icon from 'react-native-vector-icons/AntDesign';
import {Theme} from '../theme';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export function Routers() {
  return (
    <Stack.Navigator
      initialRouteName="wellcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="wellcome" component={WellcomeScreen} />
      {/*<Stack.Screen name="homeEmpty" component={HomeEmptyScreen} />*/}
      <Stack.Screen name="tabs" component={RoutesTabs} />
    </Stack.Navigator>
  );
}

export function RoutesTabs() {
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
      <Tabs.Screen
        name="homeEmpty"
        component={HomeEmptyScreen}
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
      <Tabs.Screen
        name="searchScreen"
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

export function useNavigator() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return navigation;
}
