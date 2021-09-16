import React from 'react';
import { View, Text } from 'react-native';
import { useAppState } from '../context/ProductsContext/ProductsContext';

const ShopCartTab = () => {
  const { productState } = useAppState();

  const isCartEmpty = productState.cart.length <= 0;

  return (
    <View>
      <Text>ShopCartTab</Text>
      {isCartEmpty ? (
        <Text>Nothing in the cart</Text>
      ) : (
        <Text>{productState.cart}</Text>
      )}
    </View>
  );
};

export default ShopCartTab;
