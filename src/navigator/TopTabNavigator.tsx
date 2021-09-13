import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackNavigator } from './StackNavigator';

import CategoryTopTab from '../screens/CategoryTopTab';
import FavoritesTopTab from '../screens/FavoritesTopTab';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="StackNavigator"
        options={{ title: 'All Products' }}
        component={StackNavigator}
      />
      <Tab.Screen
        name="CategoryTopTab"
        options={{ title: 'Categories' }}
        component={CategoryTopTab}
      />
      <Tab.Screen
        name="FavoritesTopTab"
        options={{ title: 'Favorites' }}
        component={FavoritesTopTab}
      />
    </Tab.Navigator>
  );
};
