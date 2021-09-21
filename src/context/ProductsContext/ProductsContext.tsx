import React, { createContext, useContext, useReducer } from 'react';
import { productReducer } from '../../reducer/productsReducer';
import { Product } from '../../types/types';

export interface ProductCart extends Product {
  quantity: number;
  isFavorite?: boolean;
}

export interface ProductOrder {
  orderId: number;
  items: ProductCart[];
}

export interface ProductState {
  total: number;
  cart: ProductCart[];
  favorites: Product[];
  orders: ProductOrder[];
}

export interface ProductContextProps {
  productState: ProductState;
  toggleProductCart: (product: Product) => void;
  toggleFavorites: (id: Product) => void;
  increaseProductUnit: (id: number) => void;
  decreaseProductUnit: (id: number) => void;
  checkoutOrder: () => void;
}
/*
 * Context
 *
 */

export const ProductContext = createContext({} as ProductContextProps);

export const productInitialState: ProductState = {
  total: 0,
  cart: [],
  favorites: [],
  orders: [],
};

export const ProductsProvider: React.FC = ({ children }) => {
  const [productState, dispatch] = useReducer(productReducer, productInitialState);

  const { favorites, cart } = productState;

  const toggleProductCart = (product: Product) => {
    dispatch({
      type: cart.find(item => item.id === product.id)
        ? 'REMOVE_FROM_CART'
        : 'ADD_TO_CART',
      payload: { ...product, quantity: 1 },
    });
  };

  const toggleFavorites = (product: Product) => {
    dispatch({
      type: favorites.find(item => item.id === product.id)
        ? 'REMOVE_FROM_FAVORITES'
        : 'ADD_TO_FAVORITES',
      payload: product,
    });
  };

  const increaseProductUnit = (id: number) => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: id,
    });
  };

  const decreaseProductUnit = (id: number) => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: id,
    });
  };

  const checkoutOrder = () => {
    dispatch({
      type: 'CHECKOUT',
    });
  };

  return (
    <ProductContext.Provider
      value={{
        productState,
        toggleProductCart,
        toggleFavorites,
        increaseProductUnit,
        decreaseProductUnit,
        checkoutOrder,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useAppState = (): ProductContextProps => {
  return useContext(ProductContext);
};
