import React, { useCallback, useState } from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/appTheme';

const CategoriesList = ({ onChange }: { onChange: (categorie: string) => void }) => {
  const categories = [
    'all',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  return (
    <FlatList
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
      }}
      data={categories}
      keyExtractor={categorie => categorie}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ flexWrap: 'wrap' }} onPress={() => onChange(item)}>
          <Text style={styles.badge}>{item}</Text>
        </TouchableOpacity>
      )}
    />
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
    margin: 20,
  },
});
export default CategoriesList;
