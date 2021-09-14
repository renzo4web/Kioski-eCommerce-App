import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { fetchProducts } from '../utils/fetch';
import { FlatGrid } from 'react-native-super-grid';

interface Props extends StackScreenProps<any, any> {}

const iconNames: {
  [key: string]: string;
} = {
  ['electronics']: 'desktop',
  ['jewelery']: 'glasses',
  ["men's clothing"]: 'man',
  ["women's clothing"]: 'woman',
};

const CategoryTopTab = ({ navigation }: Props) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    let current = true;

    fetchProducts('categories').then(data => {
      if (current) {
        if (data !== null) {
          setCategories(data);
        }
      }
    });

    return () => {
      current = false;
    };
  }, []);

  return (
    <View>
      <FlatGrid
        data={categories}
        keyExtractor={category => category}
        spacing={5}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginVertical: 20,
              padding: 13,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.0,
              elevation: 2,
            }}
            onPress={() => navigation.navigate('Home')}>
            <Icon name={iconNames[item]} size={100} />
            <Text style={{ fontWeight: 'bold' }}>{`${item
              .charAt(0)
              .toUpperCase()}${item.substring(1)}`}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryTopTab;
