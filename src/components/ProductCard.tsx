import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Product } from '../types/types';
import { styles as stylesGlobal } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppState } from '../context/ProductsContext/ProductsContext';

type ProductCardProp = StackNavigationProp<RootStackParams, 'ProductScreen'>;

const ProductCard = ({ product }: { product: Product }) => {
  const { toggleFavorites, productState } = useAppState();
  const navigation = useNavigation<ProductCardProp>();

  const isFavorite = productState.favorites.find(
    item => item.id === product.id,
  );

  return (
    <View style={styles.productContainer}>
      {/* FAVORITE TOUCH */}
      <TouchableOpacity onPress={() => toggleFavorites(product)}>
        <Icon
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={25}
          color="red"
        />
      </TouchableOpacity>

      {/* TOUCH GO TO PRODUCT SCREEN */}
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'space-between' }}
        onPress={() => navigation.navigate('ProductScreen', { ...product })}>
        <Image
          style={styles.image}
          source={{
            uri: product.image,
          }}
        />

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Text style={stylesGlobal.title}>{product.title}</Text>
          <Text style={stylesGlobal.title}>
            <Icon name="pricetag" size={15} color="green" />${product.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: 120,
    resizeMode: 'stretch',
    width: 120,
  },
  productContainer: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
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
  },
});

export default ProductCard;
