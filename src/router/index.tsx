import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation, ParamListBase} from '@react-navigation/native';

import {WellcomeScreen, HomeEmptyScreen} from '../screens';
import Icon from 'react-native-vector-icons/Octicons';
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
        tabBarStyle: {
          backgroundColor: Theme.colors.dark,
        },
      }}>
      <Tabs.Screen
        name="homeEmpty"
        component={HomeEmptyScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            color: Theme.colors.white,
          },
          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="home"
                color={focused ? Theme.colors.white : Theme.colors.gray500}
                size={22}
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
