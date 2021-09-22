import React, { useCallback, useEffect, useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import ModalSelector from 'react-native-modal-selector';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Product } from '../types/types';
import { fetchProducts } from '../utils/fetch';
import { RootStackParams } from '../navigator/StackNavigator';
import ProductCard from '../components/ProductCard';
import { shuffle } from '../utils/shuffle';
import { DrawerNavigationProp } from '@react-navigation/drawer';

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

  const categories = [
    { label: 'all', key: 'all' },
    { label: 'electronics', key: 'electronics' },
    { label: 'jewelery', key: 'jewelery' },
    { label: "men's clothing", key: "men's clothing" },
    { label: "women's clothing", key: "women's clothing" },
  ];

  return (
    <View style={{ width: '100%', flex: 1 }}>
      <View style={styles.containerTop}>
        <TouchableOpacity
          style={{ marginHorizontal: 10 }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={40} />
        </TouchableOpacity>

        <ModalSelector
          data={categories}
          initValue="Select Categorie"
          onChange={({ label }) => handleChangeCategorie(label)}>
          <Text style={styles.categoryText}>{currentCategorie}</Text>
        </ModalSelector>
      </View>

      <FlatGrid
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
  categoryText: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 10,
    textAlign: 'center',
  },
  containerTop: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
});

export default HomeScreen;
