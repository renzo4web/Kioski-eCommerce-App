import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProductCart, useAppState } from '../context/ProductsContext/ProductsContext';

const ProductCheckout = ({ product }: { product: ProductCart }) => {
  const { increaseProductUnit, decreaseProductUnit, toggleProductCart } = useAppState();

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#fff',
        elevation: 1,
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          height: 1,
          width: 0,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        width: '100%',
      }}>
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
      />
      <View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => increaseProductUnit(product.id)}>
            <Icon name="add-circle-outline" size={30} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{product.quantity}</Text>
          <TouchableOpacity onPress={() => decreaseProductUnit(product.id)}>
            <Icon name="remove-circle-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 30 }}
            onPress={() => toggleProductCart(product)}>
            <Icon name="close-outline" size={30} color="firebrick" />
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
    marginRight: 10,
  },

  title: {
    fontWeight: 'bold',
  },

  price: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  quantity: {
    fontSize: 15,
  },
});

export default ProductCheckout;
