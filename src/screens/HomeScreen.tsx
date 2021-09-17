import { StackScreenProps } from '@react-navigation/stack';
import { FlatGrid } from 'react-native-super-grid';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Product } from '../types/types';
import { fetchProducts } from '../utils/fetch';
import { RootStackParams } from '../navigator/StackNavigator';
import ProductCard from '../components/ProductCard';
import { shuffle } from '../utils/shuffle';
import { colors } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'Home'> {}

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentCategorie, setCurrentCategorie] = useState('all');

  const categories = [
    'all',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  useEffect(() => {
    let current = true;

    fetchProducts().then(data => {
      if (current) {
        const dataShuffled = shuffle(data);
        setProducts(dataShuffled);
      }
    });

    return () => {
      current = false;
    };
  }, []);

  const handleChangeCategorie = useCallback((categorie: string) => {
    setCurrentCategorie(categorie);
  }, []);

  return (
    <View style={{ width: '100%', flex: 1 }}>
      <FlatGrid
        ListHeaderComponent={() => (
          <FlatList
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginVertical: 20,
            }}
            data={categories}
            keyExtractor={categorie => categorie}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleChangeCategorie(item)}>
                <Text style={styles.badge}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        data={
          currentCategorie !== 'all'
            ? products.filter(product => product.category === currentCategorie)
            : products
        }
        itemDimension={130}
        keyExtractor={({ id }: Product) => id.toString()}
        renderItem={({ item }: { item: Product }) => {
          return <ProductCard product={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.primary,
    color: colors.secondary,
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    borderRadius: 15,
  },
});

export default HomeScreen;
