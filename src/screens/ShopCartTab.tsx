import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { useAppState } from '../context/ProductsContext/ProductsContext';
import ProductCheckout from '../components/ProductCheckout';
import CheckoutResult from '../components/CheckoutResult';

const ShopCartTab = () => {
  const {
    productState: { cart },
    checkoutOrder,
  } = useAppState();

  const isCartEmpty = cart.length <= 0;
  const subtotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );
  const total = subtotal + 4.99;

  return (
    <View>
      {isCartEmpty ? (
        <Text>Nothing in the cart</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={cart => cart.id.toString()}
            renderItem={({ item }) => <ProductCheckout product={item} />}
          />
          <CheckoutResult subtotal={subtotal} total={total} />
          <TouchableOpacity onPress={() => checkoutOrder()}>
            <Text>CHECKOUT</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};




export default ShopCartTab;
