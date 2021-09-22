import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import OrdersScreen from '../screens/OrdersScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 700 ? 'permanent' : 'front',
        headerShown: width < 700,
      }}
      drawerContent={props => <InternMenu {...props} />}>
      <Drawer.Screen
        name="Tabs"
        options={{
          headerShown: false,
        }}
        component={Tabs}
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
    <DrawerContentScrollView contentContainerStyle={styles.drawerContentContainer}>
      {/* AVATAR CONTAINER */}
      <View style={styles.containerAvatar}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/73029154?v=4',
          }}
        />
        <View style={{ flex: 1 }}>
          <Text>renzo</Text>
          <Text style={{ fontWeight: 'bold' }}>renzo4web@user.com</Text>
        </View>
      </View>

      {/* OPTIONS MENU CONTAINER */}
      {/* Only navigate to screens that Drawer.navigator contain */}
      <View style={styles.sideMenuContainer}>
        <MenuButton onPress={() => navigation.navigate('Tabs')} iconName="home-outline">
          Products
        </MenuButton>
        <MenuButton
          onPress={() => navigation.navigate('OrdersScreen')}
          iconName="calendar-outline">
          Orders
        </MenuButton>
      </View>

      {/* SIGN OUT */}

      <View style={styles.signOutContainer}>
        <MenuButton
          iconPosition="left"
          onPress={() => console.log('click')}
          iconName="log-out-outline">
          Sign out
        </MenuButton>
      </View>
    </DrawerContentScrollView>
  );
};

interface MenuButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  children: string;
  iconName: string;
  iconPosition?: 'left' | 'right';
}

function MenuButton({
  onPress,
  children,
  iconName,
  iconPosition = 'left',
}: MenuButtonProps) {
  return (
    <TouchableOpacity style={styles.drawerBtn} onPress={onPress}>
      {iconPosition === 'left' ? (
        <>
          <Icon name={iconName} size={30} />
          <Text style={styles.drawerText}>{children}</Text>
        </>
      ) : (
        <>
          <Text style={styles.drawerText}>{children}</Text>
          <Icon name={iconName} size={30} />
        </>
      )}
    </TouchableOpacity>
  );
}
