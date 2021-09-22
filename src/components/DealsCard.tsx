import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

interface Props {
  discount: number;
  text: string;
  bgColor: string;
  textColor?: string;
}

function DealsCard({ discount, text, bgColor, textColor = '#fff' }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ ...styles.button, backgroundColor: bgColor }}>
        <View style={styles.rect2}>
          <Text style={styles.loremIpsum}>-{discount}%</Text>
        </View>
        <Text style={{ ...styles.selectedDeals, color: textColor }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff3334',
    borderRadius: 14,
    height: 135,
    width: 350,
  },
  container: {
    height: 135,
    marginVertical: 10,
    width: 350,
  },
  loremIpsum: {
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginLeft: 2,
    marginTop: 11,
  },
  rect2: {
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 6,
    height: 44,
    marginLeft: 8,
    marginTop: 8,
    width: 44,
  },
  selectedDeals: {
    color: 'rgba(255,255,255,1)',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 30,
  },
});

export default DealsCard;
