import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { Planet } from '../types/types';

export type RootStackParams = {
  Home: undefined;
  Planet: Planet;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        cardStyle: {
          backgroundColor: 'rgb(7, 7, 36)',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Planet" component={ProductScreen} />
    </Stack.Navigator>
  );
};
