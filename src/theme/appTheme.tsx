import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#2a9d8f',
  secondary: '#e76f51',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },

  alignCenter: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },

  drawerText: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  drawerBtn: {
    padding: 5,
    borderRadius: 10,
    borderColor: 'gray',
    borderStyle: 'dotted',
    borderWidth: 3,
  },

  avatar: {
    width: 100,
    height: 100,
  },
});
