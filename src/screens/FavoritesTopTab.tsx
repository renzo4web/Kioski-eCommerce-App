import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import ProductCard from '../components/ProductCard';
import { useAppState } from '../context/ProductsContext/ProductsContext';

const FavoritesTopTab = () => {
  const {
    productState: { favorites },
  } = useAppState();

  return (
    <View>
      <FlatGrid
        data={favorites}
        itemDimension={130}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => {
          return <ProductCard product={item} />;
        }}
      />
    </View>
  );
};

export default FavoritesTopTab;
