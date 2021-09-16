import { StackScreenProps } from '@react-navigation/stack';
import { FlatGrid } from 'react-native-super-grid';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { Product } from '../types/types';
import { fetchProducts } from '../utils/fetch';
import { RootStackParams } from '../navigator/StackNavigator';
import ProductCard from '../components/ProductCard';

interface Props extends StackScreenProps<RootStackParams, 'Home'> {}

const HomeScreen = () => {
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
        renderItem={({ item }: { item: Product }) => {
          return <ProductCard product={item} />;
        }}
      />
    </View>
  );
};

export default HomeScreen;
