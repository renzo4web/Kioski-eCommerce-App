import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import ProductStars from '../components/ProductStars';
import { useAppState } from '../context/ProductsContext/ProductsContext';
import { colors } from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

const ProductScreen = ({ route }: Props) => {
  const { toggleProductCart, productState } = useAppState();

  const product = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: 10,
          }}>
          <ProductStars starsCount={product.rating.rate} />
          <Text>{product.rating.count}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={styles.pricetag}>${product.price}</Text>

          <TouchableOpacity
            style={styles.addToCart}
            onPress={() => toggleProductCart(product)}>
            <Text style={styles.addToCartText}>
              {productState.cart.some(pr => pr.id === product.id)
                ? 'REMOVE'
                : 'ADD TO CART'}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addToCart: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
    flex: 1,
    marginHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 20,
    width: '100%',
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 20,
  },
  image: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: '50%',
    marginTop: 10,
    padding: 20,
    width: '100%',
  },
  pricetag: {
    fontSize: 30,
    fontWeight: '900',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductScreen;
