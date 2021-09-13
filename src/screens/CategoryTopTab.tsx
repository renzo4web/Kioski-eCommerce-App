import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchProducts } from '../utils/fetch';

const CategoryTopTab = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let current = true;

    fetchProducts('categories').then(data => {
      if (current) {
        setCategories(data);
      }
    });

    return () => {
      current = false;
    };
  }, []);

  return (
    <View>
      <Text>CategoryTopTab</Text>

      <FlatList
        data={categories}
        keyExtractor={category => category}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default CategoryTopTab;
