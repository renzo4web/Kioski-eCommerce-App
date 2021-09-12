import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';
import ShopCartTab from '../screens/ShopCartTab';
import { colors } from '../theme/appTheme';
import DealsTab from '../screens/DealsTab';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const iconNames: {
  [key: string]: string;
} = {
  StackNavigator: 'Home',
  DealsTab: 'Deals',
  ShopCartTab: 'Cart',
};

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarIcon: ({ focused, color, size }) => {
          return <Text style={{ color: color }}>{iconNames[route.name]}</Text>;
        },
      })}>
      <Tab.Screen
        name="StackNavigator"
        options={{ title: 'Home' }}
        component={StackNavigator}
      />

      <Tab.Screen
        name="DealsTab"
        options={{ title: 'Deals' }}
        component={DealsTab}
      />

      <Tab.Screen
        name="ShopCartTab"
        options={{ title: 'Cart' }}
        component={ShopCartTab}
      />
    </Tab.Navigator>
  );
};
