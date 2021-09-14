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
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 10,
  },

  alignCenter: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },

  drawerText: {
    fontSize: 20,
    marginLeft: 15,
  },

  drawerBtn: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  containerAvatar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
    paddingHorizontal: 10,
  },

  sideMenuContainer: {
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    flex: 2,
  },

  drawerContentContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  signOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 'auto',
    width: '90%',
  },
});
