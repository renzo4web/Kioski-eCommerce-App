import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { useAppState } from '../context/ProductsContext/ProductsContext';
import ProductCheckout from '../components/ProductCheckout';
import CheckoutResult from '../components/CheckoutResult';
import { colors } from '../theme/appTheme';

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
