import { StackScreenProps } from '@react-navigation/stack';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { Product } from '../types/types';
import { fetchProducts } from '../utils/fetch';
import { RootStackParams } from '../navigator/StackNavigator';
import ProductCard from '../components/ProductCard';
import { shuffle } from '../utils/shuffle';
import { colors } from '../theme/appTheme';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import CategoriesList from '../components/CategoriesList';

interface Props extends DrawerNavigationProp<RootStackParams, 'Home'> {}

const HomeScreen = ({ navigation }: { navigation: Props }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentCategorie, setCurrentCategorie] = useState('all');

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
      <TouchableOpacity onPress={() => navigation.toggleDrawer() as any}>
        <Icon name="menu-outline" size={25} />
      </TouchableOpacity>

      <FlatGrid
        ListHeaderComponent={() => <CategoriesList onChange={handleChangeCategorie} />}
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



export default HomeScreen;
