import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TouchNavigation from '../components/TouchNavigation';
import { ProductOrder, useAppState } from '../context/ProductsContext/ProductsContext';
import { styles } from '../theme/appTheme';

interface Props {
  navigate: (dir: string) => void;
}

const OrdersScreen = ({ navigation }: { navigation: Props }) => {
  const {
    productState: { orders },
  } = useAppState();

  return (
    <View>
      {orders?.length === 0 ? (
        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Your cart is empty</Text>

          <TouchNavigation
            title="Continue Shopping"
            goTo={() => navigation.navigate('TopTabNavigator')}
          />
        </View>
      ) : (
        <View>
          <FlatList
            data={orders}
            keyExtractor={({ orderId }) => orderId}
            renderItem={({ item: order }: { item: ProductOrder }) => (
              <View style={{ ...styles.containerCard, backgroundColor: '#fff' }}>
                <Text style={{ borderBottomWidth: 1, fontWeight: 'bold' }}>
                  Order ID: {order.orderId}
                </Text>
                <FlatList
                  data={order.items}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                    <View>
                      <Text>- {item.title}</Text>
                      <Text>Quantity: {item.quantity}</Text>
                    </View>
                  )}
                />
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default OrdersScreen;
