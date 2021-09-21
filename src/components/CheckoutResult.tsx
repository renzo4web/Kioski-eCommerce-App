import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  subtotal: number;
  total: number;
}

const CheckoutResult: React.FC<Props> = ({ subtotal, total }) => {
  subtotal = Number(subtotal.toFixed(2));
  total = Number(total.toFixed(2));

  return (
    <View style={{ alignItems: 'center' }}>
      <CheckoutResultText title="Subtotal" usd={subtotal} />
      <CheckoutResultText title="Shipping" usd={4.99} />
      <CheckoutResultText title="Total" usd={total} />
    </View>
  );
};

const CheckoutResultText = ({ title, usd }: { title: string; usd: number }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
      }}>
      <Text style={{ flex: 2, fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
      <Text style={{ fontWeight: 'bold', marginRight: 5, fontSize: 20 }}>${usd}</Text>
      <Text style={{ fontSize: 20 }}>USD</Text>
    </View>
  );
};

export default CheckoutResult;
