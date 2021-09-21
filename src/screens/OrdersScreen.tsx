import React from 'react';
import { Text, View } from 'react-native';
import { useAppState } from '../context/ProductsContext/ProductsContext';

const OrdersScreen = () => {
  const {
    productState: { orders },
  } = useAppState();

  return (
    <View>
      {orders?.length === 0 ? (
        <Text>Orders Screen</Text>
      ) : (
        <Text>{JSON.stringify(orders, null, 2)}</Text>
      )}
    </View>
  );
};

export default OrdersScreen;
