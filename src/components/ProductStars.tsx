import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';

const ProductStars = ({ starsCount }: { starsCount: number }) => {
  const isEven = starsCount % 2 === 0;
  const array = Array.from({ length: Math.floor(starsCount) });

  return (
    <View style={styles.container}>
      {array.map((_, idx) => (
        <Icon
          key={`${idx}-star`}
          name={idx === array.length - 1 && !isEven ? 'star-half' : 'star'}
          size={20}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ProductStars;
