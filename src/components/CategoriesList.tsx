import React from 'react';
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
      numColumns={2}
      columnWrapperStyle={styles.row}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 20,
      }}
      data={categories}
      keyExtractor={categorie => categorie}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onChange(item)}>
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
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
export default CategoriesList;
