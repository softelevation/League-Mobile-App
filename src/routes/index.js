// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/map';
import {RouteConstants} from '../utils/constants';
import ImageComponent from '../components/ImageComponent';
import SettingScreen from '../screens/settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MapStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Map') {
            iconName = focused ? 'home_icon' : 'home_icon';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings_icon' : 'settings_icon';
          }

          // You can return any component that you like here!
          return (
            <ImageComponent
              name={iconName}
              width={size}
              height={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
        }}
        name={RouteConstants.MapScreen}
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
        }}
        name={RouteConstants.SettingScreen}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RouteConstants.HomeStack}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={RouteConstants.HomeStack} component={MapStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
