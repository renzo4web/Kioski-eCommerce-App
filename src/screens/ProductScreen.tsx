import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Planet'> {}

const ProductScreen = ({ route }: Props) => {
  console.log(route.params);
  const planet = route.params;
  return (
    <View>
      <Text style={{ color: 'white' }}>{planet.name}</Text>

      <Text style={{ color: 'white' }}>{planet.radius}</Text>
    </View>
  );
};

export default ProductScreen;
