import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenu } from './src/navigator/SideMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenu />
    </NavigationContainer>
  );
};

export default App;
