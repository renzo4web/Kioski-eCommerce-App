import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DealsCard from '../components/DealsCard';

const DealsTab = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.title}>Top products. Incredible prices.</Text>
      <View>
        <DealsCard bgColor="red" discount={80} text={'Selected Deals'} />
        <DealsCard bgColor="orange" discount={20} text={'Electronics'} textColor="#000" />
        <DealsCard bgColor="purple" discount={50} text={'Most Rated'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default DealsTab;
