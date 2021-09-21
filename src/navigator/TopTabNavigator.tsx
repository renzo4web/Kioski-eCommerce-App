import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import FavoritesTopTab from '../screens/FavoritesTopTab';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';

const iconNames: {
  [key: string]: string;
} = {
  StackNavigator: 'basket-outline',
  CategoryTopTab: 'list-outline',
  FavoritesTopTab: 'heart-outline',
};

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 12 },
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          elevation: 0,
        },

        tabBarIcon: ({ color }) => {
          return <Icon name={iconNames[route.name]} size={25} color="#000" />;
        },
      })}>
      <Tab.Screen
        name="StackNavigator"
        options={{ title: 'All Products' }}
        component={StackNavigator}
      />
      <Tab.Screen
        name="FavoritesTopTab"
        options={{ title: 'Favorites' }}
        component={FavoritesTopTab}
      />
    </Tab.Navigator>
  );
};
