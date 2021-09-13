import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, Platform } from 'react-native';

import ShopCartTab from '../screens/ShopCartTab';
import { colors } from '../theme/appTheme';
import DealsTab from '../screens/DealsTab';
import { TopTabNavigator } from './TopTabNavigator';

const BottomTabIOS = createBottomTabNavigator();

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const iconNames: {
  [key: string]: string;
} = {
  StackNavigator: 'Home',
  DealsTab: 'Deals',
  ShopCartTab: 'Cart',
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      initialRouteName="TopTabNavigator"
      activeColor="orange"
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarIcon: ({ color }) => {
          return <Text style={{ color: color }}>{iconNames[route.name]}</Text>;
        },
      })}>
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{ title: 'Home' }}
        component={TopTabNavigator}
      />

      <BottomTabAndroid.Screen
        name="DealsTab"
        options={{ title: 'Deals' }}
        component={DealsTab}
      />

      <BottomTabAndroid.Screen
        name="ShopCartTab"
        options={{ title: 'Cart' }}
        component={ShopCartTab}
      />
    </BottomTabAndroid.Navigator>
  );
};

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      initialRouteName="HomeScreen"
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarIcon: ({ color }) => {
          return <Text style={{ color: color }}>{iconNames[route.name]}</Text>;
        },
      })}>
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        options={{ title: 'Home' }}
        component={TopTabNavigator}
      />

      <BottomTabIOS.Screen
        name="DealsTab"
        options={{ title: 'Deals' }}
        component={DealsTab}
      />

      <BottomTabIOS.Screen
        name="ShopCartTab"
        options={{ title: 'Cart' }}
        component={ShopCartTab}
      />
    </BottomTabIOS.Navigator>
  );
};
