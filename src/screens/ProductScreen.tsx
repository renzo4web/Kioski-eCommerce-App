import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import ProductStars from '../components/ProductStars';
import { useAppState } from '../context/ProductsContext/ProductsContext';

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

const ProductScreen = ({ route }: Props) => {
  const { toggleProductCart } = useAppState();

  const product = route.params;

  return (
    <View style={styles.container}>
      <Text>{product.title}</Text>
      <ProductStars starsCount={product.rating.rate} />
      <Text>{product.rating.count}</Text>
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
      />
      <Text>{product.price}</Text>

      <TouchableOpacity
        style={styles.addToCart}
        onPress={() => toggleProductCart(product)}>
        <Text style={styles.addToCartText}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
  },

  addToCart: {
    width: '100%',
    backgroundColor: 'green',
  },

  addToCartText: {
    textAlign: 'center',
  },
});

export default ProductScreen;
