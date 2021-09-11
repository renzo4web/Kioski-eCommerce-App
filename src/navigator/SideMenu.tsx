import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import OrdersScreen from '../screens/OrdersScreen';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const { width, height } = useWindowDimensions();

  console.log(width);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 700 ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: width >= 700 ? false : true, // Oculta la hamburguesa
      }}
      drawerContent={props => <InternMenu {...props} />}>
      <Drawer.Screen
        name="StackNavigator"
        options={{ title: 'Products' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="OrdersScreen"
        options={{ title: 'Orders' }}
        component={OrdersScreen}
      />
    </Drawer.Navigator>
  );
};

const InternMenu = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* AVATAR CONTAINER */}
      <View style={styles.alignCenter}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/73029154?v=4',
          }}
        />
      </View>

      {/* OPTIONS MENU CONTAINER */}
      {/* Only navigate to screens that Drawer.navigator contain */}
      <View style={styles.alignCenter}>
        <MenuButton onPress={() => navigation.navigate('StackNavigator')}>
          Products
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate('OrdersScreen')}>
          Orders
        </MenuButton>
      </View>
    </DrawerContentScrollView>
  );
};

function MenuButton({
  onPress,
  children,
}: {
  onPress: (event: GestureResponderEvent) => void;
  children: string;
}) {
  return (
    <TouchableOpacity style={styles.drawerBtn} onPress={onPress}>
      <Text style={styles.drawerText}>{children}</Text>
    </TouchableOpacity>
  );
}
