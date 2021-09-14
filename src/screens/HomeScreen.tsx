import { StackScreenProps } from '@react-navigation/stack';
import { FlatGrid } from 'react-native-super-grid';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { styles as stylesGlobal } from '../theme/appTheme';
import { Product } from '../types/types';
import { fetchProducts } from '../utils/fetch';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({ navigation }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let current = true;

    fetchProducts().then(data => {
      if (current) {
        setProducts(data);
      }
    });

    return () => {
      current = false;
    };
  }, []);

  return (
    <View style={{ width: '100%', flex: 1 }}>
      <FlatGrid
        data={products}
        itemDimension={130}
        keyExtractor={({ id }: Product) => id.toString()}
        renderItem={({ item: product }: { item: Product }) => {
          return (
            <View style={styles.productContainer}>
              <TouchableOpacity
                style={{ flex: 1, justifyContent: 'space-between' }}
                onPress={() =>
                  navigation.navigate('ProductScreen', { ...product })
                }>
                <Image
                  style={styles.image}
                  source={{
                    uri: product.image,
                  }}
                />
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                  <Text style={stylesGlobal.title}>{product.title}</Text>
                  <Text style={stylesGlobal.title}>
                    <Icon name="pricetag" size={15} color="green" />$
                    {product.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
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

export default HomeScreen;
