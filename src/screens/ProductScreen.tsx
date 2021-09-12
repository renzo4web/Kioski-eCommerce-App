import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { Product } from '../types/types';

interface Props extends StackScreenProps<RootStackParams, 'Product'> {}

const ProductScreen = ({ route }: Props) => {
  const product = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Text>{product.title}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
