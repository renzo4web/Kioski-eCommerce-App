import React, { createContext, useContext, useReducer } from 'react';
import { productReducer } from '../../reducer/productsReducer';

interface Product {
  id: string;
  name: string;
  proce: number;
  quantity?: number;
  isFavorite: boolean;
}

export interface ProductState {
  total: number;
  cart: Product[];
  favorites: number[];
}

export interface ProductContextProps {
  productState: ProductState;
  addToCart: (id: number) => void;
  addToFavorites: (id: number) => void;
  increaseQuantity: (id: number) => void;
  // add to favorites
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

  const addToCart = (id: number) => {
    dispatch({ type: 'ADD_TO_CART' });
  };

  const addToFavorites = (id: number) => {
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: id,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        productState,
        addToCart,
        increaseQuantity: id => {},
        addToFavorites,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(ProductContext);
};
