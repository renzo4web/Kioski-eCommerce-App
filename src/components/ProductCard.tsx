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
  const { addToFavorites, productState } = useAppState();
  const navigation = useNavigation<ProductCardProp>();

  const isFavorite = productState.favorites.includes(product.id);

  return (
    <View style={styles.productContainer}>
      {/* FAVORITE TOUCH */}
      <TouchableOpacity onPress={() => addToFavorites(product.id)}>
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
    width: 120,
    height: 120,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },

  productContainer: {
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});

export default ProductCard;
