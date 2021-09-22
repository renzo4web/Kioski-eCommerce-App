import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { useAppState } from '../context/ProductsContext/ProductsContext';
import ProductCheckout from '../components/ProductCheckout';
import CheckoutResult from '../components/CheckoutResult';
import { colors } from '../theme/appTheme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TouchNavigation from '../components/TouchNavigation';

const ShopCartTab = ({ navigation }: BottomTabBarProps) => {
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
    <View style={{ flex: 1 }}>
      {isCartEmpty ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Your cart is empty</Text>

          <TouchNavigation
            title="Continue Shopping"
            goTo={() => navigation.navigate('TopTabNavigator')}
          />

          <TouchNavigation
            title="Check your orders"
            goTo={() => navigation.navigate('OrdersScreen')}
          />
        </View>
      ) : (
        <>
          <View style={{ marginHorizontal: 10 }}>
            <FlatList
              data={cart}
              keyExtractor={cart => cart.id.toString()}
              renderItem={({ item }) => <ProductCheckout product={item} />}
            />
            <CheckoutResult subtotal={subtotal} total={total} />
            <TouchableOpacity
              style={styles.touchContainer}
              onPress={() => checkoutOrder()}>
              <Text style={styles.touchCheckout}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  touchContainer: {
    alignItems: 'center',
  },
  touchCheckout: {
    paddingHorizontal: 20,
    fontSize: 30,
    borderRadius: 20,
    backgroundColor: colors.primary,
    color: colors.secondary,
  },
});

export default ShopCartTab;
