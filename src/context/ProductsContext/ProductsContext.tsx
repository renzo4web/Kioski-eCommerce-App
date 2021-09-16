import React, { createContext, useContext, useReducer } from 'react';
import { productReducer } from '../../reducer/productsReducer';
import { Product } from '../../types/types';

export interface ProductCart extends Product {
  quantity: number;
  isFavorite?: boolean;
}

export interface ProductState {
  total: number;
  cart: ProductCart[];
  favorites: number[];
}

export interface ProductContextProps {
  productState: ProductState;
  toggleProductCart: (product: Product) => void;
  toggleFavorites: (id: number) => void;
  increaseQuantity: (id: number) => void;
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
};

export const ProductsProvider: React.FC = ({ children }) => {
  const [productState, dispatch] = useReducer(
    productReducer,
    productInitialState,
  );

  const { favorites, cart } = productState;

  const toggleProductCart = (product: Product) => {
    dispatch({
      type: cart.find(item => item.id === product.id)
        ? 'REMOVE_FROM_CART'
        : 'ADD_TO_CART',
      payload: { ...product, quantity: 1 },
    });
  };

  const toggleFavorites = (id: number) => {
    dispatch({
      type: favorites.includes(id)
        ? 'REMOVE_FROM_FAVORITES'
        : 'ADD_TO_FAVORITES',
      payload: id,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        productState,
        toggleProductCart,
        increaseQuantity: id => {},
        toggleFavorites,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useAppState = (): ProductContextProps => {
  return useContext(ProductContext);
};
