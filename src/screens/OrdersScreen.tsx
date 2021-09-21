import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ProductOrder, useAppState } from '../context/ProductsContext/ProductsContext';
import { styles } from '../theme/appTheme';

const OrdersScreen = () => {
  const {
    productState: { orders },
  } = useAppState();

  return (
    <View>
      {orders?.length === 0 ? (
        <Text>Orders Screen</Text>
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
