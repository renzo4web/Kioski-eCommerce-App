import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProductCart, useAppState } from '../context/ProductsContext/ProductsContext';

const ProductCheckout = ({ product }: { product: ProductCart }) => {
  const { increaseProductUnit, decreaseProductUnit, toggleProductCart } = useAppState();

  return (
    <View style={{ flex: 1, flexDirection: 'row', marginVertical: 20 }}>
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
      />
      <View>
        <Text>{product.title}</Text>
        <Text>{product.price}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => increaseProductUnit(product.id)}>
            <Icon name="add-circle-outline" size={30} />
          </TouchableOpacity>
          <Text>{product.quantity}</Text>
          <TouchableOpacity onPress={() => decreaseProductUnit(product.id)}>
            <Icon name="remove-circle-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleProductCart(product)}>
            <Icon name="close-outline" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },

  price: {
    fontWeight: 'bold',
  },
});

export default ProductCheckout;
