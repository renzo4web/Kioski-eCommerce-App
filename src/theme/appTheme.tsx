import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#000',
  secondary: '#fff',
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

  containerCard: {
    elevation: 1,
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    width: '100%',
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
