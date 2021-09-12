import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { styles as stylesGlobal } from '../theme/appTheme';
import { Product } from '../types/types';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({ navigation }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let current = true;

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        if (current) {
          setProducts(json);
        }
      });

    return () => {
      current = false;
    };
  }, []);

  return (
    <View style={stylesGlobal.globalMargin}>
      <Text>Home</Text>
      <FlatList
        data={products}
        keyExtractor={({ id }: Product) => id.toString()}
        renderItem={({ item: product }: { item: Product }) => {
          return (
            <View style={styles.planetContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductScreen', { ...product })
                }>
                <Image
                  style={styles.image}
                  source={{
                    uri: product.image,
                  }}
                />
                <Text style={stylesGlobal.title}>{product.title}</Text>
                <Text style={stylesGlobal.title}>${product.price}</Text>
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
    width: 150,
    height: 150,
    resizeMode: 'stretch',
  },

  planetContainer: {
    alignSelf: 'center',
    marginVertical: 30,
  },
});

export default HomeScreen;
