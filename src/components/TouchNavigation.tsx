import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  goTo: () => void;
  title: string;
  size?: number;
}

const TouchNavigation = ({ goTo, title, size = 25 }: Props) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={goTo}>
        <Text style={{ fontSize: size }}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 10,
    marginVertical: 15,
  },
});

export default TouchNavigation;
